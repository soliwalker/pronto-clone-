import { LucideIcon } from 'lucide-react';

export interface ServiceCategory {
  id: string;
  name: string;
  icon: LucideIcon;
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  imageUrl: string;
  rating: number;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}