import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { FullTimeFreelancerProfile as data } from './FreelancerPortfolioData';
import { 
  ArrowUpRight, ChevronRight, Globe, Github, Twitter, Linkedin,
  Mail, MapPin, Share2, Compass, MoveDown, Star, Sparkles,
  Zap, Cpu, Layers, Smartphone, Box, Maximize2, Power
} from 'lucide-react';

const RefinedText = ({ children, className = "" }) => (
  <motion.span 
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    className={`inline-block ${className}`}
  >
    {children}
  </motion.span>
);

export default function FreelancerPortfolio25() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="bg-[#fcfaf7] text-[#1c1c1c] font-serif selection:bg-stone-200 selection:text-stone-900 min-h-screen relative overflow-x-hidden text-left pb-40">
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/felt.png")' }} />
      <motion.div className="fixed top-0 left-0 right-0 h-[3px] bg-stone-900 z-[100] origin-left" style={{ scaleX }} />

      <nav className="fixed top-0 left-0 right-0 z-50 px-10 py-8 backdrop-blur-sm bg-[#fcfaf7]/80 flex justify-between items-center text-left border-b border-stone-200/50">
        <div className="flex items-center gap-6">
           <span className="text-xl font-bold tracking-tighter uppercase font-sans">{data.personal_info.name}</span>
           <div className="w-12 h-px bg-stone-300" />
           <span className="text-[10px] font-black tracking-[0.4em] opacity-40 uppercase font-sans italic">Elite_Solo_V25</span>
        </div>
        <button className="px-8 py-2 border border-stone-900 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-stone-900 hover:text-white transition-all font-sans italic">
           INIT_CONSULT
        </button>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-10 pt-48 lg:px-24 text-left">
        {/* HERO */}
        <section className="min-h-[75vh] flex flex-col justify-center text-left mb-40">
           <div className="flex items-center gap-4 mb-16 text-left">
              <div className="w-16 h-px bg-stone-900" />
              <span className="text-[10px] font-black uppercase tracking-[0.6em] font-sans opacity-40 italic">SOLO_PRACTITIONER_V25</span>
           </div>
           <h1 className="text-[10vw] lg:text-[8vw] font-black leading-[0.75] tracking-tighter uppercase mb-16 italic text-left">
              <RefinedText>Elite.</RefinedText><br />
              <RefinedText className="text-stone-400">Practitioner.</RefinedText>
           </h1>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end text-left">
              <p className="text-2xl lg:text-4xl font-light leading-snug tracking-tight italic max-w-2xl text-left border-l-4 border-stone-200 pl-10 italic">
                 {data.hero.subtitle}
              </p>
              <div className="flex flex-col gap-10 text-left items-start">
                 <div className="flex gap-16 text-left">
                    <div className="flex flex-col text-left">
                       <span className="text-4xl font-black font-sans">{data.stats[0].value}</span>
                       <span className="text-[10px] uppercase font-bold opacity-30 tracking-[0.4em] font-sans italic">{data.stats[0].label}</span>
                    </div>
                    <div className="flex flex-col text-left">
                       <span className="text-4xl font-black font-sans">{data.stats[1].value}</span>
                       <span className="text-[10px] uppercase font-bold opacity-30 tracking-[0.4em] font-sans italic">{data.stats[1].label}</span>
                    </div>
                 </div>
                 <button className="group flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.8em] font-sans hover:gap-10 transition-all underline decoration-stone-200 underline-offset-[10px] italic">
                    OBSERVE_ARCHIVE <ArrowUpRight size={24} />
                 </button>
              </div>
           </div>
        </section>

        {/* PROJECTS */}
        <section className="py-40 text-left">
           <div className="flex flex-col lg:flex-row justify-between items-end gap-16 mb-40 text-left">
              <h2 className="text-6xl lg:text-[7vw] font-black italic uppercase tracking-tighter leading-none text-left italic">Archive_</h2>
              <p className="text-xs font-bold uppercase tracking-widest opacity-30 max-w-xs text-left mb-4 font-sans underline decoration-stone-200 underline-offset-8 italic">// SOLO_PROJECT_MANIFEST</p>
           </div>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 text-left">
              {data.completed_projects.map((p, i) => (
                 <div key={i} className="flex flex-col gap-8 text-left group">
                    <div className="aspect-[16/10] bg-stone-100 rounded-[2.5rem] overflow-hidden border border-stone-200 relative shadow-sm">
                       <img src={`https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&u=${i}`} alt={p.project_name} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
                    </div>
                    <div className="px-4 text-left">
                       <span className="text-[9px] font-black uppercase tracking-[0.6em] opacity-30 mb-4 block font-sans italic">// MODULE_v25.0.{i}</span>
                       <h3 className="text-4xl lg:text-5xl font-black italic uppercase italic tracking-tighter mb-6 italic leading-none">{p.project_name}</h3>
                       <p className="text-lg text-stone-900/40 italic leading-relaxed mb-8 italic line-clamp-3 italic font-serif italic border-l border-stone-200 pl-6">{p.description}</p>
                       <div className="flex flex-wrap gap-4 mb-8 text-left">
                          {p.tech_stack.slice(0, 4).map((tech, j) => (
                             <span key={j} className="text-[8px] font-black uppercase border border-stone-200 px-4 py-2 bg-white text-stone-900/40 rounded-full font-sans italic shadow-sm">{tech}</span>
                          ))}
                       </div>
                       <button className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.5em] font-sans italic underline decoration-stone-200 underline-offset-8">ACCESS_LOGS <ChevronRight size={16} /></button>
                    </div>
                 </div>
              ))}
           </div>
        </section>

        {/* SERVICES */}
        <section className="py-20 text-left bg-stone-900 text-stone-50 -mx-10 lg:-mx-24 px-10 lg:px-24">
           <div className="max-w-7xl mx-auto py-20 text-left">
              <h2 className="text-6xl lg:text-[6vw] font-black italic uppercase leading-[0.8] mb-24 italic tracking-tighter text-left italic">Practitioner<br />Methods.</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 text-left">
                 {data.services.map((s, i) => (
                    <div key={i} className="flex flex-col gap-6 text-left border-l border-stone-800 pl-10">
                       <span className="text-stone-700 font-sans font-black text-xs uppercase tracking-[0.5em] italic">0{i+1}</span>
                       <h4 className="text-3xl font-black italic uppercase italic tracking-tighter text-left leading-none">{s.category}</h4>
                       <p className="text-stone-400 italic text-sm italic leading-relaxed italic">{s.description}</p>
                       <ul className="space-y-3 mt-4 text-left">
                          {s.features.map((f, j) => (
                             <li key={j} className="text-[10px] font-black uppercase opacity-20 hover:opacity-100 transition-opacity font-sans italic tracking-widest">[{f}]</li>
                          ))}
                       </ul>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* FOOTER */}
        <footer className="py-60 border-t border-stone-200 text-left">
           <div className="flex flex-col lg:flex-row justify-between gap-40 mb-40 text-left">
              <div className="text-left">
                 <h2 className="text-6xl lg:text-[10vw] font-black italic uppercase tracking-tighter leading-none mb-12 italic text-left">Forge.<br /><span className="text-stone-300 italic text-left italic">Unity.</span></h2>
                 <a href={`mailto:${data.personal_info.email}`} className="text-2xl lg:text-5xl font-black text-stone-900 hover:text-stone-400 transition-all font-sans italic text-left underline decoration-stone-200 underline-offset-[16px] italic">{data.personal_info.email}</a>
              </div>
              <div className="flex gap-20 text-left items-end">
                 <div className="flex flex-col gap-6 text-left">
                    <span className="text-[10px] font-black uppercase text-stone-300 font-sans italic">Directories</span>
                    {['B_Addr', 'Archive', 'Method'].map(l => (
                      <a key={l} href="#" className="text-xs font-black uppercase hover:text-stone-900 transition-colors font-sans italic text-stone-400 tracking-widest">./{l}</a>
                    ))}
                 </div>
              </div>
           </div>
           <div className="flex justify-between items-center text-[11px] font-black uppercase tracking-[0.5em] opacity-10 font-sans italic">
              <span>{data.personal_info.location} // BASE_ADDR</span>
              <span>© {new Date().getFullYear()} // ELITE_SOLO_V25</span>
           </div>
        </footer>
      </main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,300;1,700&family=Space+Grotesk:wght@300;900&display=swap');
        body { background-color: #fcfaf7; font-family: 'Cormorant Garamond', serif; }
        .font-sans { font-family: 'Space Grotesk', sans-serif; }
      `}</style>
    </div>
  );
}
