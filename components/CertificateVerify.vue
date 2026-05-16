<template>
  <section class="verify" id="verify">
    <div class="verify-bg" aria-hidden="true">
      <div class="blob blob-a" />
      <div class="blob blob-b" />
      <div class="grid-overlay" />
    </div>

    <div class="container verify-inner">
      <div class="verify-header sr-up">
        <span class="eyebrow"><span class="eyebrow-dot" /> {{ t('verify.eyebrow') }}</span>
        <h2 class="verify-title">
          {{ t('verify.title1') }}
          <span class="gradient-text">{{ t('verify.titleHl') }}</span>
          {{ t('verify.title2') }}
        </h2>
        <p class="verify-subtitle">{{ t('verify.subtitle') }}</p>
      </div>

      <div class="verify-shell sr-zoom-up">
        <aside class="verify-side">
          <div class="verify-side-card">
            <div class="verify-side-head">
              <span class="verify-side-badge">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <polyline points="9 12 11 14 15 10" />
                </svg>
              </span>
              <div>
                <h3 class="verify-side-title">{{ t('verify.formTitle') }}</h3>
                <p class="verify-side-sub">{{ t('verify.formSub') }}</p>
              </div>
            </div>

            <div class="verify-side-meter">
              <div class="meter-line" />
              <div class="meter-dot meter-dot-1" />
              <div class="meter-dot meter-dot-2" />
              <div class="meter-dot meter-dot-3" />
            </div>

            <ul class="verify-trust">
              <li>
                <span class="trust-icon trust-1">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                  </svg>
                </span>
                <div>
                  <strong>{{ t('verify.trust1Title') }}</strong>
                  <span>{{ t('verify.trust1Desc') }}</span>
                </div>
              </li>
              <li>
                <span class="trust-icon trust-2">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                  </svg>
                </span>
                <div>
                  <strong>{{ t('verify.trust2Title') }}</strong>
                  <span>{{ t('verify.trust2Desc') }}</span>
                </div>
              </li>
              <li>
                <span class="trust-icon trust-3">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                </span>
                <div>
                  <strong>{{ t('verify.trust3Title') }}</strong>
                  <span>{{ t('verify.trust3Desc') }}</span>
                </div>
              </li>
            </ul>

            <div class="verify-side-note">
              <span class="note-ping" />
              <span>{{ t('verify.successDesc') }}</span>
            </div>
          </div>
        </aside>

        <div class="verify-card">
          <!-- ============ FORM STATE ============ -->
          <form v-if="state !== 'success'" class="verify-form" @submit.prevent="onSubmit" novalidate>
            <div class="verify-form-top">
              <div class="verify-form-head">
                <span class="verify-badge">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    <polyline points="9 12 11 14 15 10" />
                  </svg>
                </span>
                <div>
                  <h3 class="verify-form-title">{{ t('verify.formTitle') }}</h3>
                  <p class="verify-form-sub">{{ t('verify.formSub') }}</p>
                </div>
              </div>
              <div class="verify-mini-card">
                <strong>QR + ID</strong>
                <span>{{ t('verify.trust1Desc') }}</span>
              </div>
            </div>

            <div class="field-grid">
              <div class="field">
                <label for="cert-number">{{ t('verify.certNumberLabel') }}</label>
                <div class="input">
                  <span class="input-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="3" y="5" width="18" height="14" rx="2"/>
                      <path d="M7 9h4M7 13h6M7 17h2"/>
                    </svg>
                  </span>
                  <input
                    id="cert-number"
                    v-model.trim="certNumber"
                    type="text"
                    :placeholder="t('verify.certNumberPh')"
                    autocomplete="off"
                    spellcheck="false"
                    maxlength="32"
                  />
                </div>
              </div>

              <div class="field">
                <label for="cert-phone">{{ t('verify.phoneLabel') }}</label>
                <div class="input input-phone">
                  <span class="phone-prefix" aria-hidden="true">
                    <svg viewBox="0 0 30 20" width="20" height="13">
                      <rect width="30" height="6" fill="#0099b5" />
                      <rect y="6" width="30" height="0.7" fill="#ce1126" />
                      <rect y="6.7" width="30" height="6.6" fill="#fff" />
                      <rect y="13.3" width="30" height="0.7" fill="#ce1126" />
                      <rect y="14" width="30" height="6" fill="#1eb53a" />
                    </svg>
                    +998
                  </span>
                  <input
                    id="cert-phone"
                    :value="phoneDisplay"
                    @input="onPhoneInput"
                    type="tel"
                    inputmode="numeric"
                    :placeholder="t('verify.phonePh')"
                    autocomplete="off"
                  />
                </div>
              </div>
            </div>

            <div class="field captcha-field">
              <label for="cert-captcha">{{ t('verify.captchaLabel') }}</label>
              <div class="captcha-row">
                <div class="captcha-display" aria-hidden="true">
                  <svg :viewBox="`0 0 ${captchaW} ${captchaH}`" :width="captchaW" :height="captchaH">
                    <defs>
                      <linearGradient :id="captchaGradId" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stop-color="#6366f1"/>
                        <stop offset="60%" stop-color="#8b5cf6"/>
                        <stop offset="100%" stop-color="#ec4899"/>
                      </linearGradient>
                    </defs>
                    <g v-for="(p, i) in captchaNoise" :key="`n${i}`">
                      <circle :cx="p.x" :cy="p.y" :r="p.r" :fill="`url(#${captchaGradId})`" :fill-opacity="p.o" />
                    </g>
                    <g v-for="(line, i) in captchaLines" :key="`l${i}`">
                      <path :d="line.d" :stroke="`url(#${captchaGradId})`" stroke-width="1.4" fill="none" stroke-opacity="0.45" stroke-linecap="round" />
                    </g>
                    <g>
                      <text
                        v-for="(ch, i) in captchaChars"
                        :key="`c${i}`"
                        :x="captchaPositions[i].x"
                        :y="captchaPositions[i].y"
                        :transform="`rotate(${captchaPositions[i].r} ${captchaPositions[i].x} ${captchaPositions[i].y})`"
                        :fill="`url(#${captchaGradId})`"
                        font-family="Sora, sans-serif"
                        font-weight="800"
                        font-size="26"
                        letter-spacing="2"
                      >{{ ch }}</text>
                    </g>
                  </svg>
                </div>
                <button
                  type="button"
                  class="captcha-refresh"
                  :aria-label="t('verify.captchaRefresh')"
                  @click="regenerateCaptcha"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="23 4 23 10 17 10"/>
                    <polyline points="1 20 1 14 7 14"/>
                    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
                  </svg>
                </button>
                <div class="input captcha-input">
                  <input
                    id="cert-captcha"
                    v-model.trim="captchaInput"
                    type="text"
                    :placeholder="t('verify.captchaPh')"
                    autocomplete="off"
                    spellcheck="false"
                    maxlength="6"
                  />
                </div>
              </div>
            </div>

            <transition name="fade">
              <div v-if="error" class="verify-error" role="alert">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="12" y1="8" x2="12" y2="12"/>
                  <line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
                <div>
                  <strong v-if="error.title">{{ error.title }}</strong>
                  <span>{{ error.message }}</span>
                </div>
              </div>
            </transition>

            <button type="submit" class="btn btn-primary verify-submit" :disabled="loading">
              <template v-if="!loading">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M9 12l2 2 4-4"/>
                  <circle cx="12" cy="12" r="10"/>
                </svg>
                {{ t('verify.submit') }}
              </template>
              <template v-else>
                <span class="spinner" aria-hidden="true" />
                {{ t('verify.submitting') }}
              </template>
            </button>
          </form>

          <!-- ============ SUCCESS STATE ============ -->
          <div v-else class="verify-success">
            <div class="success-head">
              <div class="success-icon">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <polyline points="9 12 11 14 15 10" />
                </svg>
              </div>
              <div>
                <h3 class="success-title">{{ t('verify.successTitle') }}</h3>
                <p class="success-desc">{{ t('verify.successDesc') }}</p>
              </div>
            </div>

            <button
              type="button"
              class="success-preview"
              :aria-label="t('verify.openNewTab')"
              @click="openPreview"
            >
              <img
                :src="certificateUrl"
                :alt="t('verify.successTitle')"
                loading="lazy"
                referrerpolicy="no-referrer"
              />
              <span class="success-preview-overlay">
                <span class="success-preview-chip">
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M15 3h6v6" />
                    <path d="M9 21H3v-6" />
                    <path d="M21 3l-7 7" />
                    <path d="M3 21l7-7" />
                  </svg>
                  {{ t('verify.openNewTab') }}
                </span>
              </span>
            </button>

            <div class="success-actions">
              <button type="button" class="action-chip action-chip-primary" @click="openPreview">
                <span class="action-chip-icon">
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="11" cy="11" r="7" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </span>
                <span class="action-chip-copy">
                  <strong>{{ t('verify.successTitle') }}</strong>
                  <small>{{ t('verify.openNewTab') }}</small>
                </span>
              </button>
              <a :href="certificateUrl" target="_blank" rel="noopener" class="action-chip">
                <span class="action-chip-icon">
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                </span>
                <span class="action-chip-copy">
                  <strong>{{ t('verify.openNewTab') }}</strong>
                  <small>Browser</small>
                </span>
              </a>
              <a :href="certificateUrl" download class="action-chip">
                <span class="action-chip-icon">
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                </span>
                <span class="action-chip-copy">
                  <strong>{{ t('verify.downloadPdf') }}</strong>
                  <small>PNG</small>
                </span>
              </a>
              <button type="button" class="action-chip action-chip-muted" @click="resetForm">
                <span class="action-chip-icon">
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="23 4 23 10 17 10"/>
                    <path d="M20.49 15A9 9 0 1 1 18.36 5.64L23 10"/>
                  </svg>
                </span>
                <span class="action-chip-copy">
                  <strong>{{ t('verify.tryAgain') }}</strong>
                  <small>Reset</small>
                </span>
              </button>
            </div>

            <transition name="fade">
              <div v-if="isPreviewOpen" class="preview-lightbox" @click.self="closePreview">
                <button type="button" class="preview-close" :aria-label="t('verify.openNewTab')" @click="closePreview">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
                <div class="preview-lightbox-inner">
                  <img
                    :src="certificateUrl"
                    :alt="t('verify.successTitle')"
                    loading="lazy"
                    referrerpolicy="no-referrer"
                  />
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

