import type { AIWorkflowTopic, WorldviewPrinciple } from '../types/site';

export const aiWorkflowTopics: AIWorkflowTopic[] = [
  {
    title: 'Human + AI Collaboration',
    focus: 'Shared agency',
    description:
      'A working model where human judgment sets direction, taste, ethics, and product intent while AI accelerates exploration, implementation, and review.',
  },
  {
    title: 'Codex Workflow',
    focus: 'Repository-aware execution',
    description:
      'Using AGENTS.md, staged commits, local verification, and reviewable diffs to turn AI assistance into a traceable engineering process.',
  },
  {
    title: 'AI Architecture Experiments',
    focus: 'System design',
    description:
      'Testing how agents can help reason about module boundaries, data flow, product constraints, and long-term maintainability before code hardens.',
  },
  {
    title: 'Context Engineering',
    focus: 'Working memory design',
    description:
      'Designing project instructions, task framing, memory, examples, and evaluation checkpoints so AI tools understand the product world more precisely.',
  },
  {
    title: 'AI-Assisted Game Systems',
    focus: 'Playable systems',
    description:
      'Exploring how AI can support game-loop iteration, board logic, balancing notes, level ideas, and feedback systems without replacing design taste.',
  },
  {
    title: 'AI-Driven Rapid Prototyping',
    focus: 'Idea to artifact',
    description:
      'Compressing the distance from concept to usable prototype while keeping architecture, version control, and product intention visible.',
  },
];

export const worldviewPrinciples: WorldviewPrinciple[] = [
  {
    title: 'Software as a living archive',
    description:
      'Projects are treated as evolving records of decisions, experiments, constraints, and identity rather than isolated deliverables.',
  },
  {
    title: 'Tools that shape the builder',
    description:
      'The workflow is designed to change how the creator thinks: clearer context, stronger feedback loops, and more intentional momentum.',
  },
  {
    title: 'Technical systems with emotional gravity',
    description:
      'Engineering decisions should still carry human texture: calm interfaces, meaningful interaction, and products that respect attention.',
  },
];

