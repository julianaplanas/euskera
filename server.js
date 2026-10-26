const express = require("express");
const Database = require("better-sqlite3");
const cookieParser = require("cookie-parser");
const crypto = require("crypto");
const path = require("path");
const fs = require("fs");

const PORT = process.env.PORT || 3000;
const DB_PATH = process.env.DB_PATH || path.join(__dirname, "data", "app.db");
fs.mkdirSync(path.dirname(DB_PATH), { recursive: true });

const db = new Database(DB_PATH);
db.pragma("journal_mode = WAL");
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT UNIQUE NOT NULL,
    salt TEXT NOT NULL,
    hash TEXT NOT NULL,
    xp INTEGER NOT NULL DEFAULT 0,
    streak INTEGER NOT NULL DEFAULT 0,
    last_day TEXT,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  );
  CREATE TABLE IF NOT EXISTS progress (
    user_id INTEGER NOT NULL,
    lesson_id TEXT NOT NULL,
    rounds INTEGER NOT NULL DEFAULT 0,
    best INTEGER NOT NULL DEFAULT 0,
    PRIMARY KEY (user_id, lesson_id)
  );
  CREATE TABLE IF NOT EXISTS sessions (
    token TEXT PRIMARY KEY,
    user_id INTEGER NOT NULL,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  );
  CREATE TABLE IF NOT EXISTS rounds (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    lesson_id TEXT,
    ok INTEGER NOT NULL,
    total INTEGER NOT NULL,
    day TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  );