type State = 'idle' | 'loading' | 'success'
type ErrorInfo = { title?: string; message: string }

const certNumber = ref('')
const phoneRaw = ref('')
const captchaInput = ref('')
const state = ref<State>('idle')
const loading = computed(() => state.value === 'loading')
const error = ref<ErrorInfo | null>(null)
const certificateUrl = ref<string>('')
const isPreviewOpen = ref(false)

const phoneDisplay = computed(() => {
  const d = phoneRaw.value
  const p1 = d.slice(0, 2)
  const p2 = d.slice(2, 5)
  const p3 = d.slice(5, 7)
  const p4 = d.slice(7, 9)
  return [p1, p2, p3, p4].filter(Boolean).join(' ')
})

const onPhoneInput = (e: Event) => {
  const raw = (e.target as HTMLInputElement).value.replace(/\D/g, '').slice(0, 9)
  phoneRaw.value = raw
}

// ============ CAPTCHA ============
const captchaW = 168
const captchaH = 56
const captchaGradId = 'cap-grad-verify'
const captchaChars = ref<string[]>([])
const captchaPositions = ref<{ x: number; y: number; r: number }[]>([])
const captchaNoise = ref<{ x: number; y: number; r: number; o: number }[]>([])
const captchaLines = ref<{ d: string }[]>([])
const captchaCode = computed(() => captchaChars.value.join(''))

