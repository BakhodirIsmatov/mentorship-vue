import uz from '~/locales/uz'
import ru from '~/locales/ru'
import en from '~/locales/en'

export type Locale = 'uz' | 'ru' | 'en'

export const LOCALES: { code: Locale; label: string; native: string }[] = [
  { code: 'uz', label: 'UZ', native: "O'zbek" },
  { code: 'ru', label: 'RU', native: 'Русский' },
  { code: 'en', label: 'EN', native: 'English' }
]

const messages = { uz, ru, en } as const
const HTML_LANG: Record<Locale, string> = { uz: 'uz', ru: 'ru', en: 'en' }

/**
 * Lightweight i18n: reactive locale (SSR-safe via useCookie),
 * dot-path lookup with `t('hero.title')`, persists in cookie 1 year.
 */
export function useI18n() {
  const cookie = useCookie<Locale>('locale', {
    default: () => 'uz',
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax'
  })

  const locale = useState<Locale>('locale', () => cookie.value || 'uz')

  const setLocale = (next: Locale) => {
    locale.value = next
    cookie.value = next
    if (import.meta.client) {
      document.documentElement.lang = HTML_LANG[next]
    }
  }

  const t = (key: string): string => {
    const dict = messages[locale.value] as Record<string, unknown>
    const parts = key.split('.')
    let cur: unknown = dict
    for (const p of parts) {
      if (cur && typeof cur === 'object' && p in (cur as Record<string, unknown>)) {
        cur = (cur as Record<string, unknown>)[p]
      } else {
        return key
      }
    }
    return typeof cur === 'string' ? cur : key
  }

  return { locale, setLocale, t, locales: LOCALES }
}
