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
    id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT UNIQUE NOT NULL, salt TEXT NOT NULL, hash TEXT NOT NULL,
    xp INTEGER NOT NULL DEFAULT 0, streak INTEGER NOT NULL DEFAULT 0, last_day TEXT,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  );
  CREATE TABLE IF NOT EXISTS progress (user_id INTEGER NOT NULL, lesson_id TEXT NOT NULL, rounds INTEGER NOT NULL DEFAULT 0, best INTEGER NOT NULL DEFAULT 0, PRIMARY KEY (user_id, lesson_id));
  CREATE TABLE IF NOT EXISTS sessions (token TEXT PRIMARY KEY, user_id INTEGER NOT NULL, created_at TEXT NOT NULL DEFAULT (datetime('now')));
  CREATE TABLE IF NOT EXISTS rounds (id INTEGER PRIMARY KEY AUTOINCREMENT, user_id INTEGER NOT NULL, lesson_id TEXT, ok INTEGER NOT NULL, total INTEGER NOT NULL, day TEXT NOT NULL, created_at TEXT NOT NULL DEFAULT (datetime('now')));
  CREATE TABLE IF NOT EXISTS items (
    user_id INTEGER NOT NULL, key TEXT NOT NULL, eu TEXT NOT NULL, es TEXT NOT NULL, lesson_id TEXT,
    interval REAL NOT NULL DEFAULT 0, ease REAL NOT NULL DEFAULT 2.3, due TEXT NOT NULL,
    reps INTEGER NOT NULL DEFAULT 0, lapses INTEGER NOT NULL DEFAULT 0, last TEXT,
    PRIMARY KEY (user_id, key)
  );
  CREATE TABLE IF NOT EXISTS challenges (
    id INTEGER PRIMARY KEY AUTOINCREMENT, from_id INTEGER NOT NULL, to_id INTEGER NOT NULL, kind TEXT NOT NULL,
    payload TEXT NOT NULL, from_result TEXT, to_result TEXT, status TEXT NOT NULL DEFAULT 'open',
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  );
`);
for (const sql of ["ALTER TABLE users ADD COLUMN weak TEXT NOT NULL DEFAULT '[]'", "ALTER TABLE users ADD COLUMN profile TEXT NOT NULL DEFAULT '{}'"]) { try { db.exec(sql); } catch (e) {} }

const hashPin = (pin, salt) => crypto.scryptSync(String(pin), salt, 32).toString("hex");
const norm = (s) => String(s || "").trim().toLowerCase();
const madridDay = (offsetDays = 0) => new Date(Date.now() + offsetDays * 86400000).toLocaleDateString("sv-SE", { timeZone: process.env.TZ_NAME || "Europe/Madrid" });
const addDays = (day, n) => new Date(new Date(day + "T12:00:00Z").getTime() + n * 86400000).toISOString().slice(0, 10);
const J = (s, d) => { try { return JSON.parse(s); } catch (e) { return d; } };

const app = express();
app.use(express.json({ limit: "200kb" }));
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
  res.cookie("session", token, { httpOnly: true, sameSite: "lax", secure: process.env.NODE_ENV === "production", maxAge: 365 * 86400000 });
}
function itemStats(userId) {
  const today = madridDay();
  const r = db.prepare(`SELECT COUNT(*) learned, SUM(CASE WHEN interval >= 7 THEN 1 ELSE 0 END) consolidated,
    SUM(CASE WHEN due <= ? THEN 1 ELSE 0 END) due FROM items WHERE user_id = ?`).get(today, userId);
  return { learned: r.learned || 0, consolidated: r.consolidated || 0, due: r.due || 0 };
}
function profile(user) {
  const today = madridDay(), yesterday = madridDay(-1);
  const streak = user.last_day === today || user.last_day === yesterday ? user.streak : 0;
  const lessons = {};
  for (const p of db.prepare("SELECT lesson_id, rounds, best FROM progress WHERE user_id = ?").all(user.id)) lessons[p.lesson_id] = { rounds: p.rounds, best: p.best };
  const pending = db.prepare("SELECT COUNT(*) n FROM challenges WHERE to_id = ? AND status = 'open' AND to_result IS NULL").get(user.id).n;
  return { name: user.name, xp: user.xp, streak, practicedToday: user.last_day === today, lessons, weak: J(user.weak, []), profile: J(user.profile, {}), items: itemStats(user.id), pendingChallenges: pending, today };
}

// ---------- cuentas ----------
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
  if (!crypto.timingSafeEqual(Buffer.from(user.hash, "hex"), Buffer.from(hashPin(pin, user.salt), "hex"))) return res.status(401).json({ error: "PIN incorrecto." });
  setSession(res, user.id);
  res.json(profile(user));
});
app.post("/api/logout", (req, res) => { if (req.cookies.session) db.prepare("DELETE FROM sessions WHERE token = ?").run(req.cookies.session); res.clearCookie("session"); res.json({ ok: true }); });
app.get("/api/me", auth, (req, res) => res.json(profile(req.user)));
app.post("/api/profile", auth, (req, res) => {
  const p = req.body || {};
  const clean = { gender: p.gender === "neska" || p.gender === "mutila" ? p.gender : null, age: Number.isInteger(p.age) && p.age > 0 && p.age < 120 ? p.age : null,
    nebak: Math.max(0, Math.min(9, p.nebak | 0)), ahizpak: Math.max(0, Math.min(9, p.ahizpak | 0)), town: String(p.town || "").slice(0, 40) };
  db.prepare("UPDATE users SET profile = ? WHERE id = ?").run(JSON.stringify(clean), req.user.id);
  res.json(clean);
});
app.get("/api/users", auth, (req, res) => res.json(db.prepare("SELECT name FROM users WHERE id != ? ORDER BY name").all(req.user.id).map(u => u.name)));

// ---------- repetición espaciada ----------
app.get("/api/items", auth, (req, res) => res.json(db.prepare("SELECT key, eu, es, lesson_id, interval, ease, due, reps, lapses FROM items WHERE user_id = ?").all(req.user.id)));
app.post("/api/items/introduce", auth, (req, res) => {
  const today = madridDay();
  const ins = db.prepare("INSERT OR IGNORE INTO items (user_id, key, eu, es, lesson_id, due) VALUES (?, ?, ?, ?, ?, ?)");
  const list = Array.isArray(req.body.items) ? req.body.items.slice(0, 200) : [];
  const tx = db.transaction(() => { for (const it of list) if (it && it.key && it.eu && it.es) ins.run(req.user.id, String(it.key).slice(0, 120), String(it.eu).slice(0, 200), String(it.es).slice(0, 200), it.lesson_id ? String(it.lesson_id) : null, today); });
  tx();
  res.json(itemStats(req.user.id));
});
// grade: 0 fallo · 1 difícil (con ayuda) · 2 bien · 3 fácil
app.post("/api/review", auth, (req, res) => {
  const { key, grade, eu, es, lesson_id } = req.body;
  if (!key || ![0, 1, 2, 3].includes(grade)) return res.status(400).json({ error: "Revisión inválida." });
  const today = madridDay();
  let it = db.prepare("SELECT * FROM items WHERE user_id = ? AND key = ?").get(req.user.id, key);
  if (!it) { if (!eu || !es) return res.status(400).json({ error: "Ítem desconocido." }); it = { interval: 0, ease: 2.3, reps: 0, lapses: 0, eu, es, lesson_id: lesson_id || null }; }
  let { interval, ease, reps, lapses } = it;
  if (grade === 0) { lapses++; interval = 0; ease = Math.max(1.3, ease - 0.2); }
  else if (grade === 1) { interval = interval < 1 ? 1 : Math.max(1, Math.round(interval * 1.2)); ease = Math.max(1.3, ease - 0.05); }
  else if (grade === 2) { interval = interval < 1 ? 1 : interval < 3 ? 3 : Math.round(interval * ease); }
  else { interval = interval < 1 ? 2 : interval < 3 ? 5 : Math.round(interval * ease * 1.3); ease = Math.min(3, ease + 0.1); }
  reps++;
  const due = interval === 0 ? today : addDays(today, interval);
  db.prepare(`INSERT INTO items (user_id, key, eu, es, lesson_id, interval, ease, due, reps, lapses, last) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    ON CONFLICT(user_id, key) DO UPDATE SET interval = excluded.interval, ease = excluded.ease, due = excluded.due, reps = excluded.reps, lapses = excluded.lapses, last = excluded.last`)
    .run(req.user.id, key, it.eu, it.es, it.lesson_id, interval, ease, due, reps, lapses, today);
  const gained = [0, 5, 10, 10][grade];
  if (gained) db.prepare("UPDATE users SET xp = xp + ? WHERE id = ?").run(gained, req.user.id);
  res.json({ key, interval, due, reps, lapses, gained, items: itemStats(req.user.id) });
});

// ---------- rondas (día practicado, racha, lección) ----------
app.post("/api/round", auth, (req, res) => {
  const { lessonId, ok, total } = req.body;
  if (!Number.isInteger(ok) || !Number.isInteger(total) || total < 1 || ok < 0 || ok > total) return res.status(400).json({ error: "Resultado inválido." });
  const today = madridDay(), yesterday = madridDay(-1);
  const u = req.user; let streak = u.streak;
  if (u.last_day !== today) streak = u.last_day === yesterday ? u.streak + 1 : 1;
  db.transaction(() => {
    db.prepare("UPDATE users SET streak = ?, last_day = ? WHERE id = ?").run(streak, today, u.id);
    if (lessonId) db.prepare(`INSERT INTO progress (user_id, lesson_id, rounds, best) VALUES (?, ?, 1, ?) ON CONFLICT(user_id, lesson_id) DO UPDATE SET rounds = rounds + 1, best = MAX(best, excluded.best)`).run(u.id, lessonId, ok);
    db.prepare("INSERT INTO rounds (user_id, lesson_id, ok, total, day) VALUES (?, ?, ?, ?, ?)").run(u.id, lessonId || null, ok, total, today);
  })();
  res.json(profile(db.prepare("SELECT * FROM users WHERE id = ?").get(u.id)));
});
app.post("/api/weak", auth, (req, res) => {
  const weak = Array.isArray(req.body.weak) ? req.body.weak.filter(w => Array.isArray(w) && w.length === 2).slice(0, 200) : [];
  db.prepare("UPDATE users SET weak = ? WHERE id = ?").run(JSON.stringify(weak), req.user.id);
  res.json({ ok: true, weak });
});

// ---------- multijugador ----------
const chView = (c, meId) => {
  const from = db.prepare("SELECT name FROM users WHERE id = ?").get(c.from_id), to = db.prepare("SELECT name FROM users WHERE id = ?").get(c.to_id);
  return { id: c.id, kind: c.kind, from: from ? from.name : "?", to: to ? to.name : "?", mine: c.from_id === meId, forMe: c.to_id === meId, payload: J(c.payload, {}), fromResult: J(c.from_result, null), toResult: J(c.to_result, null), status: c.status, createdAt: c.created_at };
};
app.get("/api/challenges", auth, (req, res) => {
  const rows = db.prepare("SELECT * FROM challenges WHERE from_id = ? OR to_id = ? ORDER BY id DESC LIMIT 40").all(req.user.id, req.user.id);
  res.json(rows.map(c => chView(c, req.user.id)));
});
app.post("/api/challenges", auth, (req, res) => {
  const to = db.prepare("SELECT id FROM users WHERE name = ?").get(norm(req.body.to));
  if (!to || to.id === req.user.id) return res.status(400).json({ error: "Elige a otra persona." });
  const kind = req.body.kind === "task" ? "task" : "duel";
  const payload = req.body.payload && typeof req.body.payload === "object" ? req.body.payload : {};
  const info = db.prepare("INSERT INTO challenges (from_id, to_id, kind, payload, from_result) VALUES (?, ?, ?, ?, ?)").run(req.user.id, to.id, kind, JSON.stringify(payload), req.body.fromResult ? JSON.stringify(req.body.fromResult) : null);
  res.json(chView(db.prepare("SELECT * FROM challenges WHERE id = ?").get(info.lastInsertRowid), req.user.id));
});
app.post("/api/challenges/:id/result", auth, (req, res) => {
  const c = db.prepare("SELECT * FROM challenges WHERE id = ?").get(req.params.id);
  if (!c || (c.from_id !== req.user.id && c.to_id !== req.user.id)) return res.status(404).json({ error: "Reto no encontrado." });
  const col = c.from_id === req.user.id ? "from_result" : "to_result";
  const result = req.body.result && typeof req.body.result === "object" ? req.body.result : {};
  db.prepare(`UPDATE challenges SET ${col} = ? WHERE id = ?`).run(JSON.stringify(result), c.id);
  const c2 = db.prepare("SELECT * FROM challenges WHERE id = ?").get(c.id);
  if (c2.from_result && c2.to_result) db.prepare("UPDATE challenges SET status = 'done' WHERE id = ?").run(c.id);
  res.json(chView(db.prepare("SELECT * FROM challenges WHERE id = ?").get(c.id), req.user.id));
});

// ---------- estadísticas ----------
app.get("/api/stats", auth, (req, res) => {
  const today = madridDay(), yesterday = madridDay(-1);
  const days = Array.from({ length: 7 }, (_, i) => madridDay(i - 6));
  const users = db.prepare("SELECT id, name, xp, streak, last_day FROM users ORDER BY xp DESC").all();
  const totals = db.prepare("SELECT user_id, COUNT(*) n, SUM(ok) ok, SUM(total) total FROM rounds GROUP BY user_id").all();
  const week = db.prepare("SELECT user_id, day, SUM(ok)*10 xp FROM rounds WHERE day >= ? GROUP BY user_id, day").all(days[0]);
  const lessonsDone = db.prepare("SELECT user_id, COUNT(*) n FROM progress WHERE rounds >= 3 GROUP BY user_id").all();
  const by = (rows, f) => Object.fromEntries(rows.map(r => [r.user_id, f(r)]));
  const T = by(totals, r => r), L = by(lessonsDone, r => r.n);
  res.json({ days, users: users.map(u => {
    const t = T[u.id] || { n: 0, ok: 0, total: 0 }; const it = itemStats(u.id);
    const perDay = days.map(d => { const w = week.find(x => x.user_id === u.id && x.day === d); return w ? w.xp : 0; });
    return { name: u.name, me: u.id === req.user.id, xp: u.xp, streak: u.last_day === today || u.last_day === yesterday ? u.streak : 0, rounds: t.n,
      accuracy: t.total ? Math.round(t.ok / t.total * 100) : 0, lessonsDone: L[u.id] || 0, learned: it.learned, consolidated: it.consolidated,
      weekXp: perDay.reduce((a, b) => a + b, 0), perDay, practicedToday: u.last_day === today };
  }) });
});
app.get("/api/board", auth, (req, res) => res.json(db.prepare("SELECT name, xp FROM users ORDER BY xp DESC LIMIT 10").all()));

// ---------- audio en euskera (generado una vez por frase y guardado en disco) ----------
const AUDIO_DIR = path.join(path.dirname(DB_PATH), "audio");
fs.mkdirSync(AUDIO_DIR, { recursive: true });
const VOICE = process.env.TTS_VOICE || "eu-ES-AinhoaNeural";
const ttsProvider = process.env.AZURE_TTS_KEY ? "azure" : "edge";
const ssml = (text) => `<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="eu-ES"><voice name="${VOICE}"><prosody rate="-10%">${text.replace(/[<>&]/g, c => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;" }[c]))}</prosody></voice></speak>`;
async function synthAzure(text) {
  const region = process.env.AZURE_TTS_REGION || "westeurope";
  const r = await fetch(`https://${region}.tts.speech.microsoft.com/cognitiveservices/v1`, { method: "POST", headers: { "Ocp-Apim-Subscription-Key": process.env.AZURE_TTS_KEY, "Content-Type": "application/ssml+xml", "X-Microsoft-OutputFormat": "audio-24khz-48kbitrate-mono-mp3", "User-Agent": "euskara-praktika" }, body: ssml(text) });
  if (!r.ok) throw new Error("Azure TTS " + r.status + " " + (await r.text()).slice(0, 200));
  return Buffer.from(await r.arrayBuffer());
}
let edgeTTS = null, edgeVoiceOk = null;
async function synthEdge(text) {
  const { MsEdgeTTS, OUTPUT_FORMAT } = require("msedge-tts");
  if (!edgeTTS) {
    const t = new MsEdgeTTS();
    if (edgeVoiceOk === null) {
      try { const voices = await t.getVoices(); edgeVoiceOk = voices.some(v => v.ShortName === VOICE); console.log(`Edge TTS: voz ${VOICE} ${edgeVoiceOk ? "disponible" : "NO disponible"}; voces eu-ES: ${voices.filter(v => /^eu-/i.test(v.Locale || v.ShortName)).map(v => v.ShortName).join(", ") || "ninguna"}`); }
      catch (e) { console.log("Edge TTS: no se pudo listar voces:", e.message); }
    }
    if (edgeVoiceOk === false) throw new Error(`La voz ${VOICE} no existe en Edge TTS. Configura AZURE_TTS_KEY (vía oficial).`);
    await t.setMetadata(VOICE, OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3);
    edgeTTS = t;
  }
  const chunks = [];
  await new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error("Edge TTS: tiempo agotado")), 15000);
    try {
      const { audioStream } = edgeTTS.toStream(text, { rate: 0.9 });
      audioStream.on("data", d => chunks.push(d));
      audioStream.on("end", () => { clearTimeout(timer); resolve(); });
      audioStream.on("close", () => { clearTimeout(timer); resolve(); });
      audioStream.on("error", e => { clearTimeout(timer); reject(e); });
    } catch (e) { clearTimeout(timer); reject(e); }
  });
  if (!chunks.length) { try { edgeTTS.close(); } catch (e) {} edgeTTS = null; throw new Error("Edge TTS devolvió audio vacío"); }
  return Buffer.concat(chunks);
}
process.on("unhandledRejection", e => { console.error("TTS/promesa no manejada:", e && (e.message || e)); try { edgeTTS && edgeTTS.close(); } catch (x) {} edgeTTS = null; });
const inflight = new Map();
let ttsBroken = false;
app.get("/api/tts/status", (req, res) => res.json({ ok: !ttsBroken, provider: ttsProvider, voice: VOICE }));
app.get("/api/tts", async (req, res) => {
  const text = String(req.query.text || "").trim().slice(0, 200);
  if (!text) return res.status(400).end();
  const file = path.join(AUDIO_DIR, crypto.createHash("sha1").update(VOICE + "|" + text).digest("hex") + ".mp3");
  res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
  if (fs.existsSync(file)) return res.sendFile(file);
  try {
    if (!inflight.has(file)) inflight.set(file, (ttsProvider === "azure" ? synthAzure(text) : synthEdge(text)).then(buf => { fs.writeFileSync(file, buf); return buf; }).finally(() => inflight.delete(file)));
    const buf = await inflight.get(file);
    ttsBroken = false; res.type("audio/mpeg").send(buf);
  } catch (e) { ttsBroken = true; console.error("TTS error:", e && (e.message || JSON.stringify(e))); res.status(503).json({ error: "Audio no disponible ahora mismo." }); }
});

app.listen(PORT, () => console.log(`Euskara praktika en http://localhost:${PORT} (db: ${DB_PATH})`));