const CHARSET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
const rand = (min: number, max: number) => Math.random() * (max - min) + min

const regenerateCaptcha = () => {
  const len = 5
  const chars: string[] = []
  for (let i = 0; i < len; i++) {
    chars.push(CHARSET[Math.floor(Math.random() * CHARSET.length)])
  }
  captchaChars.value = chars

  const slot = captchaW / (len + 1)
  captchaPositions.value = chars.map((_, i) => ({
    x: slot * (i + 1) + rand(-5, 5),
    y: captchaH / 2 + 9 + rand(-4, 4),
    r: rand(-22, 22)
  }))

  const noise: { x: number; y: number; r: number; o: number }[] = []
  for (let i = 0; i < 24; i++) {
    noise.push({
      x: rand(4, captchaW - 4),
      y: rand(4, captchaH - 4),
      r: rand(0.6, 1.6),
      o: rand(0.18, 0.4)
    })
  }
  captchaNoise.value = noise

  const lines: { d: string }[] = []
  for (let i = 0; i < 3; i++) {
    const x1 = rand(0, captchaW * 0.3)
    const y1 = rand(8, captchaH - 8)
    const x2 = rand(captchaW * 0.7, captchaW)
    const y2 = rand(8, captchaH - 8)
    const cx = rand(captchaW * 0.3, captchaW * 0.7)
    const cy = rand(0, captchaH)
    lines.push({ d: `M${x1},${y1} Q${cx},${cy} ${x2},${y2}` })
  }
  captchaLines.value = lines
}

