import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioprofile as data } from './PersonalPortfolioData';
import { 
  ArrowRight, ShieldCheck, Mail, Phone, ChevronDown, CheckCircle, Star, ExternalLink, Activity, Code2, Smartphone, Terminal
} from 'lucide-react';

export default function Portfolio3() {
  const stats = [
    { label: 'Years Experience', value: `${data.personal_info.experience_years}+` },
    { label: 'Production Apps', value: `${data.projects.length}+` },
    { label: 'Core Expertise', value: `${data.core_expertise.length}` },
    { label: 'Client Retention', value: '100%' }
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-purple-500/30 overflow-x-hidden relative">
      
      {/* MESH GRADIENT BACKGROUND */}
      <div className="fixed inset-0 min-h-screen w-full pointer-events-none z-0 overflow-hidden bg-[#020617]">
         <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vh] bg-purple-600/30 rounded-full blur-[150px] mix-blend-screen animate-[pulse_10s_ease-in-out_infinite]" />
         <div className="absolute top-[20%] right-[-10%] w-[60vw] h-[60vh] bg-blue-600/20 rounded-full blur-[180px] mix-blend-screen animate-[pulse_15s_ease-in-out_infinite_reverse]" />
         <div className="absolute bottom-[-20%] left-[20%] w-[50vw] h-[60vh] bg-indigo-600/20 rounded-full blur-[150px] mix-blend-screen animate-[pulse_12s_ease-in-out_infinite]" />
         <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 400 400%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')] opacity-[0.03] mix-blend-overlay"></div>
      </div>

      {/* FLOATING GLASS NAV */}
      <nav className="fixed top-6 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
        <div className="backdrop-blur-3xl bg-white/5 border border-white/10 rounded-full px-8 py-4 flex items-center justify-between w-full max-w-5xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] pointer-events-auto">
          <div className="font-bold text-xl tracking-tighter text-white">{data.personal_info.name.split(' ')[0]}</div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
             <a href="#services" className="hover:text-white transition-colors">OS Architecture</a>
             <a href="#work" className="hover:text-white transition-colors">Protocols</a>
             <a href="#contact" className="hover:text-white transition-colors">Initialize</a>
          </div>
          <a href={`mailto:${data.personal_info.email}`} className="px-5 py-2 rounded-full bg-white text-black text-sm font-bold hover:scale-105 active:scale-95 transition-all">
            Connect
          </a>
        </div>
      </nav>

      <main className="relative z-10 space-y-40 pb-40">
        
        {/* HERO */}
        <section className="pt-48 px-6 min-h-[90vh] flex flex-col justify-center items-center text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: 'easeOut' }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-12 shadow-2xl"
            >
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
              </div>
              <span className="text-sm font-medium tracking-wide text-slate-200">{data.personal_info.availability}.</span>
            </motion.div>

            <motion.h1 
               initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
               className="text-5xl sm:text-6xl md:text-8xl lg:text-[140px] font-black tracking-tighter leading-none mb-10 text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/20"
            >
              Vision.<br/>Engineered.
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }}
              className="flex justify-center w-full"
            >
              <div className="flex flex-col sm:flex-row flex-wrap gap-8 md:gap-12 text-center items-center justify-center bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl p-6 md:p-8 max-w-4xl shadow-2xl w-[90vw] md:w-auto">
                 {stats.map((stat, i) => (
                    <div key={i} className="flex-1 min-w-[120px] md:min-w-[150px]">
                       <div className="text-3xl md:text-5xl font-black text-white mb-2">{stat.value}</div>
                       <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-slate-400 font-bold">{stat.label}</div>
                    </div>
                 ))}
              </div>
            </motion.div>
        </section>

        {/* FEATURED IN MARQUEE (TRUST) */}
        <section className="border-y border-white/10 bg-white/5 backdrop-blur-md overflow-hidden relative flex py-8">
            <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#020617] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#020617] to-transparent z-10 pointer-events-none" />
            <div className="flex gap-16 animate-[marquee_30s_linear_infinite] px-8 cursor-default whitespace-nowrap opacity-60">
                {[...data.technical_stack.mobile, ...data.technical_stack.frontend, ...data.technical_stack.backend_integration].map((item, i) => (
                    <div key={i} className="text-xl md:text-2xl font-bold uppercase tracking-widest text-slate-400">{item}</div>
                ))}
            </div>
        </section>

        {/* LIQUID SERVICES BENTO */}
        <section id="services" className="px-6 max-w-7xl mx-auto">
          <div className="mb-20 text-center md:text-left">
             <h2 className="text-4xl md:text-5xl font-black mb-6">System Architecture</h2>
             <p className="text-xl text-slate-400 font-light max-w-2xl">High-performance modules engineered for massive scale.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
             {data.services.map((service, i) => (
               <div key={i} className="group p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-2xl hover:bg-white/[0.08] transition-all duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-purple-500/10 hover:-translate-y-2">
                 <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center mb-8">
                   <div className="w-6 h-6 bg-white/80 rounded-full blur-[2px] group-hover:blur-0 transition-all duration-300"></div>
                 </div>
                 <h3 className="text-2xl font-bold text-white mb-4">{service}</h3>
                 <p className="text-slate-400 font-light leading-relaxed">Enterprise-grade implementation of {service} ensuring high availability and seamless user experience across all digital environments.</p>
                 <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300 tracking-wide">Optimization</span>
                    <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300 tracking-wide">Scalability</span>
                 </div>
               </div>
             ))}
          </div>
        </section>

        {/* WORK / PROTOCOLS */}
        <section id="work" className="px-6 max-w-7xl mx-auto">
           <div className="mb-20 text-center">
             <h2 className="text-4xl md:text-5xl font-black mb-6">Production Environments</h2>
             <p className="text-xl text-slate-400 font-light max-w-2xl mx-auto">Live protocols driving metric growth and user retention.</p>
          </div>
          
          <div className="space-y-32">
             {data.projects.map((proj, i) => (
               <div key={i} className={`flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}>
                  
                  {/* GLASS IMAGE MOCK */}
                  <div className="w-full lg:w-1/2 aspect-video rounded-[3rem] bg-gradient-to-br from-white/[0.08] to-transparent border border-white/20 backdrop-blur-3xl overflow-hidden relative group shadow-[0_0_80px_rgba(147,51,234,0.15)] flex flex-col hover:border-white/40 transition-colors duration-500">
                     <div className="h-14 border-b border-white/10 bg-white/5 flex items-center px-8 gap-3 backdrop-blur-xl">
                        <div className="w-4 h-4 rounded-full bg-slate-600 group-hover:bg-red-500 transition-colors"></div>
                        <div className="w-4 h-4 rounded-full bg-slate-600 group-hover:bg-yellow-500 transition-colors"></div>
                        <div className="w-4 h-4 rounded-full bg-slate-600 group-hover:bg-green-500 transition-colors"></div>
                     </div>
                     <div className="flex-1 flex justify-center items-center relative overflow-hidden bg-[#0a0a0a]">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0,transparent_100%)]"></div>
                        <div className="text-center group-hover:scale-110 transition-transform duration-500 p-8 w-full">
                           <div className="text-3xl md:text-4xl lg:text-5xl font-black text-white/20 group-hover:text-white/90 break-words text-balance">{proj.category}</div>
                        </div>
                     </div>
                  </div>

                  {/* DATA */}
                  <div className="w-full lg:w-1/2 space-y-8">
                     <div className="inline-flex px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold tracking-widest uppercase">
                       {proj.type}
                     </div>
                     <h3 className="text-4xl md:text-5xl font-black text-white">{proj.name}</h3>
                     <p className="text-xl text-slate-400 font-light">{proj.description}</p>
                     
                     <div className="grid sm:grid-cols-2 gap-6">
                        <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-inner">
                           <div className="text-xs font-bold uppercase text-slate-500 tracking-widest mb-3">Core Focus</div>
                           <div className="text-sm text-slate-300 font-light leading-relaxed truncate">{proj.features[0]}</div>
                        </div>
                        <div className="p-6 rounded-3xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 backdrop-blur-xl">
                           <div className="text-xs font-bold uppercase text-purple-400 tracking-widest mb-3">Key Output</div>
                           <div className="text-sm text-slate-200 font-light leading-relaxed truncate">{proj.features[1] || 'Optimized UI'}</div>
                        </div>
                     </div>

                     <div className="flex flex-wrap gap-2 text-balance">
                        {proj.technologies.slice(0, 5).map((tech, idx) => (
                           <span key={idx} className="px-5 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-sm font-semibold text-white shadow-lg">{tech}</span>
                        ))}
                     </div>
                  </div>
               </div>
             ))}
          </div>
        </section>

        {/* GUARANTEES (SaaS Capabilities) */}
        <section className="px-6 max-w-7xl mx-auto">
           <div className="p-10 md:p-16 rounded-[4rem] bg-white/5 backdrop-blur-3xl border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.5)]">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-black mb-4">Risk Architecture</h2>
                <p className="text-slate-400 font-light text-lg">Eliminating variables to guarantee production success.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-12 md:gap-16">
                 {data.saas_capabilities.slice(0, 6).map((capability, i) => (
                    <div key={i} className="text-center group">
                       <div className="w-20 h-20 mx-auto rounded-[2rem] bg-white/[0.03] border border-white/10 flex items-center justify-center mb-8 shadow-inner group-hover:bg-gradient-to-br group-hover:from-indigo-500 group-hover:to-purple-600 transition-all duration-500">
                          <ShieldCheck size={36} className="text-slate-400 group-hover:text-white transition-colors" />
                       </div>
                       <h3 className="text-xl font-bold text-white mb-4">{capability.split('(')[0]}</h3>
                       <p className="text-slate-400 font-light text-sm md:text-base leading-relaxed">Integrated robust protocol for {capability}. Ensures maximum stability.</p>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 360 MARQUEE ACHIEVEMENTS */}
        <section className="overflow-hidden relative py-10">
          <div className="text-center mb-20 relative z-20 px-6">
             <h2 className="text-4xl md:text-5xl font-black">Authorized by the Best</h2>
          </div>
          <div className="relative flex">
            <div className="absolute inset-y-0 left-0 w-16 md:w-40 bg-gradient-to-r from-[#020617] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 md:w-40 bg-gradient-to-l from-[#020617] to-transparent z-10 pointer-events-none" />
            
            <div className="flex gap-6 md:gap-8 animate-[marquee_50s_linear_infinite] px-4 hover:[animation-play-state:paused] cursor-default whitespace-nowrap">
              {[...data.achievements, ...data.achievements].map((ach, i) => (
                <div key={i} className="w-[85vw] md:w-[450px] shrink-0 p-8 md:p-12 rounded-[3.5rem] bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-2xl relative group whitespace-normal flex flex-col hover:bg-white/[0.08] hover:border-white/20 transition-all duration-500 overflow-hidden min-h-[250px] justify-center">
                  
                  {/* Subtle glass reflection */}
                  <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/[0.08] to-transparent pointer-events-none"></div>

                  <div className="flex gap-1 text-purple-400 mb-8 opacity-80 relative z-10">
                    <Star fill="currentColor" size={20} />
                    <Star fill="currentColor" size={20} />
                    <Star fill="currentColor" size={20} />
                    <Star fill="currentColor" size={20} />
                    <Star fill="currentColor" size={20} />
                  </div>
                  <p className="text-lg md:text-2xl font-light text-slate-300 leading-relaxed italic relative z-10">
                    "{ach}"
                  </p>
                </div>
              ))}
            </div>
            <style>{`
             @keyframes marquee {
               0% { transform: translateX(0); }
               100% { transform: translateX(-50%); }
             }
            `}</style>
          </div>
        </section>

        {/* ENGAGEMENT TIERS (Education/Comp) */}
        <section id="pricing" className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-24">
             <h2 className="text-4xl md:text-5xl font-black mb-4">Engagement Tiers</h2>
             <p className="text-xl text-slate-400 font-light">Academic foundation. Professional roadmap.</p>
           </div>
           
           <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 md:gap-12 max-w-7xl mx-auto">
                   <div className={`p-10 md:p-12 rounded-[3.5rem] border backdrop-blur-3xl flex flex-col relative overflow-hidden group bg-white/[0.04] border-white/20 shadow-2xl`}>
                     <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-8 flex items-center gap-2 relative z-10">Academic Foundation</div>
                     
                     <h3 className="text-2xl font-black text-white tracking-tight mb-4 relative z-10">{data.education.degree}</h3>
                     <div className="text-4xl font-light tracking-tighter text-white mb-8 relative z-10 truncate">{data.education.field.split(' ')[0]}</div>
                     
                     <div className="space-y-4 mb-14 flex-1 relative z-10 text-slate-300">
                        <div className="flex items-center gap-4 text-sm whitespace-nowrap">
                           <CheckCircle size={16} className="text-purple-400" />
                           {data.education.institution}
                        </div>
                        <div className="flex items-center gap-4 text-sm">
                           <CheckCircle size={16} className="text-purple-400" />
                           Class of {data.education.year}
                        </div>
                     </div>
                     
                     <div className="absolute top-0 left-0 w-full h-[60%] bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none transition-opacity duration-1000 group-hover:opacity-100 opacity-50"></div>
                   </div>

                   <div className={`p-10 md:p-12 rounded-[3.5rem] border backdrop-blur-3xl flex flex-col relative overflow-hidden group bg-white/[0.08] border-white/30 shadow-[0_0_80px_rgba(255,255,255,0.05)]`}>
                     <div className="text-xs font-bold uppercase tracking-[0.2em] text-purple-400 mb-8 flex items-center gap-2 relative z-10">Professional Infrastructure</div>
                     
                     <h3 className="text-2xl font-black text-white tracking-tight mb-4 relative z-10">{data.employment[0].company}</h3>
                     <div className="text-4xl font-light tracking-tighter text-white mb-8 relative z-10">{data.employment[0].role.split(' ')[0]}</div>
                     
                     <div className="space-y-4 mb-14 flex-1 relative z-10 text-slate-300">
                        <p className="text-sm font-light leading-relaxed mb-6 line-clamp-3 italic opacity-70">
                          {data.employment[0].description}
                        </p>
                        <div className="flex items-center gap-4 text-sm font-bold tracking-widest text-white/50 uppercase">
                           {data.employment[0].duration}
                        </div>
                     </div>
                     
                     <div className="absolute top-0 left-0 w-full h-[60%] bg-gradient-to-b from-purple-500/[0.1] to-transparent pointer-events-none transition-opacity duration-1000 group-hover:opacity-100 opacity-50"></div>
                   </div>

                   <div className={`p-10 md:p-12 rounded-[3.5rem] border backdrop-blur-3xl flex flex-col relative overflow-hidden group bg-white/[0.02] border-white/10`}>
                     <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-8 flex items-center gap-2 relative z-10">Compensation Modeling</div>
                     
                     <h3 className="text-3xl font-black text-white tracking-tight mb-4 relative z-10">Contractual Access</h3>
                     <div className="text-5xl font-light tracking-tighter text-white mb-12 relative z-10">{data.personal_info.expected_salary}</div>
                     
                     <ul className="space-y-5 mb-14 flex-1 relative z-10">
                         <li className="flex items-center gap-4 text-slate-300 font-light text-sm">
                             <CheckCircle size={16} className="text-slate-600" />
                             {data.personal_info.current_salary}
                         </li>
                         <li className="flex items-center gap-4 text-slate-300 font-light text-sm">
                             <CheckCircle size={16} className="text-slate-600" />
                             {data.personal_info.notice_period}
                         </li>
                         <li className="flex items-center gap-4 text-slate-300 font-light text-sm">
                             <CheckCircle size={16} className="text-slate-600" />
                             Global Collaboration
                         </li>
                     </ul>
                     
                     <div className="absolute top-0 left-0 w-full h-[60%] bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none transition-opacity duration-1000 group-hover:opacity-100 opacity-50"></div>
                   </div>
                </div>
        </section>

        {/* FOOTER */}
        <section id="contact" className="max-w-5xl mx-auto px-6 pb-10 pt-20 md:pt-32 text-center relative z-10 w-full">
           <h2 className="text-4xl sm:text-5xl md:text-8xl font-black tracking-tighter text-white mb-8">Ready to execute?</h2>
           <p className="text-lg md:text-2xl text-slate-400 font-light mb-16 max-w-3xl mx-auto">System diagnostics suggest we are a perfect match. Contact the architect directly.</p>
           
           <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-40">
              <a href={`mailto:${data.personal_info.email}`} className="px-10 py-6 rounded-full bg-white text-black font-bold tracking-widest uppercase text-sm hover:bg-slate-200 transition-all flex items-center gap-4 w-full sm:w-auto justify-center shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:scale-105">
                 <Mail size={20} /> Transmit Request
              </a>
              <a href={`tel:${data.personal_info.phone}`} className="px-10 py-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-3xl text-white font-bold tracking-widest text-sm uppercase flex items-center gap-4 w-full sm:w-auto justify-center hover:bg-white/10 transition-colors">
                 <Phone size={20} /> {data.personal_info.phone}
              </a>
           </div>
           
           <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/10 pt-12">
              <div className="font-black text-2xl tracking-tighter text-white">{data.personal_info.name}</div>
              <div className="text-sm text-slate-500 font-medium tracking-wide">© {new Date().getFullYear()} All Rights Reserved.</div>
           </div>
        </section>

      </main>
    </div>
  );
}
