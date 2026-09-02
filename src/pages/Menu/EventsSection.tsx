import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion, type Variants } from 'motion/react';
import { IMAGE_FALLBACK } from '@/data/menu';

const EVENT_IMAGE =
  'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80';

export function EventsSection() {
  const prefersReducedMotion = useReducedMotion();
  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: prefersReducedMotion ? 0 : 0.1 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section aria-labelledby="events-heading" className="border-t border-border/80 bg-background py-16 lg:py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={container}
        className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-12 lg:px-8"
      >
        <div>
          <motion.div variants={item} className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            <Calendar size={13} className="text-primary" />
            <span>Events &amp; Private Dining</span>
          </motion.div>

          <motion.h2 id="events-heading" variants={item} className="mt-3 font-display text-3xl sm:text-4xl text-foreground leading-[1.2]">
            From cellar tastings to chef&apos;s table gatherings.
          </motion.h2>

          <motion.p variants={item} className="mt-3 max-w-md text-sm sm:text-base leading-relaxed text-muted">
            Immerse yourself in extraordinary culinary events crafted for connoisseurs of wine, flavor, and fine company.
          </motion.p>

          <motion.div variants={item} className="mt-6">
            <Link
              to="/about"
              className="group inline-flex items-center gap-2 rounded-full border border-primary/40 bg-surface px-6 py-3 font-sans text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-soft focus-visible:outline-2 focus-visible:outline-primary"
            >
              <span>Discover Private Dining</span>
              <ArrowRight size={15} strokeWidth={2} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          variants={item}
          className="group relative aspect-[16/10] overflow-hidden rounded-2xl border border-border shadow-lift sm:aspect-[2/1]"
        >
          <img
            src={EVENT_IMAGE}
            alt="Table set for a wine dinner with glasses and a wine bottle"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = IMAGE_FALLBACK;
            }}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-6 sm:p-8">
            <span className="font-sans text-xs font-semibold uppercase tracking-wider text-primary">
              Featured Experience
            </span>
            <h3 className="font-display text-xl sm:text-2xl text-foreground font-medium">
              Autumn Sommelier Wine Dinner
            </h3>
            <p className="max-w-md text-xs sm:text-sm leading-relaxed text-foreground/80">
              A five-course tasting menu paired with rare vintages and cellar treasures.
            </p>
            <div className="mt-2">
              <span className="inline-flex items-center rounded-full border border-primary/40 bg-primary/10 px-3.5 py-1 font-sans text-xs font-semibold text-primary backdrop-blur-sm">
                Reserve Early
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}