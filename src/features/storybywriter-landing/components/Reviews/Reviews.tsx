'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ReviewCard from './ReviewCard';
import { REVIEWS_CONTENT } from '@/data/reviewsContent';
import { fadeInTitle } from '@/features/storybywriter-landing/animations/animations';

export default function Reviews() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

  return (
    <section ref={ref} className="pb-16 px-6 bg-black">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          {...fadeInTitle}
          animate={isInView ? fadeInTitle.animate : fadeInTitle.initial}
          className="text-2xl md:text-3xl font-bold text-center text-white mb-12 font-serif"
        >
          What Authors Say
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {REVIEWS_CONTENT.map((review, index) => (
            <ReviewCard
              key={index}
              {...review}
              index={index}
              isInView={isInView}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}