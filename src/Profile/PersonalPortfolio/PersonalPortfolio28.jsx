import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { portfolioprofile as data } from './PersonalPortfolioData';
import { 
  Diamond, Sparkles, Orbit, Star, ArrowUpRight, ChevronRight, 
  Layers, Smartphone, Box, Maximize2, Power, 
  Github, Twitter, Linkedin, Mail, MapPin, 
  Compass, Share2, MousePointer2, Zap, Cpu
} from 'lucide-react';

const ApexBackground = () => (
  <div className="fixed inset-0 pointer-events-none z-0">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#1a1f35_0%,#050608_100%)] opacity-60" />
    <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 0.5px, transparent 0.5px)', backgroundSize: '100px 100px' }} />
    <motion.div 
      animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }} 
      transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }} 
      className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-blue-500/10 blur-[200px] rounded-full" 
    />
  </div>
);

const GlassCard = ({ children, className = "" }) => (
  <div className={`backdrop-blur-3xl bg-white/[0.03] border border-white/10 rounded-[3rem] shadow-2xl relative overflow-hidden group ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
    {children}
  </div>
);

export default function PersonalPortfolio28() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <div className="bg-[#050608] text-[#f8fafc] font-sans selection:bg-blue-500/30 selection:text-white min-h-screen relative overflow-x-hidden text-left pb-40">
      <ApexBackground />
      
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-white to-blue-600 z-[100] origin-left shadow-[0_0_20px_rgba(59,130,246,0.3)]" style={{ scaleX }} />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-12 py-10 flex justify-between items-center mix-blend-difference text-left">
        <div className="flex items-center gap-8">
           <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white font-black italic scale-110 shadow-lg">A</div>
           <div className="flex flex-col text-left">
              <span className="text-sm font-black uppercase tracking-[0.4em] italic">{data.personal_info.name}</span>
              <span className="text-[10px] font-black uppercase tracking-[0.6em] opacity-40 italic">APEX_v28_CORE</span>
           </div>
        </div>
        <button className="px-10 py-3 bg-white text-black rounded-full text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl">
           APEX_READY
        </button>
      </nav>

      {/* Cinematic Hero */}
      <main className="relative z-10 max-w-7xl mx-auto px-12 pt-56 text-left lg:px-32">
        <section className="min-h-[90vh] flex flex-col justify-center text-left mb-60">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="inline-flex items-center gap-4 px-6 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] font-black uppercase tracking-[0.6em] text-blue-400 mb-16 w-fit italic backdrop-blur-xl"
           >
              <Orbit size={14} className="animate-pulse" /> STATE_OF_THE_ART_AGENCY_V28.0
           </motion.div>
           
           <h1 className="text-[12vw] lg:text-[14vw] font-black italic uppercase leading-[0.7] tracking-tighter mb-20 italic text-left">
              Apex<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-400 to-white/20 italic">
                Portfolio.</span>
           </h1>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-end text-left">
              <p className="text-3xl lg:text-5xl font-light leading-[1.05] tracking-tight italic max-w-3xl text-left border-l-4 border-white pl-16 text-left italic shadow-sm">
                 {data.hero.subtitle}
              </p>
              <div className="flex flex-col gap-16 text-left">
                 <div className="flex gap-20 text-left">
                    <div className="flex flex-col text-left">
                       <span className="text-6xl font-black text-white">{data.personal_info.experience_years}Y</span>
                       <span className="text-[11px] uppercase font-bold opacity-30 tracking-[0.5em] italic">Full_Spectrum</span>
                    </div>
                    <div className="flex flex-col text-left">
                       <span className="text-6xl font-black text-blue-400">100%</span>
                       <span className="text-[11px] uppercase font-bold opacity-30 tracking-[0.5em] italic">Deploy_SLA</span>
                    </div>
                 </div>
                 <button className="flex items-center gap-10 text-[11px] font-black uppercase tracking-[1em] text-white hover:text-blue-400 transition-all underline decoration-white underline-offset-[20px] decoration-4 cursor-none italic group">
                    DEEP_SYNC_ARCHIVE <ArrowUpRight size={32} className="group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform shadow-xl" />
                 </button>
              </div>
           </div>
        </section>

        {/* Cinematic Projects Archive */}
        <section className="py-20 text-left">
           <div className="flex flex-col lg:flex-row justify-between items-end gap-16 mb-40 text-left">
              <h2 className="text-[10vw] font-black italic uppercase tracking-tighter italic leading-none text-left">Archive_</h2>
              <p className="text-[11px] font-black uppercase tracking-widest opacity-20 max-w-sm text-left mb-6 italic underline decoration-white/20 underline-offset-8 decoration-2 italic">// CINEMATIC_PROJECT_MANIFEST</p>
           </div>

           <div className="grid grid-cols-1 gap-40 text-left">
              {data.completed_projects.map((p, i) => (
                 <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="group relative text-left"
                 >
                    <div className="absolute -top-10 -right-10 text-white/5 font-black text-[12vw] italic pointer-events-none group-hover:text-white/10 transition-colors uppercase italic font-sans italic">{i}</div>
                    <div className="flex flex-col lg:flex-row gap-32 items-center text-left">
                       <div className="lg:w-1/2 aspect-[4/3] w-full bg-slate-900 rounded-[4rem] overflow-hidden shadow-2xl relative shadow-blue-500/10">
                          <img 
                             src={`https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&u=${i}`} 
                             alt={p.project_name} 
                             className="w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 shadow-inner" 
                          />
                          <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700 shadow-lg" />
                       </div>
                       <div className="lg:w-1/2 flex flex-col justify-center items-start text-left">
                          <span className="text-[12px] font-black uppercase tracking-[0.8em] text-blue-400 mb-12 block italic font-sans italic">// APEX_PROJECT_v28.{i}</span>
                          <h3 className="text-6xl lg:text-8xl font-black italic uppercase italic tracking-tighter mb-12 italic leading-tight text-white italic">{p.project_name}</h3>
                          <p className="text-2xl text-slate-500 italic leading-snug italic mb-16 italic line-clamp-3 italic border-l border-white pl-12 shadow-sm">{p.description}</p>
                          <div className="flex flex-wrap gap-4 mb-16 text-left">
                             {p.tech_stack.slice(0, 5).map((tech, j) => (
                                <span key={j} className="text-[11px] font-black uppercase border border-white/10 px-8 py-3 bg-white/5 text-slate-400 rounded-full italic hover:bg-white hover:text-black transition-all shadow-md">{tech}</span>
                             ))}
                          </div>
                          <button className="flex items-center gap-6 text-[11px] font-black uppercase tracking-[1em] text-white/40 hover:text-blue-400 transition-all italic underline decoration-white/10 underline-offset-8 decoration-2 italic">ACCESS_PROJECT_LOGS <ChevronRight size={24} /></button>
                       </div>
                    </div>
                 </motion.div>
              ))}
           </div>
        </section>

        {/* State of the Art: Services */}
        <section className="py-60 bg-blue-500/[0.02] -mx-12 lg:-mx-32 px-12 lg:px-32 text-left relative overflow-hidden">
           <div className="absolute bottom-0 right-0 w-[1000px] h-[1000px] bg-white opacity-[0.01] blur-[300px] rounded-full pointer-events-none" />
           <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-40 text-left">
              <div className="lg:w-2/5 text-left">
                 <h2 className="text-[10vw] font-black italic uppercase leading-[0.8] mb-16 italic tracking-tighter italic text-left">State<br />of <span className="text-blue-400">Art.</span></h2>
                 <p className="text-2xl text-slate-400 italic leading-snug italic mb-20 italic border-l-4 border-white pl-12 text-left italic underline decoration-white/5 underline-offset-8 shadow-sm">Architecting mission-critical technical frameworks through cinematic visual intelligence.</p>
                 <div className="flex flex-col gap-12 text-left">
                    {data.services.map((s, i) => (
                       <div key={i} className="flex items-center gap-10 group cursor-default text-left">
                          <div className="w-16 h-[1px] bg-white opacity-20 group-hover:w-32 group-hover:bg-blue-400 transition-all shadow-inner" />
                          <span className="text-xl font-black uppercase tracking-[0.5em] text-white/40 group-hover:text-white transition-all italic">{s.category}</span>
                       </div>
                    ))}
                 </div>
              </div>
              
              <div className="lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-12 text-left">
                 {data.guarantees.map((g, i) => (
                    <GlassCard key={i} className="p-16 text-left shadow-[0_0_50px_rgba(0,0,0,0.3)]">
                       <div className="flex justify-between items-start mb-12 text-left">
                          <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-blue-400 shadow-inner group-hover:scale-110 transition-transform"><Cpu size={32} /></div>
                          <span className="text-[10px] font-black text-white/20 italic">_SLA_CONFIRMED_{i+10}</span>
                       </div>
                       <h3 className="text-3xl font-black italic uppercase italic text-white mb-8 italic leading-none italic shadow-sm">{g.title}</h3>
                       <p className="text-md text-slate-500 italic leading-relaxed italic italic">{g.description}</p>
                    </GlassCard>
                 ))}
              </div>
           </div>
        </section>

        {/* Footer: Reach Peak */}
        <footer className="py-80 border-t border-white/5 text-left bg-[#050608] relative overflow-hidden">
           <div className="max-w-7xl mx-auto flex flex-col gap-60 text-left">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-40 text-left">
                 <div className="text-left">
                    <h2 className="text-[14vw] font-black italic uppercase tracking-tighter leading-none mb-20 italic text-left underline decoration-blue-500/10 underline-offset-[40px] decoration-8 italic">Reach.<br /><span className="text-blue-500 italic leading-tight">Peak.</span></h2>
                    <p className="text-2xl text-slate-500 italic leading-relaxed italic max-w-sm italic mb-24 italic border-l-4 border-white pl-12 shadow-sm">Initializing high-magnitude technical logic and pinnacle mobile architecture hubs.</p>
                    <div className="flex flex-col gap-10 text-left">
                       <span className="text-[11px] font-black uppercase tracking-[1em] opacity-20 font-sans italic">DIRECT_P_ADDR</span>
                       <a href={`mailto:${data.personal_info.email}`} className="text-4xl lg:text-8xl font-black italic text-[#f8fafc] hover:text-blue-400 transition-all underline decoration-white underline-offset-[30px] decoration-4 italic leading-none">{data.personal_info.email}</a>
                    </div>
                 </div>

                 <div className="flex flex-col justify-center items-start lg:items-end gap-32 text-left">
                    <div className="flex gap-40 text-left shadow-2xl">
                       <div className="flex flex-col gap-12 text-left">
                          <span className="text-[11px] font-black uppercase tracking-widest opacity-20 font-sans italic">Archive</span>
                          {['Projects', 'Services', 'Identity'].map(l => (
                            <a key={l} href="#" className="text-xs font-black uppercase opacity-40 hover:opacity-100 transition-opacity font-sans italic tracking-widest shadow-sm">[{l}]</a>
                          ))}
                       </div>
                       <div className="flex flex-col gap-12 text-left">
                          <span className="text-[11px] font-black uppercase tracking-widest opacity-20 font-sans italic">Transmissions</span>
                          {['Twitter', 'GitHub', 'LinkedIn'].map(l => (
                            <a key={l} href="#" className="text-xs font-black uppercase opacity-40 hover:opacity-100 transition-opacity font-sans italic tracking-widest shadow-sm">[{l}]</a>
                          ))}
                       </div>
                    </div>
                    <div className="flex flex-col lg:flex-row items-end gap-16 text-[11px] font-black uppercase tracking-[0.8em] opacity-10 font-sans italic">
                       <span>{data.personal_info.location} // B_ADDR: 0x97A9</span>
                       <span>© {new Date().getFullYear()} // APEX_PORTFOLIO_IDENTITY_V28</span>
                    </div>
                 </div>
              </div>
           </div>
        </footer>
      </main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@200;400;900&family=Space+Grotesk:wght@300;900&display=swap');
        
        body {
          background-color: #050608;
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
