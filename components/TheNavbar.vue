<template>
  <header class="navbar" :class="{ scrolled: isScrolled, 'menu-open': menuOpen }">
    <div class="container nav-inner">
      <a href="#top" class="logo" :aria-label="t('nav.home')">
        <img src="/logo.png" alt="" class="logo-img" width="40" height="40" decoding="async" />
        <span class="logo-text">Ustoz</span>
      </a>

      <nav class="nav-links" :aria-label="t('nav.menu')">
        <a href="#features">{{ t('nav.features') }}</a>
        <a href="#process">{{ t('nav.process') }}</a>
        <a href="#audience">{{ t('nav.audience') }}</a>
        <a href="#faq">{{ t('nav.faq') }}</a>
      </nav>

      <div class="nav-actions">
        <!-- Language switcher -->
        <div class="lang" ref="langWrap">
          <button
            class="icon-btn lang-btn"
            :aria-label="t('nav.language')"
            :aria-expanded="langOpen"
            aria-haspopup="listbox"
            @click="langOpen = !langOpen"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="9"/>
              <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>
            </svg>
            <span>{{ currentLocale.label }}</span>
            <svg class="caret" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          <ul v-show="langOpen" class="lang-menu" role="listbox">
            <li v-for="l in locales" :key="l.code">
              <button
                role="option"
                :aria-selected="locale === l.code"
                :class="['lang-item', { active: locale === l.code }]"
                @click="pickLocale(l.code)"
              >
                <span class="lang-code">{{ l.label }}</span>
                <span class="lang-native">{{ l.native }}</span>
                <svg v-if="locale === l.code" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </button>
            </li>
          </ul>
        </div>

        <!-- Theme toggle -->
        <button
          class="icon-btn theme-btn"
          :aria-label="t('theme.toggle')"
          @click="toggleTheme"
        >
          <svg v-if="theme === 'dark'" key="sun" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="4"/>
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
          </svg>
          <svg v-else key="moon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        </button>

        <a href="#download" class="btn btn-primary nav-cta">{{ t('nav.download') }}</a>

        <button
          class="menu-btn"
          :aria-expanded="menuOpen"
          :aria-label="t('nav.menu')"
          @click="menuOpen = !menuOpen"
        >
          <span /><span /><span />
        </button>
      </div>
    </div>

    <div class="mobile-menu" :class="{ open: menuOpen }">
      <a @click="menuOpen = false" href="#features">{{ t('nav.features') }}</a>
      <a @click="menuOpen = false" href="#process">{{ t('nav.process') }}</a>
      <a @click="menuOpen = false" href="#audience">{{ t('nav.audience') }}</a>
      <a @click="menuOpen = false" href="#faq">{{ t('nav.faq') }}</a>
      <a @click="menuOpen = false" href="#download" class="btn btn-primary mobile-cta">
        {{ t('nav.download') }}
      </a>
    </div>
  </header>
</template>

<script setup lang="ts">
const { t, locale, setLocale, locales } = useI18n()
const { theme, toggleTheme } = useTheme()

const isScrolled = ref(false)
const menuOpen = ref(false)
const langOpen = ref(false)
const langWrap = ref<HTMLElement | null>(null)

const currentLocale = computed(
  () => locales.find((l) => l.code === locale.value) ?? locales[0]
)

const pickLocale = (code: typeof locale.value) => {
  setLocale(code)
  langOpen.value = false
}

const onScroll = () => {
  isScrolled.value = window.scrollY > 8
}

const onClickOutside = (e: MouseEvent) => {
  if (!langWrap.value) return
  if (!langWrap.value.contains(e.target as Node)) langOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  document.addEventListener('click', onClickOutside)
  onScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  document.removeEventListener('click', onClickOutside)
})
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  background: var(--c-nav-bg);
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  border-bottom: 1px solid transparent;
  transition: background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
}
.navbar.scrolled {
  background: var(--c-nav-bg-scrolled);
  border-bottom-color: var(--c-nav-border);
  box-shadow: 0 8px 30px rgba(15, 23, 42, 0.06);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--nav-height);
  gap: 24px;
}

/* ============ LOGO ============ */
.logo {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}
.logo-img {
  width: 40px;
  height: 40px;
  display: block;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
  filter: drop-shadow(0 4px 10px rgba(15, 23, 42, 0.18));
}
.logo-text {
  font-family: 'Sora', sans-serif;
  font-weight: 800;
  font-size: 20px;
  letter-spacing: -0.02em;
  color: var(--c-text);
}

