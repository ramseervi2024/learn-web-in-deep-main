import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion';
import { portfolioprofile as data } from './PersonalPortfolioData';
import { 
  Database, Globe, Server, Code, Terminal, 
  ArrowRight, ExternalLink, Box, Activity, 
  ChevronRight, ArrowDown, MapPin, Mail, Github, Twitter, Linkedin,
  Cpu, Zap, Search, Play, Clipboard, Key, ShieldCheck, HardDrive
} from 'lucide-react';

const EndpointBlock = ({ method = "GET", path = "/api/v24/resource", children, status = "200 OK" }) => (
  <div className="bg-[#0f1115] border border-blue-500/20 rounded-xl overflow-hidden mb-12 shadow-2xl group hover:border-blue-500/40 transition-all text-left">
    <div className="bg-blue-500/5 px-6 py-4 border-b border-blue-500/10 flex flex-wrap justify-between items-center gap-4 text-left">
      <div className="flex items-center gap-4 text-left">
        <span className={`px-3 py-1 rounded text-[10px] font-black italic ${method === "GET" ? "bg-emerald-500/20 text-emerald-400" : method === "POST" ? "bg-blue-500/20 text-blue-400" : "bg-amber-500/20 text-amber-400"}`}>{method}</span>
        <span className="text-xs font-mono text-blue-500 font-bold italic tracking-tighter truncate">{path}</span>
      </div>
      <div className="flex items-center gap-4 text-left">
         <span className="text-[10px] font-black text-emerald-500/60 uppercase tracking-widest">{status}</span>
         <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_#10b981]" />
      </div>
    </div>
    <div className="p-8 text-left">
       {children}
    </div>
  </div>
);

const JSONBlock = ({ content }) => (
  <div className="bg-black/40 rounded-lg p-6 font-mono text-[11px] text-blue-400/80 border border-white/5 relative group/json overflow-x-auto text-left">
    <div className="absolute top-4 right-4 opacity-0 group-hover/json:opacity-100 transition-opacity">
       <Clipboard size={14} className="cursor-pointer hover:text-blue-400" />
    </div>
    <pre className="whitespace-pre-wrap leading-relaxed shadow-sm">
      {JSON.stringify(content, null, 2)}
    </pre>
  </div>
);

