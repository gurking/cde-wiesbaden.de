<script setup lang="ts">
import andreasPhoto from '~/assets/img/andreas.webp'
import angelPhoto from '~/assets/img/angel.webp'
import carstenPhoto from '~/assets/img/carsten.webp'
import florianPhoto from '~/assets/img/florian.webp'
import manoloPhoto from '~/assets/img/manolo.webp'
import martinPhoto from '~/assets/img/martin.webp'
import placeholderPhoto from '~/assets/img/platzhalter.webp'
import sebastianHeimburgerPhoto from '~/assets/img/sebastian_heimburger.webp'
import simonPhoto from '~/assets/img/simon.webp'
import sebastianLachenitPhoto from '~/assets/img/sebastian_lachenit.webp'

const { t } = useI18n()

const boardGroups = computed(() => [
  {
    key: 'presidium',
    label: t('boardPage.groups.presidium.label'),
    title: t('boardPage.groups.presidium.title'),
    description: t('boardPage.groups.presidium.description'),
    members: [
      {
        name: 'Carsten Zillmann',
        role: t('boardPage.roles.firstChair'),
        note: t('boardPage.notes.carsten'),
        photo: carstenPhoto
      },
      {
        name: 'Martin Huschens',
        role: t('boardPage.roles.secondChair'),
        note: t('boardPage.notes.martin'),
        photo: martinPhoto
      }
    ]
  },
  {
    key: 'finance',
    label: t('boardPage.groups.finance.label'),
    title: t('boardPage.groups.finance.title'),
    description: t('boardPage.groups.finance.description'),
    members: [
      {
        name: 'Manuel Romero',
        role: t('boardPage.roles.treasurer'),
        note: t('boardPage.notes.manolo'),
        photo: manoloPhoto
      },
      {
        name: 'Sascha K.',
        role: t('boardPage.roles.secretary'),
        note: t('boardPage.notes.sascha'),
        photo: placeholderPhoto
      }
    ]
  },
  {
    key: 'advisors',
    label: t('boardPage.groups.advisors.label'),
    title: t('boardPage.groups.advisors.title'),
    description: t('boardPage.groups.advisors.description'),
    members: [
      {
        name: 'Angel Reina Pastor',
        role: t('boardPage.roles.advisor'),
        note: null,
        photo: angelPhoto
      },
      {
        name: 'Florian Treder',
        role: t('boardPage.roles.advisor'),
        note: null,
        photo: florianPhoto
      },
      {
        name: 'Pedro Riveiro',
        role: t('boardPage.roles.advisor'),
        note: null,
        photo: placeholderPhoto
      },
      {
        name: 'Sebastian Heimburger',
        role: t('boardPage.roles.advisor'),
        note: null,
        photo: sebastianHeimburgerPhoto
      },
      {
        name: 'Simon Rommelspacher',
        role: t('boardPage.roles.advisor'),
        note: null,
        photo: simonPhoto
      }
    ]
  },
  {
    key: 'special',
    label: t('boardPage.groups.special.label'),
    title: t('boardPage.groups.special.title'),
    description: t('boardPage.groups.special.description'),
    members: [
      {
        name: 'Andreas Henrici',
        role: t('boardPage.roles.sportDirector'),
        note: t('boardPage.notes.andreas'),
        photo: andreasPhoto
      },
      {
        name: 'Sebastian Geiss',
        role: t('boardPage.roles.clubManager'),
        note: t('boardPage.notes.sebastianGeiss'),
        photo: placeholderPhoto
      },
      {
        name: 'Sebastian Lachenit',
        role: t('boardPage.roles.referee'),
        note: t('boardPage.notes.sebastianLachenit'),
        photo: sebastianLachenitPhoto
      }
    ]
  }
])
</script>

<template>
  <AppSubpageView
    :eyebrow="t('boardPage.hero.eyebrow')"
    :title="t('boardPage.hero.title')"
    :subtitle="t('boardPage.hero.subtitle')"
    :description="t('boardPage.hero.description')"
  >
    <template #aside>
      <div class="flex h-full min-h-56 flex-col justify-between gap-5">
        <UBadge
          :label="t('boardPage.hero.badge')"
          color="primary"
          variant="solid"
          class="w-fit rounded-sm bg-coral-500 text-white"
        />

        <div class="space-y-4">
          <p class="cde-heading text-2xl text-[var(--cde-hero-panel-text)] sm:text-3xl">
            {{ t('boardPage.hero.asideTitle') }}
          </p>

          <div class="grid gap-3">
            <div
              v-for="pillar in ['identity', 'community', 'continuity']"
              :key="pillar"
              class="rounded-[1.25rem] border border-[var(--cde-hero-panel-item-border)] bg-[var(--cde-hero-panel-item-bg)] p-4"
            >
              <p class="text-sm font-semibold text-coral-500">
                {{ t(`boardPage.hero.pillars.${pillar}.emoji`) }}
                {{ t(`boardPage.hero.pillars.${pillar}.title`) }}
              </p>
              <p class="mt-2 text-sm leading-6 text-[var(--cde-hero-panel-muted)]">
                {{ t(`boardPage.hero.pillars.${pillar}.description`) }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </template>

    <section class="grid gap-6">
      <article
        v-for="group in boardGroups"
        :key="group.key"
        class="overflow-hidden rounded-[2rem] border border-[var(--cde-card-border)] bg-[var(--cde-card-bg)] shadow-[0_18px_60px_rgba(2,4,8,0.08)]"
      >
        <div class="grid gap-0 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]">
          <div class="border-b border-[var(--cde-card-border)] bg-[color-mix(in_srgb,var(--cde-card-bg)_90%,var(--cde-blue)_10%)] p-6 sm:p-8 lg:border-b-0 lg:border-r">
            <p class="text-xs font-semibold uppercase tracking-[0.28em] text-coral-500">
              {{ group.label }}
            </p>
            <h2 class="cde-heading mt-3 text-3xl text-[var(--cde-shell-text)]">
              {{ group.title }}
            </h2>
            <p class="mt-5 max-w-lg text-sm leading-7 text-[var(--cde-muted-text)] sm:text-base">
              {{ group.description }}
            </p>
          </div>

          <div class="p-6 sm:p-8">
            <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              <article
                v-for="member in group.members"
                :key="`${group.key}-${member.name}`"
                class="overflow-hidden rounded-[1.5rem] border border-[var(--cde-card-border)] bg-white/60 shadow-sm dark:bg-white/3"
              >
                <img
                  :src="member.photo"
                  :alt="member.name"
                  class="aspect-[4/4.6] w-full object-cover"
                >

                <div class="space-y-3 p-5">
                  <p class="text-xs font-semibold uppercase tracking-[0.24em] text-coral-500">
                    {{ member.role }}
                  </p>
                  <h3 class="text-xl font-semibold text-[var(--cde-shell-text)]">
                    {{ member.name }}
                  </h3>
                  <p
                    v-if="member.note !== null"
                    class="text-sm leading-6 text-[var(--cde-muted-text)]"
                  >
                    {{ member.note || t('boardPage.memberNote') }}
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </article>
    </section>
  </AppSubpageView>
</template>
