import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CompanyPortfolio as data } from './CompanyPortfolioData';
import { 
  Terminal, Cpu, Code, Database, Globe, 
  Terminal as TerminalIcon, ChevronRight, Activity, 
  Shield, Zap, Github, Twitter, Linkedin, Mail,
  Command, Box, Maximize2, Power
} from 'lucide-react';

const MatrixRain = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const characters = "01";
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = new Array(Math.floor(columns)).fill(1);
    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#0f0";
      ctx.font = `${fontSize}px monospace`;
      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
    };
    const interval = setInterval(draw, 50);
    const handleResize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    window.addEventListener('resize', handleResize);
    return () => { clearInterval(interval); window.removeEventListener('resize', handleResize); };
  }, []);
  return <canvas ref={canvasRef} className="fixed inset-0 opacity-10 pointer-events-none z-0" />;
};

export default function CompanyPortfolio21() {
  return (
    <div className="bg-[#050505] text-[#0f0] font-mono selection:bg-green-500/30 selection:text-white min-h-screen relative overflow-x-hidden text-left pb-20">
      <MatrixRain />
      
      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 border-b border-green-500/20 backdrop-blur-md px-10 py-4 flex justify-between items-center text-left">
        <div className="flex items-center gap-6">
           <TerminalIcon size={20} className="animate-pulse" />
           <span className="text-[11px] font-black uppercase tracking-[0.4em]">{data.brand.name} // SYS_ENG_21</span>
        </div>
        <button className="px-8 py-2 bg-green-500 text-black text-[10px] font-black uppercase tracking-widest hover:bg-green-400 transition-all shadow-[0_0_20px_rgba(0,255,0,0.4)]">
           ESTABLISH_PARTNERSHIP
        </button>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-10 pt-40 text-left">
        {/* HERO */}
        <section className="min-h-[80vh] flex flex-col justify-center text-left mb-40">
           <div className="inline-flex items-center gap-4 px-6 py-2 border border-green-500/20 bg-green-500/5 rounded text-[10px] font-black uppercase tracking-widest text-green-500 mb-12 w-fit">
              <Shield size={16} className="animate-ping" /> AGENCY_NODE_READY: STABLE
           </div>
           <h1 className="text-7xl md:text-[10vw] font-black uppercase tracking-tighter leading-[0.8] mb-16 italic">
              Code<br />Matrix.
           </h1>
           <p className="text-2xl md:text-5xl text-green-500/40 font-light max-w-4xl leading-tight mb-20 italic border-l-4 border-green-500/20 pl-12 text-left italic font-mono">
              {data.hero.subtitle}
           </p>
           <div className="flex flex-wrap gap-12 text-left">
              <button className="px-14 py-7 bg-green-500/10 border border-green-500/40 text-green-500 font-black text-xs uppercase tracking-[0.5em] hover:bg-green-500 hover:text-black transition-all">
                 ./ACCESS_MISSION_CONTROL
              </button>
              <div className="flex gap-20 text-left">
                 <div className="flex flex-col text-left">
                    <span className="text-6xl font-black text-white">20+</span>
                    <span className="text-[10px] uppercase font-bold text-white/20 tracking-[0.5em] italic">Active_Deploy</span>
                 </div>
                 <div className="flex flex-col text-left">
                    <span className="text-6xl font-black text-green-500">99%</span>
                    <span className="text-[10px] uppercase font-bold text-white/20 tracking-[0.5em] italic">System_Sync</span>
                 </div>
              </div>
           </div>
        </section>

        {/* PROJECTS */}
        <section className="py-20 text-left">
           <div className="flex flex-col md:flex-row justify-between items-end gap-16 mb-40 text-left">
              <h2 className="text-6xl md:text-[8vw] font-black italic uppercase tracking-tighter italic">Payloads_</h2>
              <p className="text-[11px] font-black uppercase tracking-widest text-green-900 italic max-w-sm text-left italic font-mono">// AGENCY_TECHNICAL_DELIVERABLES</p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
              {data.completed_projects.map((p, i) => (
                 <div key={i} className="p-16 border border-green-500/20 bg-green-500/5 hover:border-green-500/50 transition-all flex flex-col justify-between h-[650px] relative group text-left shadow-2xl">
                    <div className="absolute top-0 right-0 p-10 font-black text-green-500/5 text-9xl italic group-hover:text-green-500/20 transition-colors uppercase italic font-mono pointer-events-none">{i}</div>
                    <div className="text-left relative z-10">
                       <span className="text-[11px] font-black text-green-800 mb-12 block italic font-mono uppercase tracking-[0.5em]">_SYS_ARCH_v21.{i}</span>
                       <h3 className="text-5xl font-black italic uppercase italic text-green-100 mb-10 tracking-tighter italic leading-none">{p.project_name}</h3>
                       <p className="text-xl text-green-500/30 italic leading-relaxed italic mb-12 italic border-l-2 border-green-500/20 pl-8">{p.problem}</p>
                    </div>
                    <div className="pt-12 border-t border-green-500/10 flex flex-col gap-10 text-left relative z-10">
                       <div className="flex flex-wrap gap-4">
                          {p.technologies?.slice(0, 4).map((tech, j) => (
                             <span key={j} className="text-[10px] font-black uppercase border border-green-500/20 px-6 py-2 text-green-500/40 italic font-mono">_{tech}</span>
                          ))}
                       </div>
                       <button className="flex items-center gap-6 text-xs font-black uppercase text-green-500 group-hover:gap-10 transition-all italic underline underline-offset-8 decoration-green-500/20">./READ_TECHNICAL_LOGS <ChevronRight size={24} /></button>
                    </div>
                 </div>
              ))}
           </div>
        </section>

        {/* FOOTER */}
        <footer className="py-60 border-t border-green-500/20 text-left">
           <div className="flex flex-col lg:flex-row justify-between gap-40 mb-40 text-left">
              <div className="text-left">
                 <h2 className="text-7xl font-black italic uppercase tracking-tighter mb-12 italic">Establish_Link.</h2>
                 <a href={`mailto:${data.brand.email}`} className="text-3xl md:text-7xl font-black text-green-500 font-mono tracking-tighter italic hover:text-green-400 transition-colors uppercase italic underline decoration-green-500/20 underline-offset-[16px] decoration-4 italic leading-none">{data.brand.email}</a>
              </div>
              <div className="flex flex-col justify-end items-start md:items-end gap-16 text-left">
                 <div className="flex gap-40 text-left shadow-2xl">
                    <div className="flex flex-col gap-8 text-left">
                       <span className="text-[10px] font-black uppercase tracking-widest text-green-900 italic">_Directories</span>
                       {['Mission_Control', 'Payloads', 'Archives'].map(l => (
                         <a key={l} href="#" className="text-xs font-black uppercase hover:text-green-500 transition-colors italic">./{l}</a>
                       ))}
                    </div>
                 </div>
                 <div className="flex flex-col md:flex-row items-start md:items-center gap-12 text-[11px] font-black uppercase text-green-900 tracking-[0.5em] italic font-mono">
                    <span>{data.brand.location} // B_ADDR: 0x97A9</span>
                    <span>© {new Date().getFullYear()} // MATRIX_AGENCY_V21</span>
                 </div>
              </div>
           </div>
        </footer>
      </main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;800&display=swap');
        body { background-color: #050505; font-family: 'JetBrains Mono', monospace; }
        ::-webkit-scrollbar { width: 2px; }
      `}</style>
    </div>
  );
}
