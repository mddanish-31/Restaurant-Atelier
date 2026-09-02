import type { MenuDish } from '@/types/menu';

const IMG = {
  // Italian
  tagliatelle:
    'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80',
  trufflePasta:
    'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=800&q=80',
  margherita:
    'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80',
  burrata:
    'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
  tiramisu:
    'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80',
  cannoli:
    'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80',
  risotto:
    'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=800&q=80',
  quattroFormaggi:
    'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
  affogato:
    'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80',
  espressoMartini:
    'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',

  // Indian
  butterChicken:
    'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80',
  dalMakhani:
    'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80',
  paneerTikka:
    'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80',
  lambRoganJosh:
    'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
  mangoLassi:
    'https://images.unsplash.com/photo-1528736235302-52922df5c122?auto=format&fit=crop&w=800&q=80',
  gulabJamun:
    'https://images.unsplash.com/photo-1599785209707-a456fc1337bb?auto=format&fit=crop&w=800&q=80',

  // Japanese
  salmonNigiri:
    'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80',
  misoSalmon:
    'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80',
  edamame:
    'https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?auto=format&fit=crop&w=800&q=80',
  matchaCheesecake:
    'https://images.unsplash.com/photo-1536599018102-9f803c140fc1?auto=format&fit=crop&w=800&q=80',
  matchaLatte:
    'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80',

  // Mediterranean
  lambKofta:
    'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=800&q=80',
  hummusPita:
    'https://images.unsplash.com/photo-1577906096429-f73c2c312435?auto=format&fit=crop&w=800&q=80',
  grilledHalloumi:
    'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80',
  baklava:
    'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=800&q=80',

  // American
  smashBurger:
    'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
  loadedFries:
    'https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=800&q=80',
  lavaCake:
    'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80',
  rootBeerFloat:
    'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80',
  cheesecake:
    'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80',

  // Asian
  thaiCurry:
    'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=800&q=80',
  wokNoodles:
    'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80',
  springRolls:
    'https://images.unsplash.com/photo-1548507200-a50d24bf5199?auto=format&fit=crop&w=800&q=80',
  icedTea:
    'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',

  // Hero backgrounds
  heroRisotto:
    'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=1800&q=80',
  heroSteak:
    'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1800&q=80',
  heroLavaCake:
    'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1800&q=80',
};

// Rock-solid fallback image
export const IMAGE_FALLBACK =
  'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=800&q=80';

