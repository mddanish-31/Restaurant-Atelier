import { Link } from 'react-router-dom';
import { Star, MapPin, ArrowUpRight } from 'lucide-react';
import type { Restaurant } from '@/types/restaurant';

export function RestaurantCard({ restaurant }: { restaurant: Restaurant }) {
  return (
    <Link
      to="/restaurants"
      aria-label={`View ${restaurant.name}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lift focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <img
          src={restaurant.image}
          alt={restaurant.imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <span className="bg-glass absolute right-3 top-3 flex items-center gap-1 rounded-full border border-white/10 px-2.5 py-1 font-sans text-xs text-foreground shadow-soft">
          <Star size={11} className="fill-current text-primary" strokeWidth={0} />
          {restaurant.rating.toFixed(1)}
        </span>
        <span className="bg-glass absolute bottom-3 left-3 flex items-center gap-1 rounded-full border border-white/10 px-2.5 py-1 font-sans text-xs text-foreground shadow-soft">
          <MapPin size={11} strokeWidth={1.75} />
          {restaurant.location}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-1.5 p-5">
        <span className="font-sans text-xs font-medium uppercase tracking-wide text-primary">
          {restaurant.cuisine}
        </span>
        <h3 className="font-display text-lg text-foreground">{restaurant.name}</h3>
        <p className="text-sm leading-relaxed text-muted">{restaurant.note}</p>

        <div className="mt-auto flex items-center justify-between border-t border-border pt-3">
          <span className="font-sans text-sm text-muted">{restaurant.priceRange}</span>
          <span className="flex items-center gap-1 font-sans text-xs font-medium tracking-wide text-muted transition-colors duration-200 group-hover:text-primary">
            View menu
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