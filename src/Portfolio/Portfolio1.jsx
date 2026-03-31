import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioprofile } from './portfoliodata';
import { 
  Mail, Phone, MapPin, Calendar, 
  ExternalLink, Code, Database, Server, 
  Cloud, Wrench, Briefcase, Layers, 
  Globe, Award, ChevronDown, CheckCircle2 
} from 'lucide-react';

const Portfolio1 = () => {
  const { 
    personal_info, summary, roles, core_expertise, 
    technical_stack, saas_capabilities, services, projects, achievements 
  } = portfolioprofile;

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.1 }
  };

  const itemAnim = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* Background Glow */}
      <div className="fixed inset-0 z-0 pointer-events-none">
         <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[120px]" />
         <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-600/10 blur-[120px]" />
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed w-full top-0 z-50 glass border-b border-white/5 bg-slate-950/50 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold text-gradient"
            >
              RS.
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex gap-8"
            >
              {['About', 'Expertise', 'Projects', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="nav-link text-sm font-medium">
                  {item}
                </a>
              ))}
            </motion.div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center justify-center pt-20 section-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-blue-500/30 text-blue-400 text-sm font-medium mb-6"
              >
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
                {personal_info.availability} • {personal_info.notice_period}
              </motion.div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
                Hi, I'm <br />
                <span className="text-gradient">{personal_info.name}</span>
              </h1>
              <h2 className="text-xl md:text-3xl font-medium text-slate-400 mb-6">
                {personal_info.title}
              </h2>
              <p className="text-lg text-slate-500 mb-8 max-w-xl leading-relaxed">
                {personal_info.headline}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="#projects" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium transition-all shadow-lg shadow-blue-500/25">
                  View Projects
                </a>
                <a href="#contact" className="px-8 py-4 glass hover:bg-white/5 border border-white/10 rounded-xl font-medium transition-all text-white relative overflow-hidden group">
                  <span className="relative z-10 hover:text-white transition-colors">Contact Me</span>
                  <div className="absolute inset-0 bg-white/5 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative hidden md:block"
            >
              <div className="aspect-square rounded-full overflow-hidden border border-white/10 glass p-2 max-w-md mx-auto relative group">
                <div className="w-full h-full bg-slate-900 rounded-full flex flex-col items-center justify-center p-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl" />
                  
                  {/* Decorative Elements inside circle */}
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border-[40px] border-slate-800/20 rounded-full" />
                  
                  <Code size={72} className="text-blue-400 mb-6 text-opacity-[0.8] group-hover:text-opacity-100 transition-opacity duration-500 group-hover:scale-110" />
                  <div className="text-center z-10">
                    <div className="text-5xl font-black text-white mb-2 tracking-tighter">{personal_info.experience_years}<span className="text-blue-500">+</span></div>
                    <div className="text-slate-400 font-medium uppercase tracking-widest text-xs">Years Building<br/>SaaS Solutions</div>
                  </div>
                </div>
              </div>
              
              {/* Floating badges */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                className="absolute -top-4 right-8 glass p-4 rounded-2xl border border-white/10 shadow-xl backdrop-blur-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                    <Cloud size={24} className="text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">AWS Deployments</div>
                    <div className="text-xs text-slate-400">Production Ready</div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut" }}
                className="absolute -bottom-4 left-8 glass p-4 rounded-2xl border border-white/10 shadow-xl backdrop-blur-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                    <Globe size={24} className="text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Full-Stack</div>
                    <div className="text-xs text-slate-400">Mobile & Web</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
          
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-600"
          >
            <ChevronDown size={32} />
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="section-container border-t border-white/5 py-32 relative">
          <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />
          
          <motion.div {...fadeIn} className="max-w-5xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-5xl font-black mb-12 text-center">About <span className="text-gradient">Me</span></h2>
            
            <div className="glass p-8 md:p-14 rounded-[2.5rem] relative overflow-hidden ring-1 ring-white/10 shadow-2xl">
              <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                <Briefcase size={200} />
              </div>
              
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed pt-4 font-light relative z-10">
                {summary}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 mt-12 border-t border-white/10 relative z-10">
                <div className="flex flex-col gap-2 p-6 glass rounded-2xl border border-white/5 group hover:border-blue-500/30 transition-colors">
                  <MapPin className="text-blue-400 mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Location</div>
                  <div className="font-medium text-lg">{personal_info.location}</div>
                </div>
                <div className="flex flex-col gap-2 p-6 glass rounded-2xl border border-white/5 group hover:border-blue-500/30 transition-colors">
                  <Briefcase className="text-blue-400 mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Experience</div>
                  <div className="font-medium text-lg">{personal_info.experience_years}+ Years</div>
                </div>
                <div className="flex flex-col gap-2 p-6 glass rounded-2xl border border-white/5 group hover:border-emerald-500/30 transition-colors bg-emerald-500/5">
                  <Calendar className="text-emerald-400 mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Availability</div>
                  <div className="font-medium text-lg text-emerald-400">{personal_info.availability}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Expertise / Tech Stack Section */}
        <section id="expertise" className="section-container border-t border-white/5 py-32 relative">
          <div className="absolute top-[40%] left-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-600/5 blur-[120px] pointer-events-none" />
          
          <motion.div {...fadeIn} className="text-center mb-16 relative z-10">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Technical <span className="text-gradient">Arsenal</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">Comprehensive toolkit for building scalable applications from frontend to cloud deployment.</p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
          >
            {/* Frontend */}
            <motion.div variants={itemAnim} className="glass p-10 rounded-[2rem] border border-white/10 hover:border-blue-500/50 transition-colors group">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-8 border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                <Code size={28} className="text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-6">Frontend & Mobile</h3>
              <div className="flex flex-wrap gap-2.5">
                {technical_stack.frontend.map(tech => (
                  <span key={tech} className="skill-badge bg-slate-800/50 hover:bg-blue-500/20 border border-white/5 hover:border-blue-500/50">{tech}</span>
                ))}
              </div>
            </motion.div>

            {/* Backend */}
            <motion.div variants={itemAnim} className="glass p-10 rounded-[2rem] border border-white/10 hover:border-emerald-500/50 transition-colors group">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-8 border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors">
                <Server size={28} className="text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold mb-6">Backend & Database</h3>
              <div className="flex flex-wrap gap-2.5">
                {[...technical_stack.backend, ...technical_stack.database].map(tech => (
                  <span key={tech} className="skill-badge bg-slate-800/50 hover:bg-emerald-500/20 border border-white/5 hover:border-emerald-500/50">{tech}</span>
                ))}
              </div>
            </motion.div>

            {/* Cloud & Tools */}
            <motion.div variants={itemAnim} className="glass p-10 rounded-[2rem] border border-white/10 hover:border-purple-500/50 transition-colors group">
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-8 border border-purple-500/20 group-hover:bg-purple-500/20 transition-colors">
                <Cloud size={28} className="text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold mb-6">Cloud & Tools</h3>
              <div className="flex flex-wrap gap-2.5">
                {[...technical_stack.cloud_and_deployment, ...technical_stack.tools].map(tech => (
                  <span key={tech} className="skill-badge bg-slate-800/50 hover:bg-purple-500/20 border border-white/5 hover:border-purple-500/50">{tech}</span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div {...fadeIn} className="mt-32 max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold mb-12 text-center text-white">Core Capabilities</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {saas_capabilities.slice(0,8).map((cap, idx) => (
                <div key={idx} className="flex items-start gap-4 p-5 glass rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all hover:-translate-y-1">
                  <div className="mt-0.5 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={14} className="text-blue-400" />
                  </div>
                  <span className="text-sm font-medium text-slate-300 leading-snug">{cap}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section-container border-t border-white/5 py-32 relative">
          <motion.div {...fadeIn} className="text-center mb-20 relative z-10">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Featured <span className="text-gradient">Projects</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">A showcase of complete SaaS and mobile applications built from scratch.</p>
          </motion.div>

          {/* Special larger cards for projects to highlight them */}
          <div className="grid lg:grid-cols-2 gap-10">
            {projects.map((project, idx) => (
              <motion.div 
                key={project.name}
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (idx % 2) * 0.1 }}
                className="project-card flex flex-col h-full bg-slate-900 border border-white/10 rounded-[2.5rem] overflow-hidden group hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="p-10 flex-grow relative">
                  
                  {/* Decorative faint icon in bg */}
                  <div className="absolute top-10 right-10 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Layers size={120} />
                  </div>

                  <div className="flex justify-between items-start mb-8 relative z-10">
                    <div>
                      <div className="inline-block px-4 py-1.5 bg-blue-500/10 text-blue-400 text-xs font-bold rounded-full mb-5 uppercase tracking-wider">
                        {project.category}
                      </div>
                      <h3 className="text-3xl font-black text-white mb-2">{project.name}</h3>
                      <div className="text-sm font-medium text-emerald-400">{project.type}</div>
                    </div>
                  </div>
                  
                  <p className="text-slate-300 text-base mb-8 leading-relaxed relative z-10">
                    {project.description}
                  </p>

                  <div className="mb-8 relative z-10">
                    <ul className="space-y-3">
                      {project.features.slice(0,3).map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-400">
                          <CheckCircle2 size={16} className="text-blue-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-8 border-t border-white/10 bg-slate-950/80 backdrop-blur-md">
                  <div className="flex flex-wrap gap-2.5">
                    {project.technologies.slice(0, 5).map(tech => (
                      <span key={tech} className="text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 bg-slate-800 rounded-full text-slate-300 border border-white/5">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 bg-slate-800 rounded-full text-slate-300 border border-white/5">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section-container border-t border-white/5 py-32 md:py-48 mb-10 relative overflow-hidden">
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[80%] rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto glass rounded-[3rem] p-12 md:p-20 text-center relative z-10 border border-blue-500/20 shadow-2xl shadow-blue-500/10"
          >
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">Let's Build Something <br className="hidden md:block" /><span className="text-gradient">Amazing</span></h2>
            <p className="text-xl text-slate-400 mb-14 max-w-3xl mx-auto leading-relaxed">
              Ready to turn your idea into a scalable SaaS application? I'm currently available for new opportunities and freelance projects. Let's discuss your next big thing.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a href={`mailto:${personal_info.email}`} className="flex items-center justify-center gap-3 px-8 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold transition-all shadow-xl shadow-blue-500/25 group text-lg border border-blue-400/20">
                <Mail className="group-hover:scale-110 transition-transform" />
                {personal_info.email}
              </a>
              <a href={`tel:${personal_info.phone}`} className="flex items-center justify-center gap-3 px-8 py-5 glass hover:bg-white/5 border border-white/10 rounded-2xl font-bold transition-all text-white group text-lg">
                <Phone className="group-hover:scale-110 transition-transform text-emerald-400" />
                {personal_info.phone}
              </a>
            </div>
            
            <div className="mt-16 flex items-center justify-center gap-2 text-slate-500 font-medium tracking-widest uppercase text-sm">
              <span className="w-12 h-[1px] bg-slate-700"></span>
              {personal_info.availability}
              <span className="w-12 h-[1px] bg-slate-700"></span>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/5 py-10 text-center text-slate-500 relative z-10 bg-slate-950">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 font-medium">
            <p>
              © {new Date().getFullYear()} {personal_info.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/5">
              <span>Designed & Built with</span>
              <span className="text-blue-400 font-bold tracking-wide">React</span>
              <span className="text-slate-600">+</span>
              <span className="text-emerald-400 font-bold tracking-wide">Tailwind</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio1;
