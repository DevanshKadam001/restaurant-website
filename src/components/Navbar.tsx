import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Flame, Menu, X, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Featured', href: '#featured' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of sticking navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? theme === 'dark'
              ? 'bg-[#050505]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-lg'
              : 'bg-white/85 backdrop-blur-md border-b border-zinc-200/50 py-3 shadow-md'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Elegant Crest Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className={`w-8 h-8 border-2 flex items-center justify-center transform rotate-45 transition-all duration-500 ${
              theme === 'dark' 
                ? 'border-orange-500 bg-orange-500/5' 
                : 'border-zinc-900 bg-zinc-900/5'
            }`}>
              <div className={`w-3.5 h-3.5 transition-all duration-500 ${
                theme === 'dark' ? 'bg-orange-500' : 'bg-zinc-900'
              }`} />
            </div>
            
            <div className="flex flex-col">
              <span className={`font-sans text-xl font-black tracking-tighter leading-none ${
                theme === 'dark' ? 'text-white' : 'text-zinc-900'
              }`}>
                FLAME <span className="text-orange-500">&</span> FORK
              </span>
              <span className={`text-[9px] tracking-[0.25em] uppercase font-sans font-bold ${
                theme === 'dark' ? 'text-orange-500/80' : 'text-zinc-650'
              }`}>
                Award-Winning Atelier
              </span>
            </div>
          </a>

          {/* Desktop Navigation links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-xs uppercase tracking-[0.2em] transition-colors relative py-2 group font-sans font-semibold ${
                  theme === 'dark'
                    ? 'text-zinc-400 hover:text-white'
                    : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-0 h-[1.5px] transition-all duration-300 group-hover:w-full ${
                  theme === 'dark' ? 'bg-orange-500' : 'bg-zinc-900'
                }`} />
              </a>
            ))}
          </div>

          {/* Action Panel: Light/Dark Toggle + Reserve Table Button */}
          <div className="hidden lg:flex items-center gap-5">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`p-2.5 rounded-full border transition-all duration-300 relative overflow-hidden group ${
                theme === 'dark'
                  ? 'border-zinc-800 hover:border-orange-500/50 bg-[#050505] text-orange-500'
                  : 'border-zinc-200 hover:border-zinc-800 bg-zinc-50 text-zinc-850'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 transition-transform duration-500 rotate-0 group-hover:rotate-45" />
              ) : (
                <Moon className="w-4 h-4 transition-transform duration-500 rotate-0 group-hover:-rotate-12" />
              )}
            </button>

            {/* CTA Button */}
            <a
              href="#reservation"
              onClick={(e) => handleLinkClick(e, '#reservation')}
              className={`px-6 py-2.5 text-xs font-bold uppercase tracking-widest transition-all duration-500 ${
                theme === 'dark'
                  ? 'border border-orange-500/50 text-orange-500 hover:bg-orange-500 hover:text-black hover:border-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.15)]'
                  : 'border border-zinc-900 text-zinc-950 hover:bg-zinc-900 hover:text-white'
              }`}
            >
              Book A Table
            </a>

          </div>

          {/* Mobile Actions Hamburger/Toggle */}
          <div className="flex items-center lg:hidden gap-3">
            {/* Theme Toggle in Mobile */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full border transition-all duration-300 ${
                theme === 'dark'
                  ? 'border-zinc-800 bg-[#050505] text-orange-500'
                  : 'border-zinc-200 bg-zinc-50 text-zinc-850'
              }`}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-full border transition-all duration-300 ${
                theme === 'dark'
                  ? 'border-zinc-800 text-zinc-300 hover:bg-zinc-900'
                  : 'border-zinc-200 text-zinc-700 hover:bg-zinc-50'
              }`}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className={`fixed inset-x-0 top-[70px] z-30 lg:hidden shadow-xl border-b transition-colors duration-500 ${
              theme === 'dark'
                ? 'bg-[#050505]/95 backdrop-blur-lg border-white/10 text-zinc-100'
                : 'bg-white/95 backdrop-blur-lg border-zinc-200 text-zinc-900'
            }`}
          >
            <div className="flex flex-col py-6 px-6 gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-xs uppercase tracking-[0.2em] font-medium py-1 border-b border-transparent ${
                    theme === 'dark'
                      ? 'text-zinc-300 hover:text-orange-500'
                      : 'text-zinc-700 hover:text-zinc-900'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              
              <a
                href="#reservation"
                onClick={(e) => handleLinkClick(e, '#reservation')}
                className={`py-3 mt-2 text-xs font-bold uppercase tracking-widest text-center transition-all duration-300 ${
                  theme === 'dark'
                    ? 'border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black'
                    : 'bg-zinc-900 text-white hover:bg-zinc-800'
                }`}
              >
                Book A Table
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
