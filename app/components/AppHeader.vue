<script setup lang="ts">
import logoUrl from '~/assets/img/logo.svg'

const { locale, locales, setLocale, t } = useI18n()
type LocaleCode = typeof locale.value
const isCompact = ref(false)
const isMobileMenuOpen = ref(false)
let frameId = 0
const compactEnterY = 156
const compactExitY = 28

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

const navLinks = computed(() => [
  {
    label: t('header.navigation.teams'),
    to: '/teams'
  },
  {
    label: t('header.navigation.board'),
    to: '/vorstand'
  },
  {
    label: t('header.navigation.membership'),
    to: '/mitgliedschaft'
  }
])

const switchLocale = async (code: LocaleCode) => {
  await setLocale(code)
  isMobileMenuOpen.value = false
}

const updateHeaderState = () => {
  const scrollY = window.scrollY
  const next = isCompact.value ? scrollY > compactExitY : scrollY > compactEnterY

  if (next !== isCompact.value) {
    isCompact.value = next
  }
}

const onScroll = () => {
  if (frameId) {
    return
  }

  frameId = window.requestAnimationFrame(() => {
    updateHeaderState()
    frameId = 0
  })
}

onMounted(() => {
  updateHeaderState()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onBeforeUnmount(() => {
  if (frameId) {
    window.cancelAnimationFrame(frameId)
  }

  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <header class="sticky top-0 z-50 cde-glass border-b border-[var(--cde-header-border)]">
    <div
      class="mx-auto max-w-7xl px-4 transition-[padding] duration-300 ease-out sm:px-6 lg:px-8"
      :class="isCompact ? 'py-3' : 'pt-5 pb-10 sm:pt-6 sm:pb-12 lg:pt-7 lg:pb-14'"
    >
      <div
        class="grid grid-cols-[1fr_auto] items-center gap-4 transition-[min-height] duration-300 ease-out"
        :class="isCompact ? 'min-h-16' : 'min-h-24 sm:min-h-28 lg:min-h-32'"
      >
        <div class="min-w-0">
          <NuxtLink
            to="/"
            class="inline-flex max-w-full items-center gap-3 sm:gap-4"
          >
            <img
              :src="logoUrl"
              :alt="t('header.clubName')"
              class="w-auto shrink-0 transition-[height] duration-300 ease-out"
              :class="isCompact ? 'h-12 sm:h-14' : 'h-16 sm:h-20 lg:h-24'"
            >

            <div class="min-w-0">
              <p
                class="truncate text-balance font-semibold text-[var(--cde-shell-text)]"
                :class="isCompact ? 'text-base sm:text-lg' : 'text-lg sm:text-2xl lg:text-3xl'"
              >
                {{ t('header.clubName') }}
              </p>
            </div>
          </NuxtLink>
        </div>

        <div class="hidden items-center justify-end gap-2 sm:flex sm:gap-3">
          <nav class="mr-1 flex items-center gap-1 lg:gap-2">
            <UButton
              v-for="link in navLinks"
              :key="link.to"
              :to="link.to"
              color="neutral"
              variant="ghost"
              class="rounded-md font-medium text-[var(--cde-shell-text)] hover:bg-white/10"
              :size="isCompact ? 'sm' : 'md'"
            >
              {{ link.label }}
            </UButton>
          </nav>

          <div
            class="flex items-center gap-0.5 rounded-xl border border-[var(--cde-card-border)] bg-white/70 shadow-sm shadow-slate-950/5 dark:border-white/10 dark:bg-white/5 dark:shadow-none"
            :class="isCompact ? 'p-0.5' : 'p-1'"
          >
            <UButton
              v-for="entry in localeButtons"
              :key="entry.code"
              :label="entry.flag"
              :title="entry.title"
              color="neutral"
              :variant="locale === entry.code ? 'soft' : 'ghost'"
              class="min-w-9 rounded-md px-1.5"
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
            to="https://www.flyeralarm-sports.com/teamshops/cde"
            target="_blank"
            :label="t('header.shop')"
            trailing-icon="i-lucide-arrow-up-right"
            color="primary"
            variant="solid"
            class="rounded-md border border-coral-400 bg-coral-500 text-white shadow-sm shadow-coral-950/20 hover:bg-coral-400"
            :size="isCompact ? 'sm' : 'md'"
          />
        </div>

        <div class="flex items-center justify-end gap-1.5 sm:hidden">
          <div class="flex items-center gap-0.5 rounded-lg border border-[var(--cde-card-border)] bg-white/70 p-0.5 shadow-sm shadow-slate-950/5 dark:border-white/10 dark:bg-white/5 dark:shadow-none">
            <UButton
              v-for="entry in localeButtons"
              :key="`mobile-${entry.code}`"
              :label="entry.flag"
              :title="entry.title"
              color="neutral"
              :variant="locale === entry.code ? 'soft' : 'ghost'"
              class="min-w-8 rounded-md px-1"
              size="xs"
              @click="switchLocale(entry.code)"
            />
          </div>

          <UColorModeButton
            color="neutral"
            variant="ghost"
            class="rounded-md text-[var(--cde-shell-text)] hover:bg-white/10"
            size="sm"
          />

          <UDrawer
            v-model:open="isMobileMenuOpen"
            direction="right"
          >
            <UButton
              color="neutral"
              variant="ghost"
              icon="i-lucide-menu"
              class="rounded-md"
              size="sm"
            />

            <template #content>
              <div class="flex h-full flex-col gap-4 bg-[var(--cde-surface)] p-5 text-[var(--cde-shell-text)]">
                <div class="flex items-center gap-3 border-b border-[var(--cde-header-border)] pb-4">
                  <img
                    :src="logoUrl"
                    :alt="t('header.clubName')"
                    class="h-12 w-auto"
                  >
                  <p class="font-semibold leading-tight">
                    {{ t('header.clubName') }}
                  </p>
                </div>

                <nav class="flex flex-col gap-2">
                  <UButton
                    v-for="link in navLinks"
                    :key="`mobile-${link.to}`"
                    :to="link.to"
                    color="neutral"
                    variant="ghost"
                    class="justify-start rounded-md"
                    @click="isMobileMenuOpen = false"
                  >
                    {{ link.label }}
                  </UButton>
                </nav>

                <UButton
                  to="https://www.flyeralarm-sports.com/teamshops/cde"
                  target="_blank"
                  :label="t('header.shop')"
                  trailing-icon="i-lucide-arrow-up-right"
                  color="primary"
                  variant="solid"
                  class="justify-between rounded-md border border-coral-400 bg-coral-500 text-white shadow-sm shadow-coral-950/20 hover:bg-coral-400"
                  @click="isMobileMenuOpen = false"
                />
              </div>
            </template>
          </UDrawer>
        </div>
      </div>
    </div>
  </header>
</template>
