import React from 'react';
import { ChefHat, Wheat, Clock, Truck } from 'lucide-react';

export const Features: React.FC = () => {
  const features = [
    {
      icon: <Wheat className="w-8 h-8" />,
      title: "Organic Ingredients",
      desc: "We source 100% organic flour and locally grown produce for maximum flavor."
    },
    {
      icon: <ChefHat className="w-8 h-8" />,
      title: "Private Chef",
      desc: "Book Aunt Sarah for intimate dinner parties, weddings, or weekly meal prep."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Fresh Daily",
      desc: "Nothing is kept overnight. We bake small batches throughout the day."
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Local Delivery",
      desc: "Free delivery within 5 miles for all orders over $30."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-bakery-50 hover:bg-bakery-100 transition-colors">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-bakery-600 shadow-sm mb-6">
                {feature.icon}
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
