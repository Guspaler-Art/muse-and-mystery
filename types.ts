export type ViewState = 
  | 'branding' 
  | 'strategy' 
  | 'profile' 
  | 'pricing' 
  | 'marketing' 
  | 'calendar' 
  | 'gear';

export interface CalendarDay {
  day: number;
  title: string;
  type: 'Gratis' | 'Premium';
  description: string;
  copy: string;
}

export interface ShoppingItem {
  category: string;
  items: { name: string; price: string; tip: string }[];
}

export interface BrandProfile {
  name: string;
  tagline: string;
  description: string;
  colors: string[];
  vibe: string[];
}
