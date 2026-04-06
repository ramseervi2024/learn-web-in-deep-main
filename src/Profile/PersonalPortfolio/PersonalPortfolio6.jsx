import React from 'react';
import { motion } from 'framer-motion';
import { portfolioprofile as data } from './PersonalPortfolioData';
import { ArrowRight, LayoutGrid, Zap, CheckCircle2, PhoneCall, Code2, Play, Mail, Smartphone, Terminal } from 'lucide-react';

export default function Portfolio6() {
  
  // Design Tokens for Bento Grid
  const bentoCard = "bg-white rounded-3xl md:rounded-[2.5rem] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_-10px_rgba(79,70,229,0.15)] hover:-translate-y-1 transition-all duration-500 overflow-hidden relative";
  const bentoCardColored = "bg-indigo-600 text-white rounded-3xl md:rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_40px_-10px_rgba(79,70,229,0.4)] hover:-translate-y-1 transition-all duration-500 overflow-hidden relative";
  
  const textHeading = "font-sans tracking-tight text-slate-900";
  const badgeColors = ['bg-blue-100 text-blue-700', 'bg-emerald-100 text-emerald-700', 'bg-purple-100 text-purple-700', 'bg-rose-100 text-rose-700'];

  const stats = [
    { label: 'Years Experience', value: `${data.personal_info.experience_years}+` },
    { label: 'Production Apps', value: `${data.projects.length}+` },
    { label: 'Core Expertise', value: `${data.core_expertise.length}` },
    { label: 'Joining', value: 'NOW' }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-600 font-sans selection:bg-indigo-500/30 overflow-x-hidden p-4 md:p-8 space-y-4 md:space-y-8 pb-32 relative">
      
      {/* FLOATING PILL NAVBAR */}
      <nav className="fixed top-6 inset-x-0 mx-auto w-[90vw] md:max-w-3xl z-50 bg-white/70 backdrop-blur-2xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-full px-6 md:px-8 py-4 flex items-center justify-between transition-all">
        <div className={`font-black text-xl tracking-tighter ${textHeading}`}>
          {data.personal_info.name.split(' ')[0]}
          <span className="text-indigo-600">.</span>
        </div>
        <div className="hidden md:flex gap-8">
           <a href="#expertise" className="text-sm font-semibold tracking-wide text-slate-500 hover:text-indigo-600 transition-colors">Expertise</a>
           <a href="#work" className="text-sm font-semibold tracking-wide text-slate-500 hover:text-indigo-600 transition-colors">Portfolio</a>
           <a href="#credentials" className="text-sm font-semibold tracking-wide text-slate-500 hover:text-indigo-600 transition-colors">Credentials</a>
        </div>
        <a href={`mailto:${data.personal_info.email}`} className="px-5 py-2.5 bg-slate-900 hover:bg-indigo-600 transition-colors text-white text-sm font-bold rounded-full flex items-center gap-2 shadow-lg">
          Hire Me <ArrowRight size={16} />
        </a>
      </nav>

      <main className="max-w-[1400px] mx-auto pt-24 md:pt-32 space-y-4 md:space-y-8">
        
        {/* HERO BENTO GRID */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
          
          {/* Main Hero Card (Span 8) */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className={`md:col-span-8 ${bentoCard} flex flex-col justify-center min-h-[500px] md:min-h-[600px] bg-gradient-to-br from-white to-slate-50/50`}>
             <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-700 font-bold text-xs tracking-widest rounded-full mb-8 max-w-max border border-indigo-100 uppercase">
               <Zap size={14} className="text-indigo-600" fill="currentColor" /> 
               {data.personal_info.availability}
             </div>
             
             <h1 className={`text-5xl md:text-7xl lg:text-[80px] font-black leading-[1.05] mb-8 ${textHeading} break-words`}>
               Vision.<br/>Engineered.
             </h1>
             
             <p className="text-lg md:text-2xl font-medium leading-relaxed max-w-2xl text-slate-500 mb-12">
               {data.personal_info.headline}
             </p>

             <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                <a href={`mailto:${data.personal_info.email}`} className="px-8 py-4 bg-indigo-600 text-white font-bold text-lg rounded-full shadow-[0_8px_20px_-6px_rgba(79,70,229,0.5)] hover:shadow-[0_12px_25px_-6px_rgba(79,70,229,0.6)] hover:-translate-y-0.5 transition-all text-center flex justify-center items-center gap-2">
                  Initialize Request <ArrowRight size={20} />
                </a>
                <a href="#work" className="px-8 py-4 bg-slate-100 text-slate-700 hover:bg-slate-200 font-bold text-lg rounded-full transition-all text-center flex justify-center items-center gap-2">
                  <Play size={20} className="text-slate-500" fill="currentColor" /> Explore Work
                </a>
             </div>
          </motion.div>

          {/* Secondary Stacked Cards (Span 4) */}
          <div className="md:col-span-4 flex flex-col gap-4 md:gap-8">
             
             <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className={`${bentoCardColored} flex-1 flex flex-col justify-center items-center text-center bg-gradient-to-br from-indigo-500 to-indigo-700`}>
                <div className="absolute inset-0 bg-indigo-400 opacity-30 blur-[40px] rounded-full scale-150 transform -translate-y-1/2"></div>
                <div className="relative z-10">
                  <div className="text-6xl md:text-[80px] font-black tracking-tighter mb-2 leading-none drop-shadow-md text-white">{stats[0].value}</div>
                  <div className="text-indigo-100 font-bold uppercase tracking-widest text-sm drop-shadow-sm">{stats[0].label}</div>
                </div>
             </motion.div>

             <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.3 }} className={`${bentoCard} flex-1 flex flex-col justify-center items-center text-center`}>
                <div className={`text-6xl md:text-7xl font-black tracking-tighter mb-2 leading-none ${textHeading}`}>{stats[1].value}</div>
                <div className="text-slate-500 font-bold uppercase tracking-widest text-sm">{stats[1].label}</div>
             </motion.div>

          </div>
        </section>

        {/* TECHNOLOGIES MARQUEE */}
        <section className={`${bentoCard} !px-0 bg-white border border-slate-100`}>
           <div className="text-center mb-6">
             <div className="text-xs font-bold tracking-widest text-slate-400 uppercase">Modern Technical Infrastructure</div>
           </div>
           
           <div className="relative flex overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
              <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
              
              <div className="flex gap-12 md:gap-24 animate-[marquee_30s_linear_infinite] px-8 hover:[animation-play-state:paused] whitespace-nowrap items-center py-6">
                {[...data.technical_stack.mobile, ...data.technical_stack.frontend, ...data.technical_stack.backend_integration].map((tech, i) => (
                   <div key={i} className={`text-3xl md:text-4xl font-black tracking-tighter ${textHeading} opacity-20 hover:opacity-100 hover:text-indigo-600 transition-colors cursor-default uppercase`}>
                      {tech}
                   </div>
                ))}
              </div>
           </div>
        </section>

        {/* EXPERTISE / MODULES */}
        <section id="expertise">
          <div className="px-6 mb-8 mt-12">
            <h2 className={`text-4xl md:text-5xl font-black tracking-tight ${textHeading}`}>Architectural Modules</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {data.services.map((service, i) => (
              <div key={i} className={`${bentoCard} group bg-gradient-to-b from-white to-slate-50/50`}>
                 <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mb-8 border border-indigo-100 group-hover:-translate-y-2 transition-transform shadow-sm">
                   <Code2 size={28} className="text-indigo-600" />
                 </div>
                 <h3 className={`text-2xl font-black mb-4 leading-tight ${textHeading}`}>{service}</h3>
                 <p className="text-slate-500 font-medium leading-relaxed mb-8 h-auto lg:h-[80px]">Enterprise-grade implementation of {service} ensuring high availability and clean standards.</p>
                 
                 <div className="flex flex-wrap gap-2 mt-auto">
                      <span className={`px-3 py-1 rounded-lg text-xs font-bold border border-transparent bg-indigo-100 text-indigo-700 bg-opacity-50`}>
                        Deployment Ready
                      </span>
                      <span className={`px-3 py-1 rounded-lg text-xs font-bold border border-transparent bg-emerald-100 text-emerald-700 bg-opacity-50`}>
                        Scalability
                      </span>
                 </div>
              </div>
            ))}
          </div>
        </section>

        {/* CASE STUDIES GALLERY */}
        <section id="work">
          <div className="px-6 mb-8 mt-12 flex justify-between items-end">
            <h2 className={`text-4xl md:text-5xl font-black tracking-tight ${textHeading}`}>Production Gallery</h2>
            <div className="text-xs font-bold tracking-widest text-slate-400 uppercase hidden md:block">Real World Case Studies</div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {data.projects.map((proj, i) => (
              <div key={i} className={`${bentoCard} p-4 md:p-6 group cursor-pointer bg-white`}>
                
                <div className={`w-full aspect-video md:aspect-[4/3] rounded-[2rem] mb-8 overflow-hidden relative flex items-center justify-center ${badgeColors[i % badgeColors.length]} bg-opacity-20 transition-all duration-700 group-hover:scale-[1.02]`}>
                   <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                   <div className="absolute center bg-white/50 backdrop-blur-md rounded-full px-6 py-3 font-bold text-slate-800 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-500">
                     Explore Case Study
                   </div>
                   <h4 className={`text-4xl md:text-5xl font-black ${textHeading} opacity-30 tracking-tighter group-hover:scale-110 transition-transform duration-700 uppercase`}>{proj.category}</h4>
                </div>

                <div className="px-4 pb-4">
                  <div className="flex justify-between items-start mb-4">
                     <div>
                       <div className="text-xs font-bold tracking-widest text-indigo-500 uppercase mb-2">{proj.type}</div>
                       <h3 className={`text-3xl md:text-4xl font-black tracking-tight ${textHeading}`}>{proj.name}</h3>
                     </div>
                  </div>
                  <p className="text-slate-500 font-medium leading-relaxed mb-6">
                    {proj.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6 pt-6 border-t border-slate-100">
                     <div>
                       <div className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">Focus</div>
                       <div className={`font-black text-indigo-600 truncate`}>{proj.features[0]}</div>
                     </div>
                     <div>
                       <div className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">Stack</div>
                       <div className={`font-black text-slate-700 truncate`}>{proj.technologies[0]} + {proj.technologies[1]}</div>
                     </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ACHIEVEMENTS AUTO MARQUEE */}
        <section className={`${bentoCardColored} !p-0 mt-12 bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden`}>
           <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600 rounded-full mix-blend-screen filter blur-[100px] opacity-40"></div>
           <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-[100px] opacity-40"></div>
           
           <div className="py-16 md:py-24 relative z-10">
              <div className="px-8 md:px-16 mb-12">
                 <h2 className={`text-4xl md:text-5xl font-black tracking-tight text-white mb-4`}>Praise</h2>
                 <p className="text-indigo-200 font-medium max-w-xl">Proven execution metrics across production environments.</p>
              </div>

              <div className="relative flex overflow-hidden">
                <div className="flex gap-8 md:gap-12 animate-[marquee_40s_linear_infinite] px-8 hover:[animation-play-state:paused] whitespace-nowrap">
                  {[...data.achievements, ...data.achievements].map((ach, i) => (
                    <div key={i} className="w-[85vw] md:w-[600px] shrink-0 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2rem] p-8 md:p-12 hover:-translate-y-2 transition-transform cursor-default whitespace-normal flex flex-col items-start shadow-xl shadow-black/20 justify-center min-h-[250px]">
                      <div className="flex text-amber-400 mb-8">
                        {[1, 2, 3, 4, 5].map((_, idx) => (
                          <svg key={idx} className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                        ))}
                      </div>
                      <p className="text-xl md:text-2xl font-medium leading-relaxed text-white mb-10 flex-1">
                        "{ach}"
                      </p>
                    </div>
                  ))}
                </div>
                <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none"></div>
              </div>
           </div>
        </section>

        {/* CREDENTIALS */}
        <section id="credentials">
          <div className="px-6 mb-8 mt-12 text-center">
            <h2 className={`text-4xl md:text-5xl font-black tracking-tight ${textHeading} mb-4`}>Credentials</h2>
            <p className="text-slate-500 font-medium max-w-xl mx-auto">Academic and commercial grounding for enterprise collaboration.</p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 md:gap-8 max-w-7xl mx-auto">
                <div className={`${bentoCardColored} bg-gradient-to-br from-indigo-500 to-indigo-700 flex flex-col`}>
                   <div className="absolute top-6 right-6 px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full text-[10px] font-bold uppercase tracking-widest leading-none">
                     Academic
                   </div>
                   <div className={`text-[10px] font-bold tracking-widest uppercase mb-4 text-indigo-100`}>{data.education.degree}</div>
                   <div className={`text-4xl md:text-5xl font-black tracking-tighter mb-8 text-white`}>{data.education.year}</div>
                   <p className={`font-medium mb-10 text-indigo-200 text-sm`}>
                     Specialized in {data.education.field} at {data.education.institution}.
                   </p>
                </div>

                <div className={`${bentoCard} border border-slate-100 flex flex-col relative bg-white`}>
                   <div className="absolute top-6 right-6 px-3 py-1 bg-slate-100 border border-slate-200 text-slate-400 rounded-full text-[10px] font-bold uppercase tracking-widest leading-none">
                     Professional
                   </div>
                   <div className={`text-[10px] font-bold tracking-widest uppercase mb-4 text-slate-400`}>{data.employment[0].company}</div>
                   <div className={`text-4xl md:text-5xl font-black tracking-tighter mb-8 ${textHeading}`}>{data.employment[0].duration.split(' ')[0]}</div>
                   <p className={`font-medium mb-8 text-slate-500 text-sm line-clamp-3`}>
                     {data.employment[0].role} — {data.employment[0].description}
                   </p>
                   <div className="mt-auto flex flex-wrap gap-2">
                     {data.employment[0].key_skills.slice(0, 3).map((skill, i) => (
                       <span key={i} className="px-2 py-1 bg-slate-50 border border-slate-100 text-[9px] font-bold uppercase tracking-widest text-slate-400 rounded">{skill}</span>
                     ))}
                   </div>
                </div>

                <div className={`${bentoCard} border border-slate-100 flex flex-col bg-slate-50/50`}>
                   <div className={`text-[10px] font-bold tracking-widest uppercase mb-4 text-slate-400`}>Career Goal</div>
                   <div className={`text-4xl md:text-5xl font-black tracking-tighter mb-8 ${textHeading}`}>{data.personal_info.expected_salary}</div>
                   <ul className="flex-1 space-y-4 mb-4">
                     <li className="flex items-start gap-3 font-semibold text-slate-600 text-sm">
                       <CheckCircle2 size={16} className="text-indigo-600 mt-0.5" />
                       {data.personal_info.current_salary}
                     </li>
                     <li className="flex items-start gap-3 font-semibold text-slate-600 text-sm">
                       <CheckCircle2 size={16} className="text-indigo-600 mt-0.5" />
                       {data.personal_info.notice_period}
                     </li>
                   </ul>
                </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className={`${bentoCardColored} bg-slate-900 mt-12 border border-slate-800 flex flex-col items-center justify-center text-center py-32`}>
           <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-600 rounded-full mix-blend-screen filter blur-[150px] opacity-30 translate-x-1/2 -translate-y-1/2"></div>
           
           <div className="relative z-10 w-full max-w-3xl">
              <h2 className="text-5xl md:text-7xl lg:text-[100px] font-black tracking-tighter text-white mb-8 leading-[0.95] break-words">
                Begin Dialog.
              </h2>
              <p className="text-xl md:text-2xl font-medium text-slate-300 mb-16 leading-relaxed">
                Connect for high-impact mobile and web engineering projects.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <a href={`mailto:${data.personal_info.email}`} className="px-10 py-5 bg-indigo-600 text-white font-bold tracking-wide text-lg rounded-2xl shadow-[0_10px_30px_-10px_rgba(79,70,229,0.8)] hover:shadow-indigo-500/50 hover:-translate-y-1 transition-all flex items-center justify-center gap-3">
                   <Mail size={24} /> Transmit Request
                 </a>
                 <a href={`tel:${data.personal_info.phone}`} className="px-10 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold tracking-wide text-lg rounded-2xl hover:bg-white/20 hover:-translate-y-1 transition-all flex items-center justify-center gap-3">
                   <PhoneCall size={24} /> {data.personal_info.phone}
                 </a>
              </div>
           </div>
        </section>

        {/* FOOTER */}
        <footer className="pt-20 pb-12 px-6 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-slate-200/50 mt-12">
           <div className={`font-black tracking-tighter text-2xl ${textHeading}`}>
             {data.personal_info.name}.
           </div>
           <div className="text-slate-400 font-bold text-sm tracking-wide">
             © {new Date().getFullYear()} All Rights Reserved.
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