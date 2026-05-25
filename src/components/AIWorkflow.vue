<script setup lang="ts">
import { aiWorkflowTopics, worldviewPrinciples } from '../data/aiWorkflow';
import SectionLabel from './SectionLabel.vue';
</script>

<template>
  <section
    id="ai-workflow"
    class="section-shell border-y border-white/10 bg-[radial-gradient(circle_at_16%_18%,rgba(34,211,238,0.09),transparent_28%),radial-gradient(circle_at_86%_26%,rgba(251,146,60,0.08),transparent_30%),linear-gradient(180deg,rgba(2,6,23,1),rgba(15,23,42,0.58),rgba(2,6,23,1))]"
  >
    <div class="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
      <div>
        <SectionLabel
          eyebrow="AI workflow"
          title="Human judgment, agentic execution, and context-aware systems."
          description="A long-term practice for using AI as an engineering partner: not a shortcut around thinking, but a way to make product intent, system design, and creative exploration move faster with clearer traces."
        />

        <div class="rounded-lg border border-cyan-300/20 bg-cyan-300/[0.045] p-5">
          <p class="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
            Long-term worldview
          </p>
          <p class="mt-4 text-sm leading-7 text-slate-300">
            The site is gradually becoming a map of how ideas become systems: a place where code,
            design, games, AI tools, and personal product philosophy can be observed as one evolving
            practice.
          </p>
        </div>
      </div>

      <div class="space-y-5">
        <div class="grid gap-4 md:grid-cols-2">
          <article
            v-for="topic in aiWorkflowTopics"
            :key="topic.title"
            class="rounded-lg border border-white/10 bg-slate-950/55 p-5 transition hover:border-cyan-300/35 hover:bg-slate-900/70"
          >
            <p class="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
              {{ topic.focus }}
            </p>
            <h3 class="mt-3 text-lg font-semibold text-white">{{ topic.title }}</h3>
            <p class="mt-3 text-sm leading-6 text-slate-300">{{ topic.description }}</p>
          </article>
        </div>

        <div class="grid gap-4 pt-2 md:grid-cols-3">
          <article
            v-for="principle in worldviewPrinciples"
            :key="principle.title"
            class="rounded-lg border border-white/10 bg-white/[0.035] p-5"
          >
            <h3 class="text-base font-semibold text-white">{{ principle.title }}</h3>
            <p class="mt-3 text-sm leading-6 text-slate-400">{{ principle.description }}</p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

