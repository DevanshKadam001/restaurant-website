import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CalendarDays, Users, Clock, Phone, User, CheckCircle2, Ticket, ShieldCheck } from 'lucide-react';

interface ReservationProps {
  theme: 'dark' | 'light';
}

export default function Reservation({ theme }: ReservationProps) {
  // Input states
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [guests, setGuests] = useState('2');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [dressCodeAccepted, setDressCodeAccepted] = useState(false);

  // Form submission overlay state
  const [isChecked, setIsChecked] = useState(false);
  const [bookingCode, setBookingCode] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !date || !time) return;

    setSubmitting(true);
    
    // Simulate luxury API booking delay
    setTimeout(() => {
      // Generate unique serial ticket number e.g. FAF-2026-9043
      const num = Math.floor(1000 + Math.random() * 9000);
      setBookingCode(`FAF-2026-${num}`);
      setSubmitting(false);
      setIsChecked(true);
    }, 1500);
  };

  const resetForm = () => {
    setName('');
    setPhone('');
    setGuests('2');
    setDate('');
    setTime('');
    setDressCodeAccepted(false);
    setIsChecked(false);
  };

  return (
    <section
      id="reservation"
      className={`py-24 md:py-32 relative transition-colors duration-500 overflow-hidden ${
        theme === 'dark' ? 'bg-[#050505] text-zinc-150' : 'bg-stone-50 text-zinc-900'
      }`}
    >
      {/* Decorative vector assets */}
      <div className="absolute left-1/3 top-1/3 w-[380px] h-[380px] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Hand: Privileged Rules & Guidelines Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 flex flex-col justify-center"
        >
          <div className="inline-block px-4 py-1.5 mb-6 border border-white/20 text-[10px] uppercase tracking-[0.3em] font-medium transition-colors bg-white/5 text-white max-w-max">
            Fine Seating Privilege
          </div>
          <h2 className={`font-serif text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight ${
            theme === 'dark' ? 'text-zinc-50' : 'text-zinc-900'
          }`}>
            Secure Your Culinary <br />
            <span className="italic gold-text">Proscenium Arch</span>
          </h2>
          
          <p className={`text-xs md:text-sm font-sans tracking-wide leading-relaxed mb-8 ${
            theme === 'dark' ? 'text-zinc-400' : 'text-zinc-650'
          }`}>
            Each evening at Flame & Fork is an ephemeral, double-act seating production. We strongly encourage securing tables up to 14 days in advance to capture optimal fire-side views.
          </p>

          {/* Luxury seating rules bullets list */}
          <div className="space-y-4">
            <div className="flex gap-3.5 items-start">
              <div className="w-5 h-5 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 shrink-0 mt-0.5">
                <span className="font-sans text-[10px] font-bold">01</span>
              </div>
              <div>
                <h4 className="font-serif text-xs font-bold uppercase tracking-wider text-orange-500">Sartorial Guidance</h4>
                <p className={`text-[11px] font-sans tracking-wide ${
                  theme === 'dark' ? 'text-zinc-500' : 'text-zinc-400'
                }`}>We request elegant smart-casual attire. Athletics caps or sleeveless leisure apparel are discouraged.</p>
              </div>
            </div>
            <div className="flex gap-3.5 items-start">
              <div className="w-5 h-5 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 shrink-0 mt-0.5">
                <span className="font-sans text-[10px] font-bold">02</span>
              </div>
              <div>
                <h4 className="font-serif text-xs font-bold uppercase tracking-wider text-orange-500">Seat Holding Tolerance</h4>
                <p className={`text-[11px] font-sans tracking-wide ${
                  theme === 'dark' ? 'text-zinc-500' : 'text-zinc-400'
                }`}>Tables are held for up to 15 minutes past scheduled appointment hours before being made available to waiting lists.</p>
              </div>
            </div>
            <div className="flex gap-3.5 items-start">
              <div className="w-5 h-5 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 shrink-0 mt-0.5">
                <span className="font-sans text-[10px] font-bold">03</span>
              </div>
              <div>
                <h4 className="font-serif text-xs font-bold uppercase tracking-wider text-orange-500">Dietary Notification</h4>
                <p className={`text-[11px] font-sans tracking-wide ${
                  theme === 'dark' ? 'text-zinc-500' : 'text-zinc-400'
                }`}>Kindly detail severe culinary allergen sensitivities or specialized kosher requirements inside our form inputs.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Hand: Interactive Reservation Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="lg:col-span-7"
        >
          <div className="relative">
            <AnimatePresence mode="wait">
              {!isChecked ? (
                /* The Active Form Block */
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className={`rounded-3xl border p-8 md:p-10 transition-colors relative flex flex-col gap-6 ${
                    theme === 'dark'
                      ? 'bg-gradient-to-br from-zinc-900 to-black/85 border-white/5 shadow-2xl'
                      : 'bg-white border-zinc-155 shadow-xl'
                  }`}
                >
                  <p className="text-xs uppercase font-bold tracking-widest text-orange-500 border-b border-dashed border-white/5 pb-4">
                    Table Seating Inquiry
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name Input */}
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 flex items-center gap-1">
                        <User className="w-3.5 h-3.5 text-orange-500" /> Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Jacques Pepin"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={`w-full px-5 py-3.5 rounded-xl text-xs font-sans tracking-wide border outline-none transition-all duration-300 ${
                          theme === 'dark'
                            ? 'bg-zinc-950/80 border-white/5 focus:border-orange-500/60 text-zinc-100 placeholder-zinc-700'
                            : 'bg-stone-50 border-zinc-200 focus:border-amber-600/50 text-zinc-900 placeholder-zinc-400'
                        }`}
                      />
                    </div>

                    {/* Phone Input */}
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 flex items-center gap-1">
                        <Phone className="w-3.5 h-3.5 text-orange-500" /> Mobile Phone
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 304-4592"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className={`w-full px-5 py-3.5 rounded-xl text-xs font-sans tracking-wide border border-zinc-850 outline-none transition-all duration-300 ${
                          theme === 'dark'
                            ? 'bg-zinc-950/80 border-white/5 focus:border-orange-500/60 text-zinc-100 placeholder-zinc-700'
                            : 'bg-stone-50 border-zinc-200 focus:border-amber-600/50 text-zinc-900 placeholder-zinc-400'
                        }`}
                      />
                    </div>

                    {/* Guest Selection */}
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-orange-500" /> Guest Volume
                      </label>
                      <select
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        className={`w-full px-5 py-3.5 rounded-xl text-xs font-sans tracking-wide border outline-none transition-all duration-300 ${
                          theme === 'dark'
                            ? 'bg-[#050505] border-white/5 focus:border-orange-500/60 text-zinc-100'
                            : 'bg-stone-50 border-zinc-200 focus:border-amber-600/50 text-zinc-900 pointer-events-auto cursor-pointer'
                        }`}
                      >
                        <option value="1">1 Guest Representative</option>
                        <option value="2">2 Guests (Recommended)</option>
                        <option value="3">3 Guests Seating</option>
                        <option value="4">4 Guests Booth</option>
                        <option value="6">6 Guests Banquet</option>
                        <option value="8">8 Guests Chef's Table</option>
                      </select>
                    </div>

                    {/* Date Input */}
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 flex items-center gap-1">
                        <CalendarDays className="w-3.5 h-3.5 text-orange-500" /> Targeted Date
                      </label>
                      <input
                        type="date"
                        required
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className={`w-full px-5 py-3.5 rounded-xl text-xs font-sans tracking-wide border outline-none focus:outline-none transition-all duration-300 ${
                          theme === 'dark'
                            ? 'bg-[#050505] border-white/5 focus:border-orange-500/60 text-zinc-100'
                            : 'bg-stone-50 border-zinc-200 focus:border-amber-600/50 text-zinc-900'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Time Selection */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-orange-500" /> Preferred Session Seating
                    </label>
                    <div className="grid grid-cols-3 gap-3.5">
                      {[
                        { val: '17:30', name: '5:30 PM (Sunset Seating)' },
                        { val: '19:30', name: '7:30 PM (Peak Seating)' },
                        { val: '21:30', name: '9:30 PM (Late-Night Seating)' },
                      ].map((t) => {
                        const isChosen = time === t.val;
                        return (
                          <button
                            key={t.val}
                            type="button"
                            onClick={() => setTime(t.val)}
                            className={`px-3 py-4 rounded-xl text-[10px] font-bold tracking-widest uppercase transition-all duration-400 border text-center pointer-events-auto cursor-pointer flex flex-col items-center justify-center gap-1 ${
                              isChosen
                                ? 'bg-orange-600 border-orange-600 text-white shadow-[0_4px_12px_rgba(249,115,22,0.3)] font-extrabold'
                                : theme === 'dark'
                                ? 'bg-zinc-950/60 border-white/5 hover:border-orange-500/30 text-zinc-300 hover:bg-zinc-900/50'
                                : 'bg-stone-50 border-zinc-200 hover:border-amber-600/30 text-zinc-650 hover:bg-white shadow-sm'
                            }`}
                          >
                            <span>{t.val}</span>
                            <span className="text-[7.5px] opacity-75 font-sans whitespace-nowrap">{t.val === '19:30' ? 'Prime' : 'Available'}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Dress Code Acceptance Checkbox */}
                  <div className="flex items-start gap-3 mt-2">
                    <input
                      id="dress-code"
                      type="checkbox"
                      required
                      checked={dressCodeAccepted}
                      onChange={(e) => setDressCodeAccepted(e.target.checked)}
                      className="mt-1 accent-orange-500 cursor-pointer pointer-events-auto h-4 w-4"
                    />
                    <label htmlFor="dress-code" className={`text-[11px] font-sans leading-relaxed text-zinc-400 select-none cursor-pointer ${
                      theme === 'dark' ? 'hover:text-zinc-300' : 'hover:text-zinc-700'
                    }`}>
                      I acknowledge the dress guidance guidelines (Elegant Casual) and agree that cancellations require at least 24 hours advance notice.
                    </label>
                  </div>

                  {/* Elegant Glowing Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full text-center py-4 bg-gradient-to-r from-orange-600 to-orange-700 text-white text-xs font-bold uppercase tracking-[0.3em] rounded-xl shadow-[0_4px_25px_rgba(249,115,22,0.22)] hover:from-orange-500 hover:to-orange-600 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] cursor-pointer flex items-center justify-center gap-2"
                  >
                    {submitting ? (
                      <>
                        <div className="w-4.5 h-4.5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                        <span>Verifying Availability...</span>
                      </>
                    ) : (
                      'Request Gourmet Table'
                    )}
                  </button>
                </motion.form>
              ) : (
                /* The Confirmed Luxury Pass Block */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                  className="rounded-3xl p-8 md:p-10 border border-white/10 bg-[#050505] text-center shadow-2xl relative overflow-hidden flex flex-col items-center justify-center min-h-[400px]"
                >
                  {/* Subtle golden background glow */}
                  <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-orange-500/10 to-transparent pointer-events-none" />
                  
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300, delay: 0.15 }}
                    className="w-16 h-16 rounded-full bg-orange-500/10 border border-orange-500/40 text-orange-500 flex items-center justify-center mb-6"
                  >
                    <CheckCircle2 className="w-10 h-10" />
                  </motion.div>

                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-zinc-50 mb-2">
                    Table Secured!
                  </h3>
                  
                  <p className="text-zinc-400 text-xs tracking-wider font-sans max-w-sm mb-8 leading-relaxed">
                    Pleasure confirmed, <strong className="text-zinc-200">{name}</strong>. A premier table for <strong className="text-zinc-200">{guests} guests</strong> has been locked for you on <strong className="text-zinc-200">{date}</strong> at <strong className="text-zinc-200">{time} PM</strong>.
                  </p>

                  {/* Display Ticket boarding pass */}
                  <div className="w-full max-w-sm rounded-xl border border-dashed border-white/10 bg-black/60 p-5 flex items-center justify-between text-left relative overflow-hidden shadow-inner">
                    <div className="absolute top-1/2 left-0 -translate-y-1/2 w-4 h-8 rounded-r-full bg-[#050505] border-r border-[#1a1a1a]" />
                    <div className="absolute top-1/2 right-0 -translate-y-1/2 w-4 h-8 rounded-l-full bg-[#050505] border-l border-[#1a1a1a]" />
                    
                    <div className="pl-3.5">
                      <span className="text-[8px] uppercase tracking-widest text-[#f97316] font-bold block mb-1">Boarding Serial</span>
                      <p className="font-mono text-zinc-100 text-sm font-bold tracking-widest mb-2 flex items-center gap-1.5 uppercase">
                        <Ticket className="w-4 h-4 text-orange-500" />
                        {bookingCode}
                      </p>
                      <p className="text-[9px] font-sans text-zinc-500 uppercase tracking-widest leading-none">
                        Present this voucher code to concierge desk.
                      </p>
                    </div>

                    <div className="text-right flex flex-col justify-center border-l border-zinc-900 pl-4">
                      <ShieldCheck className="w-8 h-8 text-[#f97316]/60 mx-auto" />
                    </div>
                  </div>

                  <button
                    onClick={resetForm}
                    className="mt-8 px-6 py-2.5 rounded-full border border-zinc-805 hover:border-orange-500/40 text-zinc-400 hover:text-orange-500 text-[10px] font-bold uppercase tracking-widest transition-all hover:bg-zinc-950 pointer-events-auto cursor-pointer"
                  >
                    Modify Request
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
