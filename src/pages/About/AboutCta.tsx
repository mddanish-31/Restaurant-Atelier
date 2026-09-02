import { Link } from 'react-router-dom';
import { motion, useReducedMotion, type Variants } from 'motion/react';

export function AboutCta() {
  const prefersReducedMotion = useReducedMotion();
  const container: Variants = { hidden: {}, visible: { transition: { staggerChildren: prefersReducedMotion ? 0 : 0.1 } } };
  const item: Variants = { hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } };

  return (
    <section aria-labelledby="about-cta-heading" className="border-t border-border bg-background py-16 lg:py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        variants={container}
        className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 text-center sm:px-6 lg:px-8"
      >
        <motion.h2 id="about-cta-heading" variants={item} className="font-display text-3xl text-foreground sm:text-4xl">
          Find a table worth remembering.
        </motion.h2>
        <motion.p variants={item} className="max-w-md text-muted">
          Explore the restaurants, discover the menu and find somewhere new to linger.
        </motion.p>
        <motion.div variants={item} className="mt-2 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/restaurants"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-sans text-sm font-medium text-primary-foreground transition-opacity duration-200 hover:opacity-90 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
          >
            Explore Restaurants
          </Link>
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-sans text-sm font-medium text-foreground transition-colors duration-200 hover:border-primary/50 hover:text-primary focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
          >
            Explore Menu
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}