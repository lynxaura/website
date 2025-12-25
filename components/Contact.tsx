import React from 'react';
import { Mail, Instagram, Linkedin, Twitter, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-neutral-900 text-white relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-900/40 via-neutral-900 to-neutral-900 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Left: Contact Info */}
          <div>
            <h2 className="text-4xl font-bold mb-6">Let's Connect at CES</h2>
            <p className="text-neutral-400 mb-8 text-lg">
              Interested in distribution, media coverage, or investment opportunities? 
              We'd love to chat.
            </p>
            
            <div className="space-y-6">
              <a href="mailto:hello@aimoon.ai" className="flex items-center gap-4 p-4 rounded-xl bg-neutral-800 hover:bg-neutral-700 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-brand-500/20 text-brand-400 flex items-center justify-center group-hover:bg-brand-500 group-hover:text-white transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                   <p className="text-sm text-neutral-400">Email Us</p>
                   <p className="text-lg font-medium">hello@aimoon.ai</p>
                </div>
              </a>

              <div className="flex gap-4">
                {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center hover:bg-brand-500 hover:border-brand-500 transition-all text-neutral-400 hover:text-white">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Newsletter */}
          <div className="bg-neutral-800/50 backdrop-blur-sm p-8 rounded-3xl border border-neutral-700">
            <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
            <p className="text-neutral-400 mb-6">Join our newsletter for launch updates and exclusive discounts.</p>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="email" className="sr-only">Email address</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Enter your email" 
                  className="w-full px-5 py-4 rounded-xl bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                />
              </div>
              <button type="submit" className="w-full py-4 rounded-xl bg-brand-600 text-white font-bold text-lg hover:bg-brand-500 transition-colors flex items-center justify-center gap-2">
                Subscribe <Send size={18} />
              </button>
            </form>
            <p className="text-xs text-neutral-500 mt-4 text-center">
              By subscribing, you agree to our Privacy Policy. No spam, ever.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
