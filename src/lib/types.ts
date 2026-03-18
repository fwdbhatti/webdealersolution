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

export interface PainPoint {
  icon: string;
  headline: string;
  description: string;
  resolution: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  initials: string;
}
