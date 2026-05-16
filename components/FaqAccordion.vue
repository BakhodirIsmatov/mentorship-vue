<template>
  <section class="faq section" id="faq">
    <div class="faq-bg" aria-hidden="true">
      <div class="faq-orb faq-orb-a" />
      <div class="faq-orb faq-orb-b" />
      <div class="faq-grid" />
    </div>
    <div class="container faq-inner">
      <div class="faq-layout">
        <header class="faq-side sr-up">
          <span class="eyebrow"><span class="eyebrow-dot" /> {{ t('faq.eyebrow') }}</span>
          <h2 class="section-title">
            {{ t('faq.title1') }}
            <span class="gradient-text">{{ t('faq.titleHl') }}</span>
          </h2>
          <p class="section-subtitle">{{ t('faq.subtitle') }}</p>

          <div class="faq-side-card">
            <div class="faq-side-stat">
              <strong>06</strong>
              <span>FAQ</span>
            </div>
            <div class="faq-side-line" />
            <div class="faq-side-points">
              <span class="faq-point">Payment</span>
              <span class="faq-point">Verification</span>
              <span class="faq-point">Recognition</span>
            </div>
          </div>
        </header>

        <div class="list">
          <div
            v-for="i in 6"
            :key="i"
            class="item"
            :class="{ open: openIndex === i }"
          >
            <button
              type="button"
              class="q"
              :aria-expanded="openIndex === i"
              :aria-controls="`faq-${i}`"
              @click="toggle(i)"
            >
              <span class="faq-index">0{{ i }}</span>
              <span class="faq-copy">
                <span class="faq-question">{{ t(`faq.q${i}`) }}</span>
              </span>
              <span class="plus" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </span>
            </button>
            <div
              :id="`faq-${i}`"
              class="a-shell"
              :class="{ open: openIndex === i }"
            >
              <div class="a-wrap">
                <p class="a">{{ t(`faq.a${i}`) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const openIndex = ref<number | null>(1)
const toggle = (i: number) => {
  openIndex.value = openIndex.value === i ? null : i
}
</script>

<style scoped>
.faq {
  position: relative;
  overflow: hidden;
}

.faq-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.faq-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.42;
}

.faq-orb-a {
  width: 360px;
  height: 360px;
  top: 40px;
  left: -120px;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.18), transparent 68%);
}

.faq-orb-b {
  width: 320px;
  height: 320px;
  right: -100px;
  bottom: -40px;
  background: radial-gradient(circle, rgba(236, 72, 153, 0.14), transparent 68%);
}

.faq-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(to right, rgba(99, 102, 241, 0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(99, 102, 241, 0.05) 1px, transparent 1px);
  background-size: 44px 44px;
  mask-image: radial-gradient(circle at center, black 30%, transparent 78%);
  -webkit-mask-image: radial-gradient(circle at center, black 30%, transparent 78%);
}

.faq-inner {
  position: relative;
  z-index: 1;
}

.faq-layout {
  display: grid;
  grid-template-columns: minmax(280px, 0.38fr) minmax(0, 0.62fr);
  gap: 28px;
  align-items: start;
}

.faq-side {
  position: sticky;
  top: calc(var(--nav-height) + 20px);
}

.faq-side :deep(.section-title),
.faq-side :deep(.section-subtitle) {
  text-align: left;
}

.faq-side-card {
  margin-top: 22px;
  padding: 22px 20px;
  border-radius: 26px;
  background:
    linear-gradient(180deg, rgba(99, 102, 241, 0.08), transparent 40%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.84), rgba(255, 255, 255, 0.62));
  border: 1px solid rgba(148, 163, 184, 0.14);
  box-shadow: 0 20px 48px rgba(15, 23, 42, 0.08);
}

.faq-side-stat {
  display: flex;
  align-items: baseline;
  gap: 10px;
}

.faq-side-stat strong {
  font-family: 'Sora', sans-serif;
  font-size: 40px;
  font-weight: 800;
  letter-spacing: -0.04em;
  color: var(--c-text);
}

