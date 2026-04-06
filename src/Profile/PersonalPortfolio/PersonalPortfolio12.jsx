import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, useMotionValue, useVelocity, useAnimationFrame, AnimatePresence } from 'framer-motion';
import { portfolioprofile as data } from './PersonalPortfolioData';
import { 
  Zap, Shield, Rocket, Code2, Layers, 
  Terminal, Smartphone, Cpu, Mail, Phone,
  Github, Twitter, ArrowUpRight, ChevronRight,
  Menu, X, Check, ArrowRight, ExternalLink, Globe,
  ArrowRightCircle, MousePointer2
} from 'lucide-react';

// --- Sub-Components ---

const SectionWrap = ({ children, title, className = "" }) => (
  <section className={`relative w-[100vw] h-screen flex-shrink-0 flex flex-col items-start px-12 md:px-32 py-24 md:py-32 overflow-hidden ${className}`}>
    {title && (
      <div className="absolute top-12 left-12 md:left-32 z-50">
        <span className="text-[10px] font-black uppercase tracking-[0.6em] text-white/40 border-l-2 border-white/30 pl-4">{title}</span>
      </div>
    )}
    <div className="w-full h-full relative z-20 flex flex-col justify-between">
      {children}
    </div>
  </section>
);

const CustomCursor = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 450 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{ x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%" }}
      className="fixed top-0 left-0 w-24 h-24 rounded-full border border-white/20 z-[9999] pointer-events-none flex items-center justify-center mix-blend-difference hidden md:flex"
    >
      <div className="text-[8px] font-black uppercase tracking-widest text-white animate-pulse">Scroll</div>
    </motion.div>
  );
};

