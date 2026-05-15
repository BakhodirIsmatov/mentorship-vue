<template>
  <section class="audience section" id="audience">
    <div class="container">
      <header class="section-header sr-up">
        <h2 class="section-title">
          {{ t('audience.title1') }}
          <span class="gradient-text">{{ t('audience.titleHl') }}</span>
        </h2>
        <p class="section-subtitle">{{ t('audience.subtitle') }}</p>
      </header>

      <div class="grid">
        <!-- Apprentices -->
        <article class="aud-card aud-light sr-right">
          <div class="aud-head">
            <div class="aud-icon aud-icon-light">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
            </div>
            <div class="aud-tag">{{ t('audience.studTag') }}</div>
          </div>
          <h3 class="aud-title">{{ t('audience.studTitle') }}</h3>
          <p class="aud-text">{{ t('audience.studText') }}</p>
          <ul class="aud-list">
            <li v-for="i in 3" :key="i">
              <span class="check">
                <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              </span>
              {{ t(`audience.studL${i}`) }}
            </li>
          </ul>
          <a href="#download" class="btn btn-primary aud-cta">
            {{ t('audience.studCta') }}
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
        </article>

        <!-- Mentors -->
        <article class="aud-card aud-dark sr-left">
          <div class="aud-glow" aria-hidden="true" />
          <div class="aud-head">
            <div class="aud-icon aud-icon-dark">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <div class="aud-tag aud-tag-dark">{{ t('audience.mentTag') }}</div>
          </div>
          <h3 class="aud-title aud-title-dark">{{ t('audience.mentTitle') }}</h3>
          <p class="aud-text aud-text-dark">{{ t('audience.mentText') }}</p>
          <ul class="aud-list aud-list-dark">
            <li v-for="i in 3" :key="i">
              <span class="check check-dark">
                <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              </span>
              {{ t(`audience.mentL${i}`) }}
            </li>
          </ul>
          <a href="#download" class="btn btn-ghost aud-cta">
            {{ t('audience.mentCta') }}
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<style scoped>
.grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }

.aud-card {
  position: relative;
  padding: 48px 40px;
  border-radius: var(--radius-xl);
  overflow: hidden;
  isolation: isolate;
  transition:
    transform 320ms cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 320ms cubic-bezier(0.22, 1, 0.36, 1),
    border-color 320ms ease;
}

.aud-light { background: var(--c-card); border: 1px solid var(--c-border); box-shadow: var(--shadow-md); }
.aud-dark { background: var(--grad-main); color: #fff; box-shadow: 0 30px 70px rgba(99, 102, 241, 0.35); }
.aud-card::after {
  content: '';
  position: absolute;
  inset: auto -20% -55% auto;
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.12), transparent 68%);
  opacity: 0;
  transform: scale(0.7);
  transition:
    opacity 320ms ease,
    transform 420ms cubic-bezier(0.22, 1, 0.36, 1);
  pointer-events: none;
}
.aud-card:hover {
  transform: translateY(-8px);
}
.aud-light:hover {
  box-shadow: 0 28px 60px rgba(15, 23, 42, 0.12);
  border-color: rgba(99, 102, 241, 0.22);
}
.aud-dark:hover {
  box-shadow: 0 36px 80px rgba(99, 102, 241, 0.42);
}
.aud-card:hover::after {
  opacity: 1;
  transform: scale(1);
}
.aud-dark .aud-glow {
  position: absolute;
  top: -100px;
  right: -100px;
  width: 320px;
  height: 320px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.18), transparent 65%);
  border-radius: 50%;
  pointer-events: none;
}

.aud-head {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 24px;
}

.aud-icon {
  width: 64px;
  height: 64px;
  border-radius: 18px;
  display: grid;
  place-items: center;
  flex-shrink: 0;
  transition:
    transform 320ms cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 320ms ease,
    background-color 320ms ease;
}
.aud-icon-light { background: var(--grad-soft); color: var(--c-primary); }
.aud-icon-dark { background: rgba(255, 255, 255, 0.18); color: #fff; }

.aud-tag {
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  background: var(--grad-soft);
  color: var(--c-primary);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  border-radius: 999px;
  transition:
    transform 320ms cubic-bezier(0.22, 1, 0.36, 1),
    background-color 320ms ease,
    color 320ms ease,
    box-shadow 320ms ease;
}
.aud-tag-dark { background: rgba(255, 255, 255, 0.18); color: #fff; backdrop-filter: blur(6px); }

.aud-card:hover .aud-icon {
  transform: translateY(-3px) scale(1.04) rotate(-4deg);
}
.aud-light:hover .aud-icon-light {
  box-shadow: 0 18px 34px rgba(99, 102, 241, 0.18);
}
.aud-dark:hover .aud-icon-dark {
  box-shadow: 0 18px 34px rgba(15, 23, 42, 0.22);
}
.aud-card:hover .aud-tag {
  transform: translateX(4px);
}

.aud-title { font-size: clamp(22px, 2.6vw, 28px); font-weight: 800; letter-spacing: -0.02em; margin-bottom: 14px; line-height: 1.25; color: var(--c-text); }
.aud-title-dark { color: #fff; }

.aud-text { font-size: 15.5px; line-height: 1.7; color: var(--c-text-muted); margin-bottom: 24px; }
.aud-text-dark { color: rgba(255, 255, 255, 0.88); }

.aud-list { display: flex; flex-direction: column; gap: 10px; margin-bottom: 32px; }
.aud-list li { display: flex; align-items: center; gap: 12px; font-size: 14.5px; font-weight: 500; color: var(--c-text); }
.aud-list-dark li { color: rgba(255, 255, 255, 0.92); }

.check {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: var(--grad-main);
  color: #fff;
  display: grid;
  place-items: center;
  flex-shrink: 0;
}
.check-dark { background: rgba(255, 255, 255, 0.22); border: 1px solid rgba(255, 255, 255, 0.4); }

.aud-cta { width: fit-content; }

@media (max-width: 1024px) {
  .grid { grid-template-columns: 1fr; }
  .aud-card { padding: 40px 32px; }
}

@media (max-width: 540px) {
  .aud-card { padding: 32px 24px; }
  .aud-head { gap: 12px; }
  .aud-icon { width: 56px; height: 56px; border-radius: 16px; }
}
</style>
