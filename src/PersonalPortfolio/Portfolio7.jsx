import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { portfolioprofile } from './portfoliodata';
import {
  ArrowDown, ExternalLink, Activity,
  Terminal, Sparkles, CheckCircle2, ChevronRight, Code2
} from 'lucide-react';

const themeConfigs = {
  abyssal: {
    id: 'abyssal',
    label: 'Abyssal Onyx',
    bg: 'bg-[#000000]',
    text: 'text-zinc-50',
    textMuted: 'text-zinc-500',
    accent: 'bg-white text-black shadow-[0_0_30px_rgba(255,255,255,0.3)]',
    accentText: 'text-white',
    border: 'border-white/10',
    navBg: 'bg-black/80 backdrop-blur-xl border-b border-white/5',
    card: 'bg-zinc-950 border border-white/5 hover:border-white/20 transition-all',
    splineBase: 'grayscale brightness-150 contrast-125 mix-blend-screen opacity-90',
    morphOverlay: 'from-black via-zinc-900/50 to-black'
  },
  crimson: {
    id: 'crimson',
    label: 'Imperial Crimson',
    bg: 'bg-[#0a0002]',
    text: 'text-red-50',
    textMuted: 'text-red-900',
    accent: 'bg-gradient-to-r from-red-600 to-rose-900 text-white shadow-[0_0_30px_rgba(220,38,38,0.3)]',
    accentText: 'text-red-500',
    border: 'border-red-900/30',
    navBg: 'bg-[#0a0002]/80 backdrop-blur-xl border-b border-red-900/20',
    card: 'bg-[#120101] border border-red-900/20 hover:border-red-600/50 transition-all',
    splineBase: 'hue-rotate-180 saturate-[3] brightness-125 mix-blend-screen opacity-80',
    morphOverlay: 'from-[#0a0002] via-red-900/10 to-[#0a0002]'
  },
  sapphire: {
    id: 'sapphire',
    label: 'Sapphire Deep',
    bg: 'bg-[#020512]',
    text: 'text-blue-50',
    textMuted: 'text-indigo-900',
    accent: 'bg-gradient-to-r from-blue-600 to-indigo-900 text-white shadow-[0_0_30px_rgba(37,99,235,0.3)]',
    accentText: 'text-blue-500',
    border: 'border-blue-900/30',
    navBg: 'bg-[#020512]/80 backdrop-blur-xl border-b border-blue-900/20',
    card: 'bg-[#050b1f] border border-indigo-900/30 hover:border-blue-500/50 transition-all',
    splineBase: 'hue-rotate-[240deg] saturate-[3] brightness-150 mix-blend-screen opacity-80',
    morphOverlay: 'from-[#020512] via-blue-900/10 to-[#020512]'
  }
};

