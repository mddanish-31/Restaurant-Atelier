import { Link } from 'react-router-dom';
import { Star, ArrowUpRight } from 'lucide-react';
import type { FoodItem } from '@/types/food';

export function FeaturedFoodCard({ item }: { item: FoodItem }) {
  return (
    <Link
      to="/menu"
      aria-label={`View ${item.name} on our menu`}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lift focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <img
          src={item.image}
          alt={item.imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
        {item.rating && (
          <span className="bg-glass absolute right-3 top-3 flex items-center gap-1 rounded-full border border-white/10 px-2.5 py-1 font-sans text-xs text-foreground shadow-soft">
            <Star size={11} className="fill-current text-primary" strokeWidth={0} />
            {item.rating.toFixed(1)}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-1.5 p-5">
        <span className="font-sans text-xs font-medium uppercase tracking-wide text-primary">
          {item.category}
        </span>
        <h3 className="font-display text-lg text-foreground">{item.name}</h3>
        <p className="line-clamp-2 text-sm leading-relaxed text-muted">{item.description}</p>

        <div className="mt-auto flex items-center justify-between border-t border-border pt-3">
          <span className="font-display text-lg text-foreground">${item.price}</span>
          <span className="flex items-center gap-1 font-sans text-xs font-medium tracking-wide text-muted transition-colors duration-200 group-hover:text-primary">
            View dish
            <ArrowUpRight
              size={14}
              strokeWidth={1.75}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>
        </div>
      </div>
    </Link>
  );
}