export type Theme = 'light' | 'dark'

/**
 * Reactive theme stored in a cookie (SSR-safe). Sets `data-theme` on
 * <html>. Initial pick falls back to system preference on first visit.
 */
export function useTheme() {
  const cookie = useCookie<Theme | null>('theme', {
    default: () => null,
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax'
  })

  const theme = useState<Theme>('theme', () => cookie.value ?? 'light')

  const apply = (t: Theme) => {
    if (import.meta.client) {
      document.documentElement.dataset.theme = t
    }
  }

  const setTheme = (next: Theme) => {
    theme.value = next
    cookie.value = next
    apply(next)
  }

  const toggleTheme = () => setTheme(theme.value === 'dark' ? 'light' : 'dark')

  // First visit (no cookie) — pick from OS preference
  onMounted(() => {
    if (!cookie.value && import.meta.client) {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setTheme(prefersDark ? 'dark' : 'light')
    } else {
      apply(theme.value)
    }
  })

  return { theme, setTheme, toggleTheme }
}
