'use client';

import { motion } from 'framer-motion';
import { useFacebookPixel } from '@/shared/hooks/useFacebookPixel';
import ContactModal from './ContactModal';
import { useState } from 'react';

export default function HeroContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  useFacebookPixel();

  const handleBecomeAuthorClick = () => {
    if (window.fbq) {
      window.fbq('track', 'Lead');
    }
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="flex items-center justify-center px-6">
        <div className="flex flex-col items-center text-center max-w-[700px] w-full space-y-6">
          <p className="text-sm text-white leading-relaxed p-2">
            StorybyWriter is a powerful all-in-one publishing platform for writers to create, share, and earn from their stories, whether they be novels, scripts, or more. With more than 28 000 authors, StorybyWriter helps authors get initial audience, feedback, and suggestions from readers all over the world.
          </p>

          <motion.button
            onClick={handleBecomeAuthorClick}
            className="backdrop-blur-xl border border-white/30 bg-white/20 text-white font-bold rounded-2xl px-8 py-3 shadow-md cursor-pointer"
            whileHover={{
              scale: 1.08,
              backgroundColor: 'rgba(255, 255, 255, 0.25)',
              boxShadow: '0 8px 25px rgba(255, 255, 255, 0.15)',
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            BECOME AN AUTHOR
          </motion.button>
        </div>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}