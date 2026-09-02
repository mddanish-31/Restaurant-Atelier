import type { Restaurant } from '@/types/restaurant';

export const RESTAURANTS: Restaurant[] = [
  {
    id: 'ember-oak',
    name: 'Ember & Oak',
    cuisine: 'Italian',
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Warm Italian dining room with wood-fired oven and ambient candlelight',
    rating: 4.8,
    location: 'Downtown',
    priceRange: '$$$',
    note: 'Wood-fired, artisanal pasta',
  },
  {
    id: 'saffron-house',
    name: 'Saffron House',
    cuisine: 'Indian',
    image:
      'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Luxury Indian restaurant interior with rich amber lighting',
    rating: 4.7,
    location: 'Riverside',
    priceRange: '$$',
    note: 'Tandoor & slow-cooked curries',
  },
  {
    id: 'kuro-tei',
    name: 'Kuro Tei',
    cuisine: 'Japanese',
    image:
      'https://images.unsplash.com/photo-1579027989536-b7b1f875659b?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Minimalist Japanese omakase sushi counter with cedar woodwork',
    rating: 4.9,
    location: 'Harbor District',
    priceRange: '$$$',
    note: 'Omakase counter & robata grill',
  },
  {
    id: 'olive-and-stone',
    name: 'Olive & Stone',
    cuisine: 'Mediterranean',
    image:
      'https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Mediterranean sunlit courtyard terrace with olive greenery',
    rating: 4.6,
    location: 'Old Town',
    priceRange: '$$',
    note: 'Wood-fired flatbreads & mezze',
  },
  {
    id: 'the-corner-griddle',
    name: 'The Corner Griddle',
    cuisine: 'American',
    image:
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Warm American smokehouse tavern interior with leather booths',
    rating: 4.5,
    location: 'Midtown',
    priceRange: '$$',
    note: 'Smokehouse burgers & craft desserts',
  },
  {
    id: 'lotus-and-lime',
    name: 'Lotus & Lime',
    cuisine: 'Asian',
    image:
      'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Modern Asian fusion restaurant with pendant lighting',
    rating: 4.7,
    location: 'East Quarter',
    priceRange: '$$',
    note: 'Wok-fired specialties & street bites',
  },
];