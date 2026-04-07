import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { CompanyPortfolio as data } from './CompanyPortfolioData';
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

export default function CompanyPortfolio25() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="bg-[#fcfaf7] text-[#1c1c1c] font-serif selection:bg-stone-200 selection:text-stone-900 min-h-screen relative overflow-x-hidden text-left pb-40">
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/felt.png")' }} />
      <motion.div className="fixed top-0 left-0 right-0 h-[3px] bg-stone-900 z-[100] origin-left" style={{ scaleX }} />

      <nav className="fixed top-0 left-0 right-0 z-50 px-10 py-8 backdrop-blur-sm bg-[#fcfaf7]/80 flex justify-between items-center text-left border-b border-stone-200/50">
        <div className="flex items-center gap-6">
           <span className="text-xl font-bold tracking-tighter uppercase font-sans">{data.brand.name}</span>
           <div className="w-12 h-px bg-stone-300" />
           <span className="text-[10px] font-black tracking-[0.4em] opacity-40 uppercase font-sans italic">Elite_Agency_V25</span>
        </div>
        <button className="px-10 py-3 bg-stone-900 text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-stone-700 transition-all font-sans italic">
           INIT_PARTNERSHIP
        </button>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-10 pt-48 lg:px-24 text-left">
        {/* HERO */}
        <section className="min-h-[80vh] flex flex-col justify-center text-left mb-40">
           <div className="flex items-center gap-4 mb-16 text-left origin-left">
              <div className="w-16 h-px bg-stone-900" />
              <span className="text-[10px] font-black uppercase tracking-[0.6em] font-sans opacity-40 italic">GLOBAL_STUDIO_V25 // STABLE</span>
           </div>
           
           <h1 className="text-[12vw] lg:text-[10vw] font-black leading-[0.75] tracking-tighter uppercase mb-20 italic text-left">
              <RefinedText>Elite.</RefinedText><br />
              <RefinedText className="text-stone-300">Architecture.</RefinedText>
           </h1>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-end text-left">
              <p className="text-3xl lg:text-5xl text-stone-900 font-light leading-[1.05] tracking-tight italic max-w-2xl text-left border-l-4 border-stone-200 pl-16 text-left italic">
                 {data.hero.subtitle}
              </p>
              <div className="flex flex-col gap-12 text-left items-start lg:items-end">
                 <div className="flex gap-20 text-left">
                    <div className="flex flex-col text-left">
                       <span className="text-6xl font-black font-sans">40+</span>
                       <span className="text-[10px] uppercase font-bold opacity-30 tracking-[0.6em] font-sans italic">Active_Nodes</span>
                    </div>
                    <div className="flex flex-col text-left">
                       <span className="text-6xl font-black font-sans">100%</span>
                       <span className="text-[10px] uppercase font-bold opacity-30 tracking-[0.6em] font-sans italic">Uptime_SLA</span>
                    </div>
                 </div>
                 <button className="group flex items-center gap-10 text-[11px] font-black uppercase tracking-[0.8em] font-sans hover:gap-14 transition-all underline decoration-stone-200 underline-offset-[20px] decoration-4 italic">
                    SCAN_TECHNICAL_MANIFEST <ArrowUpRight size={32} />
                 </button>
              </div>
           </div>
        </section>

        {/* PROJECTS: Payload Archive */}
        <section className="py-40 text-left">
           <div className="flex flex-col lg:flex-row justify-between items-end gap-16 mb-40 text-left">
              <h2 className="text-[10vw] font-black italic uppercase tracking-tighter leading-none text-left italic">Archive_</h2>
              <p className="text-[11px] font-black uppercase tracking-widest opacity-20 max-w-sm text-left mb-6 italic underline decoration-stone-200 underline-offset-8 decoration-2 italic font-sans">// AGENCY_TECHNICAL_MANIFEST</p>
           </div>
           
           <div className="grid grid-cols-1 gap-40 text-left">
              {data.completed_projects.map((p, i) => (
                 <div key={i} className="group relative flex flex-col lg:flex-row gap-32 items-center text-left">
                    <div className="lg:w-1/2 aspect-[16/10] bg-stone-100 rounded-[3rem] overflow-hidden border border-stone-200 shadow-sm relative">
                       <img src={`https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&u=${i}`} alt={p.project_name} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
                    </div>
                    <div className="lg:w-1/2 text-left">
                       <span className="text-[10px] font-black uppercase tracking-[0.8em] text-stone-300 mb-10 block font-sans italic">// PAYLOAD_v25.0.{i}</span>
                       <h3 className="text-4xl lg:text-7xl font-black italic uppercase italic tracking-tighter mb-12 italic leading-tight text-stone-900 shadow-sm">{p.project_name}</h3>
                       <p className="text-2xl text-stone-500 italic leading-snug italic mb-16 italic line-clamp-3 italic border-l border-stone-200 pl-12 shadow-sm font-serif">{p.problem}</p>
                       <div className="flex flex-wrap gap-4 mb-16 text-left">
                          {p.technologies?.slice(0, 4).map((tech, j) => (
                             <span key={j} className="text-[10px] font-black uppercase border border-stone-200 px-8 py-3 bg-white text-stone-400 rounded-full font-sans italic shadow-md">{tech}</span>
                          ))}
                       </div>
                       <button className="flex items-center gap-6 text-[11px] font-black uppercase tracking-[1em] text-stone-400 hover:text-stone-900 transition-all italic underline decoration-stone-200 underline-offset-8">READ_LOGS <ChevronRight size={20} /></button>
                    </div>
                 </div>
              ))}
           </div>
        </section>

        {/* FOOTER */}
        <footer className="py-60 border-t border-stone-200 text-left bg-[#fcfaf7] relative overflow-hidden">
           <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-60 text-left">
              <div className="text-left">
                 <h2 className="text-[12vw] font-black italic uppercase tracking-tighter leading-none mb-16 italic text-left">Forge.<br /><span className="text-stone-300 italic text-left italic">Unity.</span></h2>
                 <a href={`mailto:${data.brand.email}`} className="text-3xl lg:text-7xl font-black italic text-stone-900 hover:text-stone-400 transition-all underline decoration-stone-200 underline-offset-[25px] decoration-4 italic">{data.brand.email}</a>
              </div>
              <div className="flex gap-20 text-left items-end">
                 <div className="flex flex-col gap-10 text-left shadow-2xl">
                    <span className="text-[11px] font-black uppercase tracking-widest opacity-20 font-sans italic underline decoration-stone-100 underline-offset-8">Directories</span>
                    {['B_Addr', 'Archive', 'Method'].map(l => (
                      <a key={l} href="#" className="text-xs font-black uppercase text-stone-400 hover:text-stone-900 transition-colors font-sans italic tracking-widest shadow-sm">./{l}</a>
                    ))}
                 </div>
              </div>
           </div>
           <div className="max-w-7xl mx-auto flex justify-between items-center text-[10px] font-black uppercase tracking-[1em] opacity-10 font-sans italic">
              <span>{data.brand.location} // B_ADDR: 0x242628</span>
              <span>© {new Date().getFullYear()} // ELITE_AGENCY_V25</span>
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
