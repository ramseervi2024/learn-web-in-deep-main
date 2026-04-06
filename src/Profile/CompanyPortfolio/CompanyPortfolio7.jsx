import React from 'react';
import { motion } from 'framer-motion';
import { CompanyPortfolio as data } from './CompanyPortfolioData';
import { Terminal, Database, Shield, Zap, Code, ChevronRight, Minimize2, Maximize2, X } from 'lucide-react';

export default function CompanyPortfolio7() {
  
  // Terminal Design Tokens
  const cardFrame = "border border-white/10 bg-black/50 backdrop-blur-sm p-8 hover:border-white/20 transition-colors relative group";
  const monoLabel = "font-mono text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-neutral-500";
  const textHeading = "font-sans tracking-tight text-white";

  return (
    <div className="min-h-screen bg-[#050505] text-neutral-400 font-sans selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden">
      
      {/* Background Drafting Grid */}
      <div className="fixed inset-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] z-0"></div>

      {/* 
        ========================================
        1. TERMINAL HEADER 
        ======================================== 
      */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-[#050505]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Terminal size={16} className="text-emerald-500" />
            <span className={`font-mono text-xs font-bold text-white tracking-widest`}>~/{data.brand.name.toLowerCase().replace(' ', '_')}</span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-mono text-[10px] uppercase tracking-widest">
            <a href="#deploy" className="text-neutral-500 hover:text-white transition-colors">./deploy</a>
            <a href="#stack" className="text-neutral-500 hover:text-white transition-colors">./stack</a>
            <a href="#syslogs" className="text-neutral-500 hover:text-white transition-colors">./syslogs</a>
          </div>
          <div className="flex items-center gap-3">
             <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
             <span className="font-mono text-[10px] text-emerald-500 tracking-widest hidden sm:block">SYSTEM._ONLINE</span>
          </div>
        </div>
      </nav>

      <main className="max-w-[1400px] mx-auto pt-14 border-x border-white/10 min-h-screen relative z-10 flex flex-col">
        
        {/* 
          ========================================
          2. THE IDE HERO
          ======================================== 
        */}
        <section className="px-6 py-24 md:py-32 grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-white/10">
          
          <div className="md:col-span-7 flex flex-col justify-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-6">
               <span className="font-mono text-emerald-500 text-xs tracking-widest bg-emerald-500/10 px-3 py-1 rounded inline-block border border-emerald-500/20">
                 [ STATUS: 200 OK ]
               </span>
            </motion.div>
            
            <h1 className={`text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tighter mb-8 ${textHeading}`}>
              {data.hero.title}
              <span className="animate-pulse text-emerald-500">_</span>
            </h1>
            
            <p className="font-mono text-sm md:text-base leading-relaxed text-neutral-400 mb-12 max-w-xl">
              &gt; {data.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#init" className="font-mono text-xs font-bold tracking-widest uppercase bg-white text-black px-8 py-4 hover:bg-neutral-200 transition-colors inline-block text-center shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                {data.hero.cta_primary}
              </a>
              <a href="#docs" className="font-mono text-xs font-bold tracking-widest uppercase border border-white/20 text-white px-8 py-4 hover:bg-white/5 transition-colors inline-block text-center flex items-center justify-center gap-2">
                {data.hero.cta_secondary} <ChevronRight size={14} />
              </a>
            </div>
          </div>

          <div className="md:col-span-5 hidden md:flex flex-col">
             {/* Fake IDE Code Editor Window */}
             <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg overflow-hidden shadow-2xl flex-1 max-h-[400px]">
                <div className="h-8 border-b border-white/10 flex items-center px-4 gap-2 bg-[#111]">
                   <div className="w-2.5 h-2.5 rounded-full bg-rose-500/50"></div>
                   <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50"></div>
                   <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50"></div>
                   <span className="ml-auto font-mono text-[9px] text-neutral-600">config.json</span>
                </div>
                <div className="p-6 font-mono text-xs md:text-sm leading-relaxed text-neutral-300">
                  <span className="text-purple-400">const</span><span className="text-yellow-200"> agency</span> = {'{'}<br/>
                  &nbsp;&nbsp;<span className="text-blue-400">"name"</span>: <span className="text-emerald-400">"{data.brand.name}"</span>,<br/>
                  &nbsp;&nbsp;<span className="text-blue-400">"type"</span>: <span className="text-emerald-400">"{data.brand.business_type}"</span>,<br/>
                  &nbsp;&nbsp;<span className="text-blue-400">"year_established"</span>: <span className="text-amber-400">{data.brand.founded}</span>,<br/>
                  &nbsp;&nbsp;<span className="text-blue-400">"stack_capacity"</span>: [<span className="text-emerald-400">"Frontend"</span>, <span className="text-emerald-400">"Backend"</span>, <span className="text-emerald-400">"DevOps"</span>],<br/>
                  &nbsp;&nbsp;<span className="text-blue-400">"focus"</span>: <span className="text-emerald-400">"{data.brand.description}"</span><br/>
                  {'}'};<br/>
                  <br/>
                  <span className="text-purple-400">export default</span> agency;<span className="animate-pulse">_</span>
                </div>
             </motion.div>
          </div>
        </section>

        {/* 
          ========================================
          3. TERMINAL STATS / API HEALTH
          ======================================== 
        */}
        <section className="grid grid-cols-2 md:grid-cols-4 border-b border-white/10 divide-x divide-y md:divide-y-0 divide-white/10">
          {data.stats.map((stat, i) => (
             <div key={i} className="p-8 md:p-12 hover:bg-white/[0.02] transition-colors relative overflow-hidden group">
               <div className="absolute top-4 right-4 text-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
                 <Database size={48} strokeWidth={1} />
               </div>
               <div className={`text-4xl md:text-5xl font-black mb-2 ${textHeading}`}>{stat.value}</div>
               <div className={monoLabel}>{stat.label}</div>
             </div>
          ))}
        </section>

        {/* 
          ========================================
          4. 360 TERMINAL TICKER TAPE
          ======================================== 
        */}
        <section id="stack" className="py-8 bg-black border-b border-emerald-500/20 overflow-hidden relative">
           {/* Scanline effect over marquee */}
           <div className="absolute inset-x-0 top-1/2 h-[1px] bg-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.5)] z-20 pointer-events-none"></div>
           
           <div className="relative flex">
              <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
              <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
              
              <div className="flex gap-16 animate-[marquee_45s_linear_infinite] px-8 hover:[animation-play-state:paused] whitespace-nowrap items-center font-mono text-emerald-500/70 text-sm md:text-md uppercase tracking-widest cursor-default">
                {/* We alternate between arrows and tech stacks */}
                {[...data.technology_stack.frontend, ...data.technology_stack.backend, ...data.technology_stack.mobile, ...data.technology_stack.frontend].map((tech, i) => (
                   <div key={i} className="flex items-center gap-16">
                      <span className="opacity-50">&gt;&gt;</span>
                      <span className="hover:text-emerald-300 hover:text-shadow-[0_0_8px_rgba(110,231,183,0.8)] transition-all">{tech}</span>
                   </div>
                ))}
              </div>
           </div>
        </section>

        {/* 
          ========================================
          5. SERVICES (API ENDPOINTS)
          ======================================== 
        */}
        <section id="deploy" className="border-b border-white/10">
           <div className="px-6 py-8 border-b border-white/10 bg-[#0A0A0A]">
             <h2 className={`text-2xl font-bold tracking-tight ${textHeading} flex items-center gap-3`}>
               <Code size={20} className="text-emerald-500" /> ./core_modules
             </h2>
           </div>
           
           <div className="flex flex-col divide-y divide-white/10">
             {data.services.map((service, i) => (
               <div key={i} className="grid md:grid-cols-12 hover:bg-white/[0.02] transition-colors group">
                 
                 {/* ID Block */}
                 <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-start border-b md:border-b-0 md:border-r border-white/10">
                    <span className="font-mono text-xs text-white bg-white/10 px-2 py-1 inline-block w-max mb-4 group-hover:bg-emerald-500/20 group-hover:text-emerald-400 group-hover:border-emerald-500/30 border border-transparent transition-all">
                      POST /v1/{service.category.toLowerCase().replace(/[^a-z0-9]/g, '_')}
                    </span>
                 </div>
                 
                 {/* Data Block */}
                 <div className="md:col-span-9 p-6 md:p-8 flex flex-col justify-center">
                    <h3 className={`text-2xl font-bold mb-3 ${textHeading}`}>{service.category}</h3>
                    <p className="font-mono text-sm leading-relaxed text-neutral-400 max-w-2xl mb-6">
                      // {service.description}
                    </p>
                    <div className="flex flex-wrap gap-x-6 gap-y-3">
                      {service.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 font-mono text-[10px] text-neutral-300 uppercase tracking-widest">
                          <span className="text-emerald-500/50">+</span> {feat}
                        </div>
                      ))}
                    </div>
                 </div>

               </div>
             ))}
           </div>
        </section>

        {/* 
          ========================================
          6. CASE STUDIES (SYSTEM LOGS)
          ======================================== 
        */}
        <section id="syslogs" className="border-b border-white/10">
           <div className="px-6 py-8 border-b border-white/10 bg-[#0A0A0A]">
             <h2 className={`text-2xl font-bold tracking-tight ${textHeading} flex items-center gap-3`}>
               <Shield size={20} className="text-emerald-500" /> ./production_builds
             </h2>
           </div>

           <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
              {data.completed_projects.map((proj, i) => (
                 <div key={i} className={`p-8 md:p-12 hover:bg-white/[0.02] transition-all group ${i > 1 && 'border-t border-white/10'}`}>
                    
                    {/* Header */}
                    <div className="flex justify-between items-start mb-12">
                       <h3 className={`text-3xl font-bold tracking-tight ${textHeading}`}>{proj.project_name}</h3>
                       <div className="font-mono text-[10px] text-emerald-400 border border-emerald-500/20 bg-emerald-500/10 px-2 py-1 uppercase tracking-widest shrink-0">
                         {proj.type}
                       </div>
                    </div>

                    {/* Problem/Result Log Output */}
                    <div className="bg-[#050505] border border-white/10 p-6 font-mono text-xs md:text-sm leading-relaxed mb-8 flex flex-col gap-4">
                       <div>
                         <span className="text-rose-400">Error:</span> <span className="text-neutral-300">{proj.problem}</span>
                       </div>
                       <div>
                         <span className="text-emerald-400">Success:</span> <span className="text-neutral-300">{proj.result[0]}</span>
                       </div>
                       <div className="mt-4 pt-4 border-t border-white/5 text-[10px] text-neutral-500">
                         Stack: [{proj.tech_stack.join(', ')}]
                       </div>
                    </div>
                    
                    <p className="font-mono text-xs text-neutral-400 leading-relaxed mb-8">
                      {proj.description}
                    </p>

                    <button className="font-mono text-[10px] uppercase tracking-widest text-white border-b border-white/30 pb-1 hover:border-emerald-500 hover:text-emerald-400 transition-colors flex items-center gap-2">
                       execute_case_study() <ChevronRight size={12} />
                     </button>
                 </div>
              ))}
           </div>
        </section>

        {/* 
          ========================================
          7. PRICING PANELS
          ======================================== 
        */}
        <section className="border-b border-white/10 p-6 md:p-12 bg-[#0A0A0A]">
            <h2 className={`text-4xl md:text-5xl font-black mb-12 text-center tracking-tight ${textHeading}`}>Architectural Tiers</h2>
            
            <div className="grid md:grid-cols-3 border border-white/10 divide-y md:divide-y-0 md:divide-x divide-white/10 bg-black">
              {data.pricing.map((tier, i) => (
                <div key={i} className={`p-8 relative flex flex-col hover:bg-white/[0.02] transition-colors ${i === 1 ? 'bg-white/[0.03]' : ''}`}>
                  
                  {i === 1 && (
                    <div className="absolute top-0 inset-x-0 h-[2px] bg-emerald-500 filter drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
                  )}

                  <div className={monoLabel + " mb-4"}>&gt; {tier.plan}</div>
                  <div className={`text-4xl md:text-5xl font-black tracking-tighter mb-8 ${textHeading}`}>{tier.price}</div>
                  
                  <ul className="flex-1 space-y-4 mb-10 font-mono text-xs text-neutral-400">
                    {tier.features.map((feat, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="text-emerald-500 shrink-0">✓</span> {feat}
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-4 border ${i === 1 ? 'border-emerald-500 text-emerald-400 hover:bg-emerald-500/10' : 'border-white/20 text-white hover:bg-white/10'} font-mono text-xs uppercase tracking-widest transition-colors font-bold`}>
                    INITIATE_DEPLOYMENT()
                  </button>
                </div>
              ))}
            </div>
        </section>

        {/* 
          ========================================
          8. TESTIMONIALS (IDE SCROLLING LOGS)
          ======================================== 
        */}
        <section className="border-b border-white/10 bg-black py-16 overflow-hidden">
           <div className="px-6 mb-8 flex items-center justify-between pointer-events-none">
              <span className={monoLabel}>// _USER_FEEDBACK_LOGS</span>
           </div>

           <div className="relative flex border-y border-white/10 bg-[#0A0A0A] py-8">
              <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
              <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

              <div className="flex gap-16 animate-[marquee_45s_linear_infinite] px-8 hover:[animation-play-state:paused] whitespace-nowrap">
                  {[...data.testimonials, ...data.testimonials, ...data.testimonials].map((test, i) => (
                    <div key={i} className="w-[85vw] md:w-[500px] shrink-0 font-mono flex flex-col hover:bg-white/5 transition-colors p-6 border border-white/10">
                      <div className="text-xs text-neutral-400 whitespace-normal leading-relaxed mb-6">
                        "<span className="text-amber-200/80">{test.feedback}</span>"
                      </div>
                      <div className="mt-auto flex items-end justify-between border-t border-white/10 pt-4">
                         <div>
                            <div className="text-white text-xs font-bold">{test.name.split(',')[0]}</div>
                            <div className="text-[10px] text-neutral-500 tracking-widest uppercase mt-1">
                              {test.name.split(',')[1] ? test.name.split(',')[1] : "Verified Source"}
                            </div>
                         </div>
                         <div className="text-[10px] text-emerald-500 bg-emerald-500/10 px-2 py-1 border border-emerald-500/20">VERIFIED</div>
                      </div>
                    </div>
                  ))}
              </div>
           </div>
        </section>

        {/* 
          ========================================
          9. FOOTER (TERMINAL PROMPT)
          ======================================== 
        */}
        <footer className="p-8 md:p-16 flex flex-col items-center justify-center text-center">
           <div className="font-mono text-xs md:text-sm text-neutral-500 mb-8 max-w-lg leading-relaxed">
             // Ready to compile your vision into production code. Awaiting instructions.
           </div>
           
           <h2 className={`text-5xl md:text-7xl font-black tracking-tighter mb-12 ${textHeading}`}>
             System.run()
           </h2>

           <a href={`mailto:${data.contact.email}`} className="font-mono text-sm tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 px-8 py-4 uppercase font-bold transition-all hover:scale-105 mb-16 shadow-[0_0_20px_rgba(16,185,129,0.15)] focus:ring-4 ring-emerald-500/30">
             &gt; Execute Communication
           </a>

           <div className="w-full border-t border-white/10 flex flex-col md:flex-row items-center justify-between pt-8 px-6 font-mono text-[10px] uppercase tracking-widest text-neutral-600">
             <div>{data.footer.brand} _V1.0</div>
             <div className="flex gap-4">
               <span>TEL: {data.contact.phone}</span>
               <span>{data.brand.location}</span>
             </div>
             <div>{data.footer.copyright}</div>
           </div>
        </footer>

      </main>

      {/* 
        ========================================
        10. CSS KEYFRAMES FOR MARQUEES
        ======================================== 
      */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

    </div>
  );
}
