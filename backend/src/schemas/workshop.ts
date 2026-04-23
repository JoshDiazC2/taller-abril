export const workshopSchema = {
  $id: 'Workshop',
  type: 'object',
  required: ['id', 'title', 'description', 'presenters'],
  properties: {
    id: { type: 'string' },
    title: { type: 'string' },
    description: { type: 'string' },
    presenters: {
      type: 'array',
      items: { $ref: 'Member#' },
    },
  },
} as const

export const workshopListSchema = {
  type: 'array',
  items: { $ref: 'Workshop#' },
} as const
