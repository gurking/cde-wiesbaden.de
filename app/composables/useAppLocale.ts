const supportedLocales = ['de', 'en', 'es'] as const

type AppLocale = (typeof supportedLocales)[number]

export const useAppLocale = () => {
  const { locale, locales, setLocale } = useI18n()
  const localePath = useLocalePath()
  const localeCookie = useCookie<string>('cde-locale', {
    path: '/',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 365
  })

  const localeCodes = computed(() =>
    locales.value
      .map(entry => ('code' in entry ? entry.code : String(entry)))
      .filter((code): code is AppLocale => supportedLocales.includes(code as AppLocale))
  )

  const isSupportedLocale = (code: string): code is AppLocale => {
    return supportedLocales.includes(code as AppLocale) && localeCodes.value.includes(code as AppLocale)
  }

  const setAppLocale = async (code: string) => {
    if (!isSupportedLocale(code)) {
      return
    }

    localeCookie.value = code
    await setLocale(code)
  }

  const syncStoredLocale = async () => {
    const storedLocale = localeCookie.value

    if (!storedLocale || storedLocale === locale.value || !isSupportedLocale(storedLocale)) {
      return
    }

    await setLocale(storedLocale)
  }

  watch(locale, (value) => {
    localeCookie.value = value
  }, { immediate: true })

  return {
    locale,
    localePath,
    setAppLocale,
    syncStoredLocale
  }
}
