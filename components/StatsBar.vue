<template>
  <section class="stats" :aria-label="t('stats.approved')">
    <div class="stats-bg" aria-hidden="true">
      <div class="stats-orb stats-orb-a" />
      <div class="stats-orb stats-orb-b" />
      <div class="stats-grid" />
    </div>
    <div class="container">
      <header class="stats-head sr-up">
        <h2 class="section-title">
          {{ t('stats.title1') }}
          <span class="gradient-text">{{ t('stats.titleHl') }}</span>
        </h2>
        <p class="section-subtitle">
          {{ t('stats.subtitle') }}
        </p>
      </header>

      <div class="stats-card sr-zoom-up">
        <div
          v-for="(s, i) in stats"
          :key="s.key"
          class="stat"
          :class="[{ 'stat-summary-card': s.key === 'summary' }, `sr-up sr-delay-${i + 1}`]"
        >
          <div class="stat-topline">
            <div class="stat-icon" :class="`stat-icon-${s.key}`">
              <svg v-if="s.key === 'approved'" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <svg v-else-if="s.key === 'pending'" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>
              <svg v-else-if="s.key === 'rejected'" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="9" />
                <path d="m15 9-6 6M9 9l6 6" />
              </svg>
              <svg v-else viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 19h16" />
                <path d="M7 16V8" />
                <path d="M12 16V5" />
                <path d="M17 16v-4" />
              </svg>
            </div>
            <div class="stat-chip">{{ statLabel(s.key) }}</div>
          </div>

          <div v-if="s.key === 'summary'" class="stat-kicker">
            {{ summaryMode === 'approval' ? t('stats.kickerApproval') : t('stats.kickerTotal') }}
          </div>

          <div class="stat-value">
            {{ formatted(i) }}<span class="stat-suffix">{{ s.suffix }}</span>
          </div>
          <div class="stat-label">{{ statDescription(s.key) }}</div>
          <div class="stat-meter" aria-hidden="true">
            <span class="stat-meter-fill" :style="{ transform: `scaleX(${meterScale(i)})` }" />
          </div>
          <div v-if="s.key === 'summary'" class="stat-foot">
            <span>{{ t('stats.summaryFoot') }}</span>
            <span class="stat-foot-pulse" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

type StatKey = 'approved' | 'pending' | 'rejected' | 'summary'

type StatsResponse = Partial<Record<
  | 'approved'
  | 'approvedCount'
  | 'confirmed'
  | 'confirmedCount'
  | 'pending'
  | 'pendingCount'
  | 'waiting'
  | 'waitingCount'
  | 'rejected'
  | 'rejectedCount'
  | 'declined'
  | 'declinedCount'
  | 'total'
  | 'totalCount'
  | 'requests'
  | 'requestCount'
  | 'all'
  | 'approvalRate'
  | 'approvalPercent'
  | 'approval_percentage'
  | 'successRate',
  number | string | null
>>

const stats = [
  { key: 'approved', target: 1284, suffix: '+' },
  { key: 'pending', target: 146, suffix: '+' },
  { key: 'rejected', target: 39, suffix: '+' },
  { key: 'summary', target: 88, suffix: '%' }
] as const satisfies ReadonlyArray<{ key: StatKey; target: number; suffix: string }>

const values = ref<number[]>(stats.map(() => 0))
const targets = ref<number[]>(stats.map((stat) => stat.target))
const summaryMode = ref<'approval' | 'total'>('approval')

const formatted = (i: number) => values.value[i].toLocaleString('en-US')
const statLabel = (key: StatKey) => {
  if (key === 'summary') {
    return t(summaryMode.value === 'approval' ? 'stats.approval' : 'stats.total')
  }
  return t(`stats.${key}`)
}
const statDescription = (key: StatKey) => {
  if (key === 'approved') return t('stats.descApproved')
  if (key === 'pending') return t('stats.descPending')
  if (key === 'rejected') return t('stats.descRejected')
  return t(summaryMode.value === 'approval' ? 'stats.descApproval' : 'stats.descTotal')
}
const meterScale = (index: number) => {
  const max = Math.max(...targets.value, 1)
  return Math.max(0.12, targets.value[index] / max)
}
const toNumber = (value: unknown) => {
  const parsed = Number(value)
  return Number.isFinite(parsed) ? parsed : 0
}

const resolveValue = (payload: StatsResponse, keys: string[]) => {
  for (const key of keys) {
    const value = payload[key as keyof StatsResponse]
    if (value !== undefined && value !== null && value !== '') {
      return toNumber(value)
    }
  }
  return 0
}

