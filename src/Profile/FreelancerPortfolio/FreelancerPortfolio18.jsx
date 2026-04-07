import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, useMotionValue } from 'framer-motion';
import { FullTimeFreelancerProfile as data } from './FreelancerPortfolioData';
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

export default function FreelancerPortfolio18() {
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#0f172a_0%,#050505_100%)]" />
        {Array.from({ length: 20 }).map((_, i) => (
          <QuantumParticle key={i} delay={i * 0.5} />
        ))}
         <motion.div 
          className="fixed top-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none z-[1]"
          style={{ x: mouseX, y: mouseY, translateX: "-50%", translateY: "-50%" }}
        />
      </div>

      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-cyan-500 z-[100]" style={{ scaleX }} />

      <nav className="fixed top-8 inset-x-8 z-[100]">
        <div className="max-w-7xl mx-auto px-10 py-5 rounded-[2rem] bg-white/[0.02] border border-white/10 backdrop-blur-2xl flex justify-between items-center text-left">
           <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-violet-500 p-[1px]">
                 <div className="w-full h-full rounded-xl bg-[#050505] flex items-center justify-center text-cyan-400 font-black italic">F</div>
              </div>
              <span className="text-xs font-black uppercase tracking-[0.4em]">{data.personal_info.name}</span>
           </div>
           <button className="px-6 py-2 bg-white text-black rounded-full font-black text-[10px] tracking-widest hover:scale-105 transition-transform uppercase">
              DEPLOY_CODE
           </button>
        </div>
      </nav>

      <main className="relative z-10 pt-40 px-8 lg:px-32">
        {/* HERO */}
        <section id="quanta" className="min-h-[80vh] flex flex-col justify-center max-w-5xl text-left">
           <div className="inline-flex items-center gap-3 px-6 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-[10px] font-black uppercase tracking-[0.4em] text-cyan-400 mb-10 w-fit">
              <Target size={12} /> FREELANCE_QUANTUM_LEAP
           </div>
           <h1 className="text-6xl md:text-9xl font-black italic uppercase leading-[0.8] tracking-tighter mb-12">
              Quantum<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">Service.</span>
           </h1>
           <p className="text-2xl text-slate-400 font-light max-w-2xl leading-relaxed mb-16 italic">
              {data.hero.subtitle}
           </p>
           <div className="flex flex-wrap gap-8 items-center">
              <button className="px-12 py-6 bg-cyan-600 text-white font-black text-xs uppercase tracking-[0.5em] rounded-xl hover:bg-cyan-500 transition-all shadow-2xl">
                 OBSERVE_SOLUTION
              </button>
              <div className="flex gap-12">
                 <div className="flex flex-col">
                    <span className="text-4xl font-black text-white">{data.stats[0].value}</span>
                    <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">{data.stats[0].label}</span>
                 </div>
                 <div className="flex flex-col">
                    <span className="text-4xl font-black text-cyan-400">{data.stats[1].value}</span>
                    <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">{data.stats[1].label}</span>
                 </div>
              </div>
           </div>
        </section>

        {/* PROJECTS */}
        <section className="py-40">
           <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24">
              <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter italic">Manifests_</h2>
              <p className="text-[10px] font-black uppercase tracking-widest opacity-30 italic max-w-xs">Collapsing high-stakes technical logic into production-ready architectures.</p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
              {data.completed_projects.slice(0, 4).map((p, i) => (
                 <div key={i} className="p-12 border border-white/10 rounded-[2.5rem] bg-white/[0.02] hover:bg-white/[0.04] transition-all flex flex-col justify-between h-[500px]">
                    <div>
                       <div className="flex justify-between items-start mb-10">
                          <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-cyan-400"><Layers size={28} /></div>
                          <span className="text-[10px] font-black uppercase opacity-20 italic">V1.18.{i}</span>
                       </div>
                       <h3 className="text-3xl font-black italic uppercase mb-6 tracking-tighter">{p.project_name}</h3>
                       <p className="text-slate-400 leading-relaxed italic line-clamp-3">{p.description}</p>
                    </div>
                    <div className="pt-10 border-t border-white/5">
                       <div className="flex flex-wrap gap-2 mb-10">
                          {p.tech_stack.slice(0, 3).map((t, j) => (
                             <span key={j} className="text-[9px] font-black uppercase border border-white/10 px-4 py-2 bg-white/5 text-slate-500 rounded-full">{t}</span>
                          ))}
                       </div>
                       <button className="flex items-center gap-4 text-xs font-black uppercase text-cyan-400">OBSERVE_DEPTH <ArrowUpRight size={18} /></button>
                    </div>
                 </div>
              ))}
           </div>
        </section>

        {/* FOOTER */}
        <footer className="py-40 border-t border-white/5">
           <div className="flex flex-col lg:flex-row justify-between gap-32 mb-40 text-left">
              <div>
                 <h2 className="text-7xl md:text-9xl font-black italic uppercase tracking-tighter mb-12">Transmission_</h2>
                 <a href={`mailto:${data.personal_info.email}`} className="text-2xl md:text-5xl font-black text-cyan-400 font-mono tracking-tighter hover:text-cyan-300 transition-colors">{data.personal_info.email}</a>
              </div>
              <div className="flex gap-20">
                 <div className="flex flex-col gap-6">
                    <span className="text-[10px] font-black uppercase tracking-widest opacity-20">Socials</span>
                    {['Twitter', 'GitHub', 'LinkedIn'].map(l => (
                      <a key={l} href="#" className="text-xs font-black uppercase tracking-widest hover:text-cyan-400 text-slate-400">{l}</a>
                    ))}
                 </div>
              </div>
           </div>
           <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-[0.4em] opacity-20 italic">
              <span>{data.personal_info.location} // ORIGIN</span>
              <span>© {new Date().getFullYear()} // QUANTUM_FREELANCE_V18</span>
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
