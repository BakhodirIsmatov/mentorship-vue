<template>
  <div class="phone-wrap">
    <!-- Floating cards -->
    <div class="float-card float-cert" aria-hidden="true">
      <div class="fc-icon fc-icon-green">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <div class="fc-body">
        <div class="fc-title">{{ t('phone.floatCert') }}</div>
        <div class="fc-meta">{{ t('phone.floatCertMeta') }}</div>
      </div>
    </div>

    <div class="float-card float-rating" aria-hidden="true">
      <div class="fc-icon fc-icon-amber">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </div>
      <div class="fc-body">
        <div class="fc-title">{{ t('phone.floatRating') }}</div>
        <div class="fc-meta">{{ t('phone.floatRatingMeta') }}</div>
      </div>
    </div>

    <div class="float-card float-progress" aria-hidden="true">
      <div class="fc-icon fc-icon-purple">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
          <polyline points="16 7 22 7 22 13" />
        </svg>
      </div>
      <div class="fc-body">
        <div class="fc-title">{{ t('phone.floatProgress') }}</div>
        <div class="fc-meta">{{ t('phone.floatProgressMeta') }}</div>
      </div>
    </div>

    <!-- Phone -->
    <div class="phone" role="img" aria-label="Ustoz mobile app">
      <div class="phone-frame">
        <div class="phone-notch" />
        <div class="phone-screen">
          <div class="status-bar">
            <span class="time">9:41</span>
            <div class="status-icons">
              <svg viewBox="0 0 18 12" width="16" height="11" fill="currentColor">
                <rect x="0" y="8" width="3" height="4" rx="0.5"/>
                <rect x="5" y="6" width="3" height="6" rx="0.5"/>
                <rect x="10" y="3" width="3" height="9" rx="0.5"/>
                <rect x="15" y="0" width="3" height="12" rx="0.5"/>
              </svg>
              <svg viewBox="0 0 16 12" width="14" height="11" fill="currentColor">
                <path d="M8 2c2.5 0 4.8 1 6.5 2.6l-1 1.1A7.5 7.5 0 0 0 8 3.5c-2 0-3.9.7-5.5 2.2l-1-1.1C3.2 3 5.5 2 8 2zm0 3c1.6 0 3.1.6 4.3 1.7l-1 1.1A4.5 4.5 0 0 0 8 6.5c-1.2 0-2.4.4-3.3 1.3l-1-1.1A6 6 0 0 1 8 5zm0 3c.8 0 1.6.3 2.1.8L8 10l-2.1-1.2A3 3 0 0 1 8 8z"/>
              </svg>
              <div class="battery"><div class="battery-level" /></div>
            </div>
          </div>

          <div class="screen-header">
            <div class="greet-row">
              <div>
                <div class="greet-small">{{ t('phone.greeting') }}</div>
                <div class="greet-name">{{ t('phone.name') }}</div>
              </div>
              <div class="avatar-circle">AK</div>
            </div>
          </div>

          <div class="progress-card">
            <div class="pc-head">
              <div>
                <div class="pc-label">{{ t('phone.progressLabel') }}</div>
                <div class="pc-title">{{ t('phone.progressTitle') }}</div>
              </div>
              <div class="pc-percent">{{ Math.round(progress) }}%</div>
            </div>
            <div class="pc-bar"><div class="pc-fill" :style="{ width: progress + '%' }" /></div>
            <div class="pc-meta">
              <span>{{ t('phone.progressLessons') }}</span>
              <span>{{ t('phone.progressUntil') }}</span>
            </div>
          </div>

          <div class="activities">
            <div class="act-title">{{ t('phone.todayActivity') }}</div>

            <div class="act-card">
              <div class="act-icon act-icon-purple">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                </svg>
              </div>
              <div class="act-body">
                <div class="act-name">{{ t('phone.act1Name') }}</div>
                <div class="act-meta">{{ t('phone.act1Meta') }}</div>
              </div>
              <div class="act-status status-done">{{ t('phone.act1Status') }}</div>
            </div>

            <div class="act-card">
              <div class="act-icon act-icon-pink">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="23 7 16 12 23 17 23 7"/>
                  <rect x="1" y="5" width="15" height="14" rx="2"/>
                </svg>
              </div>
              <div class="act-body">
                <div class="act-name">{{ t('phone.act2Name') }}</div>
                <div class="act-meta">{{ t('phone.act2Meta') }}</div>
              </div>
              <div class="act-status status-active">{{ t('phone.act2Status') }}</div>
            </div>

            <div class="act-card">
              <div class="act-icon act-icon-amber">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                  <path d="M2 12s4-8 10-8 10 8 10 8-4 8-10 8S2 12 2 12z"/>
                </svg>
              </div>
              <div class="act-body">
                <div class="act-name">{{ t('phone.act3Name') }}</div>
                <div class="act-meta">{{ t('phone.act3Meta') }}</div>
              </div>
              <div class="act-status status-soon">{{ t('phone.act3Status') }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="phone-shadow" />
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

const progress = ref(0)
let observer: IntersectionObserver | null = null
let started = false

const animateProgress = () => {
  if (started) return
  started = true
  const duration = 2200
  const target = 75
  const startTime = performance.now()
  const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t))
  const tick = (now: number) => {
    const tt = Math.min(1, (now - startTime) / duration)
    progress.value = easeOutExpo(tt) * target
    if (tt < 1) requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
}

