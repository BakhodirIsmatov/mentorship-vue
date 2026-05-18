<template>
  <section class="stats" :aria-label="t('stats.title1')">
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

      <div class="stats-shell sr-zoom-up">
        <article class="stats-summary sr-up sr-delay-1">
          <div class="summary-copy">
            <div class="summary-kicker">
              {{ summaryMode === 'approval' ? t('stats.kickerApproval') : t('stats.kickerTotal') }}
            </div>
            <div class="summary-label">{{ statLabel('summary') }}</div>
            <div class="summary-value">
              {{ statValue('summary') }}<span class="stat-suffix">{{ statSuffix('summary') }}</span>
            </div>
            <div class="summary-note">{{ statDescription('summary') }}</div>
          </div>
          <div class="summary-meta">
            <span>{{ t('stats.summaryFoot') }}</span>
            <span class="summary-pulse" />
          </div>
        </article>

        <div class="stats-rail">
          <section class="stats-column sr-up sr-delay-2">
            <div class="group-title">{{ t('stats.flowTitle') }}</div>
            <div class="stats-list">
              <article
                v-for="(key, i) in flowStatKeys"
                :key="key"
                class="stat-row"
                :class="`sr-up sr-delay-${i + 2}`"
              >
                <div class="stat-row-main">
                  <div class="stat-icon" :class="`stat-icon-${key}`">
                    <svg v-if="key === 'approved'" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <svg v-else-if="key === 'pending'" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 2" />
                    </svg>
                    <svg v-else viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="9" />
                      <path d="m15 9-6 6M9 9l6 6" />
                    </svg>
                  </div>
                  <div>
                    <div class="stat-name">{{ statLabel(key) }}</div>
                    <div class="stat-label">{{ statDescription(key) }}</div>
                  </div>
                </div>
                <div class="stat-value stat-value-compact">{{ statValue(key) }}<span class="stat-suffix">{{ statSuffix(key) }}</span></div>
              </article>
            </div>
          </section>

          <section class="stats-column sr-up sr-delay-3">
            <div class="group-title">{{ t('stats.communityTitle') }}</div>
            <div class="stats-list">
              <article
                v-for="(key, i) in userStatKeys"
                :key="key"
                class="stat-row"
                :class="`sr-up sr-delay-${i + 3}`"
              >
                <div class="stat-row-main">
                  <div class="stat-icon" :class="`stat-icon-${key}`">
                    <svg v-if="key === 'mentors'" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M12 14c3.314 0 6-2.686 6-6S15.314 2 12 2 6 4.686 6 8s2.686 6 6 6Z" />
                      <path d="M4 21c1.6-2.667 4.267-4 8-4s6.4 1.333 8 4" />
                    </svg>
                    <svg v-else viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M3 8 12 4l9 4-9 4-9-4Z" />
                      <path d="M7 10v4c0 1.657 2.239 3 5 3s5-1.343 5-3v-4" />
                    </svg>
                  </div>
                  <div>
                    <div class="stat-name">{{ statLabel(key) }}</div>
                    <div class="stat-label">{{ statDescription(key) }}</div>
                  </div>
                </div>
                <div class="stat-value stat-value-compact">{{ statValue(key) }}<span class="stat-suffix">{{ statSuffix(key) }}</span></div>
              </article>
            </div>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

type StatKey = 'approved' | 'pending' | 'rejected' | 'mentors' | 'students' | 'summary'

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
  | 'mentor'
  | 'mentors'
  | 'mentorCount'
  | 'mentorsCount'
  | 'teachers'
  | 'teacherCount'
  | 'ustozlar'
  | 'ustozlar_soni'
  | 'user'
  | 'users'
  | 'userCount'
  | 'usersCount'
  | 'students'
  | 'studentCount'
  | 'studentsCount'
  | 'apprentices'
  | 'apprenticeCount'
  | 'shogirdlar'
  | 'shogirdlar_soni'
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
  { key: 'mentors', target: 320, suffix: '+' },
  { key: 'students', target: 2480, suffix: '+' },
  { key: 'summary', target: 88, suffix: '' }
] as const satisfies ReadonlyArray<{ key: StatKey; target: number; suffix: string }>

const values = ref<number[]>(stats.map(() => 0))
const targets = ref<number[]>(stats.map((stat) => stat.target))
const summaryMode = ref<'approval' | 'total'>('approval')
const flowStatKeys: StatKey[] = ['approved', 'pending', 'rejected']
const userStatKeys: StatKey[] = ['mentors', 'students']

