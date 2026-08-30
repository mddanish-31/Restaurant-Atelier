import { motion, useReducedMotion, type Variants } from 'motion/react';
import { ChefHat, Soup, Armchair, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

const FEATURES = [
  {
    icon: Soup,
    title: 'Delicious Food',
    description: 'Fresh ingredients, plated with care.',
  },
  {
    icon: ChefHat,
    title: 'Expert Chefs',
    description: 'Years of kitchen experience behind every dish.',
  },
  {
    icon: Armchair,
    title: 'Cozy Ambience',
    description: 'A warm room for family, friends, and quiet nights out.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Service',
    description: 'Attentive staff, from the first pour to the last plate.',
  },
] as const;

export function FeatureStrip() {
  const prefersReducedMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: prefersReducedMotion ? 0 : 0.1 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: 'easeOut' },
    },
  };

  return (
    <section className="border-t border-border bg-surface">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={container}
        className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:gap-x-0 lg:gap-y-0 lg:px-8 lg:py-16"
      >
        {FEATURES.map(({ icon: Icon, title, description }) => (
          <motion.div
            key={title}
            variants={item}
            className={cn(
              'group flex flex-col items-start text-left',
              'lg:border-l lg:border-border lg:px-8 lg:first:border-l-0 lg:first:pl-0 lg:last:pr-0',
            )}
          >
            <span className="mb-5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/30 text-primary transition-colors duration-300 group-hover:border-primary group-hover:bg-primary/5">
              <Icon size={18} strokeWidth={1.6} />
            </span>
            <h3 className="font-display text-lg text-foreground">{title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">{description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}