import React, { useState } from 'react';
import { UserCog, Brain, TrendingUp, Calendar, Sparkles } from 'lucide-react';
import { ProductFeature } from '../types';
import Constellation from './Constellation';

const features: ProductFeature[] = [
  {
    id: '0',
    title: 'Your Personal AI',
    description: 'Uniquely tailored to understand your personality, adapting its responses to match your vibe and needs.',
    icon: UserCog,
  },
  {
    id: '1',
    title: 'Remembers Your Journey',
    description: 'Cherishes important moments with you, building a shared history that grows deeper over time.',
    icon: Brain,
  },
  {
    id: '2',
    title: 'Mood Insights',
    description: 'Visualize your emotional patterns and gain deeper understanding of your feelings through smart tracking.',
    icon: TrendingUp,
  },
  {
    id: '3',
    title: 'Astrological Wisdom',
    description: 'Get personalized readings based on your birth chart, combining ancient wisdom with modern AI.',
    icon: Calendar,
  },
];

const productImages = [
  "/images/product/product-1", // Group
  "/images/product/product-2", // Single 1
  "/images/product/product-3", // Single 2
  "/images/product/product-4", // Single 3
  "/images/product/product-5", // Single 4
];

const productLabels = [
  "The First Generation Collection", // 0 - Group
  "Libra Fairy",      // 1 - Product 2
  "Scorpio Fairy",    // 2 - Product 3
  "Sagittarius Fairy",// 3 - Product 4
  "Capricorn Fairy",  // 4 - Product 5
];

const ProductShowcase: React.FC = () => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <section id="features" className="py-12 lg:py-24 bg-neutral-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-50/50 skew-x-12 translate-x-20" />

      {/* Interactive Constellations */}
      <div className="absolute top-20 left-10 opacity-60 hidden lg:block pointer-events-none">
        <Constellation variant="aries" color="#DDD6FE" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header / Badge - Centered to fix alignment */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-100 text-brand-700 font-semibold text-xs uppercase tracking-wider">
            <Sparkles size={14} />
            <span>Series 1: The First 4</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left: Image Gallery */}
          <div className="flex flex-col gap-6 sticky top-24">
            {/* Main Display Image */}
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
              <picture>
                <source srcSet={`${productImages[activeImage]}.webp`} type="image/webp" />
                <img
                  src={`${productImages[activeImage]}.webp`}
                  alt="AiMOON Zodiac Fairy"
                  className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-105"
                  loading="lazy"
                />
              </picture>

              {/* Image Label */}
              <div className="absolute bottom-6 left-6 px-5 py-2.5 bg-white/90 backdrop-blur-md rounded-full shadow-sm border border-white/50">
                <span className="text-sm font-bold text-neutral-900 tracking-wide">
                  {productLabels[activeImage]}
                </span>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3 justify-center lg:justify-start overflow-x-auto py-2 px-2 mask-linear">
              {productImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 rounded-2xl overflow-hidden border-2 transition-all duration-300 ${activeImage === idx
                    ? 'border-brand-500 scale-110 shadow-lg ring-2 ring-brand-200 ring-offset-2'
                    : 'border-white opacity-70 hover:opacity-100 hover:scale-105'
                    }`}
                >
                  <picture>
                    <source srcSet={`${img}.webp`} type="image/webp" />
                    <img src={`${img}.webp`} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" loading="lazy" />
                  </picture>
                </button>
              ))}
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col justify-center min-h-full py-4">

            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 leading-[1.1]">
              Meet Your <br />
              <span className="text-transparent bg-clip-text bg-brand-gradient">Zodiac Fairy.</span>
            </h2>

            <p className="text-neutral-600 text-lg mb-10 leading-relaxed font-light">
              We’ve launched with Libra, Scorpio, Sagittarius, and Capricorn. These first four fairies are just the beginning of our cosmic family.
            </p>

            {/* Compact Features List */}
            <div className="space-y-4 mb-10">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-lg hover:shadow-brand-100/50 transition-all duration-300 border border-transparent hover:border-brand-50"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex-shrink-0 flex items-center justify-center mt-1">
                    <feature.icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-neutral-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-neutral-500 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Bottom Callout - Centered to balance layout */}
        <div className="mt-10 lg:mt-16 flex justify-center">
          <div className="flex items-center gap-4 px-8 py-5 rounded-2xl bg-white border border-neutral-100 shadow-sm hover:shadow-md transition-shadow max-w-2xl w-full">
            <div className="p-3 bg-neutral-900 rounded-xl text-white">
              <Sparkles size={20} />
            </div>
            <div className="text-sm text-neutral-600 flex-1">
              <span className="font-bold text-neutral-900 block mb-0.5 text-base">More Signs Arriving Soon</span>
              Gemini, Virgo, Aries... stay tuned for the full 12 Zodiac Fairies.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProductShowcase;