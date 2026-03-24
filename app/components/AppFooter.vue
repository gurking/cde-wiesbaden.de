<template>
  <footer class="border-t border-white/10 bg-[var(--cde-blue)]/85 text-white">
    <div class="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 sm:px-6 lg:px-8">
      <div class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div class="space-y-2">
          <p class="text-sm text-slate-200">
            {{ $t('footer.copyright') }} • © {{ new Date().getFullYear() }}
          </p>
          <p class="max-w-md text-sm text-slate-300">
            {{ $t('footer.themeNote') }}
          </p>
        </div>

        <nav class="flex flex-wrap items-center gap-3 text-sm">
          <NuxtLink
            to="/impressum"
            class="rounded-md px-2 py-1 text-slate-200 transition hover:bg-white/10 hover:text-white"
          >
            {{ $t('footer.links.imprint') }}
          </NuxtLink>
          <a
            href="https://www.instagram.com/cdespanol"
            target="_blank"
            rel="noreferrer"
            class="rounded-md px-2 py-1 text-slate-300 transition hover:bg-white/10 hover:text-white"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com/espanolwiesbaden"
            target="_blank"
            rel="noreferrer"
            class="rounded-md px-2 py-1 text-slate-300 transition hover:bg-white/10 hover:text-white"
          >
            Facebook
          </a>
          <a
            href="https://www.fupa.net/club/cd-espaol-wiesbaden"
            target="_blank"
            rel="noreferrer"
            class="rounded-md px-2 py-1 text-slate-300 transition hover:bg-white/10 hover:text-white"
          >
            FuPa
          </a>
        </nav>
      </div>
    </div>
  </footer>
</template>
