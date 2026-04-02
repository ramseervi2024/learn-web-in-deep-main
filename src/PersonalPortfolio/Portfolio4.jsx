import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioprofile as data } from './portfoliodata';
import { 
  ArrowRight, ShieldCheck, Mail, Phone, ExternalLink, Zap, Star, LayoutGrid, CheckSquare, Smartphone, Code2, Terminal
} from 'lucide-react';

// Bold, High-Contrast Neo-Brutalist Colors
const brutalColors = [
  'bg-[#FF90E8]', // Hot Pink
  'bg-[#FFC900]', // Cyber Yellow
  'bg-[#00E5FF]', // Bright Cyan
  'bg-[#B4F8C8]', // Mint Green
  'bg-[#FF6B6B]', // Punch Red
  'bg-[#A8E6CF]'  // Pale Lime
];

const brutalShadow = "border-[3px] border-zinc-900 shadow-[8px_8px_0px_0px_rgba(24,24,27,1)]";
const brutalButtonHover = "hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_rgba(24,24,27,1)] active:translate-x-[8px] active:translate-y-[8px] active:shadow-[0px_0px_0px_0px_rgba(24,24,27,1)] transition-all";

export default function Portfolio4() {
  const [openFaq, setOpenFaq] = useState(null);

  const stats = [
    { label: 'Years Exp', value: `${data.personal_info.experience_years}+` },
    { label: 'Apps Built', value: `${data.projects.length}+` },
    { label: 'Core Skills', value: `${data.core_expertise.length}` },
    { label: 'Availability', value: 'NOW' }
  ];

  return (
    <div className="min-h-screen bg-[#F4F0EA] text-zinc-900 font-sans selection:bg-[#FF90E8] overflow-x-hidden relative">
      
      {/* DOT GRID BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_2px_2px,rgba(24,24,27,0.15)_1px,transparent_0)] bg-[length:32px_32px]"></div>

      {/* STACKED NAV */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-[#F4F0EA] border-b-[4px] border-zinc-900">
        <div className="max-w-7xl mx-auto flex justify-between items-stretch">
          <div className="px-4 md:px-6 py-4 border-r-[4px] border-zinc-900 font-black text-xl md:text-2xl uppercase tracking-tighter self-center bg-[#00E5FF] truncate max-w-[50vw]">
            {data.personal_info.name}
          </div>
          <div className="hidden md:flex border-r-[4px] border-zinc-900">
             <a href="#expertise" className="px-8 py-5 border-r-[4px] border-zinc-900 font-bold uppercase hover:bg-[#FFC900] transition-colors">Expertise</a>
             <a href="#work" className="px-8 py-5 border-r-[4px] border-zinc-900 font-bold uppercase hover:bg-[#FF90E8] transition-colors">Work</a>
             <a href="#credentials" className="px-8 py-5 font-bold uppercase hover:bg-[#B4F8C8] transition-colors">Credentials</a>
          </div>
          <a href={`mailto:${data.personal_info.email}`} className="px-4 py-4 md:px-8 md:py-5 font-black uppercase text-white bg-zinc-900 border-l-[4px] border-zinc-900 hover:bg-zinc-800 transition-colors flex items-center gap-2 text-sm md:text-base">
            <span className="hidden sm:inline">Hire </span>Me <ArrowRight size={20} className="hidden sm:inline" />
          </a>
        </div>
      </nav>

      <main className="relative z-10 pt-20">
        
        {/* HERO */}
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 border-b-[4px] border-zinc-900 bg-[#FFC900] overflow-hidden">
          {/* Decorative floating shapes */}
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute -top-10 -left-10 w-40 h-40 bg-[#FF90E8] border-[4px] border-zinc-900 rounded-full" />
          <motion.div animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute bottom-20 -right-20 w-64 h-64 bg-[#00E5FF] border-[4px] border-zinc-900 rounded-[2rem]" />
          
          <div className="relative z-10 max-w-5xl mx-auto bg-white p-6 md:p-12 lg:p-20 border-[4px] border-zinc-900 shadow-[8px_8px_0px_0px_rgba(24,24,27,1)] md:shadow-[16px_16px_0px_0px_rgba(24,24,27,1)] mt-10 w-full">
             <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-zinc-900 text-white font-bold uppercase text-[10px] md:text-xs tracking-widest mb-6 md:mb-8 border-[2px] border-zinc-900 shadow-[4px_4px_0px_0px_rgba(24,24,27,1)]">
               <Zap size={14} className="text-[#00E5FF]" /> {data.personal_info.availability}
             </div>
             
             <h1 className="text-[12vw] sm:text-7xl md:text-8xl lg:text-[120px] font-black tracking-tighter leading-[0.9] uppercase mb-6 break-words text-zinc-900">
               {data.personal_info.name.split(' ')[0]}<br/>Architecture.
             </h1>
             
             <p className="text-lg md:text-3xl font-bold mb-4 max-w-3xl mx-auto leading-tight text-[#FF6B6B]">
               {data.personal_info.headline}
             </p>
             
             <p className="text-base md:text-xl font-bold mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed text-zinc-600">
               {data.summary}
             </p>

             <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
                <a href="#contact" className={`px-6 py-4 md:px-10 md:py-5 bg-[#FF6B6B] text-white font-black text-lg md:text-xl uppercase ${brutalShadow} ${brutalButtonHover} flex items-center justify-center gap-2`}>
                  Start Building <ArrowRight size={20} />
                </a>
                <a href="#work" className={`px-6 py-4 md:px-10 md:py-5 bg-white text-zinc-900 font-black text-lg md:text-xl uppercase ${brutalShadow} ${brutalButtonHover} flex items-center justify-center gap-2`}>
                  See The Work
                </a>
             </div>
          </div>
        </section>

        {/* STATS STRIP */}
        <section className="border-b-[4px] border-zinc-900 bg-white">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x-[4px] divide-zinc-900 border-t-[4px] md:border-t-0 border-zinc-900 max-w-7xl mx-auto">
             {stats.map((stat, i) => (
                <div key={i} className={`p-6 md:p-10 text-center ${brutalColors[i % brutalColors.length]} group border-b-[4px] md:border-b-0 border-zinc-900 flex flex-col justify-center`}>
                   <div className="text-4xl md:text-6xl font-black mb-1 md:mb-2 group-hover:scale-110 transition-transform">{stat.value}</div>
                   <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-zinc-800">{stat.label}</div>
                </div>
             ))}
          </div>
        </section>

        {/* HAZARD TAPE MARQUEE */}
        <div className="border-b-[4px] border-zinc-900 bg-zinc-900 text-[#FFC900] py-4 overflow-hidden -rotate-2 scale-110 my-10 shadow-2xl">
          <div className="flex gap-10 animate-[marquee_15s_linear_infinite] whitespace-nowrap">
             {[...data.technical_stack.mobile, ...data.technical_stack.frontend, ...data.technical_stack.backend_integration].map((tech, i) => (
                <div key={i} className="text-2xl font-black uppercase tracking-widest flex items-center gap-10">
                   {tech} <span className="text-white">///</span>
                </div>
             ))}
          </div>
        </div>

        {/* EXPERTISE / BENTO */}
        <section id="expertise" className="py-24 px-6 max-w-7xl mx-auto relative z-10">
          <div className="mb-16">
            <h2 className="text-6xl font-black uppercase tracking-tighter mb-4 text-zinc-900">Expertise</h2>
            <div className="w-32 h-4 bg-[#FF90E8] border-[3px] border-zinc-900 shadow-[4px_4px_0px_0px_rgba(24,24,27,1)]"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             {data.core_expertise.map((skill, i) => (
                <div key={i} className={`p-8 bg-white ${brutalShadow} group ${brutalButtonHover} flex flex-col h-full`}>
                   <div className={`w-16 h-16 ${brutalColors[i % brutalColors.length]} border-[3px] border-zinc-900 shadow-[4px_4px_0px_0px_rgba(24,24,27,1)] group-hover:rotate-12 transition-transform flex items-center justify-center mb-6`}>
                      <LayoutGrid size={32} className="text-zinc-900" />
                   </div>
                   <h3 className="text-2xl font-black uppercase mb-4 leading-tight text-zinc-900">{skill}</h3>
                   <p className="text-zinc-600 font-bold mb-6 flex-1">Enterprise-grade {skill} architecture focused on high performance and clean UI/UX standards.</p>
                   <div className="flex flex-wrap gap-2 mt-auto">
                        <span className="px-3 py-1 bg-zinc-100 border-[2px] border-zinc-900 text-xs font-bold uppercase shadow-[2px_2px_0px_0px_rgba(24,24,27,1)]">Production Ready</span>
                   </div>
                </div>
             ))}
          </div>
        </section>

        {/* PORTFOLIO (THE CARDS) */}
        <section id="work" className="py-20 md:py-24 px-4 md:px-6 bg-zinc-900 border-y-[4px] border-zinc-900 text-white relative">
           <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-[#00E5FF] border-[4px] border-zinc-900 rounded-bl-[50px] md:rounded-bl-[100px] z-0"></div>
           
           <div className="max-w-7xl mx-auto relative z-10">
              <div className="mb-16 md:mb-20">
                <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-4 text-[#B4F8C8]">Production Apps</h2>
                <div className="w-32 h-4 bg-[#FF6B6B] border-[3px] border-zinc-900 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"></div>
              </div>

              <div className="space-y-12 md:space-y-16">
                 {data.projects.map((proj, i) => (
                    <div key={i} className={`p-6 md:p-12 ${brutalColors[i % brutalColors.length]} text-zinc-900 border-[4px] border-zinc-900 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] md:shadow-[16px_16px_0px_0px_rgba(255,255,255,1)] grid lg:grid-cols-2 gap-8 md:gap-12 items-center`}>
                       
                       {/* Abstract Graphic */}
                       <div className="aspect-square md:aspect-video lg:aspect-square bg-white border-[4px] border-zinc-900 shadow-[8px_8px_0px_0px_rgba(24,24,27,1)] flex flex-col relative overflow-hidden group min-h-[300px]">
                          <div className="h-12 border-b-[4px] border-zinc-900 bg-zinc-200 flex items-center px-4 gap-3 shrink-0">
                             <div className="w-4 h-4 rounded-full bg-[#FF6B6B] border-[2px] border-zinc-900"></div>
                             <div className="w-4 h-4 rounded-full bg-[#FFC900] border-[2px] border-zinc-900"></div>
                             <div className="w-4 h-4 rounded-full bg-[#B4F8C8] border-[2px] border-zinc-900"></div>
                          </div>
                          <div className={`flex-1 flex items-center justify-center p-8 bg-[radial-gradient(circle_at_2px_2px,rgba(24,24,27,0.1)_1px,transparent_0)] bg-[length:24px_24px]`}>
                             <h4 className="text-4xl md:text-6xl font-black uppercase text-center group-hover:scale-110 transition-transform break-words text-balance text-zinc-900">{proj.category}</h4>
                          </div>
                       </div>

                       {/* Project Specs */}
                       <div>
                          <div className="inline-flex px-4 py-1.5 bg-zinc-900 text-white font-black uppercase text-sm border-[3px] border-zinc-900 shadow-[4px_4px_0px_0px_rgba(24,24,27,1)] mb-8">
                             {proj.type}
                          </div>
                          <h3 className="text-5xl font-black uppercase mb-6 leading-none text-zinc-900">{proj.name}</h3>
                          <p className="text-xl font-bold mb-10 text-zinc-900/80">{proj.description}</p>
                          
                          <div className="space-y-6 mb-10">
                             <div className="bg-white p-6 border-[3px] border-zinc-900 shadow-[6px_6px_0px_0px_rgba(24,24,27,1)] text-zinc-900">
                                <div className="font-black uppercase text-sm mb-2 text-[#FF6B6B]">Stack Feature</div>
                                <div className="font-bold">{proj.features[0]}</div>
                             </div>
                             <div className="bg-zinc-900 text-white p-6 border-[3px] border-zinc-900 shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] text-right relative active:scale-[0.98] transition-transform">
                                <div className="font-black uppercase text-sm mb-2 text-[#00E5FF]">Optimization</div>
                                <div className="font-bold">{proj.features[1] || 'Performance Optimized'}</div>
                             </div>
                          </div>

                          <div className="flex flex-wrap gap-2 text-balance lg:justify-start justify-center">
                             {proj.technologies.slice(0, 5).map((tech, idx) => (
                                <span key={idx} className="px-4 py-2 bg-white border-[3px] border-zinc-900 font-bold uppercase text-sm shadow-[4px_4px_0px_0px_rgba(24,24,27,1)] text-zinc-900">{tech}</span>
                             ))}
                          </div>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* GUARANTEES (SaaS Capabilities) */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
            <div className="mb-20 text-center">
              <h2 className="text-6xl font-black uppercase tracking-tighter mb-4 text-zinc-900">Capabilities.</h2>
              <div className="w-32 h-4 bg-[#00E5FF] border-[3px] border-zinc-900 shadow-[4px_4px_0px_0px_rgba(24,24,27,1)] mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
               {data.saas_capabilities.slice(0, 6).map((capability, i) => (
                  <div key={i} className={`p-8 bg-white border-[4px] border-zinc-900 shadow-[8px_8px_0px_0px_rgba(24,24,27,1)] hover:-translate-y-2 transition-transform`}>
                     <div className={`w-16 h-16 ${brutalColors[(i+2) % brutalColors.length]} border-[3px] border-zinc-900 shadow-[4px_4px_0px_0px_rgba(24,24,27,1)] flex items-center justify-center mb-6`}>
                        <ShieldCheck size={32} />
                     </div>
                     <h3 className="text-2xl font-black uppercase mb-4 text-zinc-900 break-words">{capability.split('(')[0]}</h3>
                     <p className="font-bold text-zinc-700">Robust implementation for {capability}.</p>
                  </div>
               ))}
            </div>
        </section>

        {/* ACHIEVEMENTS (360 CAROUSEL) */}
        <section className="py-24 bg-[#FF90E8] border-y-[4px] border-zinc-900 overflow-hidden relative shadow-[inset_0px_10px_0px_0px_rgba(0,0,0,0.1)]">
          <div className="text-center mb-16 relative z-20">
             <h2 className="text-4xl md:text-7xl font-black uppercase drop-shadow-[4px_4px_0px_rgba(24,24,27,1)] text-white px-6">Proven Metrics</h2>
          </div>
          <div className="relative flex">
            <div className="flex gap-8 animate-[marquee_40s_linear_infinite] px-4 hover:[animation-play-state:paused] cursor-default whitespace-nowrap">
              {[...data.achievements, ...data.achievements].map((ach, i) => (
                <div key={i} className={`w-[85vw] md:w-[450px] shrink-0 p-8 md:p-10 bg-white border-[4px] border-zinc-900 shadow-[12px_12px_0px_0px_rgba(24,24,27,1)] relative flex flex-col transform hover:-rotate-2 transition-transform justify-center min-h-[200px]`}>
                  <div className="flex justify-between items-start mb-8">
                     <div className="flex gap-1">
                       <Star fill="#FFC900" stroke="#18181b" strokeWidth={2} size={28} />
                       <Star fill="#FFC900" stroke="#18181b" strokeWidth={2} size={28} />
                       <Star fill="#FFC900" stroke="#18181b" strokeWidth={2} size={28} />
                       <Star fill="#FFC900" stroke="#18181b" strokeWidth={2} size={28} />
                       <Star fill="#FFC900" stroke="#18181b" strokeWidth={2} size={28} />
                     </div>
                     <div className="text-7xl font-black text-[#A8E6CF] leading-none drop-shadow-[2px_2px_0px_rgba(24,24,27,1)]">"</div>
                  </div>
                  <p className="text-xl md:text-2xl font-bold leading-relaxed whitespace-normal text-zinc-900">
                    {ach}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CREDENTIALS */}
        <section id="credentials" className="py-24 px-6 max-w-7xl mx-auto text-balance">
           <div className="text-center mb-20 text-balance">
             <h2 className="text-6xl font-black uppercase tracking-tighter mb-4 text-zinc-900">Credentials</h2>
             <div className="w-32 h-4 bg-[#B4F8C8] border-[3px] border-zinc-900 shadow-[4px_4px_0px_0px_rgba(24,24,27,1)] mx-auto"></div>
           </div>
           
           <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className={`p-10 bg-white border-[4px] border-zinc-900 flex flex-col relative shadow-[16px_16px_0px_0px_rgba(255,107,107,1)]`}>
                    <div className="absolute top-0 right-0 px-4 py-2 bg-[#FF6B6B] border-b-[4px] border-l-[4px] border-zinc-900 font-black uppercase text-white">Academic</div>
                    <h3 className="text-3xl font-black uppercase mb-4 text-zinc-900">{data.education.degree}</h3>
                    <div className="text-4xl font-black mb-6 text-[#FF6B6B] truncate">{data.education.field}</div>
                    <ul className="space-y-4 mb-10">
                        <li className="flex items-center gap-4 font-bold text-lg">
                            <CheckSquare size={24} className="text-zinc-900" fill="#FFC900" />
                            {data.education.institution}
                        </li>
                        <li className="flex items-center gap-4 font-bold text-lg">
                            <CheckSquare size={24} className="text-zinc-900" fill="#FFC900" />
                            {data.education.year}
                        </li>
                    </ul>
                </div>

                <div className={`p-10 bg-white border-[4px] border-zinc-900 flex flex-col relative shadow-[12px_12px_0px_0px_rgba(24,24,27,1)]`}>
                     <div className="absolute top-0 right-0 px-4 py-2 bg-zinc-900 border-b-[4px] border-l-[4px] border-zinc-900 font-black uppercase text-white">Career Goal</div>
                     <h3 className="text-3xl font-black uppercase mb-4 text-zinc-900">Career Focus</h3>
                    <div className="text-4xl font-black mb-6 text-[#00E5FF] truncate">{data.personal_info.expected_salary}</div>
                    <ul className="space-y-4 mb-10">
                        <li className="flex items-center gap-4 font-bold text-lg">
                            <CheckSquare size={24} className="text-zinc-900" fill="#B4F8C8" />
                            {data.personal_info.current_salary}
                        </li>
                        <li className="flex items-center gap-4 text-zinc-600 font-bold uppercase tracking-widest text-xs">
                            <div className="w-2 h-2 bg-black rounded-full"></div>
                            {data.personal_info.notice_period}
                        </li>
                    </ul>
                </div>
           </div>
        </section>

        {/* FOOTER CALL TO ACTION */}
        <section id="contact" className="bg-[#B4F8C8] border-t-[4px] border-zinc-900 pt-32 pb-10 text-center relative">
           <div className="absolute top-0 inset-x-0 h-[4px] bg-zinc-900 border-b-[8px] border-white drop-shadow-[0_8px_0_#FFF]"></div>
           <div className="max-w-4xl mx-auto px-6">
              <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-none drop-shadow-[4px_4px_0px_rgba(255,255,255,1)]">Ready to Build?</h2>
              <p className="text-2xl font-bold mb-16 text-zinc-800">Ditch the boring layouts. Let's make internet history.</p>
              
              <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-32">
                 <a href={`mailto:${data.personal_info.email}`} className={`px-10 py-6 bg-zinc-900 text-[#00E5FF] font-black uppercase text-2xl ${brutalShadow} ${brutalButtonHover} flex items-center justify-center gap-4 w-full sm:w-auto`}>
                    <Mail size={24} /> Email Me
                 </a>
                 <a href={`tel:${data.personal_info.phone}`} className={`px-10 py-6 bg-white text-zinc-900 font-black uppercase text-2xl ${brutalShadow} ${brutalButtonHover} flex items-center justify-center gap-4 w-full sm:w-auto`}>
                    <Phone size={24} /> Call Me
                 </a>
              </div>
           </div>
           
           <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t-[4px] border-zinc-900 px-10 pt-10">
              <div className="font-black text-2xl uppercase tracking-tighter bg-white px-4 py-2 border-[3px] border-zinc-900">{data.personal_info.name}</div>
              <div className="font-bold text-zinc-800">© {new Date().getFullYear()} All Rights Reserved.</div>
           </div>
        </section>

      </main>
    </div>
  );
}
