import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, useMotionValue } from 'framer-motion';
import { CompanyPortfolio as data } from './CompanyPortfolioData';
import { 
  Triangle, Hexagon, Circle, Square, 
  Atom, Zap, Layers, Cpu, Globe, 
  Mail, Github, Twitter, Linkedin,
  ArrowUpRight, ChevronRight, Share2, Target
} from 'lucide-react';

const QuantumParticle = ({ delay = 0 }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
      opacity: [0, 0.4, 0],
      scale: [0, 1, 0.5, 1, 0],
      x: [0, Math.random() * 200 - 100, 0],
      y: [0, Math.random() * 200 - 100, 0],
    }}
    transition={{ 
      duration: 10 + Math.random() * 10, 
      repeat: Infinity, 
      delay,
      ease: "easeInOut" 
    }}
    className="absolute w-1 h-1 rounded-full bg-cyan-400 blur-[1px]"
    style={{ 
      left: `${Math.random() * 100}%`, 
      top: `${Math.random() * 100}%` 
    }}
  />
);

export default function CompanyPortfolio18() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouse = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <div className="bg-[#050505] text-[#e2e8f0] font-sans selection:bg-cyan-500/30 selection:text-white min-h-screen relative overflow-hidden text-left">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[#050505]" />
        {Array.from({ length: 30 }).map((_, i) => (
          <QuantumParticle key={i} delay={i * 0.3} />
        ))}
         <motion.div 
          className="fixed top-0 left-0 w-[600px] h-[600px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none z-[1]"
          style={{ x: mouseX, y: mouseY, translateX: "-50%", translateY: "-50%" }}
        />
      </div>

      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-cyan-500 z-[100]" style={{ scaleX }} />

      <nav className="fixed top-12 inset-x-12 z-[100]">
        <div className="max-w-7xl mx-auto px-12 py-6 rounded-[3rem] bg-white/[0.02] border border-white/10 backdrop-blur-3xl flex justify-between items-center text-left">
           <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-indigo-600 p-[1px] shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                 <div className="w-full h-full rounded-2xl bg-[#050505] flex items-center justify-center text-cyan-400 font-black italic">C</div>
              </div>
              <span className="text-sm font-black uppercase tracking-[0.5em] font-mono">{data.brand.name}</span>
           </div>
           <button className="px-10 py-3 bg-white text-black rounded-full font-black text-[11px] tracking-widest hover:scale-105 transition-all uppercase">
              DEPLOY_STRATEGY
           </button>
        </div>
      </nav>

      <main className="relative z-10 pt-56 px-12 lg:px-44">
        {/* HERO */}
        <section className="min-h-[75vh] flex flex-col justify-center max-w-6xl text-left">
           <div className="inline-flex items-center gap-4 px-8 py-3 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-[11px] font-black uppercase tracking-[0.5em] text-cyan-400 mb-12 w-fit">
              <Target size={14} /> AGENCY_PROBABILITY_SYNC
           </div>
           <h1 className="text-8xl md:text-[14vw] font-black italic uppercase leading-[0.75] tracking-tighter mb-16">
              Quantum<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-violet-600">Enterprise.</span>
           </h1>
           <p className="text-3xl md:text-5xl text-slate-400 font-light max-w-4xl leading-[1.2] mb-24 italic tracking-tight italic">
              {data.hero.subtitle}
           </p>
           <div className="flex flex-wrap gap-16 items-center text-left">
              <button className="px-16 py-8 bg-cyan-600 text-white font-black text-xs uppercase tracking-[0.6em] rounded-3xl hover:bg-cyan-500 transition-all shadow-[0_0_40px_rgba(6,182,212,0.4)]">
                 OBSERVE_MANIFEST
              </button>
              <div className="flex gap-20 text-left">
                 <div className="flex flex-col text-left">
                    <span className="text-5xl font-black text-white">05+</span>
                    <span className="text-[11px] uppercase font-bold text-slate-500 tracking-widest italic">Global Nodes</span>
                 </div>
                 <div className="flex flex-col text-left">
                    <span className="text-5xl font-black text-cyan-400">99.9%</span>
                    <span className="text-[11px] uppercase font-bold text-slate-500 tracking-widest italic">Sync SLA</span>
                 </div>
              </div>
           </div>
        </section>

        {/* PROJECTS */}
        <section className="py-60">
           <div className="flex flex-col md:flex-row justify-between items-end gap-16 mb-40 text-left">
              <h2 className="text-7xl md:text-9xl font-black italic uppercase tracking-tighter italic">Manifests_</h2>
              <p className="text-[11px] font-black uppercase tracking-widest opacity-20 italic max-w-sm italic">// COLLAPSING_TECHNICAL_PROBABILITIES</p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-left">
              {data.completed_projects.map((p, i) => (
                 <div key={i} className="p-16 border border-white/10 rounded-[4rem] bg-white/[0.02] hover:bg-white/[0.04] transition-all flex flex-col justify-between h-[700px] shadow-2xl relative overflow-hidden group text-left">
                    <div className="absolute top-0 right-0 p-10 font-black text-white/5 text-8xl italic group-hover:text-white/10 transition-colors">0{i}</div>
                    <div className="text-left">
                       <div className="flex justify-between items-start mb-16">
                          <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-cyan-400 shadow-inner"><Layers size={32} /></div>
                       </div>
                       <h3 className="text-4xl md:text-5xl font-black italic uppercase mb-10 tracking-tighter italic">{p.project_name}</h3>
                       <p className="text-xl text-slate-400 leading-relaxed italic line-clamp-4 italic">{p.problem}</p>
                    </div>
                    <div className="pt-12 border-t border-white/5 flex flex-col gap-10 text-left">
                       <div className="flex flex-wrap gap-3">
                          {p.technologies?.slice(0, 4).map((t, j) => (
                             <span key={j} className="text-[10px] font-black uppercase border border-white/10 px-6 py-2 bg-white/5 text-slate-500 rounded-full italic">{t}</span>
                          ))}
                       </div>
                       <button className="flex items-center gap-3 text-xs font-black uppercase text-cyan-400 group-hover:gap-5 transition-all italic">READ_LOGS <ArrowUpRight size={24} /></button>
                    </div>
                 </div>
              ))}
           </div>
        </section>

        {/* FOOTER */}
        <footer className="py-60 border-t border-white/5 text-left">
           <div className="flex flex-col lg:flex-row justify-between gap-40 mb-40 text-left">
              <div className="text-left">
                 <h2 className="text-7xl md:text-[12vw] font-black italic uppercase tracking-tighter mb-12 italic">Frequency_</h2>
                 <a href={`mailto:${data.brand.email}`} className="text-3xl md:text-7xl font-black text-cyan-400 font-mono tracking-tighter hover:text-cyan-300 transition-colors uppercase italic underline decoration-cyan-500/20 underline-offset-8 decoration-4">{data.brand.email}</a>
              </div>
              <div className="flex gap-40 text-left">
                 <div className="flex flex-col gap-10 text-left">
                    <span className="text-[11px] font-black uppercase tracking-widest opacity-20 italic">Global Nodes</span>
                    {['Twitter', 'GitHub', 'LinkedIn'].map(l => (
                      <a key={l} href="#" className="text-xs font-black uppercase tracking-widest hover:text-cyan-400 text-slate-400 italic">[{l}]</a>
                    ))}
                 </div>
              </div>
           </div>
           <div className="flex justify-between items-center text-[11px] font-black uppercase tracking-[0.5em] opacity-20 italic">
              <span>{data.brand.location} // HQ_SYNC</span>
              <span>© {new Date().getFullYear()} // {data.brand.name} // QUANTUM_V18</span>
           </div>
        </footer>
      </main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;500;900&display=swap');
        body { background-color: #050505; font-family: 'Space Grotesk', sans-serif; }
      `}</style>
    </div>
  );
}
