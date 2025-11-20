# ------------------------------------
# Stage 1: Build                     #
# ------------------------------------
FROM oven/bun:1.3.2 AS build

WORKDIR /app

COPY package.json bun.lock ./

RUN bun install

COPY . .

RUN bun run build

# ------------------------------------
# Stage 2: Runtime                   #
# ------------------------------------
FROM oven/bun:1.3.2-slim AS runtime

WORKDIR /app

COPY --from=build /app/package.json ./package.json
COPY --from=build /app/bun.lock ./bun.lock
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/.output ./.output
COPY --from=build /app/drizzle.config.ts ./drizzle.config.ts
COPY --from=build /app/constants.ts ./constants.ts
COPY --from=build /app/drizzle ./drizzle

ENV APP_ENV='prod'

EXPOSE 3000

CMD ["bun", "run", "start"]
