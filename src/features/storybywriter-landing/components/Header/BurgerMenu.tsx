'use client';

import { useState } from 'react';

interface BurgerMenuProps {
  scrollTo: (id: string) => void;
}

export default function BurgerMenu({ scrollTo }: BurgerMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (id: string) => {
    scrollTo(id);
    setIsOpen(false);
  };

  return (
    <div className="relative md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col justify-center items-center w-8 h-8 space-y-1 focus:outline-none"
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
            isOpen ? 'rotate-45 translate-y-1.5' : ''
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${
            isOpen ? 'opacity-0' : ''
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
            isOpen ? '-rotate-45 -translate-y-1.5' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-black/90 backdrop-blur-md border border-white/10 shadow-lg overflow-hidden">
          <div className="flex flex-col p-2">
            <button
              onClick={() => handleClick('home')}
              className="text-white text-left px-4 py-2 hover:bg-white/10 rounded transition"
            >
              Home
            </button>
            <button
              onClick={() => handleClick('about')}
              className="text-white text-left px-4 py-2 hover:bg-white/10 rounded transition"
            >
              About us
            </button>
            <button
              onClick={() => handleClick('authors')}
              className="text-white text-left px-4 py-2 hover:bg-white/10 rounded transition"
            >
              Authors
            </button>
            <button
              onClick={() => handleClick('reviews')}
              className="text-white text-left px-4 py-2 hover:bg-white/10 rounded transition"
            >
              Reviews
            </button>
          </div>
        </div>
      )}
    </div>
  );
}