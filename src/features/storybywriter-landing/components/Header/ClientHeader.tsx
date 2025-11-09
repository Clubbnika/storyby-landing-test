'use client';

import Link from 'next/link';
import BurgerMenu from './BurgerMenu';

export default function ClientHeader() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed inset-x-0 top-0 bg-black/80 backdrop-blur-md z-50 border-b border-white/10">
      <nav className="flex justify-between items-center h-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <Link href="/" className="text-white font-bold text-xl hover:opacity-80 transition font-serif whitespace-nowrap">
          StorybyWriter
        </Link>

        <div className="hidden md:flex items-center space-x-6 flex-shrink-0">
          {['home', 'about', 'authors', 'reviews'].map((section) => (
            <button
              key={section}
              onClick={() => scrollTo(section)}
              className="text-white hover:text-gray-300 transition whitespace-nowrap"
            >
              {section === 'home' ? 'Home' : section === 'about' ? 'About us' : section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>

        <BurgerMenu scrollTo={scrollTo} />
      </nav>
    </header>
  );
}