export default function Portfolio12() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const xTranslation = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
  const smoothX = useSpring(xTranslation, { damping: 25, stiffness: 120 });

  const [activePercentage, setActivePercentage] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setActivePercentage(scrollYProgress.get());
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollYProgress]);

  return (
    <div className="bg-[#050505] text-white selection:bg-white selection:text-black font-sans cursor-none overflow-x-hidden">
      <CustomCursor />
      
      {/* HUD Index */}
      <div className="fixed bottom-12 left-12 z-[100] flex items-end gap-10">
        <div className="flex flex-col gap-2 items-start text-left">
          <div className="text-[10px] font-black uppercase tracking-[0.5em] text-white/30 italic">Protocol Index</div>
          <div className="text-sm font-black tracking-tighter tabular-nums flex items-center gap-3">
             <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
             {Math.round(activePercentage * 100)}% LOADED
          </div>
        </div>
        <div className="w-56 h-[3px] bg-white/[0.05] relative overflow-hidden mb-2">
          <motion.div style={{ scaleX: scrollYProgress }} className="absolute inset-0 bg-white origin-left" />
        </div>
      </div>

      <nav className={`fixed top-0 inset-x-0 z-[100] transition-all p-12 flex justify-between items-center ${scrolled ? 'translate-y-[-10px] opacity-0' : 'translate-y-0 opacity-100'}`}>
        <div className="flex items-center gap-6 group cursor-pointer text-left">
          <div className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center group-hover:border-white transition-all overflow-hidden relative">
             <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500" />
             <span className="text-sm font-black relative z-10 group-hover:text-black transition-colors uppercase italic tracking-tighter">{data.brand.name.charAt(0)}</span>
          </div>
          <span className="text-[12px] font-black uppercase tracking-[0.5em] text-white/50">{data.brand.name}</span>
        </div>
        <div className="flex items-center gap-16 text-[10px] font-black uppercase tracking-[0.4em] text-white/40">
          <a href="#" className="hover:text-white transition-colors">Architecture</a>
          <a href="#" className="hover:text-white transition-colors">Projects</a>
          <button className="flex items-center gap-3 text-white hover:gap-6 transition-all group">
            <span className="font-black italic">INITIALIZE</span> <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </nav>

      <div ref={containerRef} className="h-[600vh] relative bg-[#050505]">
        <div className="sticky top-0 h-screen w-full flex overflow-hidden">
          <motion.div style={{ x: smoothX }} className="flex h-full w-[500vw] flex-nowrap shrink-0">
            
            {/* Section 01 */}
            <SectionWrap title="01 // CORE VISION">
              <div className="pt-20">
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mb-12 inline-flex items-center gap-4 px-6 py-2 border-2 border-white/10 rounded-full">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span className="text-[11px] font-black uppercase tracking-[0.6em] text-white/50 italic">Personal Protocol // 2026</span>
                </motion.div>
                <h1 className="text-[11vw] font-black leading-[0.8] tracking-tighter uppercase italic select-none text-left">
                  Professional<br/>Digital<br/><span className="text-transparent italic" style={{ WebkitTextStroke: "2px rgba(255,255,255,0.6)" }}>Identity.</span>
                </h1>
              </div>
              <div className="pb-12 flex justify-between items-end w-full">
                <p className="max-w-2xl text-2xl text-white/40 font-light leading-relaxed text-left">
                   <span className="text-white font-black italic mr-2 uppercase tracking-widest">// MISSION:</span> 
                   {data.hero.subtitle}
                </p>
                <div className="hidden lg:flex flex-col gap-2 border-l-2 border-white/10 pl-10 text-left">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 italic">Status</span>
                  <span className="text-4xl font-black italic tracking-tighter tabular-nums">ACTIVE</span>
                </div>
              </div>
            </SectionWrap>

            {/* Section 02 */}
            <SectionWrap title="02 // ARCHITECTURE" className="bg-[#080808]">
              <div className="pt-16">
                 <h2 className="text-[8vw] font-black uppercase italic tracking-tighter leading-[0.8] mb-8 text-left">Internal <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.6)" }}>Logic.</span></h2>
              </div>
              <div className="flex gap-12 overflow-x-auto pb-24 no-scrollbar items-end">
                {data.services.map((service, i) => (
                  <motion.div key={i} whileHover={{ y: -20 }} className="flex-shrink-0 w-[450px] min-h-[500px] p-16 bg-white/[0.02] border border-white/5 group relative flex flex-col justify-between text-left">
                    <div>
                      <div className="text-white/20 mb-16 group-hover:text-cyan-400 transition-colors">
                        {i === 0 ? <Code2 size={64} /> : i === 1 ? <Smartphone size={64} /> : <Terminal size={64} />}
                      </div>
                      <h3 className="text-4xl font-black uppercase italic tracking-tighter mb-6">{service.category}</h3>
                      <p className="text-white/40 font-light leading-snug text-xl italic">{service.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-3 mt-12">
                       {service.features.map(f => (
                         <span key={f} className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 border border-white/10 px-4 py-2">{f}</span>
                       ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </SectionWrap>

            {/* Section 03 */}
            <SectionWrap title="03 // PROJECT ARCHIVE">
              <div className="pt-12">
                <h2 className="text-[6vw] font-black uppercase italic tracking-tighter leading-none mb-12 text-left">Select <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.4)" }}>Nodes.</span></h2>
              </div>
              <div className="flex gap-24 items-end pb-24 pr-[20vw] h-full overflow-visible">
                {data.completed_projects.map((project, i) => (
                  <div key={i} className="w-[85vw] md:w-[65vw] lg:w-[50vw] shrink-0 group">
                    <div className="aspect-[21/9] bg-white/[0.03] border border-white/10 mb-12 relative overflow-hidden shadow-2xl">
                       <span className="absolute inset-0 flex items-center justify-center text-[30vw] font-black italic text-white/[0.01] uppercase select-none">{project.project_name.charAt(0)}</span>
                       <div className="absolute top-10 right-10 w-20 h-20 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-cyan-500 hover:text-black"><ArrowUpRight size={32} /></div>
                    </div>
                    <div className="flex justify-between items-end gap-12 text-left">
                       <div className="flex-1">
                          <h3 className="text-7xl lg:text-9xl font-black uppercase italic tracking-tighter mb-4 leading-none underline decoration-cyan-500/10 decoration-8">{project.project_name}.</h3>
                          <span className="text-xl font-black text-white/20 italic tracking-widest uppercase">{project.type}</span>
                       </div>
                       <div className="flex flex-col gap-3 items-end shrink-0 tabular-nums font-black text-cyan-400/40 text-lg">
                          {project.result?.map((res, idx) => <span key={idx}>{res}</span>)}
                       </div>
                    </div>
                  </div>
                ))}
              </div>
            </SectionWrap>

            {/* Section 04 */}
            <SectionWrap title="04 // INVESTMENT" className="bg-[#080808]">
              <div className="pt-12 text-center w-full">
                 <h2 className="text-[10vw] font-black uppercase italic tracking-tighter leading-none text-white/10 mb-20 translate-y-8">PROTOCOL_STAKES</h2>
              </div>
              <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-1 bg-white/10 border border-white/10 mb-20 overflow-visible">
                 {data.pricing.map((plan, i) => (
                   <div key={i} className="p-20 bg-[#080808] hover:bg-[#0a0a0a] transition-all flex flex-col justify-between min-h-[60vh] text-left">
                      <div>
                        <span className="text-xs font-black uppercase tracking-[0.6em] text-white/20 italic mb-10 block">{plan.plan}</span>
                        <div className="text-8xl font-black italic tracking-tighter mb-16">{plan.price}<span className="text-xs font-black opacity-20 ml-4 tabular-nums">/INIT</span></div>
                        <ul className="space-y-6">
                           {plan.features.map((f, idx) => <li key={idx} className="text-xs font-black uppercase tracking-[0.3em] flex items-center gap-4 text-white/30"><Check size={16} className="text-cyan-500" strokeWidth={4} /> {f}</li>)}
                        </ul>
                      </div>
                      <button className="w-full h-20 border-2 border-white/10 font-black uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all mt-16">INITIALIZE</button>
                   </div>
                 ))}
              </div>
            </SectionWrap>

            {/* Section 05 */}
            <SectionWrap title="05 // TERMINATE">
               <div className="pt-12">
                  <h2 className="text-[12vw] font-black uppercase tracking-tighter italic leading-[0.8] text-left">PROJECT<br/><span className="text-transparent" style={{ WebkitTextStroke: "2px rgba(255,255,255,0.6)" }}>COMPLETE.</span></h2>
               </div>
               <div className="pb-24 w-full flex flex-col md:flex-row justify-between items-end gap-20">
                  <div className="flex flex-col gap-10 text-left">
                     <span className="text-sm font-black uppercase tracking-[0.8em] text-white/20 italic">COMMS // DIRECT</span>
                     <a href={`mailto:${data.contact.email}`} className="text-4xl lg:text-7xl font-black uppercase italic tracking-tighter hover:text-cyan-400 transition-all">{data.contact.email}</a>
                  </div>
                  <div className="flex flex-wrap gap-8 text-xs font-black uppercase tracking-[0.6em] text-white/20 italic">
                     <a href="#" className="hover:text-white">Github</a>
                     <a href="#" className="hover:text-white">Twitter</a>
                  </div>
               </div>
               <div className="absolute top-[50%] right-[-10%] translate-y-[-50%] opacity-2 pointer-events-none scale-150 rotate-12">
                  <Globe size={1100} strokeWidth={0.1} className="text-white/[0.05] animate-spin-slow" />
               </div>
            </SectionWrap>

          </motion.div>
        </div>
      </div>
      <style jsx global>{`
        ::-webkit-scrollbar { display: none; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 150s linear infinite; }
      `}</style>
    </div>
  );
}
