import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Search } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { Button } from './Button';

interface HeaderProps {

  onShowMenu: () => void;

}



export const Header: React.FC<HeaderProps> = ({ onShowMenu }) => {

  const [isScrolled, setIsScrolled] = useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);



  useEffect(() => {

    const handleScroll = () => {

      setIsScrolled(window.scrollY > 20);

    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, []);



  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {

    if (href === '#menu') {

      e.preventDefault();

      onShowMenu();

    }

    setIsMobileMenuOpen(false);

  };



  return (

    <header 

      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${

        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-white/50 backdrop-blur-sm py-4'

      }`}

    >

      <div className="container mx-auto px-4 md:px-6">

        <div className="flex items-center justify-between">

          {/* Logo */}

          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>

            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-accent-blue group-hover:scale-105 transition-transform flex items-center justify-center bg-white">

               <img src="/images/AS's.jpg" alt="Aunt Sarah's Logo" className="w-full h-full object-cover" />

            </div>

            <div className="flex flex-col -space-y-1">

                <span className={`font-cursive text-3xl font-bold text-bakery-600`}>

                Aunt Sarah's

                </span>

                <span className="text-xs font-sans tracking-widest text-accent-blue font-semibold uppercase pl-1">

                    Bakery

                </span>

            </div>

          </div>



          {/* Desktop Nav */}

          <nav className="hidden md:flex items-center gap-8">

            {NAV_LINKS.map((link) => (

              <a 

                key={link.name} 

                href={link.href}

                onClick={(e) => handleNavClick(e, link.href)}

                className={`text-sm font-medium hover:text-bakery-600 transition-colors ${

                  isScrolled ? 'text-gray-700' : 'text-gray-800'

                }`}

              >

                {link.name}

              </a>

            ))}

          </nav>



          {/* Actions */}

          <div className="hidden md:flex items-center gap-4">

            <button className="p-2 text-gray-600 hover:text-bakery-600 transition-colors">

              <Search className="w-5 h-5" />

            </button>

            <button className="relative p-2 text-gray-600 hover:text-bakery-600 transition-colors">

              <ShoppingBag className="w-5 h-5" />

              <span className="absolute top-0 right-0 w-2 h-2 bg-accent-blue rounded-full"></span>

            </button>

            <Button size="sm" variant="primary" onClick={onShowMenu}>

              Order Now

            </Button>

          </div>



          {/* Mobile Menu Button */}

          <button 

            className="md:hidden p-2 text-gray-700"

            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}

          >

            {isMobileMenuOpen ? <X /> : <Menu />}

          </button>

        </div>

      </div>



      {/* Mobile Menu Overlay */}

      {isMobileMenuOpen && (

        <div className="absolute top-full left-0 right-0 bg-white border-t shadow-lg md:hidden p-4 flex flex-col gap-4 animate-in slide-in-from-top-2">

          {NAV_LINKS.map((link) => (

            <a 

              key={link.name} 

              href={link.href}

              className="text-lg font-medium text-gray-800 py-2 border-b border-gray-100"

              onClick={(e) => handleNavClick(e, link.href)}

            >

              {link.name}

            </a>

          ))}

          <Button className="w-full mt-2" onClick={onShowMenu}>Order Online</Button>

        </div>

      )}

    </header>

  );

};