/* ============ LINKS ============ */
.nav-links {
  display: flex;
  align-items: center;
  gap: 32px;
}
.nav-links a {
  font-weight: 500;
  font-size: 15px;
  color: var(--c-text);
  position: relative;
}
.nav-links a::after {
  content: '';
  position: absolute;
  left: 0;
  right: 100%;
  bottom: -6px;
  height: 2px;
  background: var(--grad-main);
  border-radius: 2px;
  transition: right 0.3s var(--ease-out);
}
.nav-links a:hover { color: var(--c-primary); }
.nav-links a:hover::after { right: 0; }

/* ============ ACTIONS ============ */
.nav-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.icon-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 38px;
  min-width: 38px;
  padding: 0 10px;
  border-radius: 10px;
  background: var(--c-surface);
  color: var(--c-text);
  border: 1px solid var(--c-border);
  font-weight: 600;
  font-size: 13px;
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease, transform 0.2s var(--ease-out);
}
.icon-btn:hover {
  border-color: var(--c-primary);
  color: var(--c-primary);
}
.icon-btn .caret {
  transition: transform 0.2s ease;
}
.lang [aria-expanded='true'] .caret { transform: rotate(180deg); }

.theme-btn {
  width: 38px;
  padding: 0;
  justify-content: center;
}
.theme-btn svg {
  transition: transform 0.4s var(--ease-out);
}
.theme-btn:hover svg {
  transform: rotate(20deg) scale(1.1);
}

/* ============ LANG DROPDOWN ============ */
.lang { position: relative; }

.lang-menu {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  min-width: 180px;
  background: var(--c-card);
  border: 1px solid var(--c-border);
  border-radius: 12px;
  padding: 6px;
  box-shadow: var(--shadow-lg);
  display: flex;
  flex-direction: column;
  gap: 2px;
  z-index: 50;
  animation: fadeDown 0.18s var(--ease-out);
}
@keyframes fadeDown {
  from { opacity: 0; transform: translateY(-6px); }
  to { opacity: 1; transform: translateY(0); }
}

.lang-item {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 12px;
  border-radius: 8px;
  color: var(--c-text);
  font-size: 13.5px;
  text-align: left;
  transition: background 0.15s ease, color 0.15s ease;
}
.lang-item:hover { background: var(--c-surface); }
.lang-item.active {
  background: var(--grad-soft);
  color: var(--c-primary);
}
.lang-code {
  font-family: 'Sora', sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.06em;
  width: 24px;
}
.lang-native {
  flex: 1;
  font-weight: 500;
}

/* ============ MENU BUTTON (mobile) ============ */
.menu-btn {
  display: none;
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: var(--c-surface);
  border: 1px solid var(--c-border);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 10px;
}
.menu-btn span {
  display: block;
  width: 18px;
  height: 2px;
  background: var(--c-text);
  border-radius: 2px;
  transition: transform 0.25s var(--ease-out), opacity 0.25s ease;
}
.menu-open .menu-btn span:nth-child(1) { transform: translateY(6px) rotate(45deg); }
.menu-open .menu-btn span:nth-child(2) { opacity: 0; }
.menu-open .menu-btn span:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }

/* ============ MOBILE MENU ============ */
.mobile-menu {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: var(--c-nav-bg-scrolled);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--c-border);
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s var(--ease-out), padding 0.3s var(--ease-out);
  padding-top: 0;
  padding-bottom: 0;
}
.mobile-menu.open {
  max-height: 420px;
  padding-top: 16px;
  padding-bottom: 24px;
}
.mobile-menu a {
  padding: 12px 16px;
  border-radius: 10px;
  font-weight: 500;
  font-size: 16px;
  color: var(--c-text);
  transition: background 0.2s ease;
}
.mobile-menu a:hover { background: var(--c-surface); color: var(--c-primary); }
.mobile-cta { margin-top: 8px; justify-content: center; }

@media (max-width: 1024px) {
  .nav-links { display: none; }
}

@media (max-width: 768px) {
  .nav-inner { gap: 12px; }
  .nav-actions { gap: 6px; }
  .menu-btn { display: flex; }
  .nav-cta { display: none; }

  /* Mobil — lang button only shows the globe icon */
  .lang-btn {
    width: 38px;
    padding: 0;
    justify-content: center;
  }
  .lang-btn > span,
  .lang-btn .caret {
    display: none;
  }
}

@media (max-width: 380px) {
  .logo-img { width: 34px; height: 34px; }
  .logo-text { font-size: 18px; }
  .icon-btn { height: 36px; min-width: 36px; }
  .lang-btn { width: 36px; }
  .menu-btn { width: 36px; height: 36px; }
}
</style>
