<script setup lang="ts">
import AboutDeveloper from './components/AboutDeveloper.vue';
import AIWorkflow from './components/AIWorkflow.vue';
import FeaturedProjects from './components/FeaturedProjects.vue';
import HeroSection from './components/HeroSection.vue';
import LabExperiments from './components/LabExperiments.vue';
import SiteFooter from './components/SiteFooter.vue';
import SiteHeader from './components/SiteHeader.vue';
import TechnicalNotes from './components/TechnicalNotes.vue';
</script>

<template>
  <div class="min-h-screen bg-site text-slate-100">
    <SiteHeader />
    <main>
      <HeroSection />
      <FeaturedProjects />
      <TechnicalNotes />
      <AIWorkflow />
      <LabExperiments />
      <AboutDeveloper />
    </main>
    <SiteFooter />
  </div>
</template>