onMounted(() => {
  regenerateCaptcha()
})

// ============ SUBMIT ============
const resetForm = () => {
  state.value = 'idle'
  isPreviewOpen.value = false
  certificateUrl.value = ''
  certNumber.value = ''
  phoneRaw.value = ''
  captchaInput.value = ''
  error.value = null
  regenerateCaptcha()
}

const openPreview = () => {
  if (!certificateUrl.value) return
  isPreviewOpen.value = true
}

const closePreview = () => {
  isPreviewOpen.value = false
}

const onSubmit = async () => {
  error.value = null

  if (!certNumber.value || phoneRaw.value.length < 9 || !captchaInput.value) {
    error.value = { message: t('verify.errorFields') }
    return
  }
  if (captchaInput.value.toUpperCase() !== captchaCode.value) {
    error.value = { message: t('verify.errorCaptcha') }
    captchaInput.value = ''
    regenerateCaptcha()
    return
  }

  state.value = 'loading'
  try {
    const data = await $fetch<{ certificate_url?: string; url?: string }>('/api/certificates/verify', {
      method: 'POST',
      body: {
        certificate_number: certNumber.value,
        phone_number: `+998${phoneRaw.value}`,
        captcha: captchaInput.value
      }
    })

    const resolvedUrl = data?.certificate_url || data?.url

    if (!resolvedUrl) {
      throw createError({ statusCode: 404 })
    }

    certificateUrl.value = resolvedUrl
    isPreviewOpen.value = false
    state.value = 'success'
  } catch (e: unknown) {
    const status = (e as { statusCode?: number; response?: { status?: number } })?.statusCode
      ?? (e as { response?: { status?: number } })?.response?.status
    if (status === 404 || status === 400) {
      error.value = {
        title: t('verify.errorNotFound'),
        message: t('verify.errorNotFoundDesc')
      }
    } else {
      error.value = {
        title: t('verify.errorNetwork'),
        message: t('verify.errorNetworkDesc')
      }
    }
    state.value = 'idle'
    captchaInput.value = ''
    regenerateCaptcha()
  }
}
</script>

<style scoped>
.verify {
  position: relative;
  padding: 110px 0 120px;
  overflow: hidden;
}

