export interface Hotspot {
  id: string;
  name: string;
  description: string;
  x: number; // Percentage from left
  y: number; // Percentage from top
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export interface Quest {
  id: string;
  title: string;
  role: string;
  company: string;
  description: string;
  status: 'active' | 'completed';
}

export interface Quote {
  text: string;
  author: string;
}