import { Link } from 'react-router-dom';
import { motion, useReducedMotion, type Variants } from 'motion/react';
import { ArrowRight, UtensilsCrossed } from 'lucide-react';

export function FinalCtaSection() {
  const prefersReducedMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: prefersReducedMotion ? 0 : 0.1 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 14 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section className="border-t border-border bg-surface py-16 lg:py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={container}
        className="mx-auto flex max-w-2xl flex-col items-center px-4 text-center sm:px-6"
      >
        <motion.p
          variants={item}
          className="mb-3 font-sans text-sm font-medium uppercase tracking-[0.2em] text-primary"
        >
          Ready When You Are
        </motion.p>
        <motion.h2 variants={item} className="font-display text-3xl text-foreground sm:text-4xl">
          Good food is closer than you think.
        </motion.h2>
        <motion.p variants={item} className="mt-3 max-w-md text-muted">
          Explore restaurants, browse menus, and find somewhere worth staying awhile.
        </motion.p>

        <motion.div variants={item} className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/restaurants"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-sans text-sm font-medium tracking-wide text-primary-foreground shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lift hover:brightness-105 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
          >
            Explore Restaurants
            <ArrowRight size={16} strokeWidth={1.75} />
          </Link>
          <Link
            to="/menu"
            className="bg-glass inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 font-sans text-sm font-medium tracking-wide text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
          >
            <UtensilsCrossed size={16} strokeWidth={1.75} />
            Browse Menu
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}