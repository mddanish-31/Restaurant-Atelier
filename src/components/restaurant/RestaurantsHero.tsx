import { motion, useReducedMotion, type Variants } from 'motion/react';

export function RestaurantsHero() {
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
    <section className="border-b border-border bg-surface px-4 py-16 pt-28 sm:px-6 sm:py-20 sm:pt-32 lg:px-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="mx-auto max-w-3xl text-center"
      >
        <motion.p
          variants={item}
          className="mb-3 font-sans text-sm font-medium uppercase tracking-[0.2em] text-primary"
        >
          Discover Your Next Table
        </motion.p>
        <motion.h1 variants={item} className="font-display text-3xl text-foreground sm:text-4xl">
          Restaurants worth knowing.
        </motion.h1>
        <motion.p variants={item} className="mx-auto mt-3 max-w-xl text-muted">
          From neighborhood favorites to destination-worthy kitchens, curated across the city.
        </motion.p>
      </motion.div>
    </section>
  );
}