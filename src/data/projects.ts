import type { Project } from '../types/site';

export const projects: Project[] = [
  {
    name: 'Identity-Driven Productivity App',
    description:
      'A mobile product concept for helping users clarify goals, reduce procrastination, and build identity-level habits.',
    technologies: ['Flutter', 'GetX', 'Firebase', 'Rive'],
    challenge:
      'Designing motivation loops that feel emotionally supportive without becoming noisy or manipulative.',
    architecture:
      'Feature-based Flutter modules with separated controllers, repositories, services, and reusable UI widgets.',
  },
  {
    name: 'Relaxing Block Puzzle Research',
    description:
      'A set of gameplay experiments around calm block placement, scoring rhythm, and readable board feedback.',
    technologies: ['Flutter', 'Flame', 'Dart', 'Game Systems'],
    challenge:
      'Keeping the core loop simple while preserving enough strategic depth for repeat play.',
    architecture:
      'Board state, piece generation, placement validation, scoring, rendering, and input handling are treated as separate concerns.',
  },
  {
    name: 'AI-Assisted Engineering Workflow',
    description:
      'A practical workflow for using Codex, AGENTS.md, and structured commits to move from idea to tested implementation.',
    technologies: ['Codex', 'Git', 'Conventional Commits', 'TypeScript'],
    challenge:
      'Turning AI assistance into an auditable engineering process instead of an unstructured chat transcript.',
    architecture:
      'Repository-local instructions, staged task checkpoints, focused diffs, and reviewable implementation notes.',
  },
];

