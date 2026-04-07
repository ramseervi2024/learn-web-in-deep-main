import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, AnimatePresence, useInView } from 'framer-motion';
import { FullTimeFreelancerProfile as data } from './FreelancerPortfolioData';
import { 
  Layers, Cpu, Database, Globe, Smartphone, Cloud, Terminal, 
  ArrowRight, ExternalLink, Box, Activity, Maximize2, Power, 
  ChevronRight, ArrowDown, MapPin, Mail, Github, Twitter, Linkedin
} from 'lucide-react';

const StackLayer = ({ children, index, total, title = "LAYER" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  return (
    <motion.div ref={ref} className="relative group mb-[-100px] transition-all duration-700">
      <div className={`p-12 rounded-[2.5rem] border border-orange-500/10 bg-slate-900 shadow-2xl relative overflow-hidden transition-all duration-700 ${isInView ? 'opacity-100 scale-100' : 'opacity-40 scale-95'}`}>
        <div className="absolute top-0 right-0 p-8 font-black text-white/5 text-6xl italic group-hover:text-orange-500/10 transition-colors uppercase italic">0{index + 1}</div>
        <div className="flex flex-col gap-6 text-left">
           <span className="text-[10px] font-black uppercase tracking-[0.5em] text-orange-500/60 italic">_STACK_v{index}</span>
           <h3 className="text-4xl font-black italic uppercase italic tracking-tighter italic text-white">{title}</h3>
           {children}
        </div>
      </div>
    </motion.div>
  );
};

export default function FreelancerPortfolio23() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  
  return (
    <div className="bg-[#0a0c10] text-slate-100 font-sans selection:bg-orange-500/30 selection:text-white min-h-screen relative overflow-x-hidden text-left pb-40">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,#1e1b4b_0%,#0a0c10_80%)] opacity-40" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-600 opacity-[0.03] blur-[150px] rounded-full" />
      </div>

      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-600 to-amber-500 z-[100]" style={{ scaleX }} />

      <nav className="fixed top-0 left-0 right-0 z-50 px-10 py-6 backdrop-blur-md bg-[#0a0c10]/40 border-b border-white/5 flex justify-between items-center text-left">
        <div className="flex items-center gap-6">
           <div className="w-12 h-12 rounded-2xl bg-orange-600/10 border border-orange-500/30 flex items-center justify-center text-orange-500 shadow-inner">
              <Layers size={24} />
           </div>
           <span className="text-xs font-black uppercase tracking-[0.3em] italic text-white/80">{data.personal_info.name}</span>
        </div>
        <button className="px-8 py-2 bg-orange-600 text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-orange-500 transition-all shadow-lg">
           DEPLOY_STACK
        </button>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-8 pt-40 text-left lg:px-32">
        {/* HERO */}
        <section className="min-h-[75vh] flex flex-col justify-center text-left mb-60">
           <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 text-[10px] font-black uppercase tracking-[0.4em] text-orange-500 mb-10 w-fit">
              <Activity size={12} className="animate-pulse" /> FULL_SPECTRUM_READY
           </div>
           <h1 className="text-6xl md:text-9xl font-black italic uppercase leading-[0.8] tracking-tighter mb-12 italic text-left">
              Stack<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-200">Horizon.</span>
           </h1>
           <p className="text-2xl md:text-4xl text-white/30 font-light max-w-3xl leading-relaxed mb-20 italic border-l-4 border-orange-500/20 pl-10 italic">
              {data.hero.subtitle}
           </p>
           <div className="flex flex-wrap gap-12 items-center text-left">
              <button className="px-14 py-7 bg-orange-600 text-white font-black text-xs uppercase tracking-[0.5em] rounded-2xl hover:bg-orange-500 transition-all shadow-xl shadow-orange-500/20">
                 OBSERVE_LAYERS
              </button>
              <div className="flex gap-20">
                 <div className="flex flex-col text-left">
                    <span className="text-5xl font-black text-white">{data.stats[0].value}</span>
                    <span className="text-[10px] uppercase font-bold text-white/20 tracking-[0.5em] italic">{data.stats[0].label}</span>
                 </div>
                 <div className="flex flex-col text-left">
                    <span className="text-5xl font-black text-orange-500">100%</span>
                    <span className="text-[10px] uppercase font-bold text-white/20 tracking-[0.5em] italic">Deploy_Sync</span>
                 </div>
              </div>
           </div>
        </section>

        {/* PROJECTS */}
        <section className="py-20 text-left">
           <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-32 text-left">
              <h2 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter italic">Horizon_</h2>
              <p className="text-[11px] font-black uppercase tracking-widest text-orange-500/40 italic max-w-sm italic">// LAYERED_TECHNICAL_MANIFEST</p>
           </div>
           <div className="max-w-5xl mx-auto space-y-20">
              {data.completed_projects.map((p, i) => (
                <StackLayer key={i} index={i} total={data.completed_projects.length} title={p.project_name}>
                   <p className="text-xl text-white/30 italic leading-relaxed mb-10 italic">{p.description}</p>
                   <div className="flex flex-wrap gap-3 mb-10 text-left">
                      {p.tech_stack.slice(0, 4).map((t, j) => (
                         <span key={j} className="text-[10px] font-black uppercase border border-white/10 px-6 py-2 bg-white/5 text-white/40 rounded-full italic">{t}</span>
                      ))}
                   </div>
                   <button className="flex items-center gap-6 text-[11px] font-black uppercase text-orange-500 hover:gap-10 transition-all italic underline decoration-orange-500/20 underline-offset-8">SCAN_ARCH <ArrowRight size={20} /></button>
                </StackLayer>
              ))}
           </div>
        </section>

        {/* FOOTER */}
        <footer className="py-60 border-t border-white/5 text-left bg-[#0a0c10] -mx-8 lg:-mx-32 px-8 lg:px-32">
           <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-40 mb-40 text-left">
              <div className="text-left">
                 <h2 className="text-7xl md:text-9xl font-black italic uppercase tracking-tighter mb-12 italic">Direct_<br /><span className="text-orange-500 italic">Horizon.</span></h2>
                 <a href={`mailto:${data.personal_info.email}`} className="text-2xl md:text-5xl font-black text-white hover:text-orange-400 transition-all italic tracking-tighter">{data.personal_info.email}</a>
              </div>
              <div className="flex gap-20 text-left">
                 <div className="flex flex-col gap-8 text-left">
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/10 italic">Networks</span>
                    {['Twitter', 'GitHub', 'LinkedIn'].map(l => (
                      <a key={l} href="#" className="text-xs font-black uppercase tracking-widest text-white/40 hover:text-orange-400">[{l}]</a>
                    ))}
                 </div>
              </div>
           </div>
           <div className="max-w-7xl mx-auto flex justify-between items-center text-[10px] font-black uppercase text-white/10 tracking-[0.5em] italic">
              <span>{data.personal_info.location} // BASE_ADDR</span>
              <span>© {new Date().getFullYear()} // HORIZON_FREELANCE_V23</span>
           </div>
        </footer>
      </main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;500;900&display=swap');
        body { background-color: #0a0c10; font-family: 'Space Grotesk', sans-serif; }
      `}</style>
    </div>
  );
}
