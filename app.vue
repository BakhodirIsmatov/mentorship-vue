<template>
  <NuxtPage />
</template>

<script setup lang="ts">
// Initialize once at the root so the cookie/system-preference logic
// runs before any component mounts. The composables themselves are
// SSR-safe and idempotent.
useI18n()
useTheme()
</script>
