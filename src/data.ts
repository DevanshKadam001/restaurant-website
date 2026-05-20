import { MenuItem, Testimonial, GalleryItem, StatItem } from './types';

export const STATS_DATA: StatItem[] = [
  { id: '1', label: 'Years of Spice Alchemy', value: '12+', targetNumber: 12, suffix: '+' },
  { id: '2', label: 'Satisfied Connoisseurs', value: '15k+', targetNumber: 15300, suffix: '+' },
  { id: '3', label: 'Elite Dining Accolades', value: '8+', targetNumber: 8, suffix: '+' },
  { id: '4', label: 'Gourmet Masterpieces', value: '45+', targetNumber: 45, suffix: '+' }
];

export const MENU_ITEMS: MenuItem[] = [
  // STARTERS
  {
    id: 's-1',
    name: 'Kashmiri Saffron & Gold Paneer Tikka',
    description: 'Pressed organic cottage cheese sheets double-marinated in slow-infused Kashmiri saffron & stone-ground yellow chilies, grilled in clay embers, wrapped in a 24K edible gold leaf jacket and crowned with mint-coriander foam.',
    price: 1250,
    category: 'starters',
    tags: ["Signature", "Vegetarian"],
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    calories: 280,
    prepTime: '12 mins'
  },
  {
    id: 's-2',
    name: 'Charcoal Embers Duck Galouti Paté',
    description: 'Melt-in-mouth smoked Barbary duck mince blended with twenty-two botanical Indian spices, seated on a hand-pressed ghee sheermal puck and laced with rose petal reduction.',
    price: 1450,
    category: 'starters',
    tags: ["Rare", "Luxury"],
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    calories: 390,
    prepTime: '10 mins'
  },
  {
    id: 's-3',
    name: 'Truffle & Forest Mushroom Samosa Milles',
    description: 'Flaky, hand-laminated golden pastry cones filled with rich wild porcini and black winter truffle mash, seated on high-contrast sweet date & wild tamarind gel.',
    price: 950,
    category: 'starters',
    tags: ["Vegetarian", "Organic"],
    image: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    calories: 310,
    prepTime: '8 mins'
  },

  // MAINS
  {
    id: 'm-1',
    name: 'Slow-Baked Sigree Smoked Lamb Shank',
    description: 'Premium grass-fed lamb shank slow-braised for 48 hours in a rich, velvety aromatic bone broth infused with black stone flower, vetiver roots and saffron, finished over hickory wood embers.',
    price: 2850,
    category: 'mains',
    tags: ["Must Try", "Signature"],
    image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=800&q=80',
    rating: 5.0,
    calories: 950,
    prepTime: '25 mins'
  },
  {
    id: 'm-2',
    name: 'Tandoori Lobster Tail in Makhani Emulsion',
    description: 'Wild cold-water lobster tail roasted in clay tandoor embers, bathed in a slow-simmered vine-ripened tomato-butter emulsion, accented with dry fenugreek dust and Himalayan honey.',
    price: 3450,
    category: 'mains',
    tags: ["Luxury", "Seafood"],
    image: 'https://images.unsplash.com/photo-1559742811-82428df491db?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    calories: 620,
    prepTime: '18 mins'
  },
  {
    id: 'm-3',
    name: 'Awadhi Jackfruit & Lotus Root Dum Biryani',
    description: 'Fragrant, long-grain basmati rice layered with double-marinated jackfruit and Himalayan lotus root, sealed with whole wheat dough in a traditional copper handi, slow-cooked over active embers.',
    price: 1850,
    category: 'mains',
    tags: ["Classic", "Vegetarian"],
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    calories: 690,
    prepTime: '20 mins'
  },

  // DESSERTS
  {
    id: 'd-1',
    name: 'The Rabri & Gold Obsidian Chocolate Sphere',
    description: 'Rich 70% dark Belgian chocolate shell designed to collapse under a piping hot cardamom-infused organic Rabri stream, revealing a warm Kashmiri saffron Shahi Tukda core and pistachio praline.',
    price: 950,
    category: 'desserts',
    tags: ["Showstopper", "Signature"],
    image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=800&q=80',
    rating: 5.0,
    calories: 510,
    prepTime: '15 mins'
  },
  {
    id: 'd-2',
    name: 'Smoked Sandalwood Infused Elaneer Payasam',
    description: 'Fine tender coconut cream and organic coconut milk infused with steam-distilled pure sandalwood wood smoke, chilled and garnished with toasted pine nuts and silver flakes.',
    price: 750,
    category: 'desserts',
    tags: ["Organic", "Gluten-Free"],
    image: 'https://images.unsplash.com/photo-1516685018646-549198525c1b?auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    calories: 310,
    prepTime: '8 mins'
  },
  {
    id: 'd-3',
    name: 'Saffron & Rose Blossom Kulfi Panna Cotta',
    description: 'A sublime dialogue between French pastry and Delhi alleyways. Silky cream set with Iranian saffron, layered with wild rose jelly and crushed sweet pistachios.',
    price: 850,
    category: 'desserts',
    tags: ["Organic"],
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    calories: 350,
    prepTime: '10 mins'
  },

  // DRINKS
  {
    id: 'dr-1',
    name: 'Smoked Cardamom Single-Barrel Toddy',
    description: 'Single-barrel 12-year-old Indian single malt whisky stirred with home-brewed high-altitude cardamom tea, wild honey, and applewood smoke inside a live cedarwood bell jar.',
    price: 1450,
    category: 'drinks',
    tags: ["Signature", "Smoked"],
    image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    calories: 160,
    prepTime: '6 mins'
  },
  {
    id: 'dr-2',
    name: 'Royal Hibiscus Vetiver Elixir',
    description: 'Organic rosehip, pink hibiscus flowers, cold-pressed vetiver root distillates, and premium sparkling kombucha tonic served on a hand-carved block of crystal ice.',
    price: 750,
    category: 'drinks',
    tags: ["Mocktail", "Exotic"],
    image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    calories: 80,
    prepTime: '5 mins'
  },
  {
    id: 'dr-3',
    name: 'Golden Saffron Champagne Lassi Bubble',
    description: 'Vintage premium champagne elevated with a micro-foamed saffron yogurt reduction, organic mango honey, and activated shimmering cosmetic gold-flakes.',
    price: 2450,
    category: 'drinks',
    tags: ["Rare", "Luxury"],
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
    rating: 5.0,
    calories: 150,
    prepTime: '4 mins'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'The Royal Haveli Dining Chambers',
    category: 'interior',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'g-2',
    title: 'Charcoal Sigree Live Hearth Platings',
    category: 'culinary',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'g-3',
    title: 'Sommelier Crafted Spiced Cocktail Lounge',
    category: 'interior',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'g-4',
    title: 'Gold Leaf & saffron Meticulous Styling',
    category: 'culinary',
    image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'g-5',
    title: 'Steam-Distilled Sandalwood Cocktail Crafting',
    category: 'beverage',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'g-6',
    title: 'Maharaja Private Table Opulence',
    category: 'interior',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't-1',
    name: 'Aarav Mehra',
    role: 'Chief Gastronomy Editor, India Times',
    comment: 'The 48-hour slow-baked Sigree Lamb Shank is an unprecedented masterpiece, falling off the bone in sheer fragrant glory. Flame & Fork is redrawing the map of premium Indian dining.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 't-2',
    name: 'Lady Aurelia Harrington',
    role: 'Senior Gastronomy Critic',
    comment: 'Pure elegance. The Rabri-melted Chocolate Sphere is a spellbinding dessert presentation. To witness traditional Awadhi royal recipes paired with such impeccable precision is awe-inspiring.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 't-3',
    name: 'Chef Devendra Sen',
    role: 'Contemporary Culinary Architect',
    comment: 'Each dish is a deeply philosophical dialogue. The Kashmiri Saffron Paneer Tikka preserves ancestral charcoal roots perfectly while utilizing highly progressive plating style.',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
  }
];
