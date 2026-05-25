export interface Project {
  name: string;
  description: string;
  technologies: string[];
  challenge: string;
  architecture: string;
  repositoryUrl?: string;
  demoUrl?: string;
}

export interface NoteTopic {
  title: string;
  category: string;
  summary: string;
}

export interface AIWorkflowTopic {
  title: string;
  focus: string;
  description: string;
}

export interface WorldviewPrinciple {
  title: string;
  description: string;
}

export interface Experiment {
  title: string;
  status: 'planned' | 'active' | 'archived';
  description: string;
  tags: string[];
}

export interface SiteLink {
  label: string;
  href: string;
  description: string;
}
