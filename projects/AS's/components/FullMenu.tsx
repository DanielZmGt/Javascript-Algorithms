import React from 'react';
import { MENU_ITEMS } from '../constants';
import { Button } from './Button';
import { Star, ArrowLeft, ShoppingBag } from 'lucide-react';
import { MenuItem } from '../types';

interface FullMenuProps {
  onBack: () => void;
}

export const FullMenu: React.FC<FullMenuProps> = ({ onBack }) => {
  const categories: (MenuItem['category'])[] = ['bakery', 'chef-service', 'cake', 'gluten-free'];
  
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <button onClick={onBack} className="flex items-center gap-2 text-gray-600 hover:text-bakery-600 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Home</span>
          </button>
          <h1 className="font-serif text-2xl font-bold text-bakery-900">Our Full Menu</h1>
          <button className="relative p-2 text-gray-600 hover:text-bakery-600 transition-colors">
            <ShoppingBag className="w-6 h-6" />
            <span className="absolute top-0 right-0 w-4 h-4 bg-accent-blue text-white text-[10px] flex items-center justify-center rounded-full">0</span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-bakery-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-5xl font-bold text-gray-900 mb-4">Every Bite Tells a Story</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our handcrafted selection of artisanal breads, custom cakes, and professional chef services.
          </p>
        </div>
      </div>

      {/* Menu Grid */}
      <div className="container mx-auto px-4 py-16">
        {categories.map(category => (
          <div key={category} className="mb-20">
            <h3 className="font-serif text-3xl font-bold text-gray-900 mb-8 capitalize border-b pb-4">
              {category.replace('-', ' ')}s
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {MENU_ITEMS.filter(item => item.category === category).map((item) => (
                <div key={item.id} className="flex flex-col bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 group">
                  <div className="relative h-72 overflow-hidden">
                    <img 
                      src={item.imageUrl} 
                      alt={item.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur px-4 py-2 rounded-full font-bold text-bakery-900 shadow-sm">
                      ${item.price.toFixed(2)}
                    </div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="flex items-center gap-1 text-yellow-500 mb-3">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                    </div>
                    <h4 className="font-serif text-2xl font-bold text-gray-900 mb-3">{item.name}</h4>
                    <p className="text-gray-600 mb-8 flex-1 leading-relaxed">{item.description}</p>
                    <Button className="w-full py-6 text-lg rounded-2xl group-hover:bg-accent-blue transition-colors">
                      Add to Order
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="bg-bakery-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-serif text-4xl font-bold mb-6">Need something custom?</h3>
          <p className="text-bakery-200 mb-10 max-w-xl mx-auto">Whether it's a wedding cake or a private dinner party, Aunt Sarah is here to make your event unforgettable.</p>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-bakery-900">
            Request Custom Quote
          </Button>
        </div>
      </div>
    </div>
  );
};