.faq-side-stat span {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--c-primary);
}

.faq-side-line {
  height: 1px;
  margin: 16px 0 14px;
  background: linear-gradient(90deg, rgba(99, 102, 241, 0.24), rgba(236, 72, 153, 0.12));
}

.faq-side-points {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.faq-point {
  display: inline-flex;
  align-items: center;
  padding: 7px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.74);
  border: 1px solid rgba(148, 163, 184, 0.14);
  color: var(--c-text-muted);
  font-size: 12px;
  font-weight: 700;
}

.list { display: flex; flex-direction: column; gap: 12px; }

.item {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.86), rgba(255, 255, 255, 0.68));
  border: 1px solid rgba(148, 163, 184, 0.14);
  border-radius: calc(var(--radius-md) + 4px);
  transition: border-color 0.25s ease, box-shadow 0.25s ease, background 0.25s ease, transform 0.25s ease;
  overflow: hidden;
}
.item:hover {
  transform: translateY(-2px);
  border-color: rgba(99, 102, 241, 0.3);
  box-shadow: 0 16px 32px rgba(15, 23, 42, 0.06);
}
.item.open {
  border-color: rgba(99, 102, 241, 0.34);
  box-shadow: 0 16px 36px rgba(99, 102, 241, 0.1);
}

.q {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  padding: 22px 26px;
  text-align: left;
  font-family: 'Sora', sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: var(--c-text);
  letter-spacing: -0.01em;
  position: relative;
  z-index: 1;
  background: transparent;
}

.faq-index {
  flex-shrink: 0;
  width: 40px;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.12em;
  color: rgba(99, 102, 241, 0.76);
}

.faq-copy {
  flex: 1;
  min-width: 0;
}

.faq-question {
  display: block;
  color: var(--c-text);
}

.item.open .q {
  padding-bottom: 18px;
}

.plus {
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--grad-soft);
  color: var(--c-primary);
  display: grid;
  place-items: center;
  transition: transform 0.35s var(--ease-out), background 0.3s ease, color 0.3s ease;
}
.item.open .plus { transform: rotate(45deg); background: var(--grad-main); color: #fff; }

.a-shell {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: max-height 280ms var(--ease-out), opacity 220ms ease;
}

.a-shell.open {
  max-height: 240px;
  opacity: 1;
}

.a-wrap {
  padding: 0 26px 22px 82px;
}

.a {
  font-size: 15px;
  line-height: 1.75;
  color: var(--c-text-muted);
  border-top: 1px dashed var(--c-border);
  padding-top: 18px;
}

@media (max-width: 1024px) {
  .faq-layout {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  .faq-side {
    position: static;
  }
}

@media (max-width: 768px) {
  .q { padding: 18px 20px; font-size: 15px; gap: 14px; }
  .faq-index { width: 32px; font-size: 11px; }
  .a-wrap { padding: 0 20px 18px 66px; }
  .faq-side-card {
    padding: 18px 16px;
    border-radius: 22px;
  }
}

@media (max-width: 540px) {
  .faq-side-card {
    margin-top: 18px;
  }
  .q {
    align-items: flex-start;
  }
  .plus {
    width: 34px;
    height: 34px;
  }
  .a-wrap {
    padding: 0 20px 18px;
  }
}

:root[data-theme='dark'] .faq-side-card {
  background:
    linear-gradient(180deg, rgba(99, 102, 241, 0.12), transparent 40%),
    linear-gradient(180deg, rgba(19, 19, 37, 0.94), rgba(15, 15, 29, 0.9));
  border-color: rgba(148, 163, 184, 0.12);
  box-shadow: 0 20px 48px rgba(0, 0, 0, 0.28);
}

:root[data-theme='dark'] .faq-point,
:root[data-theme='dark'] .item {
  background: linear-gradient(180deg, rgba(24, 24, 44, 0.94), rgba(17, 17, 32, 0.9));
  border-color: rgba(148, 163, 184, 0.12);
}
</style>
