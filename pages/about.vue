<template>
  <div class="about-page">
    <TheNavbar />

    <main class="about-main">
      <section class="about-hero section">
        <div class="about-hero-bg" aria-hidden="true">
          <div class="about-orb about-orb-a" />
          <div class="about-orb about-orb-b" />
          <div class="about-grid" />
        </div>

        <div class="container about-hero-inner">
          <div class="about-copy">
            <span class="eyebrow">
              <span class="eyebrow-dot" />
              {{ t('aboutPage.badge') }}
            </span>
            <h1 class="about-title">
              {{ t('aboutPage.title1') }}
              <span class="gradient-text">{{ t('aboutPage.titleHl') }}</span>
              {{ t('aboutPage.title2') }}
            </h1>
            <p class="about-subtitle">{{ t('aboutPage.subtitle') }}</p>

            <div class="about-actions">
              <NuxtLink to="/" class="btn btn-primary">{{ t('aboutPage.primaryCta') }}</NuxtLink>
              <a href="/#verify" class="btn btn-ghost">{{ t('aboutPage.secondaryCta') }}</a>
            </div>
          </div>

          <div class="about-showcase">
            <div class="showcase-card showcase-main">
              <span class="showcase-kicker">01</span>
              <strong>{{ t('aboutPage.stat1') }}</strong>
              <p>{{ t('aboutPage.stat1Text') }}</p>
            </div>
            <div class="showcase-stack">
              <div class="showcase-card">
                <span class="showcase-kicker">02</span>
                <strong>{{ t('aboutPage.stat2') }}</strong>
                <p>{{ t('aboutPage.stat2Text') }}</p>
              </div>
              <div class="showcase-card">
                <span class="showcase-kicker">03</span>
                <strong>{{ t('aboutPage.stat3') }}</strong>
                <p>{{ t('aboutPage.stat3Text') }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="story" class="about-story section">
        <div class="container story-layout">
          <div class="story-copy">
            <span class="eyebrow">
              <span class="eyebrow-dot" />
              {{ t('aboutPage.storyEyebrow') }}
            </span>
            <h2 class="section-title">{{ t('aboutPage.storyTitle') }}</h2>
            <p class="story-text">{{ t('aboutPage.storyText1') }}</p>
            <p class="story-text">{{ t('aboutPage.storyText2') }}</p>
          </div>

          <div class="story-metrics">
            <article class="metric-card metric-lg">
              <span>{{ t('aboutPage.metric1Label') }}</span>
              <strong>{{ t('aboutPage.metric1Value') }}</strong>
            </article>
            <article class="metric-card">
              <span>{{ t('aboutPage.metric2Label') }}</span>
              <strong>{{ t('aboutPage.metric2Value') }}</strong>
            </article>
            <article class="metric-card accent">
              <span>{{ t('aboutPage.metric3Label') }}</span>
              <strong>{{ t('aboutPage.metric3Value') }}</strong>
            </article>
          </div>
        </div>
      </section>

      <section id="principles" class="about-principles section">
        <div class="container">
          <header class="section-header">
            <span class="eyebrow">
              <span class="eyebrow-dot" />
              {{ t('aboutPage.principlesEyebrow') }}
            </span>
            <h2 class="section-title">{{ t('aboutPage.principlesTitle') }}</h2>
            <p class="section-subtitle">{{ t('aboutPage.principlesSubtitle') }}</p>
          </header>

          <div class="principles-grid">
            <article v-for="(item, index) in principles" :key="item.title" class="principle-card">
              <span class="principle-index">0{{ index + 1 }}</span>
              <h3>{{ item.title }}</h3>
              <p>{{ item.text }}</p>
            </article>
          </div>
        </div>
      </section>

      <section id="journey" class="about-journey section">
        <div class="container">
          <header class="journey-head">
            <span class="eyebrow">
              <span class="eyebrow-dot" />
              {{ t('aboutPage.journeyEyebrow') }}
            </span>
            <h2 class="section-title">{{ t('aboutPage.journeyTitle') }}</h2>
            <p class="section-subtitle">{{ t('aboutPage.journeySubtitle') }}</p>
          </header>

          <div class="journey-track">
            <article v-for="(item, index) in journey" :key="item.title" class="journey-card">
              <div class="journey-line" aria-hidden="true" />
              <span class="journey-step">0{{ index + 1 }}</span>
              <h3>{{ item.title }}</h3>
              <p>{{ item.text }}</p>
            </article>
          </div>
        </div>
      </section>

      <section class="about-cta section">
        <div class="container">
          <div class="about-cta-card">
            <div class="about-cta-copy">
              <span class="eyebrow">
                <span class="eyebrow-dot" />
                {{ t('aboutPage.ctaEyebrow') }}
              </span>
              <h2>{{ t('aboutPage.ctaTitle') }}</h2>
              <p>{{ t('aboutPage.ctaText') }}</p>
            </div>
            <div class="about-cta-actions">
              <NuxtLink to="/" class="btn btn-primary">{{ t('aboutPage.ctaPrimary') }}</NuxtLink>
              <a href="/#verify" class="btn btn-ghost">{{ t('aboutPage.ctaSecondary') }}</a>
            </div>
          </div>
        </div>
      </section>
    </main>

    <TheFooter />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: 'About | Global Mentorship Platform',
  description: 'Learn how Global Mentorship turns mentor-apprentice knowledge into verifiable digital certificates.'
})

