<template>
  <section class="showcase" :class="{ reverse }">
    <div class="container showcase-inner">
      <div class="text-col" :class="reverse ? 'sr-left' : 'sr-right'">
        <span class="eyebrow"><span class="eyebrow-dot" /> {{ t(`${ns}.eyebrow`) }}</span>
        <h2 class="showcase-title">{{ t(`${ns}.title`) }}</h2>
        <p class="showcase-desc">{{ t(`${ns}.desc`) }}</p>

        <ul class="bullets">
          <li v-for="i in 4" :key="i" class="sr-up" :class="`sr-delay-${i}`">
            <span class="check" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
            <span>{{ t(`${ns}.b${i}`) }}</span>
          </li>
        </ul>

        <a href="#download" class="btn btn-primary showcase-cta">
          {{ t(`${ns}.cta`) }}
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>

      <div class="visual-col" :class="reverse ? 'sr-right' : 'sr-left'">
        <div v-if="variant === 'search'" class="mockup search-mockup">
          <div class="mock-head">
            <div class="mock-search">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              <span>{{ t('showcase1.searchPlaceholder') }}</span>
            </div>
            <div class="mock-filter">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="21" y1="4" x2="14" y2="4"/><line x1="10" y1="4" x2="3" y2="4"/>
                <line x1="21" y1="12" x2="12" y2="12"/><line x1="8" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="20" x2="16" y2="20"/><line x1="12" y1="20" x2="3" y2="20"/>
                <line x1="14" y1="2" x2="14" y2="6"/><line x1="8" y1="10" x2="8" y2="14"/>
                <line x1="16" y1="18" x2="16" y2="22"/>
              </svg>
            </div>
          </div>

          <div class="chips">
            <span class="chip chip-active">{{ t('showcase1.chipAll') }}</span>
            <span class="chip">{{ t('showcase1.chipCraft') }}</span>
            <span class="chip">{{ t('showcase1.chipIt') }}</span>
            <span class="chip">{{ t('showcase1.chipCook') }}</span>
          </div>

          <div class="mentor-list">
            <div v-for="m in mentors" :key="m.name" class="mentor-row">
              <div class="mentor-avatar" :style="{ background: m.color }">{{ m.initials }}</div>
              <div class="mentor-body">
                <div class="mentor-name">{{ m.name }}</div>
                <div class="mentor-meta">
                  <svg viewBox="0 0 24 24" width="12" height="12" fill="#f59e0b"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  <span>{{ m.rating }}</span>
                  <span class="dot">·</span>
                  <span>{{ t('showcase1.fieldCraft') }}</span>
                </div>
              </div>
              <button class="mentor-btn" :aria-label="t('showcase1.cta')">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                </svg>
              </button>
            </div>
          </div>

          <div class="mock-glow" />
        </div>

        <div v-else class="mockup cert-mockup">
          <div class="cert-paper">
            <div class="cert-band">
              <div class="cert-mark">
                <img src="/logo.png" alt="" width="32" height="32" decoding="async" />
              </div>
              <div class="cert-band-text">{{ t('showcase2.bandText') }}</div>
            </div>

            <div class="cert-body">
              <div class="cert-eyebrow">{{ t('showcase2.eyebrowText') }}</div>
              <div class="cert-name">Asror Karimov</div>
              <div class="cert-text">{{ t('showcase2.text') }}</div>
              <div class="cert-skill">{{ t('showcase2.skill') }}</div>

              <div class="cert-meta">
                <div class="cm">
                  <div class="cm-label">{{ t('showcase2.metaNum') }}</div>
                  <div class="cm-value">UZ-2026-04891</div>
                </div>
                <div class="cm">
                  <div class="cm-label">{{ t('showcase2.metaDate') }}</div>
                  <div class="cm-value">15.03.2026</div>
                </div>
              </div>

              <div class="cert-footer">
                <div class="cert-sign">
                  <div class="sign-line">Murodjon ota Yusupov</div>
                  <div class="sign-label">{{ t('showcase2.signLabel') }}</div>
                </div>
                <div class="cert-seal">
                  <svg viewBox="0 0 60 60" width="60" height="60">
                    <circle cx="30" cy="30" r="28" fill="none" stroke="url(#sealG)" stroke-width="2"/>
                    <circle cx="30" cy="30" r="22" fill="none" stroke="url(#sealG)" stroke-width="1" stroke-dasharray="2 2"/>
                    <path d="M22 30l6 6 12-12" stroke="url(#sealG)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                    <defs>
                      <linearGradient id="sealG" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stop-color="#6366f1"/>
                        <stop offset="100%" stop-color="#ec4899"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div class="mock-glow" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  variant: 'search' | 'certificate'
  reverse?: boolean
  ns: 'showcase1' | 'showcase2'
}>()

const { t } = useI18n()

const mentors = computed(() => [
  { name: 'Murodjon ota Yusupov', initials: 'MY', rating: 4.9, color: 'linear-gradient(135deg,#6366f1,#8b5cf6)' },
  { name: 'Olim Rahmonov', initials: 'OR', rating: 4.8, color: 'linear-gradient(135deg,#ec4899,#f472b6)' },
  { name: 'Sherzod Karimov', initials: 'SK', rating: 4.7, color: 'linear-gradient(135deg,#f59e0b,#fbbf24)' }
])
</script>

<style scoped>
.showcase { padding: 100px 0; position: relative; }
.showcase + .showcase { padding-top: 0; }

.showcase-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
.showcase.reverse .text-col { order: 2; }
.showcase.reverse .visual-col { order: 1; }

