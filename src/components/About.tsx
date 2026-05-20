import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ChefHat, Quote, ShieldAlert } from 'lucide-react';
import { STATS_DATA } from '../data';

// Helper CountUp Component
interface CountUpProps {
  to: number;
  suffix: string;
  trigger: boolean;
}

function CountUp({ to, suffix, trigger }: CountUpProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    
    let start = 0;
    const duration = 2000; // 2 seconds
    const intervalTime = 30;
    const steps = duration / intervalTime;
    const stepValue = to / steps;

    const timer = setInterval(() => {
      start += stepValue;
      if (start >= to) {
        setCount(to);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [to, trigger]);

  // Format with commas if large
  const formatNum = (num: number) => {
    return num.toLocaleString();
  };

  return (
    <span>
      {formatNum(count)}
      {suffix}
    </span>
  );
}

interface AboutProps {
  theme: 'dark' | 'light';
}

export default function About({ theme }: AboutProps) {
  const statsRef = useRef<HTMLDivElement>(null);
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.3 });

  return (
    <section
      id="about"
      className={`py-24 md:py-32 relative overflow-hidden transition-colors duration-500 ${
        theme === 'dark' ? 'bg-[#050505] text-zinc-150' : 'bg-stone-50 text-zinc-800'
      }`}
    >
      {/* Background Decorative Gold Accent blur blots */}
      <div className="absolute right-0 top-1/4 w-[250px] md:w-[450px] h-[250px] md:h-[450px] bg-orange-600/5 blur-[100px] rounded-full pointer-events-none select-none" />
      <div className="absolute left-0 bottom-1/4 w-[200px] md:w-[350px] h-[200px] md:h-[350px] bg-red-650/5 blur-[80px] rounded-full pointer-events-none select-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Side: Creative Composite Images Grid */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative"
        >
          {/* Main Picture of Culinary Chef Class */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl scale-100 group">
            <img
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80"
              alt="Chef Jacques Devaux plating"
              referrerPolicy="no-referrer"
              className="w-full h-[360px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Elegant Vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
            
            {/* Overlay Caption card inside picture */}
            <div className="absolute bottom-6 left-6 right-6 p-5 glass-dark rounded-xl border border-white/5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-orange-500/30 bg-orange-500/10 flex items-center justify-center">
                <ChefHat className="text-orange-500 w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif text-sm font-bold text-zinc-100">Master Chef Aditya Sengupta</h4>
                <p className="text-[11px] font-sans tracking-wide text-zinc-400">Owner, Executive Patron & Alchemist</p>
              </div>
            </div>
          </div>

          {/* Floating mini secondary plate decorative card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute -right-6 -bottom-6 w-36 h-36 rounded-2xl overflow-hidden border border-orange-500/20 shadow-2xl hidden md:block"
          >
            <img
              src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=300&q=80"
              alt="Crafted Cocktail decoration"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Right Side: Narrative Copy & Statistics */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          
          {/* Section subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[11px] md:text-xs font-sans font-bold tracking-[0.35em] uppercase text-orange-500 mb-3"
          >
            Our Sacred Philosophy
          </motion.p>

          {/* Big Section Header */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className={`font-serif text-3xl md:text-5xl font-bold tracking-tight mb-8 ${
              theme === 'dark' ? 'text-zinc-50' : 'text-zinc-900'
            }`}
          >
            Where Raw Embers Meet <br />
            <span className="italic gold-text">Aesthetic Perfection</span>
          </motion.h2>

          {/* Historical Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`font-sans space-y-6 text-sm leading-relaxed ${
              theme === 'dark' ? 'text-zinc-400 font-light' : 'text-zinc-650'
            }`}
          >
            <p>
              Founded in the winter of 2014, <strong className="text-orange-500 font-medium">Flame & Fork</strong> was conceived out of a wild culinary obsession: to harness the ancient, untamed elements of Indian sigree and clay over embers, fusing them with modern, avant-garde Indian gastronomy.
            </p>
            <p>
              We believe that Indian cuisine is an epic saga of sensory magic. Our glass-enclosed open-hearth kitchens burn wild fruitwood and organic charcoal, slow-baking clay-pot creations, spice-marinated premium seafood, hand-harvested Himalayan greens, and single-estate spice-infused spirits.
            </p>
          </motion.div>

          {/* Chef's Signature Quote */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={`mt-8 p-6 rounded-2xl border flex items-start gap-4 transition-colors ${
              theme === 'dark'
                ? 'bg-zinc-900/10 border-white/5'
                : 'bg-zinc-50 border-zinc-200'
            }`}
          >
            <Quote className="w-10 h-10 text-orange-500 shrink-0 opacity-40 italic" />
            <div>
              <p className={`font-serif italic font-medium leading-relaxed ${
                theme === 'dark' ? 'text-zinc-200' : 'text-zinc-800'
              }`}>
                "Recipe sheets do not possess hearts. We orchestrate fire, wood-coal, and indigenous spices to summon memories you didn't know you harbored."
              </p>
              <p className="text-xs uppercase tracking-widest text-orange-500 font-sans mt-3 font-semibold">— Master Chef Aditya Sengupta</p>
            </div>
          </motion.div>

          {/* Stat Counter Grid Section */}
          <div
            ref={statsRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-10 border-t border-dashed border-white/10"
          >
            {STATS_DATA.map((stat, statIdx) => (
              <div key={stat.id} className="flex flex-col">
                <span className="font-serif text-3xl md:text-4xl font-bold text-orange-500 tracking-tight leading-none mb-2">
                  <CountUp to={stat.targetNumber} suffix={stat.suffix} trigger={isStatsInView} />
                </span>
                <span className={`text-[10px] md:text-xs font-sans tracking-tight uppercase leading-tight ${
                  theme === 'dark' ? 'text-zinc-500' : 'text-zinc-400'
                }`}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
