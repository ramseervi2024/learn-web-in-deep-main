import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioprofile as data } from './PersonalPortfolioData';
import { ArrowRight, ArrowUpRight, Plus, MapPin, Mail, Phone, Smartphone, Code2, Terminal } from 'lucide-react';

export default function Portfolio5() {
  const [hoveredProject, setHoveredProject] = useState(null);

  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  // Aesthetic Tokens
  const bgMain = "bg-[#F5F4EE]";
  const textMain = "text-[#1A1A1A]";
  const textMuted = "text-[#4A4A4A]";
  const borderThin = "border-[#1A1A1A]/20";
  
  const abstractColors = ['bg-[#D5D3C8]', 'bg-[#A3B19B]', 'bg-[#1A1A1A]'];

  const stats = [
    { label: 'Years of Experience', value: `${data.personal_info.experience_years}+` },
    { label: 'Production Ready Apps', value: `${data.projects.length}+` },
    { label: 'Technical Domains', value: `${data.core_expertise.length}` },
    { label: 'Global Availability', value: 'IMMEDIATE' }
  ];

  return (
    <div className={`min-h-screen ${bgMain} ${textMain} font-sans selection:bg-[#1A1A1A] selection:text-[#F5F4EE] overflow-x-hidden relative`}>
      
      {/* NAVBAR */}
      <nav className={`fixed top-0 inset-x-0 z-50 ${bgMain}/80 backdrop-blur-md border-b-[0.5px] ${borderThin}`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex flex-col">
            <span className={`font-serif text-2xl font-medium tracking-tight ${textMain}`}>{data.personal_info.name.split(' ')[0]}</span>
            <span className={`text-[8px] uppercase tracking-[0.3em] ${textMuted}`}>{data.personal_info.name.split(' ').slice(1).join(' ')}</span>
          </div>
          
          <div className="hidden md:flex gap-12">
            {['Expertise', 'Exhibitions', 'Credentials', 'Inquire'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className={`text-xs uppercase tracking-[0.2em] font-medium ${textMuted} hover:${textMain} transition-colors`}>
                {item}
              </a>
            ))}
          </div>

          <a href={`mailto:${data.personal_info.email}`} className="group flex items-center gap-3">
            <span className={`hidden sm:block text-xs uppercase tracking-[0.2em] font-medium ${textMain}`}>Inquire</span>
            <div className={`w-10 h-10 rounded-full border-[0.5px] border-[#1A1A1A] flex items-center justify-center group-hover:bg-[#1A1A1A] group-hover:text-[#F5F4EE] transition-all duration-500`}>
              <ArrowRight size={16} strokeWidth={1} />
            </div>
          </a>
        </div>
      </nav>

      <main className="pt-32 md:pt-48">
        
        {/* HERO */}
        <section className="px-6 max-w-7xl mx-auto mb-32 md:mb-48 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-5xl">
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-12">
              <div className="w-12 h-[1px] bg-[#1A1A1A]"></div>
              <span className={`text-[10px] uppercase tracking-[0.3em] font-medium ${textMain}`}>
                {data.personal_info.availability}
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp} className={`font-serif text-[12vw] sm:text-7xl md:text-8xl lg:text-[110px] leading-[0.9] tracking-tighter mb-12 ${textMain} italic pr-4`}>
              Vision.<br/>Engineered.
            </motion.h1>

            <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-12 md:gap-24">
              <p className={`text-lg md:text-2xl font-light leading-relaxed ${textMuted} max-w-xl`}>
                {data.personal_info.headline}
              </p>
              <div className="flex flex-col gap-6 justify-start items-start">
                <a href={`mailto:${data.personal_info.email}`} className={`text-xs uppercase tracking-[0.2em] font-medium ${textMain} border-b border-[#1A1A1A] pb-1 hover:opacity-50 transition-opacity flex items-center gap-2`}>
                   Initialize Collaboration <ArrowUpRight size={14} />
                </a>
                <a href="#exhibitions" className={`text-xs uppercase tracking-[0.2em] font-medium ${textMuted} hover:${textMain} transition-colors flex items-center gap-2`}>
                   View Portfolio
                </a>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* STATS STRIP */}
        <section className={`border-y-[0.5px] ${borderThin} py-16 md:py-24`}>
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col gap-4">
                <div className={`font-serif text-5xl md:text-6xl tracking-tighter ${textMain}`}>{stat.value}</div>
                <div className={`text-[9px] md:text-[10px] uppercase tracking-[0.3em] ${textMuted} max-w-[120px]`}>{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* VISION / DESCRIPTION QUOTE */}
        <section id="vision" className="py-32 md:py-48 px-6 max-w-4xl mx-auto text-center">
          <p className={`font-serif text-3xl md:text-5xl leading-tight md:leading-snug ${textMain} italic mb-12`}>
            "{data.summary}"
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="w-8 h-[1px] bg-[#1A1A1A]/40"></div>
            <span className={`text-[10px] uppercase tracking-[0.3em] ${textMuted}`}>2018 - Present</span>
            <div className="w-8 h-[1px] bg-[#1A1A1A]/40"></div>
          </div>
        </section>

        {/* EXPERTISE hairline list */}
        <section id="expertise" className={`py-32 bg-[#EBE9DE] px-6 border-y-[0.5px] ${borderThin}`}>
          <div className="max-w-7xl mx-auto">
            <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
              <h2 className={`font-serif text-5xl md:text-7xl tracking-tighter ${textMain}`}>Disciplines</h2>
              <span className={`text-[10px] uppercase tracking-[0.3em] ${textMuted} max-w-xs`}>
                Specialized engineering and design practices tailored for scale.
              </span>
            </div>

            <div className="flex flex-col">
              {data.services.map((service, i) => (
                <div key={i} className={`group py-10 md:py-16 border-t-[0.5px] ${borderThin} grid md:grid-cols-12 gap-8 md:gap-12 hover:bg-[#F5F4EE] transition-colors -mx-6 px-6`}>
                  
                  <div className="md:col-span-1">
                    <span className={`text-[10px] uppercase tracking-[0.3em] ${textMuted}`}>0{i + 1}</span>
                  </div>
                  
                  <div className="md:col-span-5">
                    <h3 className={`font-serif text-3xl md:text-4xl tracking-tight ${textMain} mb-4`}>{service}</h3>
                    <p className={`font-light text-sm md:text-base leading-relaxed ${textMuted} max-w-md`}>Enterprise-grade implementation of {service} modules.</p>
                  </div>
                  
                  <div className="md:col-span-6 flex flex-col justify-end">
                    <div className="flex flex-wrap gap-x-6 gap-y-3">
                        <div className="flex items-center gap-2">
                          <Plus size={10} strokeWidth={1} className={textMuted} />
                          <span className={`text-[10px] uppercase tracking-[0.2em] ${textMain}`}>Architecture</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Plus size={10} strokeWidth={1} className={textMuted} />
                          <span className={`text-[10px] uppercase tracking-[0.2em] ${textMain}`}>Deployment</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Plus size={10} strokeWidth={1} className={textMuted} />
                          <span className={`text-[10px] uppercase tracking-[0.2em] ${textMain}`}>Optimization</span>
                        </div>
                    </div>
                  </div>

                </div>
              ))}
              <div className={`border-t-[0.5px] ${borderThin}`}></div>
            </div>
          </div>
        </section>

        {/* EDITORIAL MARQUEE */}
        <div className="py-24 overflow-hidden bg-[#1A1A1A]">
          <div className="flex gap-16 animate-[marquee_40s_linear_infinite] whitespace-nowrap">
            {[...data.technical_stack.mobile, ...data.technical_stack.frontend, ...data.technical_stack.backend_integration].map((tech, i) => (
               <div key={i} className="font-serif text-5xl md:text-7xl tracking-tighter italic text-[#F5F4EE] opacity-80 mix-blend-screen">
                  {tech}
               </div>
            ))}
          </div>
        </div>

        {/* EXHIBITIONS (GALLERY) */}
        <section id="exhibitions" className="py-32 md:py-48 px-6 max-w-7xl mx-auto">
          <div className="mb-24 flex flex-col items-center text-center">
            <span className={`text-[10px] uppercase tracking-[0.3em] ${textMuted} mb-6`}>Selected Works</span>
            <h2 className={`font-serif text-5xl md:text-7xl tracking-tighter ${textMain} italic`}>Exhibitions</h2>
          </div>

          <div className="space-y-32 md:space-y-48">
            {data.projects.map((proj, i) => (
              <div 
                key={i} 
                className={`grid md:grid-cols-12 gap-12 md:gap-24 items-center`}
                onMouseEnter={() => setHoveredProject(i)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Abstract Image Space */}
                <div className={`md:col-span-7 ${i % 2 !== 0 ? 'md:order-2' : ''}`}>
                  <div className={`aspect-[4/3] ${abstractColors[i % abstractColors.length]} relative overflow-hidden flex items-center justify-center p-12 transition-transform duration-1000 ${hoveredProject === i ? 'scale-[1.02]' : 'scale-100'}`}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:24px_24px]"></div>
                    <div className="absolute top-8 left-8 text-[#F5F4EE] font-serif text-2xl italic opacity-50">No. {i + 1}</div>
                    
                    <h4 className="font-serif text-3xl md:text-5xl text-[#F5F4EE] tracking-tight text-center z-10 leading-tight break-words text-balance uppercase">
                      {proj.category}
                    </h4>
                  </div>
                </div>

                {/* Typography / Copy */}
                <div className={`md:col-span-5 flex flex-col ${i % 2 !== 0 ? 'md:order-1' : ''}`}>
                  <div className={`text-[10px] uppercase tracking-[0.3em] ${textMuted} mb-8 border-b-[0.5px] ${borderThin} pb-4 inline-block max-w-max`}>
                    {proj.type}
                  </div>
                  <h3 className={`font-serif text-4xl mb-6 ${textMain}`}>{proj.name}</h3>
                  <p className={`font-light leading-relaxed ${textMuted} mb-12`}>{proj.description}</p>
                  
                  <div className={`grid grid-cols-2 gap-8 mb-12 border-l-[0.5px] ${borderThin} pl-6`}>
                    <div>
                      <div className={`text-[9px] uppercase tracking-[0.2em] ${textMuted} mb-2`}>Focus</div>
                      <div className={`text-sm ${textMain} truncate`}>{proj.features[0]}</div>
                    </div>
                    <div>
                      <div className={`text-[9px] uppercase tracking-[0.2em] ${textMuted} mb-2`}>Stack</div>
                      <div className={`text-sm font-medium ${textMain} truncate`}>{proj.technologies[0]}</div>
                    </div>
                  </div>

                  <a href="#" className={`group flex items-center gap-4 text-xs uppercase tracking-[0.2em] font-medium ${textMain}`}>
                    Analyze Documentation
                    <span className="w-8 h-[1px] bg-[#1A1A1A] group-hover:w-16 transition-all duration-500"></span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PRAISE (ACHIEVEMENTS) */}
        <section className={`py-32 bg-[#1A1A1A] text-[#F5F4EE] overflow-hidden relative`}>
          <div className="text-center mb-24 relative z-20">
             <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 block mb-6">Execution Metrics</span>
             <h2 className="font-serif text-5xl md:text-7xl tracking-tighter text-[#F5F4EE] italic">Praise</h2>
          </div>
          
          <div className="relative flex">
            <div className="flex gap-16 md:gap-32 animate-[marquee_40s_linear_infinite] px-8 hover:[animation-play-state:paused] whitespace-nowrap">
              {[...data.achievements, ...data.achievements].map((ach, i) => (
                <div key={i} className="w-[85vw] md:w-[600px] shrink-0 flex flex-col items-center text-center">
                  <p className="font-serif text-2xl md:text-4xl leading-relaxed italic mb-12 whitespace-normal text-white/90">
                    "{ach}"
                  </p>
                  <div className="w-[1px] h-12 bg-white/20 mb-8"></div>
                  <div className="text-[10px] uppercase tracking-[0.2em] font-medium text-white/80">Authorized Achievement</div>
                </div>
              ))}
            </div>
            
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#1A1A1A] to-transparent pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#1A1A1A] to-transparent pointer-events-none"></div>
          </div>
        </section>

        {/* CREDENTIALS */}
        <section id="credentials" className="py-32 md:py-48 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className={`font-serif text-5xl md:text-7xl tracking-tighter ${textMain}`}>Engagements</h2>
            <div className={`w-[1px] h-16 bg-[#1A1A1A]/20 mx-auto mt-12`}></div>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12 md:gap-8 max-w-7xl mx-auto">
                <div className={`flex flex-col p-8 md:p-12 border-[0.5px] ${borderThin} hover:shadow-2xl transition-all duration-500 bg-white`}>
                    <div className={`text-[10px] uppercase tracking-[0.3em] ${textMuted} mb-6`}>Academic Tier</div>
                    <h3 className={`font-serif text-3xl mb-4 ${textMain}`}>{data.education.degree}</h3>
                    <div className={`font-light text-sm ${textMuted} mb-12`}>{data.education.institution}</div>
                    <div className={`font-serif text-5xl mb-12 ${textMain} italic`}>{data.education.year}</div>
                    <ul className="flex-1 space-y-4">
                        <li className={`flex items-start gap-4 border-b-[0.5px] ${borderThin} pb-4`}>
                          <ArrowUpRight size={14} strokeWidth={1} className={`${textMain} shrink-0 mt-1`} />
                          <span className={`text-xs uppercase tracking-[0.1em] ${textMuted} leading-relaxed`}>{data.education.field}</span>
                        </li>
                    </ul>
                </div>

                <div className={`flex flex-col p-8 md:p-12 border-[0.5px] ${borderThin} hover:shadow-2xl transition-all duration-500 bg-white`}>
                    <div className="flex justify-between items-start mb-6">
                      <div className={`text-[10px] uppercase tracking-[0.3em] ${textMuted}`}>Professional Tier</div>
                      <div className={`px-2 py-1 bg-[#1A1A1A]/5 border border-[#1A1A1A]/10 text-[9px] font-bold uppercase tracking-widest ${textMain}`}>Web. & Mobile Dev</div>
                    </div>
                    <h3 className={`font-serif text-3xl mb-4 ${textMain}`}>{data.employment[0].company}</h3>
                    <div className={`font-light text-sm ${textMuted} mb-12`}>{data.employment[0].role}</div>
                    <div className={`font-serif text-5xl mb-12 ${textMain} italic`}>2022&mdash;Present</div>
                    <ul className="flex-1 space-y-4">
                        <li className={`flex items-start gap-4 border-b-[0.5px] ${borderThin} pb-4`}>
                          <ArrowUpRight size={14} strokeWidth={1} className={`${textMain} shrink-0 mt-1`} />
                          <span className={`text-xs uppercase tracking-[0.1em] ${textMuted} leading-relaxed line-clamp-4`}>{data.employment[0].description}</span>
                        </li>
                    </ul>
                </div>

                <div className={`flex flex-col p-8 md:p-12 border-[0.5px] ${borderThin} hover:shadow-2xl transition-all duration-500 bg-white`}>
                    <div className={`text-[10px] uppercase tracking-[0.3em] ${textMuted} mb-6`}>Career Focus</div>
                    <h3 className={`font-serif text-3xl mb-4 ${textMain}`}>Future Direction</h3>
                    <div className={`font-light text-sm ${textMuted} mb-12`}>Strategic Growth Path</div>
                    <div className={`font-serif text-5xl mb-12 ${textMain} italic`}>{data.personal_info.expected_salary}</div>
                    <ul className="flex-1 space-y-4 mb-16">
                        <li className={`flex items-start gap-4 border-b-[0.5px] ${borderThin} pb-4`}>
                          <ArrowUpRight size={14} strokeWidth={1} className={`${textMain} shrink-0 mt-1`} />
                          <span className={`text-xs uppercase tracking-[0.1em] ${textMuted} leading-relaxed`}>{data.personal_info.current_salary}</span>
                        </li>
                        <li className={`flex items-start gap-4 border-b-[0.5px] ${borderThin} pb-4`}>
                          <ArrowUpRight size={14} strokeWidth={1} className={`${textMain} shrink-0 mt-1`} />
                          <span className={`text-xs uppercase tracking-[0.1em] ${textMuted} leading-relaxed`}>{data.personal_info.notice_period}</span>
                        </li>
                    </ul>
                </div>
          </div>
        </section>

        {/* GUARANTEES (Quiet Text) */}
        <section className={`py-24 border-t-[0.5px] ${borderThin} px-6`}>
           <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16 md:gap-12">
              {data.saas_capabilities.slice(0, 3).map((capability, i) => (
                 <div key={i}>
                    <h4 className={`text-xs uppercase tracking-[0.2em] font-medium ${textMain} mb-4`}>{capability.split('(')[0]}</h4>
                    <p className={`text-sm font-light leading-relaxed ${textMuted}`}>Robust engineering protocol for {capability}. Ensures maximum system uptime and architectural integrity.</p>
                 </div>
              ))}
           </div>
        </section>

        {/* FINAL CTA / FOOTER */}
        <section id="inquire" className="py-32 md:py-48 px-6 text-center border-t-[0.5px] border-[#1A1A1A]/10">
           <div className={`text-[10px] uppercase tracking-[0.3em] ${textMuted} mb-8`}>Final Step</div>
           <h2 className={`font-serif text-6xl md:text-8xl tracking-tighter ${textMain} mb-12 italic`}>
             Begin <br/> The Dialogue.
           </h2>
           
           <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-32">
              <a href={`mailto:${data.personal_info.email}`} className={`flex items-center gap-3 text-sm uppercase tracking-[0.2em] font-medium ${textMain} border-b border-[#1A1A1A] pb-2 hover:opacity-50 transition-opacity`}>
                 <Mail size={16} strokeWidth={1} /> Email Studio
              </a>
              <div className={`flex items-center gap-3 text-sm uppercase tracking-[0.2em] font-medium ${textMuted}`}>
                 <Phone size={16} strokeWidth={1} /> {data.personal_info.phone}
              </div>
           </div>

           <div className="flex flex-col items-center gap-6">
              <div className="w-[1px] h-24 bg-[#1A1A1A]/20"></div>
              <div className={`font-serif text-2xl ${textMain}`}>{data.personal_info.name}</div>
              <div className={`text-[9px] uppercase tracking-[0.2em] ${textMuted}`}>
                © {new Date().getFullYear()} All Rights Reserved. &mdash; Built in 2022
              </div>
           </div>
        </section>

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
