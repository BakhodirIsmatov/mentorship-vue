<template>
  <section class="showcase" :class="{ reverse, 'showcase-certificate': variant === 'certificate' }">
    <div class="container showcase-inner">
      <div class="text-col" :class="[reverse ? 'sr-left' : 'sr-right', { 'text-col-certificate': variant === 'certificate' }]">
        <span class="eyebrow"><span class="eyebrow-dot" /> {{ t(`${ns}.eyebrow`) }}</span>
        <h2 class="showcase-title">{{ t(`${ns}.title`) }}</h2>
        <p class="showcase-desc">{{ t(`${ns}.desc`) }}</p>

        <ul class="bullets" :class="{ 'bullets-certificate': variant === 'certificate' }">
          <li v-for="i in 4" :key="i" class="sr-up" :class="`sr-delay-${i}`">
            <span v-if="variant === 'certificate'" class="bullet-index" aria-hidden="true">0{{ i }}</span>
            <span v-else class="check" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
            <span>{{ t(`${ns}.b${i}`) }}</span>
          </li>
        </ul>
      </div>

      <div class="visual-col" :class="[reverse ? 'sr-right' : 'sr-left', { 'visual-col-certificate': variant === 'certificate' }]">
        <!-- ============ FORM MOCKUP (Sertifikat so'rovi) ============ -->
          <div v-if="variant === 'form'" class="mockup form-mockup">
            <div class="mock-head">
              <span class="back-cell" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
              </span>
              <h3 class="mock-title">{{ t('showcase1.formTitle') }}</h3>
              <span class="back-cell" />
            </div>

            <p class="mock-sub">{{ t('showcase1.formSub') }}</p>

            <div class="mock-field">
              <label>{{ t('showcase1.formMentorName') }}</label>
              <div class="mock-input">Bahodir</div>
            </div>

            <div class="mock-field">
              <label>{{ t('showcase1.formMentorSurname') }}</label>
              <div class="mock-input">Ismatov</div>
            </div>

            <div class="mock-field">
              <label>{{ t('showcase1.formPhone') }}</label>
              <div class="mock-input mock-input-phone">
                <span class="mock-flag">
                  <svg viewBox="0 0 30 20" width="18" height="12" aria-hidden="true">
                    <rect width="30" height="6" fill="#0099b5" />
                    <rect y="6" width="30" height="0.7" fill="#ce1126" />
                    <rect y="6.7" width="30" height="6.6" fill="#fff" />
                    <rect y="13.3" width="30" height="0.7" fill="#ce1126" />
                    <rect y="14" width="30" height="6" fill="#1eb53a" />
                  </svg>
                  +998
                  <svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
                <span>90 555 12 34</span>
              </div>
            </div>

            <label class="mock-check">
              <span class="cb checked" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span>{{ t('showcase1.formCheckbox') }}</span>
            </label>

            <button type="button" class="mock-submit" tabindex="-1">
              {{ t('showcase1.formSubmit') }}
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="9 6 15 12 9 18" />
              </svg>
            </button>

            <div class="mock-glow" />
          </div>

        <!-- ============ CERTIFICATE MOCKUP ============ -->
        <div v-else class="mockup cert-mockup">
          <div class="cert-preview-shell">
            <button
              type="button"
              class="cert-frame"
              :aria-label="t('showcase2.zoomLabel')"
              @click="openLightbox"
            >
              <img
                :src="certificateImageSrc"
                :alt="t('showcase2.title')"
                class="cert-image"
                decoding="async"
              />
              <span class="cert-zoom-cta">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M15 3h6v6" />
                  <path d="M9 21H3v-6" />
                  <path d="M21 3l-7 7" />
                  <path d="M3 21l7-7" />
                </svg>
                {{ t('showcase2.zoomCta') }}
              </span>
            </button>
          </div>
          <div class="mock-glow" />
        </div>
      </div>
    </div>

    <transition name="lightbox-fade">
      <div
        v-if="isLightboxOpen"
        class="cert-lightbox"
        role="dialog"
        aria-modal="true"
        :aria-label="t('showcase2.zoomLabel')"
        @click.self="closeLightbox"
      >
        <button
          type="button"
          class="cert-lightbox-close"
          :aria-label="t('showcase2.closeZoom')"
          @click="closeLightbox"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
            <path d="m18 6-12 12" />
            <path d="m6 6 12 12" />
          </svg>
        </button>

        <div class="cert-lightbox-inner">
          <img
            :src="certificateImageSrc"
            :alt="t('showcase2.title')"
            class="cert-lightbox-image"
            decoding="async"
          />
        </div>
      </div>
    </transition>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  variant: 'form' | 'certificate'
  reverse?: boolean
  ns: 'showcase1' | 'showcase2'
}>()

const { t, locale } = useI18n()
const isLightboxOpen = ref(false)
const isCertificate = computed(() => props.variant === 'certificate')
const certificateImageSrc = computed(() => {
  if (locale.value === 'en') return '/en.png'
  if (locale.value === 'ru') return '/ru.png'
  return '/certificate.png'
})

