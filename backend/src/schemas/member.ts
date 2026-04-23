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

export const createGuestMemberBodySchema = {
  type: 'object',
  required: ['name', 'bio'],
  properties: {
    name: { type: 'string', minLength: 1, maxLength: 80 },
    bio: { type: 'string', minLength: 1, maxLength: 500 },
    avatarUrl: { type: 'string', format: 'uri' },
    instagramUrl: { type: 'string', format: 'uri' },
    linkedinUrl: { type: 'string', format: 'uri' },
    githubUrl: { type: 'string', format: 'uri' },
  },
  additionalProperties: false,
} as const
