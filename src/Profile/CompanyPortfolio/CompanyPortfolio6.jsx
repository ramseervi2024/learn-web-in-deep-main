import React from 'react';
import { motion } from 'framer-motion';
import { CompanyPortfolio as data } from './CompanyPortfolioData';
import { ArrowRight, LayoutGrid, Zap, CheckCircle2, PhoneCall, Code2, Play, Mail } from 'lucide-react';

export default function CompanyPortfolio6() {
  
  // Design Tokens for Bento Grid
  const bentoCard = "bg-white rounded-3xl md:rounded-[2.5rem] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_-10px_rgba(79,70,229,0.15)] hover:-translate-y-1 transition-all duration-500 overflow-hidden relative";
  const bentoCardColored = "bg-indigo-600 text-white rounded-3xl md:rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_40px_-10px_rgba(79,70,229,0.4)] hover:-translate-y-1 transition-all duration-500 overflow-hidden relative";
  
  const textHeading = "font-sans tracking-tight text-slate-900";
  const badgeColors = ['bg-blue-100 text-blue-700', 'bg-emerald-100 text-emerald-700', 'bg-purple-100 text-purple-700', 'bg-rose-100 text-rose-700'];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-600 font-sans selection:bg-indigo-500/30 overflow-x-hidden p-4 md:p-8 space-y-4 md:space-y-8 pb-32 relative">
      
      {/* 
        ========================================
        1. FLOATING PILL NAVBAR
        ======================================== 
      */}
      <nav className="fixed top-6 inset-x-0 mx-auto w-[90vw] md:max-w-3xl z-50 bg-white/70 backdrop-blur-2xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-full px-6 md:px-8 py-4 flex items-center justify-between transition-all">
        <div className={`font-black text-xl tracking-tighter ${textHeading}`}>
          {data.brand.name.split(' ')[0]}
          <span className="text-indigo-600">.</span>
        </div>
        <div className="hidden md:flex gap-8">
           <a href="#services" className="text-sm font-semibold tracking-wide text-slate-500 hover:text-indigo-600 transition-colors">Services</a>
           <a href="#work" className="text-sm font-semibold tracking-wide text-slate-500 hover:text-indigo-600 transition-colors">Platform</a>
           <a href="#pricing" className="text-sm font-semibold tracking-wide text-slate-500 hover:text-indigo-600 transition-colors">Pricing</a>
        </div>
        <a href="#contact" className="px-5 py-2.5 bg-slate-900 hover:bg-indigo-600 transition-colors text-white text-sm font-bold rounded-full flex items-center gap-2 shadow-lg">
          Connect <ArrowRight size={16} />
        </a>
      </nav>

      <main className="max-w-[1400px] mx-auto pt-24 md:pt-32 space-y-4 md:space-y-8">
        
        {/* 
          ========================================
          2. HERO BENTO GRID
          ======================================== 
        */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
          
          {/* Main Hero Card (Span 8) */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className={`md:col-span-8 ${bentoCard} flex flex-col justify-center min-h-[500px] md:min-h-[600px] bg-gradient-to-br from-white to-slate-50/50`}>
             <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-700 font-bold text-xs tracking-widest rounded-full mb-8 max-w-max border border-indigo-100">
               <Zap size={14} className="text-indigo-600" fill="currentColor" /> 
               {data.brand.business_type}
             </div>
             
             <h1 className={`text-5xl md:text-7xl lg:text-[80px] font-black leading-[1.05] mb-8 ${textHeading}`}>
               {data.hero.title}
             </h1>
             
             <p className="text-lg md:text-2xl font-medium leading-relaxed max-w-2xl text-slate-500 mb-12">
               {data.hero.subtitle}
             </p>

             <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                <a href="#contact" className="px-8 py-4 bg-indigo-600 text-white font-bold text-lg rounded-full shadow-[0_8px_20px_-6px_rgba(79,70,229,0.5)] hover:shadow-[0_12px_25px_-6px_rgba(79,70,229,0.6)] hover:-translate-y-0.5 transition-all text-center flex justify-center items-center gap-2">
                  {data.hero.cta_primary} <ArrowRight size={20} />
                </a>
                <a href="#work" className="px-8 py-4 bg-slate-100 text-slate-700 hover:bg-slate-200 font-bold text-lg rounded-full transition-all text-center flex justify-center items-center gap-2">
                  <Play size={20} className="text-slate-500" fill="currentColor" /> {data.hero.cta_secondary}
                </a>
             </div>
          </motion.div>

          {/* Secondary Stacked Cards (Span 4) */}
          <div className="md:col-span-4 flex flex-col gap-4 md:gap-8">
             
             <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className={`${bentoCardColored} flex-1 flex flex-col justify-center items-center text-center bg-gradient-to-br from-indigo-500 to-indigo-700`}>
                {/* Decorative floating blurred sphere behind numbers */}
                <div className="absolute inset-0 bg-indigo-400 opacity-30 blur-[40px] rounded-full scale-150 transform -translate-y-1/2"></div>
                <div className="relative z-10">
                  <div className="text-6xl md:text-[80px] font-black tracking-tighter mb-2 leading-none drop-shadow-md text-white">{data.stats[0].value}</div>
                  <div className="text-indigo-100 font-bold uppercase tracking-widest text-sm drop-shadow-sm">{data.stats[0].label}</div>
                </div>
             </motion.div>

             <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.3 }} className={`${bentoCard} flex-1 flex flex-col justify-center items-center text-center`}>
                <div className={`text-6xl md:text-7xl font-black tracking-tighter mb-2 leading-none ${textHeading}`}>{data.stats[1].value}</div>
                <div className="text-slate-500 font-bold uppercase tracking-widest text-sm">{data.stats[1].label}</div>
             </motion.div>

          </div>
        </section>

        {/* 
          ========================================
          3. TECHNOLOGIES MARQUEE (BENTO STYLE)
          ======================================== 
        */}
        <section className={`${bentoCard} !px-0 bg-white border border-slate-100`}>
           <div className="text-center mb-6">
             <div className="text-xs font-bold tracking-widest text-slate-400 uppercase">Powered by the Modern Stack</div>
           </div>
           
           <div className="relative flex overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
              <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
              
              <div className="flex gap-12 md:gap-24 animate-[marquee_30s_linear_infinite] px-8 hover:[animation-play-state:paused] whitespace-nowrap items-center py-6">
                {[...data.technology_stack.frontend, ...data.technology_stack.backend, ...data.technology_stack.database, ...data.technology_stack.mobile].map((tech, i) => (
                   <div key={i} className={`text-3xl md:text-4xl font-black tracking-tighter ${textHeading} opacity-20 hover:opacity-100 hover:text-indigo-600 transition-colors cursor-default`}>
                      {tech}
                   </div>
                ))}
              </div>
           </div>
        </section>

        {/* 
          ========================================
          4. SERVICES / MODULES
          ======================================== 
        */}
        <section id="services">
          <div className="px-6 mb-8 mt-12">
            <h2 className={`text-4xl md:text-5xl font-black tracking-tight ${textHeading}`}>Core Modules</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {data.services.map((service, i) => (
              <div key={i} className={`${bentoCard} group bg-gradient-to-b from-white to-slate-50/50`}>
                 <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mb-8 border border-indigo-100 group-hover:-translate-y-2 transition-transform shadow-sm">
                   <Code2 size={28} className="text-indigo-600" />
                 </div>
                 <h3 className={`text-2xl font-black mb-4 leading-tight ${textHeading}`}>{service.category}</h3>
                 <p className="text-slate-500 font-medium leading-relaxed mb-8 h-auto lg:h-[80px]">{service.description}</p>
                 
                 <div className="flex flex-wrap gap-2 mt-auto">
                   {service.features.map((feat, idx) => (
                      <span key={idx} className={`px-3 py-1 rounded-lg text-xs font-bold border border-transparent ${badgeColors[idx % badgeColors.length]} bg-opacity-50`}>
                        {feat}
                      </span>
                   ))}
                 </div>
              </div>
            ))}
          </div>
        </section>

        {/* 
          ========================================
          5. CASE STUDIES GALLERY
          ======================================== 
        */}
        <section id="work">
          <div className="px-6 mb-8 mt-12 flex justify-between items-end">
            <h2 className={`text-4xl md:text-5xl font-black tracking-tight ${textHeading}`}>App Store</h2>
            <div className="text-xs font-bold tracking-widest text-slate-400 uppercase hidden md:block">Real World Case Studies</div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {data.completed_projects.map((proj, i) => (
              <div key={i} className={`${bentoCard} p-4 md:p-6 group cursor-pointer bg-white`}>
                
                {/* Visual Placeholder for Project */}
                <div className={`w-full aspect-video md:aspect-[4/3] rounded-[2rem] mb-8 overflow-hidden relative flex items-center justify-center ${badgeColors[i % badgeColors.length]} bg-opacity-20 transition-all duration-700 group-hover:scale-[1.02]`}>
                   <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                   <div className="absolute center bg-white/50 backdrop-blur-md rounded-full px-6 py-3 font-bold text-slate-800 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-500">
                     View App Case Study
                   </div>
                   <h4 className={`text-4xl md:text-5xl font-black ${textHeading} opacity-30 tracking-tighter group-hover:scale-110 transition-transform duration-700`}>{proj.project_name}</h4>
                </div>

                {/* Content */}
                <div className="px-4 pb-4">
                  <div className="flex justify-between items-start mb-4">
                     <div>
                       <div className="text-xs font-bold tracking-widest text-indigo-500 uppercase mb-2">{proj.type}</div>
                       <h3 className={`text-3xl md:text-4xl font-black tracking-tight ${textHeading}`}>{proj.project_name}</h3>
                     </div>
                  </div>
                  <p className="text-slate-500 font-medium leading-relaxed mb-6">
                    {proj.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6 pt-6 border-t border-slate-100">
                     <div>
                       <div className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">Impact</div>
                       <div className={`font-black text-emerald-600`}>{proj.result[0]}</div>
                     </div>
                     <div>
                       <div className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">Stack</div>
                       <div className={`font-black text-slate-700`}>{proj.tech_stack[0]} + {proj.tech_stack[1]}</div>
                     </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 
          ========================================
          6. TESTIMONIALS AUTO 360 (BENTO MARQUEE)
          ======================================== 
        */}
        <section className={`${bentoCardColored} !p-0 mt-12 bg-slate-900 border border-slate-800 shadow-2xl`}>
           <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600 rounded-full mix-blend-screen filter blur-[100px] opacity-40"></div>
           <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-[100px] opacity-40"></div>
           
           <div className="py-16 md:py-24 relative z-10">
              <div className="px-8 md:px-16 mb-12">
                 <h2 className={`text-4xl md:text-5xl font-black tracking-tight text-white mb-4`}>Praise</h2>
                 <p className="text-indigo-200 font-medium max-w-xl">Don't just take our word for it. Hear from the founders who scaled their software through us.</p>
              </div>

              <div className="relative flex overflow-hidden">
                <div className="flex gap-8 md:gap-12 animate-[marquee_40s_linear_infinite] px-8 hover:[animation-play-state:paused] whitespace-nowrap">
                  {[...data.testimonials, ...data.testimonials, ...data.testimonials, ...data.testimonials].map((test, i) => (
                    <div key={i} className="w-[85vw] md:w-[600px] shrink-0 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2rem] p-8 md:p-12 hover:-translate-y-2 transition-transform cursor-default whitespace-normal flex flex-col items-start shadow-xl shadow-black/20">
                      
                      <div className="flex text-amber-400 mb-8">
                        {[1, 2, 3, 4, 5].map((_, idx) => (
                          <svg key={idx} className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                        ))}
                      </div>
                      
                      <p className="text-xl md:text-2xl font-medium leading-relaxed text-white mb-10 flex-1">
                        "{test.feedback}"
                      </p>
                      
                      <div className="flex items-center gap-4 mt-auto">
                        <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center font-black text-white text-xl border-2 border-indigo-400/50">
                          {test.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-bold text-white tracking-wide">{test.name.split(',')[0]}</div>
                          <div className="text-xs text-indigo-200 font-medium uppercase tracking-widest mt-1">
                            {test.name.split(',')[1] ? test.name.split(',')[1] : "Verified Client"}
                          </div>
                        </div>
                      </div>

                    </div>
                  ))}
                </div>
                {/* Edge Fades for Dark Mode Marquee */}
                <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none"></div>
              </div>
           </div>
        </section>

        {/* 
          ========================================
          7. PRICING BENTO COLUMNS
          ======================================== 
        */}
        <section id="pricing">
          <div className="px-6 mb-8 mt-12 text-center">
            <h2 className={`text-4xl md:text-5xl font-black tracking-tight ${textHeading} mb-4`}>Transparent Pricing</h2>
            <p className="text-slate-500 font-medium max-w-xl mx-auto">No hidden fees. We map out the exact architecture pricing needed to scale your digital product.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-8">
             {data.pricing.map((tier, i) => (
                <div key={i} className={`${i === 1 ? bentoCardColored + ' bg-gradient-to-br from-indigo-500 to-indigo-700 md:-translate-y-4' : bentoCard} border border-slate-100 flex flex-col`}>
                   
                   {i === 1 && (
                     <div className="absolute top-6 right-6 px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full text-xs font-bold uppercase tracking-widest">
                       Popular
                     </div>
                   )}

                   <div className={`text-sm font-bold tracking-widest uppercase mb-4 ${i === 1 ? 'text-indigo-100' : 'text-slate-400'}`}>{tier.plan}</div>
                   <div className={`text-5xl md:text-6xl font-black tracking-tighter mb-8 ${i === 1 ? 'text-white' : textHeading}`}>{tier.price}</div>
                   
                   <p className={`font-medium mb-10 ${i === 1 ? 'text-indigo-200' : 'text-slate-500'}`}>
                     Everything you need to launch a production-ready system.
                   </p>

                   <ul className="flex-1 space-y-4 mb-10">
                     {tier.features.map((feat, idx) => (
                       <li key={idx} className={`flex items-start gap-3 font-semibold ${i === 1 ? 'text-white' : 'text-slate-600'}`}>
                         <CheckCircle2 size={20} className={i === 1 ? "text-indigo-200 mt-0.5" : "text-indigo-600 mt-0.5"} />
                         {feat}
                       </li>
                     ))}
                   </ul>

                   <button className={`w-full py-4 rounded-2xl font-bold text-lg transition-transform hover:-translate-y-1 ${i === 1 ? 'bg-white text-indigo-700 shadow-xl' : 'bg-slate-900 text-white shadow-lg focus:ring-4 ring-indigo-500/30'}`}>
                     Select Plan
                   </button>
                </div>
             ))}
          </div>
        </section>

        {/* 
          ========================================
          8. CONTACT (MASSIVE CALL TO ACTION)
          ======================================== 
        */}
        <section id="contact" className={`${bentoCardColored} bg-slate-900 mt-12 border border-slate-800 flex flex-col items-center justify-center text-center py-32`}>
           {/* Abstract mesh behind text */}
           <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-600 rounded-full mix-blend-screen filter blur-[150px] opacity-30 translate-x-1/2 -translate-y-1/2"></div>
           
           <div className="relative z-10 w-full max-w-3xl">
              <h2 className="text-5xl md:text-7xl lg:text-[100px] font-black tracking-tighter text-white mb-8 leading-[0.95]">
                Let's Build It.
              </h2>
              <p className="text-xl md:text-2xl font-medium text-slate-300 mb-16 leading-relaxed">
                Stop waiting. {data.brand.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <a href={`mailto:${data.contact.email}`} className="px-10 py-5 bg-indigo-600 text-white font-bold tracking-wide text-lg rounded-2xl shadow-[0_10px_30px_-10px_rgba(79,70,229,0.8)] hover:shadow-indigo-500/50 hover:-translate-y-1 transition-all flex items-center justify-center gap-3">
                   <Mail size={24} /> Contact via Email
                 </a>
                 <a href="#contact" className="px-10 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold tracking-wide text-lg rounded-2xl hover:bg-white/20 hover:-translate-y-1 transition-all flex items-center justify-center gap-3">
                   <PhoneCall size={24} /> {data.contact.phone}
                 </a>
              </div>
           </div>
        </section>

        {/* 
          ========================================
          9. FOOTER
          ======================================== 
        */}
        <footer className="pt-20 pb-12 px-6 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-slate-200/50 mt-12">
           <div className={`font-black tracking-tighter text-2xl ${textHeading}`}>
             {data.footer.brand}.
           </div>
           <div className="text-slate-400 font-bold text-sm tracking-wide">
             {data.footer.copyright}
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