.verify-bg {
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
}
.verify-bg .blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  opacity: 0.55;
}
.verify-bg .blob-a {
  width: 420px;
  height: 420px;
  top: -80px;
  left: -120px;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.55), transparent 70%);
}
.verify-bg .blob-b {
  width: 460px;
  height: 460px;
  bottom: -120px;
  right: -140px;
  background: radial-gradient(circle, rgba(236, 72, 153, 0.5), transparent 70%);
}
.verify-bg .grid-overlay {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(to right, rgba(99, 102, 241, 0.06) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(99, 102, 241, 0.06) 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: radial-gradient(ellipse at center, black 30%, transparent 75%);
  -webkit-mask-image: radial-gradient(ellipse at center, black 30%, transparent 75%);
}

.verify-inner { position: relative; }

/* ============ HEADER ============ */
.verify-header {
  text-align: center;
  max-width: 720px;
  margin: 0 auto 48px;
}
.verify-title {
  font-size: clamp(28px, 4vw, 44px);
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.15;
  margin-bottom: 16px;
}
.verify-subtitle {
  font-size: 17px;
  color: var(--c-text-muted);
  line-height: 1.7;
}

/* ============ LAYOUT ============ */
.verify-shell {
  max-width: 1120px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(280px, 0.42fr) minmax(0, 0.58fr);
  gap: 22px;
  align-items: stretch;
  min-width: 0;
}

.verify-side {
  position: relative;
  min-width: 0;
}

.verify-side-card,
.verify-card {
  background: var(--c-card);
  border: 1px solid var(--c-border);
  position: relative;
  overflow: hidden;
}

.verify-side-card {
  height: 100%;
  border-radius: calc(var(--radius-xl) + 6px);
  padding: 28px 24px;
  background:
    linear-gradient(180deg, rgba(99, 102, 241, 0.08), transparent 34%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.72));
  box-shadow: 0 26px 60px rgba(15, 23, 42, 0.08);
}

.verify-card {
  border-radius: calc(var(--radius-xl) + 6px);
  box-shadow: var(--shadow-xl), 0 40px 80px rgba(99, 102, 241, 0.14);
  padding: 36px;
  min-width: 0;
}

.verify-side-card::before,
.verify-card::before {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: inherit;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.6), rgba(236, 72, 153, 0.6));
  z-index: -1;
  opacity: 0.14;
  filter: blur(1px);
}

.verify-side-head {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 22px;
}

.verify-side-badge {
  width: 44px;
  height: 44px;
  border-radius: 14px;
  background: var(--grad-main);
  color: #fff;
  display: grid;
  place-items: center;
  box-shadow: 0 12px 30px rgba(99, 102, 241, 0.24);
  flex-shrink: 0;
}

.verify-side-title {
  font-family: 'Sora', sans-serif;
  font-size: 18px;
  font-weight: 800;
  color: var(--c-text);
  margin-bottom: 2px;
}

.verify-side-sub {
  font-size: 13.5px;
  color: var(--c-text-muted);
  line-height: 1.5;
}

.verify-side-meter {
  position: relative;
  height: 44px;
  margin-bottom: 24px;
}

.meter-line {
  position: absolute;
  left: 0;
  right: 0;
  top: 20px;
  height: 1px;
  background: linear-gradient(90deg, rgba(99, 102, 241, 0.16), rgba(236, 72, 153, 0.28));
}

.meter-dot {
  position: absolute;
  top: 13px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #fff;
  border: 3px solid var(--c-primary);
  box-shadow: 0 0 0 8px rgba(99, 102, 241, 0.08);
}

.meter-dot-1 { left: 0; }
.meter-dot-2 { left: calc(50% - 7px); border-color: #8b5cf6; }
.meter-dot-3 { right: 0; border-color: #ec4899; }

.verify-side-note {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 22px;
  padding-top: 22px;
  border-top: 1px dashed var(--c-border);
  color: var(--c-text-muted);
  font-size: 13px;
  line-height: 1.5;
}

.note-ping {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
  background: linear-gradient(135deg, #10b981, #34d399);
  box-shadow: 0 0 0 6px rgba(16, 185, 129, 0.12);
}

/* ============ FORM HEAD ============ */
.verify-form-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 26px;
  padding-bottom: 22px;
  border-bottom: 1px dashed var(--c-border);
}

.verify-form-head {
  display: flex;
  align-items: center;
  gap: 14px;
}
.verify-badge {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: var(--grad-main);
  color: #fff;
  display: grid;
  place-items: center;
  box-shadow: 0 10px 24px rgba(99, 102, 241, 0.35);
  flex-shrink: 0;
}
.verify-form-title {
  font-family: 'Sora', sans-serif;
  font-size: 19px;
  font-weight: 800;
  color: var(--c-text);
  margin-bottom: 2px;
}
.verify-form-sub {
  font-size: 13.5px;
  color: var(--c-text-muted);
}

.verify-mini-card {
  min-width: 152px;
  padding: 12px 14px;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.08), rgba(236, 72, 153, 0.06));
  border: 1px solid rgba(99, 102, 241, 0.12);
}

