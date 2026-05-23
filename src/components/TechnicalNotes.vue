<script setup lang="ts">
import { notes } from '../data/notes';
import SectionLabel from './SectionLabel.vue';
</script>

<template>
  <section id="notes" class="section-shell border-y border-white/10 bg-slate-950/55">
    <SectionLabel
      eyebrow="Technical notes"
      title="A notebook for practical engineering decisions."
      description="Short-form writing topics for architecture, mobile development, frontend systems, AI coding, and product-minded implementation."
    />

    <div class="grid gap-4 md:grid-cols-2">
      <article
        v-for="note in notes"
        :key="note.title"
        class="rounded-lg border border-white/10 bg-slate-900/45 p-5 transition hover:border-amber-200/35"
      >
        <p class="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200">{{ note.category }}</p>
        <h3 class="mt-3 text-lg font-semibold text-white">{{ note.title }}</h3>
        <p class="mt-3 text-sm leading-6 text-slate-300">{{ note.summary }}</p>
      </article>
    </div>
  </section>
</template>

