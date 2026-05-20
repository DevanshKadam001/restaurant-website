import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Flame, Send, CheckCircle } from 'lucide-react';

interface FooterProps {
  theme: 'dark' | 'light';
}

export default function Footer({ theme }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubscribed(true);
      setSubmitting(false);
      setEmail('');
    }, 1200);
  };

  const currentYear = new Date().getFullYear();

  const handleScrollTo = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
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
    <footer
      className={`border-t border-white/5 transition-colors duration-500 py-16 md:py-20 ${
        theme === 'dark'
          ? 'bg-[#050505] text-zinc-400'
          : 'bg-zinc-900 border-zinc-800 text-zinc-300'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-start mb-16">
        
        {/* Col 1: Branding block */}
        <div className="md:col-span-4 flex flex-col gap-4">
          <a href="#home" onClick={(e) => handleScrollTo('#home', e)} className="flex items-center gap-2 group cursor-pointer">
            <div className="relative flex items-center justify-center w-9 h-9 rounded-full border border-orange-500/30 group-hover:border-orange-500 bg-orange-95/20">
              <Flame className="w-5 h-5 text-orange-500 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-base font-bold tracking-[0.12em] uppercase text-zinc-50 leading-none">
                Flame <span className="text-orange-500 font-sans font-light">&</span> Fork
              </span>
              <span className="text-[8px] tracking-[0.3em] uppercase opacity-75 text-orange-500 font-sans mt-0.5">
                Elite Gastronomy
              </span>
            </div>
          </a>
          <p className="text-xs tracking-wide leading-relaxed mt-2 opacity-75 max-w-sm">
            Orchestrating premium wild fruitwood flame embers and rigorous haute culinary discipline to serve bespoke, award-winning gastronomic experiences.
          </p>
        </div>

        {/* Col 2: Navigation quick links */}
        <div className="md:col-span-3 flex flex-col gap-3">
          <h4 className="font-serif text-xs font-bold uppercase tracking-widest text-zinc-50">
            Quick Explorations
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <a
                href="#about"
                onClick={(e) => handleScrollTo('#about', e)}
                className="hover:text-orange-500 transition-colors cursor-pointer"
              >
                Our Sacred Story
              </a>
            </li>
            <li>
              <a
                href="#featured"
                onClick={(e) => handleScrollTo('#featured', e)}
                className="hover:text-orange-500 transition-colors cursor-pointer"
              >
                Featured Masterpieces
              </a>
            </li>
            <li>
              <a
                href="#menu"
                onClick={(e) => handleScrollTo('#menu', e)}
                className="hover:text-orange-500 transition-colors cursor-pointer"
              >
                Special Menu
              </a>
            </li>
            <li>
              <a
                href="#gallery"
                onClick={(e) => handleScrollTo('#gallery', e)}
                className="hover:text-orange-500 transition-colors cursor-pointer"
              >
                Atmospheric Gallery
              </a>
            </li>
          </ul>
        </div>

        {/* Col 3: Seating help details */}
        <div className="md:col-span-2 flex flex-col gap-3">
          <h4 className="font-serif text-xs font-bold uppercase tracking-widest text-zinc-50">
            Seating Help
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <a
                href="#reservation"
                onClick={(e) => handleScrollTo('#reservation', e)}
                className="hover:text-orange-500 transition-colors cursor-pointer"
              >
                Book Table
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => handleScrollTo('#contact', e)}
                className="hover:text-orange-500 transition-colors cursor-pointer"
              >
                Get Directions
              </a>
            </li>
            <li>
              <span className="opacity-60">Dress Code Norms</span>
            </li>
            <li>
              <span className="opacity-60">Cancel Seating Policy</span>
            </li>
          </ul>
        </div>

        {/* Col 4: Newsletter subscription */}
        <div className="md:col-span-3 flex flex-col gap-4">
          <h4 className="font-serif text-xs font-bold uppercase tracking-widest text-zinc-50">
            The Atelier Newsletter
          </h4>
          <p className="text-xs tracking-wide leading-relaxed opacity-75">
            Subscribe to receive premium notifications of private cellar tours, wine pairing banquets, and seasonal chefs specials.
          </p>

          <form onSubmit={handleSubscribe} className="relative mt-2">
            {!subscribed ? (
              <div className="relative flex items-center">
                <input
                   type="email"
                  required
                  placeholder="epicurean@gastronomy.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 text-xs bg-black border border-white/5 focus:border-orange-500 rounded-xl outline-none text-zinc-100 placeholder-zinc-700 transition-all font-sans"
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="absolute right-1.5 p-2 rounded-lg bg-orange-600 text-white hover:bg-orange-505 transition-all cursor-pointer pointer-events-auto"
                >
                  {submitting ? (
                    <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent animate-spin rounded-full" />
                  ) : (
                    <Send className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-3 bg-orange-500/10 border border-orange-500/30 text-orange-400 rounded-xl text-xs flex items-center justify-center gap-2"
              >
                <CheckCircle className="w-4 h-4 shrink-0" />
                <span>Subscription Secured!</span>
              </motion.div>
            )}
          </form>
        </div>

      </div>

      {/* Absolute Bottom copyright details */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 border-t border-dashed border-zinc-900/60 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
        <p className="text-[10px] tracking-widest font-mono text-zinc-550 uppercase">
          © {currentYear} Flame & Fork. All Seating Rights Reserved.
        </p>
        <p className="text-[10px] tracking-widest font-mono text-zinc-550 uppercase">
          Conceived for Royal Gastronomy • Crafted with Precision
        </p>
      </div>
    </footer>
  );
}
