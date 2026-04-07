import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, AnimatePresence, useInView } from 'framer-motion';
import { FullTimeFreelancerProfile as data } from './FreelancerPortfolioData';
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

export default function FreelancerPortfolio22() {
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
         <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#a855f7 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-purple-600 z-[100]" style={{ scaleX }} />

      <nav className="fixed top-0 left-0 right-0 z-50 px-10 py-6 backdrop-blur-md bg-[#02040a]/40 border-b border-white/5 flex justify-between items-center text-left">
        <div className="flex items-center gap-4">
           <div className="w-10 h-10 rounded-xl bg-purple-600/10 border border-purple-500/30 flex items-center justify-center text-purple-400 font-black shadow-[0_0_15px_rgba(168,85,247,0.2)]">F</div>
           <span className="text-xs font-black uppercase tracking-[0.4em] italic">{data.personal_info.name}</span>
        </div>
        <button className="px-8 py-2 bg-white text-black rounded-full text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-transform uppercase">
           SYNC_PROJECT
        </button>
      </nav>

      <main className="relative z-10 pt-40 px-8 lg:px-32 max-w-7xl mx-auto text-left">
        {/* HERO */}
        <section className="min-h-[70vh] flex flex-col justify-center text-left mb-32">
           <div className="inline-flex items-center gap-3 px-6 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-[10px] font-black uppercase tracking-[0.4em] text-purple-400 mb-10 w-fit">
              <Network size={14} className="animate-pulse" /> FREELANCE_NEXUS_INITIALIZED
           </div>
           <h1 className="text-6xl md:text-9xl font-black italic uppercase leading-[0.8] tracking-tighter mb-12 italic text-left">
              Dev<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-600">Nexus.</span>
           </h1>
           <p className="text-2xl md:text-4xl text-white/30 font-light max-w-3xl leading-relaxed mb-20 italic">
              {data.hero.subtitle}
           </p>
           <div className="flex flex-wrap gap-12 items-center text-left">
              <button className="px-14 py-7 bg-purple-600 text-white font-black text-xs uppercase tracking-[0.6em] rounded-3xl hover:bg-purple-500 transition-all shadow-2xl shadow-purple-500/30">
                 INITIATE_HIRE
              </button>
              <div className="flex gap-20">
                 <div className="flex flex-col text-left">
                    <span className="text-5xl font-black text-white">{data.stats[0].value}</span>
                    <span className="text-[10px] uppercase font-bold text-white/20 tracking-[0.5em] italic">{data.stats[0].label}</span>
                 </div>
                 <div className="flex flex-col text-left">
                    <span className="text-5xl font-black text-purple-400">{data.stats[1].value}</span>
                    <span className="text-[10px] uppercase font-bold text-white/20 tracking-[0.5em] italic">{data.stats[1].label}</span>
                 </div>
              </div>
           </div>
        </section>

        {/* PROJECTS */}
        <section className="py-20 text-left">
           <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-32 text-left">
              <h2 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter italic text-left">Archive_</h2>
              <p className="text-[10px] font-black uppercase tracking-widest text-purple-500/40 italic max-w-xs text-left italic font-mono">// OPERATIONAL_LOG_ARCHIVE</p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
              {data.completed_projects.map((p, i) => (
                 <div key={i} className="p-14 rounded-[3.5rem] border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all flex flex-col justify-between h-[600px] shadow-2xl group text-left">
                    <div className="text-left py-4">
                       <span className="text-[11px] font-black text-purple-500/40 mb-10 block italic">_NODE_v{i}.22</span>
                       <h3 className="text-4xl md:text-5xl font-black italic uppercase italic text-white mb-10 tracking-tighter italic">{p.project_name}</h3>
                       <p className="text-xl text-white/30 italic leading-relaxed italic mb-12 italic border-l-2 border-purple-500/20 pl-8">{p.description}</p>
                    </div>
                    <div className="pt-10 border-t border-white/5 text-left">
                       <div className="flex flex-wrap gap-3 mb-10">
                          {p.tech_stack.slice(0, 4).map((tech, j) => (
                             <span key={j} className="text-[10px] font-black uppercase border border-white/10 px-6 py-2 bg-white/5 text-white/40 rounded-full italic">{tech}</span>
                          ))}
                       </div>
                       <button className="flex items-center gap-6 text-xs font-black uppercase text-purple-400 group-hover:gap-8 transition-all italic underline decoration-purple-500/20 underline-offset-8">DEEP_SCAN <ArrowRight size={20} /></button>
                    </div>
                 </div>
              ))}
           </div>
        </section>

        {/* FOOTER */}
        <footer className="py-60 border-t border-white/5 text-left">
           <div className="flex flex-col lg:flex-row justify-between gap-40 mb-40 text-left">
              <div className="text-left">
                 <h2 className="text-7xl font-black italic uppercase tracking-tighter mb-12 italic text-left">Direct_<br /><span className="text-purple-500 italic text-left italic underline decoration-purple-500/20 underline-offset-[20px]">Link.</span></h2>
                 <a href={`mailto:${data.personal_info.email}`} className="text-2xl md:text-5xl font-black text-white hover:text-purple-400 transition-all font-mono italic text-left">{data.personal_info.email}</a>
              </div>
              <div className="flex gap-20 text-left">
                 <div className="flex flex-col gap-8 text-left">
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/10 italic">Networks</span>
                    {['Twitter', 'GitHub', 'LinkedIn'].map(l => (
                      <a key={l} href="#" className="text-xs font-black uppercase text-white/40 hover:text-purple-400 tracking-widest">[{l}]</a>
                    ))}
                 </div>
              </div>
           </div>
           <div className="flex justify-between items-center text-[11px] font-black uppercase text-white/10 tracking-[0.5em] italic">
              <span>{data.personal_info.location} // HQ_SYNC</span>
              <span>© {new Date().getFullYear()} // NEXUS_FREELANCE_V22</span>
           </div>
        </footer>
      </main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;500;900&display=swap');
        body { background-color: #02040a; font-family: 'Space Grotesk', sans-serif; }
      `}</style>
    </div>
  );
}
