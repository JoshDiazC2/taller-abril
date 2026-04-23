# Backend — Portal ACECOM

API del portal web de ACECOM. Proyecto en **TypeScript** con **Fastify**.

Este commit contiene solo la inicialización: el servidor arranca y queda escuchando, pero todavía no hay endpoints ni datos. Esos se agregan en los siguientes commits del taller.

## Requisitos

- Node 20+
- npm

## Puesta en marcha

```bash
cd backend
npm install
npm run dev
```

El servidor queda en `http://localhost:3000`. Cualquier ruta responde **404** (todavía no hay rutas registradas).

## Estructura

```
src/
├── server.ts   # bootstrap (listen)
└── app.ts      # crea la instancia Fastify
```

## Scripts

| Script          | Descripción                        |
| --------------- | ---------------------------------- |
| `npm run dev`   | Levanta el servidor en modo watch  |
| `npm run build` | Compila TypeScript a `dist/`       |
| `npm start`     | Corre el servidor compilado        |
