import { randomUUID } from 'node:crypto'
import type { FastifyPluginAsync } from 'fastify'
import { createGuestMemberBodySchema, memberListSchema } from '../schemas/index.js'

const GUEST_ROLE = 'Miembro invitado'

type GuestMemberBody = {
  name: string
  bio: string
  avatarUrl?: string
  instagramUrl?: string
  linkedinUrl?: string
  githubUrl?: string
}

const membersRoutes: FastifyPluginAsync = async (membersRoutes) => {
  membersRoutes.get(
    '',
    {
      schema: {
        tags: ['members'],
        summary: 'Listar miembros de ACECOM',
        response: { 200: memberListSchema },
      },
    },
    async () => membersRoutes.prisma.member.findMany({ orderBy: { id: 'asc' } }),
  )

  membersRoutes.post<{ Body: GuestMemberBody }>(
    '',
    {
      schema: {
        tags: ['members'],
        summary: 'Registrarse como miembro invitado (sin auth)',
        description:
          'Endpoint abierto pensado para el taller: cualquiera puede registrarse como "Miembro invitado". El `role` queda fijado por el backend, el cliente no lo envía.',
        body: createGuestMemberBodySchema,
        response: { 201: { $ref: 'Member#' } },
      },
    },
    async (request, reply) => {
      const { name, bio, avatarUrl, instagramUrl, linkedinUrl, githubUrl } = request.body
      const member = await membersRoutes.prisma.member.create({
        data: {
          id: `guest-${randomUUID()}`,
          name: name.trim(),
          role: GUEST_ROLE,
          bio: bio.trim(),
          avatarUrl: avatarUrl ?? null,
          instagramUrl: instagramUrl ?? null,
          linkedinUrl: linkedinUrl ?? null,
          githubUrl: githubUrl ?? null,
        },
      })
      return reply.code(201).send(member)
    },
  )
}

export default membersRoutes
