<script setup lang="ts">
import carstenPhoto from '~/assets/img/carsten.webp'
import christopherPhoto from '~/assets/img/christopher.webp'
import firstTeamPhoto from '~/assets/img/erste_mannschaft_24-25.jpg'
import florianPhoto from '~/assets/img/florian.webp'
import roldanPhoto from '~/assets/img/roldan.webp'
import simonPhoto from '~/assets/img/simon.webp'
import secondTeamPhoto from '~/assets/img/zweite.webp'

const { t } = useI18n()

const trialForm = reactive({
  name: '',
  previousClub: '',
  phone: ''
})

const isTrialFormValid = computed(() =>
  trialForm.name.trim().length > 0 && trialForm.phone.trim().length > 0
)

const trialRequestMailto = computed(() => {
  if (!isTrialFormValid.value) {
    return ''
  }

  const subject = t('teamsPage.trainingForm.mail.subject')
  const body = [
    t('teamsPage.trainingForm.mail.intro'),
    '',
    `${t('teamsPage.trainingForm.fields.name')}: ${trialForm.name.trim()}`,
    `${t('teamsPage.trainingForm.fields.previousClub')}: ${trialForm.previousClub.trim() || t('teamsPage.trainingForm.mail.notProvided')}`,
    `${t('teamsPage.trainingForm.fields.phone')}: ${trialForm.phone.trim()}`
  ].join('\n')

  return `mailto:info@cde-wiesbaden.de?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
})

const handleTrialRequestClick = (event: MouseEvent) => {
  if (!isTrialFormValid.value) {
    event.preventDefault()
  }
}

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

    <section class="space-y-6">
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

    <section class="grid gap-6 lg:grid-cols-3">
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

        <div class="space-y-5">
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

          <div class="rounded-[1.5rem] border border-[var(--cde-card-border)] bg-[var(--cde-card-bg)] p-6">
            <div class="mb-5">
              <p class="text-xs font-semibold uppercase tracking-[0.28em] text-coral-500">
                {{ t('teamsPage.trainingForm.label') }}
              </p>
              <h3 class="mt-2 text-xl font-semibold text-[var(--cde-shell-text)]">
                {{ t('teamsPage.trainingForm.title') }}
              </h3>
              <p class="mt-2 text-sm leading-6 text-[var(--cde-muted-text)]">
                {{ t('teamsPage.trainingForm.description') }}
              </p>
            </div>

            <div class="space-y-4">
              <label class="block">
                <span class="mb-2 block text-sm font-medium text-[var(--cde-shell-text)]">
                  {{ t('teamsPage.trainingForm.fields.name') }}
                </span>
                <input
                  v-model="trialForm.name"
                  type="text"
                  :placeholder="t('teamsPage.trainingForm.placeholders.name')"
                  class="w-full rounded-md border border-[var(--cde-card-border)] bg-[color-mix(in_srgb,var(--cde-card-bg)_94%,white_6%)] px-4 py-3 text-sm text-[var(--cde-shell-text)] outline-none transition focus:border-coral-500 focus:ring-2 focus:ring-coral-500/20"
                >
              </label>

              <label class="block">
                <span class="mb-2 block text-sm font-medium text-[var(--cde-shell-text)]">
                  {{ t('teamsPage.trainingForm.fields.previousClub') }}
                </span>
                <input
                  v-model="trialForm.previousClub"
                  type="text"
                  :placeholder="t('teamsPage.trainingForm.placeholders.previousClub')"
                  class="w-full rounded-md border border-[var(--cde-card-border)] bg-[color-mix(in_srgb,var(--cde-card-bg)_94%,white_6%)] px-4 py-3 text-sm text-[var(--cde-shell-text)] outline-none transition focus:border-coral-500 focus:ring-2 focus:ring-coral-500/20"
                >
              </label>

              <label class="block">
                <span class="mb-2 block text-sm font-medium text-[var(--cde-shell-text)]">
                  {{ t('teamsPage.trainingForm.fields.phone') }}
                </span>
                <input
                  v-model="trialForm.phone"
                  type="tel"
                  :placeholder="t('teamsPage.trainingForm.placeholders.phone')"
                  class="w-full rounded-md border border-[var(--cde-card-border)] bg-[color-mix(in_srgb,var(--cde-card-bg)_94%,white_6%)] px-4 py-3 text-sm text-[var(--cde-shell-text)] outline-none transition focus:border-coral-500 focus:ring-2 focus:ring-coral-500/20"
                >
              </label>

              <a
                :href="trialRequestMailto || undefined"
                :aria-disabled="!isTrialFormValid"
                class="inline-flex w-full items-center justify-between rounded-md px-4 py-3 text-sm font-semibold text-white transition"
                :class="isTrialFormValid ? 'bg-coral-500 hover:bg-coral-600' : 'cursor-not-allowed bg-slate-300'"
                @click="handleTrialRequestClick"
              >
                <span>{{ t('teamsPage.trainingForm.cta') }}</span>
                <UIcon
                  name="i-lucide-send"
                  class="h-4 w-4"
                />
              </a>

              <p class="text-xs leading-5 text-[var(--cde-muted-text)]">
                {{ t('teamsPage.trainingForm.helper') }}
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
              {{ t('teamsPage.organizationLabel') }}
            </p>
            <h2 class="cde-heading text-3xl text-[var(--cde-shell-text)]">
              {{ t('teamsPage.organization.title') }}
            </h2>
          </div>
        </div>

        <p class="mb-6 text-sm leading-7 text-[var(--cde-muted-text)] sm:text-base">
          {{ t('teamsPage.organization.description') }}
        </p>

        <UButton
          to="https://www.spielerplus.de"
          target="_blank"
          external
          icon="i-lucide-external-link"
          trailing-icon="i-lucide-arrow-right"
          color="primary"
          class="w-full justify-between rounded-md"
        >
          {{ t('teamsPage.organization.cta') }}
        </UButton>
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

        <div class="mb-6 overflow-hidden rounded-[1.5rem] border border-[var(--cde-card-border)]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2563.1361549107573!2d8.2594046!3d50.0275445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd97d5323eccc1%3A0xbfc83eee5c2dc8cd!2sCD%20Espa%C3%B1ol%20Wiesbaden%201981!5e0!3m2!1sde!2sde!4v1774396510456!5m2!1sde!2sde"
            width="100%"
            height="300"
            style="border: 0;"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
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
  </AppSubpageView>
</template>
