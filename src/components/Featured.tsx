import { motion } from 'motion/react';
import { Star, Clock, Eye, Sparkles } from 'lucide-react';
import { MENU_ITEMS } from '../data';

interface FeaturedProps {
  theme: 'dark' | 'light';
}

export default function Featured({ theme }: FeaturedProps) {
  // Capture only representative masterpieces
  const signatureDishes = MENU_ITEMS.filter(
    (item) => item.id === 'm-1' || item.id === 'm-2' || item.id === 'd-1'
  );

  const handleScrollToReservation = () => {
    const element = document.querySelector('#reservation');
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
      id="featured"
      className={`py-24 md:py-32 relative transition-colors duration-500 overflow-hidden ${
        theme === 'dark' ? 'bg-[#050505] text-zinc-100' : 'bg-stone-100/50 text-zinc-900'
      }`}
    >
      {/* Decorative Blur Backdrops */}
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`inline-block px-4 py-1.5 mb-6 border text-[10px] uppercase tracking-[0.3em] font-medium transition-colors ${
              theme === 'dark' 
                ? 'border-white/20 text-white bg-white/5' 
                : 'border-zinc-900/20 text-zinc-900 bg-zinc-900/5'
            }`}
          >
            <span>Award-Winning • Signature Creations</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            The Chef's <span className="italic gold-text">Masterpieces</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`text-sm font-sans tracking-wide leading-relaxed ${
              theme === 'dark' ? 'text-zinc-400 font-light' : 'text-zinc-650'
            }`}
          >
            A curated showcase of our most requested signature creations. Prepared table-side with dramatic flame craft and precision plating.
          </motion.p>
        </div>

        {/* Masterpieces Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {signatureDishes.map((dish, idx) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ 
                y: -12, 
                rotateX: idx === 0 ? 1 : idx === 1 ? 0 : -1,
                rotateY: idx === 0 ? -1 : idx === 1 ? 0 : 1,
              }}
              style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
              className={`rounded-2xl overflow-hidden border transition-shadow duration-300 relative group cursor-pointer ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-zinc-900 via-zinc-950 to-black border-white/5 hover:shadow-[0_15px_30px_rgba(249,115,22,0.15)]'
                  : 'bg-white border-zinc-100 hover:shadow-[0_15px_30px_rgba(0,0,0,0.06)]'
              }`}
            >
              {/* Product Thumbnail with Zoom on Hover */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                
                {/* Visual Glass overlays & gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />

                {/* Categories Badge Pill */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {dish.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 text-[9px] font-sans font-bold uppercase tracking-widest bg-[#050505]/95 text-orange-500 rounded-md border border-orange-500/30 backdrop-blur-sm">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 px-2.5 py-1 text-[10px] font-mono font-bold bg-orange-500 text-black rounded-md flex items-center gap-1.5 shadow-md">
                  <Star className="w-3.5 h-3.5 fill-black stroke-black" />
                  <span>{dish.rating.toFixed(1)}</span>
                </div>

                {/* Luxury price banner */}
                <div className="absolute bottom-4 right-4 glass-dark border border-white/10 px-4 py-1.5 rounded-xl text-glow">
                  <span className="font-serif font-bold text-orange-500 text-sm tracking-wide">
                    ₹{dish.price.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* Dish Metadata and content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs font-mono text-orange-500 mb-2">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {dish.prepTime}
                  </span>
                  <span>•</span>
                  <span>{dish.calories} kcal</span>
                </div>

                <h3 className={`font-serif text-xl font-bold tracking-tight mb-3 transition-colors ${
                  theme === 'dark' ? 'text-zinc-150 group-hover:text-orange-500' : 'text-zinc-900 group-hover:text-amber-600'
                }`}>
                  {dish.name}
                </h3>
                
                <p className={`text-xs font-sans tracking-wide leading-relaxed line-clamp-3 mb-6 ${
                  theme === 'dark' ? 'text-zinc-400 font-light' : 'text-zinc-650'
                }`}>
                  {dish.description}
                </p>

                {/* Active Interactive Trigger - hover overlay slider */}
                <div className="pt-4 border-t border-dashed border-white/10 flex items-center justify-between">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleScrollToReservation();
                    }}
                    className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-orange-500 hover:text-orange-400 transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    Experience Table-Side
                    <Eye className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[10px] font-mono text-zinc-500">
                    *Limited Avail
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