const setBodyLock = (locked: boolean) => {
  if (!import.meta.client) return
  document.body.style.overflow = locked ? 'hidden' : ''
}

const openLightbox = () => {
  if (!isCertificate.value) return
  isLightboxOpen.value = true
  setBodyLock(true)
}

const closeLightbox = () => {
  isLightboxOpen.value = false
  setBodyLock(false)
}

onUnmounted(() => {
  setBodyLock(false)
})
</script>

<style scoped>
.showcase { padding: 100px 0; position: relative; }
.showcase + .showcase { padding-top: 0; }

.showcase-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; min-width: 0; }
.showcase-certificate .showcase-inner {
  grid-template-columns: minmax(0, 1.28fr) minmax(320px, 0.72fr);
  gap: 28px;
}
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

.text-col-certificate {
  position: relative;
  z-index: 1;
  padding: 34px 24px 34px 40px;
  margin-left: -40px;
  border-radius: 36px;
  background:
    linear-gradient(90deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.9) 18%, rgba(255, 255, 255, 0.96) 100%);
}

.text-col-certificate::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background:
    radial-gradient(circle at left center, rgba(99, 102, 241, 0.14), transparent 30%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0));
  pointer-events: none;
}

.bullets-certificate {
  display: flex;
  flex-direction: column;
  gap: 0;
  margin-bottom: 28px;
  border-top: 1px solid rgba(148, 163, 184, 0.16);
}

.bullets-certificate li {
  align-items: center;
  gap: 16px;
  min-height: 0;
  padding: 18px 0;
  border-bottom: 1px solid rgba(148, 163, 184, 0.16);
}

.bullet-index {
  flex-shrink: 0;
  width: 40px;
  font-family: 'Sora', sans-serif;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.12em;
  color: rgba(99, 102, 241, 0.72);
}

.visual-col { position: relative; }
.text-col,
.visual-col { min-width: 0; }
.visual-col-certificate {
  max-width: 760px;
  width: 100%;
  z-index: 0;
}
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

/* ============ FORM MOCKUP ============ */
.form-mockup { padding: 28px 28px 32px; }

.mock-head {
  display: grid;
  grid-template-columns: 36px 1fr 36px;
  align-items: center;
  margin-bottom: 12px;
}
.back-cell {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: var(--c-surface);
  display: grid;
  place-items: center;
  color: var(--c-text);
}
.mock-title {
  font-family: 'Sora', sans-serif;
  font-size: 17px;
  font-weight: 800;
  letter-spacing: -0.02em;
  text-align: center;
  color: var(--c-text);
}

.mock-sub {
  font-size: 14px;
  color: var(--c-text-muted);
  margin-bottom: 20px;
  line-height: 1.5;
}

.mock-field { margin-bottom: 14px; }
.mock-field label {
  display: block;
  font-size: 12px;
  font-weight: 600;
  color: var(--c-text-muted);
  margin-bottom: 6px;
  letter-spacing: 0.02em;
}
.mock-input {
  height: 46px;
  border: 1px solid var(--c-border);
  border-radius: 12px;
  padding: 0 14px;
  background: var(--c-surface);
  display: flex;
  align-items: center;
  font-size: 14.5px;
  font-weight: 600;
  color: var(--c-text);
  letter-spacing: 0.02em;
}
.mock-input-phone { gap: 10px; padding-left: 4px; }

.mock-flag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  border-right: 1px solid var(--c-border);
  font-size: 13px;
  font-weight: 700;
  color: var(--c-text);
  height: 36px;
  background: transparent;
}
.mock-flag svg:first-child { border-radius: 2px; overflow: hidden; }

.mock-check {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 13px;
  line-height: 1.5;
  color: var(--c-text-muted);
  margin: 6px 0 22px;
}
.cb {
  width: 18px;
  height: 18px;
  border-radius: 5px;
  border: 1.5px solid var(--c-border-strong);
  flex-shrink: 0;
  display: grid;
  place-items: center;
  margin-top: 1px;
  background: var(--c-card);
}
.cb.checked {
  background: var(--c-primary);
  border-color: var(--c-primary);
  color: #fff;
}

.mock-submit {
  width: 100%;
  padding: 14px 0;
  background: var(--grad-main);
  color: #fff;
  border-radius: 14px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 700;
  font-size: 15px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: default;
  box-shadow: 0 12px 28px rgba(99, 102, 241, 0.32);
}

/* ============ CERTIFICATE MOCKUP ============ */
.cert-mockup {
  padding: 0;
  overflow: visible;
  background: transparent;
  border: none;
  box-shadow: none;
}

.cert-preview-shell {
  position: relative;
  padding: 0;
}

.cert-preview-shell::before {
  content: '';
  position: absolute;
  inset: 8% 8% 10% 0;
  border-radius: 20px;
  background:
    radial-gradient(circle at 20% 30%, rgba(99, 102, 241, 0.22), transparent 44%),
    radial-gradient(circle at 80% 70%, rgba(236, 72, 153, 0.18), transparent 38%);
  filter: blur(48px);
  opacity: 0.8;
  z-index: -1;
}