export const MENU_DISHES: MenuDish[] = [
  // Ember & Oak — Italian
  { id: 'wild-mushroom-tagliatelle', name: 'Wild Mushroom Tagliatelle', restaurantId: 'ember-oak', restaurantName: 'Ember & Oak', cuisine: 'Italian', category: 'Pasta & Pizza', description: 'Hand-cut tagliatelle tossed with wild mushrooms and shaved truffle.', price: 480, rating: 4.8, image: IMG.tagliatelle, imageAlt: 'Wild mushroom tagliatelle plated with shaved truffle', featured: true },
  { id: 'truffle-mushroom-pasta', name: 'Truffle Mushroom Pasta', restaurantId: 'ember-oak', restaurantName: 'Ember & Oak', cuisine: 'Italian', category: 'Pasta & Pizza', description: 'Creamy truffle sauce with wild mushrooms and parmesan.', price: 480, rating: 4.6, image: IMG.trufflePasta, imageAlt: 'Creamy mushroom pasta plated with shaved parmesan' },
  { id: 'margherita-pizza', name: 'Margherita Pizza', restaurantId: 'ember-oak', restaurantName: 'Ember & Oak', cuisine: 'Italian', category: 'Pasta & Pizza', description: 'San Marzano tomato, fior di latte, basil, extra virgin olive oil.', price: 520, rating: 4.4, image: IMG.margherita, imageAlt: 'Wood-fired Margherita pizza with basil' },
  { id: 'burrata-heirloom-tomato', name: 'Burrata & Heirloom Tomato', restaurantId: 'ember-oak', restaurantName: 'Ember & Oak', cuisine: 'Italian', category: 'Starters', description: 'Creamy burrata over heirloom tomatoes with basil oil.', price: 280, rating: 4.7, image: IMG.burrata, imageAlt: 'Burrata cheese plated with heirloom tomatoes and basil' },
  { id: 'tiramisu', name: 'Tiramisu', restaurantId: 'ember-oak', restaurantName: 'Ember & Oak', cuisine: 'Italian', category: 'Desserts', description: 'Classic tiramisu with mascarpone and espresso.', price: 300, rating: 4.5, image: IMG.tiramisu, imageAlt: 'Layered tiramisu dusted with cocoa' },
  { id: 'pistachio-cannoli', name: 'Pistachio Cannoli', restaurantId: 'ember-oak', restaurantName: 'Ember & Oak', cuisine: 'Italian', category: 'Desserts', description: 'Crisp Sicilian pastry shells filled with sweet ricotta and roasted pistachio.', price: 260, rating: 4.7, image: IMG.cannoli, imageAlt: 'Crispy pistachio cannoli' },
  { id: 'risotto-ai-funghi', name: 'Risotto ai Funghi', restaurantId: 'ember-oak', restaurantName: 'Ember & Oak', cuisine: 'Italian', category: 'Mains', description: 'Slow-stirred arborio rice with wild mushrooms and parmesan.', price: 460, rating: 4.7, image: IMG.risotto, imageAlt: 'Creamy mushroom risotto plated with parmesan shavings' },
  { id: 'quattro-formaggi-pizza', name: 'Quattro Formaggi Pizza', restaurantId: 'ember-oak', restaurantName: 'Ember & Oak', cuisine: 'Italian', category: 'Pasta & Pizza', description: 'Wood-fired pizza with mozzarella, gorgonzola, fontina and parmesan.', price: 540, rating: 4.5, image: IMG.quattroFormaggi, imageAlt: 'Four-cheese wood-fired pizza fresh from the oven' },
  { id: 'affogato', name: 'Affogato', restaurantId: 'ember-oak', restaurantName: 'Ember & Oak', cuisine: 'Italian', category: 'Desserts', description: 'Vanilla gelato drowned in a shot of hot espresso.', price: 260, rating: 4.6, image: IMG.affogato, imageAlt: 'Scoop of vanilla gelato with espresso poured over it' },
  { id: 'espresso-martini', name: 'Espresso Martini', restaurantId: 'ember-oak', restaurantName: 'Ember & Oak', cuisine: 'Italian', category: 'Drinks', description: 'Freshly pulled espresso, vodka, and coffee liqueur shaken with crema.', price: 340, rating: 4.8, image: IMG.espressoMartini, imageAlt: 'Espresso martini cocktail with coffee beans' },

  // Saffron House — Indian
  { id: 'butter-chicken', name: 'Butter Chicken', restaurantId: 'saffron-house', restaurantName: 'Saffron House', cuisine: 'Indian', category: 'Mains', description: 'Tender chicken in rich tomato and butter gravy.', price: 420, rating: 4.5, image: IMG.butterChicken, imageAlt: 'Creamy butter chicken curry with naan bread', featured: true },
  { id: 'garlic-naan-dal-makhani', name: 'Garlic Naan & Dal Makhani', restaurantId: 'saffron-house', restaurantName: 'Saffron House', cuisine: 'Indian', category: 'Mains', description: 'Classic dal slow-cooked overnight with garlic naan.', price: 320, rating: 4.6, image: IMG.dalMakhani, imageAlt: 'Dal makhani served with garlic naan' },
  { id: 'paneer-tikka', name: 'Paneer Tikka', restaurantId: 'saffron-house', restaurantName: 'Saffron House', cuisine: 'Indian', category: 'Starters', description: 'Char-grilled paneer marinated in yogurt and spices.', price: 260, rating: 4.6, image: IMG.paneerTikka, imageAlt: 'Char-grilled paneer skewers plated with mint chutney' },
  { id: 'lamb-rogan-josh', name: 'Lamb Rogan Josh', restaurantId: 'saffron-house', restaurantName: 'Saffron House', cuisine: 'Indian', category: 'Mains', description: 'Slow-braised lamb in a Kashmiri chili and yogurt gravy.', price: 460, rating: 4.7, image: IMG.lambRoganJosh, imageAlt: 'Braised lamb curry plated with rice' },
  { id: 'mango-lassi', name: 'Mango Lassi', restaurantId: 'saffron-house', restaurantName: 'Saffron House', cuisine: 'Indian', category: 'Drinks', description: 'Chilled yogurt drink blended with ripe mango.', price: 150, rating: 4.6, image: IMG.mangoLassi, imageAlt: 'Chilled mango lassi in a glass' },
  { id: 'gulab-jamun-rabri', name: 'Gulab Jamun with Rabri', restaurantId: 'saffron-house', restaurantName: 'Saffron House', cuisine: 'Indian', category: 'Desserts', description: 'Warm milk dumplings soaked in cardamom syrup served over chilled rabri.', price: 220, rating: 4.8, image: IMG.gulabJamun, imageAlt: 'Warm gulab jamun with saffron syrup' },

  // Kuro Tei — Japanese
  { id: 'salmon-nigiri', name: 'Salmon Nigiri', restaurantId: 'kuro-tei', restaurantName: 'Kuro Tei', cuisine: 'Japanese', category: 'Sushi', description: 'Fresh salmon over seasoned sushi rice.', price: 560, rating: 4.7, image: IMG.salmonNigiri, imageAlt: 'Salmon nigiri pieces on a dark plate' },
  { id: 'miso-butter-salmon', name: 'Miso Butter Salmon', restaurantId: 'kuro-tei', restaurantName: 'Kuro Tei', cuisine: 'Japanese', category: 'Mains', description: 'Crisp-skinned salmon glazed with miso butter.', price: 620, rating: 4.8, image: IMG.misoSalmon, imageAlt: 'Seared salmon fillet glazed with miso butter', featured: true },
  { id: 'edamame', name: 'Edamame', restaurantId: 'kuro-tei', restaurantName: 'Kuro Tei', cuisine: 'Japanese', category: 'Starters', description: 'Steamed soybeans finished with sea salt.', price: 220, rating: 4.5, image: IMG.edamame, imageAlt: 'Bowl of steamed edamame with sea salt' },
  { id: 'matcha-cheesecake', name: 'Matcha Cheesecake', restaurantId: 'kuro-tei', restaurantName: 'Kuro Tei', cuisine: 'Japanese', category: 'Desserts', description: 'Silky matcha cheesecake on a sesame crust.', price: 280, rating: 4.7, image: IMG.matchaCheesecake, imageAlt: 'Slice of matcha cheesecake plated' },
  { id: 'iced-matcha-latte', name: 'Iced Matcha Latte', restaurantId: 'kuro-tei', restaurantName: 'Kuro Tei', cuisine: 'Japanese', category: 'Drinks', description: 'Ceremonial Japanese matcha whisked with cold milk and sweet vanilla.', price: 220, rating: 4.6, image: IMG.matchaLatte, imageAlt: 'Iced matcha latte with layered milk' },

  // Olive & Stone — Mediterranean
  { id: 'lamb-kofta', name: 'Lamb Kofta', restaurantId: 'olive-and-stone', restaurantName: 'Olive & Stone', cuisine: 'Mediterranean', category: 'Mains', description: 'Grilled lamb skewers served with hummus and pita.', price: 450, rating: 4.6, image: IMG.lambKofta, imageAlt: 'Grilled lamb kofta skewers with pita and hummus' },
  { id: 'hummus-pita', name: 'Hummus & Pita', restaurantId: 'olive-and-stone', restaurantName: 'Olive & Stone', cuisine: 'Mediterranean', category: 'Starters', description: 'Smooth chickpea hummus with warm pita and olive oil.', price: 240, rating: 4.6, image: IMG.hummusPita, imageAlt: 'Bowl of hummus drizzled with olive oil beside warm pita' },
  { id: 'grilled-halloumi', name: 'Grilled Halloumi', restaurantId: 'olive-and-stone', restaurantName: 'Olive & Stone', cuisine: 'Mediterranean', category: 'Starters', description: 'Charred halloumi drizzled with honey and thyme.', price: 260, rating: 4.6, image: IMG.grilledHalloumi, imageAlt: 'Charred halloumi slices drizzled with honey' },
  { id: 'baklava-crisp', name: 'Artisan Baklava', restaurantId: 'olive-and-stone', restaurantName: 'Olive & Stone', cuisine: 'Mediterranean', category: 'Desserts', description: 'Flaky filo pastry layered with spiced walnuts and infused with orange blossom syrup.', price: 250, rating: 4.8, image: IMG.baklava, imageAlt: 'Golden crispy baklava pastries' },

  // The Corner Griddle — American
  { id: 'smash-burger', name: 'Smash Burger', restaurantId: 'the-corner-griddle', restaurantName: 'The Corner Griddle', cuisine: 'American', category: 'Mains', description: 'Angus beef, cheddar, pickles, and ember sauce.', price: 380, rating: 4.5, image: IMG.smashBurger, imageAlt: 'Smash burger with melted cheddar and pickles' },
  { id: 'loaded-fries', name: 'Loaded Fries', restaurantId: 'the-corner-griddle', restaurantName: 'The Corner Griddle', cuisine: 'American', category: 'Starters', description: 'Crispy fries with cheddar, bacon, and scallion.', price: 220, rating: 4.5, image: IMG.loadedFries, imageAlt: 'Loaded fries topped with cheddar and bacon' },
  { id: 'chocolate-lava-cake', name: 'Chocolate Lava Cake', restaurantId: 'the-corner-griddle', restaurantName: 'The Corner Griddle', cuisine: 'American', category: 'Desserts', description: 'Molten chocolate cake with vanilla bean ice cream.', price: 320, rating: 4.9, image: IMG.lavaCake, imageAlt: 'Molten chocolate lava cake with a scoop of ice cream' },
  { id: 'new-york-cheesecake', name: 'New York Cheesecake', restaurantId: 'the-corner-griddle', restaurantName: 'The Corner Griddle', cuisine: 'American', category: 'Desserts', description: 'Velvety baked cheesecake with graham crust and berry compote.', price: 290, rating: 4.7, image: IMG.cheesecake, imageAlt: 'Slice of New York cheesecake with berries' },
  { id: 'root-beer-float', name: 'Root Beer Float', restaurantId: 'the-corner-griddle', restaurantName: 'The Corner Griddle', cuisine: 'American', category: 'Drinks', description: 'House-made root beer over vanilla bean ice cream.', price: 180, rating: 4.5, image: IMG.rootBeerFloat, imageAlt: 'Root beer float in a tall glass' },

  // Lotus & Lime — Asian
  { id: 'thai-green-curry', name: 'Thai Green Curry', restaurantId: 'lotus-and-lime', restaurantName: 'Lotus & Lime', cuisine: 'Asian', category: 'Mains', description: 'Coconut green curry with vegetables and jasmine rice.', price: 410, rating: 4.5, image: IMG.thaiCurry, imageAlt: 'Bowl of Thai green curry with jasmine rice' },
  { id: 'wok-noodles', name: 'Wok Noodles', restaurantId: 'lotus-and-lime', restaurantName: 'Lotus & Lime', cuisine: 'Asian', category: 'Mains', description: 'Stir-fried noodles with vegetables, sesame and soy glaze.', price: 390, rating: 4.6, image: IMG.wokNoodles, imageAlt: 'Wok-fried noodles with vegetables' },
  { id: 'spring-rolls', name: 'Spring Rolls', restaurantId: 'lotus-and-lime', restaurantName: 'Lotus & Lime', cuisine: 'Asian', category: 'Starters', description: 'Crisp rolls filled with vegetables and glass noodles.', price: 220, rating: 4.5, image: IMG.springRolls, imageAlt: 'Crispy spring rolls plated with dipping sauce' },
  { id: 'iced-lychee-tea', name: 'Iced Lychee Tea', restaurantId: 'lotus-and-lime', restaurantName: 'Lotus & Lime', cuisine: 'Asian', category: 'Drinks', description: 'Chilled black tea with lychee and mint.', price: 160, rating: 4.6, image: IMG.icedTea, imageAlt: 'Iced lychee tea garnished with mint' },
];

