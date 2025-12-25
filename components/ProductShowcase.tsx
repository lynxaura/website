import React, { useState } from 'react';
import { MessageCircleHeart, Star, Smile, Smartphone } from 'lucide-react';
import { ProductFeature } from '../types';
import Constellation from './Constellation';

const features: ProductFeature[] = [
  {
    id: '1',
    title: 'AI Conversation',
    description: 'Deep, meaningful chats tailored to your personality and emotional state.',
    icon: MessageCircleHeart,
  },
  {
    id: '2',
    title: 'Zodiac Personality',
    description: 'Powered by astrological data to provide guidance aligned with the stars.',
    icon: Star,
  },
  {
    id: '3',
    title: 'Warm Companion',
    description: 'Always there to listen, comfort, and celebrate with you. A true friend.',
    icon: Smile,
  },
  {
    id: '4',
    title: 'Cute & Portable',
    description: 'Designed to fit in your palm or bag. Take your cosmic guide anywhere.',
    icon: Smartphone,
  },
];

const ProductShowcase: React.FC = () => {
  const [activeImage, setActiveImage] = useState(0);
  
  // Placeholder images for the product
  const productImages = [
    "/images/product/product-1.png",
    "/images/product/product-2.png",
    "/images/product/product-3.png",
    "/images/product/product-4.png",
    "/images/product/product-5.png",
    "/images/product/product-6.png",
  ];

  return (
    <section id="features" className="py-24 bg-neutral-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-50/50 skew-x-12 translate-x-20" />
      
      {/* Interactive Constellations */}
      <div className="absolute top-20 left-10 opacity-60 hidden lg:block">
        <Constellation variant="aries" color="#DDD6FE" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-60 hidden lg:block">
        <Constellation variant="cassiopeia" color="#FCD34D" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Image Gallery */}
          <div className="flex flex-col gap-4">
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
              <img 
                src={productImages[activeImage]} 
                alt="AiMOON Product Detail" 
                className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
            <div className="flex gap-4 justify-center">
              {productImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                    activeImage === idx ? 'border-brand-500 scale-110 shadow-lg' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full bg-brand-100 text-brand-700 font-semibold text-sm mb-4">
              Explore Features
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              More Than Just a Toy. <br/>
              <span className="text-transparent bg-clip-text bg-brand-gradient">It's a Connection.</span>
            </h2>
            <p className="text-neutral-600 text-lg mb-10 leading-relaxed">
              AiMOON combines advanced large language models with the timeless wisdom of astrology. Encased in a soft, tactile shell, it's designed to be your daily source of comfort and inspiration.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div 
                  key={feature.id}
                  className="p-6 rounded-2xl bg-white border border-neutral-100 shadow-sm hover:shadow-xl hover:border-brand-200 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-4 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                    <feature.icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">{feature.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;