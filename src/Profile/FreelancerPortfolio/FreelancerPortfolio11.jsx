import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform, useMotionValue } from 'framer-motion';
import { FullTimeFreelancerProfile as data } from './FreelancerPortfolioData';
import { 
  Zap, Shield, Rocket, Code2, Layers, 
  Terminal, Smartphone, Cpu, Mail, Phone,
  Github, Twitter, ArrowUpRight, ChevronRight,
  Menu, X, Check, ArrowRight, Globe, BarChart3
} from 'lucide-react';

// --- Animated Liquid Background ---

const LiquidBackground = () => (
  <div className="fixed inset-0 z-0 overflow-hidden bg-[#02040a]">
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        x: [0, 100, 0],
        y: [0, -50, 0],
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute -top-[20%] -left-[10%] w-[60%] h-[70%] rounded-full bg-cyan-500/10 blur-[120px]"
    />
    <motion.div
      animate={{
        scale: [1, 1.1, 1],
        x: [0, -80, 0],
        y: [0, 100, 0],
      }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      className="absolute top-[40%] -right-[10%] w-[50%] h-[60%] rounded-full bg-blue-600/10 blur-[120px]"
    />
    <motion.div
      animate={{
        scale: [1, 1.3, 1],
        x: [0, 50, 0],
        y: [0, 50, 0],
      }}
      transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      className="absolute -bottom-[10%] left-[20%] w-[40%] h-[50%] rounded-full bg-purple-600/10 blur-[120px]"
    />
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 contrast-[120%] brightness-[120%] pointer-events-none" />
  </div>
);

// --- Sub-Components ---

const TiltCard = ({ children, className = "" }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative ${className}`}
    >
      <div style={{ transform: "translateZ(30px)" }}>
        {children}
      </div>
    </motion.div>
  );
};

const SectionHeader = ({ title, subtitle, centered = false }) => (
  <div className={`mb-24 ${centered ? 'text-center max-w-3xl mx-auto' : ''}`}>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl md:text-6xl font-light text-white mb-6 tracking-tight">
        {title.split(' ').map((word, i) => (
          <span key={i} className="inline-block mr-2 last:mr-0 font-medium">
            {word === 'Architecture' || word === 'Core' ? <span className="italic font-light opacity-50 underline decoration-cyan-500/50 underline-offset-8">{word}</span> : word}
          </span>
        ))}
      </h2>
      <p className="text-lg md:text-xl text-white/40 font-light leading-relaxed">
        {subtitle}
      </p>
    </motion.div>
  </div>
);

export default function FreelancerPortfolio11() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="bg-[#02040a] text-white min-h-screen selection:bg-cyan-500/30 overflow-x-hidden font-sans">
      <LiquidBackground />

      {/* Floating Glass Navbar */}
      <nav className={`fixed top-8 inset-x-0 z-[100] transition-all duration-500 ${scrolled ? 'translate-y-[-10px]' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full mx-6 md:mx-auto">
          <div className="flex items-center gap-3 cursor-pointer group px-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center p-[1px]">
              <div className="w-full h-full bg-[#02040a] rounded-full flex items-center justify-center">
                <span className="text-xs font-black bg-clip-text text-transparent bg-gradient-to-br from-cyan-400 to-blue-600">RP</span>
              </div>
            </div>
            <span className="text-sm font-bold tracking-widest uppercase text-white/80">{data.brand.name}</span>
          </div>

          <div className="hidden md:flex items-center gap-10">
            {['Architecture', 'Projects', 'Pricing', 'Connect'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-cyan-400 transition-colors">
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden sm:block h-10 px-6 rounded-full bg-white text-black text-[10px] font-black uppercase tracking-[0.2em] hover:scale-105 transition-transform">
              Initialize
            </button>
            <button onClick={() => setIsMenuOpen(true)} className="md:hidden text-white/60 p-2">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(40px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-[200] bg-black/80 flex flex-col items-center justify-center p-12"
          >
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-12 right-12 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white">
              <X size={24} />
            </button>
            <div className="flex flex-col gap-8 text-center">
              {['Architecture', 'Projects', 'Pricing', 'Connect'].map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-5xl font-light tracking-tighter text-white hover:text-cyan-400 transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative z-10">
        
        {/* --- Hero Section --- */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-48">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-xl"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/50">Production Ready Protocol // 2026</span>
          </motion.div>
          
          <h1 className="text-center max-w-6xl text-5xl sm:text-7xl md:text-[9rem] font-light leading-[0.85] tracking-tighter text-white">
            <motion.span 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 1 }}
              className="block mb-4"
            >
              Software Engineering
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, x: -50 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ delay: 0.3, duration: 1 }}
              className="block italic font-thin opacity-60 ml-[-20%] md:ml-[-10%]"
            >
              for the digital elite.
            </motion.span>
          </h1>
          
          <p className="mt-16 max-w-xl text-center text-xl text-white/40 font-light leading-relaxed">
            {data.hero.subtitle}
          </p>
          
          <div className="mt-20 flex flex-col sm:flex-row items-center gap-8">
            <button className="group relative h-16 px-12 rounded-full bg-white text-black font-black uppercase tracking-[0.2em] text-[10px] overflow-hidden hover:scale-105 transition-all">
              <span className="relative z-10">Start The Mission</span>
              <div className="absolute inset-x-0 bottom-0 h-0 group-hover:h-full bg-cyan-400 transition-all duration-300" />
            </button>
            <button className="flex items-center gap-3 text-white font-black uppercase tracking-[0.2em] text-[10px] hover:text-cyan-400 transition-all">
              View Case Studies <ArrowRight size={16} />
            </button>
          </div>

          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-32 text-white/20"
          >
            <ChevronRight size={32} className="rotate-90" />
          </motion.div>
        </section>

        {/* --- Services Section --- */}
        <section id="architecture" className="max-w-7xl mx-auto px-6 mb-64">
          <SectionHeader 
            title="System Architecture" 
            subtitle="We don't just write scripts. We engineer complete end-to-end ecosystems that provide the technological foundation for your business growth."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.services.map((service, i) => (
              <TiltCard key={i}>
                <div className="h-full p-10 rounded-[2.5rem] bg-white/[0.02] backdrop-blur-3xl border border-white/5 hover:border-white/20 transition-all group overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white/40 mb-10 group-hover:scale-110 group-hover:text-cyan-400 transition-all">
                    {i === 0 && <Code2 size={28} />}
                    {i === 1 && <Smartphone size={28} />}
                    {i === 2 && <Terminal size={28} />}
                    {i === 3 && <Layers size={28} />}
                    {i === 4 && <Zap size={28} />}
                    {i === 5 && <Shield size={28} />}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 italic tracking-tight">{service.category}</h3>
                  <p className="text-white/40 font-light leading-relaxed mb-8">
                    {service.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {service.features.map(f => (
                      <span key={f} className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[9px] font-black uppercase tracking-widest text-white/30">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </section>

        {/* --- Showcase Section --- */}
        <section id="projects" className="max-w-7xl mx-auto px-6 mb-64">
          <SectionHeader 
            title="Production Protocol" 
            subtitle="Impeccable execution across diverse digital landscapes."
          />
          
          <div className="space-y-48">
            {data.completed_projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-20 items-center`}
              >
                <div className="flex-1 w-full aspect-square md:aspect-video rounded-[3rem] bg-white/[0.02] backdrop-blur-3xl border border-white/5 relative overflow-hidden group shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center text-[18rem] md:text-[25rem] font-black italic text-white/[0.01] uppercase select-none pointer-events-none">
                    {project.project_name.charAt(0)}
                  </div>
                  
                  <div className="absolute top-12 left-12">
                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-2">SYSTEM // ID: {i+1}</div>
                    <div className="text-xl font-bold tracking-tight text-white">{project.type}</div>
                  </div>
                  
                  <div className="absolute bottom-12 right-12 flex flex-col items-end gap-2">
                    {project.tech_stack.map(tech => (
                      <span key={tech} className="px-5 py-2 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 text-[9px] font-black uppercase tracking-widest text-white/80 shadow-2xl">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex-1 max-w-xl">
                  <h3 className="text-5xl md:text-7xl font-light italic tracking-tighter text-white mb-8">
                    {project.project_name}.
                  </h3>
                  <p className="text-xl text-white/40 font-light leading-relaxed mb-12">
                    {project.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-8 mb-12">
                    {project.result.map((res, idx) => (
                      <div key={idx}>
                        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-400 mb-2">KPI METRIC</div>
                        <div className="text-xl font-bold text-white tracking-tight">{res}</div>
                      </div>
                    ))}
                  </div>
                  
                  <button className="h-14 px-8 rounded-full border border-white/10 hover:bg-white/5 text-white text-[10px] font-black uppercase tracking-widest transition-all">
                    Explore Architecture
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- Investment Section --- */}
        <section id="pricing" className="max-w-7xl mx-auto px-6 mb-64">
          <SectionHeader 
            centered
            title="Financial Protocols" 
            subtitle="Transparent investment snapshots for elite product delivery."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {data.pricing.map((plan, i) => (
              <div key={i} className={`relative p-12 rounded-[3rem] border transition-all hover:scale-[1.02] ${
                i === 1 ? 'bg-white text-black border-white shadow-[0_0_80px_rgba(255,255,255,0.1)]' : 'bg-white/[0.02] border-white/10 text-white'
              }`}>
                {i === 1 && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-cyan-400 text-black text-[9px] font-black uppercase tracking-widest">
                    Production Favorite
                  </div>
                )}
                
                <h3 className={`text-sm font-black uppercase tracking-[0.3em] mb-4 ${i === 1 ? 'opacity-40' : 'opacity-20'}`}>
                  {plan.plan}
                </h3>
                <div className="text-6xl font-light tracking-tighter mb-12 italic">
                  {plan.price}
                </div>
                
                <ul className="space-y-6 mb-16">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex gap-4">
                      <Check size={20} className={i === 1 ? 'text-black/30' : 'text-cyan-400'} />
                      <span className={`text-sm font-medium ${i === 1 ? 'text-black/60' : 'text-white/40'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full h-14 rounded-full font-black text-[9px] uppercase tracking-widest transition-all ${
                  i === 1 ? 'bg-black text-white hover:bg-cyan-500 hover:text-black' : 'bg-white/5 hover:bg-white/10 border border-white/10'
                }`}>
                  Select Protocol
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* --- Testimonial Strip --- */}
        <section className="w-full py-24 mb-64 bg-white/[0.02] backdrop-blur-3xl overflow-hidden">
          <div className="flex animate-marquee gap-24 items-center">
            {Array(4).fill(data.testimonials).flat().map((t, i) => (
              <div key={i} className="flex-shrink-0 flex flex-col items-start max-w-sm">
                <p className="text-2xl font-light italic text-white/60 mb-6 font-serif">"{t.feedback}"</p>
                <div className="text-xs font-black uppercase tracking-widest text-cyan-400">— {t.name}</div>
              </div>
            ))}
          </div>
        </section>

        {/* --- Elite Connect --- */}
        <section id="connect" className="max-w-7xl mx-auto px-6 mb-32">
          <div className="relative p-8 sm:p-12 md:p-20 rounded-[3rem] md:rounded-[4rem] bg-[#0d1b2a] border border-white/5 overflow-hidden text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute -top-[50%] -right-[20%] w-[100%] aspect-square bg-cyan-500/10 blur-[150px] rounded-full"
            />
            
            <div className="relative z-10">
              <SectionHeader 
                centered
                title="Initialize Mission" 
                subtitle="We are currently accepting high-priority slot applications for 2026 Q3."
              />
              
              <div className="flex flex-col items-center gap-12 mt-16 text-center">
                <a href={`mailto:${data.brand.email}`} className="text-2xl sm:text-4xl md:text-[6rem] font-light tracking-tighter text-white hover:text-cyan-400 transition-all underline decoration-white/10 underline-offset-[10px] md:underline-offset-[20px] decoration-1 break-all">
                  {data.brand.email}
                </a>
                
                <div className="flex gap-12">
                  <div className="flex flex-col gap-2">
                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">GLOBAL HQ</div>
                    <div className="text-sm font-medium text-white/60 tracking-widest uppercase italic">{data.brand.location}</div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">ESTABLISHED</div>
                    <div className="text-sm font-medium text-white/60 tracking-widest uppercase italic">MMXXIII</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Footer --- */}
        <footer className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <div className="text-xl font-black tracking-widest uppercase text-white mb-2">
              {data.brand.name}
            </div>
            <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/20">
              {data.brand.tagline}
            </p>
          </div>
          
          <div className="flex gap-16 text-[9px] font-black uppercase tracking-[0.3em] text-white/40">
            <a href="#" className="hover:text-cyan-400 transition-colors">Github</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Twitter</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Layers</a>
          </div>
          
          <div className="text-right">
            <div className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em] italic mb-1">
               Protocol: Stable Build 11.0.4
            </div>
            <div className="text-[9px] font-black uppercase tracking-[0.2em] text-white/10">
              {data.footer.copyright}
            </div>
          </div>
        </footer>
      </main>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
      `}</style>
    </div>
  );
}

