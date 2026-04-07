import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { portfolioprofile as data } from './PersonalPortfolioData';
import { 
  Square, Triangle, Circle, Hexagon, ArrowUpRight, ChevronRight, 
  Layers, Smartphone, Box, Maximize2, Power, 
  Github, Twitter, Linkedin, Mail, MapPin, 
  LayoutGrid, LayoutTemplate, Shapes, Database, Cpu
} from 'lucide-react';

const VertexGrid = () => (
  <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
);

const GeometricDecoration = ({ className = "" }) => (
  <div className={`absolute opacity-5 pointer-events-none ${className}`}>
    <Shapes size={400} className="text-emerald-500 rotate-12" />
  </div>
);

export default function PersonalPortfolio27() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="bg-[#0c0d10] text-[#e2e8f0] font-mono selection:bg-emerald-500/30 selection:text-white min-h-screen relative overflow-x-hidden text-left pb-40">
      <VertexGrid />
      <GeometricDecoration className="-top-40 -right-40" />
      <GeometricDecoration className="bottom-40 -left-60 rotate-45" />

      <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-emerald-500 z-[100] origin-left" style={{ scaleX }} />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-10 py-10 backdrop-blur-md bg-[#0c0d10]/60 border-b border-emerald-500/10 flex justify-between items-center text-left">
        <div className="flex items-center gap-6">
           <div className="w-12 h-12 bg-emerald-500 flex items-center justify-center text-black font-black uppercase text-xl shadow-[0_0_20px_rgba(16,185,129,0.3)]">V</div>
           <div className="flex flex-col text-left">
              <span className="text-xs font-black uppercase tracking-[0.4em] italic text-emerald-500">{data.personal_info.name}</span>
              <span className="text-[9px] font-black uppercase tracking-[0.6em] opacity-40 italic">VERTEX_ARCH_v27</span>
           </div>
        </div>
        <div className="hidden lg:flex gap-14 text-[10px] font-black uppercase tracking-[0.5em] opacity-40">
           {['Geometry', 'Structure', 'Logic', 'Nodes'].map(item => (
             <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-emerald-400 transition-colors">/{item}</a>
           ))}
        </div>
        <button className="px-10 py-3 border border-emerald-500/30 text-emerald-500 text-[10px] font-black uppercase tracking-[0.8em] hover:bg-emerald-500 hover:text-black transition-all italic">
           INIT_ARCH
        </button>
      </nav>

      {/* Vertical Branding */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-24 items-center">
         <span className="text-[10px] font-black uppercase tracking-[1em] opacity-20 -rotate-90 origin-center italic">GEOMETRIC_PRECISION</span>
         <div className="w-[1px] h-40 bg-emerald-500/20" />
         <span className="text-[10px] font-black uppercase tracking-[1em] opacity-20 -rotate-90 origin-center italic">STRUCTURAL_INTEGRITY</span>
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-10 pt-56 text-left lg:px-32">
        {/* HERO: Geometry */}
        <section id="geometry" className="min-h-[85vh] flex flex-col justify-center text-left mb-60 relative">
           <div className="inline-flex items-center gap-4 px-6 py-2 border border-emerald-500/20 bg-emerald-500/5 rounded text-[10px] font-black uppercase tracking-[0.5em] text-emerald-500 mb-12 w-fit italic">
              <Hexagon size={16} className="animate-spin-slow" /> SYSTEM_NODE_READY: STABLE_v27.0
           </div>
           
           <h1 className="text-[10vw] lg:text-[13vw] font-black uppercase leading-[0.7] tracking-tighter mb-20 italic text-left">
              Vertex<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-slate-100 to-emerald-600">
                Agency.</span>
           </h1>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-end text-left">
              <p className="text-2xl lg:text-5xl font-light leading-[1] tracking-tight italic max-w-2xl text-left border-l-4 border-emerald-500/20 pl-12 text-left italic">
                 {data.hero.subtitle}
              </p>
              <div className="flex flex-col gap-12 text-left">
                 <div className="p-10 border border-emerald-500/10 bg-emerald-500/[0.02] flex flex-col gap-8 text-left shadow-2xl">
                    <span className="text-[11px] font-black uppercase tracking-[1em] opacity-20 italic">_STATS_NODE</span>
                    <div className="flex gap-20 text-left">
                       <div className="flex flex-col text-left">
                          <span className="text-6xl font-black text-emerald-500">{data.personal_info.experience_years}Y</span>
                          <span className="text-[9px] uppercase font-bold opacity-30 tracking-[0.5em] italic">Full_Spectrum</span>
                       </div>
                       <div className="flex flex-col text-left">
                          <span className="text-6xl font-black text-white">99%</span>
                          <span className="text-[9px] uppercase font-bold opacity-30 tracking-[0.5em] italic">Architect_Sync</span>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* STRUCTURE: Project Grid */}
        <section id="structure" className="py-40 text-left">
           <div className="flex flex-col lg:flex-row justify-between items-end gap-16 mb-40 text-left">
              <h2 className="text-[10vw] font-black italic uppercase tracking-tighter italic leading-none text-left">Structure_</h2>
              <p className="text-[11px] font-black uppercase tracking-widest text-emerald-500/40 italic max-w-sm text-left mb-6 italic underline decoration-emerald-500/20 underline-offset-8 decoration-2 italic font-sans">// ARCHITECTURAL_PROJECT_MANIFEST</p>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 grid-flow-row-dense text-left">
              {data.completed_projects.map((p, i) => (
                 <div key={i} className={`p-12 border border-emerald-500/10 bg-emerald-500/[0.01] hover:bg-emerald-500/5 transition-all flex flex-col justify-between min-h-[500px] relative group text-left ${i % 3 === 0 ? 'lg:col-span-2' : ''} shadow-2xl`}>
                    <div className="absolute top-0 right-0 p-8 font-black text-emerald-500/5 text-8xl italic group-hover:text-emerald-500/10 transition-colors uppercase italic pointer-events-none font-sans italic">{i}</div>
                    <div className="text-left relative z-10 w-full">
                       <span className="text-[10px] font-black text-emerald-500/30 mb-8 block font-sans italic tracking-[1em]">_VERTEX_MOD_v{i}.27</span>
                       <h3 className="text-4xl lg:text-5xl font-black italic uppercase italic tracking-tighter mb-10 italic leading-none text-white/90 group-hover:text-emerald-400 transition-colors italic">{p.project_name}</h3>
                       <p className="text-lg text-slate-500 italic leading-snug italic mb-12 italic line-clamp-4 italic border-l border-emerald-500/20 pl-8">{p.description}</p>
                    </div>
                    <div className="pt-10 border-t border-emerald-500/10 flex flex-col gap-10 text-left relative z-10">
                       <div className="flex flex-wrap gap-3">
                          {p.tech_stack.slice(0, 5).map((tech, j) => (
                             <span key={j} className="text-[9px] font-black uppercase border border-emerald-500/20 px-6 py-2 bg-emerald-500/5 text-emerald-500/40 italic shadow-inner">{tech}</span>
                          ))}
                       </div>
                       <button className="flex items-center gap-6 text-[10px] font-black uppercase tracking-[1em] text-emerald-500 group-hover:gap-10 transition-all italic underline decoration-emerald-500/10 underline-offset-8 decoration-2 italic">SCAN_TECHNICAL_LOGS <ChevronRight size={18} /></button>
                    </div>
                 </div>
              ))}
           </div>
        </section>

        {/* LOGIC: Services */}
        <section id="logic" className="py-40 bg-emerald-500/[0.02] -mx-10 lg:-mx-32 px-10 lg:px-32 text-left">
           <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-40 text-left">
              <div className="lg:w-1/3 text-left">
                 <h2 className="text-[8vw] font-black italic uppercase leading-[0.85] mb-12 italic tracking-tighter italic text-left">Logic<br />Units_.</h2>
                 <p className="text-xl text-slate-500 italic leading-relaxed italic mb-16 italic border-l-2 border-emerald-500/20 pl-10 text-left italic">Executing mission-critical technical pivots across diverse geometric architectures.</p>
                 <div className="grid grid-cols-1 gap-8 text-left">
                    {data.services.map((s, i) => (
                       <div key={i} className="flex items-center gap-8 group cursor-default text-left">
                          <div className="w-14 h-14 bg-emerald-500/5 border border-emerald-500/20 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-black transition-all shadow-xl shadow-emerald-500/10 italic"><Cpu size={28} /></div>
                          <span className="text-lg font-black uppercase tracking-widest text-slate-100/40 group-hover:text-white transition-all italic italic leading-none">{s.category}</span>
                       </div>
                    ))}
                 </div>
              </div>
              <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-1 text-left">
                 {data.guarantees.map((g, i) => (
                    <div key={i} className="p-16 border border-emerald-500/10 bg-emerald-500/[0.01] hover:bg-emerald-500/[0.03] transition-all flex flex-col justify-between text-left shadow-lg">
                       <div className="flex justify-between items-start mb-10 text-left">
                          <div className="w-10 h-10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 rotate-45 shadow-inner"><LayoutGrid size={18} /></div>
                          <span className="text-[10px] font-black text-emerald-500/20 italic">_UNIT_SLA_{i+10}</span>
                       </div>
                       <h3 className="text-2xl font-black italic uppercase italic text-white/90 mb-6 italic tracking-widest italic">{g.title}</h3>
                       <p className="text-sm text-slate-500 italic leading-relaxed italic italic">{g.description}</p>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* NODES: Footer */}
        <footer id="nodes" className="py-80 border-t border-emerald-500/10 relative overflow-hidden text-left bg-[#0c0d10]">
           <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-emerald-500 opacity-[0.02] blur-[200px] rounded-full pointer-events-none" />
           
           <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-60 text-left">
              <div className="text-left">
                 <h2 className="text-[12vw] font-black italic uppercase tracking-tighter leading-none mb-16 italic text-left underline decoration-emerald-500/20 underline-offset-[30px] decoration-4 italic">Vertex.<br /><span className="text-emerald-500 italic">Core.</span></h2>
                 <p className="text-2xl text-slate-500 italic leading-relaxed italic max-w-sm italic mb-20 italic">Initializing high-magnitude geometric architectures for technical partner hubs.</p>
                 <div className="flex flex-col gap-10 text-left">
                    <span className="text-[10px] font-black uppercase tracking-[1em] text-emerald-500/20 font-sans italic">DIRECT_P_ADDR</span>
                    <a href={`mailto:${data.personal_info.email}`} className="text-3xl lg:text-7xl font-black italic text-[#e2e8f0] hover:text-emerald-500 transition-all underline decoration-emerald-500/20 underline-offset-[25px] decoration-4 italic leading-tight">{data.personal_info.email}</a>
                 </div>
              </div>

              <div className="flex flex-col justify-center items-start lg:items-end gap-32 text-left">
                 <div className="flex gap-40 text-left">
                    <div className="flex flex-col gap-10 text-left shadow-2xl">
                       <span className="text-[11px] font-black uppercase tracking-widest text-emerald-500/20 font-sans italic">Structure</span>
                       {['Geometry', 'Structure', 'Logic'].map(l => (
                         <a key={l} href={`#${l.toLowerCase()}`} className="text-xs font-black uppercase text-slate-500 hover:text-emerald-500 transition-colors font-sans italic tracking-widest">[{l}]</a>
                       ))}
                    </div>
                    <div className="flex flex-col gap-10 text-left shadow-xl">
                       <span className="text-[11px] font-black uppercase tracking-widest text-emerald-500/20 font-sans italic">Signal</span>
                       {['Twitter', 'GitHub', 'LinkedIn'].map(l => (
                         <a key={l} href="#" className="text-xs font-black uppercase text-slate-500 hover:text-emerald-500 transition-colors font-sans italic tracking-widest">[{l}]</a>
                       ))}
                    </div>
                 </div>
                 <div className="flex flex-col lg:flex-row items-end gap-16 text-[11px] font-black uppercase tracking-[1em] opacity-10 font-sans italic">
                    <span>{data.personal_info.location} // B_ADDR: 0x97A9</span>
                    <span>© {new Date().getFullYear()} // VERTEX_AGENCY_V27</span>
                 </div>
              </div>
           </div>
        </footer>
      </main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@1,300;1,800&family=Space+Grotesk:wght@300;900&display=swap');
        
        body {
          background-color: #0c0d10;
          font-family: 'JetBrains Mono', monospace;
        }

        .font-sans {
          font-family: 'Space Grotesk', sans-serif;
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        ::-webkit-scrollbar {
          width: 0px;
        }
      `}</style>
    </div>
  );
}
