import type { MouseEvent } from 'react';
import { motion, useReducedMotion, type Variants } from 'motion/react';
import { IMAGE_FALLBACK } from '@/data/menu';

const CTA_IMAGE =
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80';

export function ReserveCta() {
  const prefersReducedMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: prefersReducedMotion ? 0 : 0.1, delayChildren: 0.1 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  function handleReserveClick(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    const target = document.getElementById('contact-form');
    target?.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
    target?.querySelector<HTMLInputElement>('#firstName')?.focus({ preventScroll: true });
  }

  return (
    <section
      aria-labelledby="reserve-cta-heading"
      className="relative flex min-h-[52vh] items-center overflow-hidden border-t border-border/80 lg:min-h-[58vh]"
    >
      <div className="absolute inset-0">
        <motion.img
          src={CTA_IMAGE}
          alt="Elegant restaurant dining room with warm lighting and set tables"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = IMAGE_FALLBACK;
          }}
          className="h-full w-full object-cover"
          initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-background/60 to-transparent" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={container}
        className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center gap-4 px-4 py-16 text-center sm:px-6 lg:px-8"
      >
        <motion.span
          variants={item}
          className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-primary"
        >
          Reserve Your Table
        </motion.span>
        <motion.h2
          id="reserve-cta-heading"
          variants={item}
          className="font-display text-3xl leading-tight text-foreground sm:text-4xl"
        >
          A table worth remembering.
        </motion.h2>
        <motion.p variants={item} className="max-w-md text-muted">
          Make an evening of it. Choose your table and let us take care of the rest.
        </motion.p>
        <motion.div variants={item} className="mt-2">
          <a
            href="#contact-form"
            onClick={handleReserveClick}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-sans text-sm font-medium text-primary-foreground transition-opacity duration-200 hover:opacity-90 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
          >
            Reserve a Table →
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}