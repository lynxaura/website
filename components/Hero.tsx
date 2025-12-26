import React, { useState } from 'react';
import { ChevronDown, Play } from 'lucide-react';
import VideoModal from './VideoModal';

const Hero: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className="relative w-full min-h-screen overflow-hidden flex items-center bg-gradient-to-br from-brand-50 via-purple-50 to-pink-50">

      {/* Background Animated Blobs (Nebula Effect) - Enhanced for sprite integration */}
      <div className="absolute top-[-5%] left-[-5%] w-[600px] h-[600px] bg-brand-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-80 animate-float-slow" />
      <div className="absolute top-[10%] right-[0%] w-[800px] h-[800px] bg-purple-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float-slower" />
      <div className="absolute bottom-[10%] right-[5%] w-[700px] h-[700px] bg-violet-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-[30%] right-[10%] w-[500px] h-[500px] bg-fuchsia-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float-slower" style={{ animationDelay: '4s' }} />

      {/* Twinkling Stars */}
      <div className="absolute inset-0 opacity-50 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-brand-400 animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 2}px`,
              height: `${Math.random() * 3 + 2}px`,
              animationDuration: `${Math.random() * 3 + 2}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left Column: Text Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-brand-200 shadow-sm mb-8 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-heal-500 animate-pulse" />
              <span className="text-brand-900 text-sm font-semibold tracking-wide">
                Debuting at CES 2026
              </span>
            </div>

            {/* Headlines */}
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-neutral-900 mb-6 drop-shadow-sm leading-[1.1]">
              <span className="block text-brand-950">Cosmic Wisdom</span>
              <span className="bg-clip-text text-transparent bg-brand-gradient">
                On The Go
              </span>
            </h1>

            <p className="max-w-xl text-lg md:text-xl text-neutral-600 mb-10 leading-relaxed font-light">
              Meet your new AI Zodiac Companions. Uniquely designed to understand your stars, soothe your heart, and grow with you.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="#features"
                className="px-8 py-4 rounded-full bg-brand-gradient text-white font-semibold text-lg hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Meet the Family
              </a>
              <button
                onClick={() => {
                  console.log('Watch Video button clicked');
                  setIsVideoOpen(true);
                }}
                className="px-8 py-4 rounded-full bg-white/50 backdrop-blur-md border border-brand-200 text-brand-900 font-medium text-lg hover:bg-white/80 transition-all flex items-center justify-center gap-3 group"
              >
                <div className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                   <Play size={12} fill="currentColor" />
                </div>
                Watch Video
              </button>
            </div>
          </div>

          {/* Right Column: Hero Image (The Sprites) */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
             {/* Enhanced multi-layer glow behind the sprites - matching sprite image background */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-purple-400/20 blur-[100px] rounded-full" />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75%] h-[75%] bg-violet-300/25 blur-[80px] rounded-full animate-pulse" />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-fuchsia-300/20 blur-[60px] rounded-full animate-float-slow" />

             {/* The Image */}
             <picture>
               <source srcSet="/images/sprites/sprite-1.webp" type="image/webp" />
               <img
                 src="/images/sprites/sprite-1.png"
                 alt="AiMOON Zodiac Family Collection"
                 className="relative z-10 w-full max-w-[600px] h-auto object-contain animate-float-slow drop-shadow-[0_20px_60px_rgba(167,139,250,0.4)] hover:scale-105 transition-transform duration-700 ease-in-out"
                 loading="eager"
               />
             </picture>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-brand-400 hidden lg:block">
        <ChevronDown size={32} />
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        youtubeId="HeEd6jI1nu4"  // YouTube 视频ID
        bilibiliId="BV1xx411c7mD" // Bilibili 视频ID (BV号) - 请替换成你的B站视频
      />
    </div>
  );
};

export default Hero;