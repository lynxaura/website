import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-brand-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Lynxaura | AiMOON */}
          <a href="#" className="flex items-center gap-0.5 sm:gap-1">
            {/* Lynxaura Logo */}
            <img
              src="/images/logo/lynxaura-logo.png"
              alt="Lynxaura Intelligence"
              className="h-10 sm:h-12 md:h-14 w-auto transition-all"
            />

            {/* Divider */}
            <div className={`w-px h-8 sm:h-9 md:h-10 transition-colors ${
              isScrolled ? 'bg-neutral-300' : 'bg-brand-300'
            }`} />

            {/* AiMOON Logo */}
            <img
              src="/images/logo/aimoon-logo.png"
              alt="AiMOON"
              className="h-14 sm:h-16 md:h-20 w-auto transition-all"
              style={{
                filter: 'brightness(0) saturate(100%) invert(13%) sepia(77%) saturate(3072%) hue-rotate(255deg) brightness(91%) contrast(98%)'
              }}
            />
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-brand-500 ${
                  isScrolled ? 'text-neutral-700' : 'text-brand-900/80'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-full bg-brand-gradient text-white font-medium shadow-lg hover:shadow-brand-500/30 transition-shadow text-sm"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md ${isScrolled ? 'text-neutral-800' : 'text-brand-900'}`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl absolute top-20 left-0 w-full border-b border-neutral-200 shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-4 text-base font-medium text-neutral-800 hover:text-brand-600 hover:bg-brand-50 rounded-lg"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center px-5 py-3 rounded-xl bg-brand-gradient text-white font-bold"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;