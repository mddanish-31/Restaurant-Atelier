import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion, useReducedMotion, type Variants } from 'motion/react';

export function FinalCta() {
  const prefersReducedMotion = useReducedMotion();
  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: prefersReducedMotion ? 0 : 0.1 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 14 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section aria-labelledby="menu-final-cta-heading" className="relative overflow-hidden border-t border-border/80 bg-surface/60 py-20 lg:py-28">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[100px]" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        variants={container}
        className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 text-center sm:px-6 lg:px-8"
      >
        <motion.div variants={item} className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-primary backdrop-blur-sm">
          <Sparkles size={12} className="text-primary" />
          <span>Reserve Your Experience</span>
        </motion.div>

        <motion.h2 id="menu-final-cta-heading" variants={item} className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground font-medium">
          A table worth remembering.
        </motion.h2>

        <motion.p variants={item} className="max-w-md text-sm sm:text-base text-muted leading-relaxed">
          Join us for an unforgettable evening of artful gastronomy, warm ambiance, and exceptional hospitality.
        </motion.p>

        <motion.div variants={item} className="mt-4">
          <Link
            to="/restaurants"
            className="group inline-flex items-center gap-2.5 rounded-full bg-primary px-8 py-3.5 font-sans text-sm font-semibold tracking-wide text-primary-foreground shadow-lift transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(196,154,82,0.35)] focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
          >
            <span>Reserve a Table</span>
            <ArrowRight size={16} strokeWidth={2} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}