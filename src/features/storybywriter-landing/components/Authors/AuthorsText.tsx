'use client';

import { motion } from 'framer-motion';
import { fadeInUp, fadeInRight } from '@/features/storybywriter-landing/animations/animations';
import { AUTHORS_CONTENT } from '@/data/authorsContent';

interface AuthorsTextProps {
  isInView: boolean;
}

export default function AuthorsText({ isInView }: AuthorsTextProps) {
  return (
    <motion.div
      {...fadeInRight}
      animate={isInView ? fadeInRight.animate : fadeInRight.initial}
      transition={{ ...fadeInRight.transition, delay: 0.4 }}
      className="max-w-md text-center md:text-left space-y-4"
    >
      {AUTHORS_CONTENT.map((item, i) => (
        <motion.p
          key={i}
          {...fadeInUp}
          animate={isInView ? fadeInUp.animate : fadeInUp.initial}
          transition={{ ...fadeInUp.transition, delay: 0.5 + i * 0.1 }}
          className="text-sm md:text-lg text-white leading-relaxed"
        >
          {item.text}
        </motion.p>
      ))}
    </motion.div>
  );
}