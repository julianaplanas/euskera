# Euskara Praktika

App tipo Duolingo para practicar euskera, con login por nombre + PIN y progreso guardado en el servidor (sirve desde cualquier teléfono).

## Desplegar en Railway

1. Sube esta carpeta a un repo de GitHub (sin `node_modules` ni `data/`, el `.gitignore` ya los excluye).
2. En Railway: **New Project → Deploy from GitHub repo** y elige el repo. Railway detecta Node y ejecuta `npm start`.
3. Añade un **Volume** al servicio (pestaña del servicio → Volumes → Add Volume) montado en `/data`. Sin volumen, la base de datos se borra en cada deploy.
4. En **Variables** añade:
   - `DB_PATH` = `/data/app.db`
   - `NODE_ENV` = `production`
   - (opcional) `INVITE_CODE` = una palabra secreta, para que solo quien la conozca pueda crear cuenta.
5. En **Settings → Networking → Generate Domain** para obtener la URL pública.

## Añadir la app al inicio del móvil

- **iPhone (Safari):** abre la URL → botón Compartir → *Añadir a pantalla de inicio*.
- **Android (Chrome):** abre la URL → menú ⋮ → *Añadir a pantalla de inicio* / *Instalar app*.

Se abre a pantalla completa, con icono propio, y recuerda la sesión.

## Añadir una lección nueva

Edita `public/lessons.js` y añade un objeto al array:

```js
{
  id: "l6", title: "Título", desc: "Resumen corto",
  pairs: [["euskera", "castellano"], ...],      // elección múltiple
  sentences: [["Frase en euskera.", "Frase en castellano."], ...]  // fichas y escritura
}
```

Haz push y Railway redespliega solo.

## En local

```
npm install
npm start      # http://localhost:3000
```
