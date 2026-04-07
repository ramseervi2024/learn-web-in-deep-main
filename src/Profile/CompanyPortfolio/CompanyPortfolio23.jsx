import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, AnimatePresence, useInView } from 'framer-motion';
import { CompanyPortfolio as data } from './CompanyPortfolioData';
import { 
  Layers, Cpu, Database, Globe, Smartphone, Cloud, Terminal, 
  ArrowRight, ExternalLink, Box, Activity, Maximize2, Power, 
  ChevronRight, ArrowDown, MapPin, Mail, Github, Twitter, Linkedin
} from 'lucide-react';

const StackLayer = ({ children, index, total, title = "LAYER" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  return (
    <motion.div ref={ref} className="relative group mb-[-80px] transition-all duration-700">
      <div className={`p-16 rounded-[3.5rem] border border-orange-500/10 bg-slate-900 shadow-2xl relative overflow-hidden transition-all duration-700 ${isInView ? 'opacity-100 scale-100' : 'opacity-40 scale-95'}`}>
        <div className="absolute top-0 right-0 p-10 font-black text-white/5 text-8xl italic group-hover:text-orange-500/10 transition-colors uppercase italic pointer-events-none">0{index + 1}</div>
        <div className="flex flex-col gap-8 text-left">
           <span className="text-[11px] font-black uppercase tracking-[0.5em] text-orange-500/60 italic">_ARCH_LAYER_v{index}</span>
           <h3 className="text-5xl font-black italic uppercase italic tracking-tighter italic text-white leading-none">{title}</h3>
           {children}
        </div>
      </div>
    </motion.div>
  );
};

export default function CompanyPortfolio23() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  
  return (
    <div className="bg-[#0a0c10] text-slate-100 font-sans selection:bg-orange-500/30 selection:text-white min-h-screen relative overflow-x-hidden text-left pb-40">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,#1e1b4b_0%,#0a0c10_80%)] opacity-40" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-orange-600 opacity-[0.03] blur-[200px] rounded-full" />
      </div>

      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-600 to-amber-500 z-[100]" style={{ scaleX }} />

      <nav className="fixed top-0 left-0 right-0 z-50 px-12 py-8 backdrop-blur-md bg-[#0a0c10]/40 border-b border-white/5 flex justify-between items-center text-left">
        <div className="flex items-center gap-8">
           <div className="w-14 h-14 rounded-3xl bg-orange-600/10 border border-orange-500/30 flex items-center justify-center text-orange-500 shadow-inner">
              <Layers size={28} />
           </div>
           <span className="text-[11px] font-black uppercase tracking-[0.5em] italic text-white/80">{data.brand.name} // HORIZON</span>
        </div>
        <button className="px-10 py-3 bg-orange-600 text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-orange-500 transition-all shadow-xl">
           INITIALIZE_STACK
        </button>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-12 pt-48 text-left lg:px-44">
        {/* HERO */}
        <section className="min-h-[85vh] flex flex-col justify-center text-left mb-60">
           <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 text-[10px] font-black uppercase tracking-[0.4em] text-orange-500 mb-16 w-fit">
              <Activity size={16} className="animate-pulse" /> FULL_SPECTRUM_AGENCY_READY
           </div>
           <h1 className="text-8xl md:text-[14vw] font-black italic uppercase leading-[0.7] tracking-tighter mb-20 italic text-left">
              Stack<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-200 to-orange-600">Horizon.</span>
           </h1>
           <p className="text-3xl md:text-5xl text-white/30 font-light max-w-4xl leading-tight mb-24 italic border-l-4 border-orange-500/20 pl-16 text-left italic">
              {data.hero.subtitle}
           </p>
           <div className="flex flex-wrap gap-16 items-center text-left">
              <button className="px-16 py-8 bg-orange-600 text-white font-black text-xs uppercase tracking-[0.6em] rounded-3xl hover:bg-orange-500 transition-all shadow-2xl shadow-orange-500/20">
                 OBSERVE_LAYERS
              </button>
              <div className="flex gap-24 text-left">
                 <div className="flex flex-col text-left">
                    <span className="text-6xl font-black text-white">50+</span>
                    <span className="text-[10px] uppercase font-bold text-white/20 tracking-[0.6em] italic">Architectures_Active</span>
                 </div>
                 <div className="flex flex-col text-left">
                    <span className="text-6xl font-black text-orange-500">100%</span>
                    <span className="text-[10px] uppercase font-bold text-white/20 tracking-[0.6em] italic">Deploy_Confidence</span>
                 </div>
              </div>
           </div>
        </section>

        {/* PROJECTS */}
        <section className="py-20 text-left">
           <div className="flex flex-col md:flex-row justify-between items-end gap-16 mb-40 text-left">
              <h2 className="text-7xl md:text-[10vw] font-black italic uppercase tracking-tighter italic text-left leading-none">Archives_</h2>
              <p className="text-[11px] font-black uppercase tracking-widest text-orange-500/40 italic max-w-sm text-left italic font-mono">// LAYERED_TECHNICAL_AGENCY_MANIFEST</p>
           </div>
           <div className="max-w-6xl mx-auto space-y-24">
              {data.completed_projects.map((p, i) => (
                <StackLayer key={i} index={i} total={data.completed_projects.length} title={p.project_name}>
                   <p className="text-2xl text-white/30 italic leading-relaxed mb-12 italic border-l-2 border-orange-500/20 pl-10 italic">{p.problem}</p>
                   <div className="flex flex-wrap gap-4 mb-12 text-left">
                      {p.technologies?.slice(0, 5).map((t, j) => (
                         <span key={j} className="text-[10px] font-black uppercase border border-white/10 px-8 py-3 bg-white/5 text-white/40 rounded-full italic hover:bg-orange-500/20 hover:text-orange-400 transition-all">{t}</span>
                      ))}
                   </div>
                   <button className="flex items-center gap-8 text-[11px] font-black uppercase text-orange-500 hover:gap-12 transition-all italic underline underline-offset-8 decoration-orange-500/20 decoration-2 italic">SCAN_AGENCY_LOGS <ArrowRight size={24} /></button>
                </StackLayer>
              ))}
           </div>
        </section>

        {/* FOOTER */}
        <footer className="py-80 border-t border-white/5 text-left bg-[#0a0c10] -mx-12 lg:-mx-44 px-12 lg:px-44">
           <div className="flex flex-col lg:flex-row justify-between gap-60 mb-40 text-left">
              <div className="text-left">
                 <h2 className="text-8xl md:text-[12vw] font-black italic uppercase tracking-tighter mb-12 italic text-left">Direct_<br /><span className="text-orange-500 italic text-left italic underline decoration-orange-500/20 underline-offset-[30px] decoration-4 italic">Horizon.</span></h2>
                 <a href={`mailto:${data.brand.email}`} className="text-3xl md:text-8xl font-black text-white hover:text-orange-400 transition-all italic tracking-tighter decoration-orange-500/20 underline underline-offset-[30px]">{data.brand.email}</a>
              </div>
              <div className="flex gap-40 text-left">
                 <div className="flex flex-col gap-10 text-left">
                    <span className="text-[11px] font-black uppercase tracking-widest text-white/10 italic">Networks</span>
                    {['B_Addr', 'Payloads', 'Archives'].map(l => (
                      <a key={l} href="#" className="text-xs font-black uppercase tracking-widest text-white/40 hover:text-orange-400">[{l}]</a>
                    ))}
                 </div>
              </div>
           </div>
           <div className="flex justify-between items-center text-[11px] font-black uppercase text-white/10 tracking-[0.5em] italic">
              <span>{data.brand.location} // B_ADDR: 0x242628</span>
              <span>© {new Date().getFullYear()} // HORIZON_AGENCY_V23</span>
           </div>
        </footer>
      </main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;500;900&display=swap');
        body { background-color: #0a0c10; font-family: 'Space Grotesk', sans-serif; }
        ::-webkit-scrollbar { width: 0px; }
      `}</style>
    </div>
  );
}
