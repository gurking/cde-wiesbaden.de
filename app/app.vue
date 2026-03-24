<script setup>
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'de'
  }
})

const title = 'CD Espanol Wiesbaden'
const description = 'Heritage-driven club website for CD Espanol Wiesbaden with a modern Nuxt UI foundation.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
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
              Los Cortinas
            </p>
            <p class="text-xs font-medium uppercase tracking-[0.24em] text-[var(--cde-muted-text)]">
              CD Espanol Wiesbaden
            </p>
          </div>
        </NuxtLink>
      </template>

      <template #right>
        <UColorModeButton
          color="neutral"
          variant="ghost"
          class="rounded-md text-[var(--cde-shell-text)] hover:bg-white/10"
        />

        <UButton
          to="https://shop.flyeralarm.com/"
          target="_blank"
          label="Flyeralarm Shop"
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
          CD Espanol Wiesbaden • © {{ new Date().getFullYear() }}
        </p>
      </template>

      <template #right>
        <p class="text-sm text-slate-300">
          Heritage Blue x Coral Theme mit Nuxt UI
        </p>
      </template>
    </UFooter>
  </UApp>
</template>
