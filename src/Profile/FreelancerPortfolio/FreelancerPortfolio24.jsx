import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion';
import { FullTimeFreelancerProfile as data } from './FreelancerPortfolioData';
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

export default function FreelancerPortfolio24() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="bg-[#050608] text-blue-50 font-sans selection:bg-blue-500/30 selection:text-white min-h-screen relative overflow-x-hidden text-left pb-40">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#0f172a_0%,#050608_100%)] opacity-20" />
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
      </div>

      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-blue-500 shadow-[0_0_15px_#3b82f6] z-[100]" style={{ scaleX }} />

      <nav className="fixed top-0 left-0 right-0 z-50 px-10 py-4 backdrop-blur-md bg-[#050608]/80 border-b border-blue-500/20 flex justify-between items-center text-left">
        <div className="flex items-center gap-6">
           <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-500 shadow-inner">
              <Server size={22} />
           </div>
           <span className="text-xs font-black uppercase tracking-[0.3em] italic text-white/80">{data.personal_info.name}</span>
        </div>
        <button className="px-8 py-2 bg-blue-500 text-white rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-blue-400 transition-all shadow-lg">
           INITIALIZE_API
        </button>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-8 pt-40 text-left lg:px-32">
        {/* HERO */}
        <section className="min-h-[75vh] flex flex-col justify-center text-left mb-40">
           <div className="inline-flex items-center gap-3 px-5 py-2 border border-blue-500/20 bg-blue-500/5 rounded-lg text-[10px] font-black uppercase tracking-[0.4em] text-blue-500 mb-10 w-fit">
              <Activity size={14} className="animate-pulse" /> SYSTEM_SYNC_READY
           </div>
           <h1 className="text-7xl md:text-[10vw] font-black italic uppercase leading-[0.8] tracking-tighter mb-16 italic text-left">
              API<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">Core.</span>
           </h1>
           <p className="text-xl md:text-3xl text-white/30 font-light max-w-3xl leading-relaxed italic border-l-2 border-blue-500/20 pl-10 italic">
              {data.hero.subtitle}
           </p>
           <button className="px-12 py-5 bg-blue-600 text-white font-black text-xs uppercase tracking-[0.5em] rounded-xl hover:bg-blue-500 transition-all shadow-xl shadow-blue-500/30 w-fit flex items-center gap-4 mt-12">
              INITIATE_HANDSHAKE <ChevronRight size={18} />
           </button>
        </section>

        {/* PROJECTS */}
        <section className="py-20 text-left">
           <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-32 text-left">
              <h2 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter italic">Schemas_</h2>
              <p className="text-[10px] font-black uppercase tracking-widest text-blue-500/40 italic max-w-xs text-left italic font-mono">// FREELANCE_ENGINEERING_MANIFEST</p>
           </div>
           <div className="grid grid-cols-1 gap-12 text-left">
              {data.completed_projects.map((p, i) => (
                <EndpointBlock key={i} method={i % 2 === 0 ? "GET" : "POST"} path={`/v24/resource/${p.project_name.toLowerCase().replace(/\s+/g, '_')}`} status="200 OK">
                   <div className="text-left py-4">
                      <h3 className="text-4xl font-black italic uppercase italic text-white mb-8 italic tracking-tighter">{p.project_name}</h3>
                      <p className="text-xl text-white/30 italic leading-relaxed mb-10 italic border-l border-blue-500/20 pl-8">{p.description}</p>
                      <div className="flex flex-wrap gap-3 mb-10 text-left">
                         {p.tech_stack.slice(0, 4).map((tech, j) => (
                            <span key={j} className="text-[9px] font-black uppercase border border-white/5 px-6 py-2 bg-white/5 text-blue-500/60 rounded-lg italic">{tech}</span>
                         ))}
                      </div>
                      <button className="flex items-center gap-4 text-[10px] font-black uppercase text-blue-500 italic underline decoration-blue-500/20 underline-offset-8">VIEW_PAYLOAD <ChevronRight size={16} /></button>
                   </div>
                </EndpointBlock>
              ))}
           </div>
        </section>

        {/* FOOTER */}
        <footer className="py-60 border-t border-white/5 text-left bg-[#050608] -mx-8 lg:-mx-32 px-8 lg:px-32">
           <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-40 mb-40 text-left">
              <div className="text-left">
                 <h2 className="text-7xl md:text-9xl font-black italic uppercase tracking-tighter mb-12 italic">Auth_<br /><span className="text-blue-500 italic">Key.</span></h2>
                 <a href={`mailto:${data.personal_info.email}`} className="text-2xl md:text-5xl font-black text-white hover:text-blue-400 transition-all italic underline decoration-blue-500/20 underline-offset-[16px] decoration-4 italic">{data.personal_info.email}</a>
              </div>
              <div className="flex gap-20 text-left">
                 <div className="flex flex-col gap-8 text-left">
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/10 italic">Endpoints</span>
                    {['B_Addr', 'Schemas', 'Handshake'].map(l => (
                      <a key={l} href="#" className="text-xs font-black uppercase text-white/40 hover:text-blue-400 tracking-widest">/{l}</a>
                    ))}
                 </div>
              </div>
           </div>
           <div className="max-w-7xl mx-auto flex justify-between items-center text-[10px] font-black uppercase text-white/10 tracking-[0.5em] italic">
              <span>{data.personal_info.location} // B_ADDR: 0x4851</span>
              <span>© {new Date().getFullYear()} // API_CORE_FREELANCE_V24</span>
           </div>
        </footer>
      </main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;500;900&display=swap');
        body { background-color: #050608; font-family: 'Space Grotesk', sans-serif; }
      `}</style>
    </div>
  );
}