.showcase-title { font-size: clamp(28px, 3.6vw, 40px); font-weight: 800; letter-spacing: -0.02em; margin-bottom: 16px; color: var(--c-text); }
.showcase-desc { font-size: 17px; color: var(--c-text-muted); line-height: 1.7; margin-bottom: 28px; }

.bullets { display: flex; flex-direction: column; gap: 12px; margin-bottom: 32px; }
.bullets li { display: flex; align-items: flex-start; gap: 12px; font-size: 15px; font-weight: 500; color: var(--c-text); }
.check {
  flex-shrink: 0;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: var(--grad-main);
  color: #fff;
  display: grid;
  place-items: center;
  margin-top: 2px;
}

.visual-col { position: relative; }
.mockup {
  position: relative;
  border-radius: var(--radius-xl);
  background: var(--c-card);
  box-shadow: var(--shadow-xl), 0 30px 60px rgba(99, 102, 241, 0.12);
  border: 1px solid var(--c-border);
}
.mock-glow {
  position: absolute;
  inset: -40px;
  background:
    radial-gradient(circle at 20% 20%, rgba(99, 102, 241, 0.18), transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.18), transparent 50%);
  z-index: -1;
  filter: blur(20px);
}

/* ============ SEARCH MOCKUP ============ */
.search-mockup { padding: 24px; }
.mock-head { display: flex; gap: 10px; margin-bottom: 16px; }
.mock-search {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  background: var(--c-surface);
  border-radius: 12px;
  font-size: 14px;
  color: var(--c-text-muted);
}
.mock-filter {
  width: 44px;
  height: 44px;
  display: grid;
  place-items: center;
  background: var(--grad-main);
  color: #fff;
  border-radius: 12px;
}

.chips { display: flex; gap: 8px; margin-bottom: 20px; overflow-x: auto; scrollbar-width: none; }
.chips::-webkit-scrollbar { display: none; }
.chip {
  padding: 8px 14px;
  background: var(--c-surface);
  border-radius: 999px;
  font-size: 13px;
  font-weight: 500;
  color: var(--c-text-muted);
  white-space: nowrap;
}
.chip-active { background: var(--c-text); color: var(--c-bg); }

.mentor-list { display: flex; flex-direction: column; gap: 10px; }
.mentor-row {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: var(--c-surface);
  border-radius: 14px;
  transition: background 0.2s ease, transform 0.2s ease;
}
.mentor-row:hover { background: var(--c-card); box-shadow: var(--shadow-md); transform: translateX(4px); }
.mentor-avatar {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #fff;
  font-weight: 700;
  font-size: 13px;
  flex-shrink: 0;
}
.mentor-body { flex: 1; min-width: 0; }
.mentor-name { font-weight: 700; font-size: 14px; margin-bottom: 2px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; color: var(--c-text); }
.mentor-meta { display: flex; align-items: center; gap: 4px; font-size: 12px; color: var(--c-text-muted); }
.mentor-meta .dot { margin: 0 2px; }
.mentor-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--grad-main);
  color: #fff;
  display: grid;
  place-items: center;
  flex-shrink: 0;
  transition: transform 0.2s var(--ease-out);
}
.mentor-btn:hover { transform: scale(1.1) rotate(90deg); }

/* ============ CERTIFICATE MOCKUP ============ */
.cert-mockup { padding: 0; overflow: hidden; }

.cert-paper { position: relative; }
.cert-band {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 20px 28px;
  background: var(--grad-main);
  color: #fff;
}
.cert-mark {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #fff;
  display: grid;
  place-items: center;
  border: 2px solid rgba(255, 255, 255, 0.4);
  overflow: hidden;
  flex-shrink: 0;
}
.cert-mark img { width: 100%; height: 100%; object-fit: contain; display: block; }
.cert-band-text { font-family: 'Sora', sans-serif; font-weight: 700; font-size: 13px; letter-spacing: 0.1em; }

.cert-body { padding: 32px 28px; }
.cert-eyebrow { font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--c-text-muted); margin-bottom: 8px; }
.cert-name {
  font-family: 'Sora', sans-serif;
  font-size: 28px;
  font-weight: 800;
  letter-spacing: -0.02em;
  margin-bottom: 12px;
  background: var(--grad-main);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}
.cert-text { color: var(--c-text-muted); font-size: 14px; line-height: 1.6; margin-bottom: 8px; }
.cert-skill { font-weight: 700; font-size: 16px; margin-bottom: 24px; padding-bottom: 24px; border-bottom: 1px dashed var(--c-border); color: var(--c-text); }

.cert-meta { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 24px; }
.cm-label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.06em; color: var(--c-text-muted); margin-bottom: 4px; }
.cm-value { font-family: 'Sora', sans-serif; font-weight: 700; font-size: 14px; color: var(--c-text); }

.cert-footer { display: flex; justify-content: space-between; align-items: flex-end; }
.sign-line { font-family: 'Sora', sans-serif; font-weight: 700; font-size: 14px; padding-bottom: 4px; border-bottom: 1.5px solid var(--c-text); margin-bottom: 4px; color: var(--c-text); }
.sign-label { font-size: 11px; color: var(--c-text-muted); }

@media (max-width: 1024px) {
  .showcase { padding: 80px 0; }
  .showcase-inner { grid-template-columns: 1fr; gap: 56px; }
  .showcase.reverse .text-col { order: 1; }
  .showcase.reverse .visual-col { order: 2; }
}

@media (max-width: 768px) {
  .showcase { padding: 60px 0; }
  .cert-body { padding: 24px 20px; }
  .cert-band { padding: 16px 20px; }
  .cert-name { font-size: 22px; }
}
</style>
