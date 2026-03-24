<script setup lang="ts">
const { t } = useI18n()
const contactEmail = 'info@cde-wiesbaden.de'

const sections = computed(() => [
  {
    key: 'responsibility',
    title: t('imprintPage.sections.responsibility.title'),
    items: [
      {
        type: 'text',
        value: t('imprintPage.sections.responsibility.content')
      }
    ]
  },
  {
    key: 'address',
    title: t('imprintPage.sections.address.title'),
    items: [
      { type: 'text', value: t('imprintPage.sections.address.line1') },
      { type: 'text', value: t('imprintPage.sections.address.line2') },
      { type: 'text', value: t('imprintPage.sections.address.line3') }
    ]
  },
  {
    key: 'contact',
    title: t('imprintPage.sections.contact.title'),
    items: [
      {
        type: 'text',
        value: t('imprintPage.sections.contact.phone')
      },
      {
        type: 'email',
        label: t('imprintPage.sections.contact.emailLabel'),
        value: contactEmail
      }
    ]
  },
  {
    key: 'bank',
    title: t('imprintPage.sections.bank.title'),
    items: [
      { type: 'text', value: t('imprintPage.sections.bank.account') },
      { type: 'text', value: t('imprintPage.sections.bank.iban') },
      { type: 'text', value: t('imprintPage.sections.bank.bic') }
    ]
  },
  {
    key: 'association',
    title: t('imprintPage.sections.association.title'),
    items: [
      { type: 'text', value: t('imprintPage.sections.association.registry') },
      { type: 'text', value: t('imprintPage.sections.association.hfv') }
    ]
  },
  {
    key: 'tax',
    title: t('imprintPage.sections.tax.title'),
    items: [
      { type: 'text', value: t('imprintPage.sections.tax.number') }
    ]
  }
])

const socialLinks = computed(() => [
  {
    label: 'Instagram',
    handle: '@cdespanol',
    href: 'https://www.instagram.com/cdespanol'
  },
  {
    label: 'Facebook',
    handle: '@espanolwiesbaden',
    href: 'https://www.facebook.com/espanolwiesbaden'
  },
  {
    label: 'FuPa',
    handle: 'cd-espaol-wiesbaden',
    href: 'https://www.fupa.net/club/cd-espaol-wiesbaden'
  }
])
</script>

<template>
  <AppSubpageView
    :eyebrow="t('imprintPage.hero.eyebrow')"
    :title="t('imprintPage.hero.title')"
    :subtitle="t('imprintPage.hero.subtitle')"
    :description="t('imprintPage.hero.description')"
  >
    <template #aside>
      <div class="flex h-full min-h-56 flex-col justify-between gap-5">
        <UBadge
          :label="t('imprintPage.hero.badge')"
          color="primary"
          variant="solid"
          class="w-fit rounded-sm bg-coral-500 text-white"
        />

        <div class="space-y-4">
          <p class="cde-heading text-2xl text-[var(--cde-hero-panel-text)] sm:text-3xl">
            {{ t('imprintPage.hero.asideTitle') }}
          </p>

          <div class="grid gap-3">
            <a
              v-for="link in socialLinks"
              :key="link.label"
              :href="link.href"
              target="_blank"
              rel="noreferrer"
              class="rounded-[1.25rem] border border-[var(--cde-hero-panel-item-border)] bg-[var(--cde-hero-panel-item-bg)] p-4 transition hover:-translate-y-0.5"
            >
              <p class="text-sm font-semibold text-coral-500">
                {{ link.label }}
              </p>
              <p class="mt-2 text-sm leading-6 text-[var(--cde-hero-panel-muted)]">
                {{ link.handle }}
              </p>
            </a>
          </div>
        </div>
      </div>
    </template>

    <section class="grid gap-6 lg:grid-cols-2">
      <article
        v-for="section in sections"
        :key="section.key"
        class="rounded-[1.75rem] border border-[var(--cde-card-border)] bg-[var(--cde-card-bg)] p-6 shadow-[0_18px_60px_rgba(2,4,8,0.08)] sm:p-7"
      >
        <p class="text-xs font-semibold uppercase tracking-[0.28em] text-coral-500">
          {{ section.title }}
        </p>

        <div class="mt-4 space-y-2">
          <p
            v-for="item in section.items"
            :key="`${section.key}-${item.type}-${item.value}`"
            class="text-sm leading-7 text-[var(--cde-shell-text)] sm:text-base"
          >
            <template v-if="item.type === 'email'">
              {{ item.label }}
              <a
                :href="`mailto:${item.value}`"
                class="font-medium text-coral-500 underline decoration-coral-300 underline-offset-4 transition hover:text-coral-400"
              >
                {{ item.value }}
              </a>
            </template>
            <template v-else>
              {{ item.value }}
            </template>
          </p>
        </div>
      </article>
    </section>
  </AppSubpageView>
</template>
