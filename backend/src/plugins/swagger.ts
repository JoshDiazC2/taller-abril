import fp from 'fastify-plugin'
import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUi from '@fastify/swagger-ui'
import type { FastifyInstance } from 'fastify'

export default fp(async function swaggerPlugin(app: FastifyInstance) {
  await app.register(fastifySwagger, {
    openapi: {
      openapi: '3.1.0',
      info: {
        title: 'ACECOM Portal API',
        description:
          'API del portal web de ACECOM. Expone miembros, talleres y posts (y más adelante comentarios moderados).',
        version: '1.0.0',
      },
      servers: [{ url: '/api' }],
      tags: [
        { name: 'members', description: 'Miembros de ACECOM' },
        { name: 'workshops', description: 'Talleres organizados' },
        { name: 'posts', description: 'Posts del blog' },
      ],
    },
  })

  await app.register(fastifySwaggerUi, {
    routePrefix: '/api/docs',
    uiConfig: {
      docExpansion: 'list',
      deepLinking: false,
    },
  })
})
