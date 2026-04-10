export const useAppLocale = () => {
  const { locale, locales, setLocale } = useI18n()
  const localePath = useLocalePath()
  const localeCookie = useCookie<string>('cde-locale', {
    path: '/',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 365
  })

  const localeCodes = computed(() =>
    locales.value.map((entry) => ('code' in entry ? entry.code : String(entry)))
  )

  const isSupportedLocale = (code: string) => {
    return localeCodes.value.includes(code)
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
