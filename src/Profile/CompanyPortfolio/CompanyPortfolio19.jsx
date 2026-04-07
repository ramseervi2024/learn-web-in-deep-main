import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { CompanyPortfolio as data } from './CompanyPortfolioData';
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

export default function CompanyPortfolio19() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="bg-[#050608] text-pink-50/90 font-mono selection:bg-pink-500/30 selection:text-white min-h-screen relative overflow-hidden text-left">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[#050608]" />
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#ec4899 1px, transparent 1px), linear-gradient(90deg, #ec4899 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] z-10 pointer-events-none bg-[length:100%_4px]" />
      </div>

      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-pink-500 shadow-[0_0_15px_#ec4899] z-[100]" style={{ scaleX }} />

      <nav className="fixed top-0 left-0 right-0 z-50 px-12 py-6 backdrop-blur-md bg-[#050608]/80 border-b border-pink-500/20 flex justify-between items-center text-left">
        <div className="flex items-center gap-6">
           <div className="w-10 h-10 rounded bg-pink-500/20 border border-pink-500/40 flex items-center justify-center text-pink-500 font-bold italic shadow-[0_0_15px_rgba(236,72,153,0.3)]">C</div>
           <span className="text-[11px] font-black uppercase tracking-[0.5em] text-pink-500/80">{data.brand.name} // SYS_SYNC_19</span>
        </div>
        <button className="px-10 py-3 bg-pink-500 text-white text-[11px] font-black uppercase tracking-widest hover:bg-pink-400 transition-all shadow-[0_0_20px_rgba(236,72,153,0.5)]">
           ESTABLISH_BRIDGE
        </button>
      </nav>

      <main className="relative z-10 pt-48 px-12 lg:px-44">
        {/* HERO */}
        <section className="min-h-[85vh] flex flex-col justify-center max-w-6xl text-left">
           <div className="inline-flex items-center gap-4 px-6 py-2 border border-pink-500/20 bg-pink-500/5 rounded text-[10px] font-black uppercase tracking-widest text-pink-500 mb-12 w-fit">
              <Radio size={16} className="animate-ping" /> TRANSMITTING_AGENCY_READY
           </div>
           <h1 className="text-6xl md:text-[12vw] font-black italic uppercase leading-[0.8] tracking-tighter mb-16 underline decoration-pink-500/20 underline-offset-[20px] decoration-4 italic">
              <GlitchText>Cyber</GlitchText><br />
              <GlitchText>Pulse.</GlitchText>
           </h1>
           <p className="text-2xl md:text-5xl text-pink-50/40 font-medium leading-[1.2] max-w-4xl mb-24 border-l-4 border-pink-500/20 pl-10 italic tracking-tight italic">
              {data.hero.subtitle}
           </p>
           <button className="px-14 py-8 bg-pink-600 text-white font-black text-xs uppercase tracking-[0.4em] hover:bg-pink-500 transition-all shadow-[0_0_30px_rgba(236,72,153,0.4)] w-fit flex gap-6 items-center">
              ACCESS_CARGO_PULSE <ArrowRight size={24} />
           </button>
        </section>

        {/* PROJECTS */}
        <section className="py-60">
           <div className="flex flex-col md:flex-row justify-between items-end gap-16 mb-40 text-left">
              <h2 className="text-7xl md:text-[10vw] font-black italic uppercase tracking-tighter italic">Payloads_</h2>
              <p className="text-[11px] font-black uppercase tracking-widest text-pink-500/40 italic max-w-sm italic">// CARGO_MANIFEST_ARCHIVE_NODE</p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-left">
              {data.completed_projects.map((p, i) => (
                 <div key={i} className="p-16 border border-pink-500/30 rounded-2xl bg-[#0d1117] hover:bg-[#0f141b] transition-all flex flex-col justify-between h-[650px] relative group overflow-hidden text-left shadow-2xl">
                    <div className="absolute top-0 right-0 p-10 font-black text-pink-500/5 text-9xl italic group-hover:text-pink-500/20 transition-colors uppercase italic">{i}</div>
                    <div className="text-left relative z-10">
                       <span className="text-[11px] font-black text-pink-500/40 mb-12 block italic">// MODULE_v19.{i}</span>
                       <h3 className="text-4xl md:text-5xl font-black italic uppercase italic text-pink-100 mb-10 tracking-tighter leading-none italic">{p.project_name}</h3>
                       <p className="text-xl text-pink-50/30 italic leading-relaxed italic mb-12 italic line-clamp-4 italic">{p.problem}</p>
                    </div>
                    <div className="pt-12 border-t border-pink-500/10 flex flex-col gap-10 text-left relative z-10">
                       <div className="flex flex-wrap gap-3">
                          {p.technologies?.slice(0, 4).map((t, j) => (
                             <span key={j} className="text-[10px] font-black uppercase px-4 py-2 bg-pink-500/5 border border-pink-500/20 text-pink-500/60 italic">{t}</span>
                          ))}
                       </div>
                       <button className="flex items-center gap-6 text-xs font-black uppercase text-pink-500 hover:gap-8 transition-all italic underline decoration-pink-500/20 underline-offset-8">OPEN_SYSTEM_LOGS <ArrowRight size={24} /></button>
                    </div>
                 </div>
              ))}
           </div>
        </section>

        {/* FOOTER */}
        <footer className="py-60 border-t border-pink-500/20 text-left">
           <div className="flex flex-col lg:flex-row justify-between gap-40 mb-40 text-left">
              <div className="text-left">
                 <h2 className="text-7xl md:text-[12vw] font-black italic uppercase tracking-tighter mb-12 italic">Contact_</h2>
                 <a href={`mailto:${data.brand.email}`} className="text-3xl md:text-7xl font-black text-pink-500 font-mono tracking-tighter italic hover:text-pink-400 transition-colors uppercase italic underline decoration-pink-500/20 underline-offset-[16px] decoration-4">{data.brand.email}</a>
              </div>
              <div className="flex gap-40 text-left">
                 <div className="flex flex-col gap-10 text-left">
                    <span className="text-[11px] font-black uppercase tracking-widest text-pink-500/20 italic">Transmission_Link</span>
                    {['Twitter', 'GitHub', 'LinkedIn'].map(l => (
                      <a key={l} href="#" className="text-xs font-black uppercase tracking-widest hover:text-pink-500 text-pink-50/20 italic">[{l}]</a>
                    ))}
                 </div>
              </div>
           </div>
           <div className="flex justify-between items-center text-[11px] font-black uppercase tracking-[0.6em] text-pink-500/10 italic">
              <span>{data.brand.location} // B_ADDR: 0x97A9</span>
              <span>© {new Date().getFullYear()} // CYBERPULSE_AGENCY_V19</span>
           </div>
        </footer>
      </main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;800&family=Outfit:wght@900&display=swap');
        body { background-color: #050608; font-family: 'JetBrains Mono', monospace; }
        ::-webkit-scrollbar { width: 2px; }
      `}</style>
    </div>
  );
}
