import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioprofile as data } from './portfoliodata';
import { 
  ArrowRight, Menu, X, Github, Twitter, Linkedin, 
  MapPin, Mail, Zap, Globe
} from 'lucide-react';

const VerticalText = ({ children, className = "" }) => (
  <div className={`[writing-mode:vertical-lr] rotate-180 flex items-center gap-4 ${className}`}>
    <div className="w-[1px] h-12 bg-current opacity-20" />
    <span className="uppercase tracking-[0.6em] text-[10px] font-black">{children}</span>
  </div>
);

const CrimsonTag = ({ children }) => (
  <div className="inline-flex items-center gap-3">
    <div className="w-1.5 h-1.5 rounded-full bg-[#ff3e3e]" />
    <span className="text-[10px] uppercase font-bold tracking-widest text-[#1a1a1a]/40 group-hover:text-[#ff3e3e] transition-colors">{children}</span>
  </div>
);

export default function Portfolio15() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#fcfcfc] text-[#1a1a1a] font-sans selection:bg-[#ff3e3e] selection:text-white min-h-screen relative">
      
      <nav className={`fixed top-0 inset-x-0 z-[100] transition-all duration-500 px-8 py-8 ${scrolled ? 'bg-white/90 backdrop-blur-md py-4 border-b border-[#1a1a1a]/5' : 'bg-transparent'}`}>
        <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="w-10 h-10 bg-[#1a1a1a] flex items-center justify-center group cursor-pointer overflow-hidden">
               <motion.div whileHover={{ y: -40 }} className="transition-transform duration-500">
                  <div className="h-10 w-10 flex items-center justify-center text-white font-black text-xl italic select-none">
                    {data.personal_info.name[0]}
                  </div>
                  <div className="h-10 w-10 flex items-center justify-center bg-[#ff3e3e] text-white">
                     <Zap size={18} />
                  </div>
               </motion.div>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-sm font-black tracking-tighter uppercase leading-none">{data.personal_info.name}</span>
              <span className="text-[8px] font-mono opacity-30 uppercase tracking-[0.2em] mt-1">{data.personal_info.title}</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-12 text-[10px] uppercase font-bold tracking-[0.4em]">
            {['Strategy', 'Execution', 'Capital', 'Interface'].map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-[#ff3e3e] transition-colors relative group">
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#ff3e3e] group-hover:w-full transition-all duration-500" />
              </a>
            ))}
            <button className="px-8 py-3 bg-[#1a1a1a] text-white hover:bg-[#ff3e3e] transition-all duration-300">
              INITIATE
            </button>
          </div>

          <button onClick={() => setIsMenuOpen(true)} className="lg:hidden">
            <Menu size={24} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ ease: [0.19, 1, 0.22, 1], duration: 0.8 }}
            className="fixed inset-0 z-[110] bg-[#1a1a1a] text-white p-12 flex flex-col justify-between lg:hidden"
          >
            <div className="flex justify-end">
              <button onClick={() => setIsMenuOpen(false)}><X size={32} /></button>
            </div>
            <div className="flex flex-col gap-6 text-left">
              {['Strategy', 'Execution', 'Capital', 'Interface'].map((link, i) => (
                <motion.a 
                  key={link}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-6xl font-black italic tracking-tighter uppercase leading-none hover:text-[#ff3e3e]"
                >
                  {link}
                </motion.a>
              ))}
            </div>
            <div className="flex justify-between items-end border-t border-white/10 pt-12 text-left">
               <div className="flex flex-col gap-2 text-left">
                 <span className="text-[10px] uppercase font-bold tracking-widest text-white/40">Direct Contact</span>
                 <span className="text-xl font-bold italic">{data.personal_info.email}</span>
               </div>
               <div className="flex gap-6">
                 <Twitter size={20} />
                 <Github size={20} />
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        
        <section className="min-h-screen pt-40 pb-20 px-8 lg:px-32 flex flex-col justify-end relative overflow-hidden">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] font-black text-[#1a1a1a]/[0.02] select-none pointer-events-none italic tracking-tighter uppercase leading-none leading-[0.8] mix-blend-multiply transition-all duration-1000">
             ZEN
           </div>
           
           <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-20 items-end">
              <div className="lg:col-span-8 text-left">
                 <motion.div 
                    initial={{ opacity: 0, scaleX: 0 }} 
                    animate={{ opacity: 1, scaleX: 1 }} 
                    className="w-24 h-1 bg-[#ff3e3e] mb-12 origin-left" 
                 />
                 <motion.h1 
                    initial={{ opacity: 0, y: 30 }} 
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-7xl md:text-[8vw] font-black leading-[0.85] tracking-tighter uppercase italic mb-12 text-[#1a1a1a] text-left"
                 >
                   Mobile.<br />
                   <span className="text-[#1a1a1a]/30">Minimal.</span><br />
                   Protocol.
                 </motion.h1>
                 <motion.p 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-lg lg:text-2xl text-[#1a1a1a]/50 max-w-2xl font-light leading-relaxed mb-12 text-left"
                 >
                   {data.hero.subtitle}
                 </motion.p>
                 <div className="flex items-center gap-10">
                   <button className="group flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.5em] hover:text-[#ff3e3e] transition-colors">
                     VIEW DOSSIER <ArrowRight size={16} className="group-hover:translate-x-3 transition-transform" />
                   </button>
                   <div className="h-[1px] grow bg-[#1a1a1a]/5" />
                 </div>
              </div>
              <div className="lg:col-span-4 hidden lg:flex flex-col gap-12 border-l border-[#1a1a1a]/5 pl-12 text-left">
                 {data.stats.slice(0, 3).map((stat, i) => (
                    <div key={i} className="flex flex-col text-left">
                       <span className="text-3xl font-black italic mb-1 leading-none">{stat.value}</span>
                       <span className="text-[9px] uppercase tracking-widest text-[#1a1a1a]/30 font-bold">{stat.label}</span>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        <section id="strategy" className="py-32 px-8 lg:px-32 border-t border-[#1a1a1a]/5">
           <div className="max-w-7xl mx-auto">
              <div className="flex items-baseline gap-8 mb-24">
                 <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-[#1a1a1a]">01. Strategy</h2>
                 <div className="h-[1px] grow bg-[#1a1a1a]/20" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-[#1a1a1a]/10">
                 {(data.services || data.core_expertise).map((service, i) => (
                    <div key={i} className="p-12 border-r border-b border-[#1a1a1a]/10 hover:bg-[#1a1a1a] hover:text-white transition-all group relative overflow-hidden text-left">
                       <div className="absolute top-0 left-0 w-1 h-0 bg-[#ff3e3e] group-hover:h-full transition-all duration-500" />
                       <div className="mb-12">
                         <span className="text-[10px] font-black opacity-80 group-hover:opacity-100 group-hover:text-[#ff3e3e] mb-4 block tracking-widest">MODULE_P-0{i+1}</span>
                         <h3 className="text-2xl font-bold italic uppercase tracking-tighter leading-none text-[#1a1a1a] group-hover:text-white uppercase">
                            {service.category || service}
                         </h3>
                       </div>
                       <p className="text-sm text-[#1a1a1a]/60 group-hover:text-white/70 leading-relaxed mb-12 font-light">
                         {service.description || "Expert implementation of high-performance architectural patterns."}
                       </p>
                       {service.features && (
                            <ul className="space-y-4">
                                {service.features.map((feat, fi) => (
                                    <li key={fi} className="flex items-center gap-3 text-[10px] uppercase font-bold tracking-widest opacity-20 group-hover:opacity-100 group-hover:text-[#ff3e3e]">
                                        <div className="w-1 h-1 bg-current" /> {feat}
                                    </li>
                                ))}
                            </ul>
                       )}
                    </div>
                 ))}
              </div>
           </div>
        </section>

        <section id="execution" className="py-32 bg-[#1a1a1a] text-white">
           <div className="px-8 lg:px-32 mb-24">
              <div className="max-w-7xl mx-auto flex items-baseline gap-8">
                 <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-white">02. Execution</h2>
                 <div className="h-[1px] grow bg-white/20" />
              </div>
           </div>
           
           <div className="flex overflow-x-auto no-scrollbar gap-12 px-8 lg:px-32 pb-12">
              {data.projects.map((project, i) => (
                 <motion.div 
                    key={i} 
                    whileHover={{ y: -10 }}
                    className="min-w-[320px] md:min-w-[600px] flex flex-col group cursor-pointer text-left"
                 >
                    <div className="aspect-[4/5] md:aspect-video bg-[#0d0d0d] relative overflow-hidden mb-8 grayscale hover:grayscale-0 transition-all duration-700">
                       <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-12 flex flex-col justify-end">
                         <span className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase mb-4 text-white line-clamp-2">{project.name}</span>
                         <div className="flex gap-4">
                           <span className="px-4 py-2 bg-[#ff3e3e] text-white text-[9px] font-black uppercase tracking-widest">{project.type}</span>
                         </div>
                       </div>
                    </div>
                    <div className="flex justify-between items-start">
                       <div className="flex flex-col gap-2 text-left">
                          <CrimsonTag>{project.name}</CrimsonTag>
                          <p className="text-white/70 text-sm max-w-md font-light leading-relaxed">{project.description}</p>
                       </div>
                       <VerticalText className="text-white/30 group-hover:text-[#ff3e3e] transition-colors">ARCHIVE_NO_0{i+1}</VerticalText>
                    </div>
                 </motion.div>
              ))}
           </div>
        </section>

        <section id="interface" className="py-40 px-8 lg:px-32 bg-[#fcfcfc]">
           <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32">
              <div className="text-left">
                 <div className="flex items-center gap-6 mb-12">
                    <div className="w-12 h-1 bg-[#ff3e3e]" />
                    <span className="text-[11px] font-black uppercase tracking-[0.6em]">ESTABLISH BRIDGE</span>
                 </div>
                 <h2 className="text-7xl md:text-8xl font-black uppercase italic tracking-tighter leading-[0.8] mb-12 text-[#1a1a1a] text-left">
                   Let's<br /> 
                   <span className="text-[#1a1a1a]/20 hover:text-[#1a1a1a]/90 transition-colors cursor-default">Synchronize.</span>
                 </h2>
                 <p className="text-xl text-[#1a1a1a]/60 font-light leading-relaxed mb-20 max-w-sm text-left">
                   Ready to upgrade your infrastructure with precision-engineered mobile solutions? Initialize the connection below.
                 </p>
                 
                 <div className="space-y-12 text-left">
                    <div className="flex flex-col group cursor-pointer border-b border-[#1a1a1a]/10 pb-4 hover:border-[#ff3e3e] transition-all text-left">
                       <span className="text-[10px] font-black opacity-80 group-hover:text-[#ff3e3e] group-hover:opacity-100 mb-2 transition-all">DATA_MAIL</span>
                       <span className="text-2xl md:text-4xl font-bold italic text-[#1a1a1a]">{data.personal_info.email}</span>
                    </div>
                    <div className="flex flex-col group cursor-pointer border-b border-[#1a1a1a]/10 pb-4 hover:border-[#ff3e3e] transition-all text-left">
                       <span className="text-[10px] font-black opacity-80 group-hover:text-[#ff3e3e] group-hover:opacity-100 mb-2 transition-all">DATA_COORD</span>
                       <span className="text-2xl md:text-4xl font-bold italic text-[#1a1a1a]">{data.personal_info.location}</span>
                    </div>
                 </div>
              </div>

              <div className="relative">
                 <div className="aspect-square bg-[#1a1a1a] flex items-center justify-center p-20 relative overflow-hidden">
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute inset-0 opacity-5 border-[40px] border-dashed border-white rounded-full scale-150 rotate-45" />
                    <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-12 w-full z-10 flex flex-col gap-10">
                       <div className="flex flex-col gap-6">
                         {[0,1,2].map(i => (
                           <div key={i} className="h-[2px] bg-white/10 overflow-hidden">
                              <motion.div animate={{ x: ["-100%", "100%"] }} transition={{ duration: 2, delay: i * 0.5, repeat: Infinity }} className="h-full w-40 bg-[#ff3e3e]" />
                           </div>
                         ))}
                       </div>
                       <h3 className="text-white text-3xl font-black italic uppercase tracking-tighter text-left">System_Online</h3>
                       <p className="text-white/80 text-[10px] font-mono leading-relaxed uppercase tracking-widest text-left">
                          Available for high-performance mobile engineering.<br />
                          Ready for Deployment.
                       </p>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        <footer className="py-20 px-8 lg:px-32 bg-[#1a1a1a] text-white overflow-hidden relative">
           <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-left">
              <div className="flex items-center gap-8 text-left">
                 <span className="text-2xl font-black italic tracking-tighter uppercase">{data.personal_info.name}</span>
                 <div className="w-[1px] h-8 bg-white/10" />
                 <span className="text-[9px] font-mono text-white/30 uppercase tracking-widest">{data.personal_info.title}</span>
              </div>
              
              <div className="flex items-center gap-10 text-[9px] font-black uppercase tracking-[0.4em] text-white/20">
                 <a href="#" className="hover:text-[#ff3e3e] transition-colors">Github</a>
                 <a href="#" className="hover:text-[#ff3e3e] transition-colors">Twitter</a>
                 <a href="#" className="hover:text-[#ff3e3e] transition-colors">LinkedIn</a>
              </div>
           </div>

           <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
              <span className="text-[8px] font-mono text-white/10 uppercase tracking-[0.4em]">© {new Date().getFullYear()} {data.personal_info.name}. All Handlers Finalized.</span>
              <div className="flex items-center gap-4">
                 <Globe size={12} className="text-[#ff3e3e]" />
                 <span className="text-[8px] font-mono text-white/10 uppercase tracking-[0.4em]">PROTO_V15.ZEN</span>
              </div>
           </div>
           
           <motion.div 
             animate={{ x: [0, -1000] }} 
             transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
             className="absolute -bottom-10 left-0 text-[15vw] font-black text-white/[0.02] whitespace-nowrap leading-none select-none pointer-events-none uppercase italic"
           >
             PRECISION ENGINEERING PRECISION ENGINEERING PRECISION ENGINEERING
           </motion.div>
        </footer>
      </main>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&family=JetBrains+Mono:wght@400;700&display=swap');
        
        body {
          font-family: 'Inter', sans-serif;
          background: #fcfcfc;
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        ::-webkit-scrollbar {
          width: 4px;
        }
        ::-webkit-scrollbar-track {
          background: #fcfcfc;
        }
        ::-webkit-scrollbar-thumb {
          background: #1a1a1a;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #ff3e3e;
        }
      `}</style>
    </div>
  );
}
