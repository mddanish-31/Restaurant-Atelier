import { useState } from 'react';
import { Star, Plus, Check, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import type { MenuDish } from '@/types/menu';
import { IMAGE_FALLBACK } from '@/data/menu';
import { cn } from '@/lib/utils';

export function MenuCard({ dish, featured = false }: { dish: MenuDish; featured?: boolean }) {
  const [added, setAdded] = useState(false);
  const isSpecial = featured || dish.featured;
  const topLabel =
    dish.category === 'Desserts' || dish.category === 'Drinks' ? dish.category : dish.cuisine;

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <article
      className={cn(
        'group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-lift',
        isSpecial
          ? 'border-primary/40 shadow-[0_4px_24px_rgba(196,154,82,0.12)] hover:border-primary'
          : 'border-border/80 hover:border-primary/50',
        featured && 'sm:col-span-1',
      )}
    >
      {/* Dish Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-raised">
        <img
          src={dish.image}
          alt={dish.imageAlt}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = IMAGE_FALLBACK;
          }}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
        />

        {/* Soft Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-black/20 pointer-events-none" />

        {/* Rating Badge */}
        <div className="bg-glass-soft absolute left-3 top-3 flex items-center gap-1 rounded-full border border-white/20 px-2.5 py-1 font-sans text-xs font-semibold text-foreground shadow-soft backdrop-blur-md transition-transform duration-300 group-hover:scale-105">
          <Star size={11} className="fill-primary text-primary" strokeWidth={0} />
          <span>{dish.rating.toFixed(1)}</span>
        </div>

        {/* Chef's Signature Badge */}
        {isSpecial && (
          <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full border border-primary/40 bg-primary/90 px-2.5 py-1 font-sans text-[11px] font-semibold text-primary-foreground shadow-soft backdrop-blur-sm">
            <Sparkles size={11} className="animate-pulse" />
            <span>Chef&apos;s Pick</span>
          </div>
        )}
      </div>

      {/* Dish Details */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex items-center justify-between gap-2">
          <span className="font-sans text-[11px] font-semibold uppercase tracking-wider text-primary">
            {topLabel}
          </span>
          <span className="text-[11px] text-muted font-sans font-medium">{dish.category}</span>
        </div>

        <h3 className="mt-1 font-display text-base sm:text-lg font-medium text-foreground transition-colors duration-200 group-hover:text-primary">
          {dish.name}
        </h3>

        <p className="mt-1 line-clamp-2 text-xs sm:text-sm leading-relaxed text-muted">
          {dish.description}
        </p>

        {/* Card Footer: Restaurant, Price & Add Action */}
        <div className="mt-auto flex items-center justify-between border-t border-border/70 pt-3.5 mt-4">
          <div className="flex flex-col">
            <span className="font-sans text-xs font-medium text-muted">{dish.restaurantName}</span>
            <span className="font-display text-base sm:text-lg font-semibold text-foreground">
              ₹{dish.price}
            </span>
          </div>

          <motion.button
            type="button"
            onClick={handleAdd}
            whileTap={{ scale: 0.92 }}
            aria-label={`Add ${dish.name} to order`}
            className={cn(
              'flex items-center gap-1.5 rounded-full px-3.5 py-1.5 font-sans text-xs font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-primary',
              added
                ? 'bg-emerald-600 text-white shadow-soft'
                : 'border border-border/90 bg-surface-raised text-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground shadow-sm',
            )}
          >
            {added ? (
              <>
                <Check size={13} strokeWidth={2.5} />
                <span>Added</span>
              </>
            ) : (
              <>
                <Plus size={13} strokeWidth={2} />
                <span>Add</span>
              </>
            )}
          </motion.button>
        </div>
      </div>
    </article>
  );
}