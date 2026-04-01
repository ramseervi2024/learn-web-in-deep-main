import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { portfolioprofile } from './portfoliodata';
import { 
  ArrowDown, ExternalLink, Code2, Layers, 
  Terminal, Sparkles, CheckCircle2, ChevronRight, Database 
} from 'lucide-react';

const themeConfigs = {
  cyberSynth: {
    id: 'cyberSynth',
    label: 'Cyber Synth',
    bg: 'bg-[#030303]',
    text: 'text-zinc-50',
    textMuted: 'text-zinc-400',
    accent: 'bg-gradient-to-r from-cyan-400 to-indigo-500 text-white shadow-[0_0_20px_rgba(34,211,238,0.4)]',
    accentText: 'text-cyan-400',
    border: 'border-cyan-500/30',
    navBg: 'bg-[#030303]/80 backdrop-blur-xl border-b border-cyan-500/20',
    card: 'bg-[#0a0a0a]/80 backdrop-blur-xl border border-cyan-500/20 shadow-xl hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] transition-all',
    splineFilters: {
      hero: 'hue-rotate-90 saturate-200 brightness-125 mix-blend-screen opacity-90',
      tech: 'hue-rotate-135 saturate-[2.5] brightness-125 mix-blend-screen opacity-70 scale-[1.8] -rotate-[10deg]',
      projects: 'hue-rotate-45 saturate-[2.5] brightness-150 mix-blend-screen opacity-60 scale-[1.5] rotate-[30deg]'
    }
  },
  neonLiquid: {
    id: 'neonLiquid',
    label: 'Neon Liquid',
    bg: 'bg-[#000511]',
    text: 'text-blue-50',
    textMuted: 'text-blue-200/50',
    accent: 'bg-gradient-to-r from-emerald-400 to-teal-500 text-slate-900 shadow-[0_0_20px_rgba(52,211,153,0.4)]',
    accentText: 'text-emerald-400',
    border: 'border-blue-900/50',
    navBg: 'bg-[#000511]/80 backdrop-blur-xl border-b border-emerald-500/20',
    card: 'bg-[#000a1f]/80 backdrop-blur-xl border border-emerald-900/50 shadow-xl hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(52,211,153,0.1)] transition-all',
    splineFilters: {
      hero: 'hue-rotate-[180deg] saturate-[2.5] brightness-125 mix-blend-screen opacity-90',
      tech: 'hue-rotate-[240deg] saturate-[3] brightness-110 mix-blend-screen opacity-70 scale-[1.9] -rotate-[15deg]',
      projects: 'hue-rotate-[200deg] saturate-[2.5] brightness-150 mix-blend-screen opacity-60 scale-[1.4] rotate-[60deg]'
    }
  },
  midnightGold: {
    id: 'midnightGold',
    label: 'Midnight Gold',
    bg: 'bg-[#0a0a09]',
    text: 'text-amber-50',
    textMuted: 'text-zinc-400',
    accent: 'bg-gradient-to-r from-yellow-300 via-amber-400 to-amber-600 text-black shadow-[0_0_20px_rgba(251,191,36,0.3)]',
    accentText: 'text-amber-400',
    border: 'border-amber-900/30',
    navBg: 'bg-[#0a0a09]/90 backdrop-blur-xl border-b border-amber-900/20',
    card: 'bg-[#141412]/90 backdrop-blur-xl border border-amber-900/40 shadow-2xl hover:border-amber-500/50 transition-all',
    splineFilters: {
      hero: 'sepia-[.8] hue-rotate-[-30deg] saturate-[2.5] brightness-110 mix-blend-screen opacity-90',
      tech: 'sepia-[1] hue-rotate-[-40deg] saturate-[3] brightness-125 mix-blend-screen opacity-60 scale-[1.8] -rotate-12',
      projects: 'sepia-[.8] hue-rotate-[-20deg] saturate-[2.5] brightness-110 mix-blend-screen opacity-70 scale-[1.5] rotate-90'
    }
  }
};

