import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioprofile as data } from './PersonalPortfolioData';
import { 
  Code2, Smartphone, Server, Cloud, 
  ArrowRight, CheckCircle2, 
  Mail, Phone, ExternalLink, Globe,
  Menu, X, Briefcase, MapPin, LayoutGrid, Database, ArrowUpRight
} from 'lucide-react';

const Portfolio1 = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { personal_info, summary, roles, technical_stack, saas_capabilities, projects } = data;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, margin: "-100px" },
    transition: { staggerChildren: 0.1 }
  };

  return (
    <div className="w-full min-h-screen bg-[#050505] text-white font-sans selection:bg-white/30 selection:text-white overflow-x-hidden relative">

      {/* Premium Ambient Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-blue-900/20 blur-[150px] opacity-40 mix-blend-screen" />
        <div className="absolute top-[30%] right-[-20%] w-[60vw] h-[60vw] rounded-full bg-emerald-900/10 blur-[150px] opacity-30 mix-blend-screen" />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center">

        {/* Floating Premium Navigation */}
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
          className={`fixed top-4 md:top-6 z-50 w-[92%] md:w-[85%] max-w-5xl rounded-full transition-all duration-300 ${scrolled ? 'bg-white/5 backdrop-blur-3xl border border-white/10 shadow-2xl shadow-black/50 py-3' : 'bg-transparent py-4'
            }`}
        >
          <div className="px-6 md:px-8 flex items-center justify-between w-full">
            <a href="#" className="text-xl md:text-2xl font-black tracking-tighter text-white">
              RS<span className="text-blue-500">.</span>
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              {['Expertise', 'Projects', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-300">
                  {item}
                </a>
              ))}
            </div>

            {/* Resume / CTA Desktop */}
            <a href="#projects" className="hidden md:flex h-10 px-5 items-center justify-center rounded-full bg-white text-black text-sm font-bold hover:scale-105 active:scale-95 transition-all">
              View Work
            </a>

            {/* Mobile Toggle Button - Strictly topmost z-index to resolve stacking issue */}
            <button
              className="md:hidden relative z-[110] w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/10 text-white"
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
        </motion.nav>

        {/* Mobile Fullscreen Menu Fixed Wrapper */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
              className="fixed inset-0 z-[100] bg-[#050505]/95 backdrop-blur-3xl flex flex-col items-center justify-center gap-10"
            >
              {['Expertise', 'Projects', 'Contact'].map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + (i * 0.1), type: "spring" }}
                  className="text-4xl md:text-5xl font-black tracking-tight text-white hover:text-blue-400 transition-colors"
                >
                  {item}
                </motion.a>
              ))}
              <motion.a
                href="#projects"
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-8 px-8 py-4 rounded-full bg-white text-black font-bold text-lg"
              >
                View Work
              </motion.a>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-10 left-0 w-full flex justify-center gap-6 text-zinc-500"
              >
                <a href={`mailto:${personal_info.email}`}><Mail size={24} className="hover:text-white transition-colors" /></a>
                <a href={`tel:${personal_info.phone}`}><Phone size={24} className="hover:text-white transition-colors" /></a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hero Section */}
        <section id="hero" className="w-full min-h-[100svh] flex flex-col items-center justify-center pt-32 pb-20 px-4 md:px-8 max-w-6xl mx-auto relative overflow-hidden">

          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full flex flex-col items-center text-center mt-4 md:mt-0"
          >
            <div className="mb-6 md:mb-10 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex flex-wrap items-center justify-center gap-2 max-w-full">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
              <span className="text-xs md:text-sm font-medium text-zinc-300">
                {personal_info.availability} • <span className="text-zinc-500">{personal_info.notice_period}</span>
              </span>
            </div>

            <h1 className="text-[3rem] sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[8rem] font-black tracking-tighter leading-[1] text-white mb-6 w-full max-w-5xl">
              Software<br className="md:hidden" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-zinc-300">Engineering.</span><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-400 to-emerald-400">Elevated.</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed font-light mb-12 px-2">
              I'm <strong className="text-white font-medium">{personal_info.name}</strong>, a {personal_info.title} specializing in building premium, scalable applications from the ground up.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto px-4 sm:px-0">
              <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-bold text-base md:text-lg transition-transform hover:scale-105 flex items-center justify-center gap-2">
                <Mail size={18} />
                Work With Me
              </a>
              <a href="#expertise" className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-medium text-base md:text-lg transition-all hover:bg-white/10 flex items-center justify-center gap-2">
                Explore Expertise
              </a>
            </div>
          </motion.div>

          {/* Scroll Down Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 inset-x-0 hidden md:flex justify-center text-zinc-600"
          >
            <div className="w-8 h-14 rounded-full border-2 border-zinc-800 flex justify-center p-1.5 hover:border-zinc-600 transition-colors">
              <div className="w-1.5 h-3 bg-zinc-600 rounded-full" />
            </div>
          </motion.div>
        </section>

        {/* Bento About/Stats Section */}
        <section className="w-full px-4 md:px-8 py-24 md:py-32 max-w-7xl mx-auto relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8"
          >
            {/* Main Bio Card */}
            <motion.div variants={fadeUp} className="sm:col-span-2 md:col-span-2 bg-[#0A0A0A]/80 border border-white/10 backdrop-blur-md rounded-[2rem] p-8 md:p-12 flex flex-col justify-center relative overflow-hidden group">
              <div className="absolute top-[-20%] right-[-10%] p-8 opacity-5 group-hover:opacity-[0.08] group-hover:scale-110 transition-all duration-700 pointer-events-none">
                <Briefcase size={250} />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-white">About Me</h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-2xl relative z-10">
                {summary}
              </p>
            </motion.div>

            {/* Experience Card */}
            <motion.div variants={fadeUp} className="bg-[#0A0A0A]/80 border border-white/10 backdrop-blur-md rounded-[2rem] p-8 md:p-12 flex flex-col items-center justify-center text-center group hover:border-blue-500/30 transition-colors relative overflow-hidden">
              <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/5 transition-colors duration-500" />
              <div className="text-6xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-indigo-600 mb-2 group-hover:scale-110 transition-transform duration-500">
                {personal_info.experience_years}<span className="text-blue-500">+</span>
              </div>
              <div className="text-xs md:text-sm font-bold text-zinc-500 uppercase tracking-widest mt-2 relative z-10">
                Years of Excellence
              </div>
            </motion.div>

            {/* Location Card */}
            <motion.div variants={fadeUp} className="bg-[#0A0A0A]/80 border border-white/10 backdrop-blur-md rounded-[2rem] p-8 md:p-12 flex items-center gap-5 group hover:border-white/20 transition-colors text-left flex-row">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:-rotate-12 transition-transform duration-500">
                <MapPin className="text-emerald-400 w-6 h-6 md:w-8 md:h-8" />
              </div>
              <div>
                <div className="text-xs md:text-sm font-bold text-zinc-500 uppercase tracking-widest mb-1">Located In</div>
                <div className="text-lg md:text-xl font-semibold text-white">{personal_info.location}</div>
              </div>
            </motion.div>

            {/* Roles Marquee-Style Card */}
            <motion.div variants={fadeUp} className="sm:col-span-2 md:col-span-2 bg-[#0A0A0A]/80 border border-white/10 backdrop-blur-md rounded-[2rem] p-8 md:p-12 flex flex-col justify-center overflow-hidden">
              <div className="text-xs md:text-sm font-bold text-zinc-500 uppercase tracking-widest mb-4 md:mb-6">Core Focus Areas</div>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {roles.map(role => (
                  <span key={role} className="px-4 py-2 bg-black border border-white/10 shadow-inner rounded-full text-xs md:text-sm font-bold text-zinc-300">
                    {role}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Bento Expertise Section */}
        <section id="expertise" className="w-full px-4 md:px-8 py-24 md:py-32 max-w-7xl mx-auto relative z-10 border-t border-white/5">
          <motion.div {...fadeUp} className="mb-12 md:mb-16">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-white mb-6">Technical <span className="text-zinc-600">Arsenal.</span></h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 lg:gap-8"
          >
            {/* Frontend Big Card */}
            <motion.div variants={fadeUp} className="md:col-span-7 bg-gradient-to-br from-[#0A0A0A] to-[#111] border border-white/10 rounded-[2rem] p-8 md:p-12 relative overflow-hidden group hover:border-blue-500/30 transition-colors">
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-blue-500/20 transition-colors duration-500" />

              <div className="w-14 h-14 bg-blue-500/10 text-blue-400 rounded-2xl flex items-center justify-center mb-8 border border-blue-500/20">
                <LayoutGrid size={28} />
              </div>

              <h3 className="text-3xl font-bold text-white mb-4">Frontend Architecture</h3>
              <p className="text-zinc-400 text-base mb-10 max-w-md leading-relaxed font-light">
                Building pixel-perfect, highly responsive, and accessible user interfaces that engage and convert users.
              </p>

              <div className="flex flex-wrap gap-2 md:gap-3 mt-auto relative z-10">
                {technical_stack.frontend.map(tech => (
                  <span key={tech} className="px-3 md:px-4 py-1.5 md:py-2 bg-black border border-white/10 rounded-xl text-xs font-bold text-zinc-200 uppercase tracking-widest shadow-xl">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Backend Card */}
            <motion.div variants={fadeUp} className="md:col-span-5 bg-gradient-to-br from-[#0A0A0A] to-[#0A0A0A] border border-white/10 rounded-[2rem] p-8 md:p-12 relative overflow-hidden group hover:border-emerald-500/30 transition-colors">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:bg-emerald-500/10 transition-colors duration-500" />
              <div className="w-14 h-14 bg-emerald-500/10 text-emerald-400 rounded-2xl flex items-center justify-center mb-8 border border-emerald-500/20">
                <Database size={28} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Native & Backend</h3>
              <div className="flex flex-wrap gap-2 md:gap-3 relative z-10">
                {[...technical_stack.mobile, ...technical_stack.backend_integration].map(tech => (
                  <span key={tech} className="px-3 md:px-4 py-1.5 md:py-2 bg-black border border-white/10 rounded-xl text-xs font-bold text-zinc-200 uppercase tracking-widest shadow-xl">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Tools Card */}
            <motion.div variants={fadeUp} className="md:col-span-4 bg-[#0A0A0A] border border-white/10 rounded-[2rem] p-8 md:p-12 group hover:border-purple-500/30 transition-colors">
              <div className="w-14 h-14 bg-purple-500/10 text-purple-400 rounded-2xl flex items-center justify-center mb-8 border border-purple-500/20">
                <Cloud size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-6">Tools & Build</h3>
              <div className="flex flex-wrap gap-2">
                {technical_stack.tools.map(tech => (
                  <span key={tech} className="px-3 py-1.5 bg-black border border-white/10 rounded-lg text-xs font-bold text-zinc-300 uppercase tracking-widest">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Capabilities Card */}
            <motion.div variants={fadeUp} className="md:col-span-8 bg-[#0A0A0A] border border-white/10 rounded-[2rem] p-8 md:p-12 h-full flex flex-col justify-center">
              <h3 className="text-xl font-bold text-zinc-500 mb-8 uppercase tracking-widest text-xs">Core SaaS Capabilities</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
                {saas_capabilities.slice(0, 6).map((cap, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-zinc-600 shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base font-medium text-zinc-300">{cap}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Premium Portfolio Showcase */}
        <section id="projects" className="w-full px-4 md:px-8 py-24 md:py-32 max-w-7xl mx-auto border-t border-white/5">
          <motion.div {...fadeUp} className="mb-16 md:mb-32 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-white mb-6">Selected <span className="text-zinc-600">Works.</span></h2>
            <p className="text-base md:text-lg lg:text-xl text-zinc-400 max-w-2xl font-light">
              A curated collection of complete SaaS applications, highlighting engineering depth and user-centric design.
            </p>
          </motion.div>

          <div className="flex flex-col gap-16 md:gap-24 w-full">
            {projects.map((project, idx) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
                className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center w-full`}
              >
                {/* Project "Image" representation */}
                <div className="w-full lg:w-[55%] aspect-square md:aspect-[4/3] rounded-[2rem] md:rounded-[3rem] bg-gradient-to-br from-[#111] to-[#050505] p-3 md:p-5 border border-white/10 relative group overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors duration-500" />

                  <div className="w-full h-full bg-[#0a0a0a] rounded-[1.5rem] md:rounded-[2.5rem] border border-white/10 flex flex-col p-8 md:p-12 relative overflow-hidden z-10 transition-transform duration-700 group-hover:scale-[1.02]">
                    {/* Decorative subtle grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

                    <div className="flex items-center gap-2 mb-auto relative z-10">
                      <div className="w-3 h-3 rounded-full bg-rose-500/80 shadow-[0_0_10px_rgba(244,63,94,0.5)]" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80 shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                    </div>

                    <div className="flex-1 flex flex-col items-center justify-center text-center relative z-10 w-full px-2 py-4">
                      <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500 mb-4">{project.category}</h3>
                      <div className="text-sm md:text-base text-zinc-500 font-bold uppercase tracking-widest">{project.type}</div>
                    </div>

                    {/* Tech badges */}
                    <div className="w-full flex justify-center flex-wrap gap-2 md:gap-3 relative z-10 mt-auto pt-4">
                      {project.technologies.slice(0, 5).map(tech => (
                        <div key={tech} className="px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-black/80 backdrop-blur-xl border border-white/10 text-[10px] md:text-xs font-bold uppercase tracking-widest text-zinc-200 shadow-xl">
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="w-full lg:w-[45%] flex flex-col pt-4 lg:pt-0">
                  <div className="inline-flex px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 text-xs font-bold text-zinc-400 uppercase tracking-widest mb-6 w-max">
                    Case Study 0{idx + 1}
                  </div>

                  <h3 className="text-3xl md:text-5xl font-black text-white mb-6 md:mb-8 tracking-tight leading-tight">
                    {project.name}.
                  </h3>

                  <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-8 md:mb-12 font-light">
                    {project.description}
                  </p>

                  <div className="flex flex-col gap-4 mb-4">
                    <h4 className="text-xs font-bold text-zinc-600 uppercase tracking-widest">Key Features</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                      {project.features.slice(0, 4).map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-zinc-700 shrink-0 flex-none" />
                          <span className="text-sm md:text-base font-medium text-zinc-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Professional Experience Section */}
        <section id="experience" className="w-full py-24 md:py-48 px-6 md:px-12 relative z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 md:mb-24"
            >
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6">
                Professional <span className="text-zinc-600">Tenure.</span>
              </h2>
              <div className="h-[2px] w-24 bg-white/20" />
            </motion.div>

            <div className="space-y-12">
              {data.employment.map((job, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative grid lg:grid-cols-12 gap-8 p-8 md:p-12 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/[0.08] transition-colors"
                >
                  <div className="lg:col-span-4">
                    <div className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-2">{job.duration}</div>
                    <h3 className="text-3xl font-bold text-white mb-2">{job.company}</h3>
                    <div className="text-zinc-400 font-medium mb-4">{job.role}</div>
                    <div className="flex flex-wrap gap-2">
                       {job.key_skills.map((skill, idx) => (
                         <span key={idx} className="px-3 py-1 rounded-full bg-white/10 text-[10px] font-bold text-white uppercase tracking-widest">{skill}</span>
                       ))}
                    </div>
                  </div>
                  <div className="lg:col-span-8">
                    <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed">
                      {job.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Elite Contact Section */}
        <section id="contact" className="w-full py-24 md:py-48 px-4 sm:px-6 lg:px-8 border-t border-white/5 relative z-10 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[800px] max-h-[800px] rounded-full bg-blue-600/5 blur-[150px] pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center relative z-10"
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl xl:text-[7rem] font-black tracking-tighter text-white mb-8 md:mb-12 leading-[1.05]">
              Have an idea?<br />
              <span className="text-zinc-600">Let's build it.</span>
            </h2>

            <p className="text-lg md:text-2xl lg:text-3xl text-zinc-400 mb-12 md:mb-16 max-w-3xl mx-auto font-light leading-relaxed">
              Available for freelance opportunities. E-mail me directly to discuss your project requirements.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full px-4 sm:px-0">
              <a href={`mailto:${personal_info.email}`} className="w-full sm:w-auto h-16 md:h-20 px-10 md:px-14 bg-white text-black rounded-full font-bold text-lg md:text-xl flex items-center justify-center gap-3 hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(255,255,255,0.2)]">
                <Mail size={24} />
                Send Email
              </a>
            </div>

            <div className="mt-16 md:mt-24 text-zinc-600 font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-4">
              <span className="w-12 h-[1px] bg-zinc-800"></span>
              {personal_info.availability}
              <span className="w-12 h-[1px] bg-zinc-800"></span>
            </div>
          </motion.div>
        </section>

        {/* Minimal Footer */}
        <footer className="w-full py-10 md:py-12 px-6 md:px-12 border-t border-white/5 bg-[#050505] flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
          <div className="text-zinc-500 text-sm font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} {personal_info.name}.
          </div>
          <div className="flex gap-6 md:gap-10">
            <a href={`tel:${personal_info.phone}`} className="text-sm font-bold text-zinc-400 hover:text-white transition-colors uppercase tracking-widest">Call</a>
            <a href={`mailto:${personal_info.email}`} className="text-sm font-bold text-zinc-400 hover:text-white transition-colors uppercase tracking-widest">Email</a>
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-sm font-bold text-zinc-400 hover:text-white transition-colors uppercase tracking-widest">Top</a>
          </div>
        </footer>

      </div>
    </div>
  );
};

export default Portfolio1;