onMounted(() => {
  const el = document.querySelector('.phone')
  if (!el) return
  observer = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          setTimeout(animateProgress, 600)
          observer?.disconnect()
        }
      }
    },
    { threshold: 0.3 }
  )
  observer.observe(el)
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<style scoped>
.phone-wrap {
  position: relative;
  width: 320px;
  height: 640px;
  margin: 0 auto;
}

.phone {
  position: relative;
  width: 320px;
  height: 640px;
  animation: float 6s ease-in-out infinite;
  will-change: transform;
}
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}

.phone-frame {
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #1e293b 0%, #0f172a 100%);
  border-radius: 48px;
  padding: 12px;
  box-shadow:
    inset 0 0 0 2px rgba(255, 255, 255, 0.08),
    0 30px 60px rgba(15, 23, 42, 0.25),
    0 50px 100px rgba(99, 102, 241, 0.18);
}

.phone-notch {
  position: absolute;
  top: 12px;
  left: 50%;
  transform: translateX(-50%);
  width: 110px;
  height: 28px;
  background: #0f172a;
  border-radius: 0 0 18px 18px;
  z-index: 2;
}

/* Phone screen — har doim "yorug'" qoladi (haqiqiy iPhone'larda interfeys yorug') */
.phone-screen {
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 60%);
  border-radius: 38px;
  padding: 44px 18px 22px;
  overflow: hidden;
  color: #0f172a;
}

.phone-shadow {
  position: absolute;
  bottom: -40px;
  left: 10%;
  right: 10%;
  height: 40px;
  background: radial-gradient(ellipse at center, rgba(99, 102, 241, 0.3) 0%, transparent 70%);
  filter: blur(20px);
  z-index: -1;
}

/* ============ STATUS BAR ============ */
.status-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  font-weight: 600;
  color: #0f172a;
  padding: 0 8px;
  margin-bottom: 14px;
}
.status-icons { display: flex; align-items: center; gap: 5px; color: #0f172a; }
.battery {
  width: 22px;
  height: 11px;
  border: 1px solid #0f172a;
  border-radius: 3px;
  padding: 1px;
  position: relative;
}
.battery::after {
  content: '';
  position: absolute;
  right: -3px;
  top: 3px;
  width: 2px;
  height: 5px;
  background: #0f172a;
  border-radius: 0 1px 1px 0;
}
.battery-level { width: 80%; height: 100%; background: #0f172a; border-radius: 1px; }

/* ============ HEADER ============ */
.screen-header { margin-bottom: 16px; padding: 0 4px; }
.greet-row { display: flex; justify-content: space-between; align-items: center; }
.greet-small { font-size: 11px; color: #64748b; margin-bottom: 2px; }
.greet-name {
  font-family: 'Sora', sans-serif;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: -0.02em;
  color: #0f172a;
}
.avatar-circle {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--grad-main);
  color: #fff;
  display: grid;
  place-items: center;
  font-weight: 700;
  font-size: 12px;
  box-shadow: 0 6px 14px rgba(99, 102, 241, 0.35);
}

/* ============ PROGRESS ============ */
.progress-card {
  background: var(--grad-main);
  border-radius: 18px;
  padding: 16px;
  color: #fff;
  margin-bottom: 16px;
  box-shadow: 0 12px 28px rgba(99, 102, 241, 0.35);
  position: relative;
  overflow: hidden;
}
.progress-card::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -30%;
  width: 180px;
  height: 180px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.18), transparent 70%);
  pointer-events: none;
}
.pc-head { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px; }
.pc-label { font-size: 10px; text-transform: uppercase; letter-spacing: 0.08em; opacity: 0.8; margin-bottom: 2px; }
.pc-title { font-family: 'Sora', sans-serif; font-weight: 700; font-size: 15px; }
.pc-percent { font-family: 'Sora', sans-serif; font-weight: 800; font-size: 22px; letter-spacing: -0.02em; }
.pc-bar { height: 6px; background: rgba(255, 255, 255, 0.25); border-radius: 999px; overflow: hidden; margin-bottom: 10px; }
.pc-fill {
  height: 100%;
  background: #fff;
  border-radius: 999px;
  transition: width 0.05s linear;
  box-shadow: 0 0 12px rgba(255, 255, 255, 0.6);
}
.pc-meta { display: flex; justify-content: space-between; font-size: 10px; opacity: 0.85; }