export interface RailEntry {
  slug: string;
  label: string;
  image: string;
  imageAlt: string;
  count: number;
  match: (dish: MenuDish) => boolean;
}

const RAIL_ORDER: { slug?: string; label: string; image: string; match: (d: MenuDish) => boolean }[] = [
  { label: 'Italian', image: IMG.trufflePasta, match: (d) => d.cuisine === 'Italian' },
  { label: 'Indian', image: IMG.butterChicken, match: (d) => d.cuisine === 'Indian' },
  { label: 'Japanese', image: IMG.salmonNigiri, match: (d) => d.cuisine === 'Japanese' },
  { label: 'Mediterranean', image: IMG.hummusPita, match: (d) => d.cuisine === 'Mediterranean' },
  { label: 'American', image: IMG.smashBurger, match: (d) => d.cuisine === 'American' },
  { label: 'Asian', image: IMG.thaiCurry, match: (d) => d.cuisine === 'Asian' },
  { slug: 'desserts', label: 'Desserts', image: IMG.lavaCake, match: (d) => d.category === 'Desserts' },
  { slug: 'drinks', label: 'Drinks', image: IMG.espressoMartini, match: (d) => d.category === 'Drinks' },
];

export const CUISINE_RAIL: RailEntry[] = RAIL_ORDER.map(({ slug, label, image, match }) => {
  const dishes = MENU_DISHES.filter(match);
  return {
    slug: slug || label.toLowerCase(),
    label,
    image: image || dishes[0]?.image || IMAGE_FALLBACK,
    imageAlt: `${label} cuisine dishes`,
    count: dishes.length,
    match,
  };
}).filter((entry) => entry.count > 0);

