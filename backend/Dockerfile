# syntax=docker/dockerfile:1.7

# ---- Build stage ----
FROM node:20-slim AS builder
WORKDIR /app

# OpenSSL para Prisma y herramientas de build para better-sqlite3 (módulo nativo)
RUN apt-get update && apt-get install -y --no-install-recommends \
    openssl ca-certificates python3 build-essential \
  && rm -rf /var/lib/apt/lists/*

# Instalar dependencias (lockfile para builds reproducibles)
COPY package.json package-lock.json ./
RUN npm ci

# Copiar código y artefactos de Prisma
COPY tsconfig.json prisma.config.ts ./
COPY prisma ./prisma
COPY src ./src

# Generar cliente de Prisma y compilar TypeScript
RUN npx prisma generate
RUN npm run build

# ---- Runtime stage ----
FROM node:20-slim AS runtime
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0
ENV DATABASE_URL="file:/data/dev.db"

# OpenSSL requerido por Prisma en runtime
RUN apt-get update && apt-get install -y --no-install-recommends openssl ca-certificates \
  && rm -rf /var/lib/apt/lists/*

# Artefactos del build + prisma CLI + seed (necesarios al arranque)
COPY package.json package-lock.json ./
COPY prisma.config.ts ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma

# Directorio persistente para la DB SQLite
RUN mkdir -p /data
VOLUME /data

EXPOSE 3000

# Aplica migraciones, corre seed si la DB estaba vacía, y levanta el servidor.
# La marca .seeded evita re-seedear en reinicios que conservan el volumen.
CMD ["sh", "-c", "npx prisma migrate deploy && [ -f /data/.seeded ] || (npx prisma db seed && touch /data/.seeded) && node dist/server.js"]
