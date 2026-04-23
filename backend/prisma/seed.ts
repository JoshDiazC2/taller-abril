// Ejecuta prisma/seed.sql contra la DB SQLite usando better-sqlite3.
// Invocado por `prisma db seed` y automáticamente después de `npm run db:migrate`.

import Database from 'better-sqlite3'
import { readFileSync } from 'node:fs'
import path from 'node:path'

const DEFAULT_URL = 'file:./prisma/dev.db'
const url = process.env.DATABASE_URL ?? DEFAULT_URL
const dbPath = path.resolve(url.replace(/^file:/, ''))

const seedPath = path.resolve('prisma/seed.sql')
const sql = readFileSync(seedPath, 'utf-8')

const db = new Database(dbPath)
try {
  db.exec(sql)
  console.log(`Seed aplicado en ${dbPath}`)
} finally {
  db.close()
}
