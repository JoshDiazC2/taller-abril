# Backend — Portal ACECOM

API del portal web de ACECOM. Construida con **Fastify** y **TypeScript**, documentada automáticamente con **OpenAPI** (Swagger).

En este paso del taller la data todavía vive como **fixtures JSON-like en `src/data/`** (arrays tipados en TS). En el siguiente commit se migra a Prisma + SQLite sin tocar el contrato de la API.

## Requisitos

- Node 20+
- npm

## Puesta en marcha

```bash
cd backend
npm install
npm run dev
```

El servidor queda en `http://localhost:3000`.

## Endpoints

Todas las rutas viven bajo el prefijo `/api`.

| Método | Ruta                   | Descripción                                                   |
| ------ | ---------------------- | ------------------------------------------------------------- |
| GET    | `/api/members`         | Lista de miembros con links a Instagram, LinkedIn y GitHub    |
| GET    | `/api/workshops`       | Lista de talleres, cada uno con los miembros que lo exponen   |
| GET    | `/api/posts`           | Lista de posts del blog (sin `body`)                          |
| GET    | `/api/posts/:id`       | Detalle de un post (body en markdown)                         |
| GET    | `/api/docs`            | Documentación interactiva (Swagger UI)                        |
| GET    | `/api/docs/json`       | Spec OpenAPI 3.1 en JSON                                      |

## Datos

Los fixtures están en `src/data/`:

- `members.ts` — miembros con socials
- `workshops.ts` — talleres con `presenterIds: string[]` (referencian miembros)
- `posts.ts` — posts con `body` en markdown

El endpoint de talleres expande `presenterIds` a objetos `Member` completos al responder.

## Estructura del código

```
src/
├── server.ts             # bootstrap (listen)
├── app.ts                # Fastify, plugins y rutas
├── plugins/
│   ├── index.ts          # barrel
│   └── swagger.ts        # OpenAPI + Swagger UI
├── schemas/
│   ├── index.ts          # barrel
│   ├── member.ts
│   ├── workshop.ts
│   └── post.ts
├── routes/
│   ├── index.ts          # router general: registra cada *Routes con su prefix
│   ├── members.ts        # membersRoutes.get('/', ...)
│   ├── workshops.ts      # workshopsRoutes.get('/', ...)
│   └── posts.ts          # postsRoutes.get('/', ...), postsRoutes.get('/:id', ...)
└── data/
    ├── index.ts          # barrel
    ├── members.ts
    ├── workshops.ts
    └── posts.ts
```

## Scripts

| Script          | Descripción                        |
| --------------- | ---------------------------------- |
| `npm run dev`   | Levanta el servidor en modo watch  |
| `npm run build` | Compila TypeScript a `dist/`       |
| `npm start`     | Corre el servidor compilado        |
