import React, { useState } from 'react';
import { ChevronDown, Play, Sparkles, X, ArrowRight, Check } from 'lucide-react';
import VideoModal from './VideoModal';

const Hero: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleJoinWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setSubmitStatus('loading');

    try {
      // Use our own Azure Function proxy to bypass regional restrictions (GFW)
      // The function lives at /api/submit-waitlist
      fetch('/api/submit-waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      }).catch(err => console.error("Proxy submission error:", err));

      // Optimistic success for best UX
      setTimeout(() => {
        setSubmitStatus('success');
        setEmail('');
      }, 1000);
    } catch (error) {
      console.error('Error submitting email:', error);
      setSubmitStatus('success');
    }
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden flex items-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">

      {/* Background Blobs - Reverted to Lighter, Dreamy Theme */}
      <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-indigo-200/30 rounded-full blur-[100px] mix-blend-multiply opacity-70 animate-float-slow" />
      <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-purple-200/30 rounded-full blur-[80px] mix-blend-multiply opacity-60 animate-float-slower" />
      <div className="absolute bottom-[-10%] left-[20%] w-[700px] h-[700px] bg-pink-200/30 rounded-full blur-[90px] mix-blend-multiply opacity-50 animate-float-slow" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-20 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[80vh]">

          {/* Left Column: Text Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 relative z-20">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-indigo-100 shadow-sm mb-8 animate-fade-in-up hover:border-indigo-200 transition-colors cursor-default">
              <Sparkles className="w-4 h-4 text-indigo-500 fill-indigo-100" />
              <span className="text-indigo-950 text-xs md:text-sm font-bold tracking-wide uppercase">
                The Future of Companionship
              </span>
            </div>

            {/* Headlines */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-neutral-900 mb-8 leading-[1.05]">
              Find Your <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                Cosmic Soul.
              </span>
            </h1>

            <p className="max-w-xl text-lg md:text-xl text-neutral-600 mb-10 leading-relaxed font-light">
              The first AI-powered physical companion that evolves with your stars. Designed for mindfulness, powered by astrology.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button
                onClick={() => setIsWaitlistOpen(true)}
                className="px-8 py-4 rounded-full bg-neutral-900 text-white font-semibold text-lg hover:bg-neutral-800 hover:scale-105 transition-all duration-300 shadow-xl flex items-center justify-center gap-2"
              >
                Join the Waitlist
              </button>
              <button
                onClick={() => setIsVideoOpen(true)}
                className="px-8 py-4 rounded-full bg-white border border-neutral-200 text-neutral-900 font-medium text-lg hover:border-neutral-300 hover:bg-neutral-50 transition-all flex items-center justify-center gap-3 group"
              >
                <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play size={12} fill="currentColor" />
                </div>
                Watch the Film
              </button>
            </div>

            <p className="mt-6 text-xs text-neutral-400 font-medium tracking-wide">
              LIMITED FIRST BATCH • COMING 2026
            </p>
          </div>

          {/* Right Column: Hero Image */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
            {/* Simplified Glow behind product - matching light theme */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-indigo-100/40 to-purple-100/40 blur-[80px] rounded-full" />

            {/* The Image */}
            <picture>
              <source srcSet="/images/sprites/sprite-1.webp" type="image/webp" />
              <img
                src="/images/sprites/sprite-1.png"
                alt="AiMOON Device"
                className="relative z-10 w-full max-w-[500px] lg:max-w-[650px] h-auto object-contain animate-float-slow drop-shadow-[0_20px_40px_rgba(79,70,229,0.15)]"
                loading="eager"
              />
            </picture>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-neutral-400 hidden lg:block">
        <ChevronDown size={28} />
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        youtubeId="HeEd6jI1nu4"
        bilibiliId="BV1xx411c7mD"
      />

      {/* Waitlist Modal */}
      {isWaitlistOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 animate-fade-in">
          <div
            className="absolute inset-0 bg-neutral-900/60 backdrop-blur-sm"
            onClick={() => setIsWaitlistOpen(false)}
          />
          <div className="relative bg-white rounded-3xl p-8 w-full max-w-md shadow-2xl animate-scale-in">
            <button
              onClick={() => setIsWaitlistOpen(false)}
              className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-neutral-600 rounded-full hover:bg-neutral-100 transition-colors"
            >
              <X size={20} />
            </button>

            {submitStatus === 'success' ? (
              <div className="py-8 text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <Check size={32} />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">You're on the list!</h3>
                <p className="text-neutral-500 mb-6">We'll let you know when AiMOON is ready to meet you.</p>
                <button
                  onClick={() => setIsWaitlistOpen(false)}
                  className="px-6 py-2.5 rounded-full bg-neutral-900 text-white font-medium hover:bg-neutral-800 transition-colors"
                >
                  Close
                </button>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-4">
                    <Sparkles size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">Join the Waitlist</h3>
                  <p className="text-neutral-500">Be the first to know when limited batches drop. No spam, we promise.</p>
                </div>

                <form onSubmit={handleJoinWaitlist} className="space-y-4">
                  <div>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all placeholder:text-neutral-400"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={submitStatus === 'loading'}
                    className="w-full py-3.5 rounded-xl bg-neutral-900 text-white font-semibold hover:bg-neutral-800 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {submitStatus === 'loading' ? (
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        Join Now <ArrowRight size={18} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;