import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, AnimatePresence, useInView } from 'framer-motion';
import { portfolioprofile as data } from './PersonalPortfolioData';
import { 
  Network, Zap, Cpu, Database, Globe, 
  GitBranch, Share2, MessageSquare, Mail, Github, Twitter, 
  Linkedin, ArrowRight, ExternalLink, Box, Activity,
  Maximize2, Power, Layers, ChevronRight
} from 'lucide-react';

const NexusNode = ({ x, y, size = 4, delay = 0 }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
      opacity: [0, 0.4, 0.1, 0.3, 0],
      scale: [0, 1.5, 0.8, 1.2, 0],
    }}
    transition={{ 
      duration: 6, 
      repeat: Infinity, 
      delay,
      ease: "easeInOut" 
    }}
    className="absolute rounded-full bg-purple-500 blur-[2px] shadow-[0_0_15px_rgba(168,85,247,0.6)]"
    style={{ left: `${x}%`, top: `${y}%`, width: size, height: size }}
  />
);

const ConnectionLine = ({ x1, y1, x2, y2, delay = 0 }) => (
  <motion.div 
    initial={{ width: 0, opacity: 0 }}
    animate={{ width: `${Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2))}%`, opacity: [0, 0.2, 0] }}
    transition={{ duration: 4, repeat: Infinity, delay, ease: "linear" }}
    className="absolute bg-gradient-to-r from-purple-500/20 via-purple-500 to-purple-500/20 h-[1px] origin-left pointer-events-none"
    style={{ 
      left: `${x1}%`, 
      top: `${y1}%`, 
      transform: `rotate(${Math.atan2(y2-y1, x2-x1) * 180 / Math.PI}deg)` 
    }}
  />
);

