import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Clock, Sparkles, Flame, Plus, Heart, HeartOff } from 'lucide-react';
import { MENU_ITEMS } from '../data';
import { MenuItem } from '../types';

interface MenuProps {
  theme: 'dark' | 'light';
}

type MenuCategory = 'starters' | 'mains' | 'desserts' | 'drinks';

export default function Menu({ theme }: MenuProps) {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('starters');
  const [favorites, setFavorites] = useState<string[]>([]);

  const categories: { id: MenuCategory; label: string }[] = [
    { id: 'starters', label: 'Starters' },
    { id: 'mains', label: 'Main Courses' },
    { id: 'desserts', label: 'Desserts' },
    { id: 'drinks', label: 'Drinks & Elixirs' },
  ];

  const filteredItems = MENU_ITEMS.filter((item) => item.category === activeCategory);

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

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
      id="menu"
      className={`py-24 md:py-32 relative transition-colors duration-500 overflow-hidden ${
        theme === 'dark' ? 'bg-[#050505] text-zinc-150' : 'bg-stone-50 text-zinc-900'
      }`}
    >
      {/* Background Decor */}
      <div className="absolute right-1/4 bottom-1/4 w-[400px] h-[400px] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
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
            <span>Gastronomy Atelier • Seasonal Infusions</span>
          </motion.div>

          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Our Special <span className="italic gold-text">Menu Gastronomique</span>
          </h2>

          <p className={`text-sm font-sans tracking-wide leading-relaxed ${
            theme === 'dark' ? 'text-zinc-400' : 'text-zinc-650'
          }`}>
            Explore our daily selections meticulously prepared using organic, locally-harvested produce, sustainable ocean catches, and live smoke infusions.
          </p>
        </div>

        {/* Tab Navigation Menu */}
        <div className="flex justify-center mb-16">
          <div className={`p-1.5 rounded-full flex gap-1 md:gap-3 flex-wrap justify-center border ${
            theme === 'dark' 
              ? 'bg-zinc-900/60 border-zinc-800/80 shadow-inner' 
              : 'bg-zinc-100 border-zinc-200 shadow-inner'
          }`}>
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative px-5 py-3 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 pointer-events-auto cursor-pointer ${
                    isActive
                      ? theme === 'dark'
                        ? 'text-zinc-950 font-extrabold'
                        : 'text-white'
                      : theme === 'dark'
                      ? 'text-zinc-400 hover:text-orange-500'
                      : 'text-zinc-600 hover:text-zinc-900'
                  }`}
                >
                  {/* Sliding Golden Capsule Effect */}
                  {isActive && (
                    <motion.div
                      layoutId="menuTabCapsule"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      className={`absolute inset-0 rounded-full z-0 pointer-events-none ${
                        theme === 'dark'
                          ? 'bg-orange-500 shadow-[0_2px_12px_rgba(249,115,22,0.35)]'
                          : 'bg-zinc-900 shadow-md'
                      }`}
                    />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Filtered Menu Grid - Animated staggered entry */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((dish, idx) => {
              const isFavorite = favorites.includes(dish.id);
              
              return (
                <motion.div
                  layout
                  key={dish.id}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92, y: 15 }}
                  transition={{ duration: 0.45, delay: idx * 0.05 }}
                  whileHover={{ 
                    y: -8, 
                    rotateX: idx % 2 === 0 ? 1 : -1,
                    rotateY: idx % 3 === 0 ? -1 : 1,
                    boxShadow: theme === 'dark' 
                      ? '0 12px 24px rgba(249,115,22,0.06)' 
                      : '0 12px 24px rgba(0,0,0,0.04)'
                  }}
                  style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
                  className={`rounded-2xl overflow-hidden border p-5 flex flex-col justify-between transition-colors cursor-pointer group ${
                    theme === 'dark'
                      ? 'bg-gradient-to-br from-zinc-900 to-black/85 hover:bg-zinc-900/50 border-white/5 hover:border-orange-500/30 shadow-xl'
                      : 'bg-white hover:bg-zinc-50 border-zinc-100 hover:border-zinc-300'
                  }`}
                >
                  <div className="relative">
                    {/* Item Image with hover expansion inside wrapper */}
                    <div className="relative h-48 rounded-xl overflow-hidden mb-5">
                      <img
                        src={dish.image}
                        alt={dish.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Dark overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/65 via-transparent to-transparent opacity-60" />
                      
                      {/* Heart favoriter */}
                      <button
                        onClick={(e) => toggleFavorite(dish.id, e)}
                        className={`absolute top-3 right-3 p-2 rounded-full border transition-all duration-300 pointer-events-auto cursor-pointer ${
                          isFavorite
                            ? 'bg-orange-500 border-none text-black'
                            : 'bg-zinc-950/50 hover:bg-zinc-900 border-white/10 text-white'
                        }`}
                      >
                        <Heart className={`w-4 h-4 ${isFavorite ? 'fill-black' : ''}`} />
                      </button>

                      {/* Best Seller signature pill */}
                      {dish.tags.length > 0 && (
                        <div className="absolute bottom-3 left-3 flex gap-1">
                          <span className="px-2 py-0.5 rounded text-[8px] font-bold tracking-widest uppercase bg-orange-500 text-black">
                            {dish.tags[0]}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Meta Indicators */}
                    <div className="flex items-center gap-3 text-xs font-mono text-zinc-400 mb-2">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-orange-500" />
                        {dish.prepTime}
                      </span>
                      <span>•</span>
                      <span>{dish.calories} kcal</span>
                    </div>

                    {/* Name */}
                    <h3 className={`font-serif text-lg font-bold tracking-tight mb-2 group-hover:text-orange-500 transition-colors ${
                      theme === 'dark' ? 'text-zinc-150' : 'text-zinc-900 font-extrabold'
                    }`}>
                      {dish.name}
                    </h3>

                    {/* Copy Description */}
                    <p className={`text-xs font-sans tracking-wide leading-relaxed line-clamp-3 mb-5 ${
                      theme === 'dark' ? 'text-zinc-400 font-light' : 'text-zinc-650'
                    }`}>
                      {dish.description}
                    </p>
                  </div>

                  {/* Actions / Price Block */}
                  <div className="pt-4 border-t border-dashed border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-zinc-400 block tracking-wider font-sans uppercase font-medium">Atelier Price</span>
                      <span className="font-serif text-lg font-bold text-orange-500">
                        ₹{dish.price.toLocaleString('en-IN')}
                      </span>
                    </div>

                    {/* Booking Hook Action */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleScrollToReservation();
                      }}
                      className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 pointer-events-auto cursor-pointer ${
                        theme === 'dark'
                          ? 'border-white/15 hover:border-orange-500 text-zinc-400 hover:text-orange-550 bg-zinc-950/40'
                          : 'border-zinc-200 hover:border-zinc-900 text-zinc-650 hover:text-zinc-900 bg-stone-100'
                      }`}
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Sensory footnotes */}
        <div className="mt-16 text-center">
          <p className="text-[10px] tracking-widest font-mono text-zinc-500 uppercase leading-relaxed">
            * Consuming raw or undercooked meats, poultry, seafood, shellfish, shell eggs <br /> 
            or dynamic charcoal-smoked emulsions may increase your appetite for fine artistry.
          </p>
        </div>
      </div>
    </section>
  );
}
