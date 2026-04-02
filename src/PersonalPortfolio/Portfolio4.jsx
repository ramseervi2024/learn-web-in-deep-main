import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioprofile } from './portfoliodata';
import {
  Mail, Phone, MapPin, Calendar, ExternalLink,
  Code2, Database, LayoutGrid, Cloud, Shield,
  Smartphone, Terminal, Briefcase, ChevronRight,
  Globe, Award, CheckCircle2, Menu, X, Monitor,
  Cpu, Zap, Layers, Server, Palette, Moon, Sun, Hexagon
} from 'lucide-react';

// === THEME CONFIGURATIONS ===
const themeConfigs = {
  dark: {
    id: 'dark',
    name: 'Abyssal Dark',
    icon: Moon,
    bg: 'bg-[#030303]',
    text: 'text-white',
    textMuted: 'text-zinc-400',
    accentText: 'text-emerald-400',
    navBg: 'bg-white/5 border-white/10 backdrop-blur-2xl',
    cardBg: 'bg-[#0a0a0a]/80 border-white/5 backdrop-blur-xl',
    cardHover: 'hover:border-emerald-500/30 hover:bg-[#111]/90',
    glowPrimary: 'bg-emerald-500/15',
    glowSecondary: 'bg-blue-600/10',
    gradientText: 'from-emerald-400 to-cyan-500',
    buttonBg: 'bg-white text-black hover:scale-105',
    buttonOutline: 'bg-white/5 border-white/10 text-white hover:bg-white/10',
    tagBg: 'bg-black/50 border-white/10 text-zinc-300',
    border: 'border-white/5',
    iconColor: 'text-emerald-400',
    iconBg: 'bg-emerald-500/10',
    selection: 'selection:bg-emerald-500/30 selection:text-white',
    grid: 'bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]'
  },
  light: {
    id: 'light',
    name: 'Ethereal Light',
    icon: Sun,
    bg: 'bg-[#F8F9FA]',
    text: 'text-zinc-900',
    textMuted: 'text-zinc-500',
    accentText: 'text-indigo-600',
    navBg: 'bg-white/60 border-black/5 backdrop-blur-2xl shadow-sm',
    cardBg: 'bg-white/90 border-white shadow-xl shadow-black/5 backdrop-blur-xl',
    cardHover: 'hover:border-indigo-400/40 hover:shadow-indigo-500/10',
    glowPrimary: 'bg-indigo-500/10',
    glowSecondary: 'bg-rose-400/10',
    gradientText: 'from-indigo-600 to-violet-600',
    buttonBg: 'bg-zinc-900 text-white hover:bg-black hover:scale-105 shadow-lg',
    buttonOutline: 'bg-white border-black/10 text-zinc-800 hover:bg-zinc-50 shadow-sm',
    tagBg: 'bg-white border-black/5 text-zinc-600 shadow-sm',
    border: 'border-black/5',
    iconColor: 'text-indigo-600',
    iconBg: 'bg-indigo-500/10',
    selection: 'selection:bg-indigo-500/20 selection:text-indigo-900',
    grid: 'bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)]'
  },
  cyber: {
    id: 'cyber',
    name: 'Cyber Neon',
    icon: Hexagon,
    bg: 'bg-[#090014]',
    text: 'text-fuchsia-50',
    textMuted: 'text-fuchsia-200/60',
    accentText: 'text-yellow-400',
    navBg: 'bg-fuchsia-950/30 border-fuchsia-500/20 backdrop-blur-xl shadow-[0_0_15px_rgba(217,70,239,0.1)]',
    cardBg: 'bg-[#120024]/80 border-fuchsia-500/20 backdrop-blur-md',
    cardHover: 'hover:border-yellow-400/50 hover:shadow-[0_0_30px_rgba(250,204,21,0.15)] hover:bg-[#1a0033]/90',
    glowPrimary: 'bg-fuchsia-600/20',
    glowSecondary: 'bg-cyan-500/15',
    gradientText: 'from-yellow-400 via-fuchsia-500 to-cyan-400',
    buttonBg: 'bg-yellow-400 text-black hover:bg-yellow-300 shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:scale-105',
    buttonOutline: 'bg-fuchsia-950/40 border-fuchsia-500/40 text-fuchsia-100 hover:bg-fuchsia-900/40 hover:shadow-[0_0_15px_rgba(217,70,239,0.2)]',
    tagBg: 'bg-fuchsia-950/50 border-fuchsia-500/30 text-fuchsia-200',
    border: 'border-fuchsia-500/20',
    iconColor: 'text-yellow-400',
    iconBg: 'bg-yellow-400/10',
    selection: 'selection:bg-fuchsia-500/40 selection:text-white',
    grid: 'bg-[linear-gradient(rgba(217,70,239,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(217,70,239,0.05)_1px,transparent_1px)]'
  }
};

