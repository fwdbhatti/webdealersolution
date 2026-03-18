export interface NavLink {
  label: string;
  href: string;
}

export interface NavGroup {
  label: string;
  items: NavLink[];
}

export type NavEntry = NavLink | NavGroup;

export function isNavGroup(entry: NavEntry): entry is NavGroup {
  return "items" in entry;
}

export interface ComparisonRow {
  feature: string;
  humanAgent: string | boolean;
  aiChatbot: string | boolean;
}

export interface TrustGapCard {
  icon: string;
  title: string;
  stat: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
}

export interface IndustryTab {
  id: string;
  label: string;
  headline: string;
  description: string;
  painPoints: string[];
  solutions: string[];
  clientName?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}
