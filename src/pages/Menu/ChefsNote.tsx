import { Quote } from 'lucide-react';
import { motion, useReducedMotion, type Variants } from 'motion/react';

export function ChefsNote() {
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
    <section aria-labelledby="chefs-note-heading" className="relative overflow-hidden bg-surface/40 py-20 lg:py-28 border-y border-border/80">
      {/* Subtle decorative glow in background */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[90px]" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={container}
        className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8"
      >
        <motion.div variants={item} className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
          <Quote size={20} className="fill-primary text-primary" />
        </motion.div>

        <motion.p variants={item} className="mb-4 font-sans text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-primary">
          From Our Executive Chef
        </motion.p>

        <motion.h2
          id="chefs-note-heading"
          variants={item}
          className="font-display text-2xl sm:text-3xl lg:text-4xl leading-relaxed text-foreground font-normal italic"
        >
          &ldquo;We don&apos;t construct menus around fleeting trends. We curate them around seasonal ingredients worth waiting for and timeless recipes perfected over flame.&rdquo;
        </motion.h2>

        <motion.div variants={item} className="mx-auto mt-8 flex items-center justify-center gap-3">
          <div className="h-px w-10 bg-primary/40" aria-hidden="true" />
          <span className="font-script text-2xl sm:text-3xl text-primary">Ember &amp; Oak Kitchen</span>
          <div className="h-px w-10 bg-primary/40" aria-hidden="true" />
        </motion.div>

        <motion.p variants={item} className="mt-2 font-sans text-xs tracking-wider uppercase text-muted">
          Master Culinary Atelier
        </motion.p>
      </motion.div>
    </section>
  );
}