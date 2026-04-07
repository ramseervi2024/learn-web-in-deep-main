import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { FullTimeFreelancerProfile as data } from './FreelancerPortfolioData';
import { 
  Sun, Moon, Star, Sparkles, Orbit, 
  ArrowUpRight, ChevronRight, Globe, Github, Twitter, Linkedin,
  Zap, Cpu, Layers, Smartphone, Mail, MapPin, Share2, Compass
} from 'lucide-react';

const NovaText = ({ children, className = "" }) => (
  <motion.span initial={{ filter: "blur(10px)", opacity: 0 }} whileInView={{ filter: "blur(0px)", opacity: 1 }} transition={{ duration: 1.5 }} className={className}>{children}</motion.span>
);

export default function FreelancerPortfolio20() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="bg-[#020202] text-[#f8f8f8] font-serif selection:bg-amber-400 selection:text-black min-h-screen relative overflow-hidden text-left">
      <div className="fixed inset-0 pointer-events-none z-0">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#111_0%,#020202_100%)] opacity-60" />
         <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 0.5px, transparent 0.5px)', backgroundSize: '100px 100px' }} />
         <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 15, repeat: Infinity }} className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-amber-500/10 blur-[150px] rounded-full" />
      </div>

      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-amber-500 z-[100]" style={{ scaleX }} />

      <nav className="fixed top-0 left-0 right-0 z-50 px-12 py-10 flex justify-between items-center mix-blend-difference text-left">
         <div className="flex items-center gap-6">
            <span className="text-xl font-black italic tracking-tighter uppercase">{data.personal_info.name}</span>
            <div className="w-10 h-[1px] bg-white opacity-20" />
            <span className="text-[10px] font-bold tracking-[0.4em] opacity-40 uppercase italic">NOVA_STRATEGY</span>
         </div>
         <button className="flex items-center gap-4 group">
            <span className="text-[10px] font-black uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity italic">Protocol_Initialization</span>
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-black transition-all">
               <Orbit size={18} />
            </div>
         </button>
      </nav>

      <main className="relative z-10 pt-44 px-12 lg:px-44">
        {/* HERO */}
        <section className="min-h-[85vh] flex flex-col justify-center text-left max-w-6xl">
           <div className="flex items-center gap-6 mb-12 text-left">
              <div className="w-16 h-[1px] bg-amber-400" />
              <span className="text-[10px] font-black uppercase tracking-[0.6em] text-amber-500 italic">STELLAR_DEEP_LEVEL</span>
           </div>
           <h1 className="text-7xl md:text-[12vw] font-black leading-[0.8] tracking-tighter uppercase mb-20 italic">
              <NovaText>Radiant</NovaText><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
                 <NovaText>Freelance.</NovaText>
              </span>
           </h1>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end text-left">
              <p className="text-2xl md:text-4xl text-[#f8f8f8]/50 font-light leading-snug tracking-tight italic">
                 {data.hero.subtitle}
              </p>
              <div className="flex gap-16 text-left">
                 <div className="flex flex-col text-left">
                    <span className="text-4xl font-black text-amber-400">{data.stats[0].value}</span>
                    <span className="text-[10px] uppercase font-bold text-white/30 tracking-widest">{data.stats[0].label}</span>
                 </div>
                 <div className="flex flex-col text-left">
                    <span className="text-4xl font-black text-white">{data.stats[1].value}</span>
                    <span className="text-[10px] uppercase font-bold text-white/30 tracking-widest">{data.stats[1].label}</span>
                 </div>
              </div>
           </div>
        </section>

        {/* PROJECTS */}
        <section className="py-60">
           <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-40 text-left">
              <h2 className="text-7xl md:text-9xl font-black italic uppercase tracking-tighter italic">Archives_</h2>
              <p className="text-sm font-bold uppercase tracking-widest opacity-30 max-w-xs text-left mb-6 font-serif underline decoration-amber-400/20 underline-offset-8 decoration-2 italic">A curated chronological sequence of technical architectures deployed across global freelance ecosystems.</p>
           </div>
           <div className="grid grid-cols-1 gap-20 text-left">
              {data.completed_projects.map((p, i) => (
                 <div key={i} className="flex flex-col lg:flex-row gap-20 border-b border-white/5 pb-20 group text-left">
                    <div className="lg:w-2/5 aspect-video bg-[#111] overflow-hidden">
                       <img src={`https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&u=${i}`} alt={p.project_name} className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" />
                    </div>
                    <div className="lg:w-3/5 flex flex-col justify-between items-start text-left">
                       <div>
                          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-amber-500 mb-8 block italic font-sans italic">PROTOCOL_NODE_v{i+10}</span>
                          <h3 className="text-5xl md:text-7xl font-black italic uppercase italic tracking-tighter mb-8">{p.project_name}</h3>
                          <p className="text-xl text-white/30 italic leading-relaxed mb-12 italic">{p.description}</p>
                       </div>
                       <button className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.5em] text-amber-400 hover:text-white transition-all">ACCESS_LOGS <ChevronRight size={16} /></button>
                    </div>
                 </div>
              ))}
           </div>
        </section>

        {/* SERVICES */}
        <section className="py-60 text-left">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 text-left">
              {data.services.map((s, i) => (
                 <div key={i} className="p-16 border border-white/10 flex flex-col items-start gap-12 group hover:bg-white transition-all duration-700 text-left">
                    <span className="text-xs font-black uppercase tracking-widest text-amber-500 group-hover:text-black italic">CORE_ESSENCE_0{i+1}</span>
                    <h3 className="text-4xl font-black italic uppercase group-hover:text-black italic tracking-tighter italic">{s.category}</h3>
                    <p className="text-lg text-white/30 group-hover:text-black/60 italic leading-relaxed italic">{s.description}</p>
                    <div className="flex flex-col gap-4 text-left">
                       {s.features.map((f, j) => (
                          <div key={j} className="flex items-center gap-4 text-[9px] font-black uppercase tracking-widest opacity-20 group-hover:opacity-100 group-hover:text-black transition-all italic">
                             <div className="w-4 h-[1px] bg-amber-400" /> {f}
                          </div>
                       ))}
                    </div>
                 </div>
              ))}
           </div>
        </section>

        {/* FOOTER */}
        <footer className="py-60 border-t border-white/5 bg-[#080808] -mx-12 lg:-mx-44 px-12 lg:px-44 text-left">
           <div className="flex flex-col lg:flex-row justify-between gap-40 text-left">
              <div className="text-left">
                 <h2 className="text-7xl md:text-[10vw] font-black italic uppercase tracking-tighter mb-12 italic">Birth a<br /><span className="text-amber-400">Nova.</span></h2>
                 <a href={`mailto:${data.personal_info.email}`} className="text-3xl md:text-6xl font-black italic hover:text-amber-400 transition-all underline decoration-amber-400/20 underline-offset-[16px]">{data.personal_info.email}</a>
              </div>
              <div className="flex gap-20 text-left items-end">
                 <div className="flex flex-col gap-6 text-left">
                    <span className="text-[10px] font-black uppercase tracking-widest opacity-20 italic">Origins</span>
                    {['Twitter', 'GitHub', 'LinkedIn'].map(l => (
                      <a key={l} href="#" className="text-xs font-black uppercase tracking-widest text-white/30 hover:text-amber-400 transition-colors uppercase">[{l}]</a>
                    ))}
                 </div>
              </div>
           </div>
           <div className="mt-40 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.4em] text-white/10 italic">
              <span>{data.personal_info.location} // G_SYS</span>
              <span>© {new Date().getFullYear()} // STELLAR_FREELANCE_V20</span>
           </div>
        </footer>
      </main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,300;1,700&family=Outfit:wght@900&display=swap');
        body { background-color: #020202; font-family: 'Cormorant Garamond', serif; }
        ::-webkit-scrollbar { width: 0px; }
      `}</style>
    </div>
  );
}
