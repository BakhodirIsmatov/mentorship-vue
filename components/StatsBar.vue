<template>
  <section class="stats" :aria-label="t('stats.mentors')">
    <div class="container">
      <div class="stats-card sr-zoom-up">
        <div
          v-for="(s, i) in stats"
          :key="s.key"
          class="stat"
          :class="`sr-up sr-delay-${i + 1}`"
        >
          <div class="stat-value">
            {{ formatted(i) }}<span class="stat-suffix">{{ s.suffix }}</span>
          </div>
          <div class="stat-label">{{ t(`stats.${s.key}`) }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const stats = [
  { key: 'mentors', target: 1247, suffix: '+' },
  { key: 'certs', target: 5830, suffix: '+' },
  { key: 'fields', target: 52, suffix: '' },
  { key: 'employment', target: 94, suffix: '%' }
] as const

const values = ref<number[]>(stats.map(() => 0))

const formatted = (i: number) => values.value[i].toLocaleString('en-US')

const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t))

const animateAll = () => {
  const duration = 2000
  const startTime = performance.now()
  const tick = (now: number) => {
    const tt = Math.min(1, (now - startTime) / duration)
    const eased = easeOutExpo(tt)
    values.value = stats.map((s) => Math.round(eased * s.target))
    if (tt < 1) requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
}

onMounted(() => {
  const el = document.querySelector('.stats-card')
  if (!el) return
  let triggered = false
  const obs = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting && !triggered) {
          triggered = true
          animateAll()
          obs.disconnect()
        }
      }
    },
    { threshold: 0.3 }
  )
  obs.observe(el)
})
</script>

<style scoped>
.stats { padding: 40px 0 60px; position: relative; }

.stats-card {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  padding: 40px;
  background: var(--c-card);
  border: 1px solid var(--c-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  position: relative;
  overflow: hidden;
}
.stats-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 0% 0%, rgba(99, 102, 241, 0.05), transparent 40%),
    radial-gradient(circle at 100% 100%, rgba(236, 72, 153, 0.05), transparent 40%);
  pointer-events: none;
}

.stat { text-align: center; padding: 16px; border-right: 1px solid var(--c-border); position: relative; z-index: 1; }
.stat:last-child { border-right: none; }

.stat-value {
  font-family: 'Sora', sans-serif;
  font-size: clamp(32px, 4vw, 48px);
  font-weight: 800;
  letter-spacing: -0.03em;
  background: var(--grad-main);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  line-height: 1.1;
  margin-bottom: 6px;
  font-variant-numeric: tabular-nums;
}
.stat-suffix { font-size: 0.7em; }

.stat-label { font-size: 14px; color: var(--c-text-muted); font-weight: 500; }

@media (max-width: 1024px) { .stats-card { padding: 32px 24px; } }

@media (max-width: 768px) {
  .stats-card { grid-template-columns: repeat(2, 1fr); padding: 24px 16px; gap: 0; }
  .stat { border-right: none; border-bottom: 1px solid var(--c-border); padding: 20px 12px; }
  .stat:nth-child(2n) { border-right: none; }
  .stat:nth-child(2n+1) { border-right: 1px solid var(--c-border); }
  .stat:nth-last-child(-n+2) { border-bottom: none; }
}
</style>
