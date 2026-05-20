import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface LoaderProps {
  onComplete: () => void;
  key?: string;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    // Elegant incremental progress simulation
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 400); // Small hover space after 100%
          return 100;
        }
        // Increment randomly for natural luxury loading feel
        const increment = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + increment, 100);
      });
    }, 120);

    return () => clearInterval(timer);
  }, [onComplete]);

  useEffect(() => {
    // Smoother visual percent counter
    const percentTimer = setInterval(() => {
      setPercent((prev) => {
        if (prev < progress) {
          return prev + 1;
        }
        return prev;
      });
    }, 10);
    return () => clearInterval(percentTimer);
  }, [progress]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] px-6 select-none"
    >
      {/* Cinematic Golden Orange Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-orange-500/10 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />

      <div className="relative text-center flex flex-col items-center">
        {/* Animated Brand Crest */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mb-6 flex items-center justify-center"
        >
          {/* Rotating outer rings */}
          <div className="absolute w-24 h-24 rounded-full border border-orange-500/20 border-dashed animate-[spin_12s_linear_infinite]" />
          <div className="absolute w-20 h-20 rounded-full border border-orange-600/30 animate-[spin_8s_linear_infinite_reverse]" />
          
          {/* Inner Crest Core */}
          <div className="w-16 h-16 rounded-full bg-zinc-950 border border-orange-500/40 flex items-center justify-center shadow-[0_0_20px_rgba(249,115,22,0.25)]">
            <span className="font-serif text-2xl font-bold text-orange-500 text-glow">F&F</span>
          </div>
        </motion.div>

        {/* Brand Name with letter-spacing transition */}
        <motion.h1
          initial={{ letterSpacing: '0.1em', opacity: 0 }}
          animate={{ letterSpacing: '0.35em', opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-xl md:text-2xl font-semibold text-zinc-100 uppercase mb-2 mr-[-0.35em]"
        >
          Flame & Fork
        </motion.h1>
        
        <p className="text-zinc-400 font-sans text-[10px] md:text-xs tracking-[0.55em] uppercase text-orange-500/80 mb-10 mr-[-0.55em]">
          Gastronomy Atelier
        </p>

        {/* Custom Progress Bar Wrapper */}
        <div className="relative w-48 md:w-64 h-[2px] bg-zinc-900 rounded-full overflow-hidden mb-4">
          <div 
            className="absolute left-0 top-0 h-full bg-gradient-to-r from-orange-600 via-orange-400 to-orange-600 rounded-full shadow-[0_0_8px_rgba(249,115,22,0.6)]"
            style={{ width: `${percent}%`, transition: 'width 0.2s cubic-bezier(0.1, 0.8, 0.2, 1)' }}
          />
        </div>

        {/* Floating Percentage Indicator */}
        <div className="font-mono text-xs text-zinc-400 tracking-[0.2em]">
          <span>{percent}%</span>
        </div>
      </div>

      {/* Culinary Philosophy Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="absolute bottom-10 left-0 right-0 text-center text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-sans"
      >
        Honoring the craft. Savoring the moment.
      </motion.div>
    </motion.div>
  );
}