export const DISH_CATEGORIES: MenuDish['category'][] = [
  'Starters',
  'Mains',
  'Pasta & Pizza',
  'Sushi',
  'Desserts',
  'Drinks',
].filter((cat) => MENU_DISHES.some((d) => d.category === cat)) as MenuDish['category'][];

export interface MenuHeroSlide {
  id: string;
  eyebrow: string;
  title: string[];
  description: string;
  ctaLabel: string;
  ctaHref: string;
  categoryTarget?: string;
  image: string;
  imageAlt: string;
}

export const HERO_SLIDES: MenuHeroSlide[] = [
  {
    id: 'the-menu',
    eyebrow: 'The Menu',
    title: ['Something', 'worth ordering.'],
    description: 'Discover dishes created for slow evenings, seasonal ingredients and good company.',
    ctaLabel: 'Explore the menu',
    ctaHref: '#the-menu',
    categoryTarget: undefined,
    image: IMG.heroRisotto,
    imageAlt: 'Truffle mushroom pasta plated with shaved parmesan and a glass of wine',
  },
  {
    id: 'from-the-fire',
    eyebrow: 'From the Fire',
    title: ['Made over flame.', 'Served with intention.'],
    description: 'Wood-fired plates, seasonal ingredients and bold flavors from our kitchen.',
    ctaLabel: 'Explore mains',
    ctaHref: '#the-menu',
    categoryTarget: 'Mains',
    image: IMG.heroSteak,
    imageAlt: 'Seared tenderloin plated with charred vegetables',
  },
  {
    id: 'end-on-a-good-note',
    eyebrow: 'End on a Good Note',
    title: ['Leave room', 'for dessert.'],
    description: 'Hand-finished desserts and artisan sweets made for the last memorable bite.',
    ctaLabel: 'Explore desserts',
    ctaHref: '#the-menu',
    categoryTarget: 'Desserts',
    image: IMG.heroLavaCake,
    imageAlt: 'Molten chocolate dessert dusted with cocoa',
  },
];

export const RESTAURANT_OPTIONS = Array.from(
  new Map(MENU_DISHES.map((d) => [d.restaurantId, d.restaurantName])),
).map(([id, name]) => ({ id, name }));
