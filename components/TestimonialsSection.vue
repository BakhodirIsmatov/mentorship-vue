<template>
  <section class="testimonials section">
    <div class="container">
      <header class="section-header sr-up">
        <span class="eyebrow"><span class="eyebrow-dot" /> {{ t('testimonials.eyebrow') }}</span>
        <h2 class="section-title">
          {{ t('testimonials.title1') }}
          <span class="gradient-text">{{ t('testimonials.titleHl') }}</span>
        </h2>
        <p class="section-subtitle">{{ t('testimonials.subtitle') }}</p>
      </header>

      <div class="testimonials-wrap" :class="{ 'is-mobile-carousel': isMobile }">
        <div class="grid" :style="mobileTrackStyle">
          <article
            v-for="(t2, i) in items"
            :key="t2.name"
            class="t-card"
            :class="[t2.featured ? 'featured' : '', !isMobile ? `sr-up sr-delay-${i + 1}` : '']"
          >
            <div class="t-stars">
              <svg v-for="n in 5" :key="n" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>

            <blockquote class="t-quote">{{ t(t2.quoteKey) }}</blockquote>

            <div class="t-foot">
              <div class="t-avatar" :style="{ background: t2.color }">{{ t2.initials }}</div>
              <div>
                <div class="t-name">{{ t2.name }}</div>
                <div class="t-role">{{ t(t2.roleKey) }}</div>
              </div>
            </div>

            <div v-if="t2.featured" class="t-quote-mark" aria-hidden="true">"</div>
          </article>
        </div>

        <div v-if="isMobile" class="t-dots" aria-label="Testimonials navigation">
          <button
            v-for="(_, i) in items"
            :key="`dot-${i}`"
            type="button"
            class="t-dot"
            :class="{ active: i === activeIndex }"
            :aria-label="`Go to testimonial ${i + 1}`"
            @click="goTo(i)"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
const activeIndex = ref(0)
const isMobile = ref(false)
let rotateTimer: ReturnType<typeof setInterval> | null = null
let mediaQuery: MediaQueryList | null = null

const items = [
  {
    // Shogird — mockup'dagi `ustoz-home` ekranidagi shogird ismi
    name: 'Burxon Davronov',
    initials: 'BD',
    quoteKey: 'testimonials.t1Quote',
    roleKey: 'testimonials.t1Role',
    color: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
    featured: false
  },
  {
    // Ustoz — mockup'dagi sertifikat ekranidagi imzolagan ustoz
    name: 'Bahodir Ismatov',
    initials: 'BI',
    quoteKey: 'testimonials.t2Quote',
    roleKey: 'testimonials.t2Role',
    color: 'rgba(255, 255, 255, 0.22)',
    featured: true
  },
  {
    // Ish beruvchi — sertifikatni QR orqali tekshiruvchi
    name: 'Dilshod Rahimov',
    initials: 'DR',
    quoteKey: 'testimonials.t3Quote',
    roleKey: 'testimonials.t3Role',
    color: 'linear-gradient(135deg, #f59e0b, #fbbf24)',
    featured: false
  }
] as const

const mobileTrackStyle = computed(() => {
  if (!isMobile.value) return undefined
  return { transform: `translateX(-${activeIndex.value * 100}%)` }
})

const stopRotation = () => {
  if (rotateTimer) {
    clearInterval(rotateTimer)
    rotateTimer = null
  }
}

const startRotation = () => {
  stopRotation()
  if (!isMobile.value) return
  rotateTimer = setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % items.length
  }, 4500)
}

const goTo = (index: number) => {
  activeIndex.value = index
  startRotation()
}

const syncViewport = () => {
  isMobile.value = mediaQuery?.matches ?? false
  activeIndex.value = 0
  startRotation()
}

onMounted(() => {
  mediaQuery = window.matchMedia('(max-width: 640px)')
  mediaQuery.addEventListener('change', syncViewport)
  syncViewport()
})

onBeforeUnmount(() => {
  mediaQuery?.removeEventListener('change', syncViewport)
  stopRotation()
})
</script>

<style scoped>
.testimonials-wrap { position: relative; }
.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; align-items: stretch; }

.t-card {
  position: relative;
  padding: 32px;
  background: var(--c-card);
  border: 1px solid var(--c-border);
  border-radius: var(--radius-lg);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s var(--ease-out), box-shadow 0.3s var(--ease-out);
  overflow: hidden;
}
.t-card:hover { transform: translateY(-6px); box-shadow: var(--shadow-lg); }

.t-card.featured {
  background: var(--grad-main);
  color: #fff;
  border-color: transparent;
  box-shadow: 0 30px 70px rgba(99, 102, 241, 0.35);
  transform: translateY(-12px);
}
.t-card.featured:hover { transform: translateY(-18px); }

.t-stars { display: flex; gap: 2px; color: #f59e0b; margin-bottom: 18px; }
.t-card.featured .t-stars { color: #fde68a; }

.t-quote { font-size: 15.5px; line-height: 1.7; color: var(--c-text); margin-bottom: 28px; flex: 1; font-weight: 500; }
.t-card.featured .t-quote { color: rgba(255, 255, 255, 0.96); }

.t-foot { display: flex; align-items: center; gap: 12px; margin-top: auto; }
.t-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #fff;
  font-weight: 700;
  font-size: 13px;
  flex-shrink: 0;
  border: 2px solid rgba(255, 255, 255, 0.4);
}
.t-name { font-weight: 700; font-size: 15px; margin-bottom: 2px; color: var(--c-text); }
.t-role { font-size: 12.5px; color: var(--c-text-muted); }
.t-card.featured .t-name { color: #fff; }
.t-card.featured .t-role { color: rgba(255, 255, 255, 0.75); }

.t-quote-mark {
  position: absolute;
  top: -20px;
  right: 24px;
  font-family: 'Sora', sans-serif;
  font-size: 160px;
  line-height: 1;
  color: rgba(255, 255, 255, 0.18);
  font-weight: 800;
  pointer-events: none;
}

@media (max-width: 1024px) {
  .grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
  .t-card.featured { transform: translateY(0); grid-column: 1 / -1; }
  .t-card.featured:hover { transform: translateY(-6px); }
}

@media (max-width: 640px) {
  .testimonials-wrap {
    overflow: hidden;
    padding-bottom: 18px;
  }
  .grid {
    display: flex;
    gap: 0;
    transition: transform 420ms cubic-bezier(0.22, 1, 0.36, 1);
    will-change: transform;
  }
  .t-card {
    min-width: 100%;
    flex: 0 0 100%;
  }
  .t-card.featured { grid-column: auto; transform: none; }
  .t-card.featured:hover { transform: translateY(-6px); }
  .t-quote-mark { font-size: 120px; }
  .t-dots {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-top: 18px;
  }
  .t-dot {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: rgba(148, 163, 184, 0.36);
    transition: transform 0.25s ease, background 0.25s ease;
  }
  .t-dot.active {
    background: var(--c-primary);
    transform: scale(1.15);
  }
}
</style>
