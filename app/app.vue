<script setup lang="ts">
const { locale, t } = useI18n()

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
    <AppHeader />

    <UMain class="pb-16">
      <NuxtPage />
    </UMain>

    <USeparator class="mx-auto max-w-6xl px-4 opacity-40" />
    <AppFooter />
  </UApp>
</template>
