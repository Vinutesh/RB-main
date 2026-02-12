import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { sectionVariants, staggerContainer } from './animationConfig';

interface RevealSectionProps {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
}

export function RevealSection({ children, className, stagger = false }: RevealSectionProps) {
  return (
    <motion.section
      className={className}
      variants={stagger ? staggerContainer : sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.section>
  );
}
