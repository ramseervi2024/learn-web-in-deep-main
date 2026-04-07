import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion';
import { CompanyPortfolio as data } from './CompanyPortfolioData';
import { 
  Zap, Brain, Network, Share2, Mail, Github, Twitter, 
  Linkedin, ArrowRight, ExternalLink, Globe, ChevronDown,
  Cpu, Layers, Smartphone, Code
} from 'lucide-react';

const NeuroNode = ({ delay = 0, x, y }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
      opacity: [0, 1, 0.4, 0.8, 0],
      scale: [0, 1.2, 0.8, 1, 0],
    }}
    transition={{ 
      duration: 4, 
      repeat: Infinity, 
      delay,
      ease: "easeInOut" 
    }}
    className="absolute w-2 h-2 rounded-full bg-blue-400 blur-[2px] shadow-[0_0_10px_rgba(96,165,250,0.8)]"
    style={{ left: `${x}%`, top: `${y}%` }}
  />
);

export default function CompanyPortfolio17() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="bg-[#020617] text-slate-200 font-sans selection:bg-blue-500/30 selection:text-white min-h-screen relative overflow-hidden text-left">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[#020617]" />
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#334155 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        {Array.from({ length: 12 }).map((_, i) => (
          <NeuroNode key={i} x={Math.random() * 100} y={Math.random() * 100} delay={i * 0.4} />
        ))}
      </div>

      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-blue-500 z-[100]" style={{ scaleX }} />

      <nav className="fixed top-0 left-0 right-0 z-50 px-12 py-8 flex justify-between items-center backdrop-blur-md bg-[#020617]/20 border-b border-white/5 text-left">
         <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/50 flex items-center justify-center text-blue-400 font-black italic shadow-[0_0_20px_rgba(37,99,235,0.2)]">C</div>
            <span className="text-sm font-black uppercase tracking-[0.3em] font-mono">{data.brand.name}</span>
         </div>
         <div className="hidden lg:flex gap-12 text-[10px] font-black uppercase tracking-widest text-slate-500">
            {['Engine', 'History', 'Matrix'].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-blue-400 transition-colors">[{l}]</a>
            ))}
         </div>
         <button className="px-8 py-3 bg-blue-600 text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]">
            ESTABLISH_LINK
         </button>
      </nav>

      <main className="relative z-10 pt-44 px-12 lg:px-44">
        {/* HERO */}
        <section id="engine" className="min-h-[80vh] flex flex-col justify-center max-w-6xl text-left">
           <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[10px] font-black uppercase tracking-widest mb-10 w-fit">
              <Network size={14} /> AGENCY_CORE_PROTOCOL_ACTIVE
           </div>
           <h1 className="text-7xl md:text-[12vw] font-black leading-[0.8] tracking-tighter uppercase mb-12">
              Neural<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-500">Systems.</span>
           </h1>
           <p className="text-2xl md:text-4xl text-slate-400 font-light max-w-3xl leading-relaxed mb-20 italic">
              {data.hero.subtitle}
           </p>
           <div className="flex flex-wrap gap-12 items-center">
              <button className="px-14 py-7 bg-blue-600 text-white font-black text-xs uppercase tracking-[0.5em] rounded-2xl hover:bg-blue-500 transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)]">
                 INITIALIZE_PROJECT
              </button>
              <div className="flex items-center gap-8">
                 <div className="w-[1px] h-12 bg-white/10" />
                 <div className="flex flex-col">
                    <span className="text-4xl font-black text-white">100%</span>
                    <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Success_Sync</span>
                 </div>
              </div>
           </div>
        </section>

        {/* PROJECTS */}
        <section id="history" className="py-60">
           <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-40 text-left">
              <h2 className="text-7xl md:text-9xl font-black italic uppercase tracking-tighter italic">History_</h2>
              <p className="text-[10px] font-black uppercase tracking-widest text-blue-500 italic max-w-xs">// OPERATIONAL_ARCHIVE_NODE</p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
              {data.completed_projects.map((p, i) => (
                 <div key={i} className="p-14 rounded-[3rem] bg-slate-900/40 border border-slate-800 hover:border-blue-500/30 transition-all flex flex-col justify-between h-[600px] text-left">
                    <div>
                       <span className="text-[10px] font-mono text-blue-400/40 mb-8 block underline decoration-blue-500/20 underline-offset-8 decoration-2 italic">DEPLOY_v17.{i}</span>
                       <h3 className="text-4xl md:text-5xl font-black italic uppercase mb-8 tracking-tighter italic">{p.project_name}</h3>
                       <p className="text-xl text-slate-400 leading-relaxed italic line-clamp-4 italic">{p.description}</p>
                    </div>
                    <div className="pt-12 border-t border-slate-800 flex flex-col gap-10 text-left">
                       <div className="flex flex-wrap gap-3">
                          {p.tech_stack.slice(0, 4).map((t, j) => (
                             <span key={j} className="text-[9px] font-black uppercase px-6 py-2 bg-slate-800 rounded-full text-slate-500 border border-slate-700 italic">{t}</span>
                          ))}
                       </div>
                       <button className="flex items-center gap-6 text-xs font-black uppercase text-blue-400 hover:gap-8 transition-all italic">READ_TECHNICAL_LOGS <ArrowRight size={20} /></button>
                    </div>
                 </div>
              ))}
           </div>
        </section>

        {/* SERVICES */}
        <section id="matrix" className="py-60 bg-blue-500/[0.02] -mx-12 lg:-mx-44 px-12 lg:px-44 text-left">
           <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16 text-left">
              {data.services.map((s, i) => (
                 <div key={i} className="p-16 border border-slate-800 rounded-[3rem] bg-slate-900/60 relative group hover:border-blue-500/20 transition-all text-left">
                    <div className="w-20 h-20 rounded-3xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-12 shadow-2xl">
                       <Cpu size={40} />
                    </div>
                    <h3 className="text-4xl font-black italic uppercase mb-8 tracking-tighter italic leading-none">{s.category}</h3>
                    <p className="text-lg text-slate-400 italic leading-relaxed mb-12 italic">{s.description}</p>
                    <div className="flex flex-col gap-5 text-left">
                       {s.features.map((f, j) => (
                          <div key={j} className="flex items-center gap-5 text-[11px] font-black uppercase text-slate-600 italic">
                             <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" /> {f}
                          </div>
                       ))}
                    </div>
                 </div>
              ))}
           </div>
        </section>

        {/* FOOTER */}
        <footer className="py-60 border-t border-slate-900 text-left">
           <div className="flex flex-col lg:flex-row justify-between gap-40 mb-40 text-left">
              <div className="text-left">
                 <h2 className="text-7xl md:text-[10vw] font-black italic uppercase tracking-tighter leading-none mb-12 italic">Connect_</h2>
                 <a href={`mailto:${data.brand.email}`} className="text-3xl md:text-6xl font-black text-blue-400 underline decoration-4 underline-offset-[16px] hover:text-blue-300 transition-colors uppercase italic">{data.brand.email}</a>
              </div>
              <div className="flex gap-32 text-left">
                 <div className="flex flex-col gap-8 text-left">
                    <span className="text-[10px] font-black uppercase text-slate-700 tracking-widest">Network_Nodes</span>
                    {['Twitter', 'GitHub', 'LinkedIn'].map(l => (
                      <a key={l} href="#" className="text-xs font-black uppercase text-slate-500 hover:text-blue-400 transition-colors italic tracking-widest">[{l}]</a>
                    ))}
                 </div>
              </div>
           </div>
           <div className="flex justify-between items-center text-[10px] font-black uppercase text-slate-700 tracking-[0.5em] italic">
              <span>{data.brand.location} // HQ_SYNC</span>
              <span>© {new Date().getFullYear()} // {data.brand.name} // NODE_V17</span>
           </div>
        </footer>
      </main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;800&family=Space+Grotesk:wght@300;500;900&display=swap');
        body { background-color: #020617; font-family: 'Space Grotesk', sans-serif; }
      `}</style>
    </div>
  );
}
