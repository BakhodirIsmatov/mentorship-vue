# syntax=docker/dockerfile:1.6

# =====================================================================
# Stage 1 — build
# Nuxt'ni build qiladi va .output/ ichiga self-contained server yaratadi.
# =====================================================================
FROM node:20-alpine AS build

WORKDIR /app

# 1) Faqat manifest fayllarni nusxalab, deps'ni keshlanadigan layer'ga ajratish.
#    Lockfile bo'lsa — `npm ci` (tezroq, deterministik). Bo'lmasa — `npm install`.
COPY package*.json ./
RUN if [ -f package-lock.json ]; then \
      npm ci; \
    else \
      npm install --no-audit --no-fund; \
    fi

# 2) Source'ni nusxalab build qilish (.output/ ichida server + statik fayllar)
COPY . .
RUN npm run build


# =====================================================================
# Stage 2 — runtime
# Faqat .output/ kerak — minimal va xavfsiz image.
# =====================================================================
FROM node:20-alpine AS runtime

WORKDIR /app

ENV NODE_ENV=production \
    NITRO_HOST=0.0.0.0 \
    NITRO_PORT=3000 \
    HOST=0.0.0.0 \
    PORT=3000

# Non-root foydalanuvchi (xavfsizlik)
RUN addgroup -S nuxt && adduser -S nuxt -G nuxt

# .output/ self-contained — node_modules ichida emas
COPY --from=build --chown=nuxt:nuxt /app/.output ./.output

USER nuxt

EXPOSE 3000

# Healthcheck — sahifa 200 qaytarayotganini tekshiradi
HEALTHCHECK --interval=30s --timeout=5s --start-period=15s --retries=3 \
  CMD wget -q --spider http://localhost:3000/ || exit 1

CMD ["node", ".output/server/index.mjs"]
