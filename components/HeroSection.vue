<template>
  <section class="hero" id="top">
    <div class="hero-bg" aria-hidden="true">
      <div class="blob blob-1" :style="parallax(0.15)" />
      <div class="blob blob-2" :style="parallax(0.25)" />
      <div class="blob blob-3" :style="parallax(0.1)" />
      <div class="grid-overlay" />
    </div>

    <div class="container hero-inner">
      <div class="hero-text">
        <h1 class="hero-title fade-in" style="animation-delay: 0.15s">
          {{ t('hero.title1') }}
          <span class="gradient-text">{{ t('hero.titleHl') }}</span>
          {{ t('hero.title2') }}
        </h1>

        <p class="hero-desc fade-in" style="animation-delay: 0.25s">
          {{ t('hero.desc') }}
        </p>

        <div class="hero-cta fade-in" style="animation-delay: 0.35s">
          <a href="#download" class="btn btn-primary">
            {{ t('hero.ctaPrimary') }}
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <a href="#process" class="btn btn-secondary">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            {{ t('hero.ctaSecondary') }}
          </a>
        </div>

        <div class="hero-trust fade-in" style="animation-delay: 0.45s">
          <div class="avatars" aria-hidden="true">
            <div class="avatar a1">AK</div>
            <div class="avatar a2">MY</div>
            <div class="avatar a3">DR</div>
            <div class="avatar a4">+</div>
          </div>
          <div class="trust-text">
            <div class="stars" aria-label="5/5">
              <svg v-for="n in 5" :key="n" viewBox="0 0 24 24" width="14" height="14" fill="#f59e0b">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <div class="trust-meta">
              <strong>4.9</strong> · {{ t('hero.trust') }}
            </div>
          </div>
        </div>
      </div>

      <div class="hero-visual">
        <PhoneMockup />
      </div>
    </div>

    <a href="#features" class="scroll-cue" :aria-label="t('hero.scrollCue')">
      <span class="cue-mouse"><span class="cue-dot" /></span>
      <span class="cue-label">{{ t('hero.scrollCue') }}</span>
    </a>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const scrollY = ref(0)
const onScroll = () => { scrollY.value = window.scrollY }
const parallax = (factor: number) => ({
  transform: `translate3d(0, ${scrollY.value * factor}px, 0)`
})

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.hero {
  position: relative;
  padding: 80px 0 120px;
  overflow: hidden;
  isolation: isolate;
}

.hero-bg { position: absolute; inset: 0; z-index: -1; pointer-events: none; }
.blob { position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.5; will-change: transform; }
.blob-1 { width: 460px; height: 460px; background: radial-gradient(circle, #6366f1, transparent 70%); top: -120px; left: -120px; }
.blob-2 { width: 540px; height: 540px; background: radial-gradient(circle, #ec4899, transparent 70%); top: 100px; right: -160px; }
.blob-3 { width: 380px; height: 380px; background: radial-gradient(circle, #8b5cf6, transparent 70%); bottom: -120px; left: 30%; opacity: 0.4; }

:root[data-theme='dark'] .blob { opacity: 0.35; }
:root[data-theme='dark'] .blob-3 { opacity: 0.28; }

.grid-overlay {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(99, 102, 241, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(99, 102, 241, 0.06) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse at center, #000 30%, transparent 70%);
  -webkit-mask-image: radial-gradient(ellipse at center, #000 30%, transparent 70%);
}

.hero-inner {
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: 64px;
  align-items: center;
  position: relative;
}
.hero-text { max-width: 560px; }

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  background: var(--c-nav-bg);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid var(--c-border);
  color: var(--c-text);
  font-weight: 600;
  font-size: 13px;
  border-radius: var(--radius-full);
  margin-bottom: 24px;
  box-shadow: var(--shadow-sm);
}
.hero-badge-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--c-accent);
  box-shadow: 0 0 0 4px rgba(236, 72, 153, 0.18);
  animation: pulse 2s ease-in-out infinite;
}
@keyframes pulse {
  0%, 100% { box-shadow: 0 0 0 4px rgba(236, 72, 153, 0.18); }
  50% { box-shadow: 0 0 0 8px rgba(236, 72, 153, 0.06); }
}

.hero-title {
  font-size: clamp(36px, 5.4vw, 64px);
  font-weight: 800;
  letter-spacing: -0.03em;
  margin-bottom: 20px;
}

.hero-desc {
  font-size: 18px;
  line-height: 1.7;
  color: var(--c-text-muted);
  margin-bottom: 36px;
  max-width: 520px;
}

.hero-cta { display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 40px; }

.hero-trust { display: flex; align-items: center; gap: 16px; }
.avatars { display: flex; }
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 3px solid var(--c-bg);
  display: grid;
  place-items: center;
  color: #fff;
  font-weight: 700;
  font-size: 12px;
  margin-left: -10px;
  box-shadow: 0 2px 6px rgba(15, 23, 42, 0.15);
}
.avatar:first-child { margin-left: 0; }
.a1 { background: linear-gradient(135deg, #6366f1, #8b5cf6); }
.a2 { background: linear-gradient(135deg, #ec4899, #f472b6); }
.a3 { background: linear-gradient(135deg, #f59e0b, #fbbf24); }
.a4 { background: linear-gradient(135deg, #10b981, #34d399); font-size: 16px; }

.stars { display: flex; gap: 2px; margin-bottom: 4px; }
.trust-meta { font-size: 13px; color: var(--c-text-muted); }
.trust-meta strong { color: var(--c-text); }

.fade-in {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.8s var(--ease-out) forwards;
}
@keyframes fadeInUp {
  to { opacity: 1; transform: translateY(0); }
}

.scroll-cue {
  position: absolute;
  left: 50%;
  bottom: 24px;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: var(--c-text-muted);
  font-size: 12px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-weight: 600;
  opacity: 0;
  animation: fadeInUp 1s var(--ease-out) 1s forwards;
}
.cue-mouse {
  width: 22px;
  height: 36px;
  border: 2px solid var(--c-text-muted);
  border-radius: 12px;
  display: grid;
  place-items: start center;
  padding-top: 6px;
}
.cue-dot {
  width: 3px;
  height: 6px;
  background: var(--c-text-muted);
  border-radius: 2px;
  animation: cueDot 1.6s ease-in-out infinite;
}
@keyframes cueDot {
  0% { transform: translateY(0); opacity: 1; }
  60% { transform: translateY(10px); opacity: 0; }
  100% { transform: translateY(0); opacity: 0; }
}

@media (max-width: 1024px) {
  .hero { padding: 60px 0 100px; }
  .hero-inner { grid-template-columns: 1fr; gap: 60px; text-align: center; }
  .hero-text { margin: 0 auto; }
  .hero-desc { margin-inline: auto; }
  .hero-cta { justify-content: center; }
  .hero-trust { justify-content: center; }
  .scroll-cue { display: none; }
}

@media (max-width: 768px) {
  .hero { padding: 40px 0 80px; }
  .hero-desc { font-size: 16px; }
}
</style>
