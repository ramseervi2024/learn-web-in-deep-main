import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FreelancePortfolio as data } from './freelanceportfoliodata';
import { 
  Code2, Smartphone, Server, Cloud, Megaphone, 
  ArrowRight, CheckCircle2, Star, Plus, Minus,
  Mail, Phone, ExternalLink, Globe
} from 'lucide-react';

export default function FreelancePortfolio1() {
  const [openFaq, setOpenFaq] = useState(null);

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const getServiceIcon = (category) => {
    if (category.includes('Web')) return <Code2 size={36} className="text-blue-400" />;
    if (category.includes('Mobile')) return <Smartphone size={36} className="text-purple-400" />;
    if (category.includes('Backend')) return <Server size={36} className="text-emerald-400" />;
    if (category.includes('SaaS')) return <Cloud size={36} className="text-pink-400" />;
    if (category.includes('Marketing')) return <Megaphone size={36} className="text-orange-400" />;
    return <Globe size={36} className="text-cyan-400" />;
  };

  return (
    <div className="bg-[#030712] text-slate-200 min-h-screen font-sans selection:bg-blue-500/30 overflow-hidden">
      
      {/* NOISE & GRID BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]" 
           style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
      <div className="fixed inset-0 pointer-events-none z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* HEADER */}
      <nav className="fixed w-full top-0 z-50 bg-[#030712]/80 backdrop-blur-xl border-b border-white/5 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center relative z-10">
          <div className="text-2xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">
            {data.brand.name}
          </div>
          <div className="hidden md:flex gap-8 text-sm font-semibold tracking-wide text-slate-400">
            <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
            <a href="#work" className="hover:text-blue-400 transition-colors">Work</a>
            <a href="#pricing" className="hover:text-blue-400 transition-colors">Pricing</a>
          </div>
          <a href="#contact" className="px-5 py-2 rounded-full relative overflow-hidden group bg-blue-600/20 border border-blue-500/50 hover:bg-blue-600 hover:border-blue-500 transition-all text-blue-400 hover:text-white font-medium text-sm">
            <span className="relative z-10 w-full flex items-center gap-2">Get in Touch <ArrowRight size={16} /></span>
          </a>
        </div>
      </nav>

      <main className="relative z-10">
        
        {/* HERO SECTION */}
        <section className="relative pt-48 pb-20 px-6 min-h-[95vh] flex flex-col justify-center items-center text-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse" />
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
          
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="relative z-10 max-w-5xl mx-auto">
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-300 text-sm font-semibold mb-8 backdrop-blur-sm shadow-[0_0_20px_rgba(59,130,246,0.15)]">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping"></span>
              {data.brand.tagline}
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[1.05] tracking-tighter">
              We design & build <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-indigo-400 to-purple-500">
                {data.hero.title}
              </span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-xl md:text-2xl text-slate-400/90 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              {data.brand.description}
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <a href="#contact" className="px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:bg-slate-200 transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 flex items-center gap-2">
                {data.hero.cta_primary} <ArrowRight size={20} />
              </a>
              <a href="#work" className="px-8 py-4 rounded-full border border-slate-700/50 bg-slate-800/20 backdrop-blur-sm text-white font-bold text-lg hover:bg-slate-800/50 transition-all flex items-center gap-2 hover:scale-105 active:scale-95">
                {data.hero.cta_secondary}
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* LOGO MARQUEE (Pseudo) */}
        <div className="py-10 border-y border-white/5 overflow-hidden bg-white/[0.01]">
          <div className="flex gap-16 animate-[pulse_4s_ease-in-out_infinite] justify-center opacity-40">
            {data.technology_stack.frontend.concat(data.technology_stack.backend).map((tech, i) => (
              <div key={i} className="text-xl font-bold uppercase tracking-widest text-slate-500">{tech}</div>
            ))}
          </div>
        </div>

        {/* STATS */}
        <section className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {data.stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring" }}
                className="text-center p-8 rounded-3xl bg-slate-900/40 border border-slate-800/50 backdrop-blur-sm hover:border-blue-500/30 transition-colors"
              >
                <div className="text-5xl md:text-6xl font-black mb-3 text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500">{stat.value}</div>
                <div className="text-sm text-slate-400 font-semibold uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="py-32 px-6 relative bg-slate-950/50">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">Capabilities <span className="text-blue-500">.</span></h2>
              <p className="text-xl text-slate-400 max-w-2xl font-light">Comprehensive digital product development covering the entire software lifecycle.</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.services.map((service, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 pb-10 rounded-[2rem] bg-slate-900 border border-slate-800/80 hover:border-blue-500/50 hover:bg-slate-800/50 transition-all duration-300 group hover:-translate-y-2 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10"
                >
                  <div className="w-20 h-20 rounded-3xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue-900/20 transition-all duration-500 shadow-inner">
                    {getServiceIcon(service.category)}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-50">{service.category}</h3>
                  <p className="text-slate-400 mb-8 leading-relaxed font-light">{service.description}</p>
                  <ul className="space-y-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-slate-300 font-medium">
                        <CheckCircle2 size={18} className="text-blue-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="work" className="py-32 px-6 border-y border-white/5 bg-[#030712] relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/5 to-transparent pointer-events-none" />
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="text-center mb-24"
            >
              <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">Our Work <span className="text-purple-500">.</span></h2>
              <p className="text-xl text-slate-400 font-light max-w-2xl mx-auto">Real-world problems solved with elegant code and beautiful design.</p>
            </motion.div>

            <div className="space-y-16">
              {data.completed_projects.map((project, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="rounded-[2.5rem] bg-gradient-to-br from-slate-800/50 to-slate-900 p-1 group hover:from-blue-600/30 hover:to-purple-600/30 transition-colors duration-500"
                >
                  <div className="p-8 md:p-14 rounded-[2.3rem] bg-[#050b14] flex flex-col lg:flex-row gap-12 lg:items-stretch h-full">
                    
                    <div className="flex-1 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-6">
                        <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold tracking-wider uppercase border border-blue-500/20">
                          {project.type}
                        </span>
                      </div>
                      
                      <h3 className="text-4xl md:text-5xl font-black mb-6 tracking-tight group-hover:text-blue-400 transition-colors">{project.project_name}</h3>
                      <p className="text-slate-400 mb-10 text-lg md:text-xl font-light leading-relaxed">{project.description}</p>
                      
                      <div className="grid sm:grid-cols-2 gap-8 mb-10 p-6 rounded-2xl bg-slate-900/50 border border-slate-800/50">
                        <div>
                          <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3 flex items-center gap-2"><Minus size={14}/> Problem</div>
                          <div className="text-slate-300 font-light">{project.problem}</div>
                        </div>
                        <div>
                          <div className="text-xs font-bold uppercase tracking-widest text-emerald-500 mb-3 flex items-center gap-2"><Plus size={14}/> Solution</div>
                          <div className="text-slate-300 font-light">{project.solution}</div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tech_stack.map((tech, idx) => (
                          <span key={idx} className="px-4 py-1.5 rounded-xl bg-slate-900 text-sm font-medium text-slate-300 border border-slate-800">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="lg:w-[45%] rounded-[1.5rem] bg-slate-900 border border-slate-800 flex flex-col overflow-hidden relative group/img transform transition-transform duration-500 group-hover:scale-[1.02] shadow-2xl min-h-[400px]">
                       <div className="h-10 bg-slate-950 border-b border-slate-800 flex items-center px-4 gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                       </div>
                       <div className="flex-1 p-8 grid place-items-center relative">
                          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.5)_0,transparent_70%)] group-hover/img:opacity-40 transition-opacity duration-700"/>
                          <div className="text-center relative z-10">
                            <ExternalLink size={64} className="text-slate-700 mx-auto mb-6 group-hover/img:text-blue-500 group-hover/img:scale-110 transition-all duration-500" />
                            <div className="text-xl font-bold tracking-tight text-white mb-2">Live Preview</div>
                            <div className="text-slate-500 font-medium">{project.project_name.toLowerCase().replace(/ /g, '')}.com</div>
                          </div>
                          
                          {/* Animated metrics overlay */}
                          <div className="absolute bottom-6 right-6 p-4 rounded-xl bg-slate-950/80 backdrop-blur border border-slate-800 translate-y-4 opacity-0 group-hover/img:translate-y-0 group-hover/img:opacity-100 transition-all duration-300 delay-100">
                            <div className="text-emerald-400 font-bold text-sm flex items-center gap-2">
                              {project.result[0]}
                            </div>
                          </div>
                       </div>
                    </div>

                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
               <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">Client Trust <span className="text-emerald-400">.</span></h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {data.testimonials.map((test, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="p-10 rounded-3xl bg-slate-900/50 border border-slate-800 relative group"
                >
                  <div className="absolute -top-4 -left-4 text-7xl text-slate-800 font-serif leading-none opacity-50 select-none group-hover:text-blue-500/20 transition-colors">"</div>
                  <div className="flex gap-1 text-yellow-500 mb-8 mt-2 relative z-10">
                    {[...Array(test.rating)].map((_, idx) => <Star key={idx} fill="currentColor" size={20} />)}
                  </div>
                  <p className="text-xl md:text-2xl font-light text-slate-300 mb-8 leading-relaxed">
                    {test.feedback}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center font-bold text-slate-400 text-sm">
                      {test.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-white text-lg">{test.name}</div>
                      <div className="text-blue-400 text-sm">{data.brand.name} Client</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* WORKFLOW */}
        <section className="py-32 px-6 bg-blue-900/5 border-y border-blue-900/20 relative overflow-hidden">
           <div className="max-w-7xl mx-auto relative z-10">
              <div className="text-center mb-20">
                 <h2 className="text-5xl font-black mb-6 tracking-tight">How We Build</h2>
              </div>
              <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                 {data.workflow.map((step, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-4 group"
                    >
                       <div className="flex flex-col items-center">
                          <div className="w-14 h-14 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center font-black text-xl text-slate-500 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 transition-all shadow-lg">
                            {i+1}
                          </div>
                          <div className="mt-4 font-bold text-sm text-slate-300 group-hover:text-blue-400 transition-colors">{step}</div>
                       </div>
                       {i !== data.workflow.length - 1 && (
                         <div className="w-8 md:w-16 h-px bg-slate-800 -mt-8 hidden sm:block"></div>
                       )}
                    </motion.div>
                 ))}
              </div>
           </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="text-center mb-24"
            >
              <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">Investment <span className="text-pink-500">.</span></h2>
              <p className="text-xl text-slate-400 font-light max-w-2xl mx-auto">Transparent models tailored to maximize your ROI.</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 items-end">
              {data.pricing.map((tier, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, type: 'spring' }}
                  className={`p-10 rounded-[2.5rem] border relative overflow-hidden group ${i === 1 ? 'border-blue-500/50 bg-slate-900/80 shadow-[0_0_50px_rgba(37,99,235,0.1)] pb-12 z-10 transform md:-translate-y-4' : 'border-slate-800/80 bg-slate-900/40'}`}
                >
                  {i === 1 && (
                     <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                  )}
                  {i === 1 && <div className="text-blue-400 text-sm font-bold tracking-widest uppercase mb-6 inline-block bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/20">Most Popular</div>}
                  {i !== 1 && <div className="h-4 mb-6"></div>}
                  
                  <h3 className="text-2xl font-bold mb-4 text-white hover:text-blue-400 transition-colors">{tier.plan}</h3>
                  <div className="flex items-baseline gap-2 mb-10">
                    <span className="text-5xl font-black tracking-tighter">{tier.price}</span>
                  </div>
                  
                  <ul className="space-y-5 mb-10">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-4 text-slate-300 font-medium">
                        <CheckCircle2 size={20} className={i === 1 ? "text-blue-400" : "text-slate-600"} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-5 rounded-2xl font-bold text-lg transition-all active:scale-95 ${i === 1 ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-xl shadow-blue-600/20' : 'bg-slate-800 hover:bg-slate-700 text-white'}`}>
                    Start Project
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ & CONTACT */}
        <section id="contact" className="py-32 px-6 border-t border-white/5 bg-gradient-to-b from-[#030712] to-slate-950">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
             
             {/* Left: Contact */}
             <div>
               <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight">Let's Talk <span className="text-yellow-500">.</span></h2>
               <p className="text-xl text-slate-400 font-light mb-12">Share your project details, and our technical leads will get back to you within 24 hours.</p>
               
               <div className="space-y-6 mb-12">
                 <a href={`mailto:${data.contact.email}`} className="flex items-center gap-6 p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-800/50 transition-all group">
                   <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                     <Mail className="text-blue-400 group-hover:scale-110 transition-transform" size={28} />
                   </div>
                   <div>
                     <div className="text-sm font-bold tracking-widest uppercase text-slate-500 mb-1">Email Us</div>
                     <div className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">{data.contact.email}</div>
                   </div>
                 </a>
                 <div className="flex items-center gap-6 p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-purple-500/50 hover:bg-slate-800/50 transition-all group cursor-pointer">
                   <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center">
                     <Phone className="text-purple-400 group-hover:scale-110 transition-transform" size={28} />
                   </div>
                   <div>
                     <div className="text-sm font-bold tracking-widest uppercase text-slate-500 mb-1">Call Us</div>
                     <div className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">{data.contact.phone}</div>
                   </div>
                 </div>
               </div>
             </div>

             {/* Right: FAQ */}
             <div className="pt-4 lg:pt-0">
               <h3 className="text-3xl font-bold mb-8 text-white">Common Questions</h3>
               <div className="space-y-4">
                 {data.faq.map((q, i) => (
                    <div key={i} className="rounded-3xl border border-slate-800 bg-slate-900/50 overflow-hidden">
                       <button 
                         onClick={() => setOpenFaq(openFaq === i ? null : i)}
                         className="w-full text-left p-6 flex justify-between items-center bg-slate-900 hover:bg-slate-800 transition-colors focus:outline-none"
                       >
                         <span className="font-semibold text-lg pr-4">{q.question}</span>
                         <Plus className={`transform transition-transform duration-300 text-blue-500 shrink-0 ${openFaq === i ? 'rotate-45' : ''}`} />
                       </button>
                       <AnimatePresence>
                         {openFaq === i && (
                           <motion.div 
                             initial={{ height: 0, opacity: 0 }}
                             animate={{ height: "auto", opacity: 1 }}
                             exit={{ height: 0, opacity: 0 }}
                             className="px-6 pb-6 text-slate-400 font-light"
                           >
                             <div className="pt-2 border-t border-slate-800/50 mt-4">{q.answer}</div>
                           </motion.div>
                         )}
                       </AnimatePresence>
                    </div>
                 ))}
               </div>
             </div>

          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/5 bg-[#010408] pt-24 pb-12 px-6 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
             <div className="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 mb-2">
               {data.footer.brand}
             </div>
             <div className="text-slate-500 font-light">{data.footer.tagline}</div>
          </div>
          <div className="text-slate-600 text-sm font-medium tracking-wide">
            {data.footer.copyright}
          </div>
        </div>
      </footer>
    </div>
  );
}
