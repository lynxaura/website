import React from 'react';
import { ChevronDown, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-brand-50 flex items-center justify-center">

      {/* Background Animated Blobs (Nebula Effect) */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float-slow" />
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-aether-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float-slower" />
      <div className="absolute bottom-[-20%] left-[20%] w-[600px] h-[600px] bg-lumina-100 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float-slow" style={{ animationDelay: '2s' }} />

      {/* Twinkling Stars (Darker for visibility on light bg) */}
      <div className="absolute inset-0 opacity-50">
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-brand-200 shadow-sm mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-heal-500 animate-pulse" />
          <span className="text-brand-900 text-sm font-semibold tracking-wide">
            Debuting at CES 2026
          </span>
        </div>

        {/* Headlines */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-neutral-900 mb-6 drop-shadow-sm">
          <span className="block text-brand-950">Cosmic Wisdom</span>
          <span className="bg-clip-text text-transparent bg-brand-gradient">
            In Your Pocket
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-600 mb-10 leading-relaxed font-light">
          Your AI Zodiac Companion that understands your stars and your heart.
          Connect with the universe through technology.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <a
            href="#features"
            className="px-8 py-4 rounded-full bg-brand-gradient text-white font-semibold text-lg hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            Meet AiMOON
          </a>
          <button className="px-8 py-4 rounded-full bg-white/50 backdrop-blur-md border border-brand-200 text-brand-900 font-medium text-lg hover:bg-white/80 transition-all flex items-center justify-center gap-3 group">
            <div className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play size={12} fill="currentColor" />
            </div>
            Watch Video
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-brand-400">
        <ChevronDown size={32} />
      </div>
    </div>
  );
};

export default Hero;