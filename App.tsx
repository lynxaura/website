import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import KOLGallery from './components/KOLGallery';
import Reviews from './components/Reviews';
import About from './components/About';
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
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
