'use client';

import { motion } from 'framer-motion';
import { Benefit } from '@/features/storybywriter-landing/types';

interface BenefitCardProps extends Benefit {
  index: number;
  isInView: boolean;
}

export default function BenefitCard({ title, text, Icon, index, isInView }: BenefitCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{
        duration: 1,
        delay: index * 0.4,
        ease: [0.3, 0.5, 0.51, 0.1],
      }}
      className="flex flex-col items-center text-center p-4"
    >
      <div className="mb-3 text-white">
        <Icon size={50} strokeWidth={1.5} />
      </div>

      <h3 className="text-lg font-semibold text-white mb-1 font-serif">
        {title}
      </h3>
      <p className="text-xs text-white/60 leading-relaxed">
        {text}
      </p>
    </motion.div>
  );
}