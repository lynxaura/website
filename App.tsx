import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import KOLGallery from './components/KOLGallery';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-neutral-900 bg-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ProductShowcase />
        <KOLGallery />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
