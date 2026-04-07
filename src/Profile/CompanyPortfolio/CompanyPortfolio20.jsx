import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { CompanyPortfolio as data } from './CompanyPortfolioData';
import { 
  Sun, Moon, Star, Sparkles, Orbit, 
  ArrowUpRight, ChevronRight, Globe, Github, Twitter, Linkedin,
  Zap, Cpu, Layers, Smartphone, Mail, MapPin, Share2, Compass
} from 'lucide-react';

const NovaText = ({ children, className = "" }) => (
  <motion.span initial={{ filter: "blur(10px)", opacity: 0 }} whileInView={{ filter: "blur(0px)", opacity: 1 }} transition={{ duration: 1.5 }} className={className}>{children}</motion.span>
);

export default function CompanyPortfolio20() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="bg-[#020202] text-[#f8f8f8] font-serif selection:bg-amber-400 selection:text-black min-h-screen relative overflow-hidden text-left">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#1a1a1a_0%,#020202_100%)] opacity-80" />
         <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 0.5px, transparent 0.5px)', backgroundSize: '150px 150px' }} />
         <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.15, 0.05] }} transition={{ duration: 20, repeat: Infinity }} className="absolute -top-60 -right-60 w-[800px] h-[800px] bg-amber-500/10 blur-[200px] rounded-full" />
      </div>

      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-amber-500 z-[100]" style={{ scaleX }} />

      <nav className="fixed top-0 left-0 right-0 z-50 px-16 py-12 flex justify-between items-center mix-blend-difference text-left">
         <div className="flex items-center gap-8 text-left">
            <span className="text-2xl font-black italic tracking-tighter uppercase">{data.brand.name}</span>
            <div className="w-16 h-[1px] bg-white opacity-20" />
            <span className="text-[11px] font-black tracking-[0.5em] opacity-40 uppercase italic">STELLAR_ARCH_V20_AGENCY</span>
         </div>
         <button className="flex items-center gap-6 group text-left">
            <span className="text-[11px] font-black uppercase tracking-[0.4em] opacity-40 group-hover:opacity-100 transition-opacity italic">Launch_Sequence</span>
            <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-black transition-all shadow-[0_0_20px_rgba(251,191,36,0.2)]">
               <Orbit size={24} />
            </div>
         </button>
      </nav>

      <main className="relative z-10 pt-56 px-16 lg:px-44">
        {/* HERO */}
        <section className="min-h-[90vh] flex flex-col justify-center text-left max-w-7xl">
           <div className="flex items-center gap-8 mb-16 text-left">
              <div className="w-24 h-[1px] bg-amber-400" />
              <span className="text-[11px] font-black uppercase tracking-[0.8em] text-amber-500 italic">STELLAR_AGENCY_ENGINE</span>
           </div>
           <h1 className="text-8xl md:text-[14vw] font-black leading-[0.75] tracking-tighter uppercase mb-24 italic underline decoration-amber-400/20 underline-offset-[30px] decoration-4 italic">
              <NovaText>Radiant</NovaText><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-700">
                 <NovaText>Success.</NovaText>
              </span>
           </h1>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-end text-left">
              <p className="text-3xl md:text-5xl text-[#f8f8f8]/40 font-light leading-[1.1] tracking-tight italic">
                 {data.hero.subtitle}
              </p>
              <div className="flex flex-col gap-12 text-left">
                 <div className="flex gap-24 text-left">
                    <div className="flex flex-col text-left">
                       <span className="text-6xl font-black text-amber-500">100%</span>
                       <span className="text-[11px] uppercase font-bold text-white/20 tracking-widest italic">Sync SLA</span>
                    </div>
                    <div className="flex flex-col text-left">
                       <span className="text-6xl font-black text-white">05+</span>
                       <span className="text-[11px] uppercase font-bold text-white/20 tracking-widest italic">Global Nodes</span>
                    </div>
                 </div>
                 <button className="group flex items-center gap-12 text-xs font-black uppercase tracking-[0.8em] text-amber-400 hover:text-white transition-all underline decoration-amber-400/40 underline-offset-8">
                    VIEW_PROBABILITY_MAP <ArrowUpRight size={32} className="group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform" />
                 </button>
              </div>
           </div>
        </section>

        {/* PROJECTS */}
        <section className="py-80 text-left">
           <div className="flex flex-col md:flex-row justify-between items-end gap-20 mb-60 text-left">
              <h2 className="text-8xl md:text-[12vw] font-black italic uppercase tracking-tighter italic leading-none text-left">Archives_</h2>
              <p className="text-xs font-bold uppercase tracking-widest opacity-20 max-w-sm text-left mb-10 font-serif underline decoration-amber-400/20 underline-offset-8 decoration-2 italic">A curated chronological sequence of technical architectures deployed across global agency ecosystems.</p>
           </div>
           <div className="grid grid-cols-1 gap-32 text-left">
              {data.completed_projects.map((p, i) => (
                 <div key={i} className="flex flex-col lg:flex-row gap-32 border-b border-white/5 pb-32 group text-left">
                    <div className="lg:w-2/5 aspect-[4/5] bg-[#111] overflow-hidden shadow-2xl relative">
                       <img src={`https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&u=${i}`} alt={p.project_name} className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" />
                       <div className="absolute inset-0 bg-amber-500/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="lg:w-3/5 flex flex-col justify-between items-start text-left">
                       <div className="text-left">
                          <span className="text-[11px] font-black uppercase tracking-[0.8em] text-amber-500 mb-12 block italic font-sans italic">PROTOCOL_NODE_v{i+10}</span>
                          <h3 className="text-6xl md:text-8xl font-black italic uppercase italic tracking-tighter mb-12 italic leading-tight">{p.project_name}</h3>
                          <p className="text-2xl text-white/20 italic leading-relaxed mb-16 italic font-serif italic">{p.problem}</p>
                       </div>
                       <div className="w-full flex flex-col gap-12 text-left">
                          <div className="flex flex-wrap gap-4">
                             {p.technologies?.slice(0, 5).map((t, j) => (
                                <span key={j} className="text-[10px] font-black uppercase tracking-widest border border-white/10 px-8 py-3 rounded-full hover:bg-amber-400 hover:text-black hover:border-amber-400 transition-all cursor-crosshair">{t}</span>
                             ))}
                          </div>
                          <div className="w-full h-[1px] bg-white/5" />
                          <button className="flex items-center gap-6 text-[11px] font-black uppercase tracking-[0.6em] text-white/20 hover:text-amber-400 transition-all">ACCESS_TECHNICAL_LOGS <ChevronRight size={20} /></button>
                       </div>
                    </div>
                 </div>
              ))}
           </div>
        </section>

        {/* FOOTER */}
        <footer className="py-80 border-t border-white/5 bg-[#080808] -mx-16 lg:-mx-44 px-16 lg:px-44 text-left">
           <div className="flex flex-col lg:flex-row justify-between gap-60 text-left">
              <div className="text-left">
                 <h2 className="text-8xl md:text-[14vw] font-black italic uppercase tracking-tighter mb-20 italic font-serif leading-none">Birth a<br /><span className="text-amber-400">Nova.</span></h2>
                 <a href={`mailto:${data.brand.email}`} className="text-3xl md:text-8xl font-black italic hover:text-amber-400 transition-all underline decoration-amber-400/20 underline-offset-[24px] decoration-4 uppercase tracking-tighter">{data.brand.email}</a>
              </div>
              <div className="flex flex-col justify-end items-start lg:items-end gap-32 text-left">
                 <div className="flex gap-32 text-left text-[11px] font-black uppercase tracking-[0.8em] text-white/20 italic">
                    <div className="flex flex-col gap-10">
                       <span className="text-white/40">Network</span>
                       {['Twitter', 'GitHub', 'LinkedIn'].map(l => (
                         <a key={l} href="#" className="hover:text-amber-400 transition-colors uppercase">[{l}]</a>
                       ))}
                    </div>
                 </div>
                 <div className="flex items-center gap-10 text-[11px] font-black uppercase tracking-[0.4em] text-white/10 italic">
                    <Compass size={24} className="text-amber-400" />
                    <span>{data.brand.location} // GLOBAL_HQ</span>
                 </div>
              </div>
           </div>
           <div className="mt-80 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.5em] text-white/5 italic">
              <span>SECURITY_CLEARANCE_LEAL_V20</span>
              <span>© {new Date().getFullYear()} // {data.brand.name} // STELLAR_ENG_SYS</span>
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