const statIndex = (key: StatKey) => stats.findIndex((stat) => stat.key === key)
const statValue = (key: StatKey) => values.value[statIndex(key)].toLocaleString('en-US')
const statSuffix = (key: StatKey) => {
  if (key === 'summary') {
    return summaryMode.value === 'approval' ? '%' : '+'
  }
  return stats[statIndex(key)].suffix
}
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
  if (key === 'mentors') return t('stats.descMentors')
  if (key === 'students') return t('stats.descStudents')
  return t(summaryMode.value === 'approval' ? 'stats.descApproval' : 'stats.descTotal')
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
    const mentors = resolveValue(payload, ['mentor', 'mentors', 'mentorCount', 'mentorsCount', 'teachers', 'teacherCount', 'ustozlar', 'ustozlar_soni'])
    const students = resolveValue(payload, ['user', 'users', 'userCount', 'usersCount', 'students', 'studentCount', 'studentsCount', 'apprentices', 'apprenticeCount', 'shogirdlar', 'shogirdlar_soni'])
    const apiTotal = resolveValue(payload, ['total', 'totalCount', 'requests', 'requestCount', 'all'])
    const approvalRate = resolveValue(payload, ['approvalRate', 'approvalPercent', 'approval_percentage', 'successRate'])
    const total = apiTotal || approved + pending + rejected

    summaryMode.value = approvalRate > 0 ? 'approval' : 'total'

    const nextTargets = {
      approved,
      pending,
      rejected,
      mentors,
      students,
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
  const el = document.querySelector('.stats-shell')
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

.stats-shell {
  display: grid;
  gap: 22px;
}

.stats-summary {
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 20px;
  align-items: end;
  padding: 26px 0 22px;
  border-top: 1px solid color-mix(in srgb, var(--c-border) 68%, rgba(99, 102, 241, 0.22) 32%);
  border-bottom: 1px solid color-mix(in srgb, var(--c-border) 68%, rgba(99, 102, 241, 0.22) 32%);
  backdrop-filter: blur(18px);
}

.stats-summary::before {
  content: '';
  position: absolute;
  inset: auto 0 -10px 0;
  height: 1px;
  background:
    linear-gradient(90deg, rgba(99, 102, 241, 0), rgba(99, 102, 241, 0.24), rgba(236, 72, 153, 0.24), rgba(236, 72, 153, 0));
  pointer-events: none;
}

.stats-summary::after {
  content: '';
  position: absolute;
  inset: -40% auto auto -10%;
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.14), transparent 70%);
  transform: translateX(-120%);
  animation: floatA 12s ease-in-out infinite;
  pointer-events: none;
}

.stats-rail {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 48px;
}

.summary-copy,
.summary-meta,
.stats-column,
.stat-row {
  position: relative;
  z-index: 1;
}

.summary-copy {
  max-width: 700px;
}

.summary-kicker {
  margin-bottom: 10px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--c-text-soft);
}

.summary-label {
  margin-bottom: 8px;
  font-size: clamp(18px, 2vw, 22px);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--c-text);
}

.summary-value {
  margin-bottom: 8px;
  font-family: 'Sora', sans-serif;
  font-size: clamp(52px, 8vw, 96px);
  font-weight: 800;
  line-height: 0.95;
  letter-spacing: -0.05em;
  font-variant-numeric: tabular-nums;
  color: var(--c-text);
}

.summary-value .stat-suffix {
  margin-left: 4px;
  font-size: 0.36em;
  color: var(--c-primary);
}

.summary-note {
  max-width: 48ch;
  font-size: 14px;
  line-height: 1.65;
  color: var(--c-text-muted);
}

.summary-meta {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  justify-self: end;
  align-self: center;
  padding: 10px 14px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--c-card) 70%, transparent 30%);
  border: 1px solid color-mix(in srgb, var(--c-border) 76%, rgba(99, 102, 241, 0.2) 24%);
  color: var(--c-text-muted);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.04em;
}

.summary-pulse {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
  background: linear-gradient(135deg, #6366f1, #ec4899);
  box-shadow:
    0 0 0 0 rgba(99, 102, 241, 0.24),
    0 0 0 10px rgba(99, 102, 241, 0.08);
  animation: pulse 2.4s ease-out infinite;
}

.stats-column {
  min-width: 0;
}

.group-title {
  margin-bottom: 18px;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--c-text-soft);
}

.stats-list {
  display: grid;
  gap: 0;
  border-top: 1px solid color-mix(in srgb, var(--c-border) 76%, rgba(99, 102, 241, 0.12) 24%);
}

.stat-row {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 18px;
  align-items: center;
  padding: 18px 0;
  border-bottom: 1px solid color-mix(in srgb, var(--c-border) 76%, rgba(99, 102, 241, 0.12) 24%);
  transition:
    transform 280ms cubic-bezier(0.22, 1, 0.36, 1),
    border-color 280ms ease;
}

