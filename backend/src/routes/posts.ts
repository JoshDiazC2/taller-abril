import type { FastifyPluginAsync } from 'fastify'
import { posts } from '../data/index.js'
import { postParamsSchema, postSummaryListSchema } from '../schemas/index.js'

const postsRoutes: FastifyPluginAsync = async (postsRoutes) => {
  postsRoutes.get(
    '',
    {
      schema: {
        tags: ['posts'],
        summary: 'Listar posts del blog (sin body)',
        response: { 200: postSummaryListSchema },
      },
    },
    async () => {
      return [...posts]
        .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
        .map(({ body: _body, ...summary }) => summary)
    },
  )

  postsRoutes.get<{ Params: { id: string } }>(
    '/:id',
    {
      schema: {
        tags: ['posts'],
        summary: 'Obtener un post (body en markdown) por id',
        params: postParamsSchema,
        response: {
          200: { $ref: 'Post#' },
          404: {
            type: 'object',
            properties: {
              statusCode: { type: 'integer' },
              error: { type: 'string' },
              message: { type: 'string' },
            },
          },
        },
      },
    },
    async (request, reply) => {
      const post = posts.find((p) => p.id === request.params.id)
      if (!post) {
        return reply.notFound(`No existe el post con id "${request.params.id}"`)
      }
      return post
    },
  )
}

export default postsRoutes