export default function PersonalPortfolio24() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="bg-[#050608] text-blue-50 font-sans selection:bg-blue-500/30 selection:text-white min-h-screen relative overflow-x-hidden text-left pb-40">
      {/* Background Data Streams */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#0f172a_0%,#050608_100%)] opacity-20" />
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
      </div>

      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-blue-500 shadow-[0_0_15px_#3b82f6] z-[100]" style={{ scaleX }} />

      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-4 backdrop-blur-md bg-[#050608]/80 border-b border-blue-500/20 text-left">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-left">
           <div className="flex items-center gap-6">
              <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-500 shadow-inner">
                 <Server size={22} />
              </div>
              <div className="flex flex-col text-left">
                 <span className="text-xs font-black uppercase tracking-[0.3em] text-white italic">{data.personal_info.name}</span>
                 <span className="text-[9px] font-black uppercase tracking-widest text-blue-500/40 italic">API_CORE_v24.0</span>
              </div>
           </div>
           
           <div className="hidden lg:flex gap-10 text-[9px] uppercase font-black tracking-widest text-blue-500/30">
              {['Endpoints', 'Schemas', 'Payload', 'Auth'].map(item => (
                <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-blue-400 transition-colors">/{item}</a>
              ))}
           </div>

           <div className="flex items-center gap-4 text-left">
              <button className="p-2.5 bg-blue-500/10 border border-blue-500/20 rounded-lg text-blue-500 hover:bg-blue-500 hover:text-white transition-all shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                <Play size={14} fill="currentColor" />
              </button>
           </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-8 pt-40 text-left lg:px-32">
        {/* HERO SECTION */}
        <section id="endpoints" className="min-h-[75vh] flex flex-col justify-center text-left mb-40">
           <div className="inline-flex items-center gap-3 px-5 py-2 border border-blue-500/20 bg-blue-500/5 rounded-lg text-[10px] font-black uppercase tracking-[0.4em] text-blue-500 mb-12 w-fit italic">
              <Activity size={14} className="animate-pulse" /> SYSTEM_HEARTBEAT_DETECTED: STABLE
           </div>
           
           <h1 className="text-7xl md:text-[10vw] font-black italic uppercase leading-[0.8] tracking-tighter mb-16 italic text-left">
              API<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-600">
                Core.</span>
           </h1>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end text-left">
              <p className="text-xl md:text-3xl text-white/40 font-light leading-relaxed italic border-l-2 border-blue-500/20 pl-8 text-left italic">
                 {data.hero.subtitle}
              </p>
              <div className="flex flex-col gap-10 text-left">
                 <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-8 shadow-inner text-left">
                    <div className="flex items-center gap-4 mb-6 text-left">
                       <Database size={18} className="text-blue-400" />
                       <span className="text-[10px] font-black uppercase tracking-widest text-blue-400 shadow-sm">Response_Head</span>
                    </div>
                    <div className="space-y-3">
                       <span className="text-[10px] font-mono text-blue-500/60 block">// Experience_v: {data.personal_info.experience_years}+</span>
                       <span className="text-[11px] font-mono text-emerald-400 block italic leading-none">{data.personal_info.location} // 0x4851</span>
                    </div>
                 </div>
                 <button className="px-12 py-5 bg-blue-600 text-white font-black text-xs uppercase tracking-[0.5em] rounded-xl hover:bg-blue-500 transition-all shadow-[0_0_30px_rgba(59,130,246,0.3)] w-fit flex items-center gap-4">
                    RUN_INITIALIZATION <ChevronRight size={18} />
                 </button>
              </div>
           </div>
        </section>

        {/* SCHEMAS: Projects */}
        <section id="schemas" className="py-20 text-left">
           <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-32 text-left">
              <h2 className="text-5xl md:text-[8vw] font-black italic uppercase tracking-tighter italic text-left">Schemas_</h2>
              <p className="text-[10px] font-black uppercase tracking-widest text-blue-500/40 italic max-w-xs text-left italic font-mono">// CURATED_PROJECT_DATA_MODELS</p>
           </div>

           <div className="grid grid-cols-1 gap-12 text-left">
              {data.completed_projects.map((p, i) => (
                <EndpointBlock key={i} method={i % 2 === 0 ? "GET" : "POST"} path={`/v24/project/${p.project_name.toLowerCase().replace(/\s+/g, '_')}`} status="200 OK">
                   <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start text-left">
                      <div className="text-left py-4">
                         <h3 className="text-3xl font-black italic uppercase italic text-white mb-6 italic tracking-tight">{p.project_name}</h3>
                         <p className="text-lg text-white/40 italic leading-relaxed italic mb-10 italic border-l border-blue-500/20 pl-6 italic">
                            {p.description}
                         </p>
                         <div className="flex flex-wrap gap-3 mb-10 text-left">
                            {p.tech_stack.slice(0, 4).map((tech, j) => (
                               <span key={j} className="text-[9px] font-black uppercase border border-white/5 px-5 py-2 bg-white/5 text-blue-500/60 rounded-lg italic">_{tech}</span>
                            ))}
                         </div>
                         <button className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.5em] text-blue-500 hover:text-white transition-all underline decoration-blue-500/20 underline-offset-8">VIEW_RAW_PAYLOAD <ChevronRight size={18} /></button>
                      </div>
                      <JSONBlock content={p} />
                   </div>
                </EndpointBlock>
              ))}
           </div>
        </section>

        {/* PAYLOAD: Services / Stack */}
        <section id="payload" className="py-40 bg-blue-500/[0.02] -mx-8 lg:-mx-32 px-8 lg:px-32 text-left">
           <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-32 text-left">
              <div className="lg:w-1/3 text-left">
                 <h2 className="text-5xl md:text-6xl font-black italic uppercase leading-[0.85] mb-12 italic underline decoration-blue-500/20 underline-offset-[16px] decoration-4 italic">Core_Payload<br />Specifications.</h2>
                 <p className="text-xl text-white/30 italic leading-relaxed italic mb-16 italic">Architecting the bridge between mission-critical backend logic and high-performance mobile ecosystems.</p>
                 <div className="grid grid-cols-1 gap-6 text-left">
                    {data.services.map((s, i) => (
                       <div key={i} className="flex items-center gap-6 group cursor-default text-left">
                          <div className="w-12 h-12 bg-blue-600/10 border border-blue-500/20 rounded-xl flex items-center justify-center text-blue-500 group-hover:scale-110 transition-all"><Cpu size={24} /></div>
                          <span className="text-[11px] font-black uppercase tracking-widest text-white/40 group-hover:text-blue-400 transition-all italic tracking-tighter italic">{s.category}</span>
                       </div>
                    ))}
                 </div>
              </div>

              <div className="lg:w-2/3 text-left">
                 <JSONBlock content={{
                    architecture: "Full-Stack Distributed",
                    v_engine: "24.0.0-STABLE",
                    protocols: data.technology_stack,
                    capabilities: data.services.map(s => s.features).flat()
                 }} />
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12 text-left">
                    {data.guarantees.map((g, i) => (
                       <div key={i} className="p-8 border border-white/5 rounded-2xl bg-white/[0.02] hover:bg-blue-600/10 transition-all group text-left shadow-lg">
                          <div className="flex items-center gap-4 mb-6 text-left">
                             <ShieldCheck size={20} className="text-emerald-500/40" />
                             <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500/60 italic">SLO_CONFIRMED_{i}</span>
                          </div>
                          <h3 className="text-xl font-black italic uppercase italic text-white/80 group-hover:text-white transition-colors italic leading-none">{g.title}</h3>
                          <p className="text-[11px] text-white/30 italic leading-relaxed mt-4 italic">{g.description}</p>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* AUTH: Footer */}
        <footer id="auth" className="py-60 border-t border-white/5 relative overflow-hidden text-left bg-[#050608]">
           <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-40 text-left">
              <div className="text-left">
                 <h2 className="text-7xl md:text-[12vw] font-black italic uppercase tracking-tighter leading-none mb-12 italic">Auth_<br /><span className="text-blue-500 italic underline decoration-blue-500/20 underline-offset-[20px] decoration-4 italic leading-tight">Key.</span></h2>
                 <p className="text-2xl text-white/20 italic leading-snug italic max-w-sm italic mb-24 italic border-l-4 border-blue-500/20 pl-10 italic">Initializing high-stakes technical logic and mobile architecture pivots through secure channels.</p>
                 <div className="flex flex-col gap-6 text-left">
                    <span className="text-[11px] font-black uppercase tracking-[0.8em] text-white/10 italic">Channel_B_Addr</span>
                    <a href={`mailto:${data.personal_info.email}`} className="text-3xl md:text-6xl font-black italic text-white hover:text-blue-400 transition-all underline underline-offset-[16px] decoration-blue-500/20 italic leading-none">{data.personal_info.email}</a>
                 </div>
              </div>

              <div className="flex flex-col justify-center items-start lg:items-end gap-24 text-left">
                 <div className="flex gap-40 text-left">
                    <div className="flex flex-col gap-10 text-left shadow-2xl">
                       <span className="text-[11px] font-black uppercase tracking-widest text-white/10 italic">_Endpoints</span>
                       {['Endpoints', 'Schemas', 'Payload'].map(l => (
                         <a key={l} href={`#${l.toLowerCase()}`} className="text-xs font-black uppercase tracking-widest text-white/40 hover:text-blue-400 transition-colors italic">/{l}</a>
                       ))}
                    </div>
                    <div className="flex flex-col gap-10 text-left">
                       <span className="text-[11px] font-black uppercase tracking-widest text-white/10 italic">_Transmitters</span>
                       {['Twitter', 'GitHub', 'LinkedIn'].map(l => (
                         <a key={l} href="#" className="text-xs font-black uppercase tracking-widest text-white/40 hover:text-blue-400 transition-colors italic">[{l}]</a>
                       ))}
                    </div>
                 </div>
                 <div className="flex flex-col md:flex-row items-start md:items-center gap-12 text-[11px] font-black uppercase text-white/10 tracking-[0.5em] italic">
                    <div className="flex items-center gap-4 text-left">
                       <MapPin size={14} className="text-blue-500/40 shadow-sm" />
                       <span>{data.personal_info.location} // BASE: 0x4851</span>
                    </div>
                    <span>© {new Date().getFullYear()} // API_CORE_IDENTITY_V24</span>
                 </div>
              </div>
           </div>
        </footer>
      </main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@1,400;1,800&family=Space+Grotesk:wght@300;500;900&display=swap');
        
        body {
          background-color: #050608;
          font-family: 'Space Grotesk', sans-serif;
        }

        .font-mono {
          font-family: 'JetBrains Mono', monospace;
        }

        ::-webkit-scrollbar {
          width: 0px;
        }
      `}</style>
    </div>
  );
}
