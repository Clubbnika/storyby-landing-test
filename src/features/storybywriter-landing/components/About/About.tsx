'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import BenefitCard from './BenefitCard';
import { ABOUT_BENEFITS } from '@/data/aboutBenefits';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-150px' });

  return (
    <section
      ref={ref}
      className="min-h-screen py-12 px-6 bg-black flex flex-col justify-center"
    >
      <div className="max-w-4xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-xl md:text-4xl font-bold text-center text-white mb-12 font-serif"
        >
          Why Choose StorybyWriter?
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.4,
              },
            },
          }}
        >
          {ABOUT_BENEFITS.map((benefit, index) => (
            <BenefitCard
              key={index}
              {...benefit}
              index={index}
              isInView={isInView}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}