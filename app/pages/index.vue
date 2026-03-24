<script setup lang="ts">
import fanJerseyPhoto from '~/assets/img/kleidung/fantrikot.png'
import flyeralarmLogo from '~/assets/img/kleidung/flyeralarm-sports_logo.png'
import socksPhoto from '~/assets/img/kleidung/stutzen.png'
import trainingTopPhoto from '~/assets/img/kleidung/trainingstop.png'
import warmupShirtPhoto from '~/assets/img/kleidung/warmmachshirt.png'

const { t } = useI18n()

const heroLinks = computed(() => [
  {
    label: t('home.links.teams'),
    to: '/teams',
    size: 'xl' as const
  },
  {
    label: t('home.links.membership'),
    to: '/mitgliedschaft',
    size: 'xl' as const,
    color: 'neutral' as const,
    variant: 'subtle' as const
  }
])

const shopBenefits = computed(() => [
  {
    icon: 'i-lucide-store',
    title: t('home.shop.benefits.selfService.title'),
    description: t('home.shop.benefits.selfService.description')
  },
  {
    icon: 'i-lucide-shirt',
    title: t('home.shop.benefits.collection.title'),
    description: t('home.shop.benefits.collection.description')
  },
  {
    icon: 'i-lucide-badge-check',
    title: t('home.shop.benefits.branding.title'),
    description: t('home.shop.benefits.branding.description')
  }
])

const products = computed(() => [
  {
    key: 'fanJersey',
    image: fanJerseyPhoto,
    title: t('home.shop.products.fanJersey.title'),
    description: t('home.shop.products.fanJersey.description')
  },
  {
    key: 'warmupShirt',
    image: warmupShirtPhoto,
    title: t('home.shop.products.warmupShirt.title'),
    description: t('home.shop.products.warmupShirt.description')
  },
  {
    key: 'trainingTop',
    image: trainingTopPhoto,
    title: t('home.shop.products.trainingTop.title'),
    description: t('home.shop.products.trainingTop.description')
  },
  {
    key: 'socks',
    image: socksPhoto,
    title: t('home.shop.products.socks.title'),
    description: t('home.shop.products.socks.description')
  }
])

const landingSections = computed(() => [
  {
    key: 'teams',
    emoji: t('home.landing.teams.emoji'),
    title: t('home.landing.teams.title'),
    description: t('home.landing.teams.description'),
    cta: t('home.landing.teams.cta'),
    to: '/teams'
  },
  {
    key: 'membership',
    emoji: t('home.landing.membership.emoji'),
    title: t('home.landing.membership.title'),
    description: t('home.landing.membership.description'),
    cta: t('home.landing.membership.cta'),
    to: '/mitgliedschaft'
  }
])
</script>

