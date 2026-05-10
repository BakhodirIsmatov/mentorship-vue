# Ustoz — Landing page

**Ustoz** — O'zbekistondagi birinchi ustoz-shogird sertifikatlash platformasining mobil ilovasi uchun marketing sayti. Shogirdlar tasdiqlangan ustozlardan an'anaviy hunar va zamonaviy mahoratlarni o'rganadi, blockchain orqali tasdiqlangan raqamli sertifikat oladi va to'g'ridan-to'g'ri ish beruvchilar bazasiga ulanadi. Loyiha **Nuxt 3 (Vue 3)** asosida qurilgan, tashqi rasm yoki UI kutubxonasiga bog'liq emas — barcha vizual elementlar SVG va CSS bilan yaratilgan.

## Texnologiyalar

- **[Nuxt 3](https://nuxt.com/)** — Vue 3 asosidagi meta-framework (SSR / SSG)
- **Vue 3** Composition API + `<script setup>`
- **TypeScript** (Nuxt'ning auto-import tip xizmati bilan)
- **Toza CSS** — CSS Custom Properties (variables), `scoped` style'lar har bir komponentda
- **Google Fonts** — `Plus Jakarta Sans` (asosiy) + `Sora` (sarlavhalar)
- **IntersectionObserver** — scroll-based reveal animatsiyalari uchun
- Hech qanday tashqi rasm, ikonka kutubxonasi yoki UI framework — barchasi qo'lda yozilgan SVG

## Ishga tushirish

Talab: **Node.js ≥ 18.x**

```bash
# 1) Bog'lanmalarni o'rnatish
npm install

# 2) Dev serverni ishga tushirish (HMR bilan)
npm run dev
```

Brauzerda oching: **http://localhost:3000**

### Boshqa buyruqlar

```bash
# Statik build (SSG) — .output/public/ ichiga
npm run generate

# Production build
npm run build

# Build natijasini ko'rib chiqish
npm run preview
```

## Docker orqali ishga tushirish

Loyiha **ikki rejimda** Docker'da ishga tushirilishi mumkin:

| Rejim | Fayllar | Maqsad |
|---|---|---|
| **Production** | `Dockerfile`, `docker-compose.yml` | Optimizatsiyalangan, multi-stage build, `.output/` self-contained server |
| **Development** | `Dockerfile.dev`, `docker-compose.dev.yml` | `nuxt dev` + HMR + bind mount — faylni tahrirlasangiz brauzer avto-yangilanadi |

### Development (HMR — auto refresh)

Source kod konteynerga **bind mount** orqali bog'lanadi. Host'da har qanday
fayl o'zgarganda Nuxt'ning watcher'i sezadi va brauzer Hot Module Replacement
orqali avtomatik yangilanadi.

```bash
# Dev konteynerni qurib ishga tushirish
docker compose -f docker-compose.dev.yml up --build

# Fonda ishlatish + loglarni kuzatish
docker compose -f docker-compose.dev.yml up -d --build
docker compose -f docker-compose.dev.yml logs -f

# To'xtatish
docker compose -f docker-compose.dev.yml down
```

Brauzerda oching: **http://localhost:3000**

**Texnik tafsilotlar:**

- `./:/app` — host'dagi loyiha papkasi konteynerga bog'lanadi
- `node_modules`, `.nuxt`, `.output` — anonymous volume'lar bilan saqlanadi (host'dagi yo'qligi yoki muhim emasligi muammo bo'lmaydi)
- `CHOKIDAR_USEPOLLING=true` + `WATCHPACK_POLLING=true` — macOS/Windows Docker Desktop'da inotify ishonchsiz, polling barcha o'zgarishlarni sezadi (CPU bir oz ko'proq, lekin ishonchli)
- `tty + stdin_open` — Nuxt CLI rang/spinner'lari to'g'ri ko'rinadi

**`package.json` o'zgarganda** (yangi dependency qo'shilsa):

```bash
docker compose -f docker-compose.dev.yml up --build  # qayta build
```

### Production (optimizatsiyalangan)

Multi-stage build: build stage Nuxt'ni qura oladi, runtime stage esa faqat
self-contained `.output/` papkasini saqlaydi. Non-root user, healthcheck.

```bash
# Image'ni qurib konteynerni ishga tushirish
docker compose up -d --build

# Loglar
docker compose logs -f

# To'xtatish
docker compose down
```

### Faqat Docker (compose'siz)

```bash
# Production
docker build -t ustoz-landing .
docker run -d --name ustoz -p 3000:3000 ustoz-landing

# Development (auto-refresh)
docker build -f Dockerfile.dev -t ustoz-landing:dev .
docker run --rm -it -p 3000:3000 \
  -v "$(pwd)":/app -v /app/node_modules -v /app/.nuxt \
  -e CHOKIDAR_USEPOLLING=true \
  ustoz-landing:dev
```

### Image hajmi

- **Production runtime**: `node:20-alpine` + `.output/` (~150–180 MB)
- **Development**: `node:20-alpine` + to'liq `node_modules` (~500–600 MB)

### Healthcheck

Production konteyneri har 30 soniyada `http://localhost:3000/` ga so'rov
yuboradi (`docker ps`'da `(healthy)` ko'rinadi).

## Fayl tuzilmasi

```
.
├── app.vue                       # Ildiz (NuxtPage'ni render qiladi)
├── nuxt.config.ts                # Nuxt sozlamalari + meta-teglar + Google Fonts
├── package.json
├── tsconfig.json
├── assets/
│   └── css/main.css              # Global CSS: variables, scroll-reveal, utility class'lar
├── components/                   # Auto-import qilinadi
│   ├── TheNavbar.vue             # Sticky navbar (glassmorphism, mobile menu)
│   ├── HeroSection.vue           # Hero + parallax blob'lar + entrance animatsiya
│   ├── PhoneMockup.vue           # iPhone mockup + 3 floating card + progress animatsiya
│   ├── StatsBar.vue              # 4 statistika (counter animation, easeOutExpo)
│   ├── FeaturesGrid.vue          # 4 feature card (hoverda gradient'ga aylanadi)
│   ├── FeatureShowcase.vue       # Alternating layout (search / certificate variantlari)
│   ├── ProcessSteps.vue          # 4 qadamli jarayon (markazda chiziq)
│   ├── AudienceSection.vue       # Shogirdlar (oq) + Ustozlar (gradient)
│   ├── TestimonialsSection.vue   # 3 sharh, markazidagisi featured
│   ├── FaqAccordion.vue          # 6 savol, "+" 45° aylanadi
│   ├── FinalCta.vue              # Gradient CTA + App Store / Google Play
│   └── TheFooter.vue             # 4 ustun, ijtimoiy tarmoqlar
├── composables/
│   └── useCounter.ts             # easeOutExpo counter animation
├── pages/
│   └── index.vue                 # Bosh sahifa (komponentlarni yig'adi)
├── plugins/
│   └── scroll-reveal.client.ts   # Global IntersectionObserver (.sr-* → .is-visible)
└── public/
    └── logo.png                  # Brand logo + favicon
```

## Til va mavzu

### 3 ta til (i18n)

Loyiha **uz / ru / en** tillarini qo'llab-quvvatlaydi. Tarjimalar `locales/`
papkasida statik ob'ektlar sifatida saqlanadi (`uz.ts`, `ru.ts`, `en.ts`),
har biri bir xil kalitlarga ega.

- Til navbar'dagi globus tugmasidan tanlanadi (UZ / RU / EN)
- Tanlov **cookie** orqali 1 yilga saqlanadi (`useCookie('locale')`) — SSR'da ham, klientda ham bir xil ko'rinadi
- Komponentda ishlatish: `const { t } = useI18n()` keyin `{{ t('hero.title1') }}`
- Yangi til qo'shish uchun: `locales/<code>.ts` yarating va `composables/useI18n.ts` ichidagi `LOCALES` ro'yxatiga qo'shing

### Light / Dark mode

- Mavzu navbar'dagi quyosh/oy tugmasi bilan almashtiriladi
- Tanlov **cookie** orqali saqlanadi (`useCookie('theme')`)
- Birinchi tashrifda OS sozlamasidan o'qiladi (`prefers-color-scheme`)
- `<html data-theme="light|dark">` atributiga asoslangan — `assets/css/main.css` ichida `:root[data-theme='dark']` selektori barcha rang o'zgaruvchilarini override qiladi
- **FOUC oldini olish**: `nuxt.config.ts` ichida inline script Vue hydration'idan oldin to'g'ri mavzuni o'rnatadi

## Dizayn xususiyatlari

### Vizual

- Yorqin oq fon + asosiy gradient: `#6366f1` → `#8b5cf6` → `#ec4899`
- Premium SaaS uslubi (Linear / Vercel / Framer chizig'ida)
- Mobile-first responsive: breakpoint'lar 1024px va 768px
- Glassmorphism navbar — scroll'da background va shadow yumshoq paydo bo'ladi

### Animatsiyalar

- **Scroll reveal** — 6 yo'nalish (`sr-up`, `sr-down`, `sr-left`, `sr-right`, `sr-zoom`, `sr-zoom-up`) + 6 stagger delay (`sr-delay-1` … `sr-delay-6`). Global IntersectionObserver `plugins/scroll-reveal.client.ts` ichida sozlangan
- **Counter animation** — easeOutExpo bilan 0 dan haqiqiy songa (`StatsBar.vue`)
- **Hero entrance** — badge → sarlavha → tavsif → CTA → trust-row tartibida yumshoq chiqadi
- **iPhone float** — 6 soniyali yumshoq tebranish; 3 ta floating card har xil delay bilan
- **Progress bar** — telefon ekraniga kelganda 0% dan 75% gacha to'ldiriladi
- **Hero blob parallax** — scroll'da har xil tezlikda harakat
- **Card hover** — gradient'ga aylanadi, ikonka -8° aylanib 1.12× kattalashadi
- **FAQ "+"** — 45° aylanib gradient pillaga aylanadi
- 60fps uchun `transform` va `opacity` ishlatildi, `will-change` hint berildi
- `prefers-reduced-motion: reduce` to'liq qo'llab-quvvatlanadi

### Texnik

- Semantic HTML5: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- ARIA: `aria-expanded`, `aria-label`, `aria-controls`, `role`, `aria-hidden`
- Keyboard navigation va `:focus-visible` outline
- Open Graph + Twitter Card meta-teglari `nuxt.config.ts` ichida
- Google Fonts `preconnect` orqali optimizatsiyalangan

## Tuzuvchi haqida

> _Bu joyda ism, link va bog'lanish ma'lumotlaringizni qoldiring._

- Ism-familiya: …
- Email: …
- Portfolio: …
- LinkedIn: …

## Litsenziya

Ushbu loyiha namuna sifatida yaratilgan. Tijoriy maqsadda foydalanishdan oldin muallif bilan bog'laning.
