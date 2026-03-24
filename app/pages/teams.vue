<script setup lang="ts">
import carstenPhoto from '~/assets/img/carsten.webp'
import christopherPhoto from '~/assets/img/christopher.webp'
import firstTeamPhoto from '~/assets/img/erste_mannschaft_24-25.jpg'
import florianPhoto from '~/assets/img/florian.webp'
import roldanPhoto from '~/assets/img/roldan.webp'
import simonPhoto from '~/assets/img/simon.webp'
import secondTeamPhoto from '~/assets/img/zweite.webp'

const { t } = useI18n()

const teams = computed(() => [
  {
    key: 'first',
    title: t('teamsPage.first.title'),
    description: t('teamsPage.first.description'),
    photo: firstTeamPhoto,
    coaches: [
      {
        name: 'Florian Treder',
        role: t('teamsPage.roles.headCoach'),
        photo: florianPhoto
      },
      {
        name: 'Simon Rommelspacher',
        role: t('teamsPage.roles.assistantCoach'),
        photo: simonPhoto
      },
      {
        name: 'Roldan Loera',
        role: t('teamsPage.roles.goalkeeperCoach'),
        photo: roldanPhoto
      }
    ]
  },
  {
    key: 'second',
    title: t('teamsPage.second.title'),
    description: t('teamsPage.second.description'),
    photo: secondTeamPhoto,
    coaches: [
      {
        name: 'Carsten Zillmann',
        role: t('teamsPage.roles.headCoach'),
        photo: carstenPhoto
      },
      {
        name: 'Christopher Darrington',
        role: t('teamsPage.roles.assistantCoach'),
        photo: christopherPhoto
      },
      {
        name: 'Roldan Loera',
        role: t('teamsPage.roles.goalkeeperCoach'),
        photo: roldanPhoto
      }
    ]
  }
])
</script>

<template>
  <AppSubpageView
    :eyebrow="t('teamsPage.hero.eyebrow')"
    :title="t('teamsPage.hero.title')"
    :subtitle="t('teamsPage.hero.subtitle')"
    :description="t('teamsPage.hero.description')"
  >
    <template #aside>
      <div class="flex h-full min-h-56 flex-col justify-between gap-5">
        <UBadge
          :label="t('teamsPage.hero.badge')"
          color="primary"
          variant="solid"
          class="w-fit rounded-sm bg-coral-500 text-white"
        />

        <div class="space-y-4">
          <p class="cde-heading text-2xl text-[var(--cde-hero-panel-text)] sm:text-3xl">
            {{ t('teamsPage.hero.asideTitle') }}
          </p>

          <div class="grid gap-3">
            <div
              v-for="achievement in ['founding', 'promotion', 'championship']"
              :key="achievement"
              class="rounded-[1.25rem] border border-[var(--cde-hero-panel-item-border)] bg-[var(--cde-hero-panel-item-bg)] p-4"
            >
              <p class="text-sm font-semibold text-coral-500">
                {{ t(`teamsPage.hero.achievements.${achievement}.emoji`) }}
                {{ t(`teamsPage.hero.achievements.${achievement}.title`) }}
              </p>
              <p class="mt-2 text-sm leading-6 text-[var(--cde-hero-panel-muted)]">
                {{ t(`teamsPage.hero.achievements.${achievement}.description`) }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </template>

    <section class="grid gap-6">
      <article
        v-for="team in teams"
        :key="team.key"
        class="overflow-hidden rounded-[2rem] border border-[var(--cde-card-border)] bg-[var(--cde-card-bg)] shadow-[0_18px_60px_rgba(2,4,8,0.08)]"
      >
        <div class="grid gap-0 lg:grid-cols-[minmax(0,1.15fr)_minmax(20rem,0.85fr)]">
          <div class="border-b border-[var(--cde-card-border)] p-5 sm:p-7 lg:border-b-0 lg:border-r lg:p-8">
            <div class="mb-5 flex items-center gap-3">
              <span class="inline-flex h-10 w-1 rounded-full bg-coral-500" />
              <div>
                <p class="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--cde-muted-text)]">
                  {{ t('teamsPage.sectionLabel') }}
                </p>
                <h2 class="cde-heading text-3xl text-[var(--cde-shell-text)]">
                  {{ team.title }}
                </h2>
              </div>
            </div>

            <p class="mb-6 max-w-2xl text-sm leading-7 text-[var(--cde-muted-text)] sm:text-base">
              {{ team.description }}
            </p>

            <div class="relative overflow-hidden rounded-[1.5rem] border border-[var(--cde-card-border)] bg-[var(--cde-blue)]">
              <div class="heritage-pattern absolute inset-0 opacity-100" />
              <div class="absolute inset-0 bg-[linear-gradient(160deg,rgba(7,24,46,0.18),rgba(7,24,46,0.82))]" />
              <img
                :src="team.photo"
                :alt="team.title"
                class="relative aspect-[16/10] w-full object-cover"
              >
            </div>
          </div>

          <div class="bg-[color-mix(in_srgb,var(--cde-card-bg)_92%,var(--cde-blue)_8%)] p-5 sm:p-7 lg:p-8">
            <p class="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--cde-muted-text)]">
              {{ t('teamsPage.coachesLabel') }}
            </p>

            <div class="grid gap-4">
              <div
                v-for="coach in team.coaches"
                :key="coach.name"
                class="flex items-center gap-4 rounded-[1.25rem] border border-[var(--cde-card-border)] bg-white/50 p-4 dark:bg-white/3"
              >
                <img
                  :src="coach.photo"
                  :alt="coach.name"
                  class="h-16 w-16 shrink-0 rounded-full border border-coral-300/60 object-cover"
                >

                <div class="min-w-0">
                  <p class="text-xs font-semibold uppercase tracking-[0.24em] text-coral-500">
                    {{ coach.role }}
                  </p>
                  <p class="mt-1 text-lg font-semibold text-[var(--cde-shell-text)]">
                    {{ coach.name }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  </AppSubpageView>
</template>
