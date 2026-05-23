# Austin Wu Technical Lab

This repository powers Austin Wu's GitHub Pages personal technical site.

It is a public technical base for engineering projects, developer notes, technical experiments, and AI-assisted coding workflows. It is intentionally separate from the main personal website, which can focus more on identity, world-building, philosophy, and creative digital presence.

## Stack

- Vue 3
- TypeScript
- Vite
- Tailwind CSS
- GitHub Pages

## Development

Install dependencies:

```bash
npm install
```

Start the local dev server:

```bash
npm run dev
```

Build the static site:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Content Structure

Homepage content is currently managed with typed local data files:

- `src/data/projects.ts`
- `src/data/notes.ts`
- `src/data/experiments.ts`
- `src/data/links.ts`

The first version stays intentionally simple. If the notes archive grows, the site can later evolve toward Markdown, VitePress, Astro, or another content-focused layer.

## Deployment

GitHub Actions builds the Vite site and deploys the `dist` output to GitHub Pages when changes are pushed to `main`.

