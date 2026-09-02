import { motion, useReducedMotion, type Variants } from 'motion/react';

const IMAGE =
  'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80';

export function TheWayWeCook() {
  const prefersReducedMotion = useReducedMotion();
  const item: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
  };
  const imageVariant: Variants = {
    hidden: { opacity: 0, scale: prefersReducedMotion ? 1 : 1.03 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  return (
    <section aria-labelledby="cook-heading" className="border-t border-border bg-surface py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={imageVariant}
            className="relative aspect-[4/5] overflow-hidden rounded-xl border border-border lg:order-2 lg:aspect-[3/4]"
          >
            <img
              src={IMAGE}
              alt="Chef searing a dish over an open flame"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={item}
            className="lg:order-1"
          >
            <p className="mb-4 font-sans text-sm font-medium uppercase tracking-[0.2em] text-primary">
              The Way We Cook
            </p>
            <h2 id="cook-heading" className="font-display text-3xl leading-tight text-foreground sm:text-4xl">
              Fire, patience, and a light hand.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
              We cook the way we'd want to eat — with real heat, a little patience, and just
              enough restraint to let each ingredient hold its own. Texture matters as much as
              flavor, and balance matters more than either.
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
              Every dish is built the same way: start simple, taste often, and stop before it
              needs anything more.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}