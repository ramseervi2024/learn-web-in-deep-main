import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { FullTimeFreelancerProfile as data } from './FreelancerPortfolioData';
import { 
  Diamond, Sparkles, Orbit, Star, ArrowUpRight, ChevronRight, 
  Layers, Smartphone, Box, Maximize2, Power, 
  Github, Twitter, Linkedin, Mail, MapPin, 
  Compass, Share2, MousePointer2, Zap, Cpu
} from 'lucide-react';

const ApexBackground = () => (
  <div className="fixed inset-0 pointer-events-none z-0">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#1a1f35_0%,#050608_100%)] opacity-60" />
    <motion.div 
      animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }} 
      transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }} 
      className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-blue-500/10 blur-[200px] rounded-full" 
    />
  </div>
);

export default function FreelancerPortfolio28() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="bg-[#050608] text-[#f8fafc] font-sans selection:bg-blue-500/30 selection:text-white min-h-screen relative overflow-x-hidden text-left pb-40">
      <ApexBackground />
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-white to-blue-600 z-[100] origin-left shadow-[0_0_20px_rgba(59,130,246,0.5)]" style={{ scaleX }} />

      <nav className="fixed top-0 left-0 right-0 z-50 px-12 py-10 flex justify-between items-center mix-blend-difference text-left">
        <div className="flex items-center gap-8">
           <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white font-black italic scale-110 shadow-lg">A</div>
           <span className="text-sm font-black uppercase tracking-[0.4em] italic">{data.personal_info.name} // APEX_SOLO</span>
        </div>
        <button className="px-10 py-3 bg-white text-black rounded-full text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl">
           APEX_READY
        </button>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-12 pt-56 text-left lg:px-32">
        {/* HERO */}
        <section className="min-h-[85vh] flex flex-col justify-center text-left mb-60">
           <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] font-black uppercase tracking-[0.6em] text-blue-400 mb-16 w-fit italic backdrop-blur-xl">
              <Orbit size={14} className="animate-pulse shadow-sm" /> STATE_OF_THE_ART_SOLO_V28.0
           </div>
           
           <h1 className="text-[10vw] lg:text-[12vw] font-black italic uppercase leading-[0.7] tracking-tighter mb-20 italic text-left">
              Apex<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-400 to-white/20 italic">Practitioner.</span>
           </h1>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-end text-left">
              <p className="text-2xl lg:text-4xl font-light leading-snug tracking-tight italic max-w-3xl text-left border-l-4 border-white pl-16 text-left italic shadow-sm">
                 {data.hero.subtitle}
              </p>
              <div className="flex gap-20 text-left">
                 <div className="flex flex-col text-left">
                    <span className="text-5xl font-black text-white">{data.stats[0].value}</span>
                    <span className="text-[11px] uppercase font-bold opacity-30 tracking-[0.5em] italic">{data.stats[0].label}</span>
                 </div>
                 <div className="flex flex-col text-left">
                    <span className="text-5xl font-black text-blue-400">{data.stats[1].value}</span>
                    <span className="text-[11px] uppercase font-bold opacity-30 tracking-[0.5em] italic">{data.stats[1].label}</span>
                 </div>
              </div>
           </div>
        </section>

        {/* PROJECTS */}
        <section className="py-20 text-left">
           <div className="flex flex-col lg:flex-row justify-between items-end gap-16 mb-40 text-left">
              <h2 className="text-[8vw] font-black italic uppercase tracking-tighter leading-none text-left italic shadow-sm">Archive_</h2>
              <p className="text-[11px] font-black uppercase tracking-widest opacity-20 max-w-sm text-left mb-6 italic underline decoration-white/20 underline-offset-8 decoration-2 italic font-sans">// CINEMATIC_SOLO_MANIFEST</p>
           </div>
           <div className="grid grid-cols-1 gap-40 text-left">
              {data.completed_projects.map((p, i) => (
                 <div key={i} className="group relative text-left">
                    <div className="absolute -top-10 -right-10 text-white/5 font-black text-[12vw] italic pointer-events-none group-hover:text-white/10 transition-colors uppercase italic font-sans italic shadow-sm">{i}</div>
                    <div className="flex flex-col lg:flex-row gap-24 items-center text-left">
                       <div className="lg:w-1/2 aspect-[16/10] bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl relative shadow-blue-500/10">
                          <img src={`https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&u=${i}`} alt={p.project_name} className="w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 shadow-inner" />
                       </div>
                       <div className="lg:w-1/2 text-left">
                          <span className="text-[12px] font-black uppercase tracking-[0.8em] text-blue-400 mb-10 block italic font-sans italic">// APEX_SOLO_v28.{i}</span>
                          <h3 className="text-4xl lg:text-7xl font-black italic uppercase italic tracking-tighter mb-12 italic leading-tight text-white shadow-sm">{p.project_name}</h3>
                          <p className="text-xl text-slate-500 italic leading-snug italic mb-16 italic line-clamp-3 italic border-l border-white pl-12 shadow-md">{p.description}</p>
                          <div className="flex flex-wrap gap-4 mb-16 text-left">
                             {p.tech_stack.slice(0, 4).map((tech, j) => (
                                <span key={j} className="text-[11px] font-black uppercase border border-white/10 px-8 py-3 bg-white/5 text-slate-400 rounded-full italic hover:bg-white hover:text-black transition-all shadow-lg">{tech}</span>
                             ))}
                          </div>
                          <button className="flex items-center gap-6 text-[11px] font-black uppercase tracking-[1em] text-white/40 hover:text-blue-400 transition-all italic underline decoration-white/10 underline-offset-8 decoration-2 italic shadow-md">ACCESS_LOGS <ChevronRight size={24} /></button>
                       </div>
                    </div>
                 </div>
              ))}
           </div>
        </section>

        {/* FOOTER */}
        <footer className="py-80 border-t border-white/5 text-left bg-[#050608] relative overflow-hidden">
           <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-60 text-left">
              <div className="text-left">
                 <h2 className="text-[12vw] font-black italic uppercase tracking-tighter leading-none mb-16 italic text-left shadow-md">Reach.<br /><span className="text-blue-500 italic text-left italic">Peak.</span></h2>
                 <a href={`mailto:${data.personal_info.email}`} className="text-2xl lg:text-5xl font-black italic text-[#f8fafc] hover:text-blue-400 transition-all underline decoration-white underline-offset-[25px] decoration-4 italic">{data.personal_info.email}</a>
              </div>
              <div className="flex gap-20 text-left items-end">
                 <div className="flex flex-col gap-10 text-left shadow-2xl">
                    <span className="text-[11px] font-black uppercase tracking-widest opacity-20 font-sans italic">Directories</span>
                    {['B_Addr', 'Archive', 'Identity'].map(l => (
                      <a key={l} href="#" className="text-xs font-black uppercase text-slate-500 hover:text-emerald-500 transition-colors font-sans italic tracking-widest shadow-sm">./{l}</a>
                    ))}
                 </div>
              </div>
           </div>
           <div className="max-w-7xl mx-auto flex justify-between items-center text-[10px] font-black uppercase tracking-[0.8em] opacity-10 font-sans italic">
              <span>{data.personal_info.location} // B_ADDR: 0x97A9</span>
              <span>© {new Date().getFullYear()} // APEX_SOLO_V28</span>
           </div>
        </footer>
      </main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;900&display=swap');
        body { background-color: #050608; font-family: 'Space Grotesk', sans-serif; }
        ::-webkit-scrollbar { width: 0px; }
      `}</style>
    </div>
  );
}
