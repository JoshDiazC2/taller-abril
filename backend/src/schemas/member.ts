export const memberSchema = {
  $id: 'Member',
  type: 'object',
  required: ['id', 'name', 'role', 'bio'],
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
    role: { type: 'string' },
    bio: { type: 'string' },
    avatarUrl: { type: ['string', 'null'], format: 'uri' },
    instagramUrl: { type: ['string', 'null'], format: 'uri' },
    linkedinUrl: { type: ['string', 'null'], format: 'uri' },
    githubUrl: { type: ['string', 'null'], format: 'uri' },
  },
} as const

export const memberListSchema = {
  type: 'array',
  items: { $ref: 'Member#' },
} as const
