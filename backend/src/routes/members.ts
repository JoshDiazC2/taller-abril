import type { FastifyPluginAsync } from 'fastify'
import { members } from '../data/index.js'
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
    async () => members,
  )
}

export default membersRoutes
