'use client';

import { Github, Instagram, Linkedin } from 'lucide-react';
import { SOCIAL_LINKS } from '@/data/footerLinks';

const iconMap = {
  LinkedIn: Linkedin,
  Instagram: Instagram,
  GitHub: Github,
};

export default function SocialLinks() {
  return (
    <div className="flex justify-center gap-5">
      {SOCIAL_LINKS.map((link) => {
        const Icon = iconMap[link.label as keyof typeof iconMap];
        return (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="text-white/40 hover:text-white transition"
          >
            <Icon size={20} strokeWidth={1.5} />
          </a>
        );
      })}
    </div>
  );
}