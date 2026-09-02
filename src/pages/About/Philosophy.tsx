import { motion, useReducedMotion, type Variants } from 'motion/react';

export function Philosophy() {
  const prefersReducedMotion = useReducedMotion();
  const item: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
  };

  return (
    <section aria-labelledby="philosophy-heading" className="bg-background py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={item}
          >
            <p className="mb-4 font-sans text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Our Philosophy
            </p>
            <h2 id="philosophy-heading" className="font-display text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl">
              Good food begins with good ingredients.
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={item}
            transition={{ delay: prefersReducedMotion ? 0 : 0.1 }}
            className="flex flex-col justify-center gap-5"
          >
            <p className="text-base leading-relaxed text-muted">
              We start with what's in season and build outward from there, letting flavor and
              texture lead every decision. Nothing is dressed up to hide what it is — the plate
              stays honest, and the ingredient stays the point.
            </p>
            <p className="text-sm leading-relaxed text-muted">
              It's a simple idea, but it shapes everything: how a dish is planned, how it's
              cooked, and how it arrives at your table.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}