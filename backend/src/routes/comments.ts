import type { FastifyPluginAsync } from 'fastify'
import {
  commentListSchema,
  commentParamsSchema,
  createCommentBodySchema,
  createCommentResponseSchema,
} from '../schemas/index.js'

// Se monta bajo el prefix `/posts`, así que los paths son relativos:
//   GET  /posts/:id/comments
//   POST /posts/:id/comments
const commentsRoutes: FastifyPluginAsync = async (commentsRoutes) => {
  commentsRoutes.get<{ Params: { id: string } }>(
    '/:id/comments',
    {
      schema: {
        tags: ['comments'],
        summary: 'Listar comentarios aprobados de un post',
        params: commentParamsSchema,
        response: { 200: commentListSchema },
      },
    },
    async (request, reply) => {
      const post = await commentsRoutes.prisma.post.findUnique({
        where: { id: request.params.id },
        select: { id: true },
      })
      if (!post) {
        return reply.notFound(`No existe el post con id "${request.params.id}"`)
      }
      return commentsRoutes.prisma.comment.findMany({
        where: { postId: request.params.id, approved: true },
        orderBy: { createdAt: 'desc' },
        select: {
          id: true,
          postId: true,
          name: true,
          body: true,
          createdAt: true,
        },
      })
    },
  )

  commentsRoutes.post<{ Params: { id: string }; Body: { name: string; body: string } }>(
    '/:id/comments',
    {
      schema: {
        tags: ['comments'],
        summary: 'Enviar un comentario para moderación',
        description:
          'Los comentarios entran con `approved = false`. Solo se muestran en el GET cuando un moderador los aprueba.',
        params: commentParamsSchema,
        body: createCommentBodySchema,
        response: { 202: createCommentResponseSchema },
      },
    },
    async (request, reply) => {
      const post = await commentsRoutes.prisma.post.findUnique({
        where: { id: request.params.id },
        select: { id: true },
      })
      if (!post) {
        return reply.notFound(`No existe el post con id "${request.params.id}"`)
      }
      await commentsRoutes.prisma.comment.create({
        data: {
          postId: request.params.id,
          name: request.body.name.trim(),
          body: request.body.body.trim(),
        },
      })
      return reply.code(202).send({ message: 'Comentario enviado para revisión' })
    },
  )
}

export default commentsRoutes
