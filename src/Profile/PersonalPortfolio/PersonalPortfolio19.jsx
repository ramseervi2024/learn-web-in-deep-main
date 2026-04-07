import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { portfolioprofile as data } from './PersonalPortfolioData';
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
    <span className="absolute top-0 left-0 -translate-x-[2px] -translate-y-[1px] text-pink-500 opacity-0 group-hover:opacity-70 transition-opacity mix-blend-screen animate-pulse">
      {children}
    </span>
    <span className="absolute top-0 left-0 translate-x-[2px] translate-y-[1px] text-cyan-400 opacity-0 group-hover:opacity-70 transition-opacity mix-blend-screen animate-pulse">
      {children}
    </span>
  </div>
);

const PulseCard = ({ children, className = "" }) => (
  <motion.div 
    whileHover={{ scale: 1.01, boxShadow: "0 0 40px rgba(236, 72, 153, 0.2)" }}
    className={`bg-[#0d1117] border border-pink-500/20 rounded-xl p-8 relative overflow-hidden group ${className}`}
  >
    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-pink-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-pink-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    {children}
  </motion.div>
);

export default function PersonalPortfolio19() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 200);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#050608] text-pink-50/90 font-mono selection:bg-pink-500/30 selection:text-white min-h-screen relative overflow-hidden text-left">
      {/* Cyber Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1a1025_0%,#050608_100%)] opacity-40" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#ec4899 1px, transparent 1px), linear-gradient(90deg, #ec4899 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        
        {/* Scanlines Effect */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] z-10 pointer-events-none bg-[length:100%_4px,3px_100%]" />
      </div>

      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-pink-500 shadow-[0_0_15px_#ec4899] origin-left z-[100]" style={{ scaleX }} />

      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-4 backdrop-blur-md bg-[#050608]/80 border-b border-pink-500/20">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-left">
           <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded bg-pink-500/10 border border-pink-500/40 flex items-center justify-center text-pink-500">
                 <Terminal size={16} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-pink-500/80">{data.personal_info.name} // SYS_PORT_19</span>
           </div>
           
           <div className="hidden lg:flex gap-10 text-[9px] uppercase font-black tracking-widest text-pink-500/40">
              {['Signal', 'Payload', 'Hardware', 'Stream'].map(item => (
                <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-pink-500 transition-colors">[{item}]</a>
              ))}
           </div>

           <div className="flex items-center gap-6">
              <div className="hidden md:flex flex-col text-right">
                 <span className="text-[8px] uppercase font-bold text-pink-500/30">System_Status</span>
                 <span className="text-[9px] uppercase font-black text-emerald-400 animate-pulse">Online // 99.9%</span>
              </div>
              <button className="p-3 bg-pink-500/10 border border-pink-500/40 rounded text-pink-500 hover:bg-pink-500 hover:text-white transition-all">
                 <Power size={18} />
              </button>
           </div>
        </div>
      </nav>

      <main className="relative z-10">
        {/* HERO */}
        <section id="signal" className="min-h-screen flex items-center px-8 lg:px-32 pt-20">
           <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                 <div className="inline-flex items-center gap-3 px-4 py-2 border border-pink-500/20 bg-pink-500/5 rounded text-[9px] font-black uppercase tracking-widest text-pink-500 mb-10">
                    <Radio size={14} className="animate-ping" /> TRANSMITTING_DATA_CORE
                 </div>
                 
                 <h1 className="text-5xl md:text-8xl font-black leading-[0.85] tracking-tighter uppercase mb-10 text-transparent bg-clip-text bg-gradient-to-br from-pink-400 via-pink-600 to-indigo-600">
                    <GlitchText>Cyber</GlitchText><br />
                    <GlitchText>Pulse</GlitchText>
                 </h1>

                 <p className="text-lg text-pink-50/50 font-medium leading-relaxed max-w-xl mb-12 border-l-2 border-pink-500/20 pl-6">
                    {data.hero.subtitle}
                 </p>

                 <div className="flex flex-wrap gap-8">
                    <button className="px-10 py-5 bg-pink-600 text-white font-black text-xs uppercase tracking-[0.3em] hover:bg-pink-500 transition-all shadow-[0_0_20px_rgba(236,72,153,0.4)] flex items-center gap-4">
                       EXECUTE_DEED <ArrowRight size={18} />
                    </button>
                    <div className="flex gap-4">
                       {[Mail, Github, Linkedin].map((Icon, i) => (
                         <button key={i} className="w-14 h-14 border border-pink-500/20 flex items-center justify-center text-pink-500/40 hover:text-pink-500 hover:border-pink-500 transition-all">
                            <Icon size={20} />
                         </button>
                       ))}
                    </div>
                 </div>
              </div>

              <div className="relative hidden lg:block">
                 <div className="aspect-square relative flex items-center justify-center p-12">
                    <div className="absolute inset-0 border-[2px] border-pink-500/10 rounded-full animate-spin-slow" />
                    <div className="absolute inset-6 border-[1px] border-pink-500/5 rounded-full animate-reverse-spin" />
                    <PulseCard className="w-full h-full flex flex-col justify-center items-center text-center">
                       <Activity size={100} className="text-pink-600 mb-10 opacity-30" />
                       <div className="flex gap-12">
                          <div className="flex flex-col">
                             <span className="text-4xl font-black text-pink-500">{data.personal_info.experience_years}Y</span>
                             <span className="text-[8px] uppercase tracking-widest text-pink-500/40">Uptime</span>
                          </div>
                          <div className="flex flex-col">
                             <span className="text-4xl font-black text-cyan-400">05+</span>
                             <span className="text-[8px] uppercase tracking-widest text-cyan-400/40">Clusters</span>
                          </div>
                       </div>
                    </PulseCard>
                 </div>
              </div>
           </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="payload" className="py-40 px-8 lg:px-32">
           <div className="max-w-7xl mx-auto">
              <div className="mb-24 flex flex-col gap-4 text-left">
                 <span className="text-[10px] font-black tracking-[0.5em] text-pink-500 uppercase italic">// CARGO_MANIFEST_ARCHIVE</span>
                 <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic">Payload_Output.</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
                 {data.completed_projects.map((project, i) => (
                    <PulseCard key={i} className="group hover:translate-y-[-10px] transition-transform duration-500">
                       <div className="flex justify-between items-start mb-8 text-left">
                          <span className="text-[10px] font-black text-pink-500/30">MODULE_v19.{i}</span>
                          <Maximize2 size={16} className="text-pink-500/20 group-hover:text-pink-500 transition-colors" />
                       </div>
                       <h3 className="text-2xl font-black uppercase text-pink-100 mb-6 group-hover:text-pink-500 transition-colors italic leading-none">{project.project_name}</h3>
                       <p className="text-xs text-pink-50/40 leading-relaxed mb-10 line-clamp-3 italic">
                          {project.description}
                       </p>
                       <div className="flex flex-wrap gap-2 pt-8 border-t border-pink-500/10 text-left">
                          {project.tech_stack.slice(0, 3).map((tech, j) => (
                             <span key={j} className="text-[8px] font-black uppercase tracking-widest px-2 py-1 bg-pink-500/5 border border-pink-500/20 text-pink-500/60">{tech}</span>
                          ))}
                       </div>
                    </PulseCard>
                 ))}
              </div>
           </div>
        </section>

        {/* SERVICES / HARDWARE */}
        <section id="hardware" className="py-40 px-8 bg-pink-500/[0.02] text-left">
           <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
              <div className="lg:w-1/3 text-left">
                 <h2 className="text-5xl font-black uppercase italic mb-8">Hardware<br />Profile.</h2>
                 <p className="text-pink-50/40 leading-relaxed max-w-sm italic">
                    Specialized engineering protocols for mission-critical mobile deployments and system-level architectures.
                 </p>
                 <div className="mt-12 space-y-4">
                    {data.services.map((s, i) => (
                       <div key={i} className="flex items-center gap-4 group cursor-default">
                          <div className="w-2 h-2 bg-pink-500 group-hover:scale-x-[4] transition-transform origin-left" />
                          <span className="text-[10px] font-black uppercase tracking-widest text-pink-50/60 group-hover:text-pink-500 transition-colors">{s.category}</span>
                       </div>
                    ))}
                 </div>
              </div>

              <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
                 {data.technology_stack.mobile.map((item, i) => (
                    <PulseCard key={i} className="p-8 flex items-center justify-between border-slate-800 hover:border-pink-500/40 text-left">
                       <div>
                          <span className="text-xs font-black text-pink-500 uppercase tracking-widest block mb-1">PROTO_v{i}</span>
                          <span className="text-lg font-black text-white italic uppercase tracking-tighter italic">{item}</span>
                       </div>
                       <Cpu size={24} className="text-pink-500/20 group-hover:text-pink-500 transition-colors" />
                    </PulseCard>
                 ))}
              </div>
           </div>
        </section>

        {/* FOOTER / STREAM */}
        <footer id="stream" className="py-40 px-8 bg-[#050608] border-t border-pink-500/20 relative overflow-hidden text-left">
           <div className="absolute inset-0 bg-pink-500 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(0deg, #ec4899, #ec4899 1px, transparent 1px, transparent 2px)', backgroundSize: '100% 3px' }} />
           
           <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 mb-40 text-left">
              <div className="z-10 text-left">
                 <h2 className="text-6xl md:text-9xl font-black italic uppercase tracking-tighter leading-[0.8] mb-12">
                   Contact_<br />
                   <span className="text-pink-500">Core.</span>
                 </h2>
                 <p className="text-xl text-pink-50/40 max-w-sm italic mb-16 border-l-2 border-pink-500 pl-6">
                   Actively seeking high-stakes technical logic and mobile architecture pivots. Initialize communication via secure channel.
                 </p>
                 <div className="flex flex-col gap-4 text-left">
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-pink-500/40">Transmitting_To</span>
                    <a href={`mailto:${data.personal_info.email}`} className="text-2xl md:text-4xl font-black hover:text-pink-500 transition-all text-pink-100">{data.personal_info.email}</a>
                 </div>
              </div>

              <div className="flex flex-col justify-end items-start lg:items-end gap-16 z-10 text-left">
                 <div className="flex gap-20 text-left">
                    <div className="flex flex-col gap-6 text-left">
                       <span className="text-[8px] font-black uppercase tracking-widest text-pink-500/20">Frequency_Map</span>
                       {['Signal', 'Payload', 'Hardware'].map(l => (
                         <a key={l} href={`#${l.toLowerCase()}`} className="text-[10px] font-black uppercase hover:text-pink-500 transition-colors tracking-widest">[{l}]</a>
                       ))}
                    </div>
                    <div className="flex flex-col gap-6 text-left">
                       <span className="text-[8px] font-black uppercase tracking-widest text-pink-500/20">Social_Stream</span>
                       {['GitHub', 'Twitter', 'LinkedIn'].map(l => (
                         <a key={l} href="#" className="text-[10px] font-black uppercase hover:text-pink-500 transition-colors tracking-widest">[{l}]</a>
                       ))}
                    </div>
                 </div>
                 <div className="flex flex-col md:flex-row items-start md:items-center gap-12 text-[10px] font-black uppercase tracking-widest text-pink-500/20 italic">
                    <span>{data.personal_info.location} // B_ADDR: 0x242628</span>
                    <span>© {new Date().getFullYear()} CYBERPULSE_IDENTITY_V1.9</span>
                 </div>
              </div>
           </div>
        </footer>
      </main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;800&family=Outfit:wght@900&display=swap');
        
        body {
          background-color: #050608;
          font-family: 'JetBrains Mono', monospace;
        }

        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }

        .animate-reverse-spin {
          animation: reverse-spin 15s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes reverse-spin {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        ::-webkit-scrollbar {
          width: 2px;
        }
        ::-webkit-scrollbar-track {
          background: #050608;
        }
        ::-webkit-scrollbar-thumb {
          background: #ec4899;
        }
      `}</style>
    </div>
  );
}