const Portfolio7 = () => {
  const [activeTheme, setActiveTheme] = useState('abyssal');
  const [splineLoaded, setSplineLoaded] = useState(false);
  const theme = themeConfigs[activeTheme];

  const { personal_info, summary, technical_stack, projects } = portfolioprofile;

  const { scrollYProgress } = useScroll();

  // MAGIC KINETIC MORPHING SYSTEM
  // As the user scrolls through the 4 sections [0, 0.33, 0.66, 1], the SINGLE sticky Spline manipulates its physical position
  const splineScale = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [1.2, 2.5, 1.8, 3.5]);
  const splineRotate = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [0, -35, 45, 180]);
  const splineX = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], ["0%", "20%", "-20%", "0%"]);
  const splineY = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], ["0%", "10%", "-10%", "20%"]);
  const hueShift = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], ["0deg", "90deg", "-45deg", "180deg"]);

  // Crossfade opacity of color overlay to make it look like different lighting
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.15, 0.33, 0.5, 0.66, 0.85, 1], [0.8, 0, 0.8, 0, 0.8, 0, 0.9]);

  // Framer config
  const fadeUp = {
    initial: { opacity: 0, y: 100 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-10%" },
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
  };

  const SAFE_SPLINE = "https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode";

  return (
    <div className={`w-full h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth transition-colors duration-1000 ${theme.bg} ${theme.text} font-sans selection:bg-white/20 selection:${theme.text}`}>

      {/* --- KINETIC STICKY 3D BACKGROUND ENGINE --- */}
      <div className="fixed inset-0 w-full h-[100vh] z-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <motion.div
          style={{
            scale: splineScale,
            rotateZ: splineRotate,
            x: splineX,
            y: splineY,
            filter: `hue-rotate(${hueShift.get()})`
          }}
          className="w-[120vw] h-[120vh] origin-center transition-all duration-75"
        >
          <Spline
            scene={SAFE_SPLINE}
            onLoad={() => setSplineLoaded(true)}
            className={`w-full h-full transition-all duration-[2000ms] ${splineLoaded ? theme.splineBase : 'opacity-0 scale-50 blur-2xl'}`}
            style={{ pointerEvents: 'auto' }}
          />
        </motion.div>
        {/* Morphing color gradient overlay tied to scroll */}
        <motion.div
          style={{ opacity: overlayOpacity }}
          className={`absolute inset-0 bg-gradient-to-tr ${theme.morphOverlay} mix-blend-multiply`}
        />
      </div>

      {/* FLOATING NAVIGATION */}
      <nav className={`fixed top-0 left-0 right-0 z-50 ${theme.navBg} transition-all duration-500`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-auto min-h-[3.5rem] sm:min-h-[5rem] py-2 sm:py-4 flex flex-row items-center justify-between gap-2 sm:gap-4">
          <div className={`text-lg sm:text-2xl font-black tracking-tighter uppercase shrink-0 ${theme.text}`}>
            {personal_info.name.split(' ')[0]}<span className={theme.accentText}>.</span>
          </div>
          <div className="flex flex-row flex-wrap justify-end gap-1.5 sm:gap-3">
            {Object.values(themeConfigs).map(t => (
              <button
                key={t.id}
                onClick={() => setActiveTheme(t.id)}
                className={`px-2 sm:px-4 py-1 sm:py-2 text-[8px] sm:text-[10px] md:text-xs font-bold tracking-widest uppercase transition-all whitespace-nowrap ${activeTheme === t.id ? theme.accent : `bg-transparent border ${theme.border} ${theme.textMuted} hover:${theme.text} hover:${theme.border}`
                  }`}
              >
                <span className="hidden md:inline">{t.label}</span>
                <span className="md:hidden">{t.label.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="w-full relative z-10">

        {/* --- SECTION 1: HERO (SNAP 1) --- */}
        <section className="w-full min-h-[100svh] shrink-0 snap-start snap-always flex flex-col justify-center pt-24 pb-12 sm:py-20 px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, delay: 0.5 }}
            className="max-w-7xl mx-auto w-full"
          >
            <div className={`inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-6 py-1.5 sm:py-3 border ${theme.border} backdrop-blur-md bg-white/[0.02] text-[9px] sm:text-xs font-bold tracking-widest uppercase mb-6 sm:mb-12 shadow-2xl rounded-full`}>
              <Activity size={14} className={`sm:w-4 sm:h-4 ${theme.accentText} animate-pulse`} />
              <span className={theme.text}>STATUS: {personal_info.availability}</span>
            </div>

            <h1 className={`text-[2.8rem] leading-[1] sm:leading-[0.9] sm:text-[6rem] lg:text-[10rem] font-black tracking-tighter uppercase ${theme.text} drop-shadow-[0_20px_50px_rgba(0,0,0,1)]`}>
              Cinematic <br /> <span className={theme.accentText}>Engineer.</span>
            </h1>

            <div className="flex flex-col md:flex-row items-start md:items-end justify-between mt-6 sm:mt-12 gap-5 sm:gap-8">
              <p className={`text-sm sm:text-xl md:text-3xl ${theme.textMuted} max-w-2xl font-light tracking-wide leading-relaxed drop-shadow-xl`}>
                {personal_info.title} specializing in top-tier scalable systems and immersive web experiences.
              </p>
              <div className={`flex items-center gap-2 sm:gap-3 ${theme.textMuted} text-[9px] sm:text-[10px] tracking-widest uppercase animate-bounce mt-2 sm:mt-0`}>
                SCROLL TO INITIATE <ArrowDown size={14} className={`sm:w-4 sm:h-4 ${theme.accentText}`} />
              </div>
            </div>
          </motion.div>
        </section>

        {/* --- SECTION 2: ARCHITECTURE (SNAP 2) --- */}
        <section className="w-full min-h-[100svh] shrink-0 snap-start snap-always flex flex-col justify-center pt-24 pb-12 sm:py-20 px-4 sm:px-6 relative z-10">
          <motion.div variants={fadeUp} initial="initial" whileInView="whileInView" className="max-w-7xl mx-auto w-full">
            <div className={`p-5 sm:p-10 md:p-16 ${theme.card} backdrop-blur-3xl relative overflow-hidden rounded-2xl`}>
              <div className={`absolute top-0 right-0 w-32 sm:w-64 h-32 sm:h-64 bg-gradient-to-bl from-white/10 to-transparent pointer-events-none`} />

              <h2 className={`text-[9px] sm:text-xs font-bold uppercase tracking-widest ${theme.accentText} mb-3 sm:mb-6`}>01 // Technology Matrix</h2>
              <h3 className={`text-3xl sm:text-5xl lg:text-7xl font-black uppercase tracking-tighter mb-4 sm:mb-12 leading-[1.1] sm:leading-[0.9] ${theme.text} drop-shadow-md`}>
                System <br className="hidden sm:block" /> Architecture.
              </h3>

              <p className={`text-sm sm:text-lg leading-relaxed ${theme.textMuted} mb-8 sm:mb-12`}>
                {summary}
              </p>

              <div className="flex flex-col gap-6 sm:gap-10">
                <div>
                  <div className="flex items-center gap-3 mb-4 sm:mb-6">
                    <Code2 size={20} className={theme.text} />
                    <h4 className={`text-sm sm:text-xl font-bold uppercase tracking-widest ${theme.text}`}>Frontend Ecosystem</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {technical_stack.frontend.map(tech => (
                      <span key={tech} className={`px-2 sm:px-4 py-1.5 sm:py-2 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest border border-white/10 bg-white/5 ${theme.text} shadow-inner rounded`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4 sm:mb-6">
                    <Terminal size={20} className={theme.text} />
                    <h4 className={`text-sm sm:text-xl font-bold uppercase tracking-widest ${theme.text}`}>Backend Core</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[...technical_stack.backend, ...technical_stack.cloud_and_deployment].slice(0, 10).map(tech => (
                      <span key={tech} className={`px-2 sm:px-4 py-1.5 sm:py-2 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest border border-white/10 bg-white/5 ${theme.text} shadow-inner rounded`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* --- SECTION 3: DEPLOYMENTS (SNAP 3) --- */}
        <section className="w-full min-h-[100svh] shrink-0 snap-start snap-always flex flex-col justify-center pt-24 pb-12 sm:py-20 px-4 sm:px-6 relative z-10">
          <motion.div variants={fadeUp} initial="initial" whileInView="whileInView" className="max-w-7xl mx-auto w-full flex flex-col lg:items-end">

            <div className="text-left lg:text-right mt-0 mb-6 sm:mb-16">
              <h2 className={`text-[9px] sm:text-xs font-bold uppercase tracking-widest ${theme.accentText} mb-2 sm:mb-6`}>02 // Selected Works</h2>
              <h3 className={`text-[2rem] leading-[1.1] sm:text-5xl lg:text-8xl font-black uppercase tracking-tighter ${theme.text} drop-shadow-[0_10px_30px_rgba(0,0,0,1)]`}>
                Production <br className="hidden sm:block" /> Deployments.
              </h3>
            </div>

            <div className="w-full lg:w-3/4 flex flex-col gap-4 sm:gap-6 max-h-[60vh] sm:max-h-[60vh] overflow-y-auto pr-2 sm:pr-4 custom-scrollbar">
              {projects.map((project, idx) => (
                <div
                  key={project.name}
                  className={`p-6 sm:p-10 ${theme.card} backdrop-blur-2xl group border-l-4 ${activeTheme === 'abyssal' ? 'border-l-white' : activeTheme === 'crimson' ? 'border-l-red-500' : 'border-l-blue-500'} transition-all rounded-xl`}
                >
                  <div className="flex flex-row items-center justify-between gap-4 sm:gap-6 mb-4 sm:mb-6">
                    <div>
                      <div className={`text-[9px] sm:text-[10px] font-bold uppercase tracking-widest ${theme.textMuted} mb-1 sm:mb-2`}>Module 0{idx + 1} // {project.type}</div>
                      <h4 className={`text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase ${theme.text}`}>{project.name}</h4>
                    </div>
                    <span className={`p-2 sm:p-4 shrink-0 rounded-full border border-white/10 ${theme.textMuted} group-hover:${theme.accentText} transition-colors group-hover:scale-110`}>
                      <ExternalLink size={20} className="sm:hidden" />
                      <ExternalLink size={24} className="hidden sm:block" />
                    </span>
                  </div>

                  <p className={`text-xs sm:text-sm md:text-base leading-relaxed ${theme.textMuted} mb-6 sm:mb-8 max-w-2xl`}>
                    {project.description}
                  </p>

                  <div className={`pt-4 sm:pt-6 border-t ${theme.border} flex flex-wrap gap-2`}>
                    {project.technologies.slice(0, 6).map(tech => (
                      <span key={tech} className={`px-2 sm:px-3 py-1 sm:py-1.5 text-[8px] sm:text-[9px] font-bold uppercase tracking-widest bg-transparent border border-white/10 ${theme.textMuted} transition-colors rounded`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </motion.div>
        </section>

        {/* --- SECTION 4: COMMS (SNAP 4) --- */}
        <section className="w-full min-h-[100svh] shrink-0 snap-start snap-always flex flex-col items-center justify-center text-center px-4 sm:px-6 relative overflow-hidden z-10 pt-24 pb-12 sm:py-20">
          <motion.div variants={fadeUp} initial="initial" whileInView="whileInView" className={`max-w-4xl w-full p-6 sm:p-16 md:p-24 ${theme.card} backdrop-blur-3xl z-10 relative rounded-2xl`}>
            {/* Targeting brackets */}
            <div className={`absolute top-0 left-0 w-6 h-6 sm:w-12 sm:h-12 border-t-2 sm:border-t-4 border-l-2 sm:border-l-4 ${theme.border} opacity-50`} />
            <div className={`absolute bottom-0 right-0 w-6 h-6 sm:w-12 sm:h-12 border-b-2 sm:border-b-4 border-r-2 sm:border-r-4 ${theme.border} opacity-50`} />

            <h2 className={`text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter mb-4 sm:mb-8 leading-[1.1] sm:leading-[0.9] ${theme.text}`}>
              Enter The <br /><span className={theme.accentText}>Network.</span>
            </h2>
            <p className={`text-xs sm:text-lg font-light tracking-wide ${theme.textMuted} mb-8 sm:mb-16`}>
              Encrypted channels are currently open for freelance inquiries, contract deployments, and full-time architecture roles.
            </p>
            <a href={`mailto:${personal_info.email}`} className={`px-6 sm:px-12 py-3 sm:py-6 text-[10px] sm:text-sm font-black uppercase tracking-[0.2em] transition-transform hover:scale-105 inline-block rounded-full ${theme.accent}`}>
              Establish Comms
            </a>
          </motion.div>

          <div className={`absolute bottom-4 sm:bottom-8 w-full text-center px-4 text-[8px] sm:text-[10px] font-bold uppercase tracking-widest ${theme.textMuted} z-10`}>
            © {new Date().getFullYear()} {personal_info.name} // ALL SYSTEMS OPERATIONAL
          </div>
        </section>

      </main>

      <style dangerouslySetInnerHTML={{
        __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.4); }
      `}} />
    </div>
  );
};

export default Portfolio7;