.verify-mini-card strong {
  display: block;
  font-size: 13px;
  font-weight: 800;
  color: var(--c-text);
  margin-bottom: 3px;
}

.verify-mini-card span {
  display: block;
  font-size: 12px;
  line-height: 1.45;
  color: var(--c-text-muted);
}

/* ============ FIELDS ============ */
.field-grid {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 16px;
  margin-bottom: 18px;
}
.field { display: flex; flex-direction: column; }
.field label {
  font-size: 12.5px;
  font-weight: 600;
  color: var(--c-text-muted);
  margin-bottom: 8px;
  letter-spacing: 0.02em;
}

.input {
  display: flex;
  align-items: center;
  height: 52px;
  border: 1.5px solid var(--c-border);
  border-radius: 14px;
  background: var(--c-surface);
  transition: border-color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
  overflow: hidden;
}
.input:focus-within {
  border-color: var(--c-primary);
  background: var(--c-card);
  box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.12);
}
.input input {
  flex: 1;
  height: 100%;
  border: 0;
  background: transparent;
  font-family: inherit;
  font-size: 15px;
  font-weight: 600;
  color: var(--c-text);
  letter-spacing: 0.02em;
  padding: 0 14px 0 12px;
  outline: none;
  min-width: 0;
}
.input input::placeholder {
  color: var(--c-text-soft);
  font-weight: 500;
  letter-spacing: 0;
}
.input-icon {
  display: grid;
  place-items: center;
  width: 38px;
  height: 100%;
  color: var(--c-text-muted);
  border-right: 1px solid var(--c-border);
}
.input:focus-within .input-icon { color: var(--c-primary); }

.input-phone .phone-prefix {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 100%;
  padding: 0 12px 0 14px;
  font-weight: 700;
  font-size: 14px;
  color: var(--c-text);
  border-right: 1px solid var(--c-border);
  background: linear-gradient(180deg, transparent, rgba(99, 102, 241, 0.04));
}
.input-phone .phone-prefix svg {
  border-radius: 2px;
  overflow: hidden;
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.08);
}

/* ============ CAPTCHA ============ */
.captcha-field { margin-bottom: 22px; }
.captcha-row {
  display: grid;
  grid-template-columns: auto auto 1fr;
  gap: 10px;
  align-items: stretch;
}
.captcha-display {
  height: 52px;
  border-radius: 14px;
  background:
    repeating-linear-gradient(45deg, rgba(99, 102, 241, 0.06) 0 2px, transparent 2px 6px),
    var(--c-surface);
  border: 1.5px solid var(--c-border);
  overflow: hidden;
  display: grid;
  place-items: center;
  user-select: none;
}
.captcha-display svg { display: block; }
.captcha-refresh {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  border: 1.5px solid var(--c-border);
  background: var(--c-surface);
  color: var(--c-text-muted);
  display: grid;
  place-items: center;
  transition: color 0.2s ease, border-color 0.2s ease, transform 0.4s var(--ease-out);
}
.captcha-refresh:hover {
  color: var(--c-primary);
  border-color: var(--c-primary);
}
.captcha-refresh:active svg { transform: rotate(-180deg); }
.captcha-refresh svg { transition: transform 0.4s var(--ease-out); }
.captcha-input { flex: 1; }

