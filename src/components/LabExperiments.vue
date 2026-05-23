<script setup lang="ts">
import { experiments } from '../data/experiments';
import SectionLabel from './SectionLabel.vue';
</script>

<template>
  <section id="lab" class="section-shell">
    <SectionLabel
      eyebrow="Experiments / Lab"
      title="Small tests for systems, motion, and play."
      description="A public shelf for technical explorations that are useful before they become full products."
    />

    <div class="grid gap-5 lg:grid-cols-4">
      <article
        v-for="experiment in experiments"
        :key="experiment.title"
        class="rounded-lg border border-white/10 bg-white/[0.035] p-5"
      >
        <div class="flex items-center justify-between gap-4">
          <h3 class="text-lg font-semibold text-white">{{ experiment.title }}</h3>
          <span class="status-pill">{{ experiment.status }}</span>
        </div>
        <p class="mt-4 text-sm leading-6 text-slate-300">{{ experiment.description }}</p>
        <div class="mt-5 flex flex-wrap gap-2">
          <span v-for="tag in experiment.tags" :key="tag" class="tag tag-muted">{{ tag }}</span>
        </div>
      </article>
    </div>
  </section>
</template>

