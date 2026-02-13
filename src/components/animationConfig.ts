import type { Transition, Variants } from 'framer-motion';

export const easing = [0.4, 0, 0.2, 1] as const;

export const pageTransition: Transition = {
  duration: 0.5,
  ease: easing,
};

export const pageVariants: Variants = {
  initial: { 
    opacity: 0, 
    y: 20,
    scale: 0.98
  },
  animate: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: easing,
    }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    scale: 0.98,
    transition: {
      duration: 0.3,
      ease: easing,
    }
  },
};

export const sectionVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 40 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: easing,
      staggerChildren: 0.1,
    },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easing,
    },
  },
};

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: easing,
    },
  },
};

export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: easing,
    },
  },
};

export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: easing,
    },
  },
};

export const hoverLift = {
  y: -6,
  scale: 1.02,
  boxShadow: '0px 20px 50px rgba(199, 145, 82, 0.15)',
  transition: { 
    duration: 0.3, 
    ease: easing 
  },
};

export const hoverGlow = {
  boxShadow: '0 0 30px rgba(199, 145, 82, 0.3)',
  borderColor: 'rgba(199, 145, 82, 0.5)',
  transition: { 
    duration: 0.3, 
    ease: easing 
  },
};

export const pulseAnimation: Variants = {
  initial: { scale: 1 },
  pulse: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const rotateIn: Variants = {
  hidden: {
    opacity: 0,
    rotate: -5,
  },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

// Image reveal animation
export const imageReveal: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.1,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: easing,
    },
  },
};

// Stagger grid items
export const gridItemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: easing,
    },
  },
};

// Button tap animation
export const buttonTap = {
  scale: 0.95,
  transition: {
    duration: 0.1,
  },
};

// Drawer/Modal animations
export const drawerVariants: Variants = {
  hidden: {
    x: '100%',
    transition: {
      duration: 0.3,
      ease: easing,
    },
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.3,
      ease: easing,
    },
  },
};

export const overlayVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

// Counter animation helper
export const counterAnimation = (from: number, to: number) => ({
  initial: from,
  animate: to,
  transition: {
    duration: 2,
    ease: "easeOut",
  },
});
