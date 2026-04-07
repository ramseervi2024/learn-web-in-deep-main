import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, useMotionValue } from 'framer-motion';
import { portfolioprofile as data } from './PersonalPortfolioData';
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

const GlassCard = ({ children, className = "" }) => (
  <motion.div 
    whileHover={{ scale: 1.02, rotateY: 5, rotateX: -5 }}
    className={`backdrop-blur-3xl bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-10 overflow-hidden relative group/card ${className}`}
    style={{ transformStyle: "preserve-3d" }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700" />
    {children}
  </motion.div>
);

export default function PersonalPortfolio18() {
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
      {/* Quantum Field Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#0f172a_0%,#050505_100%)]" />
        {Array.from({ length: 40 }).map((_, i) => (
          <QuantumParticle key={i} delay={i * 0.2} />
        ))}
        
        {/* Dynamic Light Follower */}
        <motion.div 
          className="fixed top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none z-[1]"
          style={{ x: mouseX, y: mouseY, translateX: "-50%", translateY: "-50%" }}
        />
        <motion.div 
          className="fixed top-0 left-0 w-[400px] h-[400px] bg-violet-500/10 blur-[100px] rounded-full pointer-events-none z-[1]"
          style={{ x: mouseX, y: mouseY, translateX: "20%", translateY: "-20%" }}
        />
      </div>

      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-cyan-500 origin-left z-[100]" style={{ scaleX }} />

      {/* Navigation */}
      <nav className="fixed top-8 inset-x-8 z-[100]">
        <div className="max-w-7xl mx-auto px-10 py-5 rounded-[2rem] bg-white/[0.02] border border-white/10 backdrop-blur-2xl flex justify-between items-center text-left">
           <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-violet-500 p-[1px]">
                 <div className="w-full h-full rounded-xl bg-[#050505] flex items-center justify-center text-cyan-400">
                    <Atom size={20} />
                 </div>
              </div>
              <span className="text-xs font-black uppercase tracking-[0.4em]">{data.personal_info.name}</span>
           </div>
           
           <div className="hidden lg:flex gap-12 text-[10px] uppercase font-black tracking-widest opacity-40">
              {['Quanta', 'Manifest', 'Architecture', 'Entanglement'].map(link => (
                <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-cyan-400 hover:opacity-100 transition-all">{link}</a>
              ))}
           </div>

           <button className="px-6 py-2 bg-white text-black rounded-full font-black text-[10px] tracking-widest hover:scale-105 transition-transform uppercase">
              Initialize_Hub
           </button>
        </div>
      </nav>

      <main className="relative z-10">
        {/* HERO */}
        <section id="quanta" className="min-h-screen flex items-center px-8 lg:px-32 relative overflow-hidden">
           <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                 <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-3 px-6 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-[10px] font-black uppercase tracking-[0.4em] text-cyan-400 mb-10"
                 >
                    <Target size={12} /> PROBABILITY_PEAK: ACHIEVED
                 </motion.div>
                 
                 <motion.h1 
                    initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1 }}
                    className="text-7xl md:text-[10vw] font-black leading-[0.8] tracking-tighter uppercase mb-12"
                 >
                   Quantum<br />
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400">Reality.</span>
                 </motion.h1>

                 <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed max-w-2xl mb-16"
                 >
                   {data.hero.subtitle}
                 </motion.p>

                 <div className="flex flex-wrap gap-8">
                    <button className="px-12 py-6 bg-cyan-600 text-white rounded-[2rem] font-black text-xs uppercase tracking-[0.5em] hover:bg-cyan-500 transition-all shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                       Observe_Now
                    </button>
                    <div className="flex gap-4">
                       {[Github, Twitter, Linkedin].map((Icon, i) => (
                         <button key={i} className="w-16 h-16 rounded-[2rem] border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all text-slate-400 hover:text-cyan-400">
                            <Icon size={24} />
                         </button>
                       ))}
                    </div>
                 </div>
              </div>

              <div className="relative hidden lg:block">
                 <motion.div 
                    animate={{ rotateY: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-full aspect-square border-[1px] border-white/5 rounded-full relative p-20"
                 >
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-violet-500/5 rounded-full blur-[40px]" />
                    <GlassCard className="w-full h-full flex flex-col justify-center items-center text-center p-12">
                       <Atom size={120} className="text-cyan-400 mb-8 animate-pulse" />
                       <span className="text-sm font-black tracking-[0.5em] opacity-40 uppercase">State: Superposition</span>
                       <div className="mt-8 flex gap-4">
                          {data.stats.slice(0, 2).map((stat, i) => (
                            <div key={i} className="flex flex-col">
                               <span className="text-2xl font-black text-white">{stat.value}</span>
                               <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">{stat.label}</span>
                            </div>
                          ))}
                       </div>
                    </GlassCard>
                 </motion.div>
              </div>
           </div>
        </section>

        {/* PROJECTS */}
        <section id="manifest" className="py-40 px-8 lg:px-32">
           <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24">
                 <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">Manifested<br />Events_</h2>
                 <div className="max-w-xs text-right">
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-30 leading-relaxed italic">
                       Collapsing complex technical possibilities into production-ready digital architectures.
                    </p>
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                 {data.completed_projects.map((project, i) => (
                    <GlassCard key={i} className="flex flex-col justify-between h-[600px] hover:border-cyan-500/30">
                       <div className="text-left">
                          <div className="flex justify-between items-start mb-12">
                             <div className="w-14 h-14 bg-white/5 rounded-[1.5rem] flex items-center justify-center text-cyan-400 border border-white/10">
                                <Layers size={28} />
                             </div>
                             <span className="text-[10px] font-black uppercase tracking-[0.6em] opacity-20 italic">VAL_{100 + i}</span>
                          </div>
                          <h3 className="text-4xl font-black italic tracking-tighter uppercase mb-6">{project.project_name}</h3>
                          <p className="text-[#94a3b8] font-medium leading-relaxed mb-10 line-clamp-3 italic">
                             {project.description}
                          </p>
                       </div>

                       <div className="text-left pt-10 border-t border-white/5">
                          <div className="flex flex-wrap gap-2 mb-10">
                             {project.tech_stack.slice(0, 3).map((tech, j) => (
                                <span key={j} className="text-[9px] uppercase font-black tracking-widest border border-white/10 px-4 py-2 bg-white/5 rounded-full text-slate-400">{tech}</span>
                             ))}
                          </div>
                          <button className="flex items-center gap-4 text-xs font-black uppercase tracking-[0.5em] text-cyan-400 group/btn">
                             OBSERVE_DEPTH <ArrowUpRight size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                          </button>
                       </div>
                    </GlassCard>
                 ))}
              </div>
           </div>
        </section>

        {/* SERVICES / ARCHITECTURE */}
        <section id="architecture" className="py-40 px-8 bg-white/[0.01]">
           <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                 {data.services.map((service, i) => (
                    <motion.div 
                       key={i}
                       initial={{ opacity: 0, y: 30 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       transition={{ delay: i * 0.2 }}
                       className="p-12 rounded-[3rem] border border-white/10 hover:border-cyan-500/20 bg-white/[0.02] flex flex-col items-start text-left"
                    >
                       <div className="w-16 h-16 rounded-[2rem] bg-gradient-to-br from-cyan-500/10 to-violet-500/10 border border-white/10 flex items-center justify-center text-cyan-400 mb-10 shadow-2xl">
                          {i === 0 ? <Zap size={32} /> : i === 1 ? <Cpu size={32} /> : <Globe size={32} />}
                       </div>
                       <h3 className="text-3xl font-black italic tracking-tighter uppercase mb-6 italic">{service.category}</h3>
                       <p className="text-slate-400 leading-relaxed mb-10 italic">{service.description}</p>
                       <div className="flex flex-col gap-3">
                          {service.features.map((feat, j) => (
                             <div key={j} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-500 italic">
                                <Triangle size={10} className="text-cyan-500" /> {feat}
                             </div>
                          ))}
                       </div>
                    </motion.div>
                 ))}
              </div>
           </div>
        </section>

        {/* FOOTER / ENTANGLEMENT */}
        <footer id="entanglement" className="py-40 px-8 relative overflow-hidden bg-[#0a0a0a]">
           <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
           
           <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 mb-40 text-left">
              <div>
                 <h2 className="text-6xl md:text-9xl font-black italic uppercase tracking-tighter leading-[0.8] mb-12">
                   Direct_<br />
                   <span className="text-cyan-400">Link.</span>
                 </h2>
                 <p className="text-xl text-slate-500 font-light max-w-md italic mb-16 underline decoration-cyan-500/20 underline-offset-8 decoration-2">
                   Synchronizing high-stakes technical logic with business objectives. Connect for strategic mobile architecture.
                 </p>
                 <div className="flex flex-col gap-4">
                    <span className="text-[10px] font-black uppercase tracking-[0.8em] opacity-30">Frequency</span>
                    <a href={`mailto:${data.personal_info.email}`} className="text-2xl md:text-4xl font-black hover:text-cyan-400 transition-all font-mono tracking-tighter">{data.personal_info.email}</a>
                 </div>
              </div>

              <div className="flex flex-col justify-end items-start lg:items-end gap-16">
                 <div className="flex gap-20">
                    <div className="flex flex-col gap-6">
                       <span className="text-[10px] font-black uppercase tracking-widest opacity-20">Dimensions</span>
                       {['Quanta', 'Manifest', 'Architecture'].map(l => (
                         <a key={l} href={`#${l.toLowerCase()}`} className="text-xs font-black uppercase tracking-widest hover:text-cyan-400 transition-colors">{l}</a>
                       ))}
                    </div>
                    <div className="flex flex-col gap-6">
                       <span className="text-[10px] font-black uppercase tracking-widest opacity-20">Transmission</span>
                       {['Twitter', 'GitHub', 'LinkedIn'].map(l => (
                         <a key={l} href="#" className="text-xs font-black uppercase tracking-widest hover:text-cyan-400 transition-colors">{l}</a>
                       ))}
                    </div>
                 </div>
                 <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.4em] opacity-20 italic">
                    <span>{data.personal_info.location}</span>
                    <span>© {new Date().getFullYear()} QUANTUM_IDENTITY_SYS</span>
                 </div>
              </div>
           </div>
        </footer>
      </main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;500;700;900&family=Outfit:wght@200;400;900&display=swap');
        
        body {
          background-color: #050505;
          font-family: 'Space Grotesk', sans-serif;
        }

        .font-mono {
          font-family: 'Space Grotesk', monospace;
        }

        ::-webkit-scrollbar {
          width: 4px;
        }
        ::-webkit-scrollbar-track {
          background: #050505;
        }
        ::-webkit-scrollbar-thumb {
          background: #1a1a1a;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #333;
        }
      `}</style>
    </div>
  );
}
