<template>
  <section class="process section" id="process">
    <div class="container">
      <header class="section-header sr-up">
        <span class="eyebrow"><span class="eyebrow-dot" /> {{ t('process.eyebrow') }}</span>
        <h2 class="section-title">
          <span class="gradient-text">{{ t('process.titleHl') }}</span> {{ t('process.title2') }}
        </h2>
        <p class="section-subtitle">{{ t('process.subtitle') }}</p>
      </header>

      <div class="track">
        <div class="track-line" aria-hidden="true">
          <div class="track-line-fill" />
        </div>

        <div class="steps">
          <article
            v-for="(s, i) in steps"
            :key="s.key"
            class="step sr-zoom-up"
            :class="`sr-delay-${i + 1}`"
          >
            <div class="step-badge">{{ String(i + 1).padStart(2, '0') }}</div>
            <div class="step-icon" v-html="s.icon" />
            <h3 class="step-title">{{ t(`process.${s.key}Title`) }}</h3>
            <p class="step-text">{{ t(`process.${s.key}Text`) }}</p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const steps = [
  { key: 's1', icon: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></svg>` },
  { key: 's2', icon: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>` },
  { key: 's3', icon: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>` },
  { key: 's4', icon: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.5 13l1.5 8-5-3-5 3 1.5-8"/></svg>` }
] as const
</script>

<style scoped>
.track { position: relative; }

.track-line {
  position: absolute;
  top: 50px;
  left: 12%;
  right: 12%;
  height: 2px;
  background: var(--c-border);
  border-radius: 2px;
  z-index: 0;
}
.track-line-fill {
  position: absolute;
  inset: 0;
  background: var(--grad-main);
  border-radius: 2px;
  transform-origin: left;
  transform: scaleX(0);
  transition: transform 1.5s var(--ease-out) 0.4s;
}
.track:has(.is-visible) .track-line-fill { transform: scaleX(1); }

.steps { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; position: relative; z-index: 1; }

.step {
  position: relative;
  padding: 32px 24px;
  background: var(--c-card);
  border: 1px solid var(--c-border);
  border-radius: var(--radius-lg);
  text-align: center;
  transition: transform 0.3s var(--ease-out), box-shadow 0.3s var(--ease-out), border-color 0.3s ease;
}
.step:hover { transform: translateY(-6px); box-shadow: var(--shadow-lg); border-color: rgba(99, 102, 241, 0.3); }

.step-badge {
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
  padding: 6px 12px;
  background: var(--grad-main);
  color: #fff;
  font-family: 'Sora', sans-serif;
  font-weight: 800;
  font-size: 12px;
  letter-spacing: 0.08em;
  border-radius: 999px;
  box-shadow: 0 6px 16px rgba(99, 102, 241, 0.3);
}

.step-icon {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: var(--grad-soft);
  color: var(--c-primary);
  display: grid;
  place-items: center;
  margin: 16px auto 20px;
  transition: transform 0.4s var(--ease-out), background 0.3s ease, color 0.3s ease;
}
.step:hover .step-icon { transform: rotate(-6deg) scale(1.08); background: var(--grad-main); color: #fff; }

.step-title { font-size: 17px; font-weight: 700; margin-bottom: 8px; color: var(--c-text); }
.step-text { font-size: 14px; color: var(--c-text-muted); line-height: 1.6; }

@media (max-width: 1024px) {
  .steps { grid-template-columns: repeat(2, 1fr); gap: 32px 20px; }
  .track-line { display: none; }
}

@media (max-width: 540px) { .steps { grid-template-columns: 1fr; gap: 24px; } }
</style>