const Portfolio6 = () => {
  const [activeTheme, setActiveTheme] = useState('cyberSynth');
  const [splineLoaded, setSplineLoaded] = useState({ hero: false, tech: false, projects: false });
  const theme = themeConfigs[activeTheme];

  const { personal_info, summary, technical_stack, projects } = portfolioprofile;

  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 300]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // Framer config
  const fadeUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  const stagger = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } },
    viewport: { once: true, margin: "-100px" }
  };

  const SAFE_SPLINE = "https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode";

  return (
    <div className={`w-full min-h-screen transition-colors duration-1000 ${theme.bg} ${theme.text} font-sans selection:bg-white/20 selection:${theme.text}`}>
      
      {/* FLOATING NAVIGATION */}
      <nav className={`fixed top-0 left-0 right-0 z-50 ${theme.navBg} transition-all duration-500`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-auto min-h-[5rem] py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className={`text-xl md:text-2xl font-black tracking-tighter uppercase shrink-0 ${theme.text}`}>
            {personal_info.name.split(' ')[0]}<span className={theme.accentText}>.</span>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {Object.values(themeConfigs).map(t => (
              <button
                key={t.id}
                onClick={() => setActiveTheme(t.id)}
                className={`px-3 py-1.5 text-[10px] sm:text-xs font-bold rounded-full transition-all whitespace-nowrap ${
                  activeTheme === t.id ? theme.accent : `bg-transparent border ${theme.border} ${theme.textMuted} hover:${theme.text}`
                }`}
              >
                <span className="hidden sm:inline">{t.label}</span>
                <span className="sm:hidden">{t.label.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="w-full overflow-hidden">
        
        {/* --- SECTION 1: HERO (SPLINE 1) --- */}
        <section className="relative w-full h-[100vh] flex items-center justify-center">
          {/* 3D Background */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-auto flex items-center justify-center">
            <Spline 
              scene={SAFE_SPLINE}
              onLoad={() => setSplineLoaded(prev => ({...prev, hero: true}))}
              className={`w-[120vw] h-[120vh] transition-all duration-1000 origin-center ${splineLoaded.hero ? theme.splineFilters.hero : 'opacity-0'}`}
            />
            {/* Deep blend gradient to anchor bottom text solidly */}
            <div className={`absolute inset-0 bg-gradient-to-t from-${activeTheme==='cyberSynth' ? '[#030303]' : activeTheme==='neonLiquid' ? '[#000511]' : '[#0a0a09]'} via-transparent to-transparent pointer-events-none opacity-80`} />
          </div>

          <motion.div 
            style={{ y: heroY, opacity: heroOpacity }}
            className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center text-center mt-20"
          >
             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }} 
               animate={{ opacity: 1, scale: 1 }} 
               transition={{ duration: 1 }}
               className={`inline-flex items-center px-5 py-2.5 rounded-full border ${theme.border} bg-white/5 backdrop-blur-md text-sm font-semibold tracking-widest uppercase mb-8 shadow-2xl`}
             >
               <Sparkles size={16} className={`mr-2 ${theme.accentText} animate-pulse`} />
               <span className={theme.text}>{personal_info.availability}</span>
             </motion.div>
             
             <motion.h1 
               initial={{ opacity: 0, y: 30 }} 
               animate={{ opacity: 1, y: 0 }} 
               transition={{ duration: 1, delay: 0.2 }}
               className={`text-[4rem] md:text-[6rem] lg:text-[8rem] font-black tracking-tighter leading-[0.9] uppercase ${theme.text} drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]`}
             >
                Creative <br/> <span className={theme.accentText}>Engineer.</span>
             </motion.h1>

             <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 1, delay: 0.4 }}
                className={`text-lg md:text-2xl ${theme.textMuted} max-w-2xl mt-8 font-medium drop-shadow-md`}
             >
                {personal_info.title} specializing in top-tier scalable systems and immersive web experiences.
             </motion.p>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}
             className={`absolute bottom-10 left-1/2 -translate-x-1/2 ${theme.textMuted} animate-bounce`}
          >
             <ArrowDown size={32} />
          </motion.div>
        </section>

        {/* --- SECTION 2: EXPERTISE (SPLINE 2) --- */}
        <section className={`relative w-full min-h-screen py-32 flex items-center border-t ${theme.border} overflow-hidden`}>
          <div className="absolute top-1/2 -translate-y-1/2 -right-[20%] w-[80vw] h-[120vh] z-0 pointer-events-auto">
             <Spline 
               scene={SAFE_SPLINE}
               onLoad={() => setSplineLoaded(prev => ({...prev, tech: true}))}
               className={`w-full h-full transition-all duration-1000 origin-center ${splineLoaded.tech ? theme.splineFilters.tech : 'opacity-0'}`}
             />
             {/* Edge masking shadow */}
             <div className={`absolute inset-0 bg-gradient-to-r from-${theme.bg.replace('bg-', '')} to-transparent pointer-events-none opacity-90`} />
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div variants={fadeUp} initial="initial" whileInView="whileInView">
               <h2 className={`text-sm font-bold uppercase tracking-widest ${theme.accentText} mb-4`}>01 // Technology Matrix</h2>
               <h3 className={`text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.9] ${theme.text} drop-shadow-lg`}>
                 System <br/> Architecture.
               </h3>
               <p className={`text-lg leading-relaxed ${theme.textMuted} mb-12 max-w-xl`}>
                 {summary}
               </p>

               <div className="flex flex-col gap-10">
                 {/* Frontend Block */}
                 <div>
                   <div className="flex items-center gap-3 mb-6">
                     <Code2 size={24} className={theme.accentText} />
                     <h4 className={`text-2xl font-bold ${theme.text}`}>Frontend Ecosystem</h4>
                   </div>
                   <div className="flex flex-wrap gap-3">
                     {technical_stack.frontend.map(tech => (
                       <span key={tech} className={`px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-lg bg-white/10 ${theme.text} border border-white/5 shadow-md backdrop-blur-md`}>
                         {tech}
                       </span>
                     ))}
                   </div>
                 </div>

                 {/* Backend Block */}
                 <div>
                   <div className="flex items-center gap-3 mb-6">
                     <Database size={24} className={theme.accentText} />
                     <h4 className={`text-2xl font-bold ${theme.text}`}>Backend & Infrastructure</h4>
                   </div>
                   <div className="flex flex-wrap gap-3">
                     {[...technical_stack.backend, ...technical_stack.cloud_and_deployment].slice(0, 10).map(tech => (
                       <span key={tech} className={`px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-lg bg-white/10 ${theme.text} border border-white/5 shadow-md backdrop-blur-md`}>
                         {tech}
                       </span>
                     ))}
                   </div>
                 </div>
               </div>
            </motion.div>
          </div>
        </section>

        {/* --- SECTION 3: PROJECTS (SPLINE 3) --- */}
        <section className={`relative w-full min-h-screen py-32 border-t ${theme.border} overflow-hidden`}>
          <div className="absolute top-0 -left-[20%] w-[100vw] h-[100vh] z-0 pointer-events-auto">
             <Spline 
               scene={SAFE_SPLINE}
               onLoad={() => setSplineLoaded(prev => ({...prev, projects: true}))}
               className={`w-full h-full transition-all duration-1000 origin-bottom ${splineLoaded.projects ? theme.splineFilters.projects : 'opacity-0'}`}
             />
             {/* Layer mask */}
             <div className={`absolute inset-0 bg-gradient-to-l from-${theme.bg.replace('bg-', '')} to-transparent pointer-events-none opacity-90`} />
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
            <motion.div variants={fadeUp} initial="initial" whileInView="whileInView" className="text-right mb-20">
               <h2 className={`text-sm font-bold uppercase tracking-widest ${theme.accentText} mb-4`}>02 // Selected Works</h2>
               <h3 className={`text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] ${theme.text} drop-shadow-xl`}>
                 Production <br/> Deployments.
               </h3>
            </motion.div>

            <motion.div variants={stagger} initial="initial" whileInView="whileInView" className="flex flex-col gap-8 md:gap-12 relative z-10 lg:ml-auto lg:w-[70%]">
              {projects.slice(0, 4).map((project, idx) => (
                <motion.div 
                   key={project.name}
                   variants={fadeUp}
                   className={`p-8 md:p-12 rounded-[2rem] ${theme.card} group transition-all duration-500`}
                >
                   <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                      <div>
                         <div className={`text-xs font-bold uppercase tracking-widest ${theme.textMuted} mb-2`}>Case Study 0{idx + 1}</div>
                         <h4 className={`text-3xl md:text-5xl font-black tracking-tight ${theme.text}`}>{project.name}</h4>
                      </div>
                      <span className={`px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-full ${theme.accent} inline-flex items-center gap-2 w-max`}>
                         {project.type} <ExternalLink size={14} />
                      </span>
                   </div>

                   <p className={`text-base md:text-lg mb-8 leading-relaxed font-medium ${theme.textMuted}`}>
                     {project.description}
                   </p>

                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                     {project.features.slice(0, 4).map((feat, i) => (
                       <div key={i} className={`flex items-start gap-3 ${theme.text}`}>
                          <CheckCircle2 size={20} className={`shrink-0 ${theme.accentText}`} />
                          <span className="text-sm font-medium">{feat}</span>
                       </div>
                     ))}
                   </div>

                   <div className={`pt-8 border-t ${theme.border} flex flex-wrap gap-2`}>
                      {project.technologies.map(tech => (
                        <span key={tech} className={`px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded-md bg-white/10 border border-white/5 ${theme.text}`}>
                          {tech}
                        </span>
                      ))}
                   </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- FOOTER / CTA --- */}
        <section className={`relative w-full py-32 flex flex-col items-center justify-center text-center border-t ${theme.border}`}>
            <motion.div variants={fadeUp} initial="initial" whileInView="whileInView" className="max-w-3xl px-6">
               <h2 className={`text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.9] ${theme.text} drop-shadow-xl`}>
                 Ready to <br/><span className={theme.accentText}>Collaborate?</span>
               </h2>
               <p className={`text-xl font-medium ${theme.textMuted} mb-12`}>
                 Currently available for freelance opportunities or full-time deployment.
               </p>
               <a href={`mailto:${personal_info.email}`} className={`px-10 py-5 text-sm font-black uppercase tracking-widest rounded-full transition-transform hover:scale-105 ${theme.accent}`}>
                 Initiate Contact
               </a>
            </motion.div>

            <div className={`absolute bottom-8 text-xs font-bold uppercase tracking-widest ${theme.textMuted}`}>
              © {new Date().getFullYear()} {personal_info.name}
            </div>
        </section>
        
      </main>
    </div>
  );
};

export default Portfolio6;