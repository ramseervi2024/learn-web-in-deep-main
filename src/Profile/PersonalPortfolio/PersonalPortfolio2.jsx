import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { portfolioprofile as data } from './PersonalPortfolioData';
import { 
  ArrowUpRight, Mail, MapPin, Code2, 
  Database, Layout, Cloud, Briefcase, 
  ChevronRight, Award, Plus, Menu, X, ArrowRight
} from 'lucide-react';

// --- 3D INTERACTIVE TILT CARD ---
const TiltCard = ({ children, className, containerClassName = "" }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth out the motion using spring physics
  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 20, mass: 0.5 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 20, mass: 0.5 });

  // Map mouse position to rotation completely
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-12, 12]);
  
  // Create a moving gradient glare effect
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], [100, 0]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], [100, 0]);

  const handleMouseMove = (event) => {
    // Disable on non-desktop devices to guarantee smooth scrolling
    if (window.innerWidth < 1024) return;
    
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate mouse position relative to card center (-0.5 to 0.5)
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div style={{ perspective: 1200 }} className={`w-full h-full ${containerClassName}`}>
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={`w-full h-full relative transition-[box-shadow] duration-500 hover:shadow-2xl hover:shadow-zinc-300/50 will-change-transform ${className}`}
      >
        {/* Soft Glare Effect */}
        <motion.div 
          className="absolute inset-0 pointer-events-none rounded-inherit z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
             background: 'radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, transparent 60%)',
             x: glareX,
             y: glareY,
             mixBlendMode: 'overlay',
             transform: "translateZ(1px)"
          }}
        />
        {children}
      </motion.div>
    </div>
  );
};

