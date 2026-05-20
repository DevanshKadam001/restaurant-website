import { motion } from 'motion/react';
import { Clock, MapPin, PhoneCall, Mail, Instagram, Facebook, Compass, Award } from 'lucide-react';

interface ContactProps {
  theme: 'dark' | 'light';
}

export default function Contact({ theme }: ContactProps) {
  // Opening hours matrix data
  const schedules = [
    { label: 'Monday — Thursday', time: '17:00 — 22:30' },
    { label: 'Friday — Saturday', time: '17:00 — 23:30 (Prime Seating)' },
    { label: 'Sunday High Feast', time: '16:00 — 21:30' },
  ];

  return (
    <section
      id="contact"
      className={`py-24 md:py-32 relative transition-colors duration-500 overflow-hidden ${
        theme === 'dark' ? 'bg-[#050505] text-zinc-150' : 'bg-stone-100/50 text-zinc-900'
      }`}
    >
      {/* Visual background lights */}
      <div className="absolute right-1/4 bottom-0 w-[350px] h-[350px] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Side: Operations Details Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 flex flex-col"
        >
          <div className="inline-block px-4 py-1.5 mb-6 border border-white/20 text-[10px] uppercase tracking-[0.3em] font-medium transition-colors bg-white/5 text-white max-w-max">
            The Atelier Doors
          </div>
          <h2 className={`font-serif text-3xl md:text-5xl font-bold tracking-tight mb-8 leading-tight ${
            theme === 'dark' ? 'text-zinc-50' : 'text-zinc-900'
          }`}>
            Hours & <br />
            <span className="italic gold-text">Location details</span>
          </h2>

          <div className="space-y-6">
            
            {/* Address */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-500 shrink-0 mt-1">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block mb-1">Our Location</span>
                <p className={`font-serif text-sm font-bold tracking-wide ${
                  theme === 'dark' ? 'text-zinc-200' : 'text-zinc-805'
                }`}>
                  12 Mahatma Gandhi Marg, Chanakyapuri, New Delhi, DL 110021
                </p>
                <p className={`text-[11px] font-sans ${theme === 'dark' ? 'text-zinc-500' : 'text-zinc-400'}`}>* Opposite the Diplomatic Enclave Gardens.</p>
              </div>
            </div>

            {/* Operating Times */}
            <div className="flex gap-4 border-t border-dashed border-zinc-850/20 pt-6">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-500 shrink-0 mt-1">
                <Clock className="w-5 h-5" />
              </div>
              <div className="w-full">
                <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block mb-2">Gourmet Openings</span>
                <div className="space-y-2">
                  {schedules.map((sch) => (
                    <div key={sch.label} className="flex justify-between items-center text-xs">
                      <span className={`font-sans tracking-tight font-medium ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-650'}`}>
                        {sch.label}
                      </span>
                      <span className="font-mono text-orange-500 font-bold whitespace-nowrap">
                        {sch.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* General Concierge Phone Desk */}
            <div className="flex gap-4 border-t border-dashed border-zinc-850/20 pt-6">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-500 shrink-0 mt-1">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block mb-1">Direct Concierge</span>
                <p className={`font-serif text-sm font-bold tracking-wide ${
                  theme === 'dark' ? 'text-zinc-250' : 'text-zinc-855'
                }`}>
                  +91 (11) 555-FLAME (3526)
                </p>
                <p className={`text-[11px] font-sans ${theme === 'dark' ? 'text-zinc-500' : 'text-zinc-400'}`}>* Direct inquiries and royal banqueting reservations.</p>
              </div>
            </div>

            {/* Social channels Connect */}
            <div className="flex gap-4 border-t border-dashed border-zinc-800/10 pt-6">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-500 shrink-0 mt-1">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block mb-2.5">Join the Inner Circle</span>
                <div className="flex gap-3">
                  {[
                    { icon: Instagram, href: '#instagram', label: 'Instagram' },
                    { icon: Facebook, href: '#facebook', label: 'Facebook' },
                    { icon: Award, href: '#awards', label: 'Times Food Awards' },
                  ].map((soc, idx) => {
                    const SocIcon = soc.icon;
                    return (
                      <a
                        key={idx}
                        href={soc.href}
                        title={soc.label}
                        className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                          theme === 'dark'
                            ? 'bg-zinc-900 border-zinc-850 text-zinc-400 hover:text-orange-500 hover:border-orange-500'
                            : 'bg-white border-zinc-200 text-zinc-655 hover:text-orange-655 hover:border-orange-600'
                        }`}
                      >
                        <SocIcon className="w-4 h-4" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Right Side: Visual Stylized Vector Grid Neighborhood Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="lg:col-span-7 w-full h-[380px] md:h-[450px] relative rounded-3xl overflow-hidden border border-zinc-800/10 shadow-2xl"
        >
          {/* Stylized custom SVG map representation for incredible premium UX (bypasses permission locks or iframe delay blocks) */}
          <div className="absolute inset-0 bg-[#09090b] select-none">
            
            {/* Custom stylized map strokes */}
            <svg className="w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="mapGlow" cx="50%" cy="50%" r="45%">
                  <stop offset="0%" stopColor="#f97316" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                </radialGradient>
              </defs>
              {/* Soft center illumination */}
              <circle cx="50%" cy="55%" r="220" fill="url(#mapGlow)" />
              
              {/* Diagonal streets */}
              <line x1="-50" y1="100" x2="900" y2="400" stroke="#27272a" strokeWidth="6" />
              <line x1="50" y1="-50" x2="450" y2="550" stroke="#27272a" strokeWidth="5" />
              <line x1="200" y1="550" x2="700" y2="-50" stroke="#27272a" strokeWidth="4" />
              <line x1="-50" y1="350" x2="900" y2="200" stroke="#27272a" strokeWidth="5" />

              {/* Grid block roads */}
              <line x1="150" y1="0" x2="150" y2="600" stroke="#18181b" strokeWidth="1.5" />
              <line x1="300" y1="0" x2="300" y2="600" stroke="#18181b" strokeWidth="1.5" />
              <line x1="450" y1="0" x2="450" y2="600" stroke="#18181b" strokeWidth="1.5" />
              <line x1="600" y1="0" x2="600" y2="600" stroke="#18181b" strokeWidth="1.5" />
              <line x1="750" y1="0" x2="750" y2="600" stroke="#18181b" strokeWidth="1.5" />

              <line x1="0" y1="120" x2="900" y2="120" stroke="#18181b" strokeWidth="1.5" />
              <line x1="0" y1="240" x2="900" y2="240" stroke="#18181b" strokeWidth="1.5" />
              <line x1="0" y1="360" x2="900" y2="360" stroke="#18181b" strokeWidth="1.5" />
              <line x1="0" y1="480" x2="900" y2="480" stroke="#18181b" strokeWidth="1.5" />

              {/* Waterway River representation */}
              <path d="M-10,500 C 250,450 400,520 850,480" fill="none" stroke="#06b6d4" strokeWidth="26" strokeOpacity="0.08" />
              <path d="M-10,500 C 250,450 400,520 850,480" fill="none" stroke="#22d3ee" strokeWidth="2" strokeOpacity="0.15" />
            </svg>

            {/* Custom stylized landmarks */}
            <div className="absolute top-[20%] left-[25%] -translate-x-1/2 text-[9px] uppercase tracking-[0.2em] text-zinc-650 font-sans">
              Central Heights Public park
            </div>
            <div className="absolute top-[68%] left-[20%] -translate-x-1/2 text-[9px] uppercase tracking-[0.2em] text-zinc-650 font-sans">
              Hudson Marina bay
            </div>
             <div className="absolute top-[40%] right-[10%] -translate-x-1/2 text-[9px] uppercase tracking-[0.2em] text-zinc-650 font-sans">
              Royal Opera Arch
            </div>

            {/* The active location dot pin of Flame & Fork */}
            <div className="absolute top-[55%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
              {/* Outer pulsing rings */}
              <div className="absolute w-20 h-20 rounded-full border border-orange-500/20 bg-orange-500/5 animate-pulse" />
              <div className="absolute w-12 h-12 rounded-full border border-orange-500/30 animate-[ping_2.5s_infinite]" />
              
              {/* Core golden Pin button wrapper */}
              <div className="relative w-7 h-7 rounded-full bg-orange-500 border-2 border-zinc-950 flex items-center justify-center text-zinc-950 shadow-[0_0_20px_rgba(249,115,22,0.85)] cursor-pointer">
                <MapPin className="w-4 h-4 fill-black stroke-black" />
              </div>

              {/* Location Tag block overlay */}
              <div className="mt-3.5 px-4 py-2 bg-zinc-950/95 backdrop-blur-md border border-orange-500/40 rounded-xl shadow-xl flex items-center gap-2 max-w-[200px] text-center">
                <div className="text-left">
                  <span className="text-[10px] uppercase font-bold tracking-[0.15em] text-orange-500 block leading-tight">Flame & Fork</span>
                  <span className="text-[8px] font-mono tracking-wide text-zinc-400 uppercase leading-none">Gastronomy Atelier</span>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom map metadata bar */}
          <div className="absolute bottom-4 left-4 right-4 p-3.5 glass-dark rounded-xl border border-white/5 flex justify-between items-center z-10">
            <span className="text-[10px] tracking-widest font-mono text-zinc-400 uppercase leading-none">
              GPS: 40.7182° N, 74.0049° W
            </span>
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noreferrer"
              className="text-[9px] tracking-widest font-sans font-bold text-orange-500 uppercase hover:text-orange-400 transition-colors pointer-events-auto"
            >
              Get Directions →
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
