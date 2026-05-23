<script setup lang="ts">
import { links } from '../data/links';
</script>

<template>
  <footer class="border-t border-white/10 bg-site">
    <div class="mx-auto max-w-7xl px-6 py-12">
      <div class="grid gap-6 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p class="text-sm font-semibold text-white">Austin Wu / Technical Base</p>
          <p class="mt-3 max-w-sm text-sm leading-6 text-slate-400">
            Public engineering notes, experiments, and project context.
          </p>
        </div>
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <a
            v-for="link in links"
            :key="link.label"
            class="rounded-lg border border-white/10 p-4 transition hover:border-cyan-300/35 hover:bg-white/[0.035]"
            :href="link.href"
          >
            <span class="text-sm font-semibold text-white">{{ link.label }}</span>
            <span class="mt-2 block text-xs leading-5 text-slate-400">{{ link.description }}</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

