'use client';

import Link from 'next/link';
import { LEGAL_LINKS } from '@/data/footerLinks';

export default function LegalLinks() {
  return (
    <div className="flex justify-center gap-6 text-xs text-white/50 mb-5 flex-wrap">
      {LEGAL_LINKS.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`
            hover:text-white/80 transition
            ${link.tel ? 'font-medium' : ''}
          `.trim()}
          {...(link.tel ? { 'aria-label': 'Contact us by phone' } : {})}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}