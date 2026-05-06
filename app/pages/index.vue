<script setup lang="ts">
import heroBackgroundPhoto from '~/assets/img/duschvorhang_bg_fern.jpg'
import fanJerseyPhoto from '~/assets/img/kleidung/fantrikot.png'
import flyeralarmLogo from '~/assets/img/kleidung/flyeralarm-sports_logo.png'
import refereePhoto from '~/assets/img/schiedsrichter.png'
import socksPhoto from '~/assets/img/kleidung/stutzen.png'
import trainingTopPhoto from '~/assets/img/kleidung/trainingstop.png'
import warmupShirtPhoto from '~/assets/img/kleidung/warmmachshirt.png'

const { t } = useI18n()
const { localePath } = useAppLocale()

const refereeForm = reactive({
  name: '',
  phone: '',
  question: ''
})

const isRefereeFormValid = computed(() =>
  refereeForm.name.trim().length > 0 && refereeForm.phone.trim().length > 0
)

const refereeRequestMailto = computed(() => {
  if (!isRefereeFormValid.value) {
    return ''
  }

  const subject = t('home.referee.form.mail.subject')
  const body = [
    t('home.referee.form.mail.intro'),
    '',
    `${t('home.referee.form.fields.name')}: ${refereeForm.name.trim()}`,
    `${t('home.referee.form.fields.phone')}: ${refereeForm.phone.trim()}`,
    `${t('home.referee.form.fields.question')}: ${refereeForm.question.trim() || t('home.referee.form.mail.notProvided')}`
  ].join('\n')

  return `mailto:info@cde-wiesbaden.de?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
})

const handleRefereeRequestClick = (event: MouseEvent) => {
  if (!isRefereeFormValid.value) {
    event.preventDefault()
  }
}

const upcomingEvents = computed(() => [
  {
    key: 'seasonClosing',
    date: t('home.events.items.seasonClosing.date'),
    title: t('home.events.items.seasonClosing.title'),
    note: t('home.events.items.seasonClosing.note')
  },
  {
    key: 'alicanteTrip',
    date: t('home.events.items.alicanteTrip.date'),
    title: t('home.events.items.alicanteTrip.title'),
    note: t('home.events.items.alicanteTrip.note')
  },
  {
    key: 'transferDeadline',
    date: t('home.events.items.transferDeadline.date'),
    title: t('home.events.items.transferDeadline.title'),
    note: t('home.events.items.transferDeadline.note')
  },
  {
    key: 'trainingStart',
    date: t('home.events.items.trainingStart.date'),
    title: t('home.events.items.trainingStart.title'),
    note: t('home.events.items.trainingStart.note')
  },
  {
    key: 'christmasParty',
    date: t('home.events.items.christmasParty.date'),
    title: t('home.events.items.christmasParty.title'),
    note: t('home.events.items.christmasParty.note')
  },
  {
    key: 'generalAssembly',
    date: t('home.events.items.generalAssembly.date'),
    title: t('home.events.items.generalAssembly.title'),
    note: t('home.events.items.generalAssembly.note')
  }
])

const refereeSupport = computed(() => [
  {
    key: 'education',
    title: t('home.referee.support.education.title'),
    description: t('home.referee.support.education.description'),
    icon: 'i-lucide-graduation-cap'
  },
  {
    key: 'equipment',
    title: t('home.referee.support.equipment.title'),
    description: t('home.referee.support.equipment.description'),
    icon: 'i-lucide-shirt'
  },
  {
    key: 'support',
    title: t('home.referee.support.support.title'),
    description: t('home.referee.support.support.description'),
    icon: 'i-lucide-shield-check'
  }
])

const refereeBenefits = computed(() => [
  {
    key: 'admission',
    title: t('home.referee.benefits.admission.title'),
    description: t('home.referee.benefits.admission.description'),
    icon: 'i-lucide-ticket'
  },
  {
    key: 'health',
    title: t('home.referee.benefits.health.title'),
    description: t('home.referee.benefits.health.description'),
    icon: 'i-lucide-heart-pulse'
  },
  {
    key: 'community',
    title: t('home.referee.benefits.community.title'),
    description: t('home.referee.benefits.community.description'),
    icon: 'i-lucide-users'
  },
  {
    key: 'development',
    title: t('home.referee.benefits.development.title'),
    description: t('home.referee.benefits.development.description'),
    icon: 'i-lucide-brain-circuit'
  }
])

const heroLinks = computed(() => [
  {
    label: t('home.links.teams'),
    to: localePath('/teams'),
    size: 'xl' as const,
    class: 'bg-coral-500 text-white hover:bg-coral-600 focus-visible:outline-coral-500 dark:bg-coral-500 dark:text-white dark:hover:bg-coral-600'
  },
  {
    label: t('home.links.membership'),
    to: localePath('/mitgliedschaft'),
    size: 'xl' as const,
    color: 'primary' as const,
    variant: 'solid' as const,
    class: 'shadow-sm dark:bg-white/10 dark:text-white dark:ring-1 dark:ring-white/15 dark:hover:bg-white/16'
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
    to: localePath('/teams')
  },
  {
    key: 'membership',
    emoji: t('home.landing.membership.emoji'),
    title: t('home.landing.membership.title'),
    description: t('home.landing.membership.description'),
    cta: t('home.landing.membership.cta'),
    to: localePath('/mitgliedschaft')
  }
])
</script>

<template>
  <div class="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8">
    <div class="relative overflow-hidden rounded-[2rem] border border-[var(--cde-card-border)] bg-[var(--cde-card-bg)] shadow-[0_24px_80px_rgba(2,4,8,0.12)]">
      <img
        :src="heroBackgroundPhoto"
        alt=""
        class="cde-hero-background-wave absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      >
      <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.72),rgba(255,255,255,0.84))] dark:bg-[linear-gradient(180deg,rgba(7,24,46,0.74),rgba(7,24,46,0.86))]" />

      <UPageHero
        :title="t('home.hero.title')"
        :description="t('home.hero.description')"
        :links="heroLinks"
        class="relative"
        :ui="{
          root: 'bg-transparent px-6 py-10 sm:px-10 lg:px-12',
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
    </div>

    <section class="rounded-[2rem] border border-[var(--cde-card-border)] bg-[var(--cde-card-bg)] p-6 shadow-[0_18px_60px_rgba(2,4,8,0.08)] sm:p-8">
      <div class="mb-8 flex items-start gap-3">
        <span class="inline-flex h-10 w-1 rounded-full bg-coral-500" />
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.28em] text-coral-500">
            {{ t('home.events.label') }}
          </p>
          <h2 class="cde-heading text-3xl text-[var(--cde-shell-text)]">
            {{ t('home.events.title') }}
          </h2>
          <p class="mt-3 max-w-3xl text-sm leading-7 text-[var(--cde-muted-text)] sm:text-base">
            {{ t('home.events.description') }}
          </p>
        </div>
      </div>

      <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <article
          v-for="event in upcomingEvents"
          :key="event.key"
          class="rounded-[1.5rem] border border-[var(--cde-card-border)] bg-[color-mix(in_srgb,var(--cde-card-bg)_92%,var(--cde-blue)_8%)] p-5"
        >
          <p class="text-xs font-semibold uppercase tracking-[0.24em] text-coral-500">
            {{ event.date }}
          </p>
          <h3 class="mt-3 text-lg font-semibold text-[var(--cde-shell-text)]">
            {{ event.title }}
          </h3>
          <p class="mt-2 text-sm leading-6 text-[var(--cde-muted-text)]">
            {{ event.note }}
          </p>
        </article>
      </div>
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

    <section class="rounded-[2rem] border border-[var(--cde-card-border)] bg-[var(--cde-card-bg)] p-6 shadow-[0_18px_60px_rgba(2,4,8,0.08)] sm:p-8">
      <div class="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div class="space-y-6">
          <div class="flex items-start gap-3">
            <span class="inline-flex h-10 w-1 rounded-full bg-coral-500" />
            <div>
              <p class="text-xs font-semibold uppercase tracking-[0.28em] text-coral-500">
                {{ t('home.shop.label') }}
              </p>
              <h2 class="cde-heading text-3xl text-[var(--cde-shell-text)]">
                {{ t('home.shop.title') }}
              </h2>
              <p class="mt-3 text-sm leading-7 text-[var(--cde-muted-text)] sm:text-base">
                {{ t('home.shop.description') }}
              </p>
            </div>
          </div>

          <div class="grid gap-4">
            <div
              v-for="benefit in shopBenefits"
              :key="benefit.title"
              class="rounded-[1.5rem] border border-[var(--cde-card-border)] bg-[color-mix(in_srgb,var(--cde-card-bg)_92%,var(--cde-blue)_8%)] p-5"
            >
              <div class="flex items-start gap-4">
                <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-coral-500/20 text-coral-500">
                  <UIcon
                    :name="benefit.icon"
                    class="h-5 w-5"
                  />
                </div>
                <div>
                  <p class="font-semibold text-[var(--cde-shell-text)]">
                    {{ benefit.title }}
                  </p>
                  <p class="mt-2 text-sm leading-6 text-[var(--cde-muted-text)]">
                    {{ benefit.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-wrap items-end gap-x-8 gap-y-4">
            <UButton
              to="https://www.flyeralarm-sports.com/teamshops/cde"
              target="_blank"
              external
              color="primary"
              trailing-icon="i-lucide-arrow-right"
              class="rounded-md bg-coral-500 text-white hover:bg-coral-600"
            >
              {{ t('home.shop.cta') }}
            </UButton>

            <div class="flex flex-col gap-1">
              <p class="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--cde-muted-text)]">
                powered by
              </p>
              <img
                :src="flyeralarmLogo"
                :alt="t('home.shop.title')"
                class="h-10 w-auto object-contain"
              >
            </div>
          </div>
        </div>

        <div class="grid gap-4 sm:grid-cols-2">
          <article
            v-for="product in products"
            :key="product.key"
            class="overflow-hidden rounded-[1.5rem] border border-[var(--cde-card-border)] bg-[color-mix(in_srgb,var(--cde-card-bg)_94%,white_6%)]"
          >
            <div class="relative aspect-[4/3] overflow-hidden bg-[color-mix(in_srgb,var(--cde-blue)_88%,white_12%)]">
              <div class="heritage-pattern absolute inset-0 opacity-70" />
              <img
                :src="product.image"
                :alt="product.title"
                class="relative h-full w-full object-cover"
              >
            </div>

            <div class="space-y-2 p-4">
              <p class="text-xs font-semibold uppercase tracking-[0.24em] text-coral-500">
                {{ t('home.shop.productLabel') }}
              </p>
              <h3 class="text-base font-semibold text-[var(--cde-shell-text)]">
                {{ product.title }}
              </h3>
              <p class="text-sm leading-6 text-[var(--cde-muted-text)]">
                {{ product.description }}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="grid gap-6 lg:grid-cols-2">
      <article class="rounded-[2rem] border border-[var(--cde-card-border)] bg-[var(--cde-card-bg)] p-6 shadow-[0_18px_60px_rgba(2,4,8,0.08)] sm:p-8">
        <div class="mb-6 flex items-center gap-3">
          <span class="inline-flex h-10 w-1 rounded-full bg-coral-500" />
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--cde-muted-text)]">
              {{ t('teamsPage.trainingLabel') }}
            </p>
            <h2 class="cde-heading text-3xl text-[var(--cde-shell-text)]">
              {{ t('teamsPage.training.title') }}
            </h2>
          </div>
        </div>

        <div class="rounded-[1.5rem] border border-[var(--cde-card-border)] bg-[color-mix(in_srgb,var(--cde-card-bg)_92%,var(--cde-blue)_8%)] p-6">
          <div class="flex items-start gap-4">
            <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-coral-500/20 text-coral-500">
              <span class="text-xl">🕖</span>
            </div>
            <div>
              <p class="font-semibold text-[var(--cde-shell-text)]">
                {{ t('teamsPage.training.schedule') }}
              </p>
              <p class="mt-2 text-sm leading-6 text-[var(--cde-muted-text)]">
                {{ t('teamsPage.training.description') }}
              </p>
            </div>
          </div>
        </div>
      </article>

      <article class="rounded-[2rem] border border-[var(--cde-card-border)] bg-[var(--cde-card-bg)] p-6 shadow-[0_18px_60px_rgba(2,4,8,0.08)] sm:p-8">
        <div class="mb-6 flex items-center gap-3">
          <span class="inline-flex h-10 w-1 rounded-full bg-coral-500" />
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--cde-muted-text)]">
              {{ t('teamsPage.locationLabel') }}
            </p>
            <h2 class="cde-heading text-3xl text-[var(--cde-shell-text)]">
              {{ t('teamsPage.location.title') }}
            </h2>
          </div>
        </div>

        <div class="rounded-[1.5rem] border border-[var(--cde-card-border)] bg-[color-mix(in_srgb,var(--cde-card-bg)_92%,var(--cde-blue)_8%)] p-6 mb-6">
          <div class="flex items-start gap-4">
            <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-coral-500/20 text-coral-500">
              <span class="text-xl">📍</span>
            </div>
            <div>
              <p class="font-semibold text-[var(--cde-shell-text)]">
                {{ t('teamsPage.location.address') }}
              </p>
            </div>
          </div>
        </div>

        <UButton
          to="https://maps.app.goo.gl/rEEPc4LtnF2FkmAh7"
          target="_blank"
          external
          icon="i-lucide-map"
          trailing-icon="i-lucide-arrow-right"
          color="primary"
          class="w-full justify-between rounded-md"
        >
          {{ t('teamsPage.location.cta') }}
        </UButton>
      </article>
    </section>

    <section class="overflow-hidden rounded-[2rem] border border-[var(--cde-card-border)] bg-[var(--cde-card-bg)] shadow-[0_18px_60px_rgba(2,4,8,0.08)]">
      <div class="grid gap-0 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,0.95fr)]">
        <div class="p-6 sm:p-8 lg:p-10">
          <p class="text-xs font-semibold uppercase tracking-[0.28em] text-coral-500">
            {{ t('home.referee.label') }}
          </p>
          <h2 class="mt-4 cde-heading text-3xl text-[var(--cde-shell-text)] sm:text-4xl">
            {{ t('home.referee.title') }}
          </h2>
          <p class="mt-4 max-w-3xl text-sm leading-7 text-[var(--cde-muted-text)] sm:text-base">
            {{ t('home.referee.description') }}
          </p>

          <div class="mt-6 grid gap-4">
            <div class="rounded-[1.5rem] border border-[var(--cde-card-border)] bg-[color-mix(in_srgb,var(--cde-card-bg)_92%,var(--cde-blue)_8%)] p-5">
              <p class="text-sm font-semibold text-[var(--cde-shell-text)]">
                {{ t('home.referee.fairplay.title') }}
              </p>
              <p class="mt-2 text-sm leading-6 text-[var(--cde-muted-text)]">
                {{ t('home.referee.fairplay.description') }}
              </p>
            </div>

            <div class="rounded-[1.5rem] border border-[var(--cde-card-border)] bg-[color-mix(in_srgb,var(--cde-card-bg)_92%,var(--cde-blue)_8%)] p-5">
              <p class="text-sm font-semibold text-[var(--cde-shell-text)]">
                {{ t('home.referee.coordinator.title') }}
              </p>
              <p class="mt-2 text-sm leading-6 text-[var(--cde-muted-text)]">
                {{ t('home.referee.coordinator.description') }}
              </p>
            </div>
          </div>

          <div class="mt-8 grid gap-4 md:grid-cols-3">
            <article
              v-for="item in refereeSupport"
              :key="item.key"
              class="rounded-[1.5rem] border border-[var(--cde-card-border)] bg-[color-mix(in_srgb,var(--cde-card-bg)_92%,var(--cde-blue)_8%)] p-5"
            >
              <div class="flex h-11 w-11 items-center justify-center rounded-full bg-coral-500/20 text-coral-500">
                <UIcon
                  :name="item.icon"
                  class="h-5 w-5"
                />
              </div>
              <p class="mt-4 font-semibold text-[var(--cde-shell-text)]">
                {{ item.title }}
              </p>
              <p class="mt-2 text-sm leading-6 text-[var(--cde-muted-text)]">
                {{ item.description }}
              </p>
            </article>
          </div>

          <div class="mt-8 rounded-[1.5rem] border border-[var(--cde-card-border)] bg-[color-mix(in_srgb,var(--cde-card-bg)_96%,white_4%)] p-5">
            <p class="text-xs font-semibold uppercase tracking-[0.28em] text-coral-500">
              {{ t('home.referee.form.label') }}
            </p>
            <h3 class="mt-3 text-xl font-semibold text-[var(--cde-shell-text)]">
              {{ t('home.referee.form.title') }}
            </h3>
            <p class="mt-2 text-sm leading-6 text-[var(--cde-muted-text)]">
              {{ t('home.referee.form.description') }}
            </p>

            <div class="mt-5 grid gap-4">
              <label class="block">
                <span class="mb-2 block text-sm font-medium text-[var(--cde-shell-text)]">
                  {{ t('home.referee.form.fields.name') }}
                </span>
                <input
                  v-model="refereeForm.name"
                  type="text"
                  :placeholder="t('home.referee.form.placeholders.name')"
                  class="w-full rounded-md border border-[var(--cde-card-border)] bg-[color-mix(in_srgb,var(--cde-card-bg)_94%,white_6%)] px-4 py-3 text-sm text-[var(--cde-shell-text)] outline-none transition focus:border-coral-500 focus:ring-2 focus:ring-coral-500/20"
                >
              </label>

              <label class="block">
                <span class="mb-2 block text-sm font-medium text-[var(--cde-shell-text)]">
                  {{ t('home.referee.form.fields.phone') }}
                </span>
                <input
                  v-model="refereeForm.phone"
                  type="tel"
                  :placeholder="t('home.referee.form.placeholders.phone')"
                  class="w-full rounded-md border border-[var(--cde-card-border)] bg-[color-mix(in_srgb,var(--cde-card-bg)_94%,white_6%)] px-4 py-3 text-sm text-[var(--cde-shell-text)] outline-none transition focus:border-coral-500 focus:ring-2 focus:ring-coral-500/20"
                >
              </label>

              <label class="block">
                <span class="mb-2 block text-sm font-medium text-[var(--cde-shell-text)]">
                  {{ t('home.referee.form.fields.question') }}
                </span>
                <input
                  v-model="refereeForm.question"
                  type="text"
                  :placeholder="t('home.referee.form.placeholders.question')"
                  class="w-full rounded-md border border-[var(--cde-card-border)] bg-[color-mix(in_srgb,var(--cde-card-bg)_94%,white_6%)] px-4 py-3 text-sm text-[var(--cde-shell-text)] outline-none transition focus:border-coral-500 focus:ring-2 focus:ring-coral-500/20"
                >
              </label>
            </div>

            <div class="mt-5 flex flex-wrap gap-3">
              <a
                :href="refereeRequestMailto || undefined"
                :aria-disabled="!isRefereeFormValid"
                class="inline-flex items-center justify-between rounded-md px-4 py-3 text-sm font-semibold text-white transition"
                :class="isRefereeFormValid ? 'bg-coral-500 hover:bg-coral-600' : 'cursor-not-allowed bg-slate-300'"
                @click="handleRefereeRequestClick"
              >
                <span>{{ t('home.referee.form.cta') }}</span>
              </a>

              <UButton
                to="https://www.dfb.de/content/wie-werde-ich-schiri"
                target="_blank"
                external
                icon="i-lucide-badge-plus"
                trailing-icon="i-lucide-arrow-right"
                color="primary"
                variant="soft"
                class="rounded-md"
              >
                {{ t('home.referee.cta') }}
              </UButton>
            </div>

            <p class="mt-3 text-xs leading-5 text-[var(--cde-muted-text)]">
              {{ t('home.referee.form.helper') }}
            </p>
          </div>
        </div>

        <div class="bg-[linear-gradient(180deg,var(--cde-blue),color-mix(in_srgb,var(--cde-blue)_82%,black_18%))] p-6 text-white sm:p-8 lg:p-10">
          <div class="rounded-[1.5rem] border border-white/14 bg-[rgba(255,255,255,0.06)] p-6 backdrop-blur-sm">
            <div class="mb-6 overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/4">
              <img
                :src="refereePhoto"
                :alt="t('home.referee.title')"
                class="aspect-[16/9] w-full object-cover"
              >
            </div>

            <p class="text-xs font-semibold uppercase tracking-[0.28em] text-coral-200">
              {{ t('home.referee.panelLabel') }}
            </p>
            <h3 class="mt-4 text-2xl font-semibold text-white">
              {{ t('home.referee.panelTitle') }}
            </h3>
            <p class="mt-4 text-sm leading-7 text-slate-100">
              {{ t('home.referee.panelDescription') }}
            </p>

            <div class="mt-6 grid gap-4">
              <article
                v-for="item in refereeBenefits"
                :key="item.key"
                class="rounded-[1.25rem] border border-white/10 bg-white/6 p-4"
              >
                <div class="flex items-start gap-3">
                  <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-coral-500/20 text-coral-200">
                    <UIcon
                      :name="item.icon"
                      class="h-5 w-5"
                    />
                  </div>
                  <div>
                    <p class="font-semibold text-white">
                      {{ item.title }}
                    </p>
                    <p class="mt-2 text-sm leading-6 text-slate-100">
                      {{ item.description }}
                    </p>
                  </div>
                </div>
              </article>
            </div>

            <p class="mt-6 text-sm leading-7 text-slate-100">
              {{ t('home.referee.panelFootnote') }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.cde-hero-background-wave {
  transform-origin: center center;
  animation: cde-hero-background-wave 14s ease-in-out infinite;
  will-change: transform;
}

@keyframes cde-hero-background-wave {
  0% {
    transform: scale(1.05) translate3d(0, 0, 0) rotate(0deg);
  }

  25% {
    transform: scale(1.075) translate3d(-0.6%, 0.5%, 0) rotate(-0.45deg);
  }

  50% {
    transform: scale(1.065) translate3d(0.7%, -0.35%, 0) rotate(0.3deg);
  }

  75% {
    transform: scale(1.08) translate3d(-0.45%, 0.4%, 0) rotate(-0.25deg);
  }

  100% {
    transform: scale(1.05) translate3d(0, 0, 0) rotate(0deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .cde-hero-background-wave {
    animation: none;
  }
}
</style>