export default function PersonalPortfolio22() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  
  const nodes = Array.from({ length: 12 }).map((_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 2 + Math.random() * 4,
    delay: i * 0.5
  }));

  return (
    <div className="bg-[#02040a] text-purple-50 font-sans selection:bg-purple-500/30 selection:text-white min-h-screen relative overflow-x-hidden text-left pb-20">
      {/* Background Nexus Grid */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#0f172a_0%,#02040a_100%)] opacity-40" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#a855f7 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        {nodes.map((node, i) => (
          <React.Fragment key={i}>
            <NexusNode {...node} />
            {i < nodes.length - 1 && (
              <ConnectionLine 
                x1={node.x} y1={node.y} 
                x2={nodes[i+1].x} y2={nodes[i+1].y} 
                delay={node.delay} 
              />
            )}
          </React.Fragment>
        ))}
      </div>

      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-purple-400 to-purple-600 z-[100]" style={{ scaleX }} />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 backdrop-blur-md bg-[#02040a]/40 border-b border-white/5 text-left">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-left">
           <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-2xl bg-purple-600/10 border border-purple-500/30 flex items-center justify-center text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                 <GitBranch size={20} />
              </div>
              <span className="text-xs font-black uppercase tracking-[0.4em] text-white/80 italic">{data.personal_info.name}</span>
           </div>
           
           <div className="hidden lg:flex gap-12 text-[10px] uppercase font-black tracking-widest text-white/30">
              {['Nexus', 'Archive', 'Protocol', 'Link'].map(item => (
                <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-purple-400 transition-colors">[{item}]</a>
              ))}
           </div>

           <button className="px-8 py-2 bg-purple-600 text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-purple-500 transition-all shadow-[0_0_20px_rgba(168,85,247,0.4)]">
              SYNC_READY
           </button>
        </div>
      </nav>

      <main className="relative z-10 pt-40 px-8 lg:px-32 max-w-7xl mx-auto text-left">
        {/* HERO */}
        <section id="nexus" className="min-h-[70vh] flex flex-col justify-center text-left">
           <div className="inline-flex items-center gap-3 px-6 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-[10px] font-black uppercase tracking-[0.4em] text-purple-400 mb-12 w-fit">
              <Network size={14} className="animate-pulse" /> DEV_NEXUS_v22.0_INITIALIZED
           </div>
           
           <h1 className="text-7xl md:text-9xl font-black italic uppercase leading-[0.8] tracking-tighter mb-12 italic">
              Dev<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-600 to-indigo-600">
                Nexus.</span>
           </h1>

           <p className="text-2xl md:text-4xl text-white/40 font-light max-w-3xl leading-relaxed mb-20 italic">
              {data.hero.subtitle}
           </p>

           <div className="flex flex-wrap gap-12 items-center text-left">
              <button className="px-14 py-7 bg-purple-600 text-white font-black text-xs uppercase tracking-[0.6em] rounded-3xl hover:bg-purple-500 transition-all shadow-[0_0_40px_rgba(168,85,247,0.4)]">
                 INITIATE_SYNC
              </button>
              <div className="flex gap-20 text-left">
                 <div className="flex flex-col text-left">
                    <span className="text-5xl font-black text-white">{data.personal_info.experience_years}Y</span>
                    <span className="text-[10px] uppercase font-bold text-white/20 tracking-[0.5em] italic">Operational_V</span>
                 </div>
                 <div className="flex flex-col text-left">
                    <span className="text-5xl font-black text-purple-400">05+</span>
                    <span className="text-[10px] uppercase font-bold text-white/20 tracking-[0.5em] italic">Enterprise_Hub</span>
                 </div>
              </div>
           </div>
        </section>

        {/* ARCHIVE: Projects */}
        <section id="archive" className="py-40 text-left">
           <div className="flex flex-col md:flex-row justify-between items-end gap-16 mb-40 text-left">
              <h2 className="text-6xl md:text-[8vw] font-black italic uppercase tracking-tighter italic">Archive_</h2>
              <p className="text-[11px] font-black uppercase tracking-widest text-purple-500/40 italic max-w-sm italic">// OPERATIONAL_LOG_ARCHIVE</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-left">
              {data.completed_projects.map((p, i) => (
                 <motion.div 
                    key={i}
                    whileHover={{ y: -10 }}
                    className="p-16 rounded-[4rem] border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all flex flex-col justify-between h-[650px] shadow-2xl relative overflow-hidden group text-left"
                 >
                    <div className="absolute top-0 right-0 p-10 font-black text-white/5 text-9xl italic group-hover:text-white/10 transition-colors uppercase italic pointer-events-none">NODE_{i}</div>
                    <div className="text-left relative z-10">
                       <span className="text-[11px] font-black text-purple-500/40 mb-12 block italic">_PROTOCOL_v{i}.22</span>
                       <h3 className="text-4xl md:text-5xl font-black italic uppercase italic text-white mb-10 tracking-tighter leading-none italic">{p.project_name}</h3>
                       <p className="text-xl text-white/30 italic leading-relaxed italic mb-12 italic line-clamp-4 italic border-l-2 border-purple-500/20 pl-8">
                          {p.description}
                       </p>
                    </div>
                    <div className="pt-12 border-t border-white/5 flex flex-col gap-10 text-left relative z-10">
                       <div className="flex flex-wrap gap-3">
                          {p.tech_stack.slice(0, 4).map((tech, j) => (
                             <span key={j} className="text-[10px] font-black uppercase border border-white/10 px-6 py-2 bg-white/5 text-white/40 rounded-full italic">{tech}</span>
                          ))}
                       </div>
                       <button className="flex items-center gap-6 text-xs font-black uppercase text-purple-400 group-hover:gap-8 transition-all italic underline decoration-purple-500/20 underline-offset-8">DEEP_SCAN_LOGS <ChevronRight size={20} /></button>
                    </div>
                 </motion.div>
              ))}
           </div>
        </section>

        {/* PROTOCOL: Technology Stack */}
        <section id="protocol" className="py-40 bg-purple-500/[0.02] -mx-8 lg:-mx-32 px-8 lg:px-32 text-left">
           <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-32 text-left">
              <div className="lg:w-1/3 text-left">
                 <h2 className="text-5xl md:text-7xl font-black italic uppercase leading-none mb-10 italic">Nexus<br />Protocol_</h2>
                 <p className="text-white/30 italic leading-relaxed italic mb-16 italic">Specialized engineering vectors for decentralized enterprise-ready mobile deployments.</p>
                 <div className="space-y-6 text-left">
                    {data.services.map((s, i) => (
                       <div key={i} className="flex items-center gap-6 group cursor-default text-left">
                          <div className="w-12 h-[1px] bg-purple-500/40 group-hover:w-24 group-hover:bg-purple-400 transition-all" />
                          <span className="text-[11px] font-black uppercase tracking-widest text-white/40 group-hover:text-white transition-all underline decoration-purple-500/20 underline-offset-4 decoration-2 italic">{s.category}</span>
                       </div>
                    ))}
                 </div>
              </div>

              <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-10 text-left">
                 {data.technology_stack.mobile.concat(data.technology_stack.backend).map((tech, i) => (
                    <div key={i} className="p-12 border border-white/5 rounded-[3rem] bg-white/[0.02] hover:bg-purple-600/10 hover:border-purple-500/20 transition-all group text-left">
                       <div className="flex justify-between items-start mb-8 text-left">
                          <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-purple-400 shadow-inner group-hover:scale-110 transition-transform"><Cpu size={28} /></div>
                          <span className="text-[10px] font-black text-white/10 italic">_CORE_V{i}</span>
                       </div>
                       <h3 className="text-2xl font-black italic uppercase italic tracking-tighter italic text-white/80 group-hover:text-white transition-colors italic">{tech}</h3>
                       <div className="h-1 w-full bg-white/5 mt-8 rounded-full overflow-hidden">
                          <div className="h-full bg-purple-600 w-full opacity-20 group-hover:opacity-100 transition-all duration-1000" />
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* LINK: Footer */}
        <footer id="link" className="py-60 border-t border-white/5 relative overflow-hidden text-left">
           <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-purple-600 opacity-[0.03] blur-[200px] rounded-full pointer-events-none" />
           
           <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-40 text-left">
              <div className="text-left">
                 <h2 className="text-6xl md:text-[10vw] font-black italic uppercase tracking-tighter leading-none mb-12 italic">Direct_<br /><span className="text-purple-500 underline decoration-purple-500/20 underline-offset-[20px]">Link.</span></h2>
                 <p className="text-2xl text-white/20 italic leading-snug italic max-w-sm italic mb-20 italic underline decoration-purple-500/20 underline-offset-8 decoration-2 italic">Synchronizing high-magnitude technical logic with business objectives. Connect for strategic mobile architecture.</p>
                 <div className="flex flex-col gap-6 text-left">
                    <span className="text-[11px] font-black uppercase tracking-[0.8em] text-white/10 italic">Transmission_Frequency</span>
                    <a href={`mailto:${data.personal_info.email}`} className="text-3xl md:text-5xl font-black italic text-white hover:text-purple-400 transition-all underline underline-offset-[16px] decoration-purple-500/20 italic">{data.personal_info.email}</a>
                 </div>
              </div>

              <div className="flex flex-col justify-center items-start lg:items-end gap-24 text-left">
                 <div className="flex gap-40 text-left">
                    <div className="flex flex-col gap-10 text-left">
                       <span className="text-[11px] font-black uppercase tracking-widest text-white/10 italic">_Directories</span>
                       {['Nexus', 'Archive', 'Protocol'].map(l => (
                         <a key={l} href={`#${l.toLowerCase()}`} className="text-xs font-black uppercase tracking-widest text-white/40 hover:text-purple-400 transition-colors">[{l}]</a>
                       ))}
                    </div>
                    <div className="flex flex-col gap-10 text-left">
                       <span className="text-[11px] font-black uppercase tracking-widest text-white/10 italic">_Signals</span>
                       {['Twitter', 'GitHub', 'LinkedIn'].map(l => (
                         <a key={l} href="#" className="text-xs font-black uppercase tracking-widest text-white/40 hover:text-purple-400 transition-colors">[{l}]</a>
                       ))}
                    </div>
                 </div>
                 <div className="flex flex-col md:flex-row items-start md:items-center gap-12 text-[11px] font-black uppercase text-white/10 tracking-[0.5em] italic">
                    <span>{data.personal_info.location} // HQ_SYNC</span>
                    <span>© {new Date().getFullYear()} // DEV_NEXUS_v22</span>
                 </div>
              </div>
           </div>
        </footer>
      </main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@200;400;900&family=Space+Grotesk:wght@300;500;900&display=swap');
        
        body {
          background-color: #02040a;
          font-family: 'Space Grotesk', sans-serif;
        }

        ::-webkit-scrollbar {
          width: 0px;
        }

        @keyframes pulse-node {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.5); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
