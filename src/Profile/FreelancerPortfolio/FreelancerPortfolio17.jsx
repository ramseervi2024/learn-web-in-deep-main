import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion';
import { FullTimeFreelancerProfile as data } from './FreelancerPortfolioData';
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

export default function FreelancerPortfolio17() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="bg-[#020617] text-slate-200 font-sans selection:bg-blue-500/30 selection:text-white min-h-screen relative overflow-hidden text-left">
      {/* Background Effect */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[#020617]" />
        <div className="absolute inset-0 opacity-[0.1]" style={{ backgroundImage: 'radial-gradient(#334155 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        {Array.from({ length: 10 }).map((_, i) => (
          <NeuroNode key={i} x={Math.random() * 100} y={Math.random() * 100} delay={i * 0.5} />
        ))}
      </div>

      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-blue-500 z-[100]" style={{ scaleX }} />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 backdrop-blur-md bg-[#020617]/40 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-left">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/50 flex items-center justify-center text-blue-400 font-black italic">F</div>
            <span className="text-xs font-black uppercase tracking-[0.3em]">{data.personal_info.name}</span>
          </div>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-blue-500 transition-all">
             HIRE_NOW
          </button>
        </div>
      </nav>

      <main className="relative z-10 pt-40 px-8 lg:px-32">
        {/* HERO */}
        <section className="min-h-[80vh] flex flex-col justify-center max-w-5xl text-left">
           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[10px] font-black uppercase tracking-widest mb-10 w-fit">
              <Network size={12} /> FREELANCE_ENGINEER_READY
           </div>
           <h1 className="text-6xl md:text-9xl font-black leading-[0.8] tracking-tighter uppercase mb-12">
              Neural<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Scale.</span>
           </h1>
           <p className="text-2xl text-slate-400 font-light max-w-2xl leading-relaxed mb-16 italic">
              {data.hero.subtitle}
           </p>
           <div className="flex flex-wrap gap-8">
              <button className="px-12 py-6 bg-blue-600 text-white font-black text-xs uppercase tracking-[0.5em] rounded-xl hover:bg-blue-500 transition-all">
                 START_SYNC
              </button>
              <div className="flex -space-x-4">
                 {[1,2,3,4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-[#020617] bg-slate-800" />
                 ))}
                 <div className="w-12 h-12 rounded-full border-4 border-[#020617] bg-blue-600 flex items-center justify-center text-white text-[10px] font-black">+24</div>
              </div>
           </div>
        </section>

        {/* PROJECTS */}
        <section className="py-40">
           <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24">
              <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter italic">Projects_</h2>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 italic max-w-xs">High-performance technical assets delivered across the freelance ecosystem.</p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {data.completed_projects.map((p, i) => (
                 <div key={i} className="p-10 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/30 transition-all flex flex-col justify-between h-[500px]">
                    <div>
                       <span className="text-[10px] font-black text-blue-500 mb-6 block">// NODE_v17.{i}</span>
                       <h3 className="text-3xl font-black italic uppercase mb-6 tracking-tighter">{p.project_name}</h3>
                       <p className="text-slate-400 leading-relaxed italic">{p.description}</p>
                    </div>
                    <div className="pt-10 border-t border-slate-800">
                       <div className="flex flex-wrap gap-2 mb-10">
                          {p.tech_stack.slice(0, 3).map((t, j) => (
                             <span key={j} className="text-[9px] font-black uppercase px-3 py-1 bg-slate-800 rounded text-slate-500">{t}</span>
                          ))}
                       </div>
                       <button className="flex items-center gap-3 text-xs font-black uppercase text-blue-400">ACCESS_RESOURCES <ArrowRight size={16} /></button>
                    </div>
                 </div>
              ))}
           </div>
        </section>

        {/* SERVICES */}
        <section className="py-40 bg-blue-500/[0.02] -mx-8 lg:-mx-32 px-8 lg:px-32">
           <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
              {data.services.map((s, i) => (
                 <div key={i} className="p-12 border border-slate-800 rounded-[2.5rem] bg-slate-900/40 relative overflow-hidden group">
                    <div className="w-16 h-16 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-10">
                       <Zap size={32} />
                    </div>
                    <h3 className="text-3xl font-black italic uppercase mb-6 tracking-tighter">{s.category}</h3>
                    <p className="text-slate-400 leading-relaxed italic mb-10">{s.description}</p>
                    <div className="flex flex-col gap-3">
                       {s.features.map((f, j) => (
                          <div key={j} className="flex items-center gap-3 text-[10px] font-black uppercase text-slate-500">
                             <div className="w-1 h-1 bg-blue-500" /> {f}
                          </div>
                       ))}
                    </div>
                 </div>
              ))}
           </div>
        </section>

        {/* FOOTER */}
        <footer className="py-40 border-t border-slate-900">
           <div className="flex flex-col lg:flex-row justify-between gap-20">
              <div>
                 <h2 className="text-7xl font-black italic uppercase leading-none mb-12">Connect_</h2>
                 <a href={`mailto:${data.personal_info.email}`} className="text-2xl md:text-4xl font-bold text-blue-400 underline decoration-2 underline-offset-8">{data.personal_info.email}</a>
              </div>
              <div className="flex gap-20">
                 <div className="flex flex-col gap-4">
                    <span className="text-[10px] font-black uppercase text-slate-600 tracking-widest">Network</span>
                    {['Twitter', 'GitHub', 'LinkedIn'].map(l => (
                      <a key={l} href="#" className="text-xs font-black uppercase text-slate-400 hover:text-blue-400">{l}</a>
                    ))}
                 </div>
              </div>
           </div>
           <div className="mt-40 flex justify-between items-center text-[10px] font-black uppercase text-slate-600 tracking-widest">
              <span>{data.personal_info.location} // CORE_NODE</span>
              <span>© {new Date().getFullYear()} // FREELANCE_V17</span>
           </div>
        </footer>
      </main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;500;900&display=swap');
        body { background-color: #020617; font-family: 'Space Grotesk', sans-serif; }
      `}</style>
    </div>
  );
}