const loadStats = async () => {
  try {
    const payload = await $fetch<StatsResponse>('/api/stats')
    const approved = resolveValue(payload, ['approved', 'approvedCount', 'confirmed', 'confirmedCount'])
    const pending = resolveValue(payload, ['pending', 'pendingCount', 'waiting', 'waitingCount'])
    const rejected = resolveValue(payload, ['rejected', 'rejectedCount', 'declined', 'declinedCount'])
    const apiTotal = resolveValue(payload, ['total', 'totalCount', 'requests', 'requestCount', 'all'])
    const approvalRate = resolveValue(payload, ['approvalRate', 'approvalPercent', 'approval_percentage', 'successRate'])
    const total = apiTotal || approved + pending + rejected

    summaryMode.value = approvalRate > 0 ? 'approval' : 'total'

    const nextTargets = {
      approved,
      pending,
      rejected,
      summary: summaryMode.value === 'approval' ? approvalRate : total
    }
    targets.value = stats.map((stat) => nextTargets[stat.key])
  } catch {
    summaryMode.value = 'approval'
    targets.value = stats.map((stat) => stat.target)
  }
}

const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t))

const animateAll = () => {
  const duration = 2000
  const startTime = performance.now()
  const tick = (now: number) => {
    const tt = Math.min(1, (now - startTime) / duration)
    const eased = easeOutExpo(tt)
    values.value = targets.value.map((target) => Math.round(eased * target))
    if (tt < 1) requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
}

onMounted(async () => {
  await loadStats()
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
.stats {
  position: relative;
  padding: 72px 0 84px;
  overflow: hidden;
}

.stats-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.stats-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(70px);
  opacity: 0.48;
}

.stats-orb-a {
  width: 320px;
  height: 320px;
  top: 24px;
  left: -100px;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.24), transparent 68%);
  animation: floatA 12s ease-in-out infinite;
}

.stats-orb-b {
  width: 360px;
  height: 360px;
  right: -140px;
  bottom: -80px;
  background: radial-gradient(circle, rgba(236, 72, 153, 0.2), transparent 68%);
  animation: floatB 14s ease-in-out infinite;
}

.stats-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(to right, rgba(99, 102, 241, 0.06) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(99, 102, 241, 0.06) 1px, transparent 1px);
  background-size: 44px 44px;
  mask-image: radial-gradient(circle at center, black 28%, transparent 78%);
  -webkit-mask-image: radial-gradient(circle at center, black 28%, transparent 78%);
}

.container { position: relative; z-index: 1; }

.stats-head {
  max-width: 760px;
  margin: 0 auto 32px;
  text-align: center;
}

.stats-card {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 14px;
  padding: 18px;
  background: color-mix(in srgb, var(--c-card) 84%, white 16%);
  border: 1px solid color-mix(in srgb, var(--c-border) 82%, rgba(99, 102, 241, 0.28) 18%);
  border-radius: calc(var(--radius-lg) + 8px);
  box-shadow: 0 28px 80px rgba(15, 23, 42, 0.09);
  backdrop-filter: blur(18px);
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
.stats-card::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, transparent 0%, rgba(255, 255, 255, 0.3) 18%, transparent 36%);
  transform: translateX(-120%);
  animation: sheen 9s linear infinite;
  pointer-events: none;
}

.stat {
  grid-column: span 2;
  text-align: left;
  padding: 22px 22px 20px;
  border-radius: 24px;
  border: 1px solid rgba(148, 163, 184, 0.14);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.72), rgba(255, 255, 255, 0.42));
  position: relative;
  z-index: 1;
  overflow: hidden;
  transition:
    transform 320ms cubic-bezier(0.22, 1, 0.36, 1),
    border-color 320ms ease,
    box-shadow 320ms ease;
}
.stat::before {
  content: '';
  position: absolute;
  inset: auto -22% -42% auto;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.12), transparent 70%);
  opacity: 0;
  transform: scale(0.75);
  transition:
    opacity 320ms ease,
    transform 320ms ease;
}
.stat:hover {
  transform: translateY(-8px);
  border-color: rgba(99, 102, 241, 0.18);
  box-shadow: 0 18px 34px rgba(99, 102, 241, 0.12);
}
.stat:hover::before {
  opacity: 1;
  transform: scale(1);
}

.stat-summary-card {
  grid-column: span 6;
  padding: 28px 28px 24px;
  background:
    linear-gradient(135deg, rgba(99, 102, 241, 0.16), rgba(236, 72, 153, 0.08)),
    linear-gradient(180deg, rgba(255, 255, 255, 0.88), rgba(255, 255, 255, 0.55));
  border-color: rgba(99, 102, 241, 0.2);
  box-shadow: 0 24px 48px rgba(99, 102, 241, 0.14);
}
.stat-summary-card::before {
  width: 220px;
  height: 220px;
  inset: auto -6% -44% auto;
  background: radial-gradient(circle, rgba(236, 72, 153, 0.16), transparent 70%);
  opacity: 1;
  transform: scale(1);
}
.stat-summary-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 30px 56px rgba(99, 102, 241, 0.18);
}

