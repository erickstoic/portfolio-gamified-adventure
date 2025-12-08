import React from 'react';
import { Hotspot, SkillCategory, Quest, Quote } from './types';
import { Sword, Brain, Gem, Bot, MapPin, Scroll, Users, Shield } from 'lucide-react';

export const HOTSPOTS: Hotspot[] = [
  {
    id: 'citadel',
    name: 'The Agile Citadel (Nubank)',
    description: 'Reduced Cycle Time from 45d to 15d. Optimized delivery for Fixed Income Investment portfolios ($B AUM).',
    x: 48,
    y: 28, // Aligns with "Agile Development Citadel" (Top Center)
  },
  {
    id: 'dungeon',
    name: 'The Efficiency Maze (PagSeguro)',
    description: 'Reduced Lead Time from 20 days to 5 minutes. Facilitated 21 Workshops for 500+ staff.',
    x: 22,
    y: 62, // Aligns with "The Methodologist's Maze" (Bottom Left)
  },
  {
    id: 'tower',
    name: 'The Energy Citadel (Novobanco)',
    description: 'Mentoring Product Owners in Wealth Management & Financial Crime. Streamlining KYC & Onboarding flows.',
    x: 80,
    y: 68, // Aligns with "The Energy Management Citadel" (Bottom Right)
  },
  {
    id: 'shrine',
    name: 'The Coding Cove (Side Project)',
    description: 'Founder of The Sustainable Productivity Method. Expert in Energy Management & Async Work.',
    x: 78,
    y: 25, // Aligns with "AI Vibe Coding Cove" (Top Right)
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