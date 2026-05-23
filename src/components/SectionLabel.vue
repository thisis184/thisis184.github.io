<script setup lang="ts">
defineProps<{
  eyebrow: string;
  title: string;
  description: string;
}>();
</script>

<template>
  <div class="mb-10 max-w-3xl">
    <p class="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
      {{ eyebrow }}
    </p>
    <h2 class="text-3xl font-semibold text-white sm:text-4xl">{{ title }}</h2>
    <p class="mt-4 text-base leading-7 text-slate-300 sm:text-lg">{{ description }}</p>
  </div>
</template>

