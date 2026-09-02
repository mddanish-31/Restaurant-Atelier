import { motion, useReducedMotion, type Variants } from 'motion/react';

const IMAGE =
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80';

export function TheExperience() {
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
    <section aria-labelledby="experience-heading" className="bg-background py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={imageVariant}
            className="relative aspect-[4/5] overflow-hidden rounded-xl border border-border lg:aspect-square"
          >
            <img
              src={IMAGE}
              alt="Friends sharing a warm evening meal together"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={item}
          >
            <p className="mb-4 font-sans text-sm font-medium uppercase tracking-[0.2em] text-primary">
              The Experience
            </p>
            <h2 id="experience-heading" className="font-display text-3xl leading-tight text-foreground sm:text-4xl">
              More than what's on the plate.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
              A meal is never just the food. It's the conversation that runs long, the dish
              passed across the table, the evening that slows down without anyone noticing.
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
              We try to build the room around that — quiet enough to talk, warm enough to stay.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}