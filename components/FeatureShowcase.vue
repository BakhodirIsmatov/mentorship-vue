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
          <div class="cert-paper">
            <div class="cert-band">
              <div class="cert-mark">
                <img src="/logo.png" alt="" width="32" height="32" decoding="async" />
              </div>
              <div class="cert-band-text">{{ t('showcase2.bandText') }}</div>
            </div>

            <div class="cert-body">
              <div class="cert-eyebrow">{{ t('showcase2.eyebrowText') }}</div>
              <div class="cert-name">Burxon Davronov</div>
              <div class="cert-text">{{ t('showcase2.text') }}</div>
              <div class="cert-skill">{{ t('showcase2.skill') }}</div>

              <div class="cert-meta">
                <div class="cm">
                  <div class="cm-label">{{ t('showcase2.metaNum') }}</div>
                  <div class="cm-value">UZ-2026-00232</div>
                </div>
                <div class="cm">
                  <div class="cm-label">{{ t('showcase2.metaDate') }}</div>
                  <div class="cm-value">10.05.2026</div>
                </div>
              </div>

              <div class="cert-footer">
                <div class="cert-sign">
                  <div class="sign-line">Bahodir Ismatov</div>
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
defineProps<{
  variant: 'form' | 'certificate'
  reverse?: boolean
  ns: 'showcase1' | 'showcase2'
}>()

const { t } = useI18n()
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
  .form-mockup { padding: 22px 20px 26px; }
  .cert-body { padding: 24px 20px; }
  .cert-band { padding: 16px 20px; }
  .cert-name { font-size: 22px; }
}
</style>