/* ============ ACTIVITIES ============ */
.act-title { font-family: 'Sora', sans-serif; font-weight: 700; font-size: 13px; margin-bottom: 10px; padding: 0 4px; color: #0f172a; }
.activities { display: flex; flex-direction: column; gap: 8px; }
.act-card {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  box-shadow: 0 2px 6px rgba(15, 23, 42, 0.04);
}
.act-icon { width: 32px; height: 32px; border-radius: 9px; display: grid; place-items: center; flex-shrink: 0; color: #fff; }
.act-icon-purple { background: var(--grad-purple); }
.act-icon-pink { background: var(--grad-pink); }
.act-icon-amber { background: var(--grad-amber); }

.act-body { flex: 1; min-width: 0; }
.act-name { font-weight: 600; font-size: 12px; margin-bottom: 1px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; color: #0f172a; }
.act-meta { font-size: 10px; color: #64748b; }
.act-status { font-size: 10px; font-weight: 600; padding: 4px 8px; border-radius: 999px; white-space: nowrap; }
.status-done { background: rgba(16, 185, 129, 0.12); color: var(--c-green); }
.status-active { background: rgba(236, 72, 153, 0.12); color: var(--c-accent); }
.status-soon { background: rgba(245, 158, 11, 0.12); color: var(--c-amber); }

/* ============ FLOATING CARDS ============ */
.float-card {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 14px;
  background: var(--c-card);
  border-radius: 14px;
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.12), 0 4px 12px rgba(15, 23, 42, 0.06);
  border: 1px solid var(--c-border);
  z-index: 3;
  will-change: transform;
}
.fc-icon { width: 32px; height: 32px; border-radius: 9px; display: grid; place-items: center; color: #fff; flex-shrink: 0; }
.fc-icon-green { background: var(--grad-green); }
.fc-icon-amber { background: var(--grad-amber); }
.fc-icon-purple { background: var(--grad-purple); }

.fc-title { font-weight: 700; font-size: 13px; line-height: 1.2; color: var(--c-text); }
.fc-meta { font-size: 11px; color: var(--c-text-muted); margin-top: 2px; }

.float-cert { top: 60px; left: -50px; animation: floatA 5s ease-in-out infinite; }
.float-rating { top: 200px; right: -60px; animation: floatB 6s ease-in-out infinite 0.6s; }
.float-progress { bottom: 80px; left: -40px; animation: floatA 5.5s ease-in-out infinite 1.2s; }

@keyframes floatA {
  0%, 100% { transform: translateY(0) rotate(-2deg); }
  50% { transform: translateY(-14px) rotate(-2deg); }
}
@keyframes floatB {
  0%, 100% { transform: translateY(0) rotate(2deg); }
  50% { transform: translateY(-14px) rotate(2deg); }
}

@media (max-width: 768px) {
  .phone-wrap { width: 280px; height: 560px; }
  .phone { width: 280px; height: 560px; }
  .float-cert { top: 40px; left: -16px; }
  .float-rating { top: 170px; right: -16px; }
  .float-progress { bottom: 60px; left: -10px; }
}

/* Juda tor ekranlarda (320–360px) — float kartalarni telefon ichiga
   joylashtirib viewport tashqarisiga chiqishini oldini olamiz. */
@media (max-width: 380px) {
  .phone-wrap { width: 260px; height: 540px; }
  .phone { width: 260px; height: 540px; }
  .float-card { padding: 10px 12px; transform: scale(0.92); transform-origin: left center; }
  .float-cert { top: 30px; left: 4px; }
  .float-rating { top: 150px; right: 4px; transform-origin: right center; }
  .float-progress { bottom: 50px; left: 4px; }
  .fc-title { font-size: 12px; }
  .fc-meta { font-size: 10px; }
}
</style>
