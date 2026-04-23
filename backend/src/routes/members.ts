import type { FastifyPluginAsync } from 'fastify'
import { memberListSchema } from '../schemas/index.js'

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
}

export default membersRoutes
