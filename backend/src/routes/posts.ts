import type { FastifyPluginAsync } from 'fastify'
import { postParamsSchema, postSummaryListSchema } from '../schemas/index.js'

const postsRoutes: FastifyPluginAsync = async (postsRoutes) => {
  postsRoutes.get(
    '',
    {
      schema: {
        tags: ['posts'],
        summary: 'Listar posts del blog (sin body, con author)',
        response: { 200: postSummaryListSchema },
      },
    },
    async () => {
      const posts = await postsRoutes.prisma.post.findMany({
        orderBy: { publishedAt: 'desc' },
        include: { author: true },
      })
      return posts.map(({ body: _body, authorId: _authorId, ...rest }) => rest)
    },
  )

  postsRoutes.get<{ Params: { id: string } }>(
    '/:id',
    {
      schema: {
        tags: ['posts'],
        summary: 'Obtener un post (body en markdown, con author) por id',
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
      const post = await postsRoutes.prisma.post.findUnique({
        where: { id: request.params.id },
        include: { author: true },
      })
      if (!post) {
        return reply.notFound(`No existe el post con id "${request.params.id}"`)
      }
      const { authorId: _authorId, ...rest } = post
      return rest
    },
  )
}

export default postsRoutes
