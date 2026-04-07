import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { FullTimeFreelancerProfile as data } from './FreelancerPortfolioData';
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

export default function FreelancerPortfolio26() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="bg-[#08080a] text-slate-100 font-sans selection:bg-blue-600/30 selection:text-white min-h-screen relative overflow-x-hidden text-left pb-40">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600 opacity-[0.05] blur-[180px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>

      <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-blue-600 shadow-[0_0_20px_rgba(59,130,246,0.5)] z-[100]" style={{ scaleX }} />

      <nav className="fixed top-0 left-0 right-0 z-50 px-10 py-6 backdrop-blur-md bg-[#08080a]/40 border-b border-white/5 flex justify-between items-center text-left">
        <div className="flex items-center gap-6">
           <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/30 font-black italic">F</div>
           <span className="text-xs font-black uppercase tracking-[0.5em] italic">{data.personal_info.name} // PRIME_v26</span>
        </div>
        <button className="px-10 py-2.5 bg-white text-black rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all font-black">
           SYNC_READY
        </button>
      </nav>

      <main className="relative z-10 pt-44 px-10 lg:px-32 max-w-7xl mx-auto text-left">
        {/* HERO */}
        <section className="min-h-[75vh] flex flex-col justify-center text-left mb-60">
           <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-blue-600/10 border border-blue-500/20 text-[10px] font-black uppercase tracking-[0.5em] text-blue-400 mb-12 w-fit italic">
              <Radio size={14} className="animate-pulse" /> PERFORMANCE_ENGINE_SYNC: OK
           </div>
           
           <h1 className="text-[10vw] lg:text-[12vw] font-black italic uppercase leading-[0.75] tracking-tighter mb-20 italic text-left">
              Prime<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-200 to-blue-600">Digital.</span>
           </h1>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-end text-left">
              <p className="text-2xl lg:text-4xl text-slate-400 font-light leading-snug tracking-tight italic border-l-4 border-blue-600/30 pl-12 text-left italic">
                 {data.hero.subtitle}
              </p>
              <div className="grid grid-cols-2 gap-8 text-left">
                 <MetricCard label={data.stats[0].label} value={data.stats[0].value} />
                 <MetricCard label={data.stats[2].label} value={data.stats[2].value} delay={0.1} />
              </div>
           </div>
        </section>

        {/* PROJECTS */}
        <section className="py-40 text-left">
           <div className="flex flex-col lg:flex-row justify-between items-end gap-16 mb-40 text-left">
              <h2 className="text-[10vw] font-black italic uppercase tracking-tighter leading-none text-left italic">Archive_</h2>
              <p className="text-[11px] font-black uppercase tracking-widest text-blue-500/40 italic max-w-sm text-left mb-6 italic underline decoration-blue-500/20 underline-offset-8 decoration-2 italic font-sans">// PERFORMANCE_SOLO_MANIFEST</p>
           </div>
           <div className="grid grid-cols-1 gap-32 text-left">
              {data.completed_projects.map((p, i) => (
                 <div key={i} className="flex flex-col lg:flex-row gap-20 p-12 lg:p-20 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all rounded-[4rem] group text-left relative shadow-2xl overflow-hidden">
                    <div className="lg:w-2/5 aspect-[16/10] bg-slate-900 rounded-[3rem] overflow-hidden border border-white/5 shadow-inner">
                       <img src={`https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=800&u=${i}`} alt={p.project_name} className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" />
                    </div>
                    <div className="lg:w-3/5 flex flex-col justify-between items-start text-left">
                       <div className="text-left py-4">
                          <span className="text-[11px] font-black text-blue-600/40 mb-10 block italic font-mono uppercase tracking-[0.6em] tracking-tighter">_NODE_v26.{i}</span>
                          <h3 className="text-4xl lg:text-7xl font-black italic uppercase italic tracking-tighter mb-12 italic leading-tight text-white">{p.project_name}</h3>
                          <p className="text-xl text-slate-500 italic leading-snug italic mb-16 italic line-clamp-3 italic border-l border-blue-600 pl-10 shadow-sm">{p.description}</p>
                       </div>
                       <div className="flex flex-wrap gap-4 mb-16 text-left">
                          {p.tech_stack.slice(0, 5).map((tech, j) => (
                             <span key={j} className="text-[10px] font-black uppercase border border-white/10 px-8 py-3 bg-white/5 text-slate-400 rounded-full italic hover:bg-blue-600 hover:text-white transition-all shadow-md">{tech}</span>
                          ))}
                       </div>
                       <button className="flex items-center gap-10 text-[11px] font-black uppercase tracking-[0.8em] font-sans hover:gap-14 transition-all italic underline decoration-blue-600/20 underline-offset-8">INITIATE_HANDSHAKE <ArrowUpRight size={24} /></button>
                    </div>
                 </div>
              ))}
           </div>
        </section>

        {/* FOOTER */}
        <footer className="py-80 border-t border-white/5 text-left bg-[#08080a] relative overflow-hidden">
           <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-40 text-left">
              <div className="text-left">
                 <h2 className="text-[12vw] font-black italic uppercase tracking-tighter leading-none mb-16 italic text-left">Digital.<br /><span className="text-blue-500 italic underline decoration-blue-600/20 underline-offset-[30px] decoration-4 italic">Primed.</span></h2>
                 <a href={`mailto:${data.personal_info.email}`} className="text-3xl lg:text-6xl font-black italic text-white hover:text-blue-400 transition-all underline decoration-blue-500/20 underline-offset-[25px] decoration-4 italic">{data.personal_info.email}</a>
              </div>
              <div className="flex gap-20 text-left items-end">
                 <div className="flex flex-col gap-10 text-left shadow-2xl">
                    <span className="text-[11px] font-black uppercase tracking-widest text-blue-500/20 font-sans italic">Directories</span>
                    {['B_Addr', 'Archive', 'Method'].map(l => (
                      <a key={l} href="#" className="text-xs font-black uppercase text-slate-400 hover:text-blue-400 transition-colors font-sans italic tracking-widest">./{l}</a>
                    ))}
                 </div>
              </div>
           </div>
           <div className="max-w-7xl mx-auto flex justify-between items-center text-[10px] font-black uppercase tracking-[0.5em] text-white/5 font-sans italic">
              <span>{data.personal_info.location} // B_ADDR: 0x242628</span>
              <span>© {new Date().getFullYear()} // PRIME_DIGITAL_V26</span>
           </div>
        </footer>
      </main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@200;900&family=Space+Grotesk:wght@300;900&display=swap');
        body { background-color: #08080a; font-family: 'Space Grotesk', sans-serif; }
        ::-webkit-scrollbar { width: 0px; }
      `}</style>
    </div>
  );
}
