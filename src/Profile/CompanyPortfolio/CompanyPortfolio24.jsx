import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion';
import { CompanyPortfolio as data } from './CompanyPortfolioData';
import { 
  Database, Globe, Server, Code, Terminal, 
  ArrowRight, ExternalLink, Box, Activity, 
  ChevronRight, ArrowDown, MapPin, Mail, Github, Twitter, Linkedin,
  Cpu, Zap, Search, Play, Clipboard, Key, ShieldCheck, HardDrive
} from 'lucide-react';

const EndpointBlock = ({ method = "GET", path = "/api/v24/resource", children, status = "200 OK" }) => (
  <div className="bg-[#0f1115] border border-blue-500/20 rounded-xl overflow-hidden mb-16 shadow-2xl group hover:border-blue-500/40 transition-all text-left">
    <div className="bg-blue-500/5 px-8 py-5 border-b border-blue-500/10 flex flex-wrap justify-between items-center gap-6 text-left">
      <div className="flex items-center gap-6 text-left">
        <span className={`px-4 py-1.5 rounded text-[11px] font-black italic ${method === "GET" ? "bg-emerald-500/20 text-emerald-400" : method === "POST" ? "bg-blue-500/20 text-blue-400" : "bg-amber-500/20 text-amber-400"}`}>{method}</span>
        <span className="text-sm font-mono text-blue-500 font-bold italic tracking-tighter truncate">{path}</span>
      </div>
      <div className="flex items-center gap-6 text-left">
         <span className="text-[11px] font-black text-emerald-500/60 uppercase tracking-widest">{status}</span>
         <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_15px_#10b981]" />
      </div>
    </div>
    <div className="p-10 text-left">
       {children}
    </div>
  </div>
);

