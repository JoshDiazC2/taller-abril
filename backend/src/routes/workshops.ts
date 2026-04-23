import type { FastifyPluginAsync } from 'fastify'
import { members, workshops } from '../data/index.js'
import { workshopListSchema } from '../schemas/index.js'

const workshopsRoutes: FastifyPluginAsync = async (workshopsRoutes) => {
  workshopsRoutes.get(
    '',
    {
      schema: {
        tags: ['workshops'],
        summary: 'Listar talleres con los miembros que los exponen',
        response: { 200: workshopListSchema },
      },
    },
    async () =>
      workshops.map((w) => ({
        id: w.id,
        title: w.title,
        description: w.description,
        presenters: w.presenterIds
          .map((id) => members.find((m) => m.id === id))
          .filter((m): m is (typeof members)[number] => m !== undefined),
      })),
  )
}

export default workshopsRoutes
