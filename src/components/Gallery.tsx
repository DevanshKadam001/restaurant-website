import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, ZoomIn, Images } from 'lucide-react';
import { GALLERY_ITEMS } from '../data';
import { GalleryItem } from '../types';

interface GalleryProps {
  theme: 'dark' | 'light';
}

export default function Gallery({ theme }: GalleryProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'interior' | 'culinary' | 'beverage'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filterTabs: { id: 'all' | 'interior' | 'culinary' | 'beverage'; label: string }[] = [
    { id: 'all', label: 'All Photos' },
    { id: 'interior', label: 'Lounge & Cellars' },
    { id: 'culinary', label: 'Chef Artistry' },
    { id: 'beverage', label: 'Mixology Cocktails' },
  ];

  // Filter items based on selected category
  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  const handleOpenLightbox = (item: GalleryItem) => {
    const mainIndex = GALLERY_ITEMS.findIndex((gi) => gi.id === item.id);
    if (mainIndex !== -1) {
      setLightboxIndex(mainIndex);
    }
  };

  const handleNextLightbox = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! + 1) % GALLERY_ITEMS.length);
    }
  };

  const handlePrevLightbox = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
    }
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  return (
    <section
      id="gallery"
      className={`py-24 md:py-32 relative transition-colors duration-500 overflow-hidden ${
        theme === 'dark' ? 'bg-[#050505] text-zinc-150' : 'bg-stone-100/50 text-zinc-805'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
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
              <span>Atmospheric Cinematic Gallery</span>
            </motion.div>
            
            <h2 className={`font-serif text-3xl md:text-5xl font-bold tracking-tight ${
              theme === 'dark' ? 'text-zinc-50' : 'text-zinc-900'
            }`}>
              Atmospheric <span className="italic gold-text">Aesthetics</span>
            </h2>
          </div>

          {/* Filtering Links */}
          <div className="flex flex-wrap gap-2 md:gap-4">
            {filterTabs.map((tab) => {
              const isSelected = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 pointer-events-auto cursor-pointer ${
                    isSelected
                      ? 'bg-orange-600 text-white shadow-[0_2px_10px_rgba(249,115,22,0.3)]'
                      : theme === 'dark'
                      ? 'bg-zinc-900/60 hover:bg-zinc-900 text-zinc-400 hover:text-zinc-50 border border-white/5'
                      : 'bg-white hover:bg-zinc-50 text-zinc-650 hover:text-zinc-900 border border-zinc-200'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid (Simulated Staggered Masonry via standard Grid) */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                onClick={() => handleOpenLightbox(item)}
                className="relative rounded-2xl overflow-hidden group cursor-pointer aspect-4/3 sm:aspect-[4/5] lg:even:aspect-[4/3] border border-zinc-800/10 shadow-lg"
              >
                {/* Photo */}
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Dark Masking Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-6" />

                {/* Hover Visual elements (Glass Panel) */}
                <div className="absolute inset-x-6 bottom-6 p-4 glass-dark rounded-xl border border-white/5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-between">
                  <div>
                    <span className="text-[9px] font-mono tracking-widest text-orange-500 uppercase block mb-1">
                      {item.category === 'interior' ? 'Lounge' : item.category === 'culinary' ? 'Culinary' : 'Mixology'}
                    </span>
                    <h4 className="font-serif text-sm font-bold text-zinc-200 tracking-tight">
                      {item.title}
                    </h4>
                  </div>
                  
                  {/* Magnifier Button */}
                  <div className="w-9 h-9 rounded-full bg-orange-500 text-black flex items-center justify-center hover:bg-orange-455 transition-colors">
                    <ZoomIn className="w-4.5 h-4.5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Fullscreen Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseLightbox}
            className="fixed inset-0 bg-zinc-950/95 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-10 select-none cursor-zoom-out"
          >
            {/* Upper Action Bar */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10 text-zinc-100">
              <span className="text-xs uppercase tracking-[0.25em] font-mono text-zinc-400">
                Photo {lightboxIndex + 1} of {GALLERY_ITEMS.length}
              </span>
              <button
                onClick={handleCloseLightbox}
                className="p-2.5 rounded-full bg-[#050505] border border-white/10 text-zinc-200 hover:text-orange-500 hover:border-orange-500/50 transition-colors pointer-events-auto cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Previous Picture Trigger */}
            <button
              onClick={handlePrevLightbox}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-zinc-900/60 hover:bg-zinc-900 border border-white/10 text-zinc-200 hover:text-orange-500 transition-colors pointer-events-auto z-10 cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Core Image Display with Slide transitions */}
            <div 
              className="relative max-w-5xl max-h-[75vh] md:max-h-[80vh] flex flex-col items-center pointer-events-auto cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                src={GALLERY_ITEMS[lightboxIndex].image}
                alt={GALLERY_ITEMS[lightboxIndex].title}
                referrerPolicy="no-referrer"
                className="max-w-full max-h-[70vh] md:max-h-[75vh] object-contain rounded-xl shadow-2xl border border-white/5"
              />

              {/* Caption Tag */}
              <div className="mt-4 text-center">
                <span className="text-[10px] font-mono tracking-widest text-orange-500 uppercase block mb-1">
                  {GALLERY_ITEMS[lightboxIndex].category} atmospheric frame
                </span>
                <p className="font-serif text-lg text-zinc-100 font-bold tracking-tight">
                  {GALLERY_ITEMS[lightboxIndex].title}
                </p>
              </div>
            </div>

            {/* Next Picture Trigger */}
            <button
              onClick={handleNextLightbox}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-zinc-900/60 hover:bg-zinc-900 border border-white/10 text-zinc-200 hover:text-orange-500 transition-colors pointer-events-auto z-10 cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