/* ============ ERROR ============ */
.verify-error {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 12px 14px;
  background: rgba(239, 68, 68, 0.08);
  border: 1px solid rgba(239, 68, 68, 0.25);
  border-radius: 12px;
  color: #b91c1c;
  margin-bottom: 18px;
  font-size: 13.5px;
  line-height: 1.5;
}
:root[data-theme='dark'] .verify-error { color: #fca5a5; }
.verify-error svg { flex-shrink: 0; margin-top: 2px; color: #ef4444; }
.verify-error strong { display: block; font-weight: 700; margin-bottom: 2px; }

/* ============ SUBMIT ============ */
.verify-submit {
  width: 100%;
  height: 56px;
  font-size: 15.5px;
  font-weight: 700;
  margin-bottom: 28px;
  border-radius: 16px;
}
.verify-submit:disabled {
  opacity: 0.85;
  cursor: progress;
  transform: none;
}
.spinner {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-top-color: #fff;
  animation: spin 0.7s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }

/* ============ TRUST PILLS ============ */
.verify-trust { display: grid; gap: 10px; }
.verify-trust li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(148, 163, 184, 0.12);
}
.verify-trust li > div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 34px;
}
.trust-icon {
  width: 36px;
  height: 36px;
  border-radius: 11px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  flex-shrink: 0;
  line-height: 0;
  align-self: center;
}
.trust-icon svg {
  display: block;
  flex-shrink: 0;
  margin: auto;
  color: #fff;
}
.trust-1 { background: var(--grad-purple); }
.trust-2 { background: var(--grad-green); }
.trust-3 { background: var(--grad-pink); }
.verify-trust strong {
  display: block;
  font-size: 13.5px;
  font-weight: 700;
  color: var(--c-text);
  letter-spacing: -0.01em;
  margin-bottom: 2px;
}
.verify-trust span {
  display: block;
  font-size: 12.5px;
  color: var(--c-text-muted);
  line-height: 1.4;
}

/* ============ SUCCESS ============ */
.verify-success { display: flex; flex-direction: column; gap: 22px; }
.success-head {
  display: flex;
  align-items: center;
  gap: 14px;
}
.success-icon {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: var(--grad-green);
  color: #fff;
  display: grid;
  place-items: center;
  box-shadow: 0 14px 30px rgba(16, 185, 129, 0.35);
  flex-shrink: 0;
}
.success-title {
  font-family: 'Sora', sans-serif;
  font-size: 22px;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--c-text);
  margin-bottom: 4px;
}
.success-desc {
  font-size: 14.5px;
  color: var(--c-text-muted);
  line-height: 1.5;
}

.success-preview {
  position: relative;
  width: 100%;
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid var(--c-border);
  background: var(--c-surface);
  box-shadow: var(--shadow-md);
  aspect-ratio: 16 / 11;
  padding: 0;
  cursor: zoom-in;
}
.success-preview img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  background: var(--c-surface);
  transition: transform 0.35s var(--ease-out);
}
.success-preview:hover img { transform: scale(1.03); }
.success-preview-overlay {
  position: absolute;
  inset: auto 16px 16px 16px;
  display: flex;
  justify-content: flex-end;
  pointer-events: none;
}
.success-preview-chip {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.72);
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.01em;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}

.success-actions {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}
.action-chip {
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  border-radius: 16px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.86), rgba(255, 255, 255, 0.64));
  border: 1px solid rgba(148, 163, 184, 0.16);
  box-shadow: 0 12px 26px rgba(15, 23, 42, 0.05);
  color: var(--c-text);
  text-align: left;
  transition: transform 0.25s var(--ease-out), border-color 0.25s ease, box-shadow 0.25s ease;
}
.action-chip:hover {
  transform: translateY(-2px);
  border-color: rgba(99, 102, 241, 0.26);
  box-shadow: 0 16px 34px rgba(15, 23, 42, 0.08);
}
.action-chip-primary {
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.14), rgba(236, 72, 153, 0.12)), var(--c-card);
}
.action-chip-muted {
  background: linear-gradient(180deg, rgba(248, 250, 252, 0.9), rgba(241, 245, 249, 0.8));
}
.action-chip-icon {
  width: 42px;
  height: 42px;
  border-radius: 13px;
  display: grid;
  place-items: center;
  flex-shrink: 0;
  background: var(--grad-soft);
  color: var(--c-primary);
}
.action-chip-copy {
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.action-chip-copy strong {
  font-size: 14px;
  font-weight: 700;
  color: var(--c-text);
}
.action-chip-copy small {
  font-size: 12px;
  color: var(--c-text-muted);
}

.preview-lightbox {
  position: fixed;
  inset: 0;
  z-index: 1200;
  display: grid;
  place-items: center;
  padding: 24px;
  background: rgba(2, 6, 23, 0.84);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}
.preview-lightbox-inner {
  position: relative;
  width: min(1100px, 100%);
  max-height: calc(100vh - 48px);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.38);
}
.preview-lightbox-inner img {
  width: 100%;
  height: 100%;
  max-height: calc(100vh - 48px);
  object-fit: contain;
  display: block;
  background: #fff;
}
.preview-close {
  position: absolute;
  top: 18px;
  right: 18px;
  z-index: 3;
  width: 42px;
  height: 42px;
  border-radius: 999px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(15, 23, 42, 0.78);
  color: #fff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
}
.preview-close:hover {
  background: rgba(15, 23, 42, 0.92);
}

