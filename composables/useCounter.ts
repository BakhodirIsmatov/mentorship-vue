/**
 * Counter animation with easeOutExpo.
 * Returns a ref that animates from 0 to `target` once `start()` is called.
 */
export function useCounter(target: number, duration = 1800) {
  const value = ref(0)
  let started = false

  const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t))

  const start = () => {
    if (started) return
    started = true
    const startTime = performance.now()
    const tick = (now: number) => {
      const t = Math.min(1, (now - startTime) / duration)
      value.value = Math.round(easeOutExpo(t) * target)
      if (t < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }

  return { value, start }
}