.cert-frame {
  position: relative;
  overflow: hidden;
  border-radius: 32px;
  background: transparent;
  padding: 0;
  box-shadow:
    0 36px 80px rgba(15, 23, 42, 0.12),
    0 12px 30px rgba(99, 102, 241, 0.1);
  transform: perspective(1400px) rotateY(25deg) rotateX(0deg) rotateZ(0deg);
  transition: transform 420ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 360ms ease;
  min-height: 560px;
  cursor: zoom-in;
  appearance: none;
}

.cert-mockup:hover .cert-frame {
  transform: perspective(1400px) rotateY(-4deg) rotateX(1deg) rotateZ(0deg) translateY(-8px);
  box-shadow:
    0 46px 96px rgba(15, 23, 42, 0.15),
    0 16px 38px rgba(99, 102, 241, 0.12);
}

.cert-image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  border-radius: inherit;
}

.cert-zoom-cta {
  position: absolute;
  right: 14px;
  top: 14px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.72);
  color: var(--c-text);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.02em;
  box-shadow: 0 10px 22px rgba(15, 23, 42, 0.12);
  backdrop-filter: blur(10px);
}

.cert-lightbox {
  position: fixed;
  inset: 0;
  z-index: 99999;
  display: grid;
  place-items: center;
  padding: 24px;
  background:
    radial-gradient(circle at top, rgba(99, 102, 241, 0.2), transparent 35%),
    rgba(5, 10, 20, 0.82);
  backdrop-filter: blur(16px);
}

.cert-lightbox-inner {
  position: relative;
  max-width: min(1280px, 94vw);
  max-height: 88vh;
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.14);
  box-shadow: 0 30px 90px rgba(0, 0, 0, 0.35);
  background: #fff;
}

.cert-lightbox-image {
  display: block;
  max-width: 100%;
  max-height: 88vh;
  width: auto;
  height: auto;
}

.cert-lightbox-close {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 1;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  display: grid;
  place-items: center;
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.18);
}

@media (max-width: 768px) {
  .cert-zoom-cta {
    right: 10px;
    top: 10px;
    padding: 9px 12px;
  }
  .cert-lightbox {
    padding: 12px;
  }
  .cert-lightbox-close {
    top: 12px;
    right: 12px;
  }
}

@media (max-width: 640px) {
  .bullets-certificate li {
    align-items: flex-start;
  }
  .bullet-index {
    width: 32px;
    padding-top: 1px;
  }
}

@media (max-width: 768px) {
  .text-col-certificate { padding: 22px 0 0; }
  .cert-frame { min-height: 420px; }
}

@media (max-width: 1024px) {
  .showcase { padding: 80px 0; }
  .showcase-inner { grid-template-columns: 1fr; gap: 56px; }
  .showcase-certificate .showcase-inner { grid-template-columns: 1fr; gap: 56px; }
  .showcase.reverse .text-col { order: 1; }
  .showcase.reverse .visual-col { order: 2; }
  .text-col-certificate {
    margin-left: 0;
    padding: 24px 0 0;
    background: none;
  }
  .text-col-certificate::before { display: none; }
  .visual-col-certificate { max-width: none; }
}

@media (max-width: 768px) {
  .showcase { padding: 60px 0; }
  .form-mockup { padding: 22px 20px 26px; }
  .text-col-certificate { padding: 22px 0 0; }
}

.lightbox-fade-enter-active,
.lightbox-fade-leave-active {
  transition: opacity 220ms ease;
}

.lightbox-fade-enter-active .cert-lightbox-inner,
.lightbox-fade-leave-active .cert-lightbox-inner {
  transition: transform 280ms cubic-bezier(0.22, 1, 0.36, 1), opacity 220ms ease;
}

.lightbox-fade-enter-from,
.lightbox-fade-leave-to {
  opacity: 0;
}

.lightbox-fade-enter-from .cert-lightbox-inner,
.lightbox-fade-leave-to .cert-lightbox-inner {
  opacity: 0;
  transform: scale(0.96);
}

:root[data-theme='dark'] .text-col-certificate {
  background:
    linear-gradient(90deg, rgba(99, 102, 241, 0.04), rgba(19, 19, 37, 0.88) 18%, rgba(19, 19, 37, 0.96) 100%);
}

:root[data-theme='dark'] .text-col-certificate::before {
  background:
    radial-gradient(circle at left center, rgba(99, 102, 241, 0.18), transparent 30%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0));
}

:root[data-theme='dark'] .cert-zoom-cta {
  background: rgba(10, 10, 20, 0.74);
  color: #fff;
  box-shadow: 0 10px 22px rgba(0, 0, 0, 0.28);
}

:root[data-theme='dark'] .cert-lightbox-inner {
  background: #0f1220;
}
</style>