const Portfolio4 = () => {
  const [activeTheme, setActiveTheme] = useState('dark');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);

  const theme = themeConfigs[activeTheme];

  const {
    personal_info, summary, roles, core_expertise,
    technical_stack, saas_capabilities, projects
  } = portfolioprofile;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  // Framer motion variants
  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, margin: "-50px" },
    transition: { staggerChildren: 0.1 }
  };

  // Theme Switcher Component
  const ThemeSwitcher = () => (
    <div className="relative z-[120]">
      <div 
        className={`flex items-center gap-2 px-3 py-1.5 rounded-full cursor-pointer transition-all ${theme.navBg} border-opacity-50 hover:scale-105`}
        onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
      >
        {React.createElement(theme.icon, { size: 16, className: theme.text })}
        <span className={`text-xs font-bold uppercase tracking-wider hidden sm:block ${theme.text}`}>
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
            className={`absolute top-full right-0 mt-2 p-2 rounded-2xl ${theme.cardBg} border shadow-2xl min-w-[180px] z-[120]`}
          >
            {Object.values(themeConfigs).map((t) => (
              <div
                key={t.id}
                onClick={() => { setActiveTheme(t.id); setIsThemeMenuOpen(false); }}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer transition-colors ${
                  activeTheme === t.id ? theme.glowPrimary : 'hover:bg-black/5 dark:hover:bg-white/5'
                }`}
              >
                {React.createElement(t.icon, { size: 16, className: activeTheme === t.id ? theme.accentText : theme.textMuted })}
                <span className={`text-sm font-medium ${activeTheme === t.id ? theme.text : theme.textMuted}`}>
                  {t.name}
                </span>
                {activeTheme === t.id && (
                  <CheckCircle2 size={14} className={`ml-auto ${theme.accentText}`} />
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <div className={`w-full min-h-screen transition-colors duration-700 ease-in-out ${theme.bg} ${theme.text} ${theme.selection} overflow-x-hidden relative font-sans`}>

      {/* Dynamic Backgrounds */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden transition-opacity duration-700">
        <div className={`absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full ${theme.glowPrimary} blur-[120px] mix-blend-screen transition-all duration-[2000ms]`} />
        <div className={`absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full ${theme.glowSecondary} blur-[120px] mix-blend-screen transition-all duration-[2000ms]`} />
        <div className={`absolute inset-0 ${theme.grid} bg-[size:30px_30px] opacity-50`} />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center">

        {/* Floating Navigation */}
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
          className={`fixed top-4 md:top-6 z-[100] w-[95%] md:w-[85%] max-w-6xl rounded-full transition-all duration-300 ${scrolled ? `${theme.navBg} border shadow-2xl py-3` : 'bg-transparent py-4'}`}
        >
          <div className="px-4 md:px-8 flex items-center justify-between w-full">
            <a href="#" className={`text-xl md:text-2xl font-black tracking-tighter ${theme.text}`}>
              RS<span className={theme.accentText}>.</span>
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
              {['Expertise', 'Projects', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className={`text-sm font-medium ${theme.textMuted} hover:${theme.text} transition-colors duration-300`}>
                  {item}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3 md:gap-4">
              <ThemeSwitcher />
              
              {/* Mobile Toggle Button */}
              <button
                className={`md:hidden relative z-[110] w-10 h-10 flex items-center justify-center rounded-full ${theme.buttonOutline}`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div key="close" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }}>
                      <X size={20} />
                    </motion.div>
                  ) : (
                    <motion.div key="menu" initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -90 }}>
                      <Menu size={20} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </motion.nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
              animate={{ opacity: 1, backdropFilter: "blur(24px)" }}
              exit={{ opacity: 0, backdropFilter: "blur(0px)", transition: { duration: 0.3 } }}
              className={`fixed inset-0 z-[90] ${theme.bg} bg-opacity-95 flex flex-col items-center justify-center gap-8`}
            >
              {['Expertise', 'Projects', 'Contact'].map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + (i * 0.1), type: "spring" }}
                  className={`text-4xl sm:text-5xl font-black tracking-tight ${theme.text} transition-colors`}
                >
                  {item}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* HERO SECTION */}
        <section id="hero" className="w-full min-h-[100svh] flex flex-col items-center justify-center pt-32 pb-20 px-4 md:px-8 max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full flex flex-col items-center text-center"
          >
            <div className={`mb-8 px-5 py-2.5 rounded-full border ${theme.border} ${theme.cardBg} flex items-center justify-center gap-3 shadow-sm`}>
              <span className={`w-2 h-2 rounded-full ${theme.accentText} bg-current animate-ping opacity-75 absolute`}></span>
              <span className={`w-2 h-2 rounded-full ${theme.accentText} bg-current relative`}></span>
              <span className={`text-xs md:text-sm font-semibold tracking-wide ${theme.text}`}>
                {personal_info.availability} <span className={theme.textMuted}>• {personal_info.location}</span>
              </span>
            </div>

            <h1 className="text-[3.5rem] sm:text-7xl md:text-8xl lg:text-[7rem] font-black tracking-tighter leading-[1.05] mb-6 w-full max-w-5xl">
              Building <span className={`text-transparent bg-clip-text bg-gradient-to-r ${theme.gradientText}`}>SaaS Systems</span><br className="hidden sm:block"/> that Scale.
            </h1>

            <p className={`text-lg md:text-2xl ${theme.textMuted} max-w-3xl mx-auto leading-relaxed font-normal mb-10`}>
              I'm <strong className={`font-bold ${theme.text}`}>{personal_info.name}</strong>, a {personal_info.title} obsessed with pixel-perfect UI, robust scalable backends, and flawless user experiences.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto">
              <a href="#projects" className={`w-full sm:w-auto px-8 py-4 rounded-full font-bold text-base md:text-lg transition-all flex items-center justify-center gap-2 ${theme.buttonBg}`}>
                <LayoutGrid size={18} />
                View Projects
              </a>
              <a href="#contact" className={`w-full sm:w-auto px-8 py-4 rounded-full font-bold text-base md:text-lg transition-all flex items-center justify-center gap-2 ${theme.buttonOutline}`}>
                <Mail size={18} />
                Contact Me
              </a>
            </div>
          </motion.div>
        </section>

        {/* BENTO STATS & ABOUT SECTION */}
        <section className="w-full px-4 md:px-8 py-16 md:py-24 max-w-7xl mx-auto relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {/* Bio Card */}
            <motion.div variants={fadeUp} className={`sm:col-span-2 lg:col-span-2 ${theme.cardBg} border ${theme.border} ${theme.cardHover} rounded-[2rem] p-8 md:p-10 flex flex-col justify-center relative overflow-hidden transition-all duration-500`}>
              <div className={`w-12 h-12 rounded-2xl ${theme.iconBg} ${theme.iconColor} flex items-center justify-center mb-6`}>
                <Terminal size={24} />
              </div>
              <h2 className={`text-2xl font-bold mb-4 ${theme.text}`}>My Journey</h2>
              <p className={`text-sm md:text-base leading-relaxed ${theme.textMuted}`}>
                {summary}
              </p>
            </motion.div>

            {/* Experience Card */}
            <motion.div variants={fadeUp} className={`${theme.cardBg} border ${theme.border} ${theme.cardHover} rounded-[2rem] p-8 md:p-10 flex flex-col items-center justify-center text-center transition-all duration-500`}>
               <div className={`text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br ${theme.gradientText} mb-2`}>
                {personal_info.experience_years}<span className={theme.accentText}>+</span>
              </div>
              <div className={`text-xs font-bold uppercase tracking-widest ${theme.textMuted}`}>
                Years Experience
              </div>
            </motion.div>

            {/* Roles Card */}
            <motion.div variants={fadeUp} className={`${theme.cardBg} border ${theme.border} ${theme.cardHover} rounded-[2rem] p-8 md:p-10 flex flex-col justify-center transition-all duration-500 group overflow-hidden relative`}>
               <div className={`absolute -right-6 -bottom-6 opacity-10 ${theme.iconColor} group-hover:scale-110 transition-transform duration-700`}>
                 <Globe size={180} />
               </div>
               <h3 className={`text-lg font-bold mb-4 ${theme.text} relative z-10`}>Current Focus</h3>
               <div className="flex flex-col gap-2 relative z-10">
                 {roles.slice(0, 3).map((role, idx) => (
                   <div key={idx} className={`flex items-center gap-2 text-sm font-medium ${theme.textMuted}`}>
                     <div className={`w-1.5 h-1.5 rounded-full ${theme.accentText} bg-current`} />
                     {role}
                   </div>
                 ))}
               </div>
            </motion.div>
          </motion.div>
        </section>

        {/* EXPERTISE SECTION */}
        <section id="expertise" className="w-full px-4 md:px-8 py-20 md:py-32 max-w-7xl mx-auto relative z-10">
          <motion.div {...fadeUp} className="mb-12 md:mb-16">
            <h2 className={`text-4xl md:text-6xl font-black tracking-tight ${theme.text} mb-4`}>
              Technical <span className={`text-transparent bg-clip-text bg-gradient-to-r ${theme.gradientText}`}>Arsenal.</span>
            </h2>
            <p className={`text-lg ${theme.textMuted} max-w-2xl`}>Specialized in end-to-end product development using modern, scalable technologies.</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/* Frontend */}
            <motion.div variants={fadeUp} className={`${theme.cardBg} border ${theme.border} ${theme.cardHover} rounded-[2rem] p-8 transition-all duration-500`}>
               <div className={`w-14 h-14 rounded-2xl ${theme.iconBg} ${theme.iconColor} flex items-center justify-center mb-8`}>
                <Monitor size={28} />
              </div>
              <h3 className={`text-2xl font-bold mb-6 ${theme.text}`}>Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {technical_stack.frontend.map(tech => (
                  <span key={tech} className={`px-3 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider ${theme.tagBg}`}>
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Backend */}
            <motion.div variants={fadeUp} className={`${theme.cardBg} border ${theme.border} ${theme.cardHover} rounded-[2rem] p-8 transition-all duration-500`}>
               <div className={`w-14 h-14 rounded-2xl ${theme.iconBg} ${theme.iconColor} flex items-center justify-center mb-8`}>
                <Server size={28} />
              </div>
              <h3 className={`text-2xl font-bold mb-6 ${theme.text}`}>Mobile & Backend</h3>
              <div className="flex flex-wrap gap-2">
                {[...technical_stack.mobile, ...technical_stack.backend_integration].slice(0,8).map(tech => (
                  <span key={tech} className={`px-3 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider ${theme.tagBg}`}>
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Cloud */}
            <motion.div variants={fadeUp} className={`${theme.cardBg} border ${theme.border} ${theme.cardHover} rounded-[2rem] p-8 transition-all duration-500`}>
               <div className={`w-14 h-14 rounded-2xl ${theme.iconBg} ${theme.iconColor} flex items-center justify-center mb-8`}>
                <Cloud size={28} />
              </div>
              <h3 className={`text-2xl font-bold mb-6 ${theme.text}`}>Tools & Build</h3>
              <div className="flex flex-wrap gap-2">
                {technical_stack.tools.map(tech => (
                  <span key={tech} className={`px-3 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider ${theme.tagBg}`}>
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="w-full px-4 md:px-8 py-20 md:py-32 max-w-7xl mx-auto relative z-10">
          <motion.div {...fadeUp} className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className={`text-4xl md:text-6xl font-black tracking-tight ${theme.text} mb-4`}>
                Selected <span className={`text-transparent bg-clip-text bg-gradient-to-r ${theme.gradientText}`}>Works.</span>
              </h2>
              <p className={`text-lg ${theme.textMuted} max-w-2xl`}>Production-ready SaaS platforms built for scale right from day one.</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-12 md:gap-24 w-full">
            {projects.slice(0, 4).map((project, idx) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center w-full group`}
              >
                {/* Visual Side */}
                <div className={`w-full lg:w-1/2 aspect-[4/3] rounded-[2rem] p-2 md:p-4 border ${theme.border} ${theme.cardBg} relative overflow-hidden transition-all duration-500 group-hover:border-opacity-100 shadow-2xl`}>
                   <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradientText} opacity-[0.03] group-hover:opacity-10 transition-opacity duration-500`} />
                   
                   <div className={`w-full h-full rounded-[1.5rem] bg-black/10 border ${theme.border} flex flex-col items-center justify-center p-8 relative overflow-hidden z-10`}>
                     {/* Window Controls */}
                     <div className="absolute top-4 left-4 flex gap-2">
                       <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                       <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                       <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                     </div>

                     <div className={`text-4xl md:text-5xl lg:text-6xl font-black text-center ${theme.text} opacity-80 mb-4`}>
                        {project.name.substring(0,2).toUpperCase()}
                     </div>
                     <div className={`px-4 py-1.5 rounded-full ${theme.tagBg} text-xs font-bold uppercase tracking-wider`}>
                       {project.category}
                     </div>
                   </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 flex flex-col">
                  <div className={`text-sm font-bold uppercase tracking-widest ${theme.accentText} mb-4`}>
                    0{idx + 1} // {project.type}
                  </div>
                  <h3 className={`text-3xl md:text-5xl font-black ${theme.text} mb-6 tracking-tight`}>
                    {project.name}
                  </h3>
                  <p className={`text-base md:text-lg leading-relaxed ${theme.textMuted} mb-8`}>
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map(tech => (
                      <span key={tech} className={`px-3 py-1.5 rounded-lg text-xs font-bold ${theme.tagBg}`}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     {project.features.slice(0,4).map((feature, i) => (
                       <li key={i} className={`flex items-start gap-3 text-sm font-medium ${theme.text}`}>
                         <CheckCircle2 size={18} className={`shrink-0 ${theme.accentText}`} />
                         {feature}
                       </li>
                     ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA / CONTACT SECTION */}
        <section id="contact" className="w-full py-24 md:py-40 px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`max-w-5xl mx-auto ${theme.cardBg} border ${theme.border} rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl`}
          >
            {/* Glow background */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] ${theme.glowPrimary} blur-[100px] pointer-events-none rounded-full`} />

            <div className="relative z-10">
              <h2 className={`text-4xl md:text-6xl lg:text-7xl font-black tracking-tight ${theme.text} mb-8`}>
                Ready to Ship?
              </h2>
              <p className={`text-lg md:text-xl ${theme.textMuted} mb-12 max-w-2xl mx-auto`}>
                Currently available for freelance projects and full-time opportunities. Let's build something exceptional together.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href={`mailto:${personal_info.email}`} className={`w-full sm:w-auto px-10 py-5 rounded-full font-bold text-lg flex items-center justify-center gap-3 transition-all ${theme.buttonBg}`}>
                  <Mail size={20} />
                  {personal_info.email}
                </a>
                <a href={`tel:${personal_info.phone}`} className={`w-full sm:w-auto px-10 py-5 rounded-full font-bold text-lg flex items-center justify-center gap-3 transition-all ${theme.buttonOutline}`}>
                  <Phone size={20} />
                  Book a Call
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* FOOTER */}
        <footer className={`w-full py-8 px-6 md:px-12 border-t ${theme.border} flex flex-col justify-center items-center relative z-10`}>
          <div className={`text-sm font-bold uppercase tracking-widest ${theme.textMuted} mb-2`}>
            © {new Date().getFullYear()} {personal_info.name}
          </div>
          <div className={`text-xs ${theme.textMuted} opacity-60`}>
            Engineered with React & Tailwind
          </div>
        </footer>

      </div>
    </div>
  );
};

export default Portfolio4;
