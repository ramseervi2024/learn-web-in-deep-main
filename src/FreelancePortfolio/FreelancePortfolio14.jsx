import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FreelancePortfolio as data } from './freelanceportfoliodata';
import {
   Cpu, Terminal, Activity, Monitor, Layout,
   Smartphone, Database, Check, Globe, Menu, X,
   Twitter, Github, Linkedin, Settings, Search, Bell,
   Maximize2
} from 'lucide-react';

// --- Sub-Components ---

const SystemStatus = () => (
   <div className="fixed top-24 left-8 z-50 flex flex-col gap-6 font-mono text-[9px] uppercase tracking-widest text-[#22d3ee]/40 hidden lg:flex select-none pointer-events-none">
      <div className="flex items-center gap-3 border-l-2 border-[#22d3ee]/20 pl-4 py-1">
         <div className="w-1.5 h-1.5 rounded-full bg-[#22d3ee] animate-pulse" />
         <span>Kernel: Stable_v14.0.0</span>
      </div>
      <div className="flex items-center gap-3 border-l-2 border-[#d946ef]/20 pl-4 py-1">
         <div className="w-1.5 h-1.5 rounded-full bg-[#d946ef]" />
         <span>Network: Active_Global</span>
      </div>
      <div className="flex items-center gap-3 border-l-2 border-white/10 pl-4 py-1">
         <div className="w-40 h-1 bg-white/5 relative overflow-hidden">
            <motion.div animate={{ x: ["-100%", "100%"] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute inset-0 bg-[#22d3ee]/20" />
         </div>
      </div>
   </div>
);

const GlassCard = ({ children, title, className = "", noPad = false }) => (
   <div className={`backdrop-blur-xl bg-white/[0.02] border border-white/5 rounded-lg overflow-hidden shadow-2xl group ${className}`}>
      {title && (
         <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between bg-white/[0.01]">
            <div className="flex items-center gap-3">
               <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/20" />
               </div>
               <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/20 ml-2">{title}</span>
            </div>
            <Maximize2 size={12} className="text-white/10" />
         </div>
      )}
      <div className={noPad ? "" : "p-8"}>
         {children}
      </div>
   </div>
);

const SectionHeading = ({ number, title }) => (
   <div className="flex items-center gap-8 mb-12 md:mb-20">
      <div className="flex flex-col">
         <span className="text-[10px] font-mono text-[#22d3ee] mb-1">MODULE_ID_{number || '00'}</span>
         <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter italic text-white/90">
            {title || 'Untitled'}
         </h2>
      </div>
      <div className="h-[2px] grow bg-gradient-to-r from-[#22d3ee]/20 to-transparent" />
   </div>
);

export default function FreelancePortfolio14() {
   const [scrolled, setScrolled] = useState(false);
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   useEffect(() => {
      const handleS = () => setScrolled(window.scrollY > 20);
      window.addEventListener('scroll', handleS);
      return () => window.removeEventListener('scroll', handleS);
   }, []);

   if (!data) return null;

   return (
      <div className="bg-[#030712] text-white selection:bg-[#22d3ee] selection:text-black font-sans min-h-screen relative overflow-x-hidden">

         {/* Global CRT Overlays */}
         <div className="fixed inset-0 pointer-events-none z-[999] opacity-[0.03] select-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
         <div className="fixed inset-0 pointer-events-none z-[998] opacity-[0.02] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />

         {/* <SystemStatus /> */}

         {/* OS Navigation Bar */}
         <header className={`fixed top-0 inset-x-0 z-[100] transition-all duration-700 px-8 py-6 ${scrolled ? 'bg-black/60 backdrop-blur-3xl border-b border-white/5 py-4' : 'bg-transparent'}`}>
            <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
               <div className="flex items-center gap-8">
                  <div className="w-10 h-10 border border-[#22d3ee]/40 rounded-lg flex items-center justify-center group cursor-pointer hover:bg-[#22d3ee] transition-all">
                     <Cpu size={18} className="text-[#22d3ee] group-hover:text-black transition-colors" />
                  </div>
                  <div className="flex flex-col">
                     <span className="text-sm font-black tracking-tighter uppercase leading-none">{data?.brand?.name}</span>
                     <span className="text-[9px] font-mono text-white/30 uppercase tracking-[0.2em]">{data?.brand?.website}</span>
                  </div>
               </div>

               <nav className="hidden lg:flex items-center gap-10 text-[10px] uppercase font-bold tracking-[0.3em] text-white/80">
                  {['Services', 'Projects', 'Pricing', 'Contact'].map(link => (
                     <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-[#22d3ee] transition-all hover:tracking-[0.4em]">{link}</a>
                  ))}
                  <div className="w-[1px] h-6 bg-white/20 mx-2" />
                  <div className="flex items-center gap-6">
                     <Search size={16} />
                     <Bell size={16} />
                     <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#22d3ee] to-[#d946ef] p-[1px]">
                        <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-[10px] font-black italic select-none">RP</div>
                     </div>
                  </div>
               </nav>

               <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="lg:hidden text-white relative z-[110]"
               >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
               </button>
            </div>
         </header>

         {/* Mobile Menu Overlay */}
         <AnimatePresence>
            {isMenuOpen && (
               <motion.div
                  initial={{ opacity: 0, x: "100%" }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: "100%" }}
                  className="fixed inset-0 z-[105] bg-black p-12 flex flex-col items-center justify-center lg:hidden"
               >
                  <div className="flex flex-col gap-12 text-center">
                     {['Services', 'Projects', 'Pricing', 'Contact'].map(link => (
                        <a
                           key={link}
                           href={`#${link.toLowerCase()}`}
                           onClick={() => setIsMenuOpen(false)}
                           className="text-5xl font-black italic uppercase tracking-tighter text-white/40 hover:text-[#22d3ee]"
                        >
                           {link}
                        </a>
                     ))}
                  </div>
               </motion.div>
            )}
         </AnimatePresence>

         <main className="relative z-10">

            {/* HERO SECTION: System Core */}
            <section className="min-h-screen flex items-center justify-center p-8 lg:p-32 pt-24 lg:pt-0 relative">
               <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                  <div className="text-left relative z-10 order-2 lg:order-1">
                     <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="mb-8 inline-flex items-center gap-4 px-5 py-2 border border-[#22d3ee]/20 bg-[#22d3ee]/5 rounded-sm"
                     >
                        <Activity size={12} className="text-[#22d3ee]" />
                        <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#22d3ee]">{data?.brand?.business_type}</span>
                     </motion.div>
                     <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-6xl md:text-[7vw] font-black leading-[0.9] tracking-tighter uppercase italic text-white mb-10"
                     >
                        Visionary<br /> <span className="text-transparent" style={{ WebkitTextStroke: "2px rgba(255,255,255,0.6)", color: "transparent" }}>Systems.</span>
                     </motion.h1>
                     <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg lg:text-xl text-white/70 max-w-xl font-light leading-relaxed mb-12"
                     >
                        {data?.hero?.subtitle}
                     </motion.p>
                     <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap gap-8">
                        <button className="px-10 py-5 bg-[#22d3ee] text-black text-[11px] font-black uppercase tracking-[0.4em] rounded-sm hover:-translate-y-1 transition-all shadow-lg hover:shadow-[#22d3ee]/20">
                           Initialize Core
                        </button>
                        <button className="px-10 py-5 border border-white/10 text-[11px] font-black uppercase tracking-[0.4em] rounded-sm hover:bg-white/5 transition-all">
                           System Stats
                        </button>
                     </motion.div>
                  </div>

                  {/* Core Visualization */}
                  <div className="relative order-1 lg:order-2">
                     <div className="relative w-full aspect-square flex items-center justify-center">
                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border-[3px] border-dashed border-[#22d3ee]/10 rounded-full" />
                        <motion.div animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute inset-16 border border-[#d946ef]/20 rounded-full" />
                        <div className="absolute inset-[30%] bg-gradient-to-br from-[#22d3ee] to-[#d946ef] rounded-[20%] blur-[120px] opacity-20" />

                        <GlassCard className="relative z-10 w-[240px] h-[240px] border-[#22d3ee]/30 shadow-[0_0_60px_rgba(34,211,238,0.15)] flex flex-col items-center justify-center">
                           <Terminal size={48} className="text-[#22d3ee] mb-6" />
                           <span className="text-[9px] font-mono text-[#22d3ee] uppercase tracking-[0.5em] mb-2 px-3 py-1 bg-[#22d3ee]/10 rounded-sm">Operational</span>
                           <div className="text-4xl font-black italic tracking-tighter text-white">99.9%</div>
                        </GlassCard>
                     </div>
                  </div>
               </div>
            </section>

            {/* SERVICES: Modules */}
            <section id="services" className="py-20 lg:py-32 px-8 lg:px-32">
               <SectionHeading number="01" title="Service Modules" />
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {data?.services?.map((service, i) => (
                     <GlassCard key={`service-${i}`} title={`Module // 0${i + 1}`} className="hover:border-[#22d3ee]/30 transition-all hover:-translate-y-2 group">
                        <div className="w-16 h-16 bg-[#22d3ee]/10 rounded-xl flex items-center justify-center mb-8 border border-[#22d3ee]/10 group-hover:bg-[#22d3ee] group-hover:text-black transition-all">
                           {i === 0 ? <Layout size={32} /> : i === 1 ? <Smartphone size={32} /> : <Database size={32} />}
                        </div>
                        <h3 className="text-2xl font-black italic uppercase tracking-tighter text-white/90 mb-4">{service.category}</h3>
                        <p className="text-white/60 text-sm leading-relaxed mb-8 font-light">{service.description}</p>
                        <div className="flex flex-wrap gap-2">
                           {service?.features?.map((feat, fidx) => (
                              <span key={`feat-${i}-${fidx}`} className="text-[8px] font-mono uppercase tracking-widest text-[#22d3ee] py-1.5 px-3 bg-[#22d3ee]/5 border border-[#22d3ee]/10">{feat}</span>
                           ))}
                        </div>
                     </GlassCard>
                  ))}
               </div>
            </section>

            {/* PROJECTS: System Files */}
            <section id="projects" className="py-20 lg:py-32 px-8 lg:px-32">
               <SectionHeading number="02" title="Success Protocols" />
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {data?.completed_projects?.map((project, i) => (
                     <GlassCard key={`proj-${i}`} title={`Execution_ID: ${project.project_name.replace(/\s/g, '_')}`} noPad className="hover:border-[#d946ef]/30 transition-all">
                        <div className="grid grid-cols-1 lg:grid-cols-12">
                           <div className="lg:col-span-5 aspect-video lg:aspect-square bg-[#050505] relative flex items-center justify-center border-b lg:border-b-0 lg:border-r border-white/5 overflow-hidden group">
                              <Monitor size={100} className="text-white/5 group-hover:text-[#d946ef]/20 transition-all duration-1000 group-hover:scale-125" />
                              <div className="absolute inset-0 bg-gradient-to-tr from-[#d946ef]/10 to-transparent pointer-events-none" />
                           </div>
                           <div className="lg:col-span-7 p-10 flex flex-col justify-between text-left">
                              <div>
                                 <h3 className="text-3xl font-black italic tracking-tighter uppercase text-white/90 mb-4">{project.project_name}</h3>
                                 <div className="flex gap-4 mb-8">
                                    <span className="text-[10px] font-mono text-[#d946ef] uppercase tracking-widest bg-[#d946ef]/5 px-3 py-1 border border-[#d946ef]/10 italic">{project.type}</span>
                                 </div>
                                 <p className="text-sm text-white/70 leading-relaxed font-light mb-8">{project.problem}</p>
                              </div>
                              <div className="grid grid-cols-2 gap-8 border-t border-white/5 pt-8">
                                 {project?.result?.map((res, ridx) => (
                                    <div key={`res-${i}-${ridx}`} className="flex flex-col gap-1">
                                       <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest">Kpi_Metric</span>
                                       <span className="text-sm font-bold italic text-[#d946ef]">{res}</span>
                                    </div>
                                 ))}
                              </div>
                           </div>
                        </div>
                     </GlassCard>
                  ))}
               </div>
            </section>

            {/* PRICING: License Keys */}
            <section id="pricing" className="py-20 lg:py-32 px-8 lg:px-32 bg-[#050505]/50">
               <SectionHeading number="03" title="Access Tokens" />
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {data?.pricing?.map((plan, i) => (
                     <GlassCard key={`plan-${i}`} className={`p-0 relative group transition-all duration-500 ${i === 1 ? 'border-[#22d3ee]/40' : ''}`}>
                        {i === 1 && <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#22d3ee] to-transparent z-20 shadow-[0_0_20px_#22d3ee]" />}
                        <div className="p-12 text-left">
                           <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-[#22d3ee] mb-8 block">Plan // {plan.plan}</span>
                           <div className="text-6xl font-black italic tracking-tighter mb-12 text-white/90">
                              {plan.price}<span className="text-sm font-mono opacity-20 ml-2">/Init</span>
                           </div>
                           <ul className="space-y-6">
                              {plan?.features?.map((f, fkey) => (
                                 <li key={`feat-${i}-${fkey}`} className="flex items-center gap-4 text-xs font-medium text-white/40 tracking-wider">
                                    <Check size={14} className="text-[#22d3ee]" /> {f}
                                 </li>
                              ))}
                           </ul>
                           <button className={`w-full py-5 rounded-sm text-[10px] uppercase font-black tracking-[0.4em] transition-all mt-16 ${i === 1 ? 'bg-[#22d3ee] text-black shadow-lg hover:shadow-[#22d3ee]/20' : 'bg-white/5 text-white/40 border border-white/5 hover:border-white/20 hover:text-white'}`}>
                              Acquire_License
                           </button>
                        </div>
                        <div className="bg-white/[0.01] px-12 py-4 border-t border-white/5 flex justify-between items-center opacity-40">
                           <span className="text-[8px] font-mono text-white/50 tracking-widest italic">Token_UID: RSTX_00{i}</span>
                           <Settings size={12} className="text-white/20 font-light" />
                        </div>
                     </GlassCard>
                  ))}
               </div>
            </section>

            {/* FOOTER: System Shutdown */}
            <footer className="py-24 px-8 lg:px-32 relative border-t border-white/5">
               <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16 items-start">
                  <div className="text-left w-full md:w-auto">
                     <div className="flex flex-col mb-10">
                        <span className="text-3xl font-black italic tracking-tighter uppercase text-white/80">{data?.brand?.name}</span>
                        <span className="text-[10px] font-mono text-[#22d3ee]/60 uppercase tracking-[0.5em]">Digital_Engine_01</span>
                     </div>
                     <p className="text-white/60 text-sm max-w-sm leading-relaxed mb-10 font-light italic">
                        {data?.brand?.description}
                     </p>
                     <div className="flex gap-8 text-white/20">
                        <Twitter size={20} className="hover:text-[#22d3ee] cursor-pointer transition-colors" />
                        <Github size={20} className="hover:text-[#22d3ee] cursor-pointer transition-colors" />
                        <Linkedin size={20} className="hover:text-[#22d3ee] cursor-pointer transition-colors" />
                     </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-12 w-full md:w-auto text-left md:text-right">
                     <div className="flex flex-col gap-2">
                        <span className="text-[9px] font-mono text-white/20 tracking-widest uppercase">Direct_Link</span>
                        <a href={`mailto:${data?.brand?.email}`} className="text-2xl md:text-4xl font-black italic text-[#22d3ee] hover:tracking-[0.05em] transition-all">{data?.brand?.email}</a>
                     </div>
                     <div className="flex flex-col gap-2">
                        <span className="text-[9px] font-mono text-white/20 tracking-widest uppercase">System_Geo</span>
                        <span className="text-xl font-bold italic tracking-tighter text-white/40">{data?.brand?.location}</span>
                     </div>
                  </div>
               </div>

               <div className="max-w-7xl mx-auto mt-24 py-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] font-mono uppercase tracking-[0.3em] text-white/20">
                  <div className="flex items-center gap-4">
                     <Globe size={14} className="text-[#22d3ee]/20" />
                     <span>RPS_DS // ARCHIVE_v14.0</span>
                  </div>
                  <span>© {new Date().getFullYear()} {data?.brand?.name}. All Handlers Finalized.</span>
                  <div className="flex items-center gap-6">
                     <span className="hover:text-white cursor-pointer transition-colors">Privacy_Protocol</span>
                     <span className="hover:text-white cursor-pointer transition-colors">Data_Security</span>
                  </div>
               </div>
            </footer>
         </main>

         <style dangerouslySetInnerHTML={{
            __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&family=JetBrains+Mono:wght@400;700&display=swap');
        
        body {
          font-family: 'Inter', sans-serif;
          background: #030712;
        }
        
        .font-mono {
          font-family: 'JetBrains Mono', monospace;
        }

        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #030712;
        }
        ::-webkit-scrollbar-thumb {
          background: #1e293b;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #334155;
        }
        
        section {
          position: relative;
        }
      `}} />
      </div>
   );
}
