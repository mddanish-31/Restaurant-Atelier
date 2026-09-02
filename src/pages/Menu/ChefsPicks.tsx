import { ArrowRight, Flame } from 'lucide-react';
import { motion, useReducedMotion, type Variants } from 'motion/react';
import { MENU_DISHES } from '@/data/menu';
import { MenuCard } from './MenuCard';

export function ChefsPicks() {
  const prefersReducedMotion = useReducedMotion();
  const picks = MENU_DISHES.filter((d) => d.featured).slice(0, 3);
  if (picks.length === 0) return null;

  const textCol: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: prefersReducedMotion ? 0 : 0.08 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 14 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };
  const card: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };
  const cards: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: prefersReducedMotion ? 0 : 0.1 } },
  };

  const handleScrollToMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('the-menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section aria-labelledby="chefs-picks-heading" className="border-b border-border/80 bg-surface/50 py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_2.15fr] lg:gap-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={textCol}
            className="lg:sticky lg:top-36 lg:self-start"
          >
            <motion.div variants={item} className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              <Flame size={13} className="text-primary fill-primary" />
              <span>Chef&apos;s Highlights</span>
            </motion.div>

            <motion.h2
              id="chefs-picks-heading"
              variants={item}
              className="mt-3 font-display text-3xl sm:text-4xl text-foreground leading-[1.2]"
            >
              Signature plates worth trying tonight.
            </motion.h2>

            <motion.p variants={item} className="mt-3 max-w-sm text-sm sm:text-base leading-relaxed text-muted">
              Hand-picked recommendations by our head chefs, prepared with prime seasonal ingredients and culinary precision.
            </motion.p>

            <motion.div variants={item} className="mt-6">
              <a
                href="#the-menu"
                onClick={handleScrollToMenu}
                className="group inline-flex items-center gap-2 font-sans text-sm font-semibold text-primary transition-all duration-200 hover:text-primary-foreground hover:bg-primary px-4 py-2 rounded-full border border-primary/40 focus-visible:outline-2 focus-visible:outline-primary"
              >
                <span>View full menu</span>
                <ArrowRight size={15} strokeWidth={2} className="transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={cards}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {picks.map((dish) => (
              <motion.div key={dish.id} variants={card}>
                <MenuCard dish={dish} featured />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}