const Portfolio2 = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const { 
    personal_info, summary, core_expertise, 
    technical_stack, projects 
  } = data;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  // Premium entry physics
  const slideUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { type: "spring", stiffness: 70, damping: 20 }
  };

  return (
    <div className="w-full min-h-screen bg-zinc-50 text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white overflow-x-hidden relative">
      
      {/* Light Theme Parallax Grid Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-60 mix-blend-multiply" />
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-blue-100/40 rounded-full blur-[120px] mix-blend-multiply" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-emerald-100/30 rounded-full blur-[120px] mix-blend-multiply" />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center">
        
        {/* Minimalist Header */}
        <header 
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out border-b ${
            scrolled ? 'bg-white/80 backdrop-blur-xl border-zinc-200 py-4 shadow-sm' : 'bg-transparent border-transparent py-6'
          }`}
        >
          <div className="w-full max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
            <a href="#" className="text-2xl font-black tracking-tighter text-zinc-900 flex items-center gap-1 group">
               {personal_info.name.split(' ')[0]}
               <span className="w-2 h-2 rounded-full bg-zinc-900 group-hover:scale-150 transition-transform"></span>
            </a>

            <div className="hidden md:flex items-center gap-10">
              {['Expertise', 'Work', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-bold text-zinc-500 hover:text-zinc-900 uppercase tracking-widest transition-colors">
                  {item}
                </a>
              ))}
            </div>

            <a href={`mailto:${personal_info.email}`} className="hidden md:flex h-12 px-6 items-center justify-center gap-2 rounded-full bg-zinc-900 text-white text-sm font-bold uppercase tracking-wider hover:bg-zinc-800 transition-colors">
              Available <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse ml-1" />
            </a>

            <button 
              className="md:hidden relative z-[110] w-12 h-12 flex items-center justify-center rounded-full bg-zinc-100 border border-zinc-200 text-zinc-900"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div key="close" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }}><X size={20} /></motion.div>
                ) : (
                  <motion.div key="menu" initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -90 }}><Menu size={20} /></motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </header>

        {/* Mobile Fullscreen Menu Fixed Wrapper */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-100%", transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } }}
              transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
              className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center gap-8"
            >
              {['Expertise', 'Work', 'Contact'].map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (i * 0.1), type: "spring", damping: 20 }}
                  className="text-5xl sm:text-7xl font-black tracking-tighter text-zinc-900 hover:text-zinc-500 transition-colors uppercase"
                 >
                   {item}
                 </motion.a>
              ))}
              <motion.a
                  href={`mailto:${personal_info.email}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-10 px-10 py-5 rounded-full bg-zinc-900 text-white font-bold text-lg uppercase tracking-widest flex items-center gap-3"
                 >
                   Start a Project <ArrowRight size={20} />
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>

        <main className="w-full flex-1">
          {/* Editorial 3D Hero Section */}
        <section id="hero" className="w-full min-h-[100svh] flex flex-col justify-center pt-32 pb-24 px-6 md:px-10 max-w-7xl mx-auto relative">
          
          <div className="w-full grid lg:grid-cols-12 gap-12 lg:gap-8 items-center h-full">
            
            {/* Left Typography Column */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="w-full lg:col-span-7 flex flex-col items-start"
            >
              <div className="inline-flex px-5 py-2.5 rounded-full border border-zinc-200 bg-white shadow-sm text-xs font-bold text-zinc-600 uppercase tracking-widest mb-8 md:mb-12 box-border">
                {personal_info.availability}
              </div>

              <h1 className="text-[3.5rem] sm:text-[5rem] md:text-[5.5rem] lg:text-[5.5rem] xl:text-[6rem] leading-[1] font-black tracking-tighter text-zinc-950 mb-8 uppercase">
                Digital<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-500">Experience.</span>
                <br/>
                Architect.
              </h1>

              <p className="text-lg md:text-2xl text-zinc-500 max-w-xl leading-relaxed font-light mb-12">
                I'm <strong className="text-zinc-900 font-bold">{personal_info.name}</strong>, translating complex business logic into stunning, high-performance SaaS platforms.
              </p>
            </motion.div>

            {/* Right 3D Visual Column */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="w-full lg:col-span-5 hidden sm:flex justify-center items-center h-[500px]"
            >
              <TiltCard containerClassName="w-[350px] md:w-[450px] aspect-[4/5]" className="bg-white rounded-[2.5rem] border border-zinc-200 shadow-2xl p-10 flex flex-col justify-between group cursor-crosshair">
                 
                 {/* Elements popping out in 3D */}
                 <div style={{ transform: "translateZ(60px)" }} className="w-full transition-transform duration-300">
                    <div className="w-16 h-16 rounded-full bg-zinc-900 flex items-center justify-center shadow-2xl mb-8">
                       <Code2 size={32} className="text-white" />
                    </div>
                    <div className="text-6xl font-black tracking-tighter text-zinc-900 mb-2">
                      {personal_info.experience_years}<span className="text-zinc-400">+</span>
                    </div>
                    <div className="text-zinc-500 font-bold uppercase tracking-widest text-sm">
                      Years Building <br/> Scaleable Systems.
                    </div>
                 </div>

                 {/* Deep 3D element */}
                 <div style={{ transform: "translateZ(30px)" }} className="mt-8 flex items-center gap-4 py-6 border-t border-zinc-100">
                   <div className="w-12 h-12 rounded-full border border-zinc-200 bg-zinc-50 flex items-center justify-center shrink-0">
                     <MapPin size={20} className="text-emerald-500" />
                   </div>
                   <div className="text-sm font-bold text-zinc-600 uppercase tracking-widest">
                     Operating From<br/>
                     <span className="text-zinc-900">{personal_info.location}</span>
                   </div>
                 </div>

                 {/* Background decoration inside card moving oppositely */}
                 <div style={{ transform: "translateZ(-20px)" }} className="absolute bottom-[-10%] right-[-10%] w-64 h-64 bg-zinc-100 rounded-full blur-3xl pointer-events-none" />
              </TiltCard>
            </motion.div>

          </div>
        </section>

        {/* 3D Spatial Expertise Grids */}
        <section id="expertise" className="w-full py-24 md:py-32 px-6 md:px-10 max-w-7xl mx-auto border-t border-zinc-200">
          <motion.div {...slideUp} className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-zinc-900 uppercase leading-none">
              Technical <br/>
              <span className="text-zinc-400">Toolkit.</span>
            </h2>
            <p className="text-base md:text-xl text-zinc-500 max-w-md font-light">
              Mastery across the complete modern stack, engineered for enterprise-grade performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {/* Frontend Tooling */}
            <div className="h-[400px]">
              <TiltCard className="bg-white rounded-[2rem] border border-zinc-200 p-10 flex flex-col relative overflow-hidden group">
                 <div className="absolute inset-0 bg-gradient-to-br from-zinc-50 to-white pointer-events-none" />
                 
                 <div style={{ transform: "translateZ(40px)" }} className="relative z-10 w-full flex flex-col h-full">
                   <Layout size={36} className="text-zinc-900 mb-8" />
                   <h3 className="text-2xl md:text-3xl font-black text-zinc-900 mb-6 uppercase tracking-tight">Client-Side <br/> Architecture</h3>
                   
                   <div className="flex flex-wrap gap-2 mt-auto">
                     {technical_stack.frontend.map(tech => (
                       <span key={tech} className="px-4 py-2 bg-zinc-100 border border-zinc-200 rounded-full text-xs font-bold text-zinc-600 uppercase tracking-widest shadow-sm">
                         {tech}
                       </span>
                     ))}
                   </div>
                 </div>
              </TiltCard>
            </div>

            {/* Backend Tooling */}
            <div className="h-[400px]">
              <TiltCard className="bg-zinc-900 rounded-[2rem] border border-zinc-800 p-10 flex flex-col relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none" />
                 
                 <div style={{ transform: "translateZ(40px)" }} className="relative z-10 w-full flex flex-col h-full">
                   <Database size={36} className="text-white mb-8" />
                   <h3 className="text-2xl md:text-3xl font-black text-white mb-6 uppercase tracking-tight">Database & <br/> Microservices</h3>
                   
                   <div className="flex flex-wrap gap-2 mt-auto">
                     {[...technical_stack.mobile, ...technical_stack.backend_integration].slice(0, 5).map(tech => (
                       <span key={tech} className="px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-full text-xs font-bold text-zinc-300 uppercase tracking-widest shadow-inner">
                         {tech}
                       </span>
                     ))}
                   </div>
                 </div>
              </TiltCard>
            </div>

            {/* Cloud Tooling */}
            <div className="h-[400px]">
              <TiltCard className="bg-white rounded-[2rem] border border-zinc-200 p-10 flex flex-col relative overflow-hidden group">
                 <div style={{ transform: "translateZ(40px)" }} className="relative z-10 w-full flex flex-col h-full">
                   <Cloud size={36} className="text-zinc-900 mb-8" />
                   <h3 className="text-2xl md:text-3xl font-black text-zinc-900 mb-6 uppercase tracking-tight">Deployment & <br/> CI/CD</h3>
                   
                   <div className="flex flex-wrap gap-2 mt-auto">
                     {technical_stack.tools.map(tech => (
                       <span key={tech} className="px-4 py-2 bg-zinc-100 border border-zinc-200 rounded-full text-xs font-bold text-zinc-600 uppercase tracking-widest shadow-sm">
                         {tech}
                       </span>
                     ))}
                   </div>
                 </div>
              </TiltCard>
            </div>
          </div>
        </section>

        {/* 3D Editorial Works Showcase */}
        <section id="work" className="w-full py-24 md:py-32 px-6 md:px-10 max-w-7xl mx-auto border-t border-zinc-200">
          <motion.div {...slideUp} className="mb-20 md:mb-32 text-center">
            <h2 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter text-zinc-900 uppercase">
              Selected Works<span className="text-zinc-300">.</span>
            </h2>
          </motion.div>

          <div className="flex flex-col gap-24 md:gap-40 w-full">
            {projects.map((project, idx) => (
              <motion.div 
                key={project.name}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center w-full`}
              >
                {/* Visual Spatial Poster */}
                <div className="w-full lg:w-[60%] perspective-[2000px] h-[400px] md:h-[600px] cursor-crosshair">
                   <TiltCard className="bg-white border border-zinc-200 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] rounded-[2rem] md:rounded-[3rem] overflow-hidden group">
                      
                      <div className="w-full h-full bg-zinc-50 relative overflow-hidden flex flex-col p-10 md:p-16">
                         <div className="absolute inset-0 bg-[radial-gradient(#d4d4d8_1px,transparent_1px)] [background-size:20px_20px] opacity-30 pointer-events-none" />
                         
                         <div style={{ transform: "translateZ(80px)" }} className="relative z-10 m-auto text-center w-full drop-shadow-2xl">
                           <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-none tracking-tighter text-zinc-900 mb-6 uppercase max-w-2xl mx-auto drop-shadow-xl text-balance whitespace-normal break-words">{project.category}</h3>
                           <div className="inline-block px-6 py-3 bg-zinc-900 text-white rounded-full text-xs md:text-sm font-bold uppercase tracking-widest shadow-2xl">
                             {project.type}
                           </div>
                         </div>

                         <div style={{ transform: "translateZ(30px)" }} className="relative z-10 w-full flex justify-center flex-wrap gap-3 mt-auto pt-10">
                            {project.technologies.slice(0, 4).map(tech => (
                              <div key={tech} className="px-4 py-2 rounded-full bg-white border border-zinc-200 text-[10px] md:text-xs font-bold uppercase tracking-widest text-zinc-600 shadow-md">
                                {tech}
                              </div>
                            ))}
                         </div>
                      </div>

                   </TiltCard>
                </div>

                {/* Typography Minimalist Details */}
                <div className="w-full lg:w-[40%] flex flex-col">
                  <div className="text-zinc-400 font-black text-6xl md:text-8xl tracking-tighter opacity-30 mb-2">0{idx + 1}</div>
                  
                  <h3 className="text-4xl md:text-6xl font-black text-zinc-900 mb-8 tracking-tighter uppercase leading-[0.9]">
                    {project.name}.
                  </h3>
                  
                  <p className="text-zinc-500 text-lg md:text-2xl leading-relaxed mb-10 font-light">
                    {project.description}
                  </p>

                  <div className="flex flex-col gap-6 w-full">
                    {project.features.slice(0,3).map((feature, i) => (
                      <div key={i} className="flex items-start gap-4 pb-6 border-b border-zinc-200 last:border-0 last:pb-0">
                        <div className="w-6 h-6 rounded-full bg-zinc-900 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-md">
                             <ArrowRight size={12} />
                        </div>
                        <span className="text-base md:text-lg font-medium text-zinc-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Professional Background Section */}
        <section id="experience" className="w-full py-24 md:py-48 px-6 md:px-12 bg-zinc-50 border-y border-zinc-200 relative z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-20 md:mb-32"
            >
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-zinc-900 mb-6 uppercase">
                Professional <br/>
                <span className="text-zinc-300">Background.</span>
              </h2>
            </motion.div>

            <div className="space-y-24">
              {data.employment.map((job, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="grid lg:grid-cols-12 gap-12 items-start"
                >
                  <div className="lg:col-span-4 border-l-4 border-zinc-900 pl-8">
                    <div className="text-sm font-black uppercase tracking-widest text-zinc-400 mb-4">{job.duration}</div>
                    <h3 className="text-4xl font-black text-zinc-900 mb-2 uppercase tracking-tighter">{job.company}</h3>
                    <div className="text-zinc-500 font-bold text-xl mb-6">{job.role}</div>
                    <div className="flex flex-wrap gap-2">
                       {job.key_skills.map((skill, idx) => (
                         <span key={idx} className="px-3 py-1 bg-zinc-200 text-[10px] font-black text-zinc-600 uppercase tracking-widest">{skill}</span>
                       ))}
                    </div>
                  </div>
                  <div className="lg:col-span-8">
                    <p className="text-xl md:text-3xl text-zinc-500 font-light leading-snug">
                      {job.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Ultra Minimal Contact */}
        <section id="contact" className="w-full p-6 md:p-10 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full max-w-7xl mx-auto py-32 md:py-40 px-6 md:px-10 bg-white rounded-[2rem] md:rounded-[4rem] border border-zinc-200 shadow-2xl relative text-center"
          >
            <h2 className="text-6xl md:text-[8rem] lg:text-[10rem] font-black tracking-tighter text-zinc-900 mb-8 md:mb-12 leading-[0.8] uppercase w-full">
              Start A <br/>
              <span className="text-zinc-300 relative inline-block">
                 Project.
              </span>
            </h2>

            <div className="flex justify-center w-full mt-16 md:mt-24">
              <TiltCard containerClassName="w-auto" className="rounded-full shadow-md hover:shadow-2xl hover:shadow-zinc-300">
                 <a href={`mailto:${personal_info.email}`} style={{ transform: "translateZ(30px)" }} className="inline-flex h-20 md:h-24 px-12 md:px-16 bg-zinc-900 text-white rounded-full font-black uppercase tracking-widest text-lg md:text-2xl items-center justify-center gap-4 transition-transform">
                   E-Mail Direct
                   <ArrowUpRight size={32} />
                 </a>
              </TiltCard>
            </div>
          </motion.div>
        </section>

        {/* ACHIEVEMENTS */}
        <section className="py-32 border-y border-zinc-200 bg-white overflow-hidden relative">
           <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
           <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
           <div className="flex gap-6 md:gap-8 animate-[marquee_40s_linear_infinite] px-4 hover:[animation-play-state:paused] cursor-default whitespace-nowrap">
              {[...data.achievements, ...data.achievements, ...data.achievements].map((ach, i) => (
                 <div key={i} className="inline-block w-[85vw] md:w-[450px] whitespace-normal bg-[#FAF9F6] p-8 md:p-12 rounded-[2.5rem] border border-zinc-200 shadow-sm shrink-0 flex flex-col justify-center">
                    <p className="text-lg md:text-xl font-light text-zinc-600 leading-relaxed text-center">"{ach}"</p>
                 </div>
              ))}
           </div>
        </section>

        {/* CTA (CONTACT) */}
        <section id="contact" className="py-32 px-6 max-w-5xl mx-auto text-center">
           <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-zinc-900 text-white rounded-[3rem] p-12 md:p-24 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-5 blur-[120px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
              <h2 className="text-6xl md:text-[5rem] font-medium tracking-tighter mb-8 relative z-10 leading-[0.9]">Start your <br/> next project.</h2>
              <p className="text-xl text-zinc-400 font-light mb-12 relative z-10 max-w-xl mx-auto">Available: {data.personal_info.availability}. Reach out directly via email or phone.</p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
                 <a href={`mailto:${data.personal_info.email}`} className="px-8 py-5 rounded-full bg-white text-zinc-900 font-bold hover:bg-zinc-200 transition-all flex items-center justify-center gap-3 active:scale-95 shadow-lg">
                   {data.personal_info.email} <ArrowUpRight size={20} />
                 </a>
                 <a href={`tel:${data.personal_info.phone}`} className="px-8 py-5 rounded-full border border-zinc-700 bg-zinc-800/50 backdrop-blur text-white font-bold flex items-center justify-center gap-3 hover:bg-zinc-800 transition-colors">
                   {data.personal_info.phone}
                 </a>
              </div>
           </motion.div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="py-12 px-6 border-t border-zinc-200 bg-white">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
            <div>
               <div className="text-2xl font-bold tracking-tight text-zinc-900 mb-2">{data.personal_info.name}.</div>
               <div className="text-zinc-500 text-sm">{data.personal_info.location}</div>
            </div>
            <div className="text-zinc-400 text-sm font-medium tracking-widest uppercase">
               © {new Date().getFullYear()} All Rights Reserved.
            </div>
         </div>
      </footer>
      </div>
    </div>
  );
};

export default Portfolio2;
