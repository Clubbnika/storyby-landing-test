import type { Easing } from 'framer-motion';

const easeOut: Easing = 'easeOut';

export const fadeInLeft = {
  initial: { opacity: 0, x: -50, scale: 0.95 },
  animate: { opacity: 1, x: 0, scale: 1 },
  transition: { duration: 0.7, ease: easeOut },
};

export const fadeInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.7, ease: easeOut },
};

export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: easeOut },
};

export const fadeInTitle = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: easeOut },
};