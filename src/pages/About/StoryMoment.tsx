import { motion, useReducedMotion, type Variants } from 'motion/react';

const IMAGE =
  'https://images.unsplash.com/photo-1519690889869-e705e59f72e1?auto=format&fit=crop&w=1600&q=80';

export function StoryMoment() {
  const prefersReducedMotion = useReducedMotion();
  const item: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 14 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section aria-labelledby="story-moment-heading" className="relative overflow-hidden">
      <div className="relative h-[46vh] w-full sm:h-[52vh]">
        <img
          src={IMAGE}
          alt="Table set for an evening meal, glasses catching candlelight"
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgb(var(--hero-scrim) / 0.7) 0%, rgb(var(--hero-scrim) / 0.15) 55%, transparent 100%)',
          }}
        />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={item}
        className="absolute inset-x-0 bottom-0 px-4 pb-10 sm:px-6 sm:pb-14 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <p className="mb-2 font-sans text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Around the Table
          </p>
          <h2 id="story-moment-heading" className="max-w-md font-display text-2xl leading-snug text-foreground sm:text-3xl">
            Good food has a way of bringing people closer.
          </h2>
        </div>
      </motion.div>
    </section>
  );
}