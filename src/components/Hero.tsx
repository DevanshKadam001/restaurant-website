import { motion } from 'motion/react';
import { Sparkles, Calendar, MenuSquare } from 'lucide-react';

interface HeroProps {
  theme: 'dark' | 'light';
}

export default function Hero({ theme }: HeroProps) {
  // Generate 20 random particle offsets for custom rising embers
  const particles = Array.from({ length: 22 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2, // 2px to 6px
    left: `${Math.random() * 100}%`,
    bottom: `${Math.random() * 30}%`,
    delay: `${Math.random() * 10}s`,
    duration: `${Math.random() * 8 + 6}s`,
  }));

  const handleScrollTo = (id: string) => {
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
    <section
      id="home"
      className="relative min-h-screen xl:min-h-[105vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image Layer with Cinematic Dimmed Atmosphere */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1920&q=80"
          alt="Flame & Fork Ambience"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.32] md:brightness-[0.4]"
        />
        {/* Dynamic Theme Gradient Overlay */}
        <div
          className={`absolute inset-0 transition-colors duration-500 ${
            theme === 'dark'
              ? 'bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent'
              : 'bg-gradient-to-t from-stone-50 via-stone-50/50 to-stone-50/20'
          }`}
        />
      </div>

      {/* Floating Sparkle/Ember Dust Particles */}
      <div className="absolute inset-0 z-1 pointer-events-none select-none">
        {particles.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              left: p.left,
              bottom: p.bottom,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}
      </div>

      {/* Foreground Interactive Content Grid */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        
        {/* Modern Accent Chip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className={`inline-block px-4 py-1.5 mb-6 border text-[10px] uppercase tracking-[0.3em] font-medium transition-colors ${
            theme === 'dark' 
              ? 'border-white/20 text-white bg-white/5' 
              : 'border-zinc-900/20 text-zinc-900 bg-zinc-900/5'
          }`}
        >
          <span>Award-Winning Gastronomy • Est. 2014</span>
        </motion.div>

        {/* Master Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-light leading-[1.15] mb-8 text-zinc-50 tracking-tight"
        >
          Experience <span className="italic font-serif text-orange-500 text-glow">Indian Gastronomy</span> <br/> Like Never Before.
        </motion.h1>

        {/* Cinematic Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl text-sm md:text-base text-zinc-400 font-sans tracking-wide leading-relaxed mb-10 mx-auto font-light"
        >
          A symphony of tandoori wood-ember cooking and modern sensory spice alchemy. Join us for an evening of royal culinary exploration.
        </motion.p>

        {/* CTA Button Grid */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center w-full max-w-sm sm:max-w-none"
        >
          {/* Reservation Activator */}
          <button
            onClick={() => handleScrollTo('#reservation')}
            className={`px-8 py-4 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-orange-600 hover:bg-orange-500 text-white shadow-[0_4px_20px_rgba(249,115,22,0.2)]'
                : 'bg-zinc-900 hover:bg-zinc-800 text-white'
            }`}
          >
            <Calendar className="w-4 h-4" />
            Book A Table
          </button>

          {/* Menu Explorer */}
          <button
            onClick={() => handleScrollTo('#menu')}
            className={`px-8 py-4 border text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
              theme === 'dark'
                ? 'border-white/20 text-white hover:bg-white/10'
                : 'border-zinc-900/20 text-zinc-900 hover:bg-zinc-900/5'
            }`}
          >
            <MenuSquare className="w-4 h-4" />
            Explore Menu
          </button>
        </motion.div>
      </div>

      {/* Decorative Interactive Background Bottom Wave */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t pointer-events-none select-none z-10" />

      {/* Elegant Floating Icon downscroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-1 cursor-pointer"
        onClick={() => handleScrollTo('#about')}
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-zinc-400 font-sans font-medium">Scroll to Discover</span>
        <div className="w-5 h-8 rounded-full border border-zinc-500/30 flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-2 rounded-full bg-orange-500" 
          />
        </div>
      </motion.div>
    </section>
  );
}
