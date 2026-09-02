import { motion, useReducedMotion, type Variants } from 'motion/react';

const PRINCIPLES = [
  { number: '01', title: 'Seasonal', description: 'Cook with what feels right for the moment.' },
  { number: '02', title: 'Thoughtful', description: 'Keep the plate considered, never complicated for its own sake.' },
  { number: '03', title: 'Warm', description: 'Make the table feel as welcoming as the food.' },
  { number: '04', title: 'Curious', description: 'Leave room for something unexpected.' },
];

export function Principles() {
  const prefersReducedMotion = useReducedMotion();
  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: prefersReducedMotion ? 0 : 0.08 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 14 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section aria-labelledby="principles-heading" className="border-t border-border bg-surface py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={item}
          className="mb-4 font-sans text-sm font-medium uppercase tracking-[0.2em] text-primary"
        >
          Our Principles
        </motion.p>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={item}
          id="principles-heading"
          className="mb-10 max-w-lg font-display text-3xl leading-tight text-foreground sm:text-4xl lg:mb-14"
        >
          What we hold onto, plate after plate.
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={container}
          className="divide-y divide-border border-t border-border"
        >
          {PRINCIPLES.map((p) => (
            <motion.div
              key={p.number}
              variants={item}
              className="grid grid-cols-[3rem_1fr] items-center gap-4 py-6 transition-colors duration-200 hover:bg-foreground/[0.02] sm:grid-cols-[4rem_1fr_2fr] sm:gap-8 sm:py-6"
            >
              <span className="font-display text-xl text-primary sm:text-2xl">{p.number}</span>
              <h3 className="font-display text-xl text-foreground sm:text-2xl">{p.title}</h3>
              <p className="col-span-2 mt-1 text-sm leading-relaxed text-muted sm:col-span-1 sm:mt-0">
                {p.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}