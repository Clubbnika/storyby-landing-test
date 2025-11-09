'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { fadeInUp } from '@/features/storybywriter-landing/animations/animations';
import { Review } from '@/features/storybywriter-landing/types';

interface ReviewCardProps extends Review {
  index: number;
  isInView: boolean;
}

export default function ReviewCard({ text, author, rating, index, isInView }: ReviewCardProps) {
  return (
    <motion.div
      {...fadeInUp}
      animate={isInView ? fadeInUp.animate : fadeInUp.initial}
      transition={{ ...fadeInUp.transition, delay: index * 0.15 }}
      className="flex flex-col bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-lg"
    >
      <Quote className="w-8 h-8 text-white/30 mb-4" />

      <p className="text-sm text-white/80 leading-relaxed flex-1 mb-4">
        {text}
      </p>

      <div className="flex gap-1 mb-3">
        {Array.from({ length: rating }, (_, i) => (
          <Star
            key={i}
            className="w-4 h-4 fill-yellow-500 text-yellow-500"
          />
        ))}
      </div>

      <p className="text-xs text-white/60 font-medium">
        {author}
      </p>
    </motion.div>
  );
}