import { MenuItem, Testimonial } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Sourdough Sandwich Bread',
    description: 'Classic artisanal sourdough, slow-fermented and perfect for sandwiches.',
    price: 8.00,
    category: 'bakery',
    imageUrl: '/images/dough.jpg',
    popular: true
  },
  {
    id: '2',
    name: 'Handmade Croissants',
    description: 'Buttery, flaky layers. Available in Plain, Chocolate, or Garlic Herb.',
    price: 6.00,
    category: 'bakery',
    imageUrl: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=800',
    popular: true
  },
  {
    id: '3',
    name: 'Artisan Cookies',
    description: 'Soft butter cookies available in various seasonal flavors.',
    price: 2.00,
    category: 'bakery',
    imageUrl: '/images/cookies.jpg',
    popular: true
  },
  {
    id: '4',
    name: 'In-Home Chef Services',
    description: 'Weekly meal prep, family-style meals, or cooking sessions in your kitchen.',
    price: 85.00,
    category: 'chef-service',
    imageUrl: '/images/in-home chef services.jpg',
    popular: true
  },
  {
    id: '5',
    name: 'Cinnamon Rolls',
    description: 'Soft, gooey rolls with rich cinnamon filling and cream cheese frosting.',
    price: 4.00,
    category: 'bakery',
    imageUrl: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '6',
    name: 'Conchas',
    description: 'Traditional Mexican sweet bread with a crunchy cookie topping.',
    price: 4.00,
    category: 'bakery',
    imageUrl: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '7',
    name: 'Brioche Buns',
    description: 'Rich, buttery brioche buns. Great for burgers or sliders. 2 for $5!',
    price: 3.00,
    category: 'bakery',
    imageUrl: '/images/FM stand.jpg'
  },
  {
    id: '8',
    name: 'Banana Bread',
    description: 'Moist and delicious homemade banana bread.',
    price: 4.00,
    category: 'bakery',
    imageUrl: '/images/FM Stand1.jpg'
  },
  {
    id: '9',
    name: 'Carrot Cake',
    description: 'Rich carrot cake with signature cream cheese frosting slice.',
    price: 6.00,
    category: 'cake',
    imageUrl: 'https://images.unsplash.com/photo-1567171466295-4afa58145220?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '10',
    name: 'Vanilla Cake',
    description: 'Classic vanilla bean cake with silky buttercream slice.',
    price: 6.00,
    category: 'cake',
    imageUrl: 'https://images.unsplash.com/photo-1535141192574-5d48bb7c40c3?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '11',
    name: 'GF Banana Bread',
    description: 'Our famous banana bread, made with gluten-free ingredients.',
    price: 5.00,
    category: 'gluten-free',
    imageUrl: 'https://images.unsplash.com/photo-1515467837915-15c477742fa1?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '12',
    name: 'GF Artisan Cookies',
    description: 'Deliciously soft cookies made with gluten-free flour.',
    price: 2.00,
    category: 'gluten-free',
    imageUrl: '/images/cookies.jpg'
  },
  {
    id: '13',
    name: 'Hand Pies',
    description: 'Flaky pastry filled with seasonal fruit or savory fillings.',
    price: 4.00,
    category: 'bakery',
    imageUrl: 'https://images.unsplash.com/photo-1601000938259-9e92002320b2?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '14',
    name: 'Vanilla Marshmallows',
    description: 'Hand-cut, fluffy vanilla bean marshmallows.',
    price: 2.00,
    category: 'bakery',
    imageUrl: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=800'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah M.',
    role: 'Meal Prep Client',
    content: "Having healthy, home-cooked meals ready in my fridge has been a lifesaver for our busy family.",
    rating: 5
  },
  {
    id: 't2',
    name: 'James L.',
    role: 'Market Regular',
    content: "The sourdough is incredible. Best I've had outside of San Francisco.",
    rating: 5
  },
  {
    id: 't3',
    name: 'Maria G.',
    role: 'Private Dinner',
    content: "Aunt Sarah made our anniversary dinner so special. The food was 5-star quality right in our dining room.",
    rating: 5
  }
];

export const NAV_LINKS = [
  { name: 'Home', href: '#' },
  { name: 'Menu', href: '#menu' },
  { name: 'Chef Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];