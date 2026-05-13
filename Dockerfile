FROM oven/bun:1 AS base
WORKDIR /app
ENV NODE_ENV=production
ENV DO_NOT_TRACK=1

FROM base AS deps
COPY package.json bun.lockb* bun.lock* ./
RUN bun install --frozen-lockfile

FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN bun run build

FROM oven/bun:1-slim AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/dist ./dist

EXPOSE 3000

# Serve static files directly with Bun
CMD ["bun", "x", "serve", "-s", "dist", "-l", "3000"]