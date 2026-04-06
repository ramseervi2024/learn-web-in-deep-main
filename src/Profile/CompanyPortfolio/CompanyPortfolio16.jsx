import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, useMotionValue } from 'framer-motion';
import { CompanyPortfolio as data } from './CompanyPortfolioData';
import { 
  ArrowUpRight, ChevronRight, Globe, Github, Twitter, Linkedin, 
  Layers, Cpu, Smartphone, Zap, Mail, MapPin, Share2
} from 'lucide-react';

const SilverGradient = "bg-gradient-to-br from-[#f8fafc] via-[#e2e8f0] to-[#94a3b8]";

const MercuryCard = ({ children, className = "" }) => (
  <motion.div 
    whileHover={{ scale: 1.02, rotateY: 5, rotateX: -5 }}
    className={`backdrop-blur-3xl bg-white/20 border border-white/40 shadow-2xl rounded-[2rem] overflow-hidden ${className}`}
    style={{ transformStyle: "preserve-3d" }}
  >
    {children}
  </motion.div>
);

export default function CompanyPortfolio16() {
  const [scrolled, setScrolled] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleS = () => setScrolled(window.scrollY > 20);
    const handleM = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('scroll', handleS);
    window.addEventListener('mousemove', handleM);
    return () => {
      window.removeEventListener('scroll', handleS);
      window.removeEventListener('mousemove', handleM);
    };
  }, []);

  if (!data) return null;

  return (
    <div className="bg-[#f0f2f5] text-[#1e293b] font-sans selection:bg-[#6366f1] selection:text-white min-h-screen relative overflow-hidden">
      
      {/* Liquid Cursor Follower */}
      <motion.div 
        className="fixed top-0 left-0 w-8 h-8 bg-[#6366f1]/40 blur-2xl rounded-full pointer-events-none z-[999]"
        style={{ x: mouseX, y: mouseY, translateX: "-50%", translateY: "-50%" }}
      />

      {/* Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-[#6366f1] origin-left z-[110]" style={{ scaleX }} />

      {/* Floating Mercury Nav */}
      <nav className={`fixed top-4 md:top-8 inset-x-4 md:inset-x-8 z-[100] transition-all duration-700`}>
        <div className={`max-w-7xl mx-auto px-6 md:px-8 py-3 md:py-5 rounded-full border border-white/40 shadow-xl flex justify-between items-center transition-all ${scrolled ? 'bg-white/60 backdrop-blur-3xl' : 'bg-white/20 backdrop-blur-md'}`}>
          <div className="flex items-center gap-3 md:gap-4">
             <div className="w-8 h-8 md:w-10 md:h-10 bg-[#1e293b] rounded-full flex items-center justify-center text-white font-black italic shadow-lg text-xs md:text-base">R</div>
             <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] overflow-hidden whitespace-nowrap">{data?.brand?.name}</span>
          </div>
          
          <div className="flex items-center gap-4 md:gap-8 text-[9px] md:text-[10px] uppercase font-black tracking-widest">
            <div className="hidden lg:flex gap-8 opacity-60">
              {['Services', 'Projects', 'Contact'].map(link => (
                <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-[#6366f1] hover:opacity-100 transition-all">{link}</a>
              ))}
            </div>
            <button className="px-4 md:px-6 py-2 bg-[#6366f1] text-white rounded-full hover:scale-105 transition-transform shadow-lg shadow-[#6366f1]/20 text-[8px] md:text-[10px]">
               CONNECT
            </button>
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        
        {/* HERO: The Fluid Core */}
        <section className="min-h-screen pt-40 px-8 lg:px-32 flex flex-col justify-center items-center relative overflow-hidden">
           <div className="absolute inset-x-0 top-0 h-full bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.1),transparent_50%)]" />
           
           <div className="max-w-5xl mx-auto text-center relative z-10">
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8 inline-flex items-center gap-3 px-6 py-2 bg-white/40 backdrop-blur-xl border border-white/60 rounded-full text-[10px] font-black uppercase tracking-[0.4em] text-[#6366f1]"
              >
                 <Zap size={12} /> {data?.brand?.tagline}
              </motion.div>
              
              <motion.h1 
                 initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
                 animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                 transition={{ duration: 1.2 }}
                 className="text-7xl md:text-[10vw] font-black leading-[0.8] tracking-tighter uppercase mb-12 text-[#1e293b]"
              >
                Liquid<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#d946ef]">Success.</span>
              </motion.h1>
              
              <motion.p 
                 initial={{ opacity: 0 }} 
                 animate={{ opacity: 1 }} 
                 transition={{ delay: 0.5 }}
                 className="text-xl md:text-2xl text-[#1e293b]/50 max-w-2xl mx-auto font-light leading-relaxed mb-16"
              >
                {data?.hero?.subtitle}
              </motion.p>
              
              <motion.div className="flex flex-col md:flex-row justify-center gap-8 items-center">
                 <button className="w-full md:w-auto px-12 py-6 bg-[#1e293b] text-white rounded-[2rem] font-black text-xs uppercase tracking-[0.5em] hover:bg-[#6366f1] transition-all shadow-2xl hover:shadow-[#6366f1]/20">
                    START PROJECT
                 </button>
                 <div className="flex -space-x-4">
                    {[1,2,3,4].map(i => (
                       <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 overflow-hidden shadow-lg">
                          <img src={`https://i.pravatar.cc/100?u=${i+10}`} alt="client" className="w-full h-full object-cover" />
                       </div>
                    ))}
                    <div className="w-12 h-12 rounded-full border-4 border-white bg-[#6366f1] flex items-center justify-center text-white text-[10px] font-black italic shadow-lg">
                       +40
                    </div>
                 </div>
              </motion.div>
           </div>

           {/* Floating Liquid Orbs */}
           <motion.div 
             animate={{ y: [0, -40, 0], x: [0, 20, 0] }} 
             transition={{ duration: 10, repeat: Infinity }}
             className="absolute -left-20 top-1/2 w-64 h-64 bg-[#6366f1]/10 blur-[100px] rounded-full" 
           />
           <motion.div 
             animate={{ y: [0, 40, 0], x: [0, -20, 0] }} 
             transition={{ duration: 12, repeat: Infinity, delay: 1 }}
             className="absolute -right-20 bottom-0 w-96 h-96 bg-[#d946ef]/10 blur-[120px] rounded-full" 
           />
        </section>

        {/* SERVICES: Glass Modules */}
        <section id="services" className="py-24 lg:py-40 px-8 lg:px-32 bg-white/30">
           <div className="max-w-7xl mx-auto">
              <div className="mb-24 flex flex-col items-center text-center">
                 <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-4 italic text-[#1e293b]">Core Modules.</h2>
                 <div className="w-24 h-1 bg-[#6366f1]/40 rounded-full" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                 {data?.services?.map((service, i) => (
                    <MercuryCard key={i} className="group p-10 flex flex-col justify-between h-auto md:h-[500px] border-white/60">
                       <div>
                          <div className="w-16 h-16 rounded-[1.5rem] bg-[#6366f1]/10 flex items-center justify-center mb-10 group-hover:bg-[#6366f1] group-hover:text-white transition-all duration-500 shadow-inner text-[#6366f1]">
                             {i === 0 ? <Layers size={32} /> : i === 1 ? <Smartphone size={32} /> : <Cpu size={32} />}
                          </div>
                          <h3 className="text-3xl font-black italic uppercase tracking-tighter mb-6 text-[#1e293b]">{service.category}</h3>
                          <p className="text-[#1e293b]/60 group-hover:text-[#1e293b] leading-relaxed mb-10 transition-colors font-medium">{service.description}</p>
                       </div>
                       <div className="flex flex-wrap gap-2">
                          {service?.features?.slice(0, 3).map((f, fi) => (
                             <span key={fi} className="px-4 py-2 bg-white/60 border border-[#6366f1]/20 shadow-sm rounded-full text-[9px] font-black uppercase tracking-widest text-[#6366f1]">{f}</span>
                          ))}
                       </div>
                    </MercuryCard>
                 ))}
              </div>
           </div>
        </section>

        {/* PROJECTS: Refractive Grid */}
        <section id="projects" className="py-24 lg:py-40 px-8 lg:px-32">
           <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24">
                 <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none italic text-[#1e293b]">Execution<br />History_</h2>
                 <div className="max-w-xs text-right">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#1e293b]/50 leading-relaxed">
                       A curated archive of high-performance digital solutions deployed globally across industries.
                    </p>
                 </div>
              </div>
              
              <div className="grid grid-cols-1 gap-12">
                 {data?.completed_projects?.map((project, i) => (
                    <MercuryCard key={i} className="flex flex-col lg:flex-row border-white/60">
                       <div className="lg:w-1/2 aspect-video lg:aspect-square bg-[#e2e8f0] relative overflow-hidden group">
                          <img src={`https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800&u=${i}`} alt={project.project_name} className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110" />
                          <div className="absolute inset-0 bg-[#6366f1]/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                          <div className="absolute top-8 left-8">
                             <div className="px-6 py-2 bg-white/90 backdrop-blur-xl rounded-full text-[9px] font-black uppercase tracking-[0.4em] shadow-xl text-[#6366f1]">PROJECT_v0{i+1}</div>
                          </div>
                       </div>
                       <div className="lg:w-1/2 p-12 md:p-20 flex flex-col justify-between items-start">
                          <div>
                             <h3 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase mb-6 text-[#1e293b]">{project.project_name}</h3>
                             <p className="text-lg text-[#1e293b]/60 font-medium leading-relaxed mb-12">{project.problem}</p>
                             <div className="flex flex-col gap-4 mb-20">
                                {project?.result?.map((res, ri) => (
                                   <div key={ri} className="flex items-center gap-4">
                                      <div className="w-2 h-2 rounded-full bg-[#6366f1]" />
                                      <span className="text-sm font-bold tracking-tight text-[#1e293b]/80 italic">{res}</span>
                                   </div>
                                ))}
                             </div>
                          </div>
                          <button className="group flex items-center gap-4 text-xs font-black uppercase tracking-[0.5em] text-[#6366f1]">
                             READ CASE STUDY <ArrowUpRight size={20} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                          </button>
                       </div>
                    </MercuryCard>
                 ))}
              </div>
           </div>
        </section>

        {/* FOOTER: Infinite Melt */}
        <footer className="py-40 bg-[#1e293b] text-white relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#f0f2f5] to-transparent opacity-10" />
           
           <div className="max-w-7xl mx-auto px-8 lg:px-32 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 mb-40">
                 <div>
                    <h2 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-[0.85] mb-12">
                      Ready to<br />
                      <span className="text-[#6366f1]">Solidify?</span>
                    </h2>
                    <p className="text-xl text-white/40 font-light leading-relaxed max-w-md">
                      Let's turn your concept into a production-ready digital asset. Connect with our engineering core today.
                    </p>
                 </div>
                 
                 <div className="flex flex-col justify-center gap-12">
                    <div className="flex flex-col group cursor-pointer">
                       <span className="text-[10px] font-black opacity-30 tracking-[0.5em] mb-4">DIRECT_CHANNEL</span>
                       <span className="text-3xl md:text-5xl font-black italic group-hover:text-[#6366f1] transition-all">{data?.brand?.email}</span>
                    </div>
                    <div className="flex flex-col group cursor-pointer">
                       <span className="text-[10px] font-black opacity-30 tracking-[0.5em] mb-4">ENGINE_GEO</span>
                       <span className="text-2xl md:text-4xl font-black italic text-white/40 group-hover:text-white transition-all">{data?.brand?.location}</span>
                    </div>
                 </div>
              </div>
              
              <div className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12">
                 <div className="flex items-center gap-12">
                    <span className="text-xl font-black italic tracking-tighter">{data?.brand?.name}</span>
                    <div className="flex gap-8 text-white/40">
                       <Twitter size={20} className="hover:text-white cursor-pointer" />
                       <Github size={20} className="hover:text-white cursor-pointer" />
                       <Linkedin size={20} className="hover:text-white cursor-pointer" />
                    </div>
                 </div>
                 <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-white/20">
                    <Globe size={14} className="text-[#6366f1]" />
                    <span>© {new Date().getFullYear()} {data?.brand?.name} // SYSTEM_v16.LIQUID</span>
                 </div>
              </div>
           </div>
        </footer>
      </main>

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;700;900&family=Space+Grotesk:wght@300;500;700&display=swap');
        
        body {
          font-family: 'Outfit', sans-serif;
          background: #f0f2f5;
        }
        
        .font-space {
          font-family: 'Space Grotesk', sans-serif;
        }

        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #f0f2f5;
        }
        ::-webkit-scrollbar-thumb {
          background: #e2e8f0;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #cbd5e1;
        }
      `}} />
    </div>
  );
}