.stat-row::before {
  content: '';
  position: absolute;
  inset: auto auto 0 0;
  width: 0;
  height: 1px;
  background: linear-gradient(90deg, rgba(99, 102, 241, 0.8), rgba(236, 72, 153, 0.8));
  opacity: 0;
  transition: width 320ms ease, opacity 320ms ease;
}

.stat-row:hover {
  transform: translateX(6px);
  border-color: color-mix(in srgb, var(--c-border) 58%, rgba(99, 102, 241, 0.26) 42%);
}

.stat-row:hover::before {
  opacity: 1;
  width: 100%;
}

.stat-row-main {
  display: flex;
  align-items: center;
  gap: 14px;
  min-width: 0;
}

.stat-icon {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  flex-shrink: 0;
  border: 1px solid transparent;
  transition: transform 320ms cubic-bezier(0.22, 1, 0.36, 1), border-color 320ms ease, background 320ms ease;
}

.stat-row:hover .stat-icon {
  transform: scale(1.05);
}

.stat-icon-approved {
  background: rgba(34, 197, 94, 0.09);
  border-color: rgba(34, 197, 94, 0.16);
  color: #16a34a;
}

.stat-icon-pending {
  background: rgba(245, 158, 11, 0.1);
  border-color: rgba(245, 158, 11, 0.16);
  color: #d97706;
}

.stat-icon-rejected {
  background: rgba(239, 68, 68, 0.09);
  border-color: rgba(239, 68, 68, 0.14);
  color: #dc2626;
}

.stat-icon-mentors {
  background: rgba(16, 185, 129, 0.1);
  border-color: rgba(16, 185, 129, 0.14);
  color: #059669;
}

.stat-icon-students {
  background: rgba(59, 130, 246, 0.09);
  border-color: rgba(59, 130, 246, 0.14);
  color: #2563eb;
}

.stat-value {
  font-family: 'Sora', sans-serif;
  font-size: clamp(28px, 3.6vw, 38px);
  font-weight: 700;
  letter-spacing: -0.04em;
  line-height: 1;
  color: var(--c-text);
  font-variant-numeric: tabular-nums;
}

.stat-value-compact {
  flex-shrink: 0;
  font-size: clamp(26px, 3vw, 34px);
}

.stat-suffix { font-size: 0.7em; }

.stat-name {
  margin-bottom: 3px;
  font-size: 15px;
  font-weight: 700;
  color: var(--c-text);
}

.stat-label {
  font-size: 13px;
  color: var(--c-text-muted);
  font-weight: 500;
  line-height: 1.55;
}

@keyframes floatA {
  0%, 100% { transform: translate3d(0, 0, 0); }
  50% { transform: translate3d(16px, -20px, 0); }
}

@keyframes floatB {
  0%, 100% { transform: translate3d(0, 0, 0); }
  50% { transform: translate3d(-20px, 18px, 0); }
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
  .stats-summary {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  .summary-meta {
    justify-self: start;
  }
  .stats-rail {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}

@media (max-width: 768px) {
  .stats-head { margin-bottom: 28px; }
  .summary-label {
    font-size: 16px;
  }
  .summary-note {
    font-size: 13px;
  }
  .stat-row {
    grid-template-columns: 1fr;
    gap: 12px;
    align-items: start;
  }
  .stat-value-compact {
    padding-left: 58px;
  }
}

@media (max-width: 540px) {
  .stats { padding: 56px 0 68px; }
  .stats-shell { gap: 18px; }
  .stats-summary {
    padding: 18px 0;
  }
  .summary-value {
    font-size: clamp(44px, 17vw, 68px);
  }
  .summary-meta {
    width: 100%;
    justify-content: space-between;
  }
  .stats-rail {
    gap: 26px;
  }
  .group-title {
    margin-bottom: 14px;
  }
  .stat-row {
    padding: 15px 0;
  }
  .stat-icon {
    width: 40px;
    height: 40px;
  }
  .stat-name {
    font-size: 14px;
  }
  .stat-label {
    font-size: 12px;
  }
  .stat-value-compact {
    padding-left: 54px;
    font-size: 24px;
  }
}

:root[data-theme='dark'] .stats-summary {
  border-top-color: rgba(99, 102, 241, 0.18);
  border-bottom-color: rgba(99, 102, 241, 0.18);
}

:root[data-theme='dark'] .summary-meta {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(148, 163, 184, 0.12);
}

:root[data-theme='dark'] .stats-list,
:root[data-theme='dark'] .stat-row {
  border-color: rgba(99, 102, 241, 0.12);
}

:root[data-theme='dark'] .stat-row:hover {
  border-color: rgba(99, 102, 241, 0.24);
}

:root[data-theme='dark'] .stat-value,
:root[data-theme='dark'] .summary-value,
:root[data-theme='dark'] .summary-label,
:root[data-theme='dark'] .stat-name {
  color: #f8fafc;
}
</style>
