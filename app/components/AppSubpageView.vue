<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  subtitle: string
  description: string
}>()
</script>

<template>
  <div class="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8">
    <section class="cde-subpage-hero relative overflow-hidden rounded-[2rem] border border-[var(--cde-card-border)] shadow-[0_24px_80px_rgba(2,4,8,0.24)]">
      <div class="relative grid gap-8 px-6 py-10 sm:px-8 sm:py-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(20rem,0.85fr)] lg:px-12 lg:py-16">
        <div class="space-y-5 rounded-[1.75rem] border border-[var(--cde-hero-copy-border)] bg-[var(--cde-hero-copy-bg)] p-5 backdrop-blur-sm sm:p-6 lg:p-7">
          <div class="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-coral-400">
            <span class="h-px w-10 bg-coral-400" />
            {{ eyebrow }}
          </div>

          <div class="space-y-3">
            <p class="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--cde-hero-muted)]">
              {{ subtitle }}
            </p>
            <h1 class="cde-heading max-w-4xl text-4xl text-coral-400 sm:text-5xl lg:text-6xl">
              {{ title }}
            </h1>
          </div>

          <p class="max-w-2xl text-base leading-7 text-[var(--cde-hero-muted)] sm:text-lg">
            {{ description }}
          </p>
        </div>

        <div class="rounded-[1.75rem] border border-[var(--cde-hero-panel-border)] bg-[var(--cde-hero-panel-bg)] p-5 backdrop-blur-sm">
          <slot name="aside" />
        </div>
      </div>
    </section>

    <slot />
  </div>
</template>
