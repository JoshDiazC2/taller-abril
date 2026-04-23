import Fastify, { type FastifyInstance } from 'fastify'
import cors from '@fastify/cors'
import sensible from '@fastify/sensible'
import { prismaPlugin, swaggerPlugin } from './plugins/index.js'
import apiRouter from './routes/index.js'
import { memberSchema, postSchema, postSummarySchema, workshopSchema } from './schemas/index.js'

export async function buildApp(): Promise<FastifyInstance> {
  const app = Fastify({ logger: true })

  await app.register(cors, { origin: true })
  await app.register(sensible)
  await app.register(swaggerPlugin)
  await app.register(prismaPlugin)

  // Registrar schemas globales para que los routes puedan hacer $ref entre ellos
  app.addSchema(memberSchema)
  app.addSchema(workshopSchema)
  app.addSchema(postSummarySchema)
  app.addSchema(postSchema)

  await app.register(apiRouter, { prefix: '/api' })

  return app
}
