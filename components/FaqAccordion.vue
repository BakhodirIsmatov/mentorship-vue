<template>
  <section class="faq section" id="faq">
    <div class="container faq-inner">
      <header class="section-header sr-up">
        <span class="eyebrow"><span class="eyebrow-dot" /> {{ t('faq.eyebrow') }}</span>
        <h2 class="section-title">
          {{ t('faq.title1') }}
          <span class="gradient-text">{{ t('faq.titleHl') }}</span>
        </h2>
        <p class="section-subtitle">{{ t('faq.subtitle') }}</p>
      </header>

      <div class="list">
        <div
          v-for="i in 6"
          :key="i"
          class="item sr-up"
          :class="[`sr-delay-${i}`, { open: openIndex === i }]"
        >
          <button
            class="q"
            :aria-expanded="openIndex === i"
            :aria-controls="`faq-${i}`"
            @click="toggle(i)"
          >
            <span>{{ t(`faq.q${i}`) }}</span>
            <span class="plus" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </span>
          </button>
          <div :id="`faq-${i}`" class="a-wrap" :hidden="openIndex !== i">
            <p class="a">{{ t(`faq.a${i}`) }}</p>
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
.faq-inner { max-width: 820px; }

.list { display: flex; flex-direction: column; gap: 12px; }

.item {
  background: var(--c-card);
  border: 1px solid var(--c-border);
  border-radius: var(--radius-md);
  transition: border-color 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
  overflow: hidden;
}
.item:hover { border-color: rgba(99, 102, 241, 0.3); }
.item.open { border-color: rgba(99, 102, 241, 0.4); box-shadow: 0 12px 30px rgba(99, 102, 241, 0.08); }

.q {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 22px 26px;
  text-align: left;
  font-family: 'Sora', sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: var(--c-text);
  letter-spacing: -0.01em;
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

.a-wrap { padding: 0 26px 22px; }
.a-wrap[hidden] { display: none; }

.a { font-size: 15px; line-height: 1.75; color: var(--c-text-muted); border-top: 1px dashed var(--c-border); padding-top: 18px; }

@media (max-width: 768px) { .q { padding: 18px 20px; font-size: 15px; } .a-wrap { padding: 0 20px 18px; } }
</style>
