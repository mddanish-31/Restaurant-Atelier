import type { FoodItem } from '@/types/food';

export const FEATURED_FOOD: FoodItem[] = [
  {
    id: 'herb-crusted-beef-tenderloin',
    name: 'Herb-Crusted Beef Tenderloin',
    description: 'Slow-roasted tenderloin with rosemary jus and charred shallots.',
    price: 34,
    image:
      'https://images.unsplash.com/photo-1663530761401-15eefb544889?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Beef tenderloin plated with sauce being poured over it',
    category: 'Grilled',
    rating: 4.9,
  },
  {
    id: 'butter-chicken',
    name: 'Butter Chicken',
    description: 'Tomato and cashew curry finished with cream, served with naan.',
    price: 19,
    image:
      'https://images.unsplash.com/photo-1772730065344-4cf131b39951?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Creamy butter chicken curry with naan bread',
    category: 'Indian',
    rating: 4.8,
  },
  {
    id: 'wood-fired-margherita',
    name: 'Wood-Fired Margherita',
    description: 'San Marzano tomato, fresh mozzarella, and basil.',
    price: 17,
    image:
      'https://images.unsplash.com/photo-1566843972142-a7fcb70de55a?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Wood-fired Margherita pizza with mozzarella and basil',
    category: 'Italian',
    rating: 4.8,
  },
  {
    id: 'crispy-chicken-burger',
    name: 'Crispy Chicken Burger',
    description: 'Buttermilk-fried chicken, house sauce, and pickles.',
    price: 15,
    image:
      'https://images.unsplash.com/photo-1619290463528-d9b976320d87?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Crispy chicken burger with fries on a plate',
    category: 'American',
    rating: 4.7,
  },
  {
    id: 'seafood-risotto',
    name: 'Seafood Risotto',
    description: 'Creamy arborio rice finished with shrimp and herbs.',
    price: 27,
    image:
      'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Seafood risotto plated on a white ceramic dish',
    category: 'Seafood',
    rating: 4.7,
  },
  {
    id: 'seared-salmon',
    name: 'Seared Salmon',
    description: 'Crisp-skinned salmon over lemon quinoa and greens.',
    price: 24,
    image:
      'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Seared salmon fillet plated with quinoa and greens',
    category: 'Seafood',
    rating: 4.7,
  },
  {
    id: 'seasonal-greek-salad',
    name: 'Seasonal Greek Salad',
    description: 'Heirloom tomatoes, cucumber, olives, and feta.',
    price: 14,
    image:
      'https://images.unsplash.com/photo-1659270157059-06aa84f64532?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Greek salad with tomatoes, cucumber, olives, and feta',
    category: 'Seasonal',
    rating: 4.6,
  },
  {
    id: 'dark-chocolate-fondant',
    name: 'Dark Chocolate Fondant',
    description: 'Molten chocolate cake with vanilla bean ice cream.',
    price: 12,
    image:
      'https://images.unsplash.com/photo-1608108132933-741a71c144ef?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Dark chocolate cake plated on a ceramic dish',
    category: 'Dessert',
    rating: 4.7,
  },
];