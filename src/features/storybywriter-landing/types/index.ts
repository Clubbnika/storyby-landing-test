import { LucideIcon } from 'lucide-react';

export interface Benefit {
  title: string;
  text: string;
  Icon: LucideIcon;
}

export interface Review {
  text: string;
  author: string;
  rating: number;
}

export interface FooterLink {
  href: string;
  label: string;
  external?: boolean;
  tel?: boolean;
}