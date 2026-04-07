import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FullTimeFreelancerProfile as data } from './FreelancerPortfolioData';
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
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@&%*";
    const fontSize = 14;
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
    const interval = setInterval(draw, 33);
    const handleResize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    window.addEventListener('resize', handleResize);
    return () => { clearInterval(interval); window.removeEventListener('resize', handleResize); };
  }, []);
  return <canvas ref={canvasRef} className="fixed inset-0 opacity-10 pointer-events-none z-0" />;
};

const BlinkingCursor = () => (
  <motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.8, repeat: Infinity }} className="inline-block w-2 h-5 bg-[#0f0] align-middle ml-1" />
);

export default function FreelancerPortfolio21() {
  return (
    <div className="bg-[#050505] text-[#0f0] font-mono selection:bg-green-500/30 selection:text-white min-h-screen relative overflow-x-hidden text-left pb-20">
      <MatrixRain />
      
      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 border-b border-green-500/20 backdrop-blur-md px-8 py-3 flex justify-between items-center text-left">
        <div className="flex items-center gap-4">
           <TerminalIcon size={18} className="animate-pulse" />
           <span className="text-xs font-black uppercase tracking-[0.2em]">{data.personal_info.name}@FREELANCE:~$</span>
        </div>
        <button className="px-6 py-1.5 border border-green-500/30 rounded text-[10px] uppercase font-black hover:bg-green-500 hover:text-black transition-all">
           ./INITIALIZE_HIRE
        </button>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-8 pt-32 text-left">
        {/* HERO */}
        <section className="min-h-[70vh] flex flex-col justify-center text-left mb-32">
           <div className="inline-flex items-center gap-3 px-4 py-2 border border-green-500/20 bg-green-500/5 rounded text-[9px] font-black uppercase tracking-widest text-green-500 mb-10 w-fit">
              <Zap size={12} className="animate-ping" /> TRANSMITTING_FREELANCE_READY
           </div>
           <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-10 italic underline decoration-green-500/20 underline-offset-[20px] decoration-2 italic">
              Code<br />Matrix.
           </h1>
           <p className="text-xl text-green-500/50 max-w-2xl leading-relaxed mb-16 border-l-2 border-green-500/20 pl-6 italic">
              {data.hero.subtitle}
           </p>
           <div className="flex flex-wrap gap-8">
              <button className="px-10 py-5 bg-green-500/10 border border-green-500/40 text-green-500 font-black text-xs uppercase tracking-[0.3em] hover:bg-green-500 hover:text-black transition-all">
                 ./EXECUTE_HIRE_PROTOCOL
              </button>
              <div className="flex gap-4">
                 {[Github, Twitter, Mail].map((Icon, i) => (
                    <button key={i} className="w-14 h-14 border border-green-500/20 flex items-center justify-center text-green-500/40 hover:text-green-500 hover:bg-green-500/5 transition-all">
                       <Icon size={20} />
                    </button>
                 ))}
              </div>
           </div>
        </section>

        {/* PROJECTS */}
        <section className="py-20 text-left">
           <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24 text-left">
              <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter italic">Payloads_</h2>
              <p className="text-[10px] font-black uppercase tracking-widest text-green-800 italic max-w-xs text-left italic font-mono">// CURATED_PROJECT_MANIFEST</p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
              {data.completed_projects.map((p, i) => (
                 <div key={i} className="p-10 border border-green-500/20 bg-green-500/5 hover:bg-green-500/10 transition-all flex flex-col justify-between h-[500px] relative group text-left">
                    <div className="absolute top-0 right-0 p-6 font-black text-green-500/5 text-4xl italic group-hover:text-green-500/20 transition-colors uppercase italic font-mono">{i}</div>
                    <div className="text-left">
                       <span className="text-[10px] font-black text-green-700 mb-6 block">// MODULE_v21.{i}</span>
                       <h3 className="text-3xl font-black italic uppercase mb-6 tracking-tighter text-green-100">{p.project_name}</h3>
                       <p className="text-green-500/40 leading-relaxed italic line-clamp-4 italic border-l border-green-500/20 pl-4">
                          {p.description}
                       </p>
                    </div>
                    <div className="pt-8 border-t border-green-500/10 flex flex-col gap-8 text-left">
                       <div className="flex flex-wrap gap-2">
                          {p.tech_stack.slice(0, 3).map((t, j) => (
                             <span key={j} className="text-[8px] font-black uppercase px-2 py-1 bg-green-500/10 border border-green-500/20 text-green-500/60">{t}</span>
                          ))}
                       </div>
                       <button className="flex items-center gap-4 text-[10px] font-black uppercase text-green-500 italic">./READ_LOGS <ChevronRight size={16} /></button>
                    </div>
                 </div>
              ))}
           </div>
        </section>

        {/* SERVICES */}
        <section className="py-20 text-left border-t border-green-500/20">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 text-left">
              {data.services.map((s, i) => (
                 <div key={i} className="space-y-8 text-left">
                    <div className="w-12 h-12 border border-green-500/30 flex items-center justify-center text-green-500 italic font-black shadow-[0_0_15px_rgba(0,255,0,0.1)]">0{i+1}</div>
                    <h3 className="text-3xl font-black italic uppercase italic tracking-tighter italic text-green-100 italic leading-none">{s.category}</h3>
                    <p className="text-green-500/40 italic text-sm italic leading-relaxed italic">{s.description}</p>
                    <div className="flex flex-col gap-4 text-left">
                       {s.features.map((f, j) => (
                          <div key={j} className="flex items-center gap-3 text-[9px] font-black uppercase text-green-900 group italic">
                             <div className="w-1 h-1 bg-green-500 group-hover:scale-x-[4] transition-transform origin-left" /> {f}
                          </div>
                       ))}
                    </div>
                 </div>
              ))}
           </div>
        </section>

        {/* FOOTER */}
        <footer className="py-20 mt-40 border-t border-green-500/20 text-left">
           <div className="flex flex-col lg:flex-row justify-between gap-32 mb-40 text-left">
              <div className="text-left">
                 <h2 className="text-6xl md:text-[8vw] font-black italic uppercase tracking-tighter mb-12 italic">Establish_Link.</h2>
                 <a href={`mailto:${data.personal_info.email}`} className="text-2xl md:text-5xl font-black text-green-500 font-mono tracking-tighter italic hover:text-green-400 transition-colors uppercase italic underline decoration-green-500/20 underline-offset-8">{data.personal_info.email}</a>
              </div>
              <div className="flex gap-20 text-left">
                 <div className="flex flex-col gap-6 text-left">
                    <span className="text-[10px] font-black uppercase text-green-900 tracking-widest italic">_Directories</span>
                    {['B_Addr', 'Payloads', 'Hardware'].map(l => (
                      <a key={l} href="#" className="text-xs font-black uppercase hover:text-green-500 transition-colors">./{l}</a>
                    ))}
                 </div>
              </div>
           </div>
           <div className="flex justify-between items-center text-[10px] font-black uppercase text-green-900 tracking-[0.5em] italic">
              <span>{data.personal_info.location} // B_ADDR: 0x97A9</span>
              <span>© {new Date().getFullYear()} // MATRIX_FREELANCE_V21</span>
           </div>
        </footer>
      </main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;800&display=swap');
        body { background-color: #050505; font-family: 'JetBrains Mono', monospace; }
      `}</style>
    </div>
  );
}
