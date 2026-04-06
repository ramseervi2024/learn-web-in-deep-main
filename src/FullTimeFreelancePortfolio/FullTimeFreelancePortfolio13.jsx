import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { FreelancePortfolio as data } from './freelanceportfoliodata';
import { 
  ArrowUpRight, ArrowRight, Github, Twitter, 
  Linkedin, Mail, Check, Menu, X, Globe, 
  Layers, Code, Smartphone, Zap, Shield, Rocket,
  ExternalLink, ChevronDown, ChevronUp, Plus, Minus
} from 'lucide-react';

// --- Components ---

const SidebarStats = () => (
  <div className="fixed left-8 bottom-32 hidden xl:flex flex-col gap-12 z-40 items-start mix-blend-difference">
    {data.stats.map((stat, i) => (
      <motion.div 
        key={i}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: i * 0.1 }}
        className="flex flex-col gap-1 border-l border-white/30 pl-4"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/60 font-bold">{stat.label}</span>
        <span className="text-xl font-serif italic text-white">{stat.value}</span>
      </motion.div>
    ))}
  </div>
);

const EditorialNav = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <header className={`fixed top-0 inset-x-0 z-[100] flex justify-between items-center px-8 md:px-16 py-8 transition-all duration-700 ${scrolled ? 'bg-black/80 backdrop-blur-xl py-6' : 'bg-transparent'}`}>
        <div className="flex flex-col relative z-[110]">
           <span className="text-sm font-black tracking-tighter uppercase leading-none">{data.brand.name}</span>
           <span className="text-[10px] text-white/30 uppercase tracking-[0.2em]">Established {data.brand.founded}</span>
        </div>
        
        {/* Desktop Nav */}
        <nav className="flex gap-12 items-center text-[10px] uppercase tracking-[0.22em] font-medium hidden md:flex relative z-[110]">
          <a href="#projects" className="hover:text-white transition-colors group relative overflow-hidden">
            Archive <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
          </a>
          <a href="#services" className="hover:text-white transition-colors group relative overflow-hidden">
            Strategy <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
          </a>
          <a href="#pricing" className="hover:text-white transition-colors group relative overflow-hidden">
            Protocols <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
          </a>
          <button className="bg-white text-black px-6 py-3 rounded-full text-[9px] hover:bg-white/90 transition-colors">INITIATE_PROJECT</button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative z-[150] p-2"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[120] bg-black flex flex-col items-center justify-center p-12 md:hidden"
          >
             <div className="flex flex-col gap-12 text-center">
                {['Archive', 'Strategy', 'Protocols'].map((item, idx) => (
                  <motion.a 
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * idx }}
                    className="text-5xl font-serif italic text-white/40 hover:text-white transition-colors"
                  >
                    {item}
                  </motion.a>
                ))}
                <motion.button 
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.4 }}
                   className="mt-12 bg-white text-black px-12 py-5 rounded-full text-xs font-bold uppercase tracking-widest"
                >
                   Initiate Project
                </motion.button>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const SplitHero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -100]);
  const y2 = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-8 pt-32">
       {/* Background Noise/Grain Overlay */}
       <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
       
       <div className="relative z-10 text-center flex flex-col items-center max-w-7xl mx-auto">
          <div className="relative overflow-hidden mb-12">
            <motion.h1 
              initial={{ y: "150%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
              className="text-6xl md:text-[8vw] lg:text-[10vw] font-serif leading-[0.85] tracking-tight text-white mb-4"
            >
              Archiving <br/> <span className="italic">Software</span> Excellence
            </motion.h1>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-lg md:text-xl text-white/40 max-w-xl font-light leading-relaxed mb-12"
          >
             {data.hero.subtitle}
          </motion.p>

          <div className="flex gap-8 items-center">
             <button className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-bold group border border-white/10 px-10 py-5 hover:bg-white hover:text-black transition-all rounded-sm">
               View Archive <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
             </button>
             <div className="w-16 h-[1px] bg-white/20 hidden sm:block" />
             <div className="text-[10px] uppercase tracking-[0.2em] text-white/30 hidden sm:block text-left">
               Premium Engineering <br/> For Founders
             </div>
          </div>
       </div>

       {/* Sub-Hero Parallax Images (Editorial Feel) */}
       <motion.div 
         style={{ y: y1 }}
         className="absolute top-[20%] right-[10%] w-64 h-96 bg-white/5 border border-white/10 backdrop-blur-sm hidden lg:block overflow-hidden"
       >
         <div className="w-full h-full bg-gradient-to-br from-white/10 to-transparent opacity-30 p-12 flex flex-col justify-between">
           <Layers className="text-white/20" size={48} />
           <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold italic rotate-90 origin-left translate-y-12 whitespace-nowrap opacity-50">PROT_01X</span>
         </div>
       </motion.div>
       
       <motion.div 
         style={{ y: y2 }}
         className="absolute bottom-[10%] left-[10%] w-80 h-80 bg-white/5 border border-white/10 backdrop-blur-sm hidden lg:block overflow-hidden"
       >
         <div className="w-full h-full bg-gradient-to-tr from-white/5 to-transparent opacity-20 p-12 flex items-center justify-center">
            <Zap className="text-white/10" size={120} />
         </div>
       </motion.div>
    </section>
  );
};

