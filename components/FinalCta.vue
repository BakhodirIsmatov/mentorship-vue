<template>
  <section class="cta section" id="download">
    <div class="container">
      <div class="cta-card sr-zoom-up">
        <div class="cta-bg" aria-hidden="true">
          <div class="cta-blob cta-blob-1" />
          <div class="cta-blob cta-blob-2" />
          <div class="cta-grid" />
        </div>

        <div class="cta-content">
          <span class="cta-eyebrow">
            <span class="cta-eyebrow-dot" />
            {{ t('cta.eyebrow') }}
          </span>

          <h2 class="cta-title">
            {{ t('cta.title1') }}<br />
            <span class="cta-title-soft">{{ t('cta.titleHl') }}</span>
          </h2>

          <p class="cta-desc">{{ t('cta.desc') }}</p>

          <div class="store-row">
            <a href="#" class="store-btn" aria-label="App Store">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
                <path d="M17.05 12.04c-.03-2.78 2.27-4.12 2.37-4.18-1.29-1.89-3.3-2.15-4.02-2.18-1.71-.17-3.34 1.01-4.21 1.01-.87 0-2.21-.99-3.63-.96-1.87.03-3.59 1.09-4.55 2.76-1.94 3.36-.5 8.34 1.39 11.07.92 1.34 2.02 2.84 3.46 2.78 1.39-.06 1.92-.9 3.6-.9s2.16.9 3.63.87c1.5-.03 2.45-1.36 3.37-2.71 1.06-1.55 1.5-3.05 1.52-3.13-.03-.01-2.91-1.12-2.93-4.43zM14.39 4.04c.77-.93 1.28-2.22 1.14-3.51-1.1.04-2.43.73-3.22 1.66-.71.82-1.32 2.13-1.16 3.4 1.22.09 2.47-.62 3.24-1.55z"/>
              </svg>
              <span>
                <span class="store-small">{{ t('cta.storeSmall') }}</span>
                <span class="store-big">App Store</span>
              </span>
            </a>

            <a href="#" class="store-btn" aria-label="Google Play">
              <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
                <path fill="#fff" d="M3.6 1.7c-.4.3-.6.7-.6 1.4v17.8c0 .7.2 1.1.6 1.4l9.5-10.3-9.5-10.3z"/>
                <path fill="#fff" d="M16.7 7.7l-3-1.7-9.6 10.4 9.6-10.5 3 1.8z" opacity=".9"/>
                <path fill="#fff" d="M3.6 22.3c.4.3 1 .3 1.7-.1l11.4-6.5-3.6-3.7-9.5 10.3z"/>
                <path fill="#fff" d="M16.7 16.3l3.7-2.1c1-.6 1-1.6 0-2.2l-3.7-2.1-3.7 4.2 3.7 2.2z"/>
              </svg>
              <span>
                <span class="store-small">{{ t('cta.storeSmall') }}</span>
                <span class="store-big">Google Play</span>
              </span>
            </a>
          </div>

          <div class="cta-meta">
            <div v-for="i in 3" :key="i" class="meta-item">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {{ t(`cta.meta${i}`) }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<style scoped>
.cta-card {
  position: relative;
  padding: 80px 56px;
  border-radius: var(--radius-xl);
  background: var(--grad-main);
  color: #fff;
  overflow: hidden;
  isolation: isolate;
  text-align: center;
  box-shadow: 0 40px 100px rgba(99, 102, 241, 0.4);
}

.cta-bg { position: absolute; inset: 0; z-index: 0; pointer-events: none; }
.cta-blob { position: absolute; border-radius: 50%; filter: blur(60px); opacity: 0.45; }
.cta-blob-1 { width: 380px; height: 380px; background: radial-gradient(circle, #fff, transparent 70%); top: -120px; left: -100px; opacity: 0.18; }
.cta-blob-2 { width: 420px; height: 420px; background: radial-gradient(circle, #f59e0b, transparent 70%); bottom: -160px; right: -120px; opacity: 0.3; }
.cta-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.07) 1px, transparent 1px);
  background-size: 50px 50px;
  mask-image: radial-gradient(ellipse at center, #000 30%, transparent 75%);
  -webkit-mask-image: radial-gradient(ellipse at center, #000 30%, transparent 75%);
}

.cta-content { position: relative; z-index: 1; max-width: 720px; margin: 0 auto; }

.cta-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.18);
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(8px);
  border-radius: 999px;
  font-weight: 600;
  font-size: 13px;
  margin-bottom: 24px;
}
.cta-eyebrow-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.25);
  animation: pulse 2s ease-in-out infinite;
}
@keyframes pulse {
  0%, 100% { box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.25); }
  50% { box-shadow: 0 0 0 8px rgba(255, 255, 255, 0.08); }
}

.cta-title { font-size: clamp(32px, 4.5vw, 52px); font-weight: 800; letter-spacing: -0.03em; line-height: 1.15; margin-bottom: 20px; color: #fff; }
.cta-title-soft {
  background: linear-gradient(180deg, #fff, #fde68a);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

.cta-desc { font-size: 17px; color: rgba(255, 255, 255, 0.88); margin-bottom: 36px; line-height: 1.7; max-width: 540px; margin-inline: auto; }

.store-row { display: flex; justify-content: center; flex-wrap: wrap; gap: 14px; margin-bottom: 28px; }

.store-btn {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 14px 24px;
  background: #0f172a;
  color: #fff;
  border-radius: 14px;
  transition: transform 0.25s var(--ease-out), background 0.25s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
}
.store-btn:hover { transform: translateY(-3px); background: #1e293b; }

.store-btn span { display: flex; flex-direction: column; text-align: left; line-height: 1.1; }
.store-small { font-size: 11px; opacity: 0.75; margin-bottom: 2px; }
.store-big { font-family: 'Sora', sans-serif; font-weight: 700; font-size: 17px; }

.cta-meta { display: flex; justify-content: center; flex-wrap: wrap; gap: 20px; font-size: 13.5px; color: rgba(255, 255, 255, 0.85); }
.meta-item { display: inline-flex; align-items: center; gap: 6px; }

@media (max-width: 768px) {
  .cta-card { padding: 56px 28px; }
  .cta-meta { gap: 12px; font-size: 12.5px; }
  .store-btn { padding: 12px 18px; }
}
</style>
