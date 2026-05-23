<script setup lang="ts">
import { projects } from '../data/projects';
import SectionLabel from './SectionLabel.vue';
</script>

<template>
  <section id="projects" class="section-shell">
    <SectionLabel
      eyebrow="Featured technical projects"
      title="Selected work with architecture context."
      description="A compact view of product ideas, engineering challenges, and implementation decisions that show how the work is shaped."
    />

    <div class="grid gap-5 lg:grid-cols-3">
      <article
        v-for="project in projects"
        :key="project.name"
        class="flex min-h-[430px] flex-col rounded-lg border border-white/10 bg-white/[0.035] p-6 transition hover:border-cyan-300/35 hover:bg-white/[0.055]"
      >
        <div>
          <h3 class="text-xl font-semibold text-white">{{ project.name }}</h3>
          <p class="mt-4 text-sm leading-6 text-slate-300">{{ project.description }}</p>
        </div>

        <div class="mt-6 flex flex-wrap gap-2">
          <span v-for="tech in project.technologies" :key="tech" class="tag">
            {{ tech }}
          </span>
        </div>

        <dl class="mt-6 space-y-5 text-sm leading-6">
          <div>
            <dt class="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">Challenge</dt>
            <dd class="mt-2 text-slate-300">{{ project.challenge }}</dd>
          </div>
          <div>
            <dt class="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">Architecture</dt>
            <dd class="mt-2 text-slate-300">{{ project.architecture }}</dd>
          </div>
        </dl>

        <div class="mt-auto flex gap-3 pt-7 text-sm">
          <a
            v-if="project.repositoryUrl"
            class="text-cyan-300 transition hover:text-cyan-100"
            :href="project.repositoryUrl"
          >
            Repository
          </a>
          <a v-if="project.demoUrl" class="text-cyan-300 transition hover:text-cyan-100" :href="project.demoUrl">
            Demo
          </a>
          <span v-if="!project.repositoryUrl && !project.demoUrl" class="text-slate-500">
            Case note pending
          </span>
        </div>
      </article>
    </div>
  </section>
</template>

