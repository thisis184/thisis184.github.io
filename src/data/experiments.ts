import type { Experiment } from '../types/site';

export const experiments: Experiment[] = [
  {
    title: 'Flame Collision Sandbox',
    status: 'planned',
    description:
      'A small testbed for validating collision boundaries, drag behavior, and board placement feedback.',
    tags: ['Flame', 'Flutter', 'Game Logic'],
  },
  {
    title: 'Rive Micro-Interaction Tests',
    status: 'active',
    description:
      'Motion studies for emotional feedback, lightweight rewards, and state transitions in mobile UI.',
    tags: ['Rive', 'Animation', 'UX'],
  },
  {
    title: 'Tiled Map Prototype',
    status: 'planned',
    description:
      'A focused exploration of map import workflow, collision layers, and scene composition for 2D games.',
    tags: ['Tiled', 'Flame', 'Level Design'],
  },
  {
    title: 'Agent Prompt Checkpoints',
    status: 'active',
    description:
      'A repository workflow for turning Codex instructions into staged, reviewable engineering progress.',
    tags: ['Codex', 'Git', 'Workflow'],
  },
];

