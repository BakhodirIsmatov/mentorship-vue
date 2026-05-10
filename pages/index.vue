<template>
  <div class="page">
    <TheNavbar />

    <main>
      <HeroSection />
      <StatsBar />
      <FeaturesGrid />
      <FeatureShowcase variant="form" ns="showcase1" />
      <FeatureShowcase variant="certificate" ns="showcase2" :reverse="true" />
      <ProcessSteps />
      <AudienceSection />
      <TestimonialsSection />
      <FaqAccordion />
      <FinalCta />
    </main>

    <TheFooter />
  </div>
</template>

<script setup lang="ts">
// useI18n() / useTheme() are auto-imported and shared via useState — no manual init needed here.
</script>

<style scoped>
.page { min-height: 100vh; display: flex; flex-direction: column; }
main { flex: 1; }
</style>
