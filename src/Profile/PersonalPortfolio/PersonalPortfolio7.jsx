import React from 'react';
import { motion } from 'framer-motion';
import { portfolioprofile as data } from './PersonalPortfolioData';
import { Terminal, Database, Shield, Zap, Code, ChevronRight, Minimize2, Maximize2, X, Smartphone, Code2 } from 'lucide-react';

export default function Portfolio7() {
  
  // Terminal Design Tokens
  const cardFrame = "border border-white/10 bg-black/50 backdrop-blur-sm p-8 hover:border-white/20 transition-colors relative group";
  const monoLabel = "font-mono text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-neutral-500";
  const textHeading = "font-sans tracking-tight text-white";

  const stats = [
    { label: 'Years of Experience', value: `${data.personal_info.experience_years}+` },
    { label: 'Production Apps Built', value: `${data.projects.length}+` },
    { label: 'Core Technical Domains', value: `${data.core_expertise.length}` },
    { label: 'Current Availability', value: data.personal_info.availability.split(' ')[0].toUpperCase() }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-neutral-400 font-sans selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden">
      
      {/* Background Drafting Grid */}
      <div className="fixed inset-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] z-0"></div>

      {/* TERMINAL HEADER */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-[#050505]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Terminal size={16} className="text-emerald-500" />
            <span className={`font-mono text-xs font-bold text-white tracking-widest`}>~/{data.personal_info.name.toLowerCase().replace(' ', '_')}</span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-mono text-[10px] uppercase tracking-widest">
            <a href="#expertise" className="text-neutral-500 hover:text-white transition-colors">./expertise</a>
            <a href="#projects" className="text-neutral-500 hover:text-white transition-colors">./projects</a>
            <a href="#credentials" className="text-neutral-500 hover:text-white transition-colors">./credentials</a>
          </div>
          <div className="flex items-center gap-3">
             <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
             <span className="font-mono text-[10px] text-emerald-500 tracking-widest hidden sm:block">SYSTEM._ONLINE</span>
          </div>
        </div>
      </nav>

      <main className="max-w-[1400px] mx-auto pt-14 border-x border-white/10 min-h-screen relative z-10 flex flex-col">
        
        {/* THE IDE HERO */}
        <section className="px-6 py-24 md:py-32 grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-white/10">
          
          <div className="md:col-span-7 flex flex-col justify-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-6">
               <span className="font-mono text-emerald-500 text-xs tracking-widest bg-emerald-500/10 px-3 py-1 rounded inline-block border border-emerald-500/20">
                 [ STATUS: {data.personal_info.availability.toUpperCase()} ]
               </span>
            </motion.div>
            
            <h1 className={`text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tighter mb-8 ${textHeading}`}>
              Vision.<br/>Engineered.
              <span className="animate-pulse text-emerald-500">_</span>
            </h1>
            
            <p className="font-mono text-sm md:text-base leading-relaxed text-neutral-400 mb-12 max-w-xl">
              &gt; {data.personal_info.headline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`mailto:${data.personal_info.email}`} className="font-mono text-xs font-bold tracking-widest uppercase bg-white text-black px-8 py-4 hover:bg-neutral-200 transition-colors inline-block text-center shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                INITIALIZE_CONTACT
              </a>
              <a href="#projects" className="font-mono text-xs font-bold tracking-widest uppercase border border-white/20 text-white px-8 py-4 hover:bg-white/5 transition-colors inline-block text-center flex items-center justify-center gap-2">
                VIEW_SYSLOG <ChevronRight size={14} />
              </a>
            </div>
          </div>

          <div className="md:col-span-5 hidden md:flex flex-col">
             {/* IDE Editor Window */}
             <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg overflow-hidden shadow-2xl flex-1 max-h-[400px]">
                <div className="h-8 border-b border-white/10 flex items-center px-4 gap-2 bg-[#111]">
                   <div className="w-2.5 h-2.5 rounded-full bg-rose-500/50"></div>
                   <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50"></div>
                   <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50"></div>
                   <span className="ml-auto font-mono text-[9px] text-neutral-600">profile.json</span>
                </div>
                <div className="p-6 font-mono text-xs md:text-sm leading-relaxed text-neutral-300">
                  <span className="text-purple-400">const</span><span className="text-yellow-200"> architect</span> = {'{'}<br/>
                  &nbsp;&nbsp;<span className="text-blue-400">"name"</span>: <span className="text-emerald-400">"{data.personal_info.name}"</span>,<br/>
                  &nbsp;&nbsp;<span className="text-blue-400">"role"</span>: <span className="text-emerald-400">"{data.personal_info.title}"</span>,<br/>
                  &nbsp;&nbsp;<span className="text-blue-400">"exp"</span>: <span className="text-amber-400">{data.personal_info.experience_years}</span>,<br/>
                  &nbsp;&nbsp;<span className="text-blue-400">"stack"</span>: [<span className="text-emerald-400">"React Native"</span>, <span className="text-emerald-400">"Redux"</span>, <span className="text-emerald-400">"Firebase"</span>],<br/>
                  &nbsp;&nbsp;<span className="text-blue-400">"origin"</span>: <span className="text-emerald-400">"{data.personal_info.location}"</span><br/>
                  {'}'};<br/>
                  <br/>
                  <span className="text-purple-400">export default</span> architect;<span className="animate-pulse">_</span>
                </div>
             </motion.div>
          </div>
        </section>

        {/* TERMINAL STATS */}
        <section className="grid grid-cols-2 md:grid-cols-4 border-b border-white/10 divide-x divide-y md:divide-y-0 divide-white/10">
          {stats.map((stat, i) => (
             <div key={i} className="p-8 md:p-12 hover:bg-white/[0.02] transition-colors relative overflow-hidden group">
               <div className="absolute top-4 right-4 text-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
                 <Database size={48} strokeWidth={1} />
               </div>
               <div className={`text-4xl md:text-5xl font-black mb-2 ${textHeading}`}>{stat.value}</div>
               <div className={monoLabel}>{stat.label}</div>
             </div>
          ))}
        </section>

        {/* 360 TERMINAL TICKER */}
        <section id="stack" className="py-8 bg-black border-b border-emerald-500/20 overflow-hidden relative">
           <div className="absolute inset-x-0 top-1/2 h-[1px] bg-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.5)] z-20 pointer-events-none"></div>
           
           <div className="relative flex">
              <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
              <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
              
              <div className="flex gap-16 animate-[marquee_45s_linear_infinite] px-8 hover:[animation-play-state:paused] whitespace-nowrap items-center font-mono text-emerald-500/70 text-sm md:text-md uppercase tracking-widest cursor-default">
                {[...data.technical_stack.mobile, ...data.technical_stack.frontend, ...data.technical_stack.backend_integration].map((tech, i) => (
                   <div key={i} className="flex items-center gap-16">
                      <span className="opacity-50">&gt;&gt;</span>
                      <span className="hover:text-emerald-300 hover:text-shadow-[0_0_8px_rgba(110,231,183,0.8)] transition-all">{tech}</span>
                   </div>
                ))}
              </div>
           </div>
        </section>

        {/* EXPERTISE (API ENDPOINTS) */}
        <section id="expertise" className="border-b border-white/10">
           <div className="px-6 py-8 border-b border-white/10 bg-[#0A0A0A]">
             <h2 className={`text-2xl font-bold tracking-tight ${textHeading} flex items-center gap-3`}>
               <Code size={20} className="text-emerald-500" /> ./core_expertise
             </h2>
           </div>
           
           <div className="flex flex-col divide-y divide-white/10">
             {data.core_expertise.map((skill, i) => (
               <div key={i} className="grid md:grid-cols-12 hover:bg-white/[0.02] transition-colors group">
                 <div className="md:col-span-4 lg:col-span-3 p-6 md:p-8 flex flex-col justify-start border-b md:border-b-0 md:border-r border-white/10">
                    <span className="font-mono text-[9px] md:text-[10px] text-white bg-white/10 px-2 py-1 inline-block w-full break-all group-hover:bg-emerald-500/20 group-hover:text-emerald-400 group-hover:border-emerald-500/30 border border-transparent transition-all">
                      GET /v1/expertise/{skill.toLowerCase().replace(/[^a-z0-9]/g, '_')}
                    </span>
                 </div>
                 
                 <div className="md:col-span-8 lg:col-span-9 p-6 md:p-8 flex flex-col justify-center">
                    <h3 className={`text-2xl md:text-3xl font-bold mb-3 ${textHeading}`}>{skill}</h3>
                    <p className="font-mono text-sm leading-relaxed text-neutral-400 max-w-2xl mb-6">
                      // Production-level implementation of {skill} with architectural focus on scalability and mobile parity.
                    </p>
                    <div className="flex items-center gap-2 font-mono text-[10px] text-neutral-300 uppercase tracking-widest">
                        <span className="text-emerald-500/50">+</span> Enterprise Standards
                        <span className="text-emerald-500/50 ml-4">+</span> Cross-Platform Parity
                    </div>
                 </div>
               </div>
             ))}
           </div>
        </section>

        {/* PROJECTS (SYSTEM LOGS) */}
        <section id="projects" className="border-b border-white/10">
           <div className="px-6 py-8 border-b border-white/10 bg-[#0A0A0A]">
             <h2 className={`text-2xl font-bold tracking-tight ${textHeading} flex items-center gap-3`}>
               <Shield size={20} className="text-emerald-500" /> ./production_logs
             </h2>
           </div>

           <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
              {data.projects.map((proj, i) => (
                 <div key={i} className={`p-8 md:p-12 hover:bg-white/[0.02] transition-all group ${i > 1 && 'border-t border-white/10'}`}>
                    <div className="flex justify-between items-start mb-12">
                       <h3 className={`text-3xl font-bold tracking-tight ${textHeading}`}>{proj.name}</h3>
                       <div className="font-mono text-[10px] text-emerald-400 border border-emerald-500/20 bg-emerald-500/10 px-2 py-1 uppercase tracking-widest shrink-0">
                         {proj.type}
                       </div>
                    </div>

                    <div className="bg-[#050505] border border-white/10 p-6 font-mono text-xs md:text-sm leading-relaxed mb-8 flex flex-col gap-4">
                       <div>
                         <span className="text-amber-400">Focus:</span> <span className="text-neutral-300">{proj.category}</span>
                       </div>
                       <div>
                         <span className="text-emerald-400">Feature:</span> <span className="text-neutral-300">{proj.features[0]}</span>
                       </div>
                       <div className="mt-4 pt-4 border-t border-white/5 text-[10px] text-neutral-500 break-words whitespace-normal">
                         Stack: [{proj.technologies.slice(0, 3).join(', ')}]
                       </div>
                    </div>
                    
                    <p className="font-mono text-xs text-neutral-400 leading-relaxed mb-8">
                      {proj.description}
                    </p>

                    <button className="font-mono text-[10px] uppercase tracking-widest text-white border-b border-white/30 pb-1 hover:border-emerald-500 hover:text-emerald-400 transition-colors flex items-center gap-2">
                       EXECUTE_TRACE() <ChevronRight size={12} />
                     </button>
                 </div>
              ))}
           </div>
        </section>

        {/* CREDENTIALS */}
        <section id="credentials" className="border-b border-white/10 p-6 md:p-12 bg-[#0A0A0A]">
            <h2 className={`text-4xl md:text-5xl font-black mb-12 text-center tracking-tight ${textHeading}`}>System Credentials</h2>
            
            <div className="grid md:grid-cols-3 border border-white/10 divide-y md:divide-y-0 md:divide-x divide-white/10 bg-black max-w-[1200px] mx-auto">
                <div className={`p-8 relative flex flex-col hover:bg-white/[0.02] transition-colors bg-white/[0.03]`}>
                  <div className="absolute top-0 inset-x-0 h-[2px] bg-emerald-500 filter drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
                  <div className={monoLabel + " mb-4"}>&gt; ACADEMIC_BACKBONE</div>
                  <div className={`text-2xl md:text-3xl font-black tracking-tighter mb-8 text-white`}>{data.education.degree}</div>
                  <p className="font-mono text-[10px] text-neutral-400 mb-8">{data.education.institution} - {data.education.year}</p>
                  <div className="font-mono text-[10px] text-emerald-500 bg-emerald-500/10 px-2 py-1 border border-emerald-500/20 w-max">{data.education.field.toUpperCase()}</div>
                </div>

                <div className={`p-8 relative flex flex-col hover:bg-white/[0.02] transition-colors border-l border-white/10`}>
                  <div className={monoLabel + " mb-4"}>&gt; PROFESSIONAL_TENURE</div>
                  <div className={`text-2xl md:text-3xl font-black tracking-tighter mb-8 text-emerald-400`}>{data.employment[0].company}</div>
                  <p className="font-mono text-[10px] text-neutral-400 mb-8">{data.employment[0].role} | {data.employment[0].duration}</p>
                  <div className="font-mono text-[10px] text-emerald-500/50 bg-white/5 px-2 py-1 border border-white/10 w-max truncate max-w-full">ENV: REACT_NATIVE</div>
                </div>

                <div className={`p-8 relative flex flex-col hover:bg-white/[0.02] transition-colors`}>
                  <div className={monoLabel + " mb-4"}>&gt; CAREER_VISION</div>
                  <div className={`text-2xl md:text-3xl font-black tracking-tighter mb-8 text-white`}>{data.personal_info.expected_salary}</div>
                  <p className="font-mono text-[10px] text-neutral-400 mb-8 truncate">{data.personal_info.current_salary} | {data.personal_info.notice_period}</p>
                  <div className="font-mono text-[10px] text-emerald-500 bg-emerald-500/10 px-2 py-1 border border-emerald-500/20 w-max uppercase whitespace-nowrap">Remote Tracking enabled</div>
                </div>
            </div>
        </section>

        {/* ACHIEVEMENTS (IDE LOGS) */}
        <section className="border-b border-white/10 bg-black py-16 overflow-hidden">
           <div className="px-6 mb-8 flex items-center justify-between pointer-events-none">
              <span className={monoLabel}>// _EXECUTION_METRICS_LOGS</span>
           </div>

           <div className="relative flex border-y border-white/10 bg-[#0A0A0A] py-8">
              <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
              <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

              <div className="flex gap-16 animate-[marquee_45s_linear_infinite] px-8 hover:[animation-play-state:paused] whitespace-nowrap">
                  {[...data.achievements, ...data.achievements].map((ach, i) => (
                    <div key={i} className="w-[85vw] md:w-[500px] shrink-0 font-mono flex flex-col hover:bg-white/5 transition-colors p-6 border border-white/10 justify-center">
                      <div className="text-xs text-neutral-400 whitespace-normal leading-relaxed">
                        "<span className="text-emerald-400/80">{ach}</span>"
                      </div>
                    </div>
                  ))}
              </div>
           </div>
        </section>

        {/* FOOTER */}
        <footer className="p-8 md:p-16 flex flex-col items-center justify-center text-center">
           <div className="font-mono text-xs md:text-sm text-neutral-500 mb-8 max-w-lg leading-relaxed">
             // Awaiting architectural instructions for your next high-performance production build.
           </div>
           
           <h2 className={`text-5xl md:text-7xl font-black tracking-tighter mb-12 ${textHeading}`}>
             System.run()
           </h2>

           <a href={`mailto:${data.personal_info.email}`} className="font-mono text-sm tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 px-8 py-4 uppercase font-bold transition-all hover:scale-105 mb-16 shadow-[0_0_20px_rgba(16,185,129,0.15)] ring-emerald-500/30">
             &gt; EXECUTE_COMMUNICATION
           </a>

           <div className="w-full border-t border-white/10 flex flex-col md:flex-row items-center justify-between pt-8 px-6 font-mono text-[10px] uppercase tracking-widest text-neutral-600">
             <div>{data.personal_info.name} _V2.0</div>
             <div className="flex gap-4">
               <span>TEL: {data.personal_info.phone}</span>
               <span>{data.personal_info.location}</span>
             </div>
             <div>© {new Date().getFullYear()} ALL RIGHTS RESERVED</div>
           </div>
        </footer>

      </main>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

    </div>
  );
}
