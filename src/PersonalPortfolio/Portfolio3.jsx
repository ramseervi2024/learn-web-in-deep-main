import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { portfolioprofile } from './portfoliodata';
import { 
  ArrowUpRight, Mail, Sparkles, Code2, 
  Database, Layout, Cloud, Briefcase, 
  ChevronRight, Compass, MousePointer2, 
  Globe2, Layers, Menu, X
} from 'lucide-react';

/* --- 1. ADVANCED SPOTLIGHT GLASS CARD --- */
const SpotlightCard = ({ children, className = "" }) => {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;
    
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setPosition({ x, y });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden bg-white/5 border border-white/10 backdrop-blur-2xl shadow-2xl rounded-[2.5rem] ${className}`}
    >
      {/* The Glow that follows the mouse */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.1), transparent 40%)`,
        }}
      />
      
      {/* Inner Content */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
};


/* --- 2. ADVANCED MAGNETIC BUTTON --- */
const MagneticButton = ({ children, className = "", onClick, href }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    // Magnetic pull strength is 0.2 (20%)
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  const springConfig = { type: "spring", stiffness: 150, damping: 15, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`relative z-10 ${className}`}
    >
      {children}
    </Component>
  );
};


/* --- MAIN PORTFOLIO 3 COMPONENT --- */
const Portfolio3 = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { personal_info, summary, technical_stack, projects } = portfolioprofile;

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

  // Premium entry physics for scroll
  const slideUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { type: "spring", stiffness: 60, damping: 20 }
  };

  return (
    <div className="w-full min-h-screen bg-[#05050A] text-white font-sans selection:bg-white/20 selection:text-white overflow-x-hidden relative">
      
      {/* 3. FLUID LIQUID AURORA BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Deep ambient noise texture overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
        
        {/* Giant slowly moving fluid blobs */}
        <motion.div 
          animate={{ 
            x: ["0%", "10%", "-10%", "0%"], 
            y: ["0%", "5%", "-5%", "0%"],
            scale: [1, 1.1, 0.9, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-fuchsia-600/20 blur-[140px] mix-blend-screen" 
        />
        
        <motion.div 
          animate={{ 
            x: ["0%", "-15%", "10%", "0%"], 
            y: ["0%", "-10%", "5%", "0%"],
            scale: [1, 0.9, 1.2, 1]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-blue-600/20 blur-[150px] mix-blend-screen" 
        />

        <motion.div 
          animate={{ 
            rotate: [0, 360],
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-cyan-500/10 blur-[120px] mix-blend-screen" 
        />
      </div>


      {/* Main Content Safe Zone */}
      <div className="relative z-10 w-full flex flex-col items-center">
        
        {/* Floating Glass Navigation */}
        <motion.header 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className={`fixed top-4 md:top-6 inset-x-0 mx-auto z-[60] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] flex justify-center ${
            scrolled ? 'w-[95%] sm:w-[90%] md:w-max' : 'w-[95%] md:w-full max-w-7xl'
          }`}
        >
          <div className={`flex items-center justify-between gap-4 md:gap-12 w-full transition-all duration-700 ${
            scrolled ? 'px-5 py-3 md:px-6 md:py-4 bg-white/5 border border-white/10 backdrop-blur-2xl rounded-full shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]' : 'px-5 py-4 md:px-8 md:py-6 bg-white/5 md:bg-transparent border border-white/10 md:border-transparent rounded-full md:rounded-none backdrop-blur-2xl md:backdrop-blur-none'
          }`}>
            <MagneticButton className="text-xl font-bold tracking-tighter text-white flex items-center gap-1">
               <Sparkles className="w-5 h-5 text-indigo-400" />
               {personal_info.name.split(' ')[0]}
            </MagneticButton>

            <div className={`hidden md:flex items-center gap-8 ${scrolled ? 'mx-4' : ''}`}>
              {['Expertise', 'Projects', 'Contact'].map((item) => (
                <MagneticButton key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-white/50 hover:text-white transition-colors tracking-wide">
                  {item}
                </MagneticButton>
              ))}
            </div>

            <MagneticButton href={`mailto:${personal_info.email}`} className="hidden md:flex flex items-center gap-2 group">
              <span className="text-sm font-bold text-white tracking-wide">Connect</span>
              <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center transition-transform group-hover:scale-110">
                 <ArrowUpRight size={16} />
              </div>
            </MagneticButton>

            <button 
              className="md:hidden relative w-10 h-10 flex flex-shrink-0 items-center justify-center rounded-full bg-white/10 border border-white/20 text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </motion.header>

        {/* Mobile Fullscreen Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
              animate={{ opacity: 1, backdropFilter: "blur(30px)" }}
              exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 z-[55] bg-black/60 flex flex-col items-center justify-center gap-8"
            >
              {['Expertise', 'Projects', 'Contact'].map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + (i * 0.1) }}
                  className="text-4xl font-medium tracking-tight text-white hover:text-indigo-300 transition-colors"
                 >
                   {item}
                 </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>


        {/* 1. LIQUID HERO SECTION */}
        <section id="hero" className="w-full min-h-[100svh] flex flex-col items-center justify-center pt-32 pb-24 px-6 md:px-10 max-w-7xl mx-auto relative text-center">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, filter: "blur(20px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-8 max-w-4xl"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)] animate-pulse" />
              <span className="text-xs font-bold text-white/80 uppercase tracking-widest">{personal_info.availability}</span>
            </div>

            <h1 className="text-[3.5rem] sm:text-[5rem] md:text-[7rem] lg:text-[10rem] leading-[1] md:leading-[0.9] font-medium tracking-tighter text-white">
              Digital<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-fuchsia-300 to-indigo-300 animate-gradient-x">Artisan.</span>
            </h1>

            <p className="text-base md:text-2xl text-white/60 max-w-2xl leading-relaxed font-light mt-6">
              I'm <strong className="text-white font-medium">{personal_info.name}</strong>, engineering immersive, high-performance SaaS experiences that blur the line between software and art.
            </p>

            <div className="mt-12">
               <MagneticButton href="#projects" className="group flex items-center gap-4 pl-8 pr-2 py-2 bg-white/10 hover:bg-white/15 border border-white/10 backdrop-blur-2xl rounded-full transition-colors">
                  <span className="text-sm font-bold tracking-widest uppercase">View Works</span>
                  <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                    <MousePointer2 size={18} />
                  </div>
               </MagneticButton>
            </div>
          </motion.div>
        </section>


        {/* 2. GLASS BENTO EXPERTISE */}
        <section id="expertise" className="w-full py-24 md:py-32 px-4 md:px-8 max-w-7xl mx-auto">
          <motion.div {...slideUp} className="mb-16 md:mb-24 flex flex-col items-center text-center gap-6">
            <h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-white">
              The Architecture.
            </h2>
            <p className="text-lg text-white/50 max-w-xl font-light">
              Master-crafted technology stacks built for scale, performance, and breathtaking user interfaces.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 w-full">
            
            {/* Main Glass Stack Container */}
            <motion.div {...slideUp} transition={{ delay: 0.1 }} className="lg:col-span-8">
               <SpotlightCard className="w-full h-full p-10 md:p-14 flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center mb-8">
                       <Layout size={28} className="text-indigo-300" />
                    </div>
                    <h3 className="text-3xl font-medium mb-4 text-white">Full-Stack Symphony.</h3>
                    <p className="text-white/60 font-light leading-relaxed max-w-lg mb-12">
                      Bridging the gap between robust, infallible backend architecture and flawless, liquid-smooth client interfaces.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full border-t border-white/10 pt-8">
                     <div>
                       <div className="text-xs font-bold text-white/30 uppercase tracking-widest mb-4">Client Layer</div>
                       <div className="flex flex-wrap gap-2">
                         {technical_stack.frontend.map(tech => (
                           <div key={tech} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs tracking-wider">{tech}</div>
                         ))}
                       </div>
                     </div>
                     <div>
                       <div className="text-xs font-bold text-white/30 uppercase tracking-widest mb-4">Server Layer</div>
                       <div className="flex flex-wrap gap-2">
                         {[...technical_stack.mobile, ...technical_stack.backend_integration].slice(0,6).map(tech => (
                           <div key={tech} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs tracking-wider">{tech}</div>
                         ))}
                       </div>
                     </div>
                  </div>
               </SpotlightCard>
            </motion.div>

            {/* Cloud Glass Container */}
            <motion.div {...slideUp} transition={{ delay: 0.2 }} className="lg:col-span-4 lg:row-span-2">
               <SpotlightCard className="w-full h-full p-10 md:p-14 flex flex-col">
                  <div className="w-14 h-14 rounded-2xl bg-fuchsia-500/20 border border-fuchsia-500/30 flex items-center justify-center mb-8">
                     <Cloud size={28} className="text-fuchsia-300" />
                  </div>
                  <h3 className="text-3xl font-medium mb-4 text-white">Cloud Native.</h3>
                  <p className="text-white/60 font-light leading-relaxed mb-12">
                     Globally distributed, auto-scaling deployment pipelines ensuring 99.99% uptime.
                  </p>

                  <div className="flex flex-col gap-4 mt-auto">
                     {technical_stack.tools.map(tech => (
                       <div key={tech} className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4 group hover:bg-white/10 transition-colors">
                          <Layers size={18} className="text-white/40 group-hover:text-fuchsia-300 transition-colors" />
                          <span className="text-sm font-medium text-white/80 tracking-wide">{tech}</span>
                       </div>
                     ))}
                  </div>
               </SpotlightCard>
            </motion.div>

            {/* Experience Mini Glass */}
            <motion.div {...slideUp} transition={{ delay: 0.3 }} className="lg:col-span-4">
               <SpotlightCard className="w-full h-full p-10 flex flex-col items-center justify-center text-center">
                  <h4 className="text-6xl md:text-[5rem] font-medium leading-none text-transparent bg-clip-text bg-gradient-to-br from-white to-white/30 mb-2">
                    {personal_info.experience_years}<span className="text-indigo-400">+</span>
                  </h4>
                  <div className="text-sm text-white/50 tracking-widest uppercase">Years Innovating</div>
               </SpotlightCard>
            </motion.div>

            {/* Location Mini Glass */}
            <motion.div {...slideUp} transition={{ delay: 0.4 }} className="lg:col-span-4">
               <SpotlightCard className="w-full h-full p-10 flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                    <Globe2 size={32} className="text-emerald-300" />
                  </div>
                  <h4 className="text-xl font-medium text-white mb-1">{personal_info.location}</h4>
                  <div className="text-xs text-white/40 tracking-widest uppercase">Global Availability</div>
               </SpotlightCard>
            </motion.div>

          </div>
        </section>


        {/* 3. LUXURY PROJECT SHOWCASE */}
        <section id="projects" className="w-full py-32 md:py-48 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
          <motion.div {...slideUp} className="mb-24 md:mb-40 flex flex-col md:flex-row items-baseline justify-between border-b border-white/10 pb-8 gap-8">
             <h2 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white">
               Selected <span className="text-white/30 font-light italic">Works.</span>
             </h2>
             <MagneticButton className="px-6 py-3 rounded-full border border-white/20 text-white/60 hover:text-white hover:bg-white/10 transition-all font-medium text-sm tracking-wide">
                View GitHub Archive
             </MagneticButton>
          </motion.div>

          <div className="flex flex-col gap-32 md:gap-48 w-full">
             {projects.map((project, idx) => (
                <motion.div 
                   key={project.name}
                   initial={{ opacity: 0, scale: 0.95 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true, margin: "-200px" }}
                   transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                   className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center w-full`}
                >
                   {/* Liquid Visual Poster */}
                   <div className="w-full lg:w-3/5 aspect-square md:aspect-[4/3] relative group perspective-[2000px]">
                      
                      {/* Interactive Parallax Glass Plates */}
                      <motion.div 
                        whileHover={{ rotateX: 5, rotateY: -5, scale: 1.02 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="w-full h-full relative z-10"
                      >
                         <SpotlightCard className="w-full h-full p-8 md:p-14 flex flex-col transform-style-3d">
                            
                            {/* Inner 3D Text Float */}
                            <div className="m-auto text-center w-full transition-transform duration-500 ease-out group-hover:translate-z-12">
                               <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tighter text-white leading-[1.1] mx-auto mb-6 shadow-2xl drop-shadow-2xl text-balance whitespace-normal break-words max-w-[90%]">
                                  {project.category}
                               </h3>
                               <div className="inline-block px-5 py-2 rounded-full border border-white/20 bg-black/40 backdrop-blur-md text-xs font-bold text-white/70 uppercase tracking-widest shadow-xl">
                                  {project.type}
                               </div>
                            </div>

                            {/* Tech Stack Footer float */}
                            <div className="w-full flex flex-wrap gap-2 transition-transform duration-500 ease-out group-hover:translate-z-8 mt-auto pt-8">
                               {project.technologies.slice(0, 5).map(tech => (
                                 <span key={tech} className="px-3 py-1.5 rounded-full bg-white/10 border border-white/10 backdrop-blur-md text-white/90 text-xs tracking-wider">
                                   {tech}
                                 </span>
                               ))}
                            </div>
                         </SpotlightCard>
                      </motion.div>

                      {/* Behind-card massive gradient glow purely for aesthetics */}
                      <div className={`absolute inset-0 bg-gradient-to-tr ${idx % 2 === 0 ? 'from-indigo-500 to-fuchsia-500' : 'from-cyan-500 to-emerald-500'} blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity duration-700 -z-10`} />
                   </div>

                   {/* Minimalist Data Side */}
                   <div className="w-full lg:w-2/5 flex flex-col">
                      <div className="text-white/20 font-medium text-4xl mb-4 italic tracking-tighter">0{idx + 1}</div>
                      <h3 className="text-4xl md:text-5xl font-medium text-white mb-6 tracking-tight leading-tight">
                        {project.name}
                      </h3>
                      <p className="text-white/50 text-lg md:text-xl leading-relaxed mb-10 font-light">
                        {project.description}
                      </p>
                      <div className="flex flex-col gap-5 w-full">
                         {project.features.slice(0, 3).map((feature, i) => (
                           <div key={i} className="flex items-start gap-4 pb-5 border-b border-white/10 last:border-0 last:pb-0">
                              <Compass size={18} className="text-indigo-300 mt-1 shrink-0" />
                              <span className="text-white/70 font-light">{feature}</span>
                           </div>
                         ))}
                      </div>
                   </div>
                </motion.div>
             ))}
          </div>
        </section>


        {/* 4. IMMERSIVE CONTACT FOOTER */}
        <section id="contact" className="w-full min-h-[80svh] flex flex-col items-center justify-center py-32 px-4 md:px-8 border-t border-white/10 relative overflow-hidden bg-black/20">
           <motion.div 
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1 }}
             className="flex flex-col items-center text-center max-w-4xl w-full z-10"
           >
              <h2 className="text-4xl md:text-[6rem] lg:text-[8rem] font-medium tracking-tighter text-white mb-6 leading-none">
                Let's <br/> <span className="text-white/30 italic font-light">Collaborate.</span>
              </h2>
              <p className="text-lg md:text-2xl text-white/50 mb-16 font-light max-w-xl">
                 Currently accepting new projects and freelance opportunities. Create something beautiful together.
              </p>
              
              <MagneticButton href={`mailto:${personal_info.email}`} className="relative group p-1">
                 {/* Glowing border wrap */}
                 <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-indigo-500 rounded-full blur-[2px] opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                 
                 <div className="relative z-10 h-16 md:h-20 px-10 md:px-14 bg-black rounded-full flex items-center gap-4 border border-white/10 transition-transform">
                    <span className="text-lg md:text-2xl font-medium tracking-tight text-white">Start a Conversation</span>
                    <Mail className="text-indigo-400 w-6 h-6" />
                 </div>
              </MagneticButton>
           </motion.div>

           {/* Floor Footer Text */}
           <div className="absolute bottom-8 left-0 right-0 px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/30 text-sm font-light tracking-widest uppercase">
              <div>© {new Date().getFullYear()} {personal_info.name}</div>
              <div className="flex gap-8">
                 <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                 <a href="#" className="hover:text-white transition-colors">Twitter</a>
                 <a href="#" className="hover:text-white transition-colors">GitHub</a>
              </div>
           </div>
        </section>

      </div>
    </div>
  );
};

export default Portfolio3;
