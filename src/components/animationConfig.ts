import type { Transition, Variants } from 'framer-motion';

export const easing = 'easeOut' as const;

export const pageTransition: Transition = {
  duration: 0.6,
  ease: easing,
};

export const pageVariants: Variants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -16 },
};

export const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: easing },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

export const hoverLift = {
  y: -4,
  scale: 1.03,
  boxShadow: '0px 20px 50px rgba(0,0,0,0.28)',
  transition: { duration: 0.25, ease: easing },
};
