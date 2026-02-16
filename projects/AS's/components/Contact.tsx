import React from 'react';
import { Button } from './Button';
import { Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-white pt-20 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        {/* Newsletter Hero */}
        <div className="bg-gradient-to-br from-bakery-100 to-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 mb-20 border border-bakery-200">
          <div className="max-w-lg">
            <h3 className="font-serif text-3xl font-bold text-bakery-900 mb-2">Join Aunt Sarah's Family Table</h3>
            <p className="text-gray-600">Subscribe for weekly menus, secret recipes, and an exclusive 10% discount on your first meal prep order.</p>
          </div>
          <div className="flex w-full md:w-auto gap-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 md:w-64 px-6 py-3 rounded-full border border-bakery-200 focus:outline-none focus:ring-2 focus:ring-bakery-500"
            />
            <Button className="bg-accent-blue hover:bg-blue-600">Subscribe</Button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-gray-100">
          <div className="space-y-4">
            <span className="font-cursive text-3xl font-bold text-bakery-600">Aunt Sarah's</span>
            <p className="text-gray-500 text-sm leading-relaxed">
              Bringing the warmth of home cooking to your special moments. Bakery, private chef, and catering services.
            </p>
            <div className="flex gap-4 text-bakery-600">
              <a href="https://www.facebook.com/profile.php?id=61559218924235" target="_blank" rel="noopener noreferrer">
                <Facebook className="cursor-pointer hover:text-accent-blue transition-colors" />
              </a>
              <Instagram className="cursor-pointer hover:text-accent-blue transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-bakery-600">Home</a></li>
              <li><a href="#menu" className="hover:text-bakery-600">Our Menu</a></li>
              <li><a href="#services" className="hover:text-bakery-600">Services</a></li>
              <li><a href="#" className="hover:text-bakery-600">Gift Cards</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Service Area</h4>
            <ul className="space-y-2 text-sm text-gray-600">
               <li>Culinary City & Surrounds</li>
               <li>In-Home Cooking</li>
               <li>Farmers Markets</li>
               <li>Local Delivery</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent-blue" />
                <a href="mailto:Auntsarahsbakery325@gmail.com" className="hover:underline">Auntsarahsbakery325@gmail.com</a>
              </li>
              <li className="flex flex-col gap-2 mt-2">
                 <span className="text-xs text-gray-400">Scan to Message on Facebook</span>
                 <div className="relative w-32 h-32 overflow-hidden rounded-lg border border-gray-100 shadow-sm bg-white">
                   <img 
                     src="/images/in-home chef services.jpg" 
                     alt="Facebook QR Code" 
                     className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300%] max-w-none" 
                   />
                 </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Aunt Sarah's Services. All rights reserved.
        </div>
      </div>
    </footer>
  );
};