.stat-topline {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 18px;
}

.stat-icon {
  width: 42px;
  height: 42px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  flex-shrink: 0;
  transition:
    transform 320ms cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 320ms ease;
}

.stat:hover .stat-icon {
  transform: translateY(-2px) scale(1.06) rotate(-4deg);
}

.stat-icon-approved {
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.18), rgba(16, 185, 129, 0.08));
  color: #16a34a;
}

.stat-icon-pending {
  background: linear-gradient(135deg, rgba(245, 158, 11, 0.18), rgba(251, 191, 36, 0.08));
  color: #d97706;
}

.stat-icon-rejected {
  background: linear-gradient(135deg, rgba(239, 68, 68, 0.18), rgba(248, 113, 113, 0.08));
  color: #dc2626;
}

.stat-icon-summary {
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.18), rgba(236, 72, 153, 0.08));
  color: var(--c-primary);
}

.stat-chip {
  display: inline-flex;
  align-items: center;
  padding: 7px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(148, 163, 184, 0.14);
  color: var(--c-text);
  font-size: 11px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

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

.stat-summary-card .stat-value {
  font-size: clamp(48px, 7vw, 76px);
  line-height: 0.98;
  margin-bottom: 10px;
}

.stat-label {
  min-height: 40px;
  font-size: 13px;
  color: var(--c-text-muted);
  font-weight: 500;
  line-height: 1.5;
}

.stat-kicker {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.68);
  border: 1px solid rgba(99, 102, 241, 0.14);
  color: var(--c-text);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.stat-kicker::before {
  content: '';
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: linear-gradient(135deg, #6366f1, #ec4899);
  box-shadow: 0 0 0 6px rgba(99, 102, 241, 0.08);
}

.stat-meter {
  margin-top: 18px;
  height: 8px;
  border-radius: 999px;
  background: rgba(148, 163, 184, 0.14);
  overflow: hidden;
}

.stat-meter-fill {
  display: block;
  width: 100%;
  height: 100%;
  transform-origin: left center;
  border-radius: inherit;
  background: linear-gradient(90deg, #6366f1 0%, #8b5cf6 48%, #ec4899 100%);
  box-shadow: 0 0 18px rgba(99, 102, 241, 0.28);
  transition: transform 900ms cubic-bezier(0.22, 1, 0.36, 1);
}

.stat-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: 16px;
  color: var(--c-text-muted);
  font-size: 13px;
  font-weight: 600;
}

.stat-foot-pulse {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: linear-gradient(135deg, #6366f1, #ec4899);
  box-shadow:
    0 0 0 0 rgba(99, 102, 241, 0.24),
    0 0 0 10px rgba(99, 102, 241, 0.08);
  animation: pulse 2.4s ease-out infinite;
}

@keyframes floatA {
  0%, 100% { transform: translate3d(0, 0, 0); }
  50% { transform: translate3d(16px, -20px, 0); }
}

@keyframes floatB {
  0%, 100% { transform: translate3d(0, 0, 0); }
  50% { transform: translate3d(-20px, 18px, 0); }
}

@keyframes sheen {
  0% { transform: translateX(-120%); }
  20%, 100% { transform: translateX(160%); }
}

@keyframes pulse {
  0% {
    transform: scale(0.92);
    box-shadow:
      0 0 0 0 rgba(99, 102, 241, 0.32),
      0 0 0 10px rgba(99, 102, 241, 0.08);
  }
  70% {
    transform: scale(1);
    box-shadow:
      0 0 0 10px rgba(99, 102, 241, 0),
      0 0 0 18px rgba(99, 102, 241, 0);
  }
  100% {
    transform: scale(0.92);
    box-shadow:
      0 0 0 0 rgba(99, 102, 241, 0),
      0 0 0 10px rgba(99, 102, 241, 0);
  }
}

@media (max-width: 1024px) {
  .stats { padding: 64px 0 76px; }
  .stats-card { grid-template-columns: repeat(2, 1fr); }
  .stats-card { padding: 16px; }
  .stat { padding: 20px 18px 18px; }
  .stat-summary-card { grid-column: span 2; }
}

@media (max-width: 768px) {
  .stats-head { margin-bottom: 28px; }
  .stats-card { gap: 12px; padding: 14px; }
}

@media (max-width: 540px) {
  .stats { padding: 56px 0 68px; }
  .stats-card { grid-template-columns: 1fr; }
  .stat { grid-column: span 1; }
  .stat-summary-card { grid-column: span 1; padding: 24px 20px 20px; }
  .stat-topline { margin-bottom: 14px; }
  .stat-value { font-size: clamp(28px, 10vw, 40px); }
  .stat-label { min-height: auto; }
}
</style>
