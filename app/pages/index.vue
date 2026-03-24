<script setup lang="ts">
const links = [
  {
    label: 'Mitglied werden',
    to: '#mitgliedschaft',
    size: 'xl' as const
  },
  {
    label: 'Teams entdecken',
    to: '#teams',
    size: 'xl' as const,
    color: 'neutral' as const,
    variant: 'subtle' as const
  }
]

const sections = [
  {
    icon: 'i-lucide-shield',
    title: '1981 Heritage',
    description: 'Ein Auftritt, der die Vereinsgeschichte spuerbar macht und trotzdem modern wirkt.'
  },
  {
    icon: 'i-lucide-palette',
    title: 'Coral als Akzent',
    description: 'Primaere Aktionen, Badges und Call-to-Actions folgen konsequent dem Heritage-Coral-Ton.'
  },
  {
    icon: 'i-lucide-columns-3',
    title: 'Los-Cortinas-Streifen',
    description: 'Die vertikale Streifenidee lebt subtil in Hintergruenden und Abschnittstrennern weiter.'
  }
]

const teamCards = [
  {
    title: '1. Mannschaft',
    description: 'Klar priorisierte Spieltagskommunikation mit markanten CTA-Flaechen und sachlicher Informationshierarchie.'
  },
  {
    title: 'Jugend',
    description: 'Freundliche Kartenoptik mit weichen Border-Treatments und guter Lesbarkeit auf Mobilgeraeten.'
  },
  {
    title: 'Verein',
    description: 'Ruhige neutrale Textflaechen, damit Geschichte, Mitgliedschaft und Organisation vertrauenswuerdig wirken.'
  }
]
</script>

<template>
  <div class="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8">
    <UPageHero
      title="Tradition mit modernem Nuxt-UI-Fundament"
      description="Das Theme orientiert sich an den Vorgaben aus styling.md: Heritage Blue, Coral-Akzente, klare Sans-Serif-Typografie und subtile Los-Cortinas-Streifen."
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
          Modern Alchemist
        </div>
      </template>

      <template #right>
        <div class="relative hidden min-h-80 overflow-hidden rounded-[1.75rem] border border-white/70 bg-[var(--cde-blue)] p-8 text-white lg:block">
          <div class="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent_0,transparent_40px,rgba(255,255,255,0.08)_40px,rgba(255,255,255,0.08)_56px)]" />
          <div class="relative flex h-full flex-col justify-between">
            <UBadge
              label="Heritage Theme"
              color="primary"
              variant="solid"
              class="w-fit rounded-sm"
            />
            <div class="space-y-4">
              <p class="cde-heading text-3xl text-white">
                Los Cortinas
              </p>
              <p class="max-w-sm text-sm leading-6 text-slate-200">
                Ein visuelles System fuer Header, Buttons, Cards und Footer, das die Vereinsidentitaet nicht wie ein generisches SaaS-Template aussehen laesst.
              </p>
            </div>
          </div>
        </div>
      </template>
    </UPageHero>

    <UPageSection
      id="leitlinien"
      title="Theme-Leitlinien"
      description="Die Nuxt-UI-Basis wurde auf die in styling.md beschriebenen Markenmerkmale umgestellt."
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
          label="Mehr erfahren"
          color="primary"
          variant="soft"
          trailing-icon="i-lucide-arrow-right"
          class="rounded-md"
        />
      </UCard>
    </section>

    <UPageCTA
      id="mitgliedschaft"
      title="Nuxt UI folgt jetzt der CDE-Identitaet"
      description="Primaerfarben, Schriftbild, Oberflaechen und dekorative Muster sind zentral hinterlegt und koennen fuer weitere Seiten direkt wiederverwendet werden."
      variant="subtle"
      :links="[{
        label: 'Mitgliedschaft planen',
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