/* ============ TRANSITIONS ============ */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}

/* ============ RESPONSIVE ============ */
@media (max-width: 768px) {
  .verify { padding: 80px 0 90px; }
  .verify-shell { grid-template-columns: 1fr; }
  .verify-side-card,
  .verify-card { padding: 26px 20px; border-radius: var(--radius-lg); }
  .verify-form-top {
    flex-direction: column;
    align-items: stretch;
    gap: 14px;
    margin-bottom: 22px;
    padding-bottom: 18px;
  }
  .verify-form-head,
  .verify-side-head { gap: 12px; }
  .verify-badge { width: 40px; height: 40px; border-radius: 11px; }
  .verify-side-badge { width: 40px; height: 40px; border-radius: 12px; }
  .field-grid { grid-template-columns: 1fr; gap: 14px; }
  .captcha-row { grid-template-columns: 1fr auto; grid-template-areas: 'cap ref' 'inp inp'; gap: 10px; }
  .captcha-display { grid-area: cap; width: 100%; }
  .captcha-refresh { grid-area: ref; }
  .captcha-input { grid-area: inp; }
  .success-actions { grid-template-columns: 1fr; }
}

@media (max-width: 480px) {
  .verify { padding: 64px 0 80px; }
  .verify-card { padding: 22px 16px; }
  .verify-title { font-size: 26px; }
  .input { height: 50px; }
  .captcha-display, .captcha-refresh { height: 50px; }
  .success-preview-overlay {
    inset: auto 12px 12px 12px;
  }
  .success-preview-chip {
    padding: 9px 12px;
    font-size: 11.5px;
  }
  .preview-lightbox {
    padding: 14px;
  }
  .preview-lightbox-inner {
    border-radius: 18px;
  }
  .preview-close {
    top: 10px;
    right: 10px;
    width: 38px;
    height: 38px;
  }
}

:root[data-theme='dark'] .verify-side-card {
  background:
    linear-gradient(180deg, rgba(99, 102, 241, 0.12), transparent 34%),
    linear-gradient(180deg, rgba(19, 19, 37, 0.96), rgba(15, 15, 29, 0.92));
  box-shadow: 0 26px 60px rgba(0, 0, 0, 0.34);
}

:root[data-theme='dark'] .verify-card {
  background: linear-gradient(180deg, rgba(19, 19, 37, 0.98), rgba(15, 15, 29, 0.94));
}

:root[data-theme='dark'] .verify-mini-card,
:root[data-theme='dark'] .verify-trust li {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(148, 163, 184, 0.12);
}

:root[data-theme='dark'] .action-chip {
  background: linear-gradient(180deg, rgba(24, 24, 44, 0.96), rgba(17, 17, 32, 0.92));
  border-color: rgba(148, 163, 184, 0.12);
  box-shadow: 0 16px 34px rgba(0, 0, 0, 0.24);
}

:root[data-theme='dark'] .action-chip-primary {
  background:
    linear-gradient(135deg, rgba(99, 102, 241, 0.18), rgba(236, 72, 153, 0.14)),
    linear-gradient(180deg, rgba(24, 24, 44, 0.96), rgba(17, 17, 32, 0.92));
}

:root[data-theme='dark'] .action-chip-muted {
  background: linear-gradient(180deg, rgba(21, 21, 38, 0.96), rgba(15, 15, 28, 0.92));
}

:root[data-theme='dark'] .meter-dot {
  background: var(--c-card);
}
</style>
