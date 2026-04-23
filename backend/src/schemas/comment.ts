export const commentSchema = {
  $id: 'Comment',
  type: 'object',
  required: ['id', 'postId', 'name', 'body', 'createdAt'],
  properties: {
    id: { type: 'integer' },
    postId: { type: 'string' },
    name: { type: 'string' },
    body: { type: 'string' },
    createdAt: { type: 'string', format: 'date-time' },
  },
} as const

export const commentListSchema = {
  type: 'array',
  items: { $ref: 'Comment#' },
} as const

export const createCommentBodySchema = {
  type: 'object',
  required: ['name', 'body'],
  properties: {
    name: { type: 'string', minLength: 1, maxLength: 80 },
    body: { type: 'string', minLength: 1, maxLength: 1000 },
  },
  additionalProperties: false,
} as const

export const createCommentResponseSchema = {
  type: 'object',
  required: ['message'],
  properties: {
    message: { type: 'string' },
  },
} as const

export const commentParamsSchema = {
  type: 'object',
  required: ['id'],
  properties: {
    id: { type: 'string' },
  },
} as const
