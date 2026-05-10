<template>
  <section class="features section" id="features">
    <div class="container">
      <header class="section-header sr-up">
        <span class="eyebrow"><span class="eyebrow-dot" /> {{ t('features.eyebrow') }}</span>
        <h2 class="section-title">
          {{ t('features.title1') }}<br />
          <span class="gradient-text">{{ t('features.titleHl') }}</span>
        </h2>
        <p class="section-subtitle">{{ t('features.subtitle') }}</p>
      </header>

      <div class="grid">
        <article
          v-for="(f, i) in features"
          :key="f.key"
          class="card sr-zoom-up"
          :class="[`card-${f.color}`, `sr-delay-${i + 1}`]"
        >
          <div class="card-icon" v-html="f.icon" />
          <h3 class="card-title">{{ t(`features.${f.key}Title`) }}</h3>
          <p class="card-text">{{ t(`features.${f.key}Text`) }}</p>
          <div class="card-arrow" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const features = [
  {
    key: 'f1',
    color: 'purple',
    icon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>`
  },
  {
    key: 'f2',
    color: 'pink',
    icon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.5 13l1.5 8-5-3-5 3 1.5-8"/></svg>`
  },
  {
    key: 'f3',
    color: 'amber',
    icon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>`
  },
  {
    key: 'f4',
    color: 'green',
    icon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`
  }
] as const
</script>

<style scoped>
.grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }

.card {
  position: relative;
  padding: 32px;
  background: var(--c-card);
  border: 1px solid var(--c-border);
  border-radius: var(--radius-lg);
  transition: transform 0.35s var(--ease-out), box-shadow 0.35s var(--ease-out),
    color 0.35s ease, border-color 0.35s ease;
  overflow: hidden;
  isolation: isolate;
  cursor: pointer;
}

.card::before {
  content: '';
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.35s ease;
  z-index: -1;
}
.card-purple::before { background: var(--grad-purple); }
.card-pink::before { background: var(--grad-pink); }
.card-amber::before { background: var(--grad-amber); }
.card-green::before { background: var(--grad-green); }

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 24px 50px rgba(15, 23, 42, 0.18);
  color: #fff;
  border-color: transparent;
}
.card:hover::before { opacity: 1; }

.card-icon {
  width: 56px;
  height: 56px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  margin-bottom: 24px;
  color: #fff;
  transition: transform 0.5s var(--ease-out), background 0.35s ease;
}
.card-purple .card-icon { background: var(--grad-purple); }
.card-pink .card-icon { background: var(--grad-pink); }
.card-amber .card-icon { background: var(--grad-amber); }
.card-green .card-icon { background: var(--grad-green); }

.card:hover .card-icon { transform: rotate(-8deg) scale(1.12); background: rgba(255, 255, 255, 0.2); }

.card-title { font-size: 18px; font-weight: 700; margin-bottom: 10px; transition: color 0.35s ease; color: var(--c-text); }
.card-text { font-size: 14.5px; line-height: 1.7; color: var(--c-text-muted); transition: color 0.35s ease; }
.card:hover .card-title { color: #fff; }
.card:hover .card-text { color: rgba(255, 255, 255, 0.92); }

.card-arrow {
  position: absolute;
  top: 24px;
  right: 24px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--c-surface);
  display: grid;
  place-items: center;
  color: var(--c-text-muted);
  opacity: 0;
  transform: translateX(-6px);
  transition: opacity 0.3s ease, transform 0.3s var(--ease-out), background 0.3s ease, color 0.3s ease;
}
.card:hover .card-arrow {
  opacity: 1;
  transform: translateX(0);
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
}

@media (max-width: 1024px) { .grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 540px) { .grid { grid-template-columns: 1fr; gap: 16px; } .card { padding: 24px; } }
</style>
