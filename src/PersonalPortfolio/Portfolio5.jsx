import React, { useState, useEffect, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { portfolioprofile } from './portfoliodata';
import {
  Mail, Phone, ExternalLink, Database, 
  LayoutGrid, Cloud, Terminal, CheckCircle2, 
  Menu, X, Server, Monitor, CircleDashed, 
  ChevronDown, Layers, Component, Sparkles
} from 'lucide-react';

const themeConfigs = {
  obsidian: {
    id: 'obsidian',
    name: 'Obsidian Glass',
    bg: 'bg-[#050505]',
    text: 'text-white',
    textMuted: 'text-zinc-400',
    accentText: 'text-zinc-100',
    navBg: 'bg-black/40 border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]',
    cardBg: 'bg-black/40 border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]',
    cardHover: 'hover:border-white/30 hover:bg-black/60',
    tagBg: 'bg-white/10 text-white border-white/10',
    iconColor: 'text-white',
    buttonPrimary: 'bg-white text-black hover:bg-zinc-200 shadow-[0_0_20px_rgba(255,255,255,0.2)]',
    glassFilter: 'backdrop-blur-xl',
    selection: 'selection:bg-white/20 selection:text-white',
  },
  frost: {
    id: 'frost',
    name: 'Arctic Frost',
    bg: 'bg-[#fafafa]',
    text: 'text-zinc-900',
    textMuted: 'text-zinc-600',
    accentText: 'text-blue-600',
    navBg: 'bg-white/40 border-white/50 shadow-[0_4px_30px_rgba(0,0,0,0.05)]',
    cardBg: 'bg-white/40 border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.05)]',
    cardHover: 'hover:border-blue-200 hover:bg-white/60',
    tagBg: 'bg-black/5 text-zinc-800 border-black/5',
    iconColor: 'text-blue-600',
    buttonPrimary: 'bg-zinc-900 text-white hover:bg-black shadow-[0_0_20px_rgba(0,0,0,0.1)]',
    glassFilter: 'backdrop-blur-2xl',
    selection: 'selection:bg-blue-500/20 selection:text-blue-900',
  },
  neon: {
    id: 'neon',
    name: 'Holo Neon',
    bg: 'bg-[#0a0014]',
    text: 'text-cyan-50',
    textMuted: 'text-cyan-200/70',
    accentText: 'text-fuchsia-400',
    navBg: 'bg-[#1a0b2e]/50 border-fuchsia-500/30 shadow-[0_0_30px_rgba(217,70,239,0.15)]',
    cardBg: 'bg-[#1a0b2e]/40 border-fuchsia-500/20 shadow-[0_8px_32px_rgba(217,70,239,0.1)]',
    cardHover: 'hover:border-cyan-400/50 hover:bg-[#1a0b2e]/60',
    tagBg: 'bg-fuchsia-900/30 text-fuchsia-200 border-fuchsia-500/30',
    iconColor: 'text-fuchsia-400',
    buttonPrimary: 'bg-gradient-to-r from-fuchsia-600 to-cyan-500 text-white hover:opacity-90 shadow-[0_0_25px_rgba(217,70,239,0.4)]',
    glassFilter: 'backdrop-blur-lg',
    selection: 'selection:bg-fuchsia-500/40 selection:text-white',
  }
};

const Portfolio5 = () => {
  const [activeTheme, setActiveTheme] = useState('obsidian');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  const [splineLoaded, setSplineLoaded] = useState(false);

  const theme = themeConfigs[activeTheme];

  const {
    personal_info, summary, roles, technical_stack, projects
  } = portfolioprofile;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, margin: "-50px" },
    transition: { staggerChildren: 0.15 }
  };

  const ThemeSwitcher = () => (
    <div className="relative z-[120]">
      <div 
        className={`flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer transition-all ${theme.navBg} ${theme.glassFilter} border-opacity-50 hover:scale-105 border`}
        onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
      >
        <Sparkles size={16} className={theme.iconColor} />
        <span className={`text-xs font-bold uppercase tracking-widest hidden sm:block ${theme.text}`}>
          {theme.name}
        </span>
      </div>

      <AnimatePresence>
        {isThemeMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`absolute top-full right-0 mt-3 p-2 rounded-2xl ${theme.cardBg} ${theme.glassFilter} border ${theme.border} min-w-[200px] z-[120]`}
          >
            {Object.values(themeConfigs).map((t) => (
              <div
                key={t.id}
                onClick={() => { setActiveTheme(t.id); setIsThemeMenuOpen(false); }}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-colors ${
                  activeTheme === t.id ? 'bg-white/10' : 'hover:bg-white/5'
                }`}
              >
                <div className={`w-3 h-3 rounded-full ${t.id === 'obsidian' ? 'bg-zinc-800' : t.id === 'frost' ? 'bg-white' : 'bg-fuchsia-500'} border border-white/20`} />
                <span className={`text-sm font-semibold tracking-wide ${activeTheme === t.id ? theme.text : theme.textMuted}`}>
                  {t.name}
                </span>
                {activeTheme === t.id && <CheckCircle2 size={14} className={`ml-auto ${theme.accentText}`} />}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <div className={`w-full min-h-screen transition-colors duration-1000 ease-in-out ${theme.bg} ${theme.text} ${theme.selection} overflow-x-hidden font-sans relative`}>

      {/* 3D SPLINE BACKGROUND */}
      <div className="fixed inset-0 z-0 h-[110vh] pointer-events-auto">
        {/* Fallback Loader */}
        <AnimatePresence>
          {!splineLoaded && (
            <motion.div 
              exit={{ opacity: 0 }} 
              className="absolute inset-0 flex items-center justify-center bg-transparent z-10"
            >
              <CircleDashed className={`animate-spin ${theme.iconColor}`} size={40} />
            </motion.div>
          )}
        </AnimatePresence>

        <Spline 
          scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" 
          onLoad={() => setSplineLoaded(true)}
          className="w-full h-full object-cover transition-opacity duration-1000"
          style={{ opacity: splineLoaded ? (activeTheme === 'frost' ? 0.7 : 1) : 0 }}
        />
        
        {/* Overlay gradient to ensure text readability */}
        <div className={`absolute inset-0 pointer-events-none transition-colors duration-1000
          ${activeTheme === 'obsidian' ? 'bg-gradient-to-b from-black/40 via-transparent to-[#050505]' : 
            activeTheme === 'frost' ? 'bg-gradient-to-b from-white/30 via-transparent to-[#fafafa]' : 
            'bg-gradient-to-b from-[#0a0014]/60 via-transparent to-[#0a0014]'}
        `} />
      </div>

      {/* UI OVERLAY CONTAINER */}
      <div className="relative z-10 w-full flex flex-col items-center pointer-events-none">
        
        {/* Floating Navigation */}
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className={`fixed top-4 md:top-8 z-[100] w-[92%] md:w-[80%] max-w-5xl rounded-full transition-all duration-300 border pointer-events-auto
            ${scrolled ? `${theme.navBg} ${theme.glassFilter}` : 'bg-transparent border-transparent'}
          `}
        >
          <div className="px-5 md:px-8 py-3 md:py-4 flex items-center justify-between w-full">
            <a href="#" className={`text-xl md:text-2xl font-black tracking-tighter ${theme.text}`}>
              {personal_info.name.split(' ')[0]}<span className={theme.accentText}>.</span>
            </a>

            <div className="hidden md:flex items-center gap-8">
              {['Expertise', 'Projects'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className={`text-sm font-semibold tracking-wide ${theme.textMuted} hover:${theme.text} transition-colors`}>
                  {item}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <ThemeSwitcher />
              
              <button
                className={`md:hidden flex items-center justify-center w-10 h-10 rounded-full ${theme.navBg} ${theme.glassFilter} border`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </motion.nav>

        {/* HERO SECTION */}
        <section className="w-full h-screen flex flex-col items-center justify-center px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className={`w-full max-w-4xl p-8 md:p-16 rounded-[2.5rem] md:rounded-[4rem] text-center border ${theme.cardBg} ${theme.glassFilter} pointer-events-auto shadow-2xl origin-center`}
          >
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${theme.tagBg} ${theme.glassFilter} mb-8`}>
              <span className={`w-2 h-2 rounded-full ${theme.accentText} bg-current animate-pulse`} />
              <span className="text-xs font-bold uppercase tracking-wider">{personal_info.availability}</span>
            </div>

            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] font-black tracking-tighter leading-[0.9] mb-8">
              Digital<br/>
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${theme.accentText} from-current to-current/50`}>
                Architect.
              </span>
            </h1>

            <p className={`text-lg md:text-2xl ${theme.textMuted} max-w-2xl mx-auto leading-relaxed font-medium mb-12`}>
              {summary.split('.')[0]}.
            </p>

            <a href="#projects" className={`inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-black text-sm md:text-base uppercase tracking-widest transition-transform hover:scale-105 ${theme.buttonPrimary}`}>
              Explore Dimensions
            </a>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className={`absolute bottom-10 ${theme.textMuted}`}
          >
            <ChevronDown size={32} />
          </motion.div>
        </section>

        {/* BENTO GRID (ABOUT & EXPERTISE) */}
        <section id="expertise" className="w-full px-4 py-24 md:py-32 max-w-7xl mx-auto pointer-events-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-12 gap-6"
          >
            {/* Massive Stats Block - Col 8 */}
            <motion.div variants={fadeUp} className={`md:col-span-8 p-10 md:p-14 rounded-[2.5rem] border ${theme.cardBg} ${theme.glassFilter} ${theme.cardHover} transition-all duration-500 flex flex-col justify-center`}>
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter">
                Engineering <br/> <span className={theme.accentText}>Excellence.</span>
              </h2>
              <p className={`text-base md:text-xl ${theme.textMuted} max-w-2xl leading-relaxed`}>
                {summary}
              </p>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <div className={`px-6 py-4 rounded-2xl border ${theme.tagBg} ${theme.glassFilter}`}>
                  <div className={`text-3xl font-black ${theme.accentText}`}>{personal_info.experience_years}+</div>
                  <div className="text-xs font-bold uppercase tracking-widest mt-1 opacity-70">Years Exp</div>
                </div>
                <div className={`px-6 py-4 rounded-2xl border ${theme.tagBg} ${theme.glassFilter}`}>
                  <div className={`text-3xl font-black ${theme.accentText}`}>{projects.length}</div>
                  <div className="text-xs font-bold uppercase tracking-widest mt-1 opacity-70">Major Projects</div>
                </div>
              </div>
            </motion.div>

            {/* Roles Block - Col 4 */}
            <motion.div variants={fadeUp} className={`md:col-span-4 p-10 md:p-14 rounded-[2.5rem] border ${theme.cardBg} ${theme.glassFilter} ${theme.cardHover} transition-all duration-500`}>
              <div className={`w-14 h-14 rounded-2xl border ${theme.tagBg} flex items-center justify-center mb-8`}>
                <Layers className={theme.iconColor} size={24} />
              </div>
              <h3 className="text-xl font-bold mb-6">Core Focus</h3>
              <div className="flex flex-col gap-4">
                {roles.slice(0, 4).map((role, i) => (
                  <div key={i} className="flex items-center gap-3">
                     <span className={`w-1.5 h-1.5 rounded-full ${theme.accentText} bg-current`} />
                     <span className={`text-sm md:text-base font-semibold ${theme.textMuted}`}>{role}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Stack Blocks */}
            <motion.div variants={fadeUp} className={`md:col-span-6 p-8 md:p-12 rounded-[2.5rem] border ${theme.cardBg} ${theme.glassFilter} ${theme.cardHover} transition-all duration-500`}>
               <div className="flex items-center gap-4 mb-6">
                 <Monitor className={theme.iconColor} size={28} />
                 <h3 className="text-2xl font-bold">Frontend Matrix</h3>
               </div>
               <div className="flex flex-wrap gap-2">
                 {technical_stack.frontend.map(tech => (
                   <span key={tech} className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest border ${theme.tagBg} ${theme.glassFilter}`}>
                     {tech}
                   </span>
                 ))}
               </div>
            </motion.div>

            <motion.div variants={fadeUp} className={`md:col-span-6 p-8 md:p-12 rounded-[2.5rem] border ${theme.cardBg} ${theme.glassFilter} ${theme.cardHover} transition-all duration-500`}>
               <div className="flex items-center gap-4 mb-6">
                 <Server className={theme.iconColor} size={28} />
                 <h3 className="text-2xl font-bold">Mobile & Backend</h3>
               </div>
               <div className="flex flex-wrap gap-2">
                 {[...technical_stack.mobile, ...technical_stack.backend_integration].slice(0, 9).map(tech => (
                   <span key={tech} className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest border ${theme.tagBg} ${theme.glassFilter}`}>
                     {tech}
                   </span>
                 ))}
               </div>
            </motion.div>

          </motion.div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="w-full px-4 py-24 md:py-32 max-w-7xl mx-auto pointer-events-auto">
          <motion.div {...fadeUp} className="mb-20 text-center">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">Selected <span className={theme.accentText}>Works.</span></h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project, idx) => (
              <motion.div 
                key={project.name}
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className={`flex flex-col p-8 md:p-12 rounded-[2.5rem] border ${theme.cardBg} ${theme.glassFilter} ${theme.cardHover} transition-all duration-500 group relative overflow-hidden`}
              >
                {/* Decorative subtle background icon */}
                <Component className={`absolute -right-10 -bottom-10 opacity-5 w-64 h-64 ${theme.iconColor} group-hover:scale-110 transition-transform duration-700`} />

                <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-8">
                    <div className={`px-4 py-1.5 rounded-full border ${theme.tagBg} text-xs font-bold uppercase tracking-widest`}>
                      {project.type}
                    </div>
                    <ExternalLink className={`${theme.iconColor} opacity-50 group-hover:opacity-100 transition-opacity`} size={24} />
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-black mb-4 tracking-tight leading-tight">
                    {project.name}
                  </h3>
                  
                  <p className={`text-sm md:text-base ${theme.textMuted} mb-8 leading-relaxed font-medium`}>
                    {project.description}
                  </p>

                  <div className="mt-auto pt-8 border-t border-white/5">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0,4).map(tech => (
                        <span key={tech} className={`px-3 py-1.5 rounded-lg border ${theme.tagBg} text-[10px] font-bold uppercase tracking-widest`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FOOTER / CONTACT */}
        <section className="w-full px-4 py-32 pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`max-w-4xl mx-auto p-12 md:p-20 rounded-[3rem] border ${theme.cardBg} ${theme.glassFilter} text-center`}
          >
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-8">
              Start a <span className={theme.accentText}>Project.</span>
            </h2>
            <a href={`mailto:${personal_info.email}`} className={`inline-flex px-10 py-5 rounded-full font-black text-lg uppercase tracking-widest transition-transform hover:scale-105 ${theme.buttonPrimary}`}>
              Let's Connect
            </a>
          </motion.div>
        </section>

        <footer className="w-full py-10 text-center pointer-events-auto z-10">
          <p className={`text-xs font-bold uppercase tracking-widest ${theme.textMuted}`}>
            © {new Date().getFullYear()} {personal_info.name} • Crafted with 3D React
          </p>
        </footer>

      </div>
    </div>
  );
};

export default Portfolio5;
