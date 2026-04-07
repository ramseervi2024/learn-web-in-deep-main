import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { portfolioprofile as data } from './PersonalPortfolioData';
import { 
  Zap, Activity, Cpu, Globe, ArrowUpRight, ChevronRight, 
  Layers, Smartphone, Box, Maximize2, Power, 
  Github, Twitter, Linkedin, Mail, MapPin, 
  FastForward, BarChart3, Radio, Terminal
} from 'lucide-react';

const MetricCard = ({ label, value, delay = 0 }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.6 }}
    className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl text-left hover:bg-white/10 transition-all shadow-xl shadow-blue-500/5 group"
  >
    <div className="flex justify-between items-start mb-6 text-left">
       <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform"><BarChart3 size={20} /></div>
       <span className="text-[10px] font-black font-sans text-blue-500/40 uppercase tracking-widest italic">_METRIC_SYNC</span>
    </div>
    <div className="text-4xl font-black font-sans mb-2 tracking-tighter text-white">_{value}</div>
    <div className="text-[10px] font-black uppercase tracking-[0.4em] opacity-30 font-sans italic">{label}</div>
  </motion.div>
);

export default function PersonalPortfolio26() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="bg-[#08080a] text-slate-100 font-sans selection:bg-blue-600/30 selection:text-white min-h-screen relative overflow-x-hidden text-left pb-40">
      {/* Background Glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600 opacity-[0.05] blur-[180px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600 opacity-[0.03] blur-[150px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>

      <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-blue-600 shadow-[0_0_20px_rgba(59,130,246,0.5)] z-[100]" style={{ scaleX }} />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-10 py-6 backdrop-blur-md bg-[#08080a]/40 border-b border-white/5 flex justify-between items-center text-left">
        <div className="flex items-center gap-6">
           <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/30 font-black italic">P</div>
           <span className="text-xs font-black uppercase tracking-[0.5em] italic">{data.personal_info.name} // PRIME_v26</span>
        </div>
        <button className="px-10 py-2.5 bg-white text-black rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all shadow-xl shadow-white/5">
           DEPLOY_HANDSHAKE
        </button>
      </nav>

      <main className="relative z-10 pt-44 px-10 lg:px-32 max-w-7xl mx-auto text-left">
        {/* HERO */}
        <section className="min-h-[80vh] flex flex-col justify-center text-left mb-60">
           <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-blue-600/10 border border-blue-500/20 text-[10px] font-black uppercase tracking-[0.5em] text-blue-400 mb-12 w-fit italic">
              <Radio size={14} className="animate-pulse" /> HIGH_VELOCITY_ENGINE_SYNC: OK
           </div>
           
           <h1 className="text-[10vw] lg:text-[12vw] font-black italic uppercase leading-[0.75] tracking-tighter mb-20 italic text-left">
              Prime<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-200 to-blue-600">
                Digital.</span>
           </h1>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-end text-left">
              <p className="text-2xl lg:text-4xl text-slate-400 font-light leading-snug tracking-tight italic border-l-4 border-blue-600/30 pl-12 text-left italic">
                 {data.hero.subtitle}
              </p>
              <div className="grid grid-cols-2 gap-8 text-left h-full">
                 <MetricCard label="System_SLA" value="99.9%" />
                 <MetricCard label="Active_Nodes" value={data.personal_info.experience_years + "+"} delay={0.1} />
              </div>
           </div>
        </section>

        {/* PROJECTS: Performance Archive */}
        <section className="py-40 text-left">
           <div className="flex flex-col lg:flex-row justify-between items-end gap-16 mb-40 text-left">
              <h2 className="text-[10vw] font-black italic uppercase tracking-tighter italic leading-none text-left">Archive_</h2>
              <p className="text-[11px] font-black uppercase tracking-widest text-blue-500/40 italic max-w-sm text-left mb-6 italic underline decoration-blue-500/20 underline-offset-8 decoration-2 italic">// PERFORMANCE_OPERATIONAL_MANIFEST</p>
           </div>

           <div className="grid grid-cols-1 gap-32 text-left">
              {data.completed_projects.map((p, i) => (
                 <motion.div 
                    key={i}
                    whileHover={{ scale: 0.98 }}
                    className="flex flex-col lg:flex-row gap-20 p-12 lg:p-20 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all rounded-[4rem] group text-left shadow-2xl relative overflow-hidden"
                 >
                    <div className="absolute -top-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity"><FastForward size={300} className="rotate-45" /></div>
                    <div className="lg:w-2/5 aspect-video lg:aspect-square bg-slate-900 overflow-hidden shadow-inner border border-white/5 rounded-[3rem]">
                       <img 
                          src={`https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=800&u=${i}`} 
                          alt={p.project_name} 
                          className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" 
                       />
                    </div>
                    <div className="lg:w-3/5 flex flex-col justify-between items-start text-left">
                       <div className="text-left w-full">
                          <span className="text-[11px] font-black text-blue-600/40 mb-10 block italic font-mono uppercase tracking-[0.6em]">_NODE_DEP_v26.{i}</span>
                          <h3 className="text-5xl lg:text-7xl font-black italic uppercase italic tracking-tighter mb-12 italic leading-tight text-white/90 group-hover:text-white transition-colors">{p.project_name}</h3>
                          <p className="text-2xl text-slate-500 italic leading-snug italic mb-16 italic line-clamp-3 italic border-l border-blue-600 pl-10">{p.description}</p>
                       </div>
                       <div className="flex flex-wrap gap-4 mb-16 justify-start text-left">
                          {p.tech_stack.slice(0, 5).map((tech, j) => (
                             <span key={j} className="text-[10px] font-black uppercase border border-white/10 px-8 py-3 bg-white/5 text-slate-400 rounded-full italic hover:bg-blue-600 hover:text-white transition-all shadow-sm">{tech}</span>
                          ))}
                       </div>
                       <button className="flex items-center gap-10 text-[11px] font-black uppercase tracking-[0.8em] font-sans hover:gap-14 transition-all italic underline decoration-blue-600/20 underline-offset-8">INITIATE_DEEP_SYNC <ArrowUpRight size={24} /></button>
                    </div>
                 </motion.div>
              ))}
           </div>
        </section>

        {/* SERVICES: Digital Transformation */}
        <section className="py-60 bg-blue-600/[0.02] -mx-10 lg:-mx-32 px-10 lg:px-32 text-left">
           <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-40 text-left">
              <div className="lg:w-[45%] text-left">
                 <h2 className="text-[9vw] font-black italic uppercase leading-[0.85] mb-12 italic tracking-tighter italic text-left">Digital<br />Trans_.</h2>
                 <p className="text-2xl text-slate-400 italic font-light leading-relaxed italic mb-20 italic border-l-4 border-blue-600 pl-12 text-left italic">Architecting high-stakes technical bridges for enterprise-scale mobile deployment.</p>
                 <div className="grid grid-cols-1 gap-12 text-left">
                    {data.services.map((s, i) => (
                       <div key={i} className="flex items-center gap-8 group cursor-default text-left">
                          <div className="w-16 h-16 rounded-3xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-inner"><Cpu size={32} /></div>
                          <span className="text-xl font-black uppercase tracking-widest text-slate-100/30 group-hover:text-white transition-all italic">{s.category}</span>
                       </div>
                    ))}
                 </div>
              </div>
              <div className="lg:w-[55%] flex flex-col justify-center text-left">
                 <div className="p-20 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 border border-white/5 rounded-[4rem] relative overflow-hidden text-left shadow-[0_0_100px_rgba(59,130,246,0.1)]">
                    <div className="absolute top-0 right-0 p-12 text-blue-600/5 font-black text-9xl italic font-sans italic opacity-20 pointer-events-none tracking-tighter uppercase italic">SLA</div>
                    <span className="text-[10px] font-black uppercase tracking-[0.8em] text-blue-500/40 mb-12 block italic font-sans italic">_TECHNICAL_SLA_PROTOCOL</span>
                    <h3 className="text-5xl lg:text-7xl font-black italic uppercase italic tracking-tighter mb-16 italic leading-none underline decoration-blue-600/20 underline-offset-[20px] decoration-4 italic">Unmatched<br />Precision.</h3>
                    <ul className="space-y-8 text-left">
                       {data.guarantees.map((g, i) => (
                          <li key={i} className="flex gap-8 items-start text-left">
                             <div className="w-8 h-8 rounded-full border border-blue-600/40 flex items-center justify-center text-blue-400 shrink-0 mt-1 shadow-inner"><Zap size={14} /></div>
                             <div className="text-left">
                                <h4 className="text-lg font-black uppercase tracking-widest text-white/90 mb-2 italic shadow-sm">{g.title}</h4>
                                <p className="text-sm text-slate-500 font-light italic leading-relaxed italic">{g.description}</p>
                             </div>
                          </li>
                       ))}
                    </ul>
                 </div>
              </div>
           </div>
        </section>

        {/* FOOTER: Connect */}
        <footer className="py-80 border-t border-white/5 relative overflow-hidden text-left bg-gradient-to-b from-[#08080a] to-blue-950/20">
           <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-60 text-left">
              <div className="text-left">
                 <h2 className="text-[12vw] font-black italic uppercase tracking-tighter leading-none mb-16 italic text-left">Digital.<br /><span className="text-blue-500 italic underline decoration-blue-600/20 underline-offset-[30px] decoration-4 italic">Primed.</span></h2>
                 <p className="text-2xl text-slate-500 italic leading-snug italic max-w-sm italic mb-20 italic">Initializing high-magnitude technical logic and mobile architecture hubs.</p>
                 <div className="flex flex-col gap-10 text-left">
                    <span className="text-[11px] font-black uppercase tracking-[0.8em] text-blue-500/30 font-sans italic">Operational_F</span>
                    <a href={`mailto:${data.personal_info.email}`} className="text-3xl lg:text-7xl font-black italic text-white hover:text-blue-400 transition-all underline decoration-blue-500/20 underline-offset-[25px] decoration-4 italic leading-tight">{data.personal_info.email}</a>
                 </div>
              </div>

              <div className="flex flex-col justify-center items-start lg:items-end gap-32 text-left">
                 <div className="flex gap-40 text-left">
                    <div className="flex flex-col gap-10 text-left shadow-2xl">
                       <span className="text-[11px] font-black uppercase tracking-widest text-blue-500/20 font-sans italic">Network</span>
                       {['Twitter', 'GitHub', 'LinkedIn'].map(l => (
                         <a key={l} href="#" className="text-xs font-black uppercase text-slate-400 hover:text-blue-400 transition-colors font-sans italic tracking-widest">[{l}]</a>
                       ))}
                    </div>
                    <div className="flex flex-col gap-10 text-left shadow-xl">
                       <span className="text-[11px] font-black uppercase tracking-widest text-blue-500/20 font-sans italic">Hub</span>
                       {['Studio', 'Archive', 'Process'].map(l => (
                         <a key={l} href={`#${l.toLowerCase()}`} className="text-xs font-black uppercase text-slate-400 hover:text-blue-400 transition-colors font-sans italic tracking-widest">[{l}]</a>
                       ))}
                    </div>
                 </div>
                 <div className="flex flex-col lg:flex-row items-end gap-16 text-[11px] font-black uppercase tracking-[0.4em] text-white/5 font-sans italic">
                    <span>{data.personal_info.location} // B_ADDR: 0x242628</span>
                    <span>© {new Date().getFullYear()} // PRIME_DIGITAL_SUITE_V26</span>
                 </div>
              </div>
           </div>
        </footer>
      </main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@200;900&family=Space+Grotesk:wght@300;900&display=swap');
        
        body {
          background-color: #08080a;
          font-family: 'Space Grotesk', sans-serif;
        }

        .font-sans {
          font-family: 'Outfit', sans-serif;
        }

        ::-webkit-scrollbar {
          width: 0px;
        }
      `}</style>
    </div>
  );
}
