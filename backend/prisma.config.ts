import { defineConfig } from 'prisma/config'

const url = process.env.DATABASE_URL ?? 'file:./prisma/dev.db'

export default defineConfig({
  schema: 'prisma/schema.prisma',
  datasource: { url },
  migrations: {
    path: 'prisma/migrations',
    seed: 'tsx prisma/seed.ts',
  },
})
