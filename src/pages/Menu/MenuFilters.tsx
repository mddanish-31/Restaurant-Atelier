import { X, Filter, RotateCcw } from 'lucide-react';
import { DISH_CATEGORIES, RESTAURANT_OPTIONS } from '@/data/menu';
import { cn } from '@/lib/utils';

interface MenuFiltersProps {
  activeCategory: string | null;
  onCategoryChange: (value: string | null) => void;
  activeRestaurant: string | null;
  onRestaurantChange: (value: string | null) => void;
  hasActiveFilters: boolean;
  onReset: () => void;
  totalCount?: number;
  filteredCount?: number;
}

export function MenuFilters({
  activeCategory,
  onCategoryChange,
  activeRestaurant,
  onRestaurantChange,
  hasActiveFilters,
  onReset,
  filteredCount,
}: MenuFiltersProps) {
  return (
    <section aria-label="Filter menu items" className="border-b border-border/60 bg-surface/30 py-5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4">
          {/* Row 1: Categories */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted shrink-0 flex items-center gap-1.5 sm:min-w-[84px]">
              <Filter size={13} className="text-primary" />
              <span>Category:</span>
            </span>

            <div className="scrollbar-none -mx-4 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:px-0">
              <button
                type="button"
                onClick={() => onCategoryChange(null)}
                aria-pressed={activeCategory === null}
                className={cn(
                  'inline-flex shrink-0 items-center rounded-full px-4 py-1.5 font-sans text-xs sm:text-sm font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-primary',
                  activeCategory === null
                    ? 'bg-primary text-primary-foreground shadow-sm font-semibold'
                    : 'border border-border/80 bg-surface/60 text-muted hover:border-primary/50 hover:text-foreground',
                )}
              >
                All Categories
              </button>

              {DISH_CATEGORIES.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => onCategoryChange(isActive ? null : category)}
                    aria-pressed={isActive}
                    className={cn(
                      'inline-flex shrink-0 items-center rounded-full px-4 py-1.5 font-sans text-xs sm:text-sm font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-primary',
                      isActive
                        ? 'bg-primary text-primary-foreground shadow-sm font-semibold'
                        : 'border border-border/80 bg-surface/60 text-muted hover:border-primary/50 hover:text-foreground',
                    )}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Row 2: Kitchens / Restaurants */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted shrink-0 sm:min-w-[84px]">
              <span>Kitchen:</span>
            </span>

            <div className="scrollbar-none -mx-4 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:px-0">
              <button
                type="button"
                onClick={() => onRestaurantChange(null)}
                aria-pressed={activeRestaurant === null}
                className={cn(
                  'inline-flex shrink-0 items-center rounded-full px-3.5 py-1.5 font-sans text-xs sm:text-sm font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-primary',
                  activeRestaurant === null
                    ? 'border border-primary/50 bg-primary/10 text-primary font-semibold'
                    : 'border border-border/80 bg-surface/60 text-muted hover:border-primary/50 hover:text-foreground',
                )}
              >
                All Kitchens
              </button>

              {RESTAURANT_OPTIONS.map((restaurant) => {
                const isActive = activeRestaurant === restaurant.id;
                return (
                  <button
                    key={restaurant.id}
                    type="button"
                    onClick={() => onRestaurantChange(isActive ? null : restaurant.id)}
                    aria-pressed={isActive}
                    className={cn(
                      'inline-flex shrink-0 items-center rounded-full px-3.5 py-1.5 font-sans text-xs sm:text-sm font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-primary',
                      isActive
                        ? 'border border-primary bg-primary/15 text-primary font-semibold shadow-sm'
                        : 'border border-border/80 bg-surface/60 text-muted hover:border-primary/50 hover:text-foreground',
                    )}
                  >
                    {restaurant.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Filter Chips & Summary */}
          {hasActiveFilters && (
            <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-border/50 text-xs">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-muted font-medium">Active filters:</span>
                {activeCategory && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/15 border border-primary/30 px-3 py-1 text-primary font-semibold">
                    <span>Category: {activeCategory}</span>
                    <button
                      type="button"
                      onClick={() => onCategoryChange(null)}
                      aria-label={`Remove ${activeCategory} filter`}
                      className="hover:text-foreground transition-colors"
                    >
                      <X size={12} strokeWidth={2.5} />
                    </button>
                  </span>
                )}
                {activeRestaurant && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/15 border border-primary/30 px-3 py-1 text-primary font-semibold">
                    <span>Kitchen: {RESTAURANT_OPTIONS.find((r) => r.id === activeRestaurant)?.name}</span>
                    <button
                      type="button"
                      onClick={() => onRestaurantChange(null)}
                      aria-label="Remove restaurant filter"
                      className="hover:text-foreground transition-colors"
                    >
                      <X size={12} strokeWidth={2.5} />
                    </button>
                  </span>
                )}
              </div>

              <div className="flex items-center gap-4">
                {typeof filteredCount === 'number' && (
                  <span className="text-muted font-sans font-medium">
                    {filteredCount} {filteredCount === 1 ? 'dish' : 'dishes'} found
                  </span>
                )}
                <button
                  type="button"
                  onClick={onReset}
                  className="inline-flex items-center gap-1 text-primary hover:underline font-semibold transition-colors"
                >
                  <RotateCcw size={12} />
                  <span>Clear all</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
