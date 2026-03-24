<script setup lang="ts">
import membershipApplicationPdf from '~/assets/files/Mitgliedsantrag_DE_ESP_ENG.pdf'
import statutePdf from '~/assets/files/satzung_stand_2024.pdf'

const { t } = useI18n()

const plans = computed(() => [
  {
    key: 'reduced',
    emoji: t('membershipPage.pricing.reduced.emoji'),
    title: t('membershipPage.pricing.reduced.title'),
    price: t('membershipPage.pricing.reduced.price'),
    note: t('membershipPage.pricing.reduced.note')
  },
  {
    key: 'standard',
    emoji: t('membershipPage.pricing.standard.emoji'),
    title: t('membershipPage.pricing.standard.title'),
    price: t('membershipPage.pricing.standard.price'),
    note: t('membershipPage.pricing.standard.note')
  },
  {
    key: 'family',
    emoji: t('membershipPage.pricing.family.emoji'),
    title: t('membershipPage.pricing.family.title'),
    price: t('membershipPage.pricing.family.price'),
    note: t('membershipPage.pricing.family.note')
  }
])

const benefits = computed(() => [
  {
    key: 'licensedTraining',
    emoji: t('membershipPage.hero.benefits.licensedTraining.emoji'),
    title: t('membershipPage.hero.benefits.licensedTraining.title'),
    description: t('membershipPage.hero.benefits.licensedTraining.description')
  },
  {
    key: 'health',
    emoji: t('membershipPage.hero.benefits.health.emoji'),
    title: t('membershipPage.hero.benefits.health.title'),
    description: t('membershipPage.hero.benefits.health.description')
  },
  {
    key: 'integration',
    emoji: t('membershipPage.hero.benefits.integration.emoji'),
    title: t('membershipPage.hero.benefits.integration.title'),
    description: t('membershipPage.hero.benefits.integration.description')
  }
])

const statuteHighlights = computed(() => [
  {
    key: 'purpose',
    title: t('membershipPage.highlights.purpose.title'),
    description: t('membershipPage.highlights.purpose.description')
  },
  {
    key: 'admission',
    title: t('membershipPage.highlights.admission.title'),
    description: t('membershipPage.highlights.admission.description')
  },
  {
    key: 'participation',
    title: t('membershipPage.highlights.participation.title'),
    description: t('membershipPage.highlights.participation.description')
  },
  {
    key: 'leaving',
    title: t('membershipPage.highlights.leaving.title'),
    description: t('membershipPage.highlights.leaving.description')
  }
])

const applicationSteps = computed(() => [
  {
    key: 'deregister',
    emoji: t('membershipPage.process.steps.deregister.emoji'),
    title: t('membershipPage.process.steps.deregister.title'),
    description: t('membershipPage.process.steps.deregister.description')
  },
  {
    key: 'application',
    emoji: t('membershipPage.process.steps.application.emoji'),
    title: t('membershipPage.process.steps.application.title'),
    description: t('membershipPage.process.steps.application.description')
  },
  {
    key: 'payment',
    emoji: t('membershipPage.process.steps.payment.emoji'),
    title: t('membershipPage.process.steps.payment.title'),
    description: t('membershipPage.process.steps.payment.description')
  },
  {
    key: 'documents',
    emoji: t('membershipPage.process.steps.documents.emoji'),
    title: t('membershipPage.process.steps.documents.title'),
    description: t('membershipPage.process.steps.documents.description')
  }
])
</script>

