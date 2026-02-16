import React from 'react';
import { MENU_ITEMS } from '../constants';
import { Button } from './Button';
import { Star } from 'lucide-react';

interface MenuGridProps {
  onShowMenu: () => void;
}

export const MenuGrid: React.FC<MenuGridProps> = ({ onShowMenu }) => {
  return (
    <section id="menu" className="py-20 bg-bakery-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-bakery-900 mb-4">Fresh From The Oven</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our daily selection of artisanal breads, pastries, and chef-prepared meals. Made with organic, locally sourced ingredients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MENU_ITEMS.slice(0, 6).map((item) => (
            <div key={item.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {item.popular && (
                  <span className="absolute top-4 left-4 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full">
                    Best Seller
                  </span>
                )}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-bakery-900 font-bold px-3 py-1 rounded-full">
                  ${item.price.toFixed(2)}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 text-yellow-500 text-sm mb-2">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-gray-400">4.9 (120 reviews)</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm mb-6 line-clamp-2">{item.description}</p>
                <Button variant="outline" className="w-full group-hover:bg-bakery-600 group-hover:text-white group-hover:border-bakery-600">
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="secondary" onClick={onShowMenu}>View Full Menu</Button>
        </div>
      </div>
    </section>
  );
};
