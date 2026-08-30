import type { Restaurant } from '@/types/restaurant';

export const RESTAURANTS: Restaurant[] = [
  {
    id: 'ember-oak',
    name: 'Ember & Oak',
    cuisine: 'Italian',
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Cozy Italian dining room with warm lighting',
    rating: 4.8,
    location: 'Downtown',
    priceRange: '$$$',
    note: 'Wood-fired, family style',
  },
  {
    id: 'saffron-house',
    name: 'Saffron House',
    cuisine: 'Indian',
    image:
      'https://images.unsplash.com/photo-1667489022797-ab608913feeb?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Indian restaurant interior with warm spiced tones',
    rating: 4.7,
    location: 'Riverside',
    priceRange: '$$',
    note: 'Tandoor specialties',
  },
  {
    id: 'kuro-tei',
    name: 'Kuro Tei',
    cuisine: 'Japanese',
    image:
      'https://images.unsplash.com/photo-1554502078-ef0fc409efce?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Minimalist Japanese sushi counter',
    rating: 4.9,
    location: 'Harbor District',
    priceRange: '$$$',
    note: 'Omakase counter',
  },
  {
    id: 'olive-and-stone',
    name: 'Olive & Stone',
    cuisine: 'Mediterranean',
    image:
      'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Mediterranean restaurant terrace with olive trees',
    rating: 4.6,
    location: 'Old Town',
    priceRange: '$$',
    note: 'Wood-fired flatbreads',
  },
  {
    id: 'the-corner-griddle',
    name: 'The Corner Griddle',
    cuisine: 'American',
    image:
      'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'American diner-style restaurant interior',
    rating: 4.5,
    location: 'Midtown',
    priceRange: '$$',
    note: 'Smokehouse classics',
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
    note: 'Wok-fired, shared plates',
  },
];