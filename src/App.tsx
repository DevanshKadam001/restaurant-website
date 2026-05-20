import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';

// Import All Section & Feature Components
import Loader from './components/Loader';
import CursorGlow from './components/CursorGlow';
import ScrollHandler from './components/ScrollHandler';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Featured from './components/Featured';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Reservation from './components/Reservation';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  // Sync theme with document class list
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.style.backgroundColor = '#050505'; // force luxurious charcoal background
    } else {
      root.classList.remove('dark');
      root.style.backgroundColor = '#fafaf9'; // force luxurious warm-stone background
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <>
      {/* 1. Injected Custom Cursor Halo Glow */}
      <CursorGlow />

      <AnimatePresence mode="wait">
        {loading ? (
          /* 2. Panoramic Luxury Loader Gate */
          <Loader key="loader" onComplete={() => setLoading(false)} />
        ) : (
          /* 3. Core App Presentation with Entrance Animations */
          <motion.div
            key="application"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className={`min-h-screen relative overflow-hidden transition-colors duration-500 font-sans selection:bg-orange-500 selection:text-black ${
              theme === 'dark' ? 'bg-[#050505] text-zinc-100' : 'bg-stone-50 text-zinc-900'
            }`}
          >
            {/* Scroll Indicator & Progress Bar */}
            <ScrollHandler theme={theme} />

            {/* Header Sticky Glass Navigation */}
            <Navbar theme={theme} toggleTheme={toggleTheme} />

            {/* Cinematic Hero */}
            <Hero theme={theme} />

            {/* Narrative Heritage & Chef Overview */}
            <About theme={theme} />

            {/* Highlighted Masterpieces */}
            <Featured theme={theme} />

            {/* Menu Sections & Categories tabs */}
            <Menu theme={theme} />

            {/* Masonry Portrait Atmosphere */}
            <Gallery theme={theme} />

            {/* Testimonials Reviews Carousel */}
            <Testimonials theme={theme} />

            {/* Styled Reservation booking engine */}
            <Reservation theme={theme} />

            {/* Dynamic Map & Location Hours */}
            <Contact theme={theme} />

            {/* Minimal Elegant Branding Footer */}
            <Footer theme={theme} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
