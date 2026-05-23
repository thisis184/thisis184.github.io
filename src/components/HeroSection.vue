<template>
  <section
    id="top"
    class="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_20%_15%,rgba(34,211,238,0.16),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(244,114,182,0.09),transparent_30%),linear-gradient(180deg,#020617_0%,#08111f_52%,#020617_100%)]"
  >
    <div class="absolute inset-0 bg-grid opacity-35" aria-hidden="true"></div>
    <div class="relative mx-auto grid min-h-[calc(100vh-65px)] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.04fr_0.96fr]">
      <div class="max-w-3xl">
        <p class="mb-5 text-sm font-medium uppercase tracking-[0.28em] text-cyan-300">
          Software Engineer · Product Builder · Technical Explorer
        </p>
        <h1 class="text-4xl font-semibold leading-tight text-white sm:text-6xl">
          Building software systems, interactive experiences, and developer workflows.
        </h1>
        <p class="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          This is Austin Wu's public technical base: a focused archive for engineering projects,
          architecture notes, game experiments, and intentional AI-assisted development.
        </p>
        <div class="mt-9 flex flex-wrap gap-3">
          <a class="button-primary" href="#projects">View Projects</a>
          <a class="button-secondary" href="#notes">Read Notes</a>
        </div>
      </div>

      <div class="relative">
        <div class="absolute -inset-6 rounded-full bg-cyan-400/10 blur-3xl" aria-hidden="true"></div>
        <div class="relative overflow-hidden rounded-lg border border-white/12 bg-slate-950/80 shadow-2xl shadow-cyan-950/30">
          <div class="flex items-center gap-2 border-b border-white/10 px-4 py-3">
            <span class="size-2.5 rounded-full bg-rose-400"></span>
            <span class="size-2.5 rounded-full bg-amber-300"></span>
            <span class="size-2.5 rounded-full bg-emerald-400"></span>
            <span class="ml-3 text-xs text-slate-400">technical-base.config.ts</span>
          </div>
          <div class="space-y-5 p-5 font-mono text-sm leading-6 text-slate-300 sm:p-6">
            <p><span class="text-cyan-300">identity</span>: 'senior engineer with product instinct'</p>
            <p><span class="text-emerald-300">focus</span>: ['Flutter', 'Vue', 'Firebase', 'AI workflows']</p>
            <p><span class="text-amber-300">lab</span>: ['Flame mechanics', 'Rive motion', 'Codex systems']</p>
            <div class="grid gap-3 pt-2 sm:grid-cols-3">
              <div class="metric-tile">
                <span>Systems</span>
                <strong>Clear</strong>
              </div>
              <div class="metric-tile">
                <span>Design</span>
                <strong>Human</strong>
              </div>
              <div class="metric-tile">
                <span>Process</span>
                <strong>Auditable</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

