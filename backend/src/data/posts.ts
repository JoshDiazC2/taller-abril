export type Post = {
  id: string
  title: string
  slug: string
  excerpt: string
  body: string // markdown
  author: string
  publishedAt: string
}

export type PostSummary = Omit<Post, 'body'>

export const posts: Post[] = [
  {
    id: 'p1',
    title: '¿Por qué separar frontend y backend?',
    slug: 'por-que-separar-frontend-backend',
    excerpt:
      'Una pequeña guía sobre por qué tiene sentido construir frontend y backend como dos piezas distintas que se comunican por una API.',
    body: `## Responsabilidades distintas

El frontend se dedica a la presentación y a la interacción con la persona usuaria.
El backend se ocupa de la lógica del dominio y de servir datos.

## Beneficios

- Se pueden desarrollar en paralelo por equipos distintos.
- Se puede reemplazar una capa sin tocar la otra.
- El contrato entre ambas queda explícito en la API.`,
    author: 'Ana Rojas',
    publishedAt: '2026-04-10T00:00:00.000Z',
  },
  {
    id: 'p2',
    title: 'SQLite es suficiente (muchas veces)',
    slug: 'sqlite-es-suficiente',
    excerpt:
      'No siempre hace falta levantar Postgres. Para demos, prototipos y apps pequeñas, SQLite suele alcanzar y sobrar.',
    body: `## El motor que subestimamos

SQLite corre en un único archivo, no necesita servidor y soporta transacciones reales.

## Cuándo considerarlo

- Prototipos y talleres.
- Apps con pocos usuarios concurrentes.
- Proyectos locales o embebidos.

## Cuándo no

Cuando hay muchas escrituras concurrentes o varias máquinas leyendo la misma base.`,
    author: 'Diego Salinas',
    publishedAt: '2026-04-15T00:00:00.000Z',
  },
  {
    id: 'p3',
    title: 'Moderar comentarios sin complicarse',
    slug: 'moderar-comentarios-sin-complicarse',
    excerpt:
      'Un flujo simple: los comentarios entran como pendientes y solo los aprobados se muestran. No hace falta un panel admin completo para empezar.',
    body: `## La idea mínima

Cada comentario nace con \`approved = false\`.
El backend solo devuelve los que están aprobados.

## Cómo se aprueban

En la versión del taller, la moderación se hace desde una herramienta simple como Prisma Studio.
Más adelante se puede construir un panel admin real, pero no es necesario para demostrar el flujo.`,
    author: 'Camila Torres',
    publishedAt: '2026-04-20T00:00:00.000Z',
  },
]