const ProjectGrid = () => (
  <section id="projects" className="py-32 px-8 md:px-16 lg:px-32 relative">
    <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 gap-8">
       <h2 className="text-5xl md:text-7xl font-serif leading-none italic">Select Archive</h2>
       <div className="w-full md:max-w-md h-[1px] bg-white/10" />
       <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">{data.stats[0].value} Enterprise Solutions Shipped</span>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20">
      {data.completed_projects.map((project, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`relative group ${i % 2 === 0 ? 'md:col-span-7' : 'md:col-span-5 md:mt-32'}`}
        >
          <div className="aspect-[4/5] bg-white/[0.05] border border-white/20 relative overflow-hidden group-hover:border-white/40 transition-all duration-700 shadow-2xl">
             {/* Graphical Representation of Project */}
             <div className="absolute inset-0 flex items-center justify-center opacity-[0.08] group-hover:opacity-[0.15] group-hover:scale-110 transition-all duration-1000">
               <span className="text-[25vw] font-serif italic text-white">{project.project_name.charAt(0)}</span>
             </div>
             
             {/* Project Info Overlay - Partially visible by default for better UX */}
             <div className="absolute inset-0 p-12 flex flex-col justify-between bg-black/40 backdrop-blur-[2px] opacity-0 md:opacity-30 group-hover:opacity-100 transition-all duration-500">
                <div className="flex justify-between items-start">
                   <div className="flex flex-col gap-1">
                      <span className="text-[10px] uppercase tracking-widest text-white font-bold">System Architecture</span>
                      <span className="text-xl font-serif italic text-white">{project.type}</span>
                   </div>
                   <div className="w-14 h-14 rounded-full border border-white/40 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                      <ArrowUpRight size={24} />
                   </div>
                </div>
                <div className="flex flex-col gap-6">
                   <div className="flex flex-col gap-2">
                     <span className="text-[10px] uppercase tracking-[0.4em] text-white/50 italic font-bold">Solution Framework</span>
                     <p className="text-base font-light leading-relaxed max-w-sm text-white/90">{project.solution}</p>
                   </div>
                   <div className="flex flex-wrap gap-3">
                      {project.result.map((res, ridx) => (
                        <span key={ridx} className="text-[9px] uppercase tracking-widest bg-white/10 border border-white/20 px-3 py-1 rounded-sm text-white">{res}</span>
                      ))}
                   </div>
                </div>
             </div>
          </div>
          
          <div className="mt-8 flex flex-col md:flex-row justify-between items-start gap-6">
             <div className="flex flex-col gap-1 text-left">
                <h3 className="text-4xl md:text-2xl font-serif leading-none italic group-hover:translate-x-2 transition-transform duration-500">{project.project_name}</h3>
                <span className="text-[10px] uppercase tracking-widest text-white/20">{project.type}</span>
             </div>
             <div className="flex flex-wrap gap-2">
                {project.tech_stack.slice(0, 3).map((tech, j) => (
                  <span key={j} className="text-[8px] uppercase font-bold tracking-widest border border-white/10 px-3 py-1 text-white/20">{tech}</span>
                ))}
             </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

const StrategyAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="services" className="py-32 px-8 overflow-hidden bg-white/[0.01] border-y border-white/5 relative">
       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="flex flex-col justify-center items-start text-left">
             <span className="text-[10px] uppercase tracking-[0.5em] text-white/30 italic mb-8 border-b border-white/20 pb-4">Strategy & Architecture</span>
             <h2 className="text-5xl md:text-8xl font-serif mb-12 leading-[0.85]"><span className="italic">How</span> We <br/> Deliver.</h2>
             <p className="text-white/40 font-light text-lg max-w-sm mb-16 leading-relaxed italic">
               We utilize editorial precision in our engineering process, treating each project as a unique digital archive.
             </p>
             <button className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.4em] group">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white transition-all">
                  <ArrowRight size={16} />
                </div>
                Detailed Process
             </button>
          </div>

          <div className="flex flex-col gap-1 border-t border-white/5 text-left">
             {data.services.map((service, i) => (
               <div 
                 key={i} 
                 className="border-b border-white/5 py-10 group cursor-pointer"
                 onClick={() => setOpenIndex(i)}
               >
                 <div className="flex items-center justify-between">
                   <div className="flex items-center gap-10">
                      <span className="text-[10px] font-serif text-white/20 italic tabular-nums">0{i+1}</span>
                      <h3 className={`text-2xl md:text-3xl font-serif italic transition-all duration-500 ${openIndex === i ? 'text-white' : 'text-white/30 group-hover:text-white/60'}`}>{service.category}</h3>
                   </div>
                   <div className="transition-transform duration-500 text-white/20" style={{ transform: openIndex === i ? 'rotate(-45deg)' : 'rotate(0deg)' }}>
                      {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                   </div>
                 </div>
                 
                 <AnimatePresence>
                   {openIndex === i && (
                     <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                     >
                       <div className="pt-8 pl-16 max-w-md">
                          <p className="text-white/50 text-sm font-light leading-relaxed mb-6 italic">{service.description}</p>
                          <div className="flex flex-wrap gap-2">
                             {service.features.map((feat, j) => (
                               <span key={j} className="text-[9px] uppercase tracking-widest text-white/30 border border-white/10 px-3 py-1.5">{feat}</span>
                             ))}
                          </div>
                       </div>
                     </motion.div>
                   )}
                 </AnimatePresence>
               </div>
             ))}
          </div>
       </div>
    </section>
  );
};

const ProtocolPricing = () => (
   <section id="pricing" className="py-32 px-8">
      <div className="max-w-7xl mx-auto">
         <div className="text-center mb-24 relative">
            <h2 className="text-[10vw] font-serif italic opacity-[0.05] leading-none absolute inset-0 -translate-y-1/2 select-none">Protocols</h2>
            <h3 className="text-4xl md:text-6xl font-serif italic relative z-10">Select Your Protocol</h3>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.pricing.map((plan, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-12 md:p-16 border border-white/5 bg-white/[0.01] flex flex-col justify-between group relative overflow-hidden text-left"
              >
                {/* Decoration */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                   <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-white/20 mb-8 block italic">{plan.plan}</span>
                   <div className="text-5xl font-serif mb-12 tabular-nums">
                     <span className="text-xl align-top mr-1 font-sans opacity-40 italic">$</span>
                     {plan.price.replace('$', '')}
                   </div>
                   <ul className="space-y-6 mb-16 border-t border-white/5 pt-12">
                      {plan.features.map((feat, j) => (
                        <li key={j} className="flex items-center gap-3 text-[11px] uppercase tracking-wider text-white/40">
                          <Check size={14} className="text-white/20" strokeWidth={3} /> {feat}
                        </li>
                      ))}
                   </ul>
                </div>
                
                <button className="w-full py-5 border border-white/10 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-white hover:text-black transition-all rounded-sm uppercase">Initialize_Protocol</button>
              </motion.div>
            ))}
         </div>
      </div>
   </section>
);

const FooterEditorial = () => (
  <footer className="py-32 px-8 border-t border-white/5 relative">
     <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16 items-start md:items-end text-left">
        <div className="flex flex-col gap-12">
           <h2 className="text-6xl md:text-9xl font-serif italic leading-none opacity-20 hover:opacity-100 transition-opacity duration-1000 cursor-default">
             Collaborate.
           </h2>
           <div className="flex flex-col gap-4">
              <span className="text-[10px] uppercase tracking-[0.5em] text-white/20 font-bold italic underline underline-offset-8 decoration-white/10 mb-2">Comms Priority</span>
              <a href={`mailto:${data.brand.email}`} className="text-2xl md:text-4xl font-light hover:italic transition-all inline-block hover:translate-x-4 duration-500 underline underline-offset-[12px] decoration-white/20">{data.brand.email}</a>
           </div>
        </div>

        <div className="flex flex-col items-start md:items-end gap-16 text-left md:text-right w-full md:w-auto">
           <div className="flex flex-col gap-4">
              <span className="text-[10px] uppercase tracking-[0.5em] text-white/20 font-bold italic underline underline-offset-8 decoration-white/10 mb-2">Location Strategy</span>
              <p className="text-xl text-white/40 italic">{data.brand.location}</p>
           </div>
           
           <div className="flex gap-12 text-[10px] uppercase tracking-[0.4em] font-bold">
              <a href="#" className="hover:text-white transition-colors flex items-center gap-2">X <ArrowUpRight size={12} /></a>
              <a href="#" className="hover:text-white transition-colors flex items-center gap-2">GH <ArrowUpRight size={12} /></a>
              <a href="#" className="hover:text-white transition-colors flex items-center gap-2">LI <ArrowUpRight size={12} /></a>
           </div>
        </div>
     </div>
     
     <div className="max-w-7xl mx-auto mt-32 flex flex-col md:flex-row justify-between items-center gap-8 py-8 border-t border-white/5 text-[9px] uppercase tracking-[0.3em] font-medium text-white/20">
        <span>{data.brand.name} // Archival Node 2026</span>
        <span>Premium Software Engineering Agency</span>
        <span>© {new Date().getFullYear()} RPS DIGITAL STORE. All Rights Reserved.</span>
     </div>
  </footer>
);

export default function FreelancePortfolio13() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#0a0a0a] text-[#f9f9f9] font-sans selection:bg-white selection:text-black">
      {/* Editorial Navigation */}
      <EditorialNav scrolled={scrolled} />
      
      {/* Floating Side Components */}
      <SidebarStats />
      
      <main>
        {/* Editorial Splice Hero */}
        <SplitHero />

        {/* Featured Brands / Recognitions */}
        <div className="py-16 border-y border-white/5 flex overflow-hidden group">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-24 whitespace-nowrap px-12"
          >
            {data.featured_in.map((brand, i) => (
              <span key={i} className="text-[11px] uppercase tracking-[0.8em] font-black text-white/20 group-hover:text-white/40 transition-colors cursor-default">
                {brand} / 2026 EDITION / ARCHIVE_0{i+1}
              </span>
            ))}
            {data.featured_in.map((brand, i) => (
              <span key={i + 'copy'} className="text-[11px] uppercase tracking-[0.8em] font-black text-white/20 group-hover:text-white/40 transition-colors cursor-default">
                {brand} / 2026 EDITION / ARCHIVE_0{i+1}
              </span>
            ))}
          </motion.div>
        </div>

        {/* The Archive Grid */}
        <ProjectGrid />

        {/* Services / Process Section (Vertical Accordion) */}
        <StrategyAccordion />

        {/* Stats Section with Inset Visuals */}
        <section className="py-32 px-8 md:px-32 bg-[#f5f5f5] flex flex-col items-center justify-center relative min-h-[70vh] overflow-hidden">
           <div className="absolute inset-0 opacity-[0.08] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
           <motion.div 
             initial={{ scale: 1.2, opacity: 0 }}
             whileInView={{ scale: 1, opacity: 1 }}
             transition={{ duration: 1.5 }}
             className="text-black text-center z-10 w-full"
           >
              <h2 className="text-[12vw] font-serif leading-none italic mb-8 text-black">Scale Securely.</h2>
              <div className="flex gap-16 items-center justify-center">
                 <div className="flex flex-col gap-2">
                    <span className="text-[9px] uppercase tracking-[0.4em] font-black text-black opacity-40">Global Revenue</span>
                    <span className="text-4xl font-serif italic text-black">$5M+</span>
                 </div>
                 <div className="w-[1px] h-20 bg-black/10" />
                 <div className="flex flex-col gap-2">
                    <span className="text-[9px] uppercase tracking-[0.4em] font-black text-black opacity-40">Apps Shipped</span>
                    <span className="text-4xl font-serif italic text-black">25+</span>
                 </div>
              </div>
           </motion.div>
        </section>

        {/* Pricing Protocols */}
        <ProtocolPricing />

        {/* Final Editorial Footer */}
        <FooterEditorial />
      </main>

      <style jsx global>{`
        ::-webkit-scrollbar {
          width: 4px;
        }
        ::-webkit-scrollbar-track {
          background: #0a0a0a;
        }
        ::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
        
        @font-face {
          font-family: 'Editorial';
          src: local('Baskerville'), local('Times New Roman'), serif;
        }
        
        .font-serif {
          font-family: 'Editorial', serif;
        }
      `}</style>
    </div>
  );
}
