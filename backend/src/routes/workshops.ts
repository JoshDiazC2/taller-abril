import type { FastifyPluginAsync } from 'fastify'
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
    async () => {
      const workshops = await workshopsRoutes.prisma.workshop.findMany({
        orderBy: { id: 'asc' },
        include: { presenters: { include: { member: true } } },
      })
      return workshops.map((w) => ({
        id: w.id,
        title: w.title,
        description: w.description,
        presenters: w.presenters.map((p) => p.member),
      }))
    },
  )
}

export default workshopsRoutes
