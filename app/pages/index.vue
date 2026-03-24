<script setup lang="ts">
const { t } = useI18n()

const links = computed(() => [
  {
    label: t('home.links.membership'),
    to: '#mitgliedschaft',
    size: 'xl' as const
  },
  {
    label: t('home.links.teams'),
    to: '#teams',
    size: 'xl' as const,
    color: 'neutral' as const,
    variant: 'subtle' as const
  }
])

const sections = computed(() => [
  {
    icon: 'i-lucide-shield',
    title: t('home.guidelines.items.heritage.title'),
    description: t('home.guidelines.items.heritage.description')
  },
  {
    icon: 'i-lucide-palette',
    title: t('home.guidelines.items.coral.title'),
    description: t('home.guidelines.items.coral.description')
  },
  {
    icon: 'i-lucide-columns-3',
    title: t('home.guidelines.items.stripes.title'),
    description: t('home.guidelines.items.stripes.description')
  }
])

const teamCards = computed(() => [
  {
    title: t('home.cards.firstTeam.title'),
    description: t('home.cards.firstTeam.description')
  },
  {
    title: t('home.cards.youth.title'),
    description: t('home.cards.youth.description')
  },
  {
    title: t('home.cards.club.title'),
    description: t('home.cards.club.description')
  }
])
</script>

<template>
  <div class="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8">
    <UPageHero
      :title="t('home.hero.title')"
      :description="t('home.hero.description')"
      :links="links"
      :ui="{
        root: 'overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/85 px-6 py-10 shadow-sm sm:px-10 lg:px-12',
        container: 'relative',
        title: 'cde-heading max-w-4xl text-4xl text-[var(--cde-blue)] sm:text-5xl lg:text-6xl',
        description: 'mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg',
        links: 'mt-8 flex flex-wrap gap-3'
      }"
    >
      <template #top>
        <div class="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--cde-coral)]">
          <span class="h-px w-12 bg-[var(--cde-coral)]" />
          {{ t('home.eyebrow') }}
        </div>
      </template>

      <template #right>
        <div class="relative hidden min-h-80 overflow-hidden rounded-[1.75rem] border border-white/70 bg-[var(--cde-blue)] p-8 text-white lg:block">
          <div class="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent_0,transparent_40px,rgba(255,255,255,0.08)_40px,rgba(255,255,255,0.08)_56px)]" />
          <div class="relative flex h-full flex-col justify-between">
            <UBadge
              :label="t('home.hero.badge')"
              color="primary"
              variant="solid"
              class="w-fit rounded-sm"
            />
            <div class="space-y-4">
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
      id="leitlinien"
      :title="t('home.guidelines.title')"
      :description="t('home.guidelines.description')"
      :features="sections"
      class="cde-section pl-6"
      :ui="{
        title: 'cde-heading text-3xl text-[var(--cde-blue)]',
        description: 'max-w-3xl text-slate-600',
        features: 'mt-8 grid gap-4 md:grid-cols-3'
      }"
    />

    <section
      id="teams"
      class="grid gap-4 md:grid-cols-3"
    >
      <UCard
        v-for="card in teamCards"
        :key="card.title"
        :ui="{
          header: 'flex items-center justify-between gap-3',
          body: 'space-y-4'
        }"
      >
        <template #header>
          <div>
            <UBadge
              label="CDE"
              color="primary"
              variant="subtle"
              class="mb-3 rounded-sm"
            />
            <h2 class="cde-heading text-2xl text-[var(--cde-blue)]">
              {{ card.title }}
            </h2>
          </div>
        </template>

        <p class="text-sm leading-6 text-slate-600">
          {{ card.description }}
        </p>

        <UButton
          :label="t('home.links.learnMore')"
          color="primary"
          variant="soft"
          trailing-icon="i-lucide-arrow-right"
          class="rounded-md"
        />
      </UCard>
    </section>

    <UPageCTA
      id="mitgliedschaft"
      :title="t('home.cta.title')"
      :description="t('home.cta.description')"
      variant="subtle"
      :links="[{
        label: t('home.links.membershipPlan'),
        to: '#',
        color: 'primary'
      }]"
      :ui="{
        root: 'rounded-[2rem] border border-slate-200/80 bg-white/88 shadow-sm',
        title: 'cde-heading text-3xl text-[var(--cde-blue)]',
        description: 'text-slate-600'
      }"
    />
  </div>
</template>
