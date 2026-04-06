import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CompanyPortfolio as data } from './CompanyPortfolioData';
import { 
  ArrowRight, ShieldCheck, Mail, Phone, ChevronDown, CheckCircle, 
  Star, ExternalLink, Activity, Terminal, Zap, Cpu, Globe, 
  Lock, Layout, Box, Monitor, Database
} from 'lucide-react';

// --- Technical Components ---

const ScanLines = () => (
  <div className="fixed inset-0 pointer-events-none z-[99] opacity-[0.03] overflow-hidden">
    <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,black_50%)] bg-[length:100%_4px] animate-[scan_10s_linear_infinite]" />
  </div>
);

const NodeIndicator = ({ label, value }) => (
  <div className="flex flex-col gap-1">
    <span className="text-[9px] uppercase tracking-[0.2em] text-slate-500 font-mono italic">{label}</span>
    <span className="text-white font-black tracking-tighter text-lg">{value}</span>
  </div>
);

const WindowControls = () => (
  <div className="flex gap-2">
    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50 group-hover:bg-red-500 transition-colors" />
    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50 group-hover:bg-yellow-500 transition-colors" />
    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50 group-hover:bg-green-500 transition-colors" />
  </div>
);

export default function CompanyPortfolio3() {
  const [activeTab, setActiveTab] = useState(0);
  const [isHovered, setIsHovered] = useState(null);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-purple-500/30 overflow-x-hidden relative">
      <ScanLines />
      
      {/* MESH GRADIENT BACKGROUND */}
      <div className="fixed inset-0 min-h-screen w-full pointer-events-none z-0 overflow-hidden bg-[#020617]">
         <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vh] bg-purple-600/20 rounded-full blur-[150px] mix-blend-screen animate-[pulse_10s_ease-in-out_infinite]" />
         <div className="absolute top-[20%] right-[-10%] w-[60vw] h-[60vh] bg-blue-600/10 rounded-full blur-[180px] mix-blend-screen animate-[pulse_15s_ease-in-out_infinite_reverse]" />
         <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 400 400%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')] opacity-[0.02] mix-blend-overlay"></div>
      </div>

      {/* FLOATING GLASS NAV */}
      <nav className="fixed top-6 inset-x-0 z-[100] flex justify-center px-4 pointer-events-none">
        <div className="backdrop-blur-3xl bg-white/5 border border-white/10 rounded-full px-8 py-4 flex items-center justify-between w-full max-w-5xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] pointer-events-auto">
          <div className="flex items-center gap-4">
             <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center font-black italic text-lg shadow-inner">
                {data.brand.name.charAt(0)}
             </div>
             <div className="flex flex-col">
                <span className="font-black text-xs tracking-[0.2em] uppercase text-white leading-none">{data.brand.name}</span>
                <span className="text-[8px] font-mono text-purple-400 mt-1 uppercase tracking-widest hidden sm:block">Status: Online // Sec_Node_03</span>
             </div>
          </div>
          
          <div className="hidden md:flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
             <a href="#services" className="hover:text-white transition-colors flex items-center gap-2"><Cpu size={12} /> Expertise</a>
             <a href="#work" className="hover:text-white transition-colors flex items-center gap-2"><Activity size={12} /> Protocols</a>
             <a href="#pricing" className="hover:text-white transition-colors flex items-center gap-2"><Lock size={12} /> Access</a>
          </div>

          <a href="#contact" className="px-6 py-2.5 rounded-full bg-white text-black text-[10px] font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl shadow-white/10">
            Initialize
          </a>
        </div>
      </nav>

      <main className="relative z-10 space-y-40 pb-40">
        
        {/* HERO: OPERATIONAL OVERVIEW */}
        <section className="pt-48 px-6 min-h-[95vh] flex flex-col justify-center items-center text-center relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/5 rounded-full blur-[200px]" />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}
              className="inline-flex items-center gap-4 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-3xl mb-12 shadow-2xl relative group"
            >
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
              </div>
              <span className="text-[10px] font-black tracking-[0.3em] uppercase text-white/80 font-mono">System Diagnostic: Optimal</span>
            </motion.div>

            <motion.h1 
               initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
               className="text-6xl sm:text-7xl md:text-9xl lg:text-[160px] font-black tracking-tighter leading-[0.8] mb-12 text-white relative z-10"
            >
              Vision.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-500 italic drop-shadow-[0_0_30px_rgba(168,85,247,0.3)]">Engineered.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }}
              className="text-lg md:text-2xl text-slate-400 font-light max-w-3xl mx-auto leading-relaxed mb-20 px-4"
            >
              {data.hero.subtitle}
            </motion.p>

            <motion.div 
               initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.6 }}
               className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 bg-white/5 border border-white/10 backdrop-blur-3xl rounded-[3rem] p-10 md:p-14 max-w-5xl shadow-[0_0_100px_rgba(0,0,0,0.5)] border-t-white/20"
            >
               {data.stats.map((stat, i) => (
                  <NodeIndicator key={i} label={stat.label} value={stat.value} />
               ))}
            </motion.div>
        </section>

        {/* LOGO MARQUEE (TRUST) */}
        {data.featured_in && (
          <section className="border-y border-white/5 bg-white/[0.02] backdrop-blur-sm overflow-hidden relative flex py-10">
             <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#020617] to-transparent z-10 pointer-events-none" />
             <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#020617] to-transparent z-10 pointer-events-none" />
             <div className="flex gap-20 animate-[marquee_40s_linear_infinite] px-10 cursor-default whitespace-nowrap opacity-20 hover:opacity-50 transition-opacity">
                 {[...data.featured_in, ...data.featured_in, ...data.featured_in, ...data.featured_in].map((item, i) => (
                   <div key={i} className="text-2xl md:text-3xl font-black uppercase tracking-[0.4em] text-white flex items-center gap-8 italic">
                      {item} <div className="w-3 h-3 rounded-full bg-purple-500" />
                   </div>
                 ))}
             </div>
          </section>
        )}

        {/* SERVICES: OS MODULES */}
        <section id="services" className="px-6 max-w-7xl mx-auto">
          <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-12">
             <div className="max-w-2xl text-left">
                <div className="text-purple-500 text-[10px] font-black tracking-[0.5em] uppercase mb-4">Core Framework</div>
                <h2 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter leading-none mb-8">Managed Architecture.</h2>
                <p className="text-xl text-slate-400 font-light leading-relaxed">Enterprise modules engineered for massive concurrency and 99.9% production resilience.</p>
             </div>
             <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center animate-bounce hidden md:flex">
                <ChevronDown size={24} className="text-slate-500" />
             </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             {data.services.map((service, i) => (
               <motion.div 
                  key={i} 
                  whileHover={{ y: -10 }}
                  className="group p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl hover:bg-white/[0.05] transition-all duration-700 shadow-2xl relative overflow-hidden text-left"
               >
                 <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                 
                 <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500">
                   {i === 0 ? <Box size={32} /> : i === 1 ? <Layout size={32} /> : <Database size={32} />}
                 </div>
                 <h3 className="text-3xl font-bold text-white mb-6 uppercase tracking-tighter italic">{service.category}</h3>
                 <p className="text-slate-400 font-light text-lg leading-relaxed mb-12">{service.description}</p>
                 
                 <div className="space-y-4 pt-10 border-t border-white/5">
                    {service.features.map((feat, idx) => (
                       <div key={idx} className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-slate-500">
                          <CheckCircle size={14} className="text-purple-500" /> {feat}
                       </div>
                    ))}
                 </div>
               </motion.div>
             ))}
          </div>
        </section>

        {/* WORK: ACTIVE PROTOCOLS */}
        <section id="work" className="px-6 max-w-7xl mx-auto">
           <div className="mb-32 text-center relative">
             <div className="absolute inset-0 top-1/2 -translate-y-1/2 text-[15vw] font-black opacity-[0.02] whitespace-nowrap select-none overflow-hidden uppercase italic">Production Environments</div>
             <h2 className="text-5xl md:text-8xl font-black text-white relative z-10 italic">Protocols <span className="text-slate-700">_01.</span></h2>
          </div>
          
          <div className="space-y-40">
             {data.completed_projects.map((proj, i) => (
               <div key={i} className={`flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 lg:gap-24 items-center`}>
                  
                  {/* TERMINAL WINDOW: HIGH-IMPACT VISUAL */}
                  <div className="w-full lg:w-1/2 aspect-[4/3] rounded-[3rem] bg-[#0a0a0a] border border-white/10 overflow-hidden relative shadow-[0_0_150px_rgba(0,0,0,0.8)] group ring-1 ring-white/5">
                     {/* Window Header */}
                     <div className="h-14 bg-white/5 flex items-center justify-between px-8 border-b border-white/10 backdrop-blur-xl relative z-10">
                        <WindowControls />
                        <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest flex items-center gap-2">
                           <Terminal size={12} /> protocol_v{i+1}.sys
                        </div>
                        <div className="flex gap-4">
                           <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        </div>
                     </div>
                     
                     {/* Terminal Body: DYNAMIC HUD */}
                     <div className="absolute inset-0 pt-14 p-10 font-mono text-[10px] sm:text-sm text-left overflow-hidden">
                        {/* Background Data Stream */}
                        <div className="absolute inset-0 opacity-[0.03] select-none pointer-events-none p-4 overflow-hidden leading-tight font-mono whitespace-pre text-[8px]">
                           {Array(20).fill(0).map((_, idx) => (
                             <div key={idx} className="mb-1 truncate">
                               {`0x${Math.random().toString(16).slice(2, 10)} >> CLUSTER_INIT_${idx} >> STATUS: ${Math.random() > 0.5 ? 'SYNC' : 'BUSY'} >> LATENCY: ${Math.floor(Math.random() * 100)}ms`}
                             </div>
                           ))}
                        </div>

                        <div className="relative z-10 space-y-6">
                           <div className="flex gap-3 text-purple-400">
                              <span className="opacity-40 text-white">{">"}</span>
                              <span className="text-white font-black uppercase tracking-[0.2em]">{proj.project_name}</span>
                           </div>
                           <div className="flex gap-3 text-green-500 text-[10px] font-black italic">
                              <span className="opacity-40">{">"}</span>
                              <span className="opacity-80 flex items-center gap-2">
                                 <Activity size={10} className="animate-pulse" /> NETWORK_PROTOCOL_INITIALIZED
                              </span>
                           </div>
                           
                           {/* DYNAMIC VISUALIZATION CENTER */}
                           <div className="mt-8 relative group-hover:scale-[1.02] transition-transform duration-700">
                              <div className="h-48 md:h-64 w-full rounded-2xl border border-white/10 bg-white/[0.02] relative overflow-hidden flex items-center justify-center backdrop-blur-sm">
                                 {/* Scanning Line */}
                                 <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent top-0 animate-[scan_3s_ease-in-out_infinite]" />
                                 
                                 {/* HUD Reticle */}
                                 <div className="absolute w-32 h-32 md:w-48 md:h-48 border border-white/5 rounded-full animate-[spin_20s_linear_infinite]" />
                                 <div className="absolute w-24 h-24 md:w-40 md:h-40 border border-purple-500/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                                 
                                 <div className="relative flex flex-col items-center">
                                    <Box size={48} className="text-purple-400 animate-pulse drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]" />
                                    <div className="mt-6 px-4 py-1.5 rounded-md bg-purple-500/10 border border-purple-500/20 text-[8px] font-black text-purple-300 uppercase tracking-[0.3em]">
                                       System_Authorized_v1.0
                                    </div>
                                 </div>

                                 {/* Corner Brackets */}
                                 <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-white/10" />
                                 <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-white/10" />
                                 <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-white/10" />
                                 <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-white/10" />
                              </div>
                           </div>

                           <div className="flex justify-between items-center text-[10px] text-slate-500 font-black tracking-widest pt-4">
                              <div className="flex gap-4">
                                 <span>[CORE: 08]</span>
                                 <span>[UPTIME: 100%]</span>
                              </div>
                              <div className="text-purple-400/50">SECURE_TUNNEL_ACTIVE</div>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* DATA: REFINED TEXT WEIGHT */}
                  <div className="w-full lg:w-1/2 space-y-8 text-left">
                     <div className="flex flex-wrap items-center gap-4">
                        <div className="px-5 py-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] font-black tracking-[0.3em] uppercase">
                          {proj.type}
                        </div>
                        <div className="text-slate-600 font-mono text-[10px] italic tracking-tighter">PRTCL_ID: 0x{i+5821}</div>
                     </div>
                     <h3 className="text-5xl md:text-6xl lg:text-7xl font-black text-white italic tracking-tighter leading-[0.9] drop-shadow-2xl">{proj.project_name}</h3>
                     <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed max-w-xl">{proj.description}</p>
                     
                     <div className="grid sm:grid-cols-2 gap-6 pt-10 border-t border-white/5">
                        <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl group hover:border-white/10 transition-all shadow-2xl hover:bg-white/[0.03]">
                           <div className="text-[10px] font-black uppercase text-slate-600 tracking-[0.4em] mb-4">Initial_Logic</div>
                           <div className="text-sm text-slate-300 font-light leading-relaxed italic">"{proj.problem}"</div>
                        </div>
                        <div className="p-8 rounded-[2rem] bg-gradient-to-br from-purple-500/5 to-transparent border border-purple-500/10 backdrop-blur-xl group hover:border-purple-500/20 transition-all shadow-2xl hover:bg-purple-500/10">
                           <div className="text-[10px] font-black uppercase text-purple-400 tracking-[0.4em] mb-4">Production_Build</div>
                           <div className="text-sm text-slate-200 font-medium leading-relaxed italic">"{proj.solution}"</div>
                        </div>
                     </div>

                     <div className="flex flex-wrap gap-2 pt-4">
                        {proj.tech_stack.map((tech, idx) => (
                           <span key={idx} className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-[9px] font-black uppercase tracking-widest text-slate-500 hover:text-white hover:border-white/20 transition-all cursor-default">{tech}</span>
                        ))}
                     </div>
                  </div>
               </div>
             ))}
          </div>
        </section>

        {/* GUARANTEES (THE 3 PILLARS) */}
        {data.guarantees && (
          <section className="px-6 max-w-7xl mx-auto">
             <div className="p-16 md:p-24 rounded-[5rem] bg-white/[0.01] backdrop-blur-3xl border border-white/5 shadow-[0_0_150px_rgba(0,0,0,0.5)] relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30" />
                
                <div className="text-center mb-24">
                  <div className="text-purple-500 text-[10px] font-black tracking-[0.6em] uppercase mb-6 italic">Risk Management</div>
                  <h2 className="text-5xl md:text-8xl font-black text-white italic tracking-tighter">The Guarantees.</h2>
                </div>
                
                <div className="grid lg:grid-cols-3 gap-16 md:gap-20 relative z-10">
                   {data.guarantees.map((guarantee, i) => (
                      <div key={i} className="text-center group/card">
                         <div className="w-24 h-24 mx-auto rounded-3xl bg-white/[0.02] border border-white/5 flex items-center justify-center mb-10 shadow-inner group-hover/card:bg-purple-600 group-hover/card:scale-110 transition-all duration-700">
                            <ShieldCheck size={40} className="text-slate-500 group-hover/card:text-white transition-colors" />
                         </div>
                         <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-tighter italic">{guarantee.title}</h3>
                         <p className="text-slate-400 font-light leading-relaxed italic px-4">"{guarantee.description}"</p>
                      </div>
                   ))}
                </div>
             </div>
          </section>
        )}

        {/* TESTIMONIALS: AUTHORIZED CHANNELS */}
        <section className="overflow-hidden relative py-20 px-6">
          <div className="max-w-7xl mx-auto mb-24 flex flex-col md:flex-row justify-between items-end gap-10">
             <div className="text-left">
                <span className="text-purple-500 text-[10px] font-black tracking-[0.5em] uppercase mb-4 block">Feedback Pipeline</span>
                <h2 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter leading-none">Authorized by Leaders.</h2>
             </div>
             <div className="flex items-center gap-4 text-slate-500 font-mono text-[10px] uppercase tracking-widest hidden md:flex">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> Live_Authorization_Stream
             </div>
          </div>
          
          <div className="relative flex">
            <div className="absolute inset-y-0 left-0 w-32 md:w-60 bg-gradient-to-r from-[#020617] to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 md:w-60 bg-gradient-to-l from-[#020617] to-transparent z-20 pointer-events-none" />
            
            <div className="flex gap-10 animate-[marquee_60s_linear_infinite] px-6 hover:[animation-play-state:paused] cursor-default whitespace-nowrap pb-10">
              {[...data.testimonials, ...data.testimonials, ...data.testimonials].map((test, i) => (
                <div key={i} className="w-[85vw] md:w-[600px] shrink-0 p-12 md:p-20 rounded-[4rem] bg-white/[0.01] backdrop-blur-3xl border border-white/5 shadow-2xl relative group overflow-hidden flex flex-col hover:bg-white/[0.03] hover:border-white/10 transition-all duration-700 whitespace-normal text-left">
                  <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12">
                     <Lock size={120} />
                  </div>
                  
                  <div className="flex gap-1 text-purple-400 mb-10">
                    {[...Array(test.rating)].map((_, idx) => <Star key={idx} fill="currentColor" size={18} />)}
                  </div>
                  
                  <p className="text-xl md:text-3xl font-light text-slate-300 mb-16 leading-relaxed italic flex-1 relative z-10">
                    "{test.feedback}"
                  </p>
                  
                  <div className="flex items-center gap-8 mt-auto relative z-10">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center font-black text-white text-3xl shadow-inner group-hover:scale-110 transition-transform">
                      {test.name.charAt(0)}
                    </div>
                    <div className="flex flex-col">
                      <div className="font-black text-white tracking-widest text-xl uppercase italic">{test.name.split('|')[0]}</div>
                      <div className="text-[9px] text-purple-400 uppercase tracking-[0.5em] font-black mt-2">
                        {test.name.split('|')[1] || "Sector Leader"} // Verified_Identity
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ACCESS PROTOCOL: FINAL CTA */}
        <section id="contact" className="max-w-7xl mx-auto px-6 pt-40 flex flex-col items-center">
           <div className="w-32 h-32 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center mb-16 relative">
              <div className="absolute inset-0 bg-purple-500/20 rounded-3xl blur-2xl animate-pulse" />
              <Zap size={60} className="text-white relative z-10" />
           </div>
           
           <h2 className="text-6xl md:text-[10vw] font-black tracking-[0.02em] text-white mb-12 text-center uppercase leading-[0.8] italic">Ready to <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-600">Execute?</span></h2>
           
           <p className="text-lg md:text-2xl text-slate-400 font-light mb-20 max-w-2xl text-center leading-relaxed">System diagnostics suggest we are a perfect architectural match. Initialize the request protocol below.</p>
           
           <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-60 w-full max-w-2xl">
              <a href={`mailto:${data.contact.email}`} className="w-full sm:w-auto px-16 py-8 rounded-[2.5rem] bg-white text-black font-black tracking-widest uppercase text-xs hover:bg-slate-200 transition-all flex items-center gap-6 justify-center shadow-[0_0_50px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 group">
                 <Mail size={20} className="group-hover:rotate-12 transition-transform" /> Transmit_Request
              </a>
              <div className="w-full sm:w-auto px-16 py-8 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-3xl text-white font-black tracking-[0.3em] text-[10px] uppercase flex items-center gap-6 justify-center italic">
                 <Phone size={20} className="text-slate-500" /> {data.contact.phone}
              </div>
           </div>
           
           {/* DEEP FOOTER */}
           <div className="w-full pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center font-black italic">{data.footer.brand.charAt(0)}</div>
                 <div className="flex flex-col">
                    <span className="text-xs font-black uppercase tracking-widest text-white">{data.footer.brand}</span>
                    <span className="text-[10px] text-slate-500 font-mono italic">{data.footer.tagline}</span>
                 </div>
              </div>
              
              <div className="flex gap-10 text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
                 <a href="#" className="hover:text-white transition-colors">Github</a>
                 <a href="#" className="hover:text-white transition-colors">Twitter</a>
                 <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              </div>

              <div className="text-[9px] font-mono text-slate-600 uppercase tracking-widest bg-white/5 px-6 py-2 rounded-full border border-white/5">
                 {data.footer.copyright} // PROTO_V3_2026
              </div>
           </div>
        </section>

      </main>

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Outfit:wght@300;400;700;900&display=swap');
        
        body { font-family: 'Outfit', sans-serif; }
        .font-mono { font-family: 'JetBrains+Mono', monospace; }

        @keyframes scan {
          from { transform: translateY(-100%); }
          to { transform: translateY(100%); }
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.25; transform: scale(1.1); }
        }

        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #020617; }
        ::-webkit-scrollbar-thumb { background: #1e293b; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #334155; }
      `}} />
    </div>
  );
}
