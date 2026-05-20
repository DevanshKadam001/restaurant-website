import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Sparkles, BookOpen, Flame, Images, Star, CalendarCheck, MapPin } from 'lucide-react';

interface ScrollHandlerProps {
  theme: 'dark' | 'light';
}

interface SectionItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const SECTIONS: SectionItem[] = [
  { id: 'home', label: 'Home Atelier', icon: Flame },
  { id: 'about', label: 'Sacred Philosophy', icon: BookOpen },
  { id: 'featured', label: 'Signature Dishes', icon: Sparkles },
  { id: 'menu', label: 'Gastronomy Atelier', icon: Compass },
  { id: 'gallery', label: 'Cinematic Gallery', icon: Images },
  { id: 'testimonials', label: 'Connoisseur Reviews', icon: Star },
  { id: 'reservation', label: 'Seating Inquiry', icon: CalendarCheck },
  { id: 'contact', label: 'Atelier Doors', icon: MapPin },
];

export default function ScrollHandler({ theme }: ScrollHandlerProps) {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  useEffect(() => {
    // 1. Calculate reading/scroll progress inside the document
    const handleProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        const progress = (window.scrollY / scrollHeight) * 100;
        setScrollProgress(progress);
      }
    };

    // 2. High-precision Intersection Observer to track active section with a smooth viewport window
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // trigger active section near center of viewport
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    SECTIONS.forEach((sec) => {
      const element = document.getElementById(sec.id);
      if (element) {
        observer.observe(element);
      }
    });

    window.addEventListener('scroll', handleProgress);
    // run immediately on load
    handleProgress();

    return () => {
      window.removeEventListener('scroll', handleProgress);
      SECTIONS.forEach((sec) => {
        const element = document.getElementById(sec.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // keep sticky navbar height clearance
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* Floating Vertical Desktop Section Scroller (Only screen >= md) */}
      <div className="fixed right-6 md:right-8 top-1/2 -translate-y-1/2 z-30 hidden md:flex flex-col items-center gap-7">
        
        {/* Subtle timeline track indicator line in the background */}
        <div 
          className={`absolute top-2 bottom-2 w-[1px] -z-10 transition-colors duration-500 ${
            theme === 'dark' ? 'bg-zinc-900' : 'bg-zinc-200'
          }`} 
        />

        {SECTIONS.map((sec) => {
          const isActive = activeSection === sec.id;
          const SecIcon = sec.icon;

          return (
            <div
              key={sec.id}
              className="relative flex items-center justify-end"
              onMouseEnter={() => setHoveredSection(sec.id)}
              onMouseLeave={() => setHoveredSection(null)}
            >
              {/* Tooltip Popup on hovered */}
              <AnimatePresence>
                {hoveredSection === sec.id && (
                  <motion.div
                    initial={{ opacity: 0, x: 10, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className={`absolute mr-12 px-3.5 py-1.5 rounded-lg text-[10px] uppercase tracking-[0.2em] font-medium font-sans border shadow-xl flex items-center gap-2 whitespace-nowrap select-none pointer-events-none ${
                      theme === 'dark'
                        ? 'bg-[#0a0a0c]/98 border-white/10 text-orange-400'
                        : 'bg-white border-zinc-200 text-zinc-900'
                    }`}
                  >
                    <SecIcon className="w-3.5 h-3.5" />
                    <span>{sec.label}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Dynamic Interactive Dot Trigger */}
              <button
                onClick={() => handleScrollToSection(sec.id)}
                className="relative w-8 h-8 rounded-full flex items-center justify-center focus:outline-none pointer-events-auto cursor-pointer group"
                aria-label={`Scroll to ${sec.label}`}
              >
                {/* Active Outer Pulsing luxury halo ring */}
                <span
                  className={`absolute inset-0 rounded-full border transition-all duration-500 scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 ${
                    theme === 'dark'
                      ? 'border-orange-500/40 bg-orange-500/5'
                      : 'border-zinc-900/40 bg-zinc-900/5'
                  } ${isActive ? 'scale-110 opacity-100 border-orange-500/60 bg-orange-500/8' : ''}`}
                />

                {/* Core animated dot */}
                <span
                  className={`w-2 h-2 rounded-full transition-all duration-500 ${
                    isActive
                      ? 'scale-125 bg-orange-500 shadow-[0_0_12px_rgba(249,115,22,0.8)]'
                      : theme === 'dark'
                      ? 'bg-zinc-700 group-hover:bg-zinc-400'
                      : 'bg-zinc-300 group-hover:bg-zinc-800'
                  }`}
                />
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
