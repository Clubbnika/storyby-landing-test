'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import AuthorsImage from './AuthorsImage';
import AuthorsText from './AuthorsText';

export default function Authors() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-t from-black to-black/50 min-h-screen"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-3xl md:text-4xl font-bold text-white mb-12 text-center font-serif"
      >
        Authors
      </motion.h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 px-4 max-w-5xl mx-auto">
        <AuthorsImage isInView={isInView} />
        <AuthorsText isInView={isInView} />
      </div>
    </section>
  );
}