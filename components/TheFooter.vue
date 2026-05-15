<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-top">
        <div class="brand-col">
          <a href="#top" class="logo">
            <img src="/logo.png" alt="" class="logo-img" width="40" height="40" decoding="async" />
            <span class="logo-text">Global Mentorship Platform</span>
          </a>
          <p class="brand-text">{{ t('footer.brandText') }}</p>
          <div class="socials">
            <a href="#" class="social" aria-label="Telegram">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"/>
              </svg>
            </a>
            <a href="#" class="social" aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <path d="M16 11.4a4 4 0 1 1-8 .8 4 4 0 0 1 8-.8z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="#" class="social" aria-label="YouTube">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M23.5 6.2c-.3-1-1-1.8-2-2C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.5.7c-1 .2-1.7 1-2 2C0 8.2 0 12 0 12s0 3.8.5 5.8c.3 1 1 1.8 2 2 2 .7 9.5.7 9.5.7s7.5 0 9.5-.7c1-.2 1.7-1 2-2 .5-2 .5-5.8.5-5.8s0-3.8-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z"/>
              </svg>
            </a>
            <a href="#" class="social" aria-label="Facebook">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12z"/>
              </svg>
            </a>
          </div>
        </div>

        <nav class="links-col" :aria-label="t('footer.productCol')">
          <h4>{{ t('footer.productCol') }}</h4>
          <a href="#features">{{ t('footer.productLink1') }}</a>
          <a href="#process">{{ t('footer.productLink2') }}</a>
          <a href="#verify">{{ t('footer.productLink3') }}</a>
          <a href="#faq">{{ t('footer.productLink4') }}</a>
          <a href="#download">{{ t('footer.productLink5') }}</a>
        </nav>

        <nav class="links-col" :aria-label="t('footer.companyCol')">
          <h4>{{ t('footer.companyCol') }}</h4>
          <a href="#">{{ t('footer.companyLink1') }}</a>
          <a href="#">{{ t('footer.companyLink2') }}</a>
          <a href="#">{{ t('footer.companyLink3') }}</a>
          <a href="#">{{ t('footer.companyLink4') }}</a>
        </nav>

        <nav class="links-col" :aria-label="t('footer.contactCol')">
          <h4>{{ t('footer.contactCol') }}</h4>
          <a href="mailto:salom@ustoz.uz">info@global-mentorship.uz</a>
          <a href="tel:+998993792894">+998 99 379 28 94</a>
          <a href="#">{{ t('footer.contactHelp') }}</a>
          <a href="#">{{ t('footer.contactPrivacy') }}</a>
        </nav>
      </div>

      <div class="footer-bottom">
        <p>© {{ year }} Global Mentorship Platform. {{ t('footer.rights') }}</p>
        <div class="legal">
          <a href="#">{{ t('footer.legalTerms') }}</a>
          <a href="#">{{ t('footer.legalPrivacy') }}</a>
          <a href="#">{{ t('footer.legalCookies') }}</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { t } = useI18n()
const year = new Date().getFullYear()
</script>

<style scoped>
.footer {
  background: var(--c-footer-bg);
  color: var(--c-footer-text);
  padding: 80px 0 32px;
  position: relative;
  overflow: hidden;
}
.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.6), transparent);
}

.footer-top {
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr 1fr;
  gap: 48px;
  padding-bottom: 48px;
  border-bottom: 1px solid var(--c-footer-border);
}

.brand-col { max-width: 360px; }
.logo { display: inline-flex; align-items: center; gap: 10px; margin-bottom: 16px; }
.logo-img {
  width: 40px;
  height: 40px;
  display: block;
  border-radius: 50%;
  object-fit: cover;
  filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.4));
}
.logo-text { font-family: 'Sora', sans-serif; font-weight: 800; font-size: 22px; letter-spacing: -0.02em; color: #fff; }

.brand-text { font-size: 14.5px; line-height: 1.7; margin-bottom: 24px; color: var(--c-footer-muted); }

.socials { display: flex; gap: 10px; }
.social {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: var(--c-footer-surface);
  display: grid;
  place-items: center;
  color: var(--c-footer-text);
  transition: background 0.25s ease, color 0.25s ease, transform 0.25s var(--ease-out);
}
.social:hover { background: var(--grad-main); color: #fff; transform: translateY(-3px); }

.links-col { display: flex; flex-direction: column; gap: 12px; }
.links-col h4 {
  font-family: 'Sora', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 8px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
.links-col a { font-size: 14.5px; color: var(--c-footer-muted); transition: color 0.2s ease, transform 0.2s ease; }
.links-col a:hover { color: #fff; transform: translateX(3px); }

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  padding-top: 32px;
  font-size: 13.5px;
  color: var(--c-footer-muted);
}
.legal { display: flex; gap: 24px; }
.legal a:hover { color: #fff; }

@media (max-width: 1024px) {
  .footer-top { grid-template-columns: 1fr 1fr; gap: 40px; }
  .brand-col { grid-column: 1 / -1; max-width: none; }
}

@media (max-width: 540px) {
  .footer-top { grid-template-columns: 1fr; gap: 32px; }
  .footer-bottom { flex-direction: column; align-items: flex-start; }
}
</style>
