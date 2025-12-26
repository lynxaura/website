import React from 'react';
import { Mail, Instagram } from 'lucide-react';

// Custom icons for Chinese social media platforms
const XiaohongshuIcon = () => (
  <img
    src="/images/logo/xiaohongshu.png"
    alt="Xiaohongshu"
    className="w-12 h-12 object-contain rounded-xl"
  />
);

const DouyinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
  </svg>
);

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-neutral-900 text-white relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-900/40 via-neutral-900 to-neutral-900 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Grid Layout: About on left, Contact on right for desktop */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* About Section - Left Side */}
          <div className="text-center lg:text-left">
            <div className="w-16 h-1 bg-brand-500 mb-8 rounded-full mx-auto lg:mx-0" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 uppercase tracking-wider">
              About Lynxaura Intelligence
            </h2>
            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
              We are <strong className="text-white">Lynxaura Intelligence</strong> (灵犀智能). Our mission is to bridge the gap between artificial intelligence and emotional well-being. By fusing the ancient art of astrology with cutting-edge generative AI, we create companions that don't just compute—they care.
            </p>
          </div>

          {/* Contact Info - Right Side */}
          <div className="text-center lg:text-left">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Let's Connect</h3>
            <p className="text-neutral-400 mb-8 text-lg">
              Interested in distribution, media coverage, or investment opportunities?
              We'd love to chat.
            </p>

            <div className="space-y-6">
              <a href="mailto:hello@lynxaura.com" className="flex items-center gap-4 p-4 rounded-xl bg-neutral-800 hover:bg-neutral-700 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-brand-500/20 text-brand-400 flex items-center justify-center group-hover:bg-brand-500 group-hover:text-white transition-colors flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div className="text-left">
                   <p className="text-sm text-neutral-400">Email Us</p>
                   <p className="text-lg font-medium">hello@lynxaura.com</p>
                </div>
              </a>

              <div className="flex gap-4 justify-center lg:justify-start">
                <a
                  href="https://www.instagram.com/lynxaura666"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl border border-neutral-700 flex items-center justify-center hover:bg-gradient-to-br hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#bc1888] hover:border-transparent transition-all text-neutral-400 hover:text-white"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://xhslink.com/m/54jEvUWnwx0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center hover:scale-110 transition-all"
                  aria-label="Xiaohongshu"
                >
                  <XiaohongshuIcon />
                </a>
                <a
                  href="https://v.douyin.com/MeAgje8kxCM/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl border border-neutral-700 flex items-center justify-center hover:bg-black hover:border-black transition-all text-neutral-400 hover:text-white"
                  aria-label="Douyin"
                >
                  <DouyinIcon />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
