import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, Star, ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data';

interface TestimonialsProps {
  theme: 'dark' | 'light';
}

export default function Testimonials({ theme }: TestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const resetAutoplay = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 5500); // cycle every 5.5s
  };

  useEffect(() => {
    resetAutoplay();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    resetAutoplay();
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
    resetAutoplay();
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    resetAutoplay();
  };

  const currentTestimonial = TESTIMONIALS_DATA[activeIndex];

  return (
    <section
      id="testimonials"
      className={`py-24 md:py-32 relative transition-colors duration-500 overflow-hidden ${
        theme === 'dark' ? 'bg-[#050505] text-zinc-150' : 'bg-stone-50 text-zinc-800'
      }`}
    >
      {/* Decorative Golden Ambiences */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-orange-500/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute left-0 top-1/4 w-[250px] h-[250px] bg-red-500/3 blur-[90px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative flex flex-col items-center">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`inline-block px-4 py-1.5 mb-6 border text-[10px] uppercase tracking-[0.3em] font-medium transition-colors ${
              theme === 'dark' 
                ? 'border-white/20 text-white bg-white/5' 
                : 'border-zinc-900/20 text-zinc-900 bg-zinc-900/5'
            }`}
          >
            <span>Connoisseur Reviews</span>
          </motion.div>
          
          <h2 className={`font-serif text-3xl md:text-5xl font-bold tracking-tight ${
            theme === 'dark' ? 'text-zinc-50' : 'text-zinc-900'
          }`}>
            Chronicles of <span className="italic gold-text">Honored Guests</span>
          </h2>
        </div>

        {/* Slidable Testimonial Window */}
        <div className="relative w-full flex items-center justify-center min-h-[340px] md:min-h-[290px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className={`w-full rounded-3xl border p-8 md:p-12 relative flex flex-col items-center text-center transition-colors ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-zinc-900 to-black/90 border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.25)]'
                  : 'bg-white border-zinc-100/80 shadow-[0_10px_30px_rgba(0,0,0,0.03)]'
              }`}
            >
              <Quote className="absolute top-6 left-6 w-12 h-12 text-orange-500/10 shrink-0 select-none animate-pulse" />
              
              {/* Star Score representation */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(currentTestimonial.rating)
                        ? 'fill-orange-500 stroke-orange-500 text-orange-500'
                        : 'stroke-zinc-700 text-zinc-800'
                    }`}
                  />
                ))}
              </div>

              {/* Core Review Message */}
              <p className={`font-serif text-lg md:text-xl italic font-medium leading-relaxed max-w-2xl mb-8 ${
                theme === 'dark' ? 'text-zinc-200' : 'text-zinc-850'
              }`}>
                "{currentTestimonial.comment}"
              </p>

              {/* Author Profile block */}
              <div className="flex flex-col items-center gap-2 mt-auto">
                <div className="w-14 h-14 rounded-full overflow-hidden border border-amber-500/30 shadow-md">
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className={`font-serif text-sm font-bold tracking-tight uppercase ${
                    theme === 'dark' ? 'text-zinc-50' : 'text-zinc-900'
                  }`}>
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-[10px] font-sans tracking-[0.15em] uppercase text-orange-500 font-semibold">
                    {currentTestimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Dotted Navigation Block */}
        <div className="flex items-center gap-6 mt-10">
          {/* Previous Arrow click hook */}
          <button
            onClick={handlePrev}
            className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 pointer-events-auto cursor-pointer ${
              theme === 'dark'
                ? 'border-white/10 hover:border-orange-500 text-zinc-400 hover:text-orange-500 hover:bg-zinc-900/40'
                : 'border-zinc-200 hover:border-zinc-800 text-zinc-650 hover:text-zinc-900 hover:bg-zinc-100'
            }`}
          >
            <ChevronLeft className="w-4.5 h-4.5" />
          </button>

          {/* Bullet points indicators */}
          <div className="flex gap-2.5">
            {TESTIMONIALS_DATA.map((_, dotIdx) => {
              const checked = dotIdx === activeIndex;
              return (
                <button
                  key={dotIdx}
                  onClick={() => handleDotClick(dotIdx)}
                  className={`h-2 rounded-full transition-all duration-500 pointer-events-auto cursor-pointer ${
                    checked
                      ? 'w-6 bg-orange-500'
                      : theme === 'dark'
                      ? 'w-2 bg-zinc-800 hover:bg-zinc-700'
                      : 'w-2 bg-zinc-300 hover:bg-zinc-400'
                  }`}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                />
              );
            })}
          </div>

          {/* Next Arrow click hook */}
          <button
            onClick={handleNext}
            className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 pointer-events-auto cursor-pointer ${
              theme === 'dark'
                ? 'border-white/10 hover:border-orange-500 text-zinc-400 hover:text-orange-500 hover:bg-zinc-900/40'
                : 'border-zinc-200 hover:border-zinc-800 text-zinc-650 hover:text-zinc-900 hover:bg-zinc-105'
            }`}
          >
            <ChevronRight className="w-4.5 h-4.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
