import React from 'react';
import { Button } from './Button';
import { ArrowRight, Utensils } from 'lucide-react';

interface HeroProps {
  onShowMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onShowMenu }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/bakery.jpg" 
          alt="Freshly baked goods and kitchen preparation" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent/20"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-2xl animate-in slide-in-from-left duration-700 fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-bakery-100 text-bakery-800 rounded-full text-sm font-semibold mb-6 border border-bakery-200">
            <Utensils className="w-4 h-4 text-accent-blue" />
            <span>In-Home Chef Services Available</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-6">
            Fresh. Healthy. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-bakery-600 to-accent-blue font-cursive pr-4">Cooked in Your Kitchen.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg leading-relaxed">
            From organic sourdough to weekly meal prep, Aunt Sarah brings nutritious, home-cooked goodness directly to your table without the stress.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" onClick={onShowMenu} className="group bg-bakery-600 hover:bg-bakery-700">
              View Weekly Menu
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-white">
              Chef Services Info
            </Button>
          </div>
          
          <div className="mt-12 flex items-center gap-8 text-sm font-medium text-gray-600">
            <div className="flex -space-x-3">
              {[1,2,3,4].map(i => (
                <img key={i} src={`https://picsum.photos/seed/${i + 10}/100/100`} alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
              ))}
            </div>
            <div>
              <div className="flex text-yellow-500">★★★★★</div>
              <p>Busy families love us!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};