`);

try { db.exec("ALTER TABLE users ADD COLUMN weak TEXT NOT NULL DEFAULT '[]'"); } catch (e) {}

const hashPin = (pin, salt) => crypto.scryptSync(String(pin), salt, 32).toString("hex");
const norm = (s) => String(s || "").trim().toLowerCase();
const madridDay = (offsetDays = 0) => {
  const d = new Date(Date.now() + offsetDays * 86400000);
  return d.toLocaleDateString("sv-SE", { timeZone: process.env.TZ_NAME || "Europe/Madrid" }); // YYYY-MM-DD
};

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public"), { extensions: ["html"] }));

function auth(req, res, next) {
  const token = req.cookies.session;
  const row = token && db.prepare("SELECT user_id FROM sessions WHERE token = ?").get(token);
  if (!row) return res.status(401).json({ error: "No has iniciado sesión." });
  req.user = db.prepare("SELECT * FROM users WHERE id = ?").get(row.user_id);
  if (!req.user) return res.status(401).json({ error: "Sesión inválida." });
  next();
}

function setSession(res, userId) {
  const token = crypto.randomBytes(32).toString("hex");
  db.prepare("INSERT INTO sessions (token, user_id) VALUES (?, ?)").run(token, userId);
  res.cookie("session", token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 365 * 86400000,
  });
}

function profile(user) {
  const today = madridDay(), yesterday = madridDay(-1);
  const streak = user.last_day === today || user.last_day === yesterday ? user.streak : 0;
  const lessons = {};
  for (const p of db.prepare("SELECT lesson_id, rounds, best FROM progress WHERE user_id = ?").all(user.id)) {
    lessons[p.lesson_id] = { rounds: p.rounds, best: p.best };
  }
  let weak = []; try { weak = JSON.parse(user.weak || "[]"); } catch (e) {}
  return { name: user.name, xp: user.xp, streak, practicedToday: user.last_day === today, lessons, weak };
}

app.post("/api/register", (req, res) => {
  const name = norm(req.body.name), pin = String(req.body.pin || "");
  if (!/^[a-z0-9àáâäèéêëìíîïòóôöùúûüñç._-]{2,20}$/.test(name)) return res.status(400).json({ error: "El nombre debe tener entre 2 y 20 letras o números." });
  if (!/^\d{4,8}$/.test(pin)) return res.status(400).json({ error: "El PIN debe tener entre 4 y 8 cifras." });
  if (process.env.INVITE_CODE && String(req.body.invite || "") !== process.env.INVITE_CODE) return res.status(403).json({ error: "Código de invitación incorrecto." });
  if (db.prepare("SELECT 1 FROM users WHERE name = ?").get(name)) return res.status(409).json({ error: "Ese nombre ya existe. Inicia sesión con tu PIN." });
  const salt = crypto.randomBytes(16).toString("hex");
  const info = db.prepare("INSERT INTO users (name, salt, hash) VALUES (?, ?, ?)").run(name, salt, hashPin(pin, salt));
  setSession(res, info.lastInsertRowid);
  res.json(profile(db.prepare("SELECT * FROM users WHERE id = ?").get(info.lastInsertRowid)));
});

app.post("/api/login", (req, res) => {
  const name = norm(req.body.name), pin = String(req.body.pin || "");
  const user = db.prepare("SELECT * FROM users WHERE name = ?").get(name);
  if (!user) return res.status(404).json({ error: "No existe ese usuario.", unknown: true });
  const ok = crypto.timingSafeEqual(Buffer.from(user.hash, "hex"), Buffer.from(hashPin(pin, user.salt), "hex"));
  if (!ok) return res.status(401).json({ error: "PIN incorrecto." });
  setSession(res, user.id);
  res.json(profile(user));
});

app.post("/api/logout", (req, res) => {
  if (req.cookies.session) db.prepare("DELETE FROM sessions WHERE token = ?").run(req.cookies.session);
  res.clearCookie("session");
  res.json({ ok: true });
});

app.get("/api/me", auth, (req, res) => res.json(profile(req.user)));

app.post("/api/round", auth, (req, res) => {
  const { lessonId, ok, total } = req.body;
  if (!Number.isInteger(ok) || !Number.isInteger(total) || total < 1 || ok < 0 || ok > total) return res.status(400).json({ error: "Resultado inválido." });
  const today = madridDay(), yesterday = madridDay(-1);
  const u = req.user;
  let streak = u.streak;
  if (u.last_day !== today) streak = u.last_day === yesterday ? u.streak + 1 : 1;
  const gained = ok * 10;
  const tx = db.transaction(() => {
    db.prepare("UPDATE users SET xp = xp + ?, streak = ?, last_day = ? WHERE id = ?").run(gained, streak, today, u.id);
    if (lessonId) {
      db.prepare(`INSERT INTO progress (user_id, lesson_id, rounds, best) VALUES (?, ?, 1, ?)
        ON CONFLICT(user_id, lesson_id) DO UPDATE SET rounds = rounds + 1, best = MAX(best, excluded.best)`).run(u.id, lessonId, ok);
    }
    db.prepare("INSERT INTO rounds (user_id, lesson_id, ok, total, day) VALUES (?, ?, ?, ?, ?)").run(u.id, lessonId || null, ok, total, today);
  });
  tx();
  res.json({ gained, ...profile(db.prepare("SELECT * FROM users WHERE id = ?").get(u.id)) });
});

// Palabras difíciles: lista de [euskera, castellano] que el cliente mantiene (falladas recientemente)
app.post("/api/weak", auth, (req, res) => {
  const weak = Array.isArray(req.body.weak) ? req.body.weak.filter(w => Array.isArray(w) && w.length === 2).slice(0, 200) : [];
  db.prepare("UPDATE users SET weak = ? WHERE id = ?").run(JSON.stringify(weak), req.user.id);
  res.json({ ok: true, weak });
});

// Ranking sencillo entre los usuarios de la app
app.get("/api/board", auth, (req, res) => {
  res.json(db.prepare("SELECT name, xp FROM users ORDER BY xp DESC LIMIT 10").all());
});

app.listen(PORT, () => console.log(`Euskara praktika en http://localhost:${PORT} (db: ${DB_PATH})`));