const principles = computed(() => [
  { title: t('aboutPage.p1Title'), text: t('aboutPage.p1Text') },
  { title: t('aboutPage.p2Title'), text: t('aboutPage.p2Text') },
  { title: t('aboutPage.p3Title'), text: t('aboutPage.p3Text') }
])

const journey = computed(() => [
  { title: t('aboutPage.j1Title'), text: t('aboutPage.j1Text') },
  { title: t('aboutPage.j2Title'), text: t('aboutPage.j2Text') },
  { title: t('aboutPage.j3Title'), text: t('aboutPage.j3Text') },
  { title: t('aboutPage.j4Title'), text: t('aboutPage.j4Text') }
])
</script>

<style scoped>
.about-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.about-main {
  flex: 1;
}

.about-hero {
  position: relative;
  overflow: hidden;
  padding-top: 72px;
}

.about-hero-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.about-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  opacity: 0.42;
}

.about-orb-a {
  width: 380px;
  height: 380px;
  top: -80px;
  left: -100px;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.26), transparent 68%);
}

.about-orb-b {
  width: 420px;
  height: 420px;
  right: -120px;
  bottom: -140px;
  background: radial-gradient(circle, rgba(236, 72, 153, 0.2), transparent 70%);
}

.about-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(to right, rgba(99, 102, 241, 0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(99, 102, 241, 0.05) 1px, transparent 1px);
  background-size: 42px 42px;
  mask-image: radial-gradient(circle at center, black 36%, transparent 86%);
  -webkit-mask-image: radial-gradient(circle at center, black 36%, transparent 86%);
}

.about-hero-inner {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(320px, 0.9fr);
  gap: 48px;
  align-items: center;
}

.about-copy,
.about-showcase,
.story-copy,
.story-metrics {
  min-width: 0;
}

.about-title {
  max-width: 12ch;
  font-size: clamp(40px, 6vw, 76px);
  line-height: 0.98;
  letter-spacing: -0.05em;
}

.about-subtitle {
  max-width: 640px;
  margin-top: 22px;
  font-size: 18px;
  line-height: 1.75;
  color: var(--c-text-muted);
}

.about-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 28px;
}

.btn-ghost {
  border: 1px solid rgba(148, 163, 184, 0.18);
  background: rgba(255, 255, 255, 0.64);
  color: var(--c-text);
  box-shadow: 0 16px 32px rgba(15, 23, 42, 0.06);
}

.btn-ghost:hover {
  transform: translateY(-2px);
  border-color: rgba(99, 102, 241, 0.28);
}

.about-showcase {
  display: grid;
  gap: 18px;
}

.showcase-main {
  min-height: 240px;
}

.showcase-stack {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.showcase-card {
  position: relative;
  overflow: hidden;
  padding: 24px;
  border-radius: 28px;
  background:
    linear-gradient(180deg, rgba(99, 102, 241, 0.1), transparent 42%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.76));
  border: 1px solid rgba(148, 163, 184, 0.14);
  box-shadow: 0 26px 60px rgba(15, 23, 42, 0.1);
}

.showcase-card::after {
  content: '';
  position: absolute;
  inset: auto -20% -42% 20%;
  height: 160px;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.16), transparent 70%);
}

.showcase-kicker {
  display: inline-flex;
  margin-bottom: 18px;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.14em;
  color: var(--c-primary);
}

.showcase-card strong {
  display: block;
  max-width: 12ch;
  font-family: 'Sora', sans-serif;
  font-size: 28px;
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: var(--c-text);
}

.showcase-card p {
  position: relative;
  z-index: 1;
  margin-top: 14px;
  color: var(--c-text-muted);
  line-height: 1.75;
}

.story-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(320px, 0.9fr);
  gap: 30px;
  align-items: start;
}

.story-text {
  max-width: 60ch;
  font-size: 16px;
  line-height: 1.85;
  color: var(--c-text-muted);
}

.story-text + .story-text {
  margin-top: 14px;
}

.story-metrics {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.metric-card {
  padding: 24px;
  border-radius: 24px;
  background: var(--c-card);
  border: 1px solid var(--c-border);
  box-shadow: 0 18px 38px rgba(15, 23, 42, 0.07);
}

.metric-lg {
  grid-column: 1 / -1;
  background:
    linear-gradient(135deg, rgba(99, 102, 241, 0.12), rgba(236, 72, 153, 0.08)),
    var(--c-card);
}

.metric-card.accent {
  background:
    linear-gradient(180deg, rgba(245, 158, 11, 0.16), transparent 70%),
    var(--c-card);
}

.metric-card span {
  display: block;
  margin-bottom: 10px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--c-text-soft);
}

