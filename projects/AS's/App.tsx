import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { MenuGrid } from './components/MenuGrid';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Chatbot } from './components/Chatbot';
import { FullMenu } from './components/FullMenu';

function App() {
  const [showFullMenu, setShowFullMenu] = useState(false);

  if (showFullMenu) {
    return (
      <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-bakery-200 selection:text-bakery-900">
        <FullMenu onBack={() => setShowFullMenu(false)} />
        <Chatbot />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-bakery-200 selection:text-bakery-900">
      <Header onShowMenu={() => setShowFullMenu(true)} />
      <main>
        <Hero onShowMenu={() => setShowFullMenu(true)} />
        <Features />
        <MenuGrid onShowMenu={() => setShowFullMenu(true)} />
        <Testimonials />
        <Contact />
      </main>
      <Chatbot />
    </div>
  );
}

export default App;