<template>
  <div class="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8">
    <UPageHero
      :title="t('home.hero.title')"
      :description="t('home.hero.description')"
      :links="heroLinks"
      :ui="{
        root: 'overflow-hidden rounded-[2rem] border border-[var(--cde-card-border)] bg-[var(--cde-card-bg)] px-6 py-10 shadow-[0_24px_80px_rgba(2,4,8,0.12)] sm:px-10 lg:px-12',
        container: 'relative',
        title: 'cde-heading max-w-4xl text-4xl text-[var(--cde-shell-text)] sm:text-5xl lg:text-6xl',
        description: 'mt-6 max-w-3xl text-base leading-7 text-[var(--cde-muted-text)] sm:text-lg',
        links: 'mt-8 flex flex-wrap gap-3'
      }"
    >
      <template #top>
        <div class="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-coral-500">
          <span class="h-px w-12 bg-coral-500" />
          {{ t('home.eyebrow') }}
        </div>
      </template>

      <template #right>
        <div class="relative hidden min-h-80 overflow-hidden rounded-[1.75rem] border border-[var(--cde-card-border)] bg-[var(--cde-blue)] p-8 text-white lg:block">
          <div class="heritage-pattern absolute inset-0 opacity-90" />
          <div class="absolute inset-0 bg-[linear-gradient(160deg,rgba(7,24,46,0.28),rgba(7,24,46,0.88))]" />
          <div class="relative flex h-full flex-col justify-between">
            <img
              :src="flyeralarmLogo"
              :alt="t('home.hero.badge')"
              class="h-12 w-auto object-contain"
            >

            <div class="space-y-4">
              <UBadge
                :label="t('home.hero.badge')"
                color="primary"
                variant="solid"
                class="w-fit rounded-sm bg-coral-500 text-white"
              />
              <p class="cde-heading text-3xl text-white">
                {{ t('home.hero.panelTitle') }}
              </p>
              <p class="max-w-sm text-sm leading-6 text-slate-200">
                {{ t('home.hero.panelDescription') }}
              </p>
            </div>
          </div>
        </div>
      </template>
    </UPageHero>

    <UPageSection
      id="shop-info"
      :title="t('home.shop.title')"
      :description="t('home.shop.description')"
      :features="shopBenefits"
      class="cde-section pl-6"
      :ui="{
        title: 'cde-heading text-3xl text-[var(--cde-shell-text)]',
        description: 'max-w-3xl text-[var(--cde-muted-text)]',
        features: 'mt-8 grid gap-4 md:grid-cols-3'
      }"
    />

    <section class="grid gap-5 lg:grid-cols-4">
      <article
        v-for="product in products"
        :key="product.key"
        class="overflow-hidden rounded-[1.75rem] border border-[var(--cde-card-border)] bg-[var(--cde-card-bg)] shadow-[0_18px_60px_rgba(2,4,8,0.08)]"
      >
        <div class="relative aspect-[4/5] overflow-hidden bg-[color-mix(in_srgb,var(--cde-blue)_88%,white_12%)]">
          <div class="heritage-pattern absolute inset-0 opacity-70" />
          <img
            :src="product.image"
            :alt="product.title"
            class="relative h-full w-full object-cover"
          >
        </div>

        <div class="space-y-3 p-5">
          <p class="text-xs font-semibold uppercase tracking-[0.24em] text-coral-500">
            {{ t('home.shop.productLabel') }}
          </p>
          <h2 class="cde-heading text-2xl text-[var(--cde-shell-text)]">
            {{ product.title }}
          </h2>
          <p class="text-sm leading-6 text-[var(--cde-muted-text)]">
            {{ product.description }}
          </p>
        </div>
      </article>
    </section>

    <section class="grid gap-6 lg:grid-cols-2">
      <article
        v-for="section in landingSections"
        :key="section.key"
        class="rounded-[2rem] border border-[var(--cde-card-border)] bg-[var(--cde-card-bg)] p-6 shadow-[0_18px_60px_rgba(2,4,8,0.08)] sm:p-8"
      >
        <p class="text-xs font-semibold uppercase tracking-[0.24em] text-coral-500">
          {{ section.emoji }}
          {{ t('home.landing.label') }}
        </p>
        <h2 class="mt-4 cde-heading text-3xl text-[var(--cde-shell-text)]">
          {{ section.title }}
        </h2>
        <p class="mt-4 text-sm leading-7 text-[var(--cde-muted-text)] sm:text-base">
          {{ section.description }}
        </p>
        <UButton
          :to="section.to"
          :label="section.cta"
          trailing-icon="i-lucide-arrow-right"
          color="primary"
          variant="soft"
          class="mt-6 rounded-md"
        />
      </article>
    </section>

    <UPageCTA
      :title="t('home.cta.title')"
      :description="t('home.cta.description')"
      variant="subtle"
      :links="[{
        label: t('home.links.shop'),
        to: 'https://www.flyeralarm-sports.com/teamshops/cde',
        external: true,
        target: '_blank',
        color: 'primary'
      }]"
      :ui="{
        root: 'rounded-[2rem] border border-[var(--cde-card-border)] bg-[var(--cde-card-bg)] shadow-[0_18px_60px_rgba(2,4,8,0.08)]',
        title: 'cde-heading text-3xl text-[var(--cde-shell-text)]',
        description: 'text-[var(--cde-muted-text)]'
      }"
    />
  </div>
</template>
