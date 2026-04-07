import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion';
import { portfolioprofile as data } from './PersonalPortfolioData';
import { 
  Zap, Brain, Network, Share2, Mail, Github, Twitter, 
  Linkedin, ArrowRight, ExternalLink, Globe, ChevronDown,
  Cpu, Layers, Smartphone, Code
} from 'lucide-react';

const NeuroNode = ({ delay = 0, x, y }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
      opacity: [0, 1, 0.4, 0.8, 0],
      scale: [0, 1.2, 0.8, 1, 0],
    }}
    transition={{ 
      duration: 4, 
      repeat: Infinity, 
      delay,
      ease: "easeInOut" 
    }}
    className="absolute w-2 h-2 rounded-full bg-blue-400 blur-[2px] shadow-[0_0_10px_rgba(96,165,250,0.8)]"
    style={{ left: `${x}%`, top: `${y}%` }}
  />
);

const SynapticLine = ({ x1, y1, x2, y2, delay = 0 }) => (
  <motion.div 
    initial={{ pathLength: 0, opacity: 0 }}
    animate={{ pathLength: [0, 1, 1], opacity: [0, 0.4, 0] }}
    transition={{ duration: 3, repeat: Infinity, delay, ease: "linear" }}
    className="absolute pointer-events-none"
    style={{ 
      width: '1px',
      height: '1px',
      left: `${x1}%`,
      top: `${y1}%`,
      background: 'linear-gradient(90deg, transparent, #60a5fa, transparent)',
      transform: `rotate(${Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI}deg)`,
      transformOrigin: '0 0',
      width: `${Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))}%`
    }}
  />
);

