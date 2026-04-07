import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, AnimatePresence, useInView } from 'framer-motion';
import { CompanyPortfolio as data } from './CompanyPortfolioData';
import { 
  Network, Zap, Cpu, Database, Globe, 
  GitBranch, Share2, MessageSquare, Mail, Github, Twitter, 
  Linkedin, ArrowRight, ExternalLink, Box, Activity,
  Maximize2, Power, Layers, ChevronRight
} from 'lucide-react';

const NexusNode = ({ x, y, size = 4, delay = 0 }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: [0, 0.4, 0.1, 0.3, 0], scale: [0, 1.5, 0.8, 1.2, 0] }}
    transition={{ duration: 6, repeat: Infinity, delay, ease: "easeInOut" }}
    className="absolute rounded-full bg-purple-500 blur-[2px] shadow-[0_0_15px_rgba(168,85,247,0.6)]"
    style={{ left: `${x}%`, top: `${y}%`, width: size, height: size }}
  />
);

export default function CompanyPortfolio22() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const nodes = Array.from({ length: 12 }).map((_, i) => ({ x: Math.random() * 100, y: Math.random() * 100, size: 2 + Math.random() * 4, delay: i * 0.5 }));

  return (
    <div className="bg-[#02040a] text-purple-50 font-sans selection:bg-purple-500/30 selection:text-white min-h-screen relative overflow-x-hidden text-left pb-20">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[#02040a]" />
        {nodes.map((node, i) => (
          <NexusNode key={i} {...node} />
        ))}
         <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#a855f7 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
      </div>

      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-purple-600 z-[100]" style={{ scaleX }} />

      <nav className="fixed top-0 left-0 right-0 z-50 px-12 py-6 backdrop-blur-md bg-[#02040a]/40 border-b border-white/5 flex justify-between items-center text-left">
        <div className="flex items-center gap-6">
           <div className="w-12 h-12 rounded-2xl bg-purple-600/10 border border-purple-500/30 flex items-center justify-center text-purple-400 font-black shadow-[0_0_20px_rgba(168,85,247,0.2)]">N</div>
           <span className="text-xs font-black uppercase tracking-[0.4em] italic">{data.brand.name} // NEXUS_v22</span>
        </div>
        <button className="px-10 py-3 bg-purple-600 text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-purple-500 transition-all shadow-xl">
           INITIATE_NEXUS
        </button>
      </nav>

      <main className="relative z-10 pt-48 px-12 lg:px-44 max-w-7xl mx-auto text-left">
        {/* HERO */}
        <section className="min-h-[80vh] flex flex-col justify-center text-left mb-40">
           <div className="inline-flex items-center gap-3 px-6 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-[10px] font-black uppercase tracking-[0.4em] text-purple-400 mb-12 w-fit">
              <Network size={16} className="animate-pulse" /> GLOBAL_AGENCY_NEXUS_INITIALIZED
           </div>
           <h1 className="text-7xl md:text-[12vw] font-black italic uppercase leading-[0.75] tracking-tighter mb-16 italic text-left">
              Dev<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-purple-600 to-indigo-600">Nexus.</span>
           </h1>
           <p className="text-2xl md:text-5xl text-white/30 font-light max-w-4xl leading-[1.1] mb-24 italic border-l-4 border-purple-500/20 pl-12 text-left italic">
              {data.hero.subtitle}
           </p>
           <div className="flex flex-wrap gap-12 items-center text-left">
              <button className="px-14 py-7 bg-purple-600 text-white font-black text-xs uppercase tracking-[0.6em] rounded-3xl hover:bg-purple-500 transition-all shadow-2xl shadow-purple-500/30">
                 INTEGRATE_SYSTEM
              </button>
              <div className="flex gap-20">
                 <div className="flex flex-col text-left">
                    <span className="text-6xl font-black text-white">40+</span>
                    <span className="text-[10px] uppercase font-bold text-white/20 tracking-[0.5em] italic">Enterprise_Nodes</span>
                 </div>
                 <div className="flex flex-col text-left">
                    <span className="text-6xl font-black text-purple-500">100%</span>
                    <span className="text-[10px] uppercase font-bold text-white/20 tracking-[0.5em] italic">SLA_Sync</span>
                 </div>
              </div>
           </div>
        </section>

        {/* PROJECTS */}
        <section className="py-20 text-left">
           <div className="flex flex-col md:flex-row justify-between items-end gap-16 mb-40 text-left">
              <h2 className="text-6xl md:text-[10vw] font-black italic uppercase tracking-tighter italic text-left">Archive_</h2>
              <p className="text-[11px] font-black uppercase tracking-widest text-purple-500/40 italic max-w-sm text-left italic font-mono">// AGENCY_PROTOCOL_MANIFEST</p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-left">
              {data.completed_projects.map((p, i) => (
                 <div key={i} className="p-16 rounded-[4rem] border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all flex flex-col justify-between h-[650px] shadow-2xl group text-left relative overflow-hidden">
                    <div className="text-left py-4 relative z-10">
                       <span className="text-[11px] font-black text-purple-500/40 mb-12 block italic">_PROTOCOL_v{i}.22</span>
                       <h3 className="text-5xl font-black italic uppercase italic text-white mb-10 tracking-tighter italic leading-none">{p.project_name}</h3>
                       <p className="text-2xl text-white/30 italic leading-relaxed italic mb-12 italic border-l-2 border-purple-500/20 pl-8">{p.problem}</p>
                    </div>
                    <div className="pt-12 border-t border-white/5 text-left relative z-10">
                       <div className="flex flex-wrap gap-4 mb-10">
                          {p.technologies?.slice(0, 4).map((tech, j) => (
                             <span key={j} className="text-[10px] font-black uppercase border border-white/10 px-8 py-3 bg-white/5 text-white/40 rounded-full italic">{tech}</span>
                          ))}
                       </div>
                       <button className="flex items-center gap-6 text-xs font-black uppercase text-purple-400 group-hover:gap-10 transition-all italic underline decoration-purple-500/20 underline-offset-8">DEEP_SCAN_PROTOCOL <ArrowRight size={24} /></button>
                    </div>
                 </div>
              ))}
           </div>
        </section>

        {/* FOOTER */}
        <footer className="py-80 border-t border-white/5 text-left">
           <div className="flex flex-col lg:flex-row justify-between gap-60 mb-40 text-left">
              <div className="text-left">
                 <h2 className="text-7xl md:text-[10vw] font-black italic uppercase tracking-tighter mb-12 italic text-left">Direct_<br /><span className="text-purple-500 italic text-left italic underline decoration-purple-500/20 underline-offset-[30px] decoration-4 italic">Link.</span></h2>
                 <a href={`mailto:${data.brand.email}`} className="text-3xl md:text-7xl font-black text-white hover:text-purple-400 transition-all italic tracking-tighter decoration-purple-500/20 underline decoration-2 underline-offset-[20px]">{data.brand.email}</a>
              </div>
              <div className="flex gap-40 text-left">
                 <div className="flex flex-col gap-10 text-left">
                    <span className="text-[11px] font-black uppercase tracking-widest text-white/10 italic">_Nodes</span>
                    {['B_Addr', 'Protocol', 'Archive'].map(l => (
                      <a key={l} href="#" className="text-xs font-black uppercase text-white/40 hover:text-purple-400 tracking-widest">[{l}]</a>
                    ))}
                 </div>
              </div>
           </div>
           <div className="flex justify-between items-center text-[11px] font-black uppercase text-white/10 tracking-[0.5em] italic">
              <span>{data.brand.location} // GLOBAL_HQ</span>
              <span>© {new Date().getFullYear()} // NEXUS_AGENCY_V22</span>
           </div>
        </footer>
      </main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;500;900&display=swap');
        body { background-color: #02040a; font-family: 'Space Grotesk', sans-serif; }
        ::-webkit-scrollbar { width: 0px; }
      `}</style>
    </div>
  );
}
