import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, AnimatePresence, useInView } from 'framer-motion';
import { portfolioprofile as data } from './PersonalPortfolioData';
import { 
  Sun, Moon, Star, Sparkles, Orbit, 
  ArrowUpRight, ChevronRight, Globe, Github, Twitter, Linkedin,
  Zap, Cpu, Layers, Smartphone, Mail, MapPin, Share2, Compass
} from 'lucide-react';

const NovaText = ({ children, className = "" }) => (
  <motion.span 
    initial={{ filter: "blur(10px)", opacity: 0 }}
    whileInView={{ filter: "blur(0px)", opacity: 1 }}
    transition={{ duration: 1.5 }}
    className={className}
  >
    {children}
  </motion.span>
);

const StellarCard = ({ children, className = "" }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    className={`bg-[#080808] border border-white/5 p-12 relative group ${className}`}
  >
    <div className="absolute top-0 left-0 w-[1px] h-0 bg-gradient-to-b from-amber-400 to-transparent group-hover:h-full transition-all duration-1000" />
    <div className="absolute bottom-0 right-0 w-0 h-[1px] bg-gradient-to-l from-amber-400 to-transparent group-hover:w-full transition-all duration-1000" />
    {children}
  </motion.div>
);

export default function PersonalPortfolio20() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.1], [0, -50]);

  return (
    <div className="bg-[#020202] text-[#f8f8f8] font-serif selection:bg-amber-400 selection:text-black min-h-screen relative overflow-hidden text-left">
      {/* Deep Space Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#111_0%,#020202_100%)]" />
         <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 0.5px, transparent 0.5px)', backgroundSize: '100px 100px' }} />
         
         <motion.div 
            animate={{ 
               scale: [1, 1.2, 1],
               opacity: [0.1, 0.3, 0.1]
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-amber-500/10 blur-[150px] rounded-full" 
         />
      </div>

      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-amber-500 origin-left z-[100]" style={{ scaleX }} />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-12 py-10 flex justify-between items-center mix-blend-difference text-left">
         <div className="flex items-center gap-6">
            <span className="text-xl font-black italic tracking-tighter uppercase">{data.brand.name}</span>
            <div className="w-10 h-[1px] bg-white opacity-20" />
            <span className="text-[10px] font-bold tracking-[0.4em] opacity-40 uppercase">NOVA_INTERFACE_V20</span>
         </div>
         
         <div className="hidden lg:flex gap-16 text-[9px] font-black tracking-widest uppercase">
            {['Chronos', 'Archives', 'Essence', 'Origin'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-amber-400 transition-colors">{item}</a>
            ))}
         </div>

         <button className="flex items-center gap-4 group">
            <span className="text-[10px] font-black uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity">Protocol_Initialization</span>
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-black transition-all">
               <Orbit size={18} />
            </div>
         </button>
      </nav>

      <main className="relative z-10">
        {/* HERO */}
        <section id="chronos" className="min-h-screen flex flex-col justify-center px-12 lg:px-44 pt-40 relative">
           <motion.div style={{ opacity, y }}>
              <div className="flex items-center gap-6 mb-12">
                 <div className="w-16 h-[1px] bg-amber-400" />
                 <span className="text-[10px] font-black uppercase tracking-[0.6em] text-amber-500">STELLAR_DEEP_LEVEL</span>
              </div>
              
              <h1 className="text-8xl md:text-[14vw] font-black leading-[0.8] tracking-tighter uppercase mb-20 italic">
                 <NovaText>Radiant</NovaText><br />
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
                    <NovaText>Identity.</NovaText>
                 </span>
              </h1>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end">
                 <p className="text-2xl md:text-4xl text-[#f8f8f8]/60 font-light leading-snug tracking-tight italic">
                    {data.hero.subtitle}
                 </p>
                 <div className="flex flex-col gap-10">
                    <div className="flex gap-20">
                       <div className="flex flex-col">
                          <span className="text-4xl font-black text-amber-400">{data.stats[0].value}</span>
                          <span className="text-[10px] uppercase font-bold text-white/30 tracking-widest">{data.stats[0].label}</span>
                       </div>
                       <div className="flex flex-col">
                          <span className="text-4xl font-black text-white">{data.stats[1].value}</span>
                          <span className="text-[10px] uppercase font-bold text-white/30 tracking-widest">{data.stats[1].label}</span>
                       </div>
                    </div>
                    <button className="group flex items-center gap-8 text-xs font-black uppercase tracking-[0.5em] text-amber-400 hover:text-white transition-all">
                       VIEW_COLLECTIONS <ArrowUpRight size={24} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                    </button>
                 </div>
              </div>
           </motion.div>

           <div className="absolute bottom-20 right-20 animate-bounce">
              <ChevronRight size={40} className="rotate-90 opacity-20" />
           </div>
        </section>

        {/* ARCHIVES: Projects */}
        <section id="archives" className="py-60 px-12 lg:px-44 bg-[#080808]">
           <div className="max-w-7xl mx-auto">
              <div className="mb-40 flex flex-col md:flex-row justify-between items-end gap-12 text-left">
                 <h2 className="text-7xl md:text-9xl font-black italic uppercase tracking-tighter leading-none">Archives_</h2>
                 <p className="text-sm font-bold uppercase tracking-widest opacity-30 max-w-xs text-left mb-6">
                    A curated chronological sequence of technical architectures deployed across global ecosystems.
                 </p>
              </div>

              <div className="grid grid-cols-1 gap-20 text-left">
                 {data.completed_projects.map((project, i) => (
                    <StellarCard key={i} className="flex flex-col lg:flex-row gap-20 border-white/5 hover:border-amber-400/20 text-left">
                       <div className="lg:w-2/5 aspect-square bg-[#111] relative overflow-hidden group">
                          <img src={`https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&u=${i}`} alt={project.project_name} className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" />
                          <div className="absolute inset-0 bg-amber-500/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity" />
                       </div>
                       <div className="lg:w-3/5 flex flex-col justify-between items-start text-left">
                          <div>
                             <span className="text-[10px] font-black uppercase tracking-[0.5em] text-amber-500 mb-10 block italic">PROTOCOL_NODE_v{i+10}</span>
                             <h3 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase mb-10">{project.project_name}</h3>
                             <p className="text-xl text-white/40 leading-relaxed mb-12 italic">
                                {project.description}
                             </p>
                          </div>
                          <div className="flex flex-col gap-10 w-full text-left">
                             <div className="flex flex-wrap gap-4">
                                {project.tech_stack.map((tech, j) => (
                                   <span key={j} className="text-[9px] font-black uppercase tracking-widest border border-white/10 px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all cursor-crosshair">{tech}</span>
                                ))}
                             </div>
                             <div className="w-full h-[1px] bg-white/5" />
                             <button className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.5em] opacity-40 hover:opacity-100 transition-opacity">
                                ACCESS_FULL_LOGS <ChevronRight size={16} />
                             </button>
                          </div>
                       </div>
                    </StellarCard>
                 ))}
              </div>
           </div>
        </section>

        {/* ESSENCE: Services */}
        <section id="essence" className="py-60 px-12 lg:px-44 text-left">
           <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 text-left">
                 {data.services.map((service, i) => (
                    <div key={i} className="p-16 border border-white/10 flex flex-col items-start gap-12 group hover:bg-white transition-all duration-700 text-left">
                       <span className="text-xs font-black uppercase tracking-widest text-amber-500 group-hover:text-amber-600 italic">CORE_ESSENCE_0{i+1}</span>
                       <h3 className="text-4xl font-black italic uppercase leading-none group-hover:text-black transition-colors italic tracking-tighter italic">{service.category}</h3>
                       <p className="text-lg text-white/30 group-hover:text-black/60 transition-colors italic leading-relaxed italic">{service.description}</p>
                       <div className="flex flex-col gap-4">
                          {service.features.map((feat, j) => (
                             <div key={j} className="flex items-center gap-4 text-[9px] font-black uppercase tracking-widest opacity-20 group-hover:opacity-100 group-hover:text-black transition-all italic">
                                <Box size={12} /> {feat}
                             </div>
                          ))}
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* ORIGIN: Footer */}
        <footer id="origin" className="py-60 px-12 lg:px-44 bg-[#080808] border-t border-white/5 relative overflow-hidden text-left">
           <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-amber-500 opacity-[0.03] blur-[200px] rounded-full pointer-events-none" />
           
           <div className="max-w-7xl mx-auto flex flex-col gap-40 text-left">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-40 text-left">
                 <div className="text-left">
                    <h2 className="text-7xl md:text-[10vw] font-black italic uppercase tracking-tighter leading-[0.8] mb-12">
                       Birth a<br />
                       <span className="text-amber-400 italic">Nova.</span>
                    </h2>
                    <div className="flex items-center gap-10 mb-20 text-left">
                       <div className="w-10 h-10 rounded-full border border-amber-400 flex items-center justify-center text-amber-400 animate-pulse">
                          <Compass size={20} />
                       </div>
                       <p className="text-xl text-white/30 font-light italic max-w-sm italic">
                          Taking strategic digital leaps that redefine the limits of mobile architectural excellence.
                       </p>
                    </div>
                 </div>

                 <div className="flex flex-col justify-center items-start md:items-end gap-20 text-left">
                    <div className="flex flex-col gap-4 text-left md:text-right">
                       <span className="text-[10px] font-black uppercase tracking-[0.8em] opacity-20 italic">Transmission_Channel</span>
                       <a href={`mailto:${data.personal_info.email}`} className="text-3xl md:text-5xl font-black italic hover:text-amber-400 transition-all underline decoration-amber-400/20 underline-offset-[12px]">{data.personal_info.email}</a>
                    </div>
                 </div>
              </div>

              <div className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12 text-left">
                 <div className="flex items-center gap-16 text-left">
                    <div className="flex gap-10 text-white/20 text-left">
                       <Twitter size={20} className="hover:text-amber-400 transition-all cursor-pointer" />
                       <Github size={20} className="hover:text-amber-400 transition-all cursor-pointer" />
                       <Linkedin size={20} className="hover:text-amber-400 transition-all cursor-pointer" />
                    </div>
                    <div className="w-[1px] h-10 bg-white/10" />
                    <span className="text-[10px] font-black uppercase tracking-widest opacity-20 italic">{data.personal_info.location} // CORE_NODE</span>
                 </div>
                 <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-white/10">
                    <Star size={14} className="text-amber-400" />
                    <span>© {new Date().getFullYear()} {data.brand.name} // STELLAR_ARCH_V20</span>
                 </div>
              </div>
           </div>
        </footer>
      </main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,300;1,700&family=Outfit:wght@900&family=Playfair+Display:ital,wght@1,900&display=swap');
        
        body {
          background-color: #020202;
          font-family: 'Cormorant Garamond', serif;
        }

        ::-webkit-scrollbar {
          width: 0px;
        }
      `}</style>
    </div>
  );
}
