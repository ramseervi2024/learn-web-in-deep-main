import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { FullTimeFreelancerProfile as data } from './FreelancerPortfolioData';
import { 
  Zap, Activity, Terminal, Radio, 
  Cpu, Layers, Smartphone, Globe,
  Github, Twitter, Linkedin, Mail,
  ArrowRight, ExternalLink, Box, Command,
  Maximize2, Power
} from 'lucide-react';

const GlitchText = ({ children, className = "" }) => (
  <div className={`relative group inline-block ${className}`}>
    <span className="relative z-10">{children}</span>
    <span className="absolute top-0 left-0 -translate-x-[2px] -translate-y-[1px] text-pink-500 opacity-0 group-hover:opacity-70 transition-opacity mix-blend-screen animate-pulse">{children}</span>
    <span className="absolute top-0 left-0 translate-x-[2px] translate-y-[1px] text-cyan-400 opacity-0 group-hover:opacity-70 transition-opacity mix-blend-screen animate-pulse">{children}</span>
  </div>
);

export default function FreelancerPortfolio19() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="bg-[#050608] text-pink-50/90 font-mono selection:bg-pink-500/30 selection:text-white min-h-screen relative overflow-hidden text-left">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[#050608]" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#ec4899 1px, transparent 1px), linear-gradient(90deg, #ec4899 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] z-10 pointer-events-none bg-[length:100%_4px]" />
      </div>

      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-pink-500 shadow-[0_0_15px_#ec4899] z-[100]" style={{ scaleX }} />

      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-4 backdrop-blur-md bg-[#050608]/80 border-b border-pink-500/20 flex justify-between items-center text-left">
        <div className="flex items-center gap-4">
           <div className="w-8 h-8 rounded bg-pink-500/20 border border-pink-500/40 flex items-center justify-center text-pink-500 font-bold italic">F</div>
           <span className="text-[10px] font-black uppercase tracking-[0.4em] text-pink-500/80">{data.personal_info.name}</span>
        </div>
        <button className="px-6 py-2 bg-pink-500 text-white text-[10px] font-black uppercase tracking-widest hover:bg-pink-400 transition-all shadow-[0_0_15px_#ec4899]">
           INITIALIZE_HIRE
        </button>
      </nav>

      <main className="relative z-10 pt-40 px-8 lg:px-32">
        {/* HERO */}
        <section className="min-h-[80vh] flex flex-col justify-center max-w-5xl text-left">
           <div className="inline-flex items-center gap-3 px-4 py-2 border border-pink-500/20 bg-pink-500/5 rounded text-[9px] font-black uppercase tracking-widest text-pink-500 mb-10 w-fit">
              <Radio size={14} className="animate-ping" /> TRANSMITTING_FREELANCE_READY
           </div>
           <h1 className="text-5xl md:text-9xl font-black italic uppercase leading-[0.8] tracking-tighter mb-12">
              Cyber<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-600">Pulse.</span>
           </h1>
           <p className="text-lg text-pink-50/40 font-medium leading-relaxed max-w-xl mb-16 border-l-2 border-pink-500/20 pl-6 italic">
              {data.hero.subtitle}
           </p>
           <button className="px-10 py-5 bg-pink-600 text-white font-black text-xs uppercase tracking-[0.3em] hover:bg-pink-500 transition-all shadow-[0_0_20px_rgba(236,72,153,0.4)] w-fit flex gap-4 items-center">
              ACCESS_PAYLOAD <ArrowRight size={18} />
           </button>
        </section>

        {/* PROJECTS */}
        <section className="py-40">
           <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24 text-left">
              <h2 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter">Payloads_</h2>
              <p className="text-[10px] font-black uppercase tracking-widest text-pink-500 italic max-w-xs">// CARGO_MANIFEST_ARCHIVE</p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
              {data.completed_projects.map((p, i) => (
                 <div key={i} className="p-10 border border-pink-500/20 rounded-xl bg-[#0d1117] hover:bg-[#0f141b] transition-all flex flex-col justify-between h-[500px] relative group text-left">
                    <div className="absolute top-0 right-0 p-4 font-black text-pink-500/10 text-4xl italic group-hover:text-pink-500/30 transition-colors">{i}</div>
                    <div className="text-left">
                       <h3 className="text-3xl font-black italic uppercase mb-6 tracking-tighter text-pink-100">{p.project_name}</h3>
                       <p className="text-pink-50/40 leading-relaxed italic line-clamp-3">{p.description}</p>
                    </div>
                    <div className="pt-10 border-t border-pink-500/10 flex flex-col gap-8 text-left">
                       <div className="flex flex-wrap gap-2">
                          {p.tech_stack.slice(0, 3).map((t, j) => (
                             <span key={j} className="text-[8px] font-black uppercase px-2 py-1 bg-pink-500/5 border border-pink-500/20 text-pink-500/60">{t}</span>
                          ))}
                       </div>
                       <button className="flex items-center gap-4 text-xs font-black uppercase text-pink-500 italic">OPEN_MODULE <ArrowRight size={16} /></button>
                    </div>
                 </div>
              ))}
           </div>
        </section>

        {/* SERVICES */}
        <section className="py-40 bg-pink-500/[0.02] -mx-8 lg:-mx-32 px-8 lg:px-32">
           <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 text-left">
              <div className="lg:w-1/3 text-left">
                 <h2 className="text-5xl md:text-7xl font-black italic uppercase leading-none mb-10 italic underline decoration-pink-500/20 underline-offset-[12px]">Hardware_</h2>
                 <p className="text-pink-50/40 italic leading-relaxed italic">Specialized engineering protocols for mission-critical mobile deployments and system-level architectures.</p>
              </div>
              <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
                 {data.services.map((s, i) => (
                    <div key={i} className="p-10 border border-pink-500/20 rounded-xl bg-pink-500/[0.02] text-left">
                       <h3 className="text-2xl font-black italic uppercase mb-6 italic tracking-tighter italic">{s.category}</h3>
                       <p className="text-pink-50/30 italic text-sm italic mb-10">{s.description}</p>
                       <div className="flex flex-col gap-4 text-left">
                          {s.features.map((f, j) => (
                             <div key={j} className="flex items-center gap-4 text-[9px] font-black uppercase text-pink-500/40 italic">
                                <div className="w-4 h-[1px] bg-pink-500" /> {f}
                             </div>
                          ))}
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* FOOTER */}
        <footer className="py-40 border-t border-pink-500/20 text-left">
           <div className="flex flex-col lg:flex-row justify-between gap-32 mb-40 text-left">
              <div className="text-left">
                 <h2 className="text-6xl md:text-9xl font-black italic uppercase tracking-tighter mb-12">Contact_</h2>
                 <a href={`mailto:${data.personal_info.email}`} className="text-2xl md:text-5xl font-black text-pink-500 font-mono tracking-tighter italic hover:text-pink-400 transition-colors">{data.personal_info.email}</a>
              </div>
              <div className="flex gap-20 text-left">
                 <div className="flex flex-col gap-6 text-left">
                    <span className="text-[10px] font-black uppercase opacity-20">Signals</span>
                    {['Twitter', 'GitHub', 'LinkedIn'].map(l => (
                      <a key={l} href="#" className="text-xs font-black uppercase hover:text-pink-500 text-pink-50/40 tracking-widest">[{l}]</a>
                    ))}
                 </div>
              </div>
           </div>
           <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-[0.4em] text-pink-500/20 italic">
              <span>{data.personal_info.location} // SYS_SYNC</span>
              <span>© {new Date().getFullYear()} // CYBERPULSE_FREELANCE_V19</span>
           </div>
        </footer>
      </main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;800&family=Outfit:wght@900&display=swap');
        body { background-color: #050608; font-family: 'JetBrains Mono', monospace; }
      `}</style>
    </div>
  );
}
