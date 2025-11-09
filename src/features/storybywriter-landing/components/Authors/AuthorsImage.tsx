'use client';

import { motion } from 'framer-motion';
import { fadeInLeft } from '@/features/storybywriter-landing/animations/animations';

interface AuthorsImageProps {
  isInView: boolean;
}

export default function AuthorsImage({ isInView }: AuthorsImageProps) {
  return (
    <motion.div
      {...fadeInLeft}
      animate={isInView ? fadeInLeft.animate : fadeInLeft.initial}
      transition={{ ...fadeInLeft.transition, delay: 0.2 }}
      className="flex justify-center w-full md:w-auto"
    >
      <div className="relative">
        <div
          className="bg-white p-3 pt-7 pb-16 shadow-2xl"
          style={{ maxWidth: '380px', width: '100%' }}
        >
          <div className="relative -mt-4">
            <img
              src="/authors.webp"
              alt="Authors on StorybyWriter"
              className="w-full h-auto max-h-60 sm:max-h-72 md:max-h-80 object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}