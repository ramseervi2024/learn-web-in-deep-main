import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { portfolioprofile as data } from './PersonalPortfolioData';
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

export default function PersonalPortfolio25() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="bg-[#fcfaf7] text-[#1c1c1c] font-serif selection:bg-stone-200 selection:text-stone-900 min-h-screen relative overflow-x-hidden text-left pb-40">
      {/* Background Texture */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/felt.png")' }} />
      
      <motion.div className="fixed top-0 left-0 right-0 h-[3px] bg-stone-900 z-[100] origin-left" style={{ scaleX }} />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-10 py-8 backdrop-blur-sm bg-[#fcfaf7]/80 flex justify-between items-center text-left border-b border-stone-200/50">
        <div className="flex items-center gap-6">
           <span className="text-xl font-bold tracking-tighter uppercase font-sans">{data.personal_info.name}</span>
           <div className="w-12 h-px bg-stone-300" />
           <span className="text-[10px] font-black tracking-[0.4em] opacity-40 uppercase font-sans italic">Elite_Studio_V25</span>
        </div>
        <div className="hidden lg:flex gap-12 text-[10px] uppercase font-black tracking-[0.3em] font-sans">
           {['Studio', 'Archive', 'Process', 'Connect'].map(item => (
             <a key={item} href={`#${item.toLowerCase()}`} className="hover:opacity-100 opacity-40 transition-opacity">[{item}]</a>
           ))}
        </div>
        <button className="hidden lg:block px-8 py-2 border border-stone-900 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-stone-900 hover:text-white transition-all font-sans">
           START_INQUIRY
        </button>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-10 pt-48 lg:px-24">
        {/* HERO */}
        <section id="studio" className="min-h-[80vh] flex flex-col justify-center text-left">
           <div className="flex items-center gap-4 mb-16 text-left origin-left">
              <div className="w-16 h-px bg-stone-900" />
              <span className="text-[10px] font-black uppercase tracking-[0.6em] font-sans opacity-40 italic">ESTABLISHED_MMXXIV</span>
           </div>
           
           <h1 className="text-[12vw] lg:text-[9vw] font-black leading-[0.8] tracking-tighter uppercase mb-16 italic text-left">
              <RefinedText>Elite.</RefinedText><br />
              <RefinedText className="text-stone-400">Studio.</RefinedText>
           </h1>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end text-left">
              <p className="text-3xl lg:text-5xl font-light leading-[1.1] tracking-tight italic max-w-2xl text-left border-l-4 border-stone-200 pl-10 italic">
                 {data.hero.subtitle}
              </p>
              <div className="flex flex-col gap-10 text-left items-start lg:items-end">
                 <div className="flex gap-16 text-left">
                    <div className="flex flex-col text-left">
                       <span className="text-5xl font-black font-sans">{data.personal_info.experience_years}Y</span>
                       <span className="text-[10px] uppercase font-bold opacity-30 tracking-widest font-sans italic">Operational_V</span>
                    </div>
                    <div className="flex flex-col text-left">
                       <span className="text-5xl font-black font-sans">99.9%</span>
                       <span className="text-[10px] uppercase font-bold opacity-30 tracking-widest font-sans italic">SLA_Sync</span>
                    </div>
                 </div>
                 <button className="group flex items-center gap-8 text-[11px] font-black uppercase tracking-[0.8em] font-sans hover:gap-12 transition-all underline decoration-stone-200 underline-offset-[12px] decoration-4 italic">
                    VIEW_CAPABILITIES <ArrowUpRight size={28} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                 </button>
              </div>
           </div>
        </section>

        {/* ARCHIVE: Project Grid */}
        <section id="archive" className="py-40 text-left">
           <div className="flex flex-col lg:flex-row justify-between items-end gap-16 mb-40 text-left">
              <h2 className="text-7xl lg:text-[8vw] font-black italic uppercase tracking-tighter italic leading-none text-left">Archive_</h2>
              <p className="text-xs font-bold uppercase tracking-widest opacity-30 max-w-xs text-left mb-4 font-sans underline decoration-stone-200 underline-offset-8 decoration-2 italic">A curated chronological sequence of high-fidelity digital architectures.</p>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 text-left">
              {data.completed_projects.map((p, i) => (
                 <motion.div 
                    key={i}
                    whileHover={{ y: -10 }}
                    className="flex flex-col gap-10 text-left group"
                 >
                    <div className="aspect-[4/5] bg-stone-100 overflow-hidden relative shadow-sm border border-stone-200 rounded-3xl">
                       <img 
                          src={`https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&u=${i}`} 
                          alt={p.project_name} 
                          className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
                       />
                       <div className="absolute inset-0 bg-stone-900/5 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity" />
                       <div className="absolute top-10 right-10 bg-white/80 backdrop-blur-md px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest border border-stone-200 font-sans shadow-sm">Protocol_V{i+10}</div>
                    </div>
                    <div className="px-4 text-left">
                       <span className="text-[10px] font-black uppercase tracking-[0.5em] opacity-30 mb-6 block font-sans italic">// MODULE_v25.0.{i}</span>
                       <h3 className="text-4xl lg:text-5xl font-black italic uppercase italic tracking-tighter mb-8 italic leading-none">{p.project_name}</h3>
                       <p className="text-xl text-stone-900/40 italic leading-relaxed italic mb-10 italic line-clamp-3 italic font-serif italic border-l border-stone-200 pl-6">{p.description}</p>
                       <div className="flex flex-wrap gap-3 mb-10 text-left">
                          {p.tech_stack.slice(0, 4).map((tech, j) => (
                             <span key={j} className="text-[9px] font-black uppercase border border-stone-200 px-6 py-2 bg-white text-stone-900/40 rounded-full font-sans italic shadow-sm">{tech}</span>
                          ))}
                       </div>
                       <button className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.6em] font-sans hover:gap-8 transition-all italic underline decoration-stone-200 underline-offset-8">ACCESS_LOGS <ChevronRight size={18} /></button>
                    </div>
                 </motion.div>
              ))}
           </div>
        </section>

        {/* PROCESS: Services */}
        <section id="process" className="py-40 bg-stone-900 text-stone-50 -mx-10 lg:-mx-24 px-10 lg:px-24 text-left">
           <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-40 text-left">
              <div className="text-left py-20">
                 <h2 className="text-6xl lg:text-[7vw] font-black italic uppercase leading-[0.85] mb-12 italic tracking-tighter italic text-left">Studio<br />Process.</h2>
                 <p className="text-2xl text-stone-400 italic font-light leading-relaxed italic mb-20 italic max-w-sm italic">Architecting the bridge between mission-critical technical logic and elite visual storytelling.</p>
                 <div className="space-y-12 text-left">
                    {data.services.map((s, i) => (
                       <div key={i} className="flex flex-col gap-6 group text-left">
                          <div className="flex items-center gap-6 text-left">
                             <div className="w-12 h-12 rounded-full border border-stone-700 flex items-center justify-center text-stone-400 font-sans font-black text-xs group-hover:bg-stone-50 group-hover:text-stone-900 transition-all italic tracking-tighter italic shadow-inner">0{i+1}</div>
                             <h4 className="text-2xl font-black italic uppercase italic tracking-tighter italic text-left">{s.category}</h4>
                          </div>
                          <div className="w-full h-px bg-stone-800" />
                       </div>
                    ))}
                 </div>
              </div>
              <div className="flex flex-col justify-center gap-10 text-left py-20">
                 <div className="p-16 border border-stone-800 bg-stone-800/50 rounded-[3rem] backdrop-blur-xl relative overflow-hidden text-left shadow-2xl">
                    <div className="absolute -top-10 -right-10 opacity-5 transition-opacity duration-700 group-hover:opacity-20"><Star size={200} /></div>
                    <span className="text-[10px] font-black uppercase tracking-[0.8em] opacity-30 mb-10 block font-sans italic">_TECHNICAL_SLA_CONFIRMED</span>
                    <h3 className="text-4xl lg:text-5xl font-black italic uppercase italic tracking-tighter mb-10 italic leading-none underline decoration-stone-700 underline-offset-[16px]">Performance.<br />First.</h3>
                    <p className="text-xl text-stone-400 italic leading-relaxed italic mb-12 italic font-serif italic">{data.hero.subtitle}</p>
                    <div className="grid grid-cols-2 gap-10 text-left">
                      {data.stats.slice(0, 2).map((s, i) => (
                        <div key={i} className="flex flex-col text-left">
                           <span className="text-4xl font-black font-sans text-stone-50 uppercase tracking-tighter italic">_{s.value}</span>
                           <span className="text-[9px] uppercase font-bold opacity-30 tracking-[0.4em] font-sans italic">{s.label}</span>
                        </div>
                      ))}
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* FOOTER: Connect */}
        <footer id="connect" className="py-80 border-t border-stone-200 text-left bg-stone-50 relative overflow-hidden">
           <div className="max-w-7xl mx-auto flex flex-col gap-60 text-left">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-40 text-left">
                 <div className="text-left">
                    <h2 className="text-8xl lg:text-[14vw] font-black italic uppercase tracking-tighter leading-none mb-16 italic text-left">Forge.<br /><span className="text-stone-300">Unity.</span></h2>
                    <p className="text-2xl text-stone-400 italic leading-relaxed italic max-w-sm italic mb-20 italic">Initializing technical partnerships for mission-critical architectural expansion.</p>
                    <div className="flex flex-col gap-8 text-left">
                       <span className="text-[10px] font-black uppercase tracking-[0.8em] opacity-30 font-sans italic">Transmission_Link</span>
                       <a href={`mailto:${data.personal_info.email}`} className="text-3xl lg:text-7xl font-black italic text-stone-900 hover:text-stone-400 transition-all underline decoration-stone-200 underline-offset-[25px] decoration-4 italic">{data.personal_info.email}</a>
                    </div>
                 </div>

                 <div className="flex flex-col justify-center items-start lg:items-end gap-32 text-left">
                    <div className="flex gap-40 text-left">
                       <div className="flex flex-col gap-10 text-left shadow-lg">
                          <span className="text-[11px] font-black uppercase tracking-widest opacity-20 font-sans italic">Navigate</span>
                          {['Studio', 'Archive', 'Process'].map(l => (
                            <a key={l} href={`#${l.toLowerCase()}`} className="text-xs font-black uppercase opacity-40 hover:opacity-100 transition-opacity font-sans italic tracking-widest">[{l}]</a>
                          ))}
                       </div>
                       <div className="flex flex-col gap-10 text-left">
                          <span className="text-[11px] font-black uppercase tracking-widest opacity-20 font-sans italic">Connect</span>
                          {['Twitter', 'GitHub', 'LinkedIn'].map(l => (
                            <a key={l} href="#" className="text-xs font-black uppercase opacity-40 hover:opacity-100 transition-opacity font-sans italic tracking-widest">[{l}]</a>
                          ))}
                       </div>
                    </div>
                    <div className="flex flex-col lg:flex-row items-end gap-12 text-[11px] font-black uppercase tracking-[0.6em] opacity-10 font-sans italic">
                       <span>{data.personal_info.location} // BASE_ADDR: 0x242628</span>
                       <span>© {new Date().getFullYear()} // ELITE_STUDIO_IDENTITY_V25</span>
                    </div>
                 </div>
              </div>
           </div>
        </footer>
      </main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,300;1,700&family=Outfit:wght@200;900&family=Space+Grotesk:wght@300;900&display=swap');
        
        body {
          background-color: #fcfaf7;
          font-family: 'Cormorant Garamond', serif;
        }

        .font-sans {
          font-family: 'Space Grotesk', sans-serif;
        }

        ::-webkit-scrollbar {
          width: 0px;
        }
      `}</style>
    </div>
  );
}
