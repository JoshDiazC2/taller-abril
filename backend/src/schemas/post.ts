export const postSummarySchema = {
  $id: 'PostSummary',
  type: 'object',
  required: ['id', 'title', 'slug', 'excerpt', 'author', 'publishedAt'],
  properties: {
    id: { type: 'string' },
    title: { type: 'string' },
    slug: { type: 'string' },
    excerpt: { type: 'string' },
    author: { type: 'string' },
    publishedAt: { type: 'string', format: 'date-time' },
  },
} as const

export const postSchema = {
  $id: 'Post',
  type: 'object',
  required: ['id', 'title', 'slug', 'excerpt', 'body', 'author', 'publishedAt'],
  properties: {
    id: { type: 'string' },
    title: { type: 'string' },
    slug: { type: 'string' },
    excerpt: { type: 'string' },
    body: { type: 'string', description: 'Contenido en markdown' },
    author: { type: 'string' },
    publishedAt: { type: 'string', format: 'date-time' },
  },
} as const

export const postSummaryListSchema = {
  type: 'array',
  items: { $ref: 'PostSummary#' },
} as const

export const postParamsSchema = {
  type: 'object',
  required: ['id'],
  properties: {
    id: { type: 'string' },
  },
} as const