export default function PersonalPortfolio17() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const [activeTab, setActiveTab] = useState(0);

  const backgroundNodes = Array.from({ length: 15 }).map((_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: i * 0.5
  }));

  return (
    <div className="bg-[#020617] text-slate-200 font-sans selection:bg-blue-500/30 selection:text-white min-h-screen relative overflow-hidden text-left">
      {/* Neuro Grid Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1e293b_0%,#020617_100%)]" />
        <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'radial-gradient(#334155 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        {backgroundNodes.map((node, i) => (
          <React.Fragment key={i}>
            <NeuroNode x={node.x} y={node.y} delay={node.delay} />
            {i < backgroundNodes.length - 1 && (
              <SynapticLine 
                x1={node.x} y1={node.y} 
                x2={backgroundNodes[i+1].x} y2={backgroundNodes[i+1].y} 
                delay={node.delay} 
              />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-[100]" style={{ scaleX }} />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 backdrop-blur-md bg-[#020617]/40 border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/50 flex items-center justify-center text-blue-400">
              <Brain size={20} />
            </div>
            <span className="text-sm font-black uppercase tracking-[0.3em] font-mono">{data.personal_info.name}</span>
          </div>
          <div className="hidden md:flex gap-10 text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">
            <a href="#about" className="hover:text-blue-400 transition-colors">Neural_Path</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Cognitive_Output</a>
            <a href="#stack" className="hover:text-blue-400 transition-colors">Synaptic_Stack</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Direct_Link</a>
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        {/* HERO */}
        <section className="min-h-screen flex items-center px-8 lg:px-32 pt-20">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[10px] font-black uppercase tracking-widest mb-8">
                <Network size={12} /> GLOBAL_SQUAD_READY
              </div>
              <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter uppercase mb-8">
                Neuro<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400">Architect</span>
              </h1>
              <p className="text-xl text-slate-400 font-light leading-relaxed max-w-lg mb-12">
                {data.hero.subtitle}
              </p>
              <div className="flex flex-wrap gap-6 items-center">
                <button className="px-10 py-5 bg-blue-600 text-white rounded-xl text-[10px] font-black uppercase tracking-[0.3em] hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                  Initialize_Protocol
                </button>
                <div className="flex gap-4">
                  <a href="#" className="p-4 rounded-xl border border-slate-800 hover:border-blue-500/50 transition-colors text-slate-400 hover:text-blue-400">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="p-4 rounded-xl border border-slate-800 hover:border-blue-500/50 transition-colors text-slate-400 hover:text-blue-400">
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </motion.div>

            <div className="relative hidden lg:block">
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="w-full aspect-square rounded-3xl bg-blue-500/5 border border-blue-500/20 backdrop-blur-sm relative flex items-center justify-center"
              >
                <Brain size={200} className="text-blue-500/20" />
                {/* Floating Stat Cards */}
                <motion.div 
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -right-10 top-20 p-6 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl shadow-2xl text-left"
                >
                  <span className="text-3xl font-black text-blue-400 block mb-1">{data.personal_info.experience_years}+</span>
                  <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Yrs Architecture</span>
                </motion.div>
                <motion.div 
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="absolute -left-10 bottom-20 p-6 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl shadow-2xl text-left"
                >
                  <span className="text-3xl font-black text-cyan-400 block mb-1">5+</span>
                  <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Enterprise Hubs</span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-40 px-8 lg:px-32 relative">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-24 text-left">
              <div className="max-w-2xl text-left">
                <span className="text-[10px] uppercase font-black tracking-[0.5em] text-blue-500 mb-4 block">SYNAPTIC_OUTPUT</span>
                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">Execution_Archive.</h2>
              </div>
              <p className="text-slate-500 max-w-xs text-left mb-4 italic">
                Strategic technical audits and modular high-load deployments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.completed_projects.map((project, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  className="group relative p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-all h-[500px] flex flex-col justify-between overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl rounded-full" />
                  
                  <div className="relative text-left">
                    <span className="text-[10px] font-mono text-blue-400/50 mb-6 block border-l-2 border-blue-500/30 pl-4">NODE_v{100 + i}</span>
                    <h3 className="text-3xl font-black italic tracking-tighter uppercase mb-6 group-hover:text-blue-400 transition-colors">
                      {project.project_name}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed line-clamp-4">
                      {project.description}
                    </p>
                  </div>

                  <div className="relative pt-8 border-t border-slate-800 text-left">
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech_stack.slice(0, 3).map((tech, j) => (
                        <span key={j} className="text-[8px] uppercase tracking-widest font-black px-3 py-1 bg-slate-800 rounded-md text-slate-500 border border-slate-700">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <button className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-blue-400 group-hover:gap-5 transition-all">
                      LOAD_ANALYSIS <ArrowRight size={14} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TECH STACK / NEURAL LAYERS */}
        <section id="stack" className="py-40 px-8 lg:px-32 bg-slate-900/20 text-left">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
            <div className="lg:w-1/3 text-left">
              <span className="text-[10px] uppercase font-black tracking-[0.5em] text-blue-500 mb-4 block">TECH_HIERARCHY</span>
              <h2 className="text-5xl font-black uppercase mb-12">Synaptic<br />Stack.</h2>
              <p className="text-slate-400 font-light leading-relaxed mb-8 italic">
                Advanced performance pipelines engineered for zero-latency mobile ecosystems.
              </p>
              <div className="flex flex-col gap-4">
                 {['Mobile Labs', 'Backend Core', 'Cloud Infrastructure', 'Neural Intelligence'].map((item, i) => (
                   <div 
                    key={i}
                    onClick={() => setActiveTab(i)}
                    className={`p-6 rounded-2xl cursor-pointer transition-all border ${activeTab === i ? 'bg-blue-600/10 border-blue-500/50' : 'bg-transparent border-slate-800 text-slate-500 hover:border-slate-700'}`}
                   >
                     <span className="text-xs font-black uppercase tracking-widest">{item}</span>
                   </div>
                 ))}
              </div>
            </div>

            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {(activeTab === 0 ? data.technology_stack.mobile : 
                  activeTab === 1 ? data.technology_stack.backend :
                  activeTab === 2 ? data.technology_stack.cloud :
                  data.technology_stack.frontend).map((tech, i) => (
                  <motion.div
                    key={tech + i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="p-8 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between group hover:bg-slate-800 transition-all text-left"
                  >
                    <div className="flex items-center gap-6">
                      <div className="w-2 h-10 bg-blue-500/20 rounded-full group-hover:bg-blue-400 group-hover:scale-y-125 transition-all" />
                      <div>
                        <span className="text-lg font-black text-slate-100 block">{tech}</span>
                        <span className="text-[9px] uppercase font-bold text-slate-500 tracking-widest italic">Core Mastery</span>
                      </div>
                    </div>
                    <Cpu size={20} className="text-slate-700 group-hover:text-blue-500 transition-colors" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TRUST / GUARANTEES */}
        <section className="py-40 px-8 lg:px-32 text-left">
          <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
            <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-blue-500 to-transparent mb-20" />
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-20 leading-none">Architectural_<br />Guarantees.</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left w-full">
              {data.guarantees.map((g, i) => (
                <div key={i} className="p-12 rounded-3xl bg-slate-900/40 border border-slate-800 group hover:border-blue-500/30 transition-all relative">
                   <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                   <span className="text-[10px] font-mono text-blue-500 mb-8 block">PRTCL_0{i+1}</span>
                   <h3 className="text-2xl font-black italic uppercase mb-6 italic tracking-tight">{g.title}</h3>
                   <p className="text-slate-500 text-sm leading-relaxed">{g.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer id="contact" className="py-40 px-8 lg:px-32 bg-[#010411] border-t border-slate-900 relative overflow-hidden text-left">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full" />
          
          <div className="max-w-7xl mx-auto text-left">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 mb-40">
                <div className="text-left">
                   <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter opacity-10 hover:opacity-100 transition-opacity duration-1000 cursor-default mb-10 leading-none italic">Connect.</h2>
                   <p className="text-xl text-slate-500 max-w-sm mb-12">
                     Currently available for strategic mobile partnerships and high-stakes product engineering.
                   </p>
                   <div className="flex flex-col gap-6">
                      <div className="flex flex-col gap-2">
                         <span className="text-[10px] font-black uppercase tracking-widest text-blue-500 italic">Direct_Tunnel</span>
                         <a href={`mailto:${data.personal_info.email}`} className="text-2xl md:text-4xl font-bold hover:text-blue-400 transition-colors underline decoration-blue-500/20 underline-offset-8 font-mono">{data.personal_info.email}</a>
                      </div>
                   </div>
                </div>

                <div className="flex flex-col justify-end items-start md:items-end gap-20">
                   <div className="grid grid-cols-2 gap-20">
                      <div className="flex flex-col gap-4">
                         <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Navigation</span>
                         {['Neural_Path', 'Cognitive_Output', 'Synaptic_Stack'].map(item => (
                           <a key={item} href={`#${item.toLowerCase()}`} className="text-xs font-bold hover:text-blue-400 transition-colors uppercase tracking-widest text-slate-400">{item}</a>
                         ))}
                      </div>
                      <div className="flex flex-col gap-4">
                         <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Connect</span>
                         {['Github', 'Twitter', 'LinkedIn'].map(item => (
                           <a key={item} href="#" className="text-xs font-bold hover:text-blue-400 transition-colors uppercase tracking-widest text-slate-400">{item}</a>
                         ))}
                      </div>
                   </div>
                   <div className="w-full h-[1px] bg-slate-900 md:hidden" />
                   <div className="flex gap-12 text-[10px] font-black text-slate-600 uppercase tracking-widest">
                      <span>{data.personal_info.location}</span>
                      <span>{new Date().getFullYear()} © RPS HUB</span>
                   </div>
                </div>
             </div>
          </div>
        </footer>
      </main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;500;700&family=Space+Grotesk:wght@300;500;900&display=swap');
        
        body {
          background-color: #020617;
          font-family: 'Space Grotesk', sans-serif;
        }

        .font-mono {
          font-family: 'JetBrains+Mono', monospace;
        }

        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: #020617;
        }
        ::-webkit-scrollbar-thumb {
          background: #1e293b;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #334155;
        }
      `}</style>
    </div>
  );
}