.metric-card strong {
  display: block;
  font-family: 'Sora', sans-serif;
  font-size: 28px;
  line-height: 1.15;
  letter-spacing: -0.03em;
  color: var(--c-text);
}

.principles-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

.principle-card {
  position: relative;
  overflow: hidden;
  min-height: 260px;
  padding: 24px;
  border-radius: 28px;
  background:
    radial-gradient(circle at top right, rgba(99, 102, 241, 0.12), transparent 34%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.72));
  border: 1px solid rgba(148, 163, 184, 0.14);
  box-shadow: 0 22px 44px rgba(15, 23, 42, 0.08);
}

.principle-index,
.journey-step {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 48px;
  height: 48px;
  border-radius: 14px;
  background: var(--grad-soft);
  color: var(--c-primary);
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.12em;
}

.principle-card h3,
.journey-card h3 {
  margin-top: 22px;
  font-size: 24px;
  line-height: 1.15;
  letter-spacing: -0.03em;
  color: var(--c-text);
}

.principle-card p,
.journey-card p {
  margin-top: 14px;
  color: var(--c-text-muted);
  line-height: 1.75;
}

.journey-head {
  max-width: 760px;
}

.journey-track {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
  margin-top: 38px;
}

.journey-card {
  position: relative;
  padding: 24px;
  border-radius: 26px;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.94), rgba(255, 255, 255, 0.76));
  border: 1px solid rgba(148, 163, 184, 0.14);
  box-shadow: 0 20px 42px rgba(15, 23, 42, 0.07);
}

.journey-line {
  position: absolute;
  top: 32px;
  right: -18px;
  width: 36px;
  height: 1px;
  background: linear-gradient(90deg, rgba(99, 102, 241, 0.42), rgba(236, 72, 153, 0.18));
}

.journey-card:last-child .journey-line {
  display: none;
}

.about-cta-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 28px;
  padding: 32px;
  border-radius: 32px;
  background:
    radial-gradient(circle at top left, rgba(99, 102, 241, 0.16), transparent 30%),
    radial-gradient(circle at bottom right, rgba(236, 72, 153, 0.14), transparent 34%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.94), rgba(255, 255, 255, 0.78));
  border: 1px solid rgba(148, 163, 184, 0.14);
  box-shadow: 0 28px 64px rgba(15, 23, 42, 0.1);
}

.about-cta-copy {
  max-width: 760px;
}

.about-cta-copy h2 {
  font-size: clamp(30px, 4vw, 48px);
  line-height: 1.02;
  letter-spacing: -0.04em;
}

.about-cta-copy p {
  margin-top: 16px;
  color: var(--c-text-muted);
  line-height: 1.8;
}

.about-cta-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: flex-end;
}

@media (max-width: 1080px) {
  .about-hero-inner,
  .story-layout {
    grid-template-columns: 1fr;
  }

  .journey-track {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .journey-line {
    display: none;
  }

  .about-cta-card {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 768px) {
  .about-hero {
    padding-top: 52px;
  }

  .about-title {
    max-width: none;
    font-size: clamp(34px, 11vw, 52px);
  }

  .about-subtitle {
    font-size: 16px;
  }

  .showcase-stack,
  .story-metrics,
  .principles-grid,
  .journey-track {
    grid-template-columns: 1fr;
  }

  .showcase-main,
  .principle-card {
    min-height: 0;
  }

  .section {
    padding: 84px 0;
  }
}

@media (max-width: 540px) {
  .about-actions,
  .about-cta-actions {
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
  }

  .about-actions :deep(.btn),
  .about-cta-actions :deep(.btn) {
    width: 100%;
  }

  .showcase-card,
  .metric-card,
  .principle-card,
  .journey-card,
  .about-cta-card {
    padding: 20px;
    border-radius: 22px;
  }
}

:root[data-theme='dark'] .btn-ghost {
  background: rgba(19, 19, 37, 0.82);
  border-color: rgba(148, 163, 184, 0.14);
  color: var(--c-text);
  box-shadow: 0 18px 34px rgba(0, 0, 0, 0.22);
}

:root[data-theme='dark'] .showcase-card,
:root[data-theme='dark'] .metric-card,
:root[data-theme='dark'] .principle-card,
:root[data-theme='dark'] .journey-card,
:root[data-theme='dark'] .about-cta-card {
  background:
    linear-gradient(180deg, rgba(24, 24, 44, 0.96), rgba(15, 15, 29, 0.92));
  border-color: rgba(148, 163, 184, 0.12);
  box-shadow: 0 24px 54px rgba(0, 0, 0, 0.28);
}

:root[data-theme='dark'] .showcase-main,
:root[data-theme='dark'] .metric-lg,
:root[data-theme='dark'] .metric-card.accent {
  background:
    linear-gradient(180deg, rgba(99, 102, 241, 0.16), transparent 46%),
    linear-gradient(180deg, rgba(24, 24, 44, 0.96), rgba(15, 15, 29, 0.92));
}
</style>
