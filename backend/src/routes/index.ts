import type { FastifyPluginAsync } from 'fastify'
import membersRoutes from './members.js'
import postsRoutes from './posts.js'
import workshopsRoutes from './workshops.js'

const router: FastifyPluginAsync = async (router) => {
  await router.register(membersRoutes, { prefix: '/members' })
  await router.register(workshopsRoutes, { prefix: '/workshops' })
  await router.register(postsRoutes, { prefix: '/posts' })
}

export default router