export default function CompanyPortfolio24() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="bg-[#050608] text-blue-50 font-sans selection:bg-blue-500/30 selection:text-white min-h-screen relative overflow-x-hidden text-left pb-40">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#0f172a_0%,#050608_100%)] opacity-20" />
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)', backgroundSize: '120px 120px' }} />
      </div>

      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-blue-500 shadow-[0_0_20px_#3b82f6] z-[100]" style={{ scaleX }} />

      <nav className="fixed top-0 left-0 right-0 z-50 px-12 py-6 backdrop-blur-md bg-[#050608]/80 border-b border-blue-500/20 flex justify-between items-center text-left">
        <div className="flex items-center gap-8">
           <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-500 shadow-inner">
              <Server size={26} />
           </div>
           <span className="text-[11px] font-black uppercase tracking-[0.5em] italic text-white/80">{data.brand.name} // CORE_v24</span>
        </div>
        <button className="px-10 py-3 bg-blue-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-500 transition-all shadow-2xl shadow-blue-500/20">
           ACCESS_CORE_API
        </button>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-12 pt-48 text-left lg:px-44">
        {/* HERO */}
        <section className="min-h-[85vh] flex flex-col justify-center text-left mb-60">
           <div className="inline-flex items-center gap-4 px-6 py-2 border border-blue-500/20 bg-blue-500/5 rounded-xl text-[11px] font-black uppercase tracking-[0.4em] text-blue-500 mb-16 w-fit">
              <Activity size={18} className="animate-pulse" /> AGENCY_SYNC_READY: STABLE
           </div>
           <h1 className="text-8xl md:text-[14vw] font-black italic uppercase leading-[0.7] tracking-tighter mb-20 italic text-left">
              API<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-600 italic">Core.</span>
           </h1>
           <p className="text-3xl md:text-5xl text-white/30 font-light max-w-4xl leading-tight mb-24 italic border-l-4 border-blue-500/20 pl-16 text-left italic">
              {data.hero.subtitle}
           </p>
           <button className="px-16 py-8 bg-blue-600 text-white font-black text-xs uppercase tracking-[0.6em] rounded-2xl hover:bg-blue-500 transition-all shadow-2xl shadow-blue-500/30 w-fit flex items-center gap-6">
              INITIATE_ENTERPRISE_HANDSHAKE <ChevronRight size={24} />
           </button>
        </section>

        {/* PROJECTS */}
        <section className="py-20 text-left">
           <div className="flex flex-col md:flex-row justify-between items-end gap-16 mb-40 text-left">
              <h2 className="text-7xl md:text-[10vw] font-black italic uppercase tracking-tighter italic text-left leading-none">Schemas_</h2>
              <p className="text-[11px] font-black uppercase tracking-widest text-blue-500/40 italic max-w-sm text-left italic font-mono">// ENTERPRISE_ENGINEERING_MANIFEST</p>
           </div>
           <div className="grid grid-cols-1 gap-16 text-left">
              {data.completed_projects.map((p, i) => (
                <EndpointBlock key={i} method={i % 2 === 0 ? "GET" : "POST"} path={`/v24/agency/payload/${p.project_name.toLowerCase().replace(/\s+/g, '_')}`} status="200 OK">
                   <div className="text-left py-4">
                      <h3 className="text-5xl font-black italic uppercase italic text-white mb-10 italic tracking-tighter leading-tight">{p.project_name}</h3>
                      <p className="text-2xl text-white/30 italic leading-relaxed mb-12 italic border-l-2 border-blue-500/20 pl-10 italic">{p.problem}</p>
                      <div className="flex flex-wrap gap-4 mb-12 text-left">
                         {p.technologies?.slice(0, 5).map((tech, j) => (
                            <span key={j} className="text-[10px] font-black uppercase border border-white/10 px-8 py-3 bg-white/5 text-blue-500/60 rounded-xl italic">{tech}</span>
                         ))}
                      </div>
                      <button className="flex items-center gap-6 text-[11px] font-black uppercase text-blue-500 italic underline decoration-blue-500/20 underline-offset-[12px] decoration-2">SCAN_TECHNICAL_PAYLOAD <ChevronRight size={24} /></button>
                   </div>
                </EndpointBlock>
              ))}
           </div>
        </section>

        {/* FOOTER */}
        <footer className="py-80 border-t border-white/5 text-left bg-[#050608] -mx-12 lg:-mx-44 px-12 lg:px-44">
           <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-60 mb-40 text-left">
              <div className="text-left">
                 <h2 className="text-8xl md:text-[14vw] font-black italic uppercase tracking-tighter mb-12 italic text-left leading-none">Auth_<br /><span className="text-blue-500 italic underline decoration-blue-500/20 underline-offset-[30px] decoration-4 italic">Key.</span></h2>
                 <a href={`mailto:${data.brand.email}`} className="text-3xl md:text-8xl font-black text-white hover:text-blue-400 transition-all italic underline decoration-blue-500/20 underline-offset-[30px] decoration-4 italic tracking-tighter">{data.brand.email}</a>
              </div>
              <div className="flex gap-60 text-left">
                 <div className="flex flex-col gap-10 text-left">
                    <span className="text-[11px] font-black uppercase tracking-widest text-white/10 italic underline decoration-blue-500/10 underline-offset-8">Endpoints</span>
                    {['B_Addr', 'Payloads', 'Schemas'].map(l => (
                      <a key={l} href="#" className="text-xs font-black uppercase text-white/40 hover:text-blue-400 tracking-widest">/{l}</a>
                    ))}
                 </div>
              </div>
           </div>
           <div className="max-w-7xl mx-auto flex justify-between items-center text-[10px] font-black uppercase text-white/10 tracking-[0.5em] italic">
              <span>{data.brand.location} // B_ADDR: 0x4851</span>
              <span>© {new Date().getFullYear()} // API_CORE_AGENCY_V24</span>
           </div>
        </footer>
      </main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;500;900&display=swap');
        body { background-color: #050608; font-family: 'Space Grotesk', sans-serif; }
        ::-webkit-scrollbar { width: 0px; }
      `}</style>
    </div>
  );
}
