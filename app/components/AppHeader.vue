<script setup lang="ts">
import logoUrl from '~/assets/img/logo.svg'

const { locale, locales, setLocale, t } = useI18n()
type LocaleCode = typeof locale.value
const isCompact = ref(false)

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

const updateHeaderState = () => {
  isCompact.value = window.scrollY > 36
}

onMounted(() => {
  updateHeaderState()
  window.addEventListener('scroll', updateHeaderState, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateHeaderState)
})
</script>

<template>
  <UHeader
    class="cde-glass border-b border-[var(--cde-header-border)] transition-all duration-300"
    :class="isCompact ? 'py-2' : 'py-6 sm:py-7 lg:py-8'"
  >
    <template #left>
      <NuxtLink
        to="/"
        class="flex items-center transition-all duration-300"
        :class="isCompact ? 'gap-3' : 'gap-4 sm:gap-5'"
      >
        <img
          :src="logoUrl"
          :alt="t('header.clubName')"
          class="w-auto shrink-0 transition-all duration-300"
          :class="isCompact ? 'h-10 sm:h-11' : 'h-14 sm:h-16 lg:h-18'"
        >
        <div class="hidden sm:block">
          <p
            class="cde-heading text-[var(--cde-shell-text)] transition-all duration-300"
            :class="isCompact ? 'text-sm' : 'text-base lg:text-lg'"
          >
            {{ t('header.clubNickname') }}
          </p>
          <p
            class="font-medium uppercase text-[var(--cde-muted-text)] transition-all duration-300"
            :class="isCompact ? 'text-xs tracking-[0.24em]' : 'text-sm tracking-[0.3em]'"
          >
            {{ t('header.clubName') }}
          </p>
        </div>
      </NuxtLink>
    </template>

    <template #right>
      <div
        class="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 transition-all duration-300"
        :class="isCompact ? 'p-1' : 'p-1.5'"
      >
        <UButton
          v-for="entry in localeButtons"
          :key="entry.code"
          :label="`${entry.flag} ${entry.shortLabel}`"
          :title="entry.title"
          color="neutral"
          :variant="locale === entry.code ? 'soft' : 'ghost'"
          class="rounded-md"
          :size="isCompact ? 'sm' : 'md'"
          @click="switchLocale(entry.code)"
        />
      </div>

      <UColorModeButton
        color="neutral"
        variant="ghost"
        class="rounded-md text-[var(--cde-shell-text)] hover:bg-white/10"
        :size="isCompact ? 'sm' : 'md'"
      />

      <UButton
        to="https://shop.flyeralarm.com/"
        target="_blank"
        :label="t('header.shop')"
        trailing-icon="i-lucide-arrow-up-right"
        variant="solid"
        class="rounded-md"
        :size="isCompact ? 'sm' : 'md'"
      />
    </template>
  </UHeader>
</template>
