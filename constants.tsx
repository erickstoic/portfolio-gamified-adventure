import React from 'react';
import { Hotspot, SkillCategory, Quest, Quote } from './types';
import { Sword, Brain, Gem, Bot, MapPin, Scroll, Users, Shield } from 'lucide-react';

export const HOTSPOTS: Hotspot[] = [
  {
    id: 'citadel',
    name: 'Agile Citadel (Central Hub)',
    description: 'Headquarters for Nubank, Novobanco & GPTW. Scaled agile frameworks and reduced cycle times (45d → 15d) for billion-dollar portfolios.',
    x: 48,
    y: 35, // Central
  },
  {
    id: 'itau',
    name: 'Itaú Tower',
    description: 'Latin America\'s largest bank. Led digital transformation initiatives and optimized delivery value streams for Fixed Income portfolios.',
    x: 44,
    y: 32, // Top-left of Citadel
  },
  {
    id: 'pagseguro',
    name: 'PagSeguro Fortress',
    description: 'The Efficiency Engine. Reduced infrastructure lead time from 20 days to 5 minutes. Facilitated 21 workshops for 500+ staff.',
    x: 52,
    y: 38, // Bottom-right of Citadel
  },
  {
    id: 'maze',
    name: 'Maze & Wilderness',
    description: 'The Public Sector & Consultancy Grind: Iteris, Galp, Everis/NTT, Qualicorp & Brazilian Army. Forged resilience navigating bureaucracy and complex legacy systems.',
    x: 20,
    y: 65, // Left / Wilderness Area
  },
  {
    id: 'cove',
    name: 'Innovation Cove',
    description: 'Side Quests & Impact: Founder of The Sustainable Productivity Method and YourLifeMatters.me. Experimenting with AI, Vibe Coding, and Social Good.',
    x: 75,
    y: 28, // Right / Cove Area
  },
  {
    id: 'ruins',
    name: 'Foundational Ruins',
    description: 'The "Old Ways" left behind: Command & Control, Micro-management, Silos, Ego, and Workaholism. I help teams bury these anti-patterns to build empathy-driven systems.',
    x: 55,
    y: 82, // Bottom / Ruins Area
  },
];

export const INVENTORY: SkillCategory[] = [
  {
    title: 'Agile Tech',
    icon: 'Sword',
    skills: ['Jira', 'Miro', 'Flight Levels', 'Kanban', 'Scrum'],
  },
  {
    title: 'Product Strategy',
    icon: 'Brain',
    skills: ['OKRs', 'KPI Definition', 'Roadmap Execution', 'User Onboarding'],
  },
  {
    title: 'Fintech Mastery',
    icon: 'Gem',
    skills: ['KYC/pKYC', 'Fraud Prevention', 'Wealth Management', 'Compliance'],
  },
  {
    title: 'Future Tech',
    icon: 'Bot',
    skills: ['AI/LLM Integration', 'Vibe Coding', 'Prompt Engineering'],
  },
];

export const QUESTS: Quest[] = [
  {
    id: 'wbrain',
    title: 'Transforming PMO to VMO',
    role: 'Agile Coach & Mentor',
    company: 'wBrain (Client: Novobanco)',
    description: 'Driving customer-centric delivery in banking. Transforming legacy structures into value-driven streams.',
    status: 'active',
  },
  {
    id: 'nubank',
    title: 'Global Internal Audit Planning',
    role: 'Agile Coach',
    company: 'Nubank',
    description: 'Facilitated Global Internal Audit planning. Mitigated regulatory risks via agile workflows in a hyper-growth unicorn.',
    status: 'completed',
  },
  {
    id: 'pagseguro',
    title: 'Infrastructure Optimization',
    role: 'Agile Master',
    company: 'PagSeguro',
    description: 'Infrastructure & Operations optimization. Built the rails for fintech scale, reducing lead times drastically.',
    status: 'completed',
  },
  {
    id: 'gptw',
    title: 'Digital Product Launch',
    role: 'Product Owner',
    company: 'Great Place To Work',
    description: 'Launched GPTW Certification digital product from discovery to MVP.',
    status: 'completed',
  },
];

export const WISDOM: Quote[] = [
  {
    text: "Give a man a fish, and you feed him for a day; teach a man to fish, and you feed him for a lifetime.",
    author: "Ancient Proverb"
  },
  {
    text: "Treat others as you would like to be treated by them.",
    author: "Golden Rule"
  },
  {
    text: "You have power over your mind — not outside events. Realize this, and you will find strength.",
    author: "Marcus Aurelius"
  },
  {
    text: "If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it; and this you have the power to revoke at any moment.",
    author: "Marcus Aurelius"
  }
];

// Helper to render icon by string name
export const IconRenderer = ({ name, className }: { name: string; className?: string }) => {
  switch (name) {
    case 'Sword': return <Sword className={className} />;
    case 'Brain': return <Brain className={className} />;
    case 'Gem': return <Gem className={className} />;
    case 'Bot': return <Bot className={className} />;
    default: return <Sword className={className} />;
  }
};