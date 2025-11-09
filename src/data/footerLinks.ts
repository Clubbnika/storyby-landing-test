import { FooterLink } from '@/features/storybywriter-landing/types';

export const LEGAL_LINKS: FooterLink[] = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
  { href: 'tel:+380506258262', label: 'Contact', tel: true },
];

export const SOCIAL_LINKS: FooterLink[] = [
  {
    href: 'https://www.linkedin.com/in/veronika-okhten-a75098300/',
    label: 'LinkedIn',
    external: true,
  },
  {
    href: 'https://www.instagram.com/clubbnika/',
    label: 'Instagram',
    external: true,
  },
  {
    href: 'https://github.com/Clubbnika',
    label: 'GitHub',
    external: true,
  },
];