<template>
  <AppSubpageView
    :eyebrow="t('membershipPage.hero.eyebrow')"
    :title="t('membershipPage.hero.title')"
    :subtitle="t('membershipPage.hero.subtitle')"
    :description="t('membershipPage.hero.description')"
  >
    <template #aside>
      <div class="flex h-full min-h-56 flex-col justify-between gap-5">
        <UBadge
          :label="t('membershipPage.hero.badge')"
          color="primary"
          variant="solid"
          class="w-fit rounded-sm bg-coral-500 text-white"
        />

        <div class="space-y-4">
          <p class="cde-heading text-2xl text-[var(--cde-hero-panel-text)] sm:text-3xl">
            {{ t('membershipPage.hero.asideTitle') }}
          </p>

          <div class="grid gap-3">
            <div
              v-for="benefit in benefits"
              :key="benefit.key"
              class="rounded-[1.25rem] border border-[var(--cde-hero-panel-item-border)] bg-[var(--cde-hero-panel-item-bg)] p-4"
            >
              <p class="text-xs font-semibold uppercase tracking-[0.24em] text-coral-500">
                {{ benefit.emoji }}
                {{ benefit.title }}
              </p>
              <p class="mt-2 text-sm leading-6 text-[var(--cde-hero-panel-muted)]">
                {{ benefit.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </template>

    <section class="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)]">
      <article class="rounded-[2rem] border border-[var(--cde-card-border)] bg-[var(--cde-card-bg)] p-6 shadow-[0_18px_60px_rgba(2,4,8,0.08)] sm:p-8">
        <div class="mb-6 flex items-center gap-3">
          <span class="inline-flex h-10 w-1 rounded-full bg-coral-500" />
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--cde-muted-text)]">
              {{ t('membershipPage.sections.pricing.label') }}
            </p>
            <h2 class="cde-heading text-3xl text-[var(--cde-shell-text)]">
              {{ t('membershipPage.sections.pricing.title') }}
            </h2>
          </div>
        </div>

        <p class="mb-6 max-w-2xl text-sm leading-7 text-[var(--cde-muted-text)] sm:text-base">
          {{ t('membershipPage.sections.pricing.description') }}
        </p>

        <div class="grid gap-4 md:grid-cols-3">
          <div
            v-for="plan in plans"
            :key="plan.key"
            class="rounded-[1.5rem] border border-[var(--cde-card-border)] bg-[color-mix(in_srgb,var(--cde-card-bg)_92%,var(--cde-blue)_8%)] p-5"
          >
            <p class="text-xs font-semibold uppercase tracking-[0.24em] text-coral-500">
              {{ plan.emoji }}
              {{ plan.title }}
            </p>
            <p class="mt-3 cde-heading text-4xl text-[var(--cde-shell-text)]">
              {{ plan.price }}
            </p>
            <p class="mt-3 text-sm leading-6 text-[var(--cde-muted-text)]">
              {{ plan.note }}
            </p>
          </div>
        </div>
      </article>

      <article class="rounded-[2rem] border border-[var(--cde-card-border)] bg-[var(--cde-card-bg)] p-6 shadow-[0_18px_60px_rgba(2,4,8,0.08)] sm:p-8">
        <div class="mb-6 flex items-center gap-3">
          <span class="inline-flex h-10 w-1 rounded-full bg-coral-500" />
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--cde-muted-text)]">
              {{ t('membershipPage.sections.documents.label') }}
            </p>
            <h2 class="cde-heading text-3xl text-[var(--cde-shell-text)]">
              {{ t('membershipPage.sections.documents.title') }}
            </h2>
          </div>
        </div>

        <p class="mb-5 text-sm leading-7 text-[var(--cde-muted-text)] sm:text-base">
          {{ t('membershipPage.sections.documents.description') }}
        </p>

        <div class="grid gap-3">
          <UButton
            :to="membershipApplicationPdf"
            target="_blank"
            icon="i-lucide-file-signature"
            size="lg"
            class="justify-between rounded-sm bg-coral-500 text-white hover:bg-coral-400"
          >
            {{ t('membershipPage.sections.documents.applicationCta') }}
          </UButton>

          <UButton
            :to="statutePdf"
            target="_blank"
            icon="i-lucide-download"
            size="lg"
            color="neutral"
            variant="outline"
            class="justify-between rounded-sm"
          >
            {{ t('membershipPage.sections.documents.statuteCta') }}
          </UButton>
        </div>
      </article>
    </section>

    <section class="rounded-[2rem] border border-[var(--cde-card-border)] bg-[var(--cde-card-bg)] p-6 shadow-[0_18px_60px_rgba(2,4,8,0.08)] sm:p-8">
      <div class="mb-6 flex items-center gap-3">
        <span class="inline-flex h-10 w-1 rounded-full bg-coral-500" />
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--cde-muted-text)]">
            {{ t('membershipPage.process.label') }}
          </p>
          <h2 class="cde-heading text-3xl text-[var(--cde-shell-text)]">
            {{ t('membershipPage.process.title') }}
          </h2>
        </div>
      </div>

      <p class="mb-6 max-w-3xl text-sm leading-7 text-[var(--cde-muted-text)] sm:text-base">
        {{ t('membershipPage.process.description') }}
      </p>

      <div class="grid gap-4 md:grid-cols-2">
        <div
          v-for="step in applicationSteps"
          :key="step.key"
          class="rounded-[1.5rem] border border-[var(--cde-card-border)] bg-white/60 p-5 dark:bg-white/4"
        >
          <p class="text-xs font-semibold uppercase tracking-[0.24em] text-coral-500">
            {{ step.emoji }}
            {{ step.title }}
          </p>
          <p class="mt-3 text-sm leading-7 text-[var(--cde-muted-text)]">
            {{ step.description }}
          </p>
        </div>
      </div>
    </section>

    <section class="rounded-[2rem] border border-[var(--cde-card-border)] bg-[var(--cde-card-bg)] p-6 shadow-[0_18px_60px_rgba(2,4,8,0.08)] sm:p-8">
      <div class="mb-6 flex items-center gap-3">
        <span class="inline-flex h-10 w-1 rounded-full bg-coral-500" />
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--cde-muted-text)]">
            {{ t('membershipPage.sections.statute.label') }}
          </p>
          <h2 class="cde-heading text-3xl text-[var(--cde-shell-text)]">
            {{ t('membershipPage.sections.statute.title') }}
          </h2>
        </div>
      </div>

      <p class="mb-6 max-w-3xl text-sm leading-7 text-[var(--cde-muted-text)] sm:text-base">
        {{ t('membershipPage.sections.statute.description') }}
      </p>

      <div class="grid gap-4 md:grid-cols-2">
        <div
          v-for="item in statuteHighlights"
          :key="item.key"
          class="rounded-[1.5rem] border border-[var(--cde-card-border)] bg-white/60 p-5 dark:bg-white/4"
        >
          <p class="text-lg font-semibold text-[var(--cde-shell-text)]">
            {{ item.title }}
          </p>
          <p class="mt-3 text-sm leading-7 text-[var(--cde-muted-text)]">
            {{ item.description }}
          </p>
        </div>
      </div>
    </section>
  </AppSubpageView>
</template>
