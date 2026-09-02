import { motion, useReducedMotion, type Variants } from 'motion/react';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=80';

export function ContactHero() {
  const prefersReducedMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: prefersReducedMotion ? 0 : 0.1, delayChildren: 0.1 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section className="relative flex min-h-[44vh] items-center overflow-hidden bg-background pt-16 lg:min-h-[48vh] lg:pt-20">
      <div className="absolute inset-0">
        <motion.img
          src={HERO_IMAGE}
          alt="Candlelit table set for an evening at Ember & Oak"
          className="h-full w-full object-cover"
          style={{
            objectPosition: 'center 55%',
            maskImage: 'linear-gradient(190deg, transparent 0%, black 6%, black 100%)',
            WebkitMaskImage: 'linear-gradient(190deg, transparent 0%, black 6%, black 100%)',
          }}
          initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(100deg, rgb(var(--hero-scrim) / 0.94) 0%, rgb(var(--hero-scrim) / 0.8) 32%, rgb(var(--hero-scrim) / 0.4) 52%, rgb(var(--hero-scrim) / 0.08) 68%, transparent 80%)',
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-20 lg:h-24"
          style={{ background: 'linear-gradient(to top, rgb(var(--color-background)) 0%, transparent 100%)' }}
        />
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="relative z-10 mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8"
      >
        <div className="max-w-lg">
          <motion.p variants={item} className="mb-3 font-sans text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Get in Touch
          </motion.p>
          <motion.h1 variants={item} className="font-display text-4xl leading-tight text-foreground sm:text-5xl">
            Let&apos;s make your next meal memorable.
          </motion.h1>
          <motion.p variants={item} className="mt-4 max-w-md text-muted">
            Questions, celebrations, or simply looking for the right table? We&apos;d love to hear from you.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}