<script setup lang="ts">
const { locale, locales, setLocale, t } = useI18n()
type LocaleCode = typeof locale.value
const localeFlags: Record<LocaleCode, string> = {
  de: '🇩🇪',
  en: '🇬🇧',
  es: '🇪🇸'
}

const localeButtons = computed(() =>
  locales.value.map((entry) => {
    const code = ('code' in entry ? entry.code : String(entry)) as LocaleCode
    const name = typeof entry === 'object' && 'name' in entry ? entry.name : code.toUpperCase()

    return {
      code,
      flag: localeFlags[code],
      shortLabel: code.toUpperCase(),
      title: typeof name === 'string' ? name : code.toUpperCase()
    }
  })
)

const switchLocale = async (code: LocaleCode) => {
  await setLocale(code)
}


useHead(() => ({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: locale.value
  }
}))

useSeoMeta({
  title: () => t('meta.title'),
  description: () => t('meta.description'),
  ogTitle: () => t('meta.title'),
  ogDescription: () => t('meta.description'),
  ogImage: '/favicon.ico',
  twitterImage: '/favicon.ico',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <UApp class="cde-shell">
    <UHeader class="cde-glass border-b border-[var(--cde-header-border)]">
      <template #left>
        <NuxtLink
          to="/"
          class="flex items-center gap-3"
        >
          <AppLogo class="h-8 w-auto shrink-0 text-[var(--cde-coral)]" />
          <div class="hidden sm:block">
            <p class="cde-heading text-sm text-[var(--cde-shell-text)]">
              {{ $t('header.clubNickname') }}
            </p>
            <p class="text-xs font-medium uppercase tracking-[0.24em] text-[var(--cde-muted-text)]">
              {{ $t('header.clubName') }}
            </p>
          </div>
        </NuxtLink>
      </template>

      <template #right>
        <div class="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-1">
          <UButton
            v-for="entry in localeButtons"
            :key="entry.code"
            :label="`${entry.flag} ${entry.shortLabel}`"
            :title="entry.title"
            color="neutral"
            :variant="locale === entry.code ? 'soft' : 'ghost'"
            class="rounded-md"
            @click="switchLocale(entry.code)"
          />
        </div>

        <UColorModeButton
          color="neutral"
          variant="ghost"
          class="rounded-md text-[var(--cde-shell-text)] hover:bg-white/10"
        />

        <UButton
          to="https://shop.flyeralarm.com/"
          target="_blank"
          :label="$t('header.shop')"
          trailing-icon="i-lucide-arrow-up-right"
          variant="solid"
          class="rounded-md"
        />
      </template>
    </UHeader>

    <UMain class="pb-16">
      <NuxtPage />
    </UMain>

    <USeparator class="mx-auto max-w-6xl px-4 opacity-40" />

    <UFooter class="border-t border-white/10 bg-[var(--cde-blue)]/80 text-white">
      <template #left>
        <p class="text-sm text-slate-200">
          {{ $t('footer.copyright') }} • © {{ new Date().getFullYear() }}
        </p>
      </template>

      <template #right>
        <p class="text-sm text-slate-300">
          {{ $t('footer.themeNote') }}
        </p>
      </template>
    </UFooter>
  </UApp>
</template>
