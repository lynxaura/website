import React from 'react';
import { ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-white border-t border-neutral-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-16 h-1 bg-brand-500 mx-auto mb-8 rounded-full" />
        <h2 className="text-2xl font-bold text-neutral-900 mb-6 uppercase tracking-wider">About Lynxaura Intelligence</h2>
        <p className="text-xl text-neutral-600 leading-relaxed mb-8">
          We are <strong>Lynxaura Intelligence</strong> (灵犀智能). Our mission is to bridge the gap between artificial intelligence and emotional well-being. By fusing the ancient art of astrology with cutting-edge generative AI, we create companions that don't just compute—they care.
        </p>
        <a href="#contact" className="inline-flex items-center text-brand-600 font-semibold hover:text-brand-800 transition-colors">
          Partner with us <ArrowRight size={20} className="ml-2" />
        </a>
      </div>
    </section>
  );
};

export default About;
