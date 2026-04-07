import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, AnimatePresence, useInView } from 'framer-motion';
import { portfolioprofile as data } from './PersonalPortfolioData';
import { 
  Layers, Cpu, Database, Globe, Smartphone, Cloud, Terminal, 
  ArrowRight, ExternalLink, Box, Activity, Maximize2, Power, 
  ChevronRight, ArrowDown, MapPin, Mail, Github, Twitter, Linkedin
} from 'lucide-react';

const StackLayer = ({ children, index, total, title = "LAYER" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  const y = useTransform(useScroll().scrollYProgress, [0, 1], [0, -100 * index]);

  return (
    <motion.div 
      ref={ref}
      style={{ y, zIndex: total - index }}
      className="relative group mb-[-120px] transition-all duration-700"
    >
      <div className={`p-12 rounded-[2rem] border border-orange-500/10 bg-slate-900 shadow-2xl relative overflow-hidden transform-gpu group-hover:rotate-x-12 group-hover:-translate-y-10 group-hover:shadow-orange-500/10 transition-all duration-700 ${isInView ? 'opacity-100 scale-100' : 'opacity-40 scale-95'}`}>
        <div className="absolute top-0 right-0 p-8 font-black text-white/5 text-6xl italic group-hover:text-orange-500/10 transition-colors pointer-events-none uppercase italic">0{index + 1}</div>
        <div className="flex flex-col gap-6 text-left">
           <span className="text-[10px] font-black uppercase tracking-[0.5em] text-orange-500/60 italic">_STACK_LAYER_{index}</span>
           <h3 className="text-4xl font-black italic uppercase italic tracking-tighter italic text-white flex items-center gap-4">{title} <Box size={24} className="text-orange-500/40" /></h3>
           {children}
        </div>
      </div>
    </motion.div>
  );
};

export default function PersonalPortfolio23() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  
  return (
    <div className="bg-[#0a0c10] text-slate-100 font-sans selection:bg-orange-500/30 selection:text-white min-h-screen relative overflow-x-hidden text-left pb-40">
      {/* Background Gradient */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,#1e1b4b_0%,#0a0c10_80%)] opacity-40" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-600 opacity-[0.03] blur-[150px] rounded-full" />
      </div>

      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600 z-[100]" style={{ scaleX }} />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 backdrop-blur-md bg-[#0a0c10]/40 border-b border-white/5 text-left">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-left">
           <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-2xl bg-orange-600/10 border border-orange-500/30 flex items-center justify-center text-orange-500 shadow-inner group transition-all">
                 <Layers size={24} className="group-hover:rotate-180 transition-transform" />
              </div>
              <div className="flex flex-col text-left">
                 <span className="text-xs font-black uppercase tracking-[0.3em] text-white italic">{data.personal_info.name}</span>
                 <span className="text-[10px] font-black uppercase tracking-widest text-white/20 italic">v23.Horizon</span>
              </div>
           </div>
           <div className="hidden lg:flex gap-12 text-[10px] uppercase font-black tracking-widest text-white/40">
              {['Horizon', 'Architecture', 'Deployment', 'Link'].map(item => (
                <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-orange-500 transition-colors uppercase">[{item}]</a>
              ))}
           </div>
           <button className="px-8 py-2 border border-orange-500/30 rounded-full text-[10px] font-black uppercase tracking-widest text-orange-400 hover:bg-orange-500 hover:text-white transition-all italic">INITIALIZE_HORIZON</button>
        </div>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-8 lg:px-32 pt-40 text-left">
        {/* HERO */}
        <section id="horizon" className="min-h-[80vh] flex flex-col justify-center text-left mb-60">
           <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 text-[10px] font-black uppercase tracking-[0.4em] text-orange-500 mb-12 w-fit italic"
           >
              <Activity size={12} className="animate-pulse" /> FULL_SPECTRUM_SYNC: OK
           </motion.div>
           
           <h1 className="text-8xl md:text-[12vw] font-black italic uppercase leading-[0.75] tracking-tighter mb-16 italic">
              Stack<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-200 to-orange-600">
                Horizon.</span>
           </h1>

           <p className="text-2xl md:text-5xl text-white/30 font-light max-w-4xl leading-tight mb-24 italic tracking-tight italic border-l-4 border-orange-500/20 pl-12 text-left">
              {data.hero.subtitle}
           </p>

           <div className="flex flex-wrap gap-12 items-center text-left">
              <button className="px-14 py-7 bg-orange-600 text-white font-black text-xs uppercase tracking-[0.5em] rounded-2xl hover:bg-orange-500 transition-all shadow-[0_0_30px_rgba(249,115,22,0.4)]">
                 EXPAND_ARCHITECTURE
              </button>
              <div className="flex gap-20 text-left">
                 <div className="flex flex-col text-left">
                    <span className="text-5xl font-black text-white">{data.personal_info.experience_years}Y</span>
                    <span className="text-[10px] uppercase font-bold text-white/20 tracking-[0.5em] italic">Full_Spectrum</span>
                 </div>
                 <div className="flex flex-col text-left">
                    <span className="text-5xl font-black text-orange-500">100%</span>
                    <span className="text-[10px] uppercase font-bold text-white/20 tracking-[0.5em] italic">Architect_Sync</span>
                 </div>
              </div>
           </div>
        </section>

        {/* ARCHITECTURE: Scroll Layers */}
        <section id="architecture" className="py-40 text-left">
           <div className="mb-40 flex flex-col md:flex-row justify-between items-end gap-16 text-left">
              <h2 className="text-6xl md:text-[9vw] font-black italic uppercase tracking-tighter italic">Architecture_</h2>
              <p className="text-[11px] font-black uppercase tracking-widest text-orange-500/40 italic max-w-sm italic">// LAYERED_TECHNICAL_DEEP_SCAN</p>
           </div>

           <div className="max-w-5xl mx-auto space-y-20 perspective-1000">
              {data.completed_projects.map((p, i) => (
                <StackLayer key={i} index={i} total={data.completed_projects.length} title={p.project_name}>
                   <p className="text-xl text-white/40 leading-relaxed italic line-clamp-3 mb-10 italic">{p.description}</p>
                   <div className="flex flex-wrap gap-4 mb-10 text-left">
                      {p.tech_stack.slice(0, 4).map((tech, j) => (
                         <span key={j} className="text-[9px] font-black uppercase border border-white/5 px-6 py-2 bg-white/5 text-white/30 rounded-full italic hover:bg-orange-500/20 hover:text-orange-400 transition-all">{tech}</span>
                      ))}
                   </div>
                   <div className="w-full h-px bg-white/5 mb-10" />
                   <button className="flex items-center gap-6 text-[11px] font-black uppercase tracking-[0.5em] text-orange-500 hover:gap-10 transition-all italic underline decoration-orange-500/20 underline-offset-8 decoration-2 italic">SCAN_TECHNICAL_RESOURCES <ArrowRight size={20} /></button>
                </StackLayer>
              ))}
           </div>
        </section>

        {/* DEPLOYMENT: Technology Stack */}
        <section id="deployment" className="py-60 mt-80 text-left">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 text-left">
              <div className="text-left">
                 <h2 className="text-5xl md:text-8xl font-black italic uppercase leading-none mb-12 italic underline decoration-orange-500/20 underline-offset-[20px] decoration-4 italic">Deployment<br />Readiness.</h2>
                 <p className="text-2xl text-white/30 italic leading-snug italic max-w-sm italic mb-20 italic">Architecting the bridge between high-stakes technical logic and enterprise-scale mobile deployment.</p>
                 <div className="grid grid-cols-2 gap-12 text-left">
                   {data.stats.slice(0, 4).map((stat, i) => (
                      <div key={i} className="flex flex-col text-left">
                         <span className="text-4xl font-black text-orange-400 italic">_{stat.value}</span>
                         <span className="text-[10px] uppercase font-bold text-white/20 tracking-[0.4em] italic leading-tight">{stat.label}</span>
                      </div>
                   ))}
                 </div>
              </div>

              <div className="space-y-12 text-left">
                 {data.services.map((s, i) => (
                    <motion.div 
                       key={i}
                       initial={{ opacity: 0, x: 50 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       className="p-12 border border-white/5 rounded-[2.5rem] bg-white/[0.02] hover:bg-orange-600/5 hover:border-orange-500/20 transition-all group text-left"
                    >
                       <div className="flex justify-between items-start mb-10 text-left">
                          <h3 className="text-3xl font-black italic uppercase italic text-white/80 group-hover:text-white transition-colors italic leading-none">{s.category}</h3>
                          <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-orange-400 group-hover:scale-110 transition-all"><Cpu size={24} /></div>
                       </div>
                       <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                          {s.features.map((f, j) => (
                             <li key={j} className="flex items-center gap-4 text-[10px] font-black uppercase text-white/30 group-hover:text-white/60 transition-colors italic">
                                <ChevronRight size={14} className="text-orange-500/30" /> {f}
                             </li>
                          ))}
                       </ul>
                    </motion.div>
                 ))}
              </div>
           </div>
        </section>

        {/* LINK: Footer */}
        <footer id="link" className="py-60 border-t border-white/5 relative overflow-hidden text-left">
           <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
           <div className="max-w-7xl mx-auto flex flex-col gap-40 text-left">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-40 text-left">
                 <div className="text-left">
                    <h2 className="text-7xl md:text-[12vw] font-black italic uppercase tracking-tighter leading-[0.8] mb-12 italic">Direct_<br /><span className="text-orange-500 italic">Horizon.</span></h2>
                    <div className="flex items-center gap-8 mb-20 text-left">
                       <div className="w-16 h-16 rounded-full border border-orange-500 flex items-center justify-center text-orange-400 shadow-[0_0_20px_rgba(249,115,22,0.3)] animate-pulse"><Power size={24} /></div>
                       <p className="text-xl text-white/20 italic leading-relaxed italic max-w-sm italic">Initializing technical partnerships for mission-critical architectural expansions.</p>
                    </div>
                 </div>

                 <div className="flex flex-col justify-center items-start lg:items-end gap-20 text-left">
                    <div className="flex flex-col gap-8 text-left md:text-right">
                       <span className="text-[11px] font-black uppercase tracking-[0.8em] text-white/10 italic">Communication_Channel</span>
                       <a href={`mailto:${data.personal_info.email}`} className="text-3xl md:text-6xl font-black italic text-white hover:text-orange-400 transition-all underline decoration-orange-500/20 underline-offset-[20px] decoration-4 italic">{data.personal_info.email}</a>
                    </div>
                 </div>
              </div>

              <div className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-16 text-left">
                 <div className="flex items-center gap-12 text-left">
                    <div className="flex gap-10 text-white/10 text-left">
                       <Twitter size={24} className="hover:text-orange-400 transition-all cursor-pointer" />
                       <Github size={24} className="hover:text-orange-400 transition-all cursor-pointer" />
                       <Linkedin size={24} className="hover:text-orange-400 transition-all cursor-pointer" />
                    </div>
                    <div className="w-[1px] h-12 bg-white/10" />
                    <span className="text-[11px] font-black uppercase tracking-widest text-white/10 italic underline decoration-orange-500/20 underline-offset-4">{data.personal_info.location} // B_ADDR: 0x242628</span>
                 </div>
                 <div className="flex items-center gap-6 text-[11px] font-black uppercase tracking-[0.5em] text-white/10 italic">
                    <Layers size={18} className="text-orange-500/30" />
                    <span>© {new Date().getFullYear()} // STACK_HORIZON_IDENTITY_V23</span>
                 </div>
              </div>
           </div>
        </footer>
      </main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@200;400;900&family=Space+Grotesk:wght@300;500;900&display=swap');
        
        body {
          background-color: #0a0c10;
          font-family: 'Space Grotesk', sans-serif;
        }

        .perspective-1000 {
          perspective: 1000px;
        }

        ::-webkit-scrollbar {
          width: 0px;
        }
      `}</style>
    </div>
  );
}
