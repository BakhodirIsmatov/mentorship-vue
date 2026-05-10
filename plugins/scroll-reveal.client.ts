/**
 * Global IntersectionObserver — adds `is-visible` to any element with
 * sr-up / sr-down / sr-left / sr-right / sr-zoom / sr-zoom-up when it
 * scrolls into view. Re-scans after each route navigation.
 */
export default defineNuxtPlugin((nuxtApp) => {
  if (typeof window === 'undefined') return

  const SELECTOR = '.sr-up, .sr-down, .sr-left, .sr-right, .sr-zoom, .sr-zoom-up'

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
  )

  const scan = () => {
    document.querySelectorAll(SELECTOR).forEach((el) => {
      if (!el.classList.contains('is-visible')) observer.observe(el)
    })
  }

  nuxtApp.hook('app:mounted', () => requestAnimationFrame(scan))
  nuxtApp.hook('page:finish', () => requestAnimationFrame(scan))
})
