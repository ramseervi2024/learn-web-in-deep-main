import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FreelancePortfolio as data } from './freelanceportfoliodata';
import { 
  ArrowUpRight, ArrowRight, Minus, Plus, 
  TerminalSquare, Layout, ServerCrash, Shapes, 
  Activity, CloudCog, Check, Star 
} from 'lucide-react';

export default function FreelancePortfolio2() {
  const [activeFaq, setActiveFaq] = useState(null);
  
  // Custom reveal anims
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const getServiceIcon = (category) => {
    if (category.includes('Web')) return <Layout size={24} strokeWidth={1.5} />;
    if (category.includes('Mobile')) return <TerminalSquare size={24} strokeWidth={1.5} />;
    if (category.includes('Backend')) return <ServerCrash size={24} strokeWidth={1.5} />;
    if (category.includes('SaaS')) return <Shapes size={24} strokeWidth={1.5} />;
    if (category.includes('Marketing')) return <Activity size={24} strokeWidth={1.5} />;
    return <CloudCog size={24} strokeWidth={1.5} />;
  };

  return (
    <div className="bg-[#FAF9F6] text-zinc-900 min-h-screen font-sans selection:bg-black selection:text-white pb-20 overflow-hidden">
      
      {/* NAV */}
      <nav className="fixed w-full top-0 z-50 bg-[#FAF9F6]/80 backdrop-blur-xl border-b border-zinc-200/80 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-xl font-bold tracking-tight text-zinc-900">
            {data.brand.name}.
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-500">
            <a href="#services" className="hover:text-zinc-900 transition-colors">Expertise</a>
            <a href="#work" className="hover:text-zinc-900 transition-colors">Projects</a>
            <a href="#pricing" className="hover:text-zinc-900 transition-colors">Pricing</a>
          </div>
          <a href="#contact" className="px-5 py-2.5 rounded-full bg-zinc-900 text-white font-medium text-sm hover:bg-zinc-800 transition-all flex items-center gap-2 hover:scale-105 active:scale-95 shadow-lg shadow-zinc-900/20">
            Let's Talk <ArrowUpRight size={16} />
          </a>
        </div>
      </nav>

      <main className="pt-32 pb-20">
        
        {/* HERO */}
        <section className="px-6 py-20 lg:py-32 max-w-7xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <motion.div variants={fadeUp} className="text-xs font-bold tracking-widest uppercase text-zinc-700 mb-8 border border-zinc-300 inline-block px-4 py-1.5 rounded-full bg-white shadow-sm">
                {data.brand.tagline}
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-7xl md:text-[7rem] font-medium tracking-tighter leading-[0.95] mb-6 text-zinc-900">
                {data.hero.title}
                <span className="text-zinc-600 block mt-2 tracking-tighter">Redefined.</span>
              </motion.h1>
            </div>
            <div className="lg:col-span-4 pb-4">
              <motion.p variants={fadeUp} className="text-xl md:text-2xl text-zinc-600 font-light mb-8 leading-relaxed">
                {data.hero.subtitle}
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="px-8 py-4 bg-zinc-900 text-white rounded-full font-medium hover:bg-zinc-800 transition-all text-center hover:scale-105 active:scale-95 shadow-xl shadow-zinc-900/10">
                  {data.hero.cta_primary}
                </a>
                <a href="#work" className="px-8 py-4 bg-white border border-zinc-200 text-zinc-900 rounded-full font-medium hover:bg-zinc-50 transition-all text-center hover:scale-105 active:scale-95 shadow-sm">
                  {data.hero.cta_secondary}
                </a>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* LOGO STRIP */}
        <div className="border-y border-zinc-200 bg-white py-12 px-6 overflow-hidden relative">
           <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
           <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
           <div className="flex gap-16 animate-[marquee_30s_linear_infinite] whitespace-nowrap opacity-60">
              {[...data.technology_stack.frontend, ...data.technology_stack.backend, ...data.technology_stack.cloud, ...data.technology_stack.frontend, ...data.technology_stack.backend, ...data.technology_stack.cloud].map((tech, i) => (
                 <span key={i} className="text-2xl font-bold uppercase tracking-widest text-zinc-500">{tech}</span>
              ))}
           </div>
           <style>{`
             @keyframes marquee {
               0% { transform: translateX(0); }
               100% { transform: translateX(-50%); }
             }
           `}</style>
        </div>

        {/* STATS */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16">
            {data.stats.map((stat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.9 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="border-l border-zinc-300 pl-6 hover:border-zinc-900 transition-colors duration-500 cursor-default"
              >
                <div className="text-5xl md:text-[4rem] font-medium tracking-tighter text-zinc-900 mb-2">{stat.value}</div>
                <div className="text-sm font-semibold uppercase tracking-widest text-zinc-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* BENTO SERVICES */}
        <section id="services" className="py-32 px-6 bg-white border-y border-zinc-200">
           <div className="max-w-7xl mx-auto">
              <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }} className="mb-20">
                 <h2 className="text-5xl md:text-6xl font-medium tracking-tight mb-6 text-zinc-900">Expertise.</h2>
                 <p className="text-xl md:text-2xl text-zinc-500 font-light max-w-2xl">Tailored technical solutions engineered to perfection.</p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {data.services.map((service, i) => (
                   <motion.div 
                     key={i}
                     initial={{ opacity: 0, scale: 0.95 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true, margin: "-50px" }}
                     transition={{ delay: i*0.1, duration: 0.5 }}
                     className="bg-[#FAF9F6] p-10 rounded-[2rem] border border-zinc-200 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-500 group flex flex-col"
                   >
                     <div className="w-14 h-14 bg-white rounded-2xl border border-zinc-200 flex items-center justify-center mb-10 group-hover:bg-zinc-900 group-hover:text-white transition-colors duration-500 shadow-sm">
                       {getServiceIcon(service.category)}
                     </div>
                     <h3 className="text-2xl font-medium mb-4 text-zinc-900">{service.category}</h3>
                     <p className="text-zinc-500 font-light mb-8 line-clamp-3 leading-relaxed flex-1">{service.description}</p>
                     
                     <div className="space-y-3 pt-6 border-t border-zinc-200/80">
                       {service.features.slice(0, 3).map((f, idx) => (
                         <div key={idx} className="flex gap-3 text-sm font-medium text-zinc-600">
                           <Check size={18} className="text-zinc-900 shrink-0" />
                           {f}
                         </div>
                       ))}
                     </div>
                   </motion.div>
                 ))}
              </div>
           </div>
        </section>

        {/* PROJECTS */}
        <section id="work" className="py-32 px-6 max-w-7xl mx-auto">
           <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }} className="mb-20">
              <h2 className="text-5xl md:text-6xl font-medium tracking-tight mb-6 text-zinc-900">Selected Works.</h2>
              <div className="flex justify-between items-end">
                 <p className="text-xl md:text-2xl text-zinc-500 font-light max-w-3xl">A showcase of our recent high-impact deployments solving real business problems.</p>
              </div>
           </motion.div>

           <div className="space-y-32">
             {data.completed_projects.map((project, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="group"
                >
                   <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                     
                     {/* IMAGE MOCKUP */}
                     <div className={`order-2 ${i % 2 === 1 ? 'lg:order-1' : 'lg:order-2'} aspect-[4/3] rounded-[2rem] bg-zinc-100 border border-zinc-200 overflow-hidden relative shadow-lg group-hover:shadow-2xl transition-shadow duration-700`}>
                        <div className="absolute top-4 left-4 right-4 h-8 bg-white rounded-t-lg border-b border-zinc-200 flex items-center px-4 gap-2">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                        </div>
                        <div className="absolute inset-0 top-12 flex items-center justify-center p-12 overflow-hidden">
                           <div className="w-full h-full bg-white rounded-xl shadow-sm border border-zinc-200 flex items-center justify-center group-hover:scale-[1.03] transition-transform duration-700 ease-[0.16,1,0.3,1] relative overflow-hidden">
                             <div className="absolute inset-0 bg-zinc-50 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                             <div className="text-center relative z-10">
                               <ArrowUpRight size={48} className="mx-auto mb-4 text-zinc-300 group-hover:text-zinc-900 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-500" />
                               <span className="font-medium text-zinc-400 group-hover:text-zinc-600 transition-colors">Live Preview</span>
                             </div>
                           </div>
                        </div>
                     </div>

                     {/* TEXT */}
                     <div className={`order-1 ${i % 2 === 1 ? 'lg:order-2' : 'lg:order-1'} flex flex-col justify-center`}>
                        <div className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-6 flex items-center gap-2">
                          <span className="w-8 h-px bg-zinc-300 block"></span>
                          {project.type}
                        </div>
                        <h3 className="text-4xl md:text-5xl font-medium tracking-tight mb-8 text-zinc-900 group-hover:text-zinc-600 transition-colors duration-500">{project.project_name}</h3>
                        <p className="text-xl text-zinc-500 font-light mb-10 leading-relaxed">{project.description}</p>
                        
                        <div className="space-y-6 mb-10">
                          <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-200/80 hover:bg-white transition-colors">
                             <span className="font-bold text-xs text-zinc-900 uppercase tracking-widest block mb-3 flex items-center gap-2">
                               <Minus size={14}/> Problem
                             </span>
                             <span className="text-zinc-600 font-light text-[15px] leading-relaxed block">{project.problem}</span>
                          </div>
                          <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm border-l-4 border-l-zinc-900 hover:shadow-md transition-shadow">
                             <span className="font-bold text-xs text-zinc-900 uppercase tracking-widest block mb-3 flex items-center gap-2">
                               <Plus size={14}/> Solution
                             </span>
                             <span className="text-zinc-600 font-light text-[15px] leading-relaxed block">{project.solution}</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                           {project.tech_stack.map((tech, idx) => (
                              <span key={idx} className="px-3 py-1.5 rounded-lg bg-zinc-100 text-xs font-semibold uppercase tracking-wider text-zinc-600 border border-zinc-200">
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

        {/* WORKFLOW */}
        <section className="py-32 px-6 bg-zinc-900 text-white border-y border-zinc-800">
           <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
              <div className="lg:w-1/3">
                 <h2 className="text-5xl md:text-6xl font-medium tracking-tight mb-6">Process.</h2>
                 <p className="text-xl text-zinc-400 font-light mb-12 leading-relaxed">A streamlined approach guaranteeing delivery without compromise.</p>
                 <a href="#contact" className="inline-flex items-center gap-2 font-medium hover:text-zinc-300 transition-colors border-b border-white pb-1 group">
                   Start Your Journey <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                 </a>
              </div>
              <div className="lg:w-2/3 grid sm:grid-cols-2 gap-x-12 gap-y-16">
                 {data.workflow.map((step, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="relative pl-8 group"
                    >
                       <div className="absolute left-0 top-0 w-px h-full bg-zinc-800 group-hover:bg-zinc-600 transition-colors duration-500"></div>
                       <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
                       <div className="text-3xl font-light text-zinc-600 mb-2 transition-colors duration-500">0{i+1}.</div>
                       <div className="text-xl font-medium">{step}</div>
                    </motion.div>
                 ))}
              </div>
           </div>
        </section>

        {/* PRICING & FAQ */}
        <section id="pricing" className="py-32 px-6 max-w-7xl mx-auto">
           <div className="mb-24 text-center">
              <h2 className="text-5xl md:text-6xl font-medium tracking-tight mb-6 text-zinc-900">Investment.</h2>
              <p className="text-xl md:text-2xl text-zinc-500 font-light max-w-2xl mx-auto">Simple, transparent pricing to scale your business.</p>
           </div>
           
           <div className="grid lg:grid-cols-3 gap-8 mb-32 items-end">
              {data.pricing.map((tier, i) => (
                 <motion.div 
                   key={i} 
                   initial={{ opacity: 0, y: 40 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.15 }}
                   className={`p-10 rounded-[2.5rem] flex flex-col relative ${i === 1 ? 'bg-zinc-900 text-white shadow-2xl scale-100 lg:scale-[1.03] z-10 ring-1 ring-zinc-800' : 'bg-white border border-zinc-200'}`}
                  >
                    {i === 1 && <div className="text-zinc-400 text-xs font-bold tracking-widest uppercase mb-4 inline-flex items-center gap-2"><Star size={14}/> Most Popular</div>}
                    <div className={`text-2xl font-medium mb-4 ${i === 1 ? 'text-white' : 'text-zinc-900'}`}>{tier.plan}</div>
                    <div className={`text-6xl font-medium tracking-tighter mb-10 ${i === 1 ? 'text-white' : 'text-zinc-900'}`}>{tier.price}</div>
                    <div className="flex-1">
                       <ul className="space-y-5 mb-12">
                          {tier.features.map((f, idx) => (
                             <li key={idx} className="flex gap-4 text-sm items-center">
                                <Check size={18} className={i === 1 ? "text-zinc-400" : "text-zinc-900"} />
                                <span className={i === 1 ? "text-zinc-300 font-medium" : "text-zinc-600 font-medium"}>{f}</span>
                             </li>
                          ))}
                       </ul>
                    </div>
                    <button className={`w-full py-5 rounded-full font-bold transition-all active:scale-95 ${i === 1 ? 'bg-white text-zinc-900 hover:bg-zinc-200' : 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200'}`}>
                       Select {tier.plan}
                    </button>
                 </motion.div>
              ))}
           </div>

           <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl font-medium tracking-tight mb-10 text-center text-zinc-900">Frequently Asked Questions</h3>
              <div className="space-y-4">
                 {data.faq.map((q, i) => (
                    <div key={i} className="border border-zinc-200 rounded-2xl bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                       <button onClick={() => setActiveFaq(activeFaq === i ? null : i)} className="w-full text-left p-6 flex justify-between items-center bg-white hover:bg-zinc-50 transition-colors">
                          <span className="font-medium text-lg pr-8 text-zinc-900">{q.question}</span>
                          <div className={`w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center shrink-0 transition-colors ${activeFaq === i ? 'bg-zinc-900 text-white border-zinc-900' : 'bg-white text-zinc-400'}`}>
                             {activeFaq === i ? <Minus size={16} /> : <Plus size={16} />}
                          </div>
                       </button>
                       <AnimatePresence>
                          {activeFaq === i && (
                             <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="px-6 pb-6 text-zinc-500 font-light text-lg">
                                <div className="pt-4 border-t border-zinc-100 mt-2 leading-relaxed">{q.answer}</div>
                             </motion.div>
                          )}
                       </AnimatePresence>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-32 border-y border-zinc-200 bg-white overflow-hidden relative">
           <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
           <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
           <div className="flex gap-8 animate-[marquee_50s_linear_infinite] whitespace-nowrap px-4">
              {[...data.testimonials, ...data.testimonials, ...data.testimonials, ...data.testimonials].map((test, i) => (
                 <div key={i} className="inline-block w-[450px] whitespace-normal bg-[#FAF9F6] p-12 rounded-[2.5rem] border border-zinc-200 shadow-sm shrink-0">
                    <div className="flex gap-1 text-zinc-900 mb-8">
                       {[...Array(test.rating)].map((_, idx) => <Star key={idx} fill="currentColor" size={20} />)}
                    </div>
                    <p className="text-xl font-light text-zinc-600 mb-10 leading-relaxed italic">"{test.feedback}"</p>
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 bg-white rounded-full border border-zinc-200 flex items-center justify-center font-bold text-zinc-400">
                         {test.name.charAt(0)}
                       </div>
                       <div>
                         <div className="font-medium text-zinc-900">{test.name}</div>
                         <div className="text-sm text-zinc-500 font-light">Verified Client</div>
                       </div>
                    </div>
                 </div>
              ))}
           </div>
        </section>

        {/* CTA (CONTACT) */}
        <section id="contact" className="py-32 px-6 max-w-5xl mx-auto text-center">
           <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-zinc-900 text-white rounded-[3rem] p-12 md:p-24 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-5 blur-[120px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
              <h2 className="text-6xl md:text-[5rem] font-medium tracking-tighter mb-8 relative z-10 leading-[0.9]">Start your <br/> next project.</h2>
              <p className="text-xl text-zinc-400 font-light mb-12 relative z-10 max-w-xl mx-auto">Reach out directly via email or phone to discuss your vision.</p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
                 <a href={`mailto:${data.contact.email}`} className="px-8 py-5 rounded-full bg-white text-zinc-900 font-bold hover:bg-zinc-200 transition-all flex items-center justify-center gap-3 active:scale-95 shadow-lg">
                   {data.contact.email} <ArrowUpRight size={20} />
                 </a>
                 <div className="px-8 py-5 rounded-full border border-zinc-700 bg-zinc-800/50 backdrop-blur text-white font-bold flex items-center justify-center gap-3">
                   {data.contact.phone}
                 </div>
              </div>
           </motion.div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="py-12 px-6 border-t border-zinc-200 bg-white">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
            <div>
               <div className="text-2xl font-bold tracking-tight text-zinc-900 mb-2">{data.footer.brand}.</div>
               <div className="text-zinc-500 text-sm">{data.footer.tagline}</div>
            </div>
            <div className="text-zinc-400 text-sm font-medium tracking-widest uppercase">
               {data.footer.copyright}
            </div>
         </div>
      </footer>
    </div>
  );
}
