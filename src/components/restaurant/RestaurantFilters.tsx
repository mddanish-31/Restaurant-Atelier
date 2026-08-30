import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';

const PRICE_OPTIONS = ['$', '$$', '$$$', '$$$$'];
const RATING_OPTIONS: { label: string; value: number }[] = [
  { label: '4.5+', value: 4.5 },
  { label: '4.0+', value: 4.0 },
];

interface RestaurantFiltersProps {
  cuisines: string[];
  query: string;
  onQueryChange: (value: string) => void;
  activeCuisine: string;
  onCuisineChange: (value: string) => void;
  activePrice: string | null;
  onPriceChange: (value: string | null) => void;
  activeRating: number | null;
  onRatingChange: (value: number | null) => void;
}

function Pill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        'shrink-0 rounded-full border px-4 py-2 font-sans text-sm transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2',
        active
          ? 'border-primary bg-primary/10 text-primary'
          : 'border-border text-muted hover:border-primary/40 hover:text-foreground',
      )}
    >
      {children}
    </button>
  );
}

export function RestaurantFilters({
  cuisines,
  query,
  onQueryChange,
  activeCuisine,
  onCuisineChange,
  activePrice,
  onPriceChange,
  activeRating,
  onRatingChange,
}: RestaurantFiltersProps) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <label htmlFor="restaurant-search" className="sr-only">
        Search restaurants, cuisines, or dishes
      </label>
      <div className="relative">
        <Search
          size={18}
          strokeWidth={1.75}
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"
        />
        <input
          id="restaurant-search"
          type="search"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Search restaurants, cuisines, or dishes..."
          className="bg-glass w-full rounded-full border border-border py-3.5 pl-11 pr-4 font-sans text-sm text-foreground placeholder:text-muted focus:border-primary/50 focus:outline-none focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
        />
      </div>

      <div className="scrollbar-none -mx-4 mt-5 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:px-0">
        {cuisines.map((cuisine) => (
          <Pill
            key={cuisine}
            active={activeCuisine === cuisine}
            onClick={() => onCuisineChange(cuisine)}
          >
            {cuisine}
          </Pill>
        ))}
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        {PRICE_OPTIONS.map((price) => (
          <Pill
            key={price}
            active={activePrice === price}
            onClick={() => onPriceChange(activePrice === price ? null : price)}
          >
            {price}
          </Pill>
        ))}
        <span aria-hidden="true" className="mx-1 h-5 w-px bg-border" />
        {RATING_OPTIONS.map((rating) => (
          <Pill
            key={rating.value}
            active={activeRating === rating.value}
            onClick={() => onRatingChange(activeRating === rating.value ? null : rating.value)}
          >
            {rating.label}
          </Pill>
        ))}
      </div>
    </div>
  );
}