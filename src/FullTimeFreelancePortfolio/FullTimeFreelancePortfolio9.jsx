import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { FreelancePortfolio as data } from './freelanceportfoliodata';
import { 
  Terminal, Cpu, Globe, Rocket, Shield, 
  Zap, MessageSquare, Code2, Layers, 
  ArrowRight, CheckCircle2, ChevronRight,
  Mail, Phone, ExternalLink, Github, Twitter,
  Smartphone, Menu, X
} from 'lucide-react';

// Futuristic Particle Background Component
const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    const particles = [];
    const particleCount = 60;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        opacity: Math.random() * 0.5 + 0.2
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(34, 211, 238, 0.5)'; // cyan-400

      particles.forEach((p, i) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34, 211, 238, ${p.opacity})`;
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.sqrt((p.x - p2.x)**2 + (p.y - p2.y)**2);
          if (dist < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(34, 211, 238, ${(1 - dist/150) * 0.1})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none opacity-40" />;
};

const FuturisticHero = () => {
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const fullText = "Initializing digital architect... System ready. Welcome to the future of software engineering.";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 px-6 overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-5xl"
      >
        <div className="flex flex-col items-center text-center gap-6 mb-12">
          {/* AI Terminal Brand */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-xl mb-8">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400/80">AI Core Active</span>
          </div>

          <h1 className="text-5xl md:text-8xl lg:text-[7rem] font-black tracking-tighter leading-[0.9] text-white">
            {data.hero.title.split(' ').map((word, i) => (
              <span key={i} className="inline-block mr-4 italic last:not-italic">
                {word === 'Growth.' ? (
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                    {word}
                  </span>
                ) : word}
              </span>
            ))}
          </h1>

          <p className="max-w-2xl text-lg md:text-xl text-slate-400 font-light mt-8">
            {data.hero.subtitle}
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center gap-6">
            <button className="group relative px-8 py-4 bg-cyan-500 text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(34,211,238,0.4)]">
              <span className="relative z-10 flex items-center gap-2">
                {data.hero.cta_primary} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
            </button>
            <button className="px-8 py-4 border border-white/10 hover:bg-white/5 rounded-full text-white font-semibold transition-all">
              {data.hero.cta_secondary}
            </button>
          </div>
        </div>

        {/* Chat Intro Style Overlay */}
        <div className="max-w-xl mx-auto bg-[#0a0a0a]/80 backdrop-blur-2xl border border-white/5 rounded-2xl p-6 shadow-2xl relative">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-rose-500" />
            <div className="w-2 h-2 rounded-full bg-amber-500" />
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="ml-2 text-[10px] font-mono text-slate-500 uppercase tracking-widest">System Output</span>
          </div>
          <p className="font-mono text-sm md:text-base text-cyan-400/90 leading-relaxed min-h-[3em]">
            <span className="text-cyan-600 mr-2">{'>'}</span>
            {text}
            {isTyping && <span className="inline-block w-2 h-5 ml-1 bg-cyan-400 animate-pulse align-middle" />}
          </p>
        </div>
      </motion.div>
    </section>
  );
};

const ServiceCard = ({ service, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="group relative h-full bg-slate-900/50 border border-white/5 rounded-3xl p-8 hover:bg-slate-900/80 transition-all hover:border-cyan-500/30"
  >
    <div className="absolute inset-0 bg-blue-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    
    <div className="relative z-10">
      <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-8 text-cyan-400 group-hover:scale-110 transition-transform">
        {index === 0 && <Code2 size={28} />}
        {index === 1 && <Smartphone size={28} />}
        {index === 2 && <Terminal size={28} />}
        {index === 3 && <Layers size={28} />}
        {index === 4 && <Zap size={28} />}
        {index === 5 && <Shield size={28} />}
      </div>
      
      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">{service.category}</h3>
      <p className="text-slate-400 font-light leading-relaxed mb-8">{service.description}</p>
      
      <div className="flex flex-wrap gap-2">
        {service.features.map(f => (
          <span key={f} className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] font-bold uppercase tracking-widest text-slate-500">
            {f}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const ProjectPanel = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="relative grid lg:grid-cols-12 gap-12 items-center"
  >
    <div className={`lg:col-span-7 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
      <div className="relative aspect-[16/10] bg-slate-900 rounded-[2rem] overflow-hidden border border-white/5 group shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.1),transparent)] z-10" />
        <div className="absolute inset-0 flex items-center justify-center text-8xl font-black text-white/5 select-none uppercase -rotate-12">
          {project.project_name.split(' ')[0]}
        </div>
        <div className="absolute inset-x-8 bottom-8 z-20 flex flex-wrap gap-3">
          {project.tech_stack.map(tech => (
            <span key={tech} className="px-4 py-2 rounded-xl bg-black/60 backdrop-blur-xl border border-white/10 text-xs font-bold text-white tracking-widest uppercase">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
    
    <div className="lg:col-span-5 px-4 md:px-0">
      <div className="inline-flex px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-xs font-bold text-cyan-400 uppercase tracking-widest mb-6">
        {project.type}
      </div>
      <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tighter italic">
        {project.project_name}.
      </h3>
      <p className="text-lg text-slate-400 font-light leading-relaxed mb-8">
        {project.description}
      </p>
      
      <ul className="space-y-4 mb-10">
        {project.result.map((res, i) => (
          <li key={i} className="flex items-center gap-3 text-slate-300 font-medium">
            <CheckCircle2 size={18} className="text-cyan-500" />
            {res}
          </li>
        ))}
      </ul>

      <button className="flex items-center gap-3 text-white font-bold group">
        Explore Architecture <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
      </button>
    </div>
  </motion.div>
);

const PricingCard = ({ plan, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className={`relative p-8 md:p-12 rounded-[2.5rem] flex flex-col h-full border ${
      index === 1 
        ? 'bg-gradient-to-b from-cyan-500/10 to-blue-600/5 border-cyan-500/40 shadow-[0_0_60px_rgba(34,211,238,0.3)]' 
        : 'bg-slate-900/50 border-white/5'
    }`}
  >
    {index === 1 && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-cyan-500 text-black text-[10px] font-black uppercase tracking-widest z-10 shadow-xl">
        Most Optimized
      </div>
    )}
    
    <div className="mb-10 text-center">
      <h3 className={`text-xl font-bold uppercase tracking-[0.2em] mb-4 ${index === 1 ? 'text-cyan-400' : 'text-slate-500'}`}>
        {plan.plan}
      </h3>
      <div className="text-5xl md:text-6xl font-black text-white italic">
        {plan.price}
      </div>
    </div>
    
    <div className="flex-1 space-y-4 mb-12">
      {plan.features.map((f, i) => (
        <div key={i} className="flex items-start gap-3">
          <div className="mt-1 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
          <span className="text-slate-400 text-sm md:text-base leading-tight">{f}</span>
        </div>
      ))}
    </div>
    
    <button className={`w-full py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all ${
      index === 1 
        ? 'bg-white text-black hover:scale-105 active:scale-95 shadow-xl' 
        : 'border border-white/10 text-white hover:bg-white/5'
    }`}>
      Select Protocol
    </button>
  </motion.div>
);

const SectionHeader = ({ title, subtitle, centered = false }) => (
  <div className={`mb-20 md:mb-32 ${centered ? 'text-center max-w-3xl mx-auto' : ''}`}>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-white mb-8 italic">
        {title}<span className="text-cyan-500">.</span>
      </h2>
      <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed">
        {subtitle}
      </p>
    </motion.div>
  </div>
);

export default function FreelancePortfolio9() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#020617] text-slate-200 min-h-screen font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      <ParticleBackground />

      {/* Floating Navbar */}
      <nav className={`fixed top-0 inset-x-0 z-[100] transition-all duration-500 ${
        scrolled ? 'py-4' : 'py-8'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center p-0.5 shadow-[0_0_20px_rgba(34,211,238,0.3)]">
              <div className="w-full h-full bg-[#020617] rounded-[10px] flex items-center justify-center">
                <span className="text-xl font-black bg-clip-text text-transparent bg-gradient-to-br from-cyan-400 to-blue-600">R</span>
              </div>
            </div>
            <span className="text-xl font-bold tracking-tighter text-white">Digital World</span>
          </motion.div>

          <div className="hidden md:flex items-center gap-10">
            {['Architecture', 'Projects', 'Pricing', 'Connect'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-cyan-400 transition-colors">
                {item}
              </a>
            ))}
            <button className="h-11 px-6 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all">
              Initialize
            </button>
          </div>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative z-[110] w-10 h-10 flex items-center justify-center bg-white/5 rounded-lg border border-white/10 text-cyan-400"
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
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

        {/* Mobile Fullscreen Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 z-[100] bg-[#020617]/95 backdrop-blur-3xl flex flex-col items-center justify-center gap-8"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.05),transparent)] pointer-events-none" />
              {['Architecture', 'Projects', 'Pricing', 'Connect'].map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="relative z-10 text-4xl font-black italic tracking-tighter text-white hover:text-cyan-400 transition-colors"
                >
                  {item}
                </motion.a>
              ))}
              <motion.a
                href="#connect"
                onClick={() => setIsMenuOpen(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="relative z-10 mt-8 px-8 py-4 bg-cyan-500 text-black font-black uppercase tracking-widest rounded-full hover:scale-105 active:scale-95 transition-all"
              >
                Initialize Project
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="relative z-10 flex flex-col items-center">
        <FuturisticHero />

        {/* Stats Strip */}
        <section className="w-full py-16 md:py-24 border-y border-white/5 bg-[#020617]/40 backdrop-blur-3xl">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
            {data.stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-2 italic bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
                  {stat.value}
                </div>
                <div className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-cyan-400/60">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Services / Architecture */}
        <section id="architecture" className="w-full py-24 md:py-48 px-6 max-w-7xl">
          <SectionHeader 
            title="System Architecture" 
            subtitle="We don't just build apps. We engineer scalable digital ecosystems that evolve with your business growth and security needs."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.services.map((service, i) => (
              <ServiceCard key={i} service={service} index={i} />
            ))}
          </div>
        </section>

        {/* Projects showcase */}
        <section id="projects" className="w-full py-24 md:py-48 px-6 max-w-7xl border-t border-white/5">
          <div className="flex flex-col gap-32 md:gap-56 w-full">
            {data.completed_projects.map((project, i) => (
              <ProjectPanel key={i} project={project} index={i} />
            ))}
          </div>
        </section>

        {/* Pricing / Engagement Models */}
        <section id="pricing" className="w-full py-24 md:py-48 px-6 max-w-7xl bg-[#020617] border-t border-white/5">
          <SectionHeader 
            centered
            title="Compute Packages" 
            subtitle="Flexible investment models engineered to match your current development velocity and business stage."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {data.pricing.map((plan, i) => (
              <PricingCard key={i} plan={plan} index={i} />
            ))}
          </div>
        </section>

        {/* FAQ - AI Style */}
        <section className="w-full py-24 md:py-48 px-6 max-w-5xl border-t border-white/5">
           <SectionHeader 
            centered
            title="Neural Queries" 
            subtitle="Common inquiries processed through our logic core. Transparency is our default protocol."
          />
          <div className="space-y-6">
            {data.faq.map((item, i) => (
              <motion.details
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="group bg-slate-950/50 border border-white/5 rounded-[2rem] overflow-hidden transition-all hover:border-cyan-500/20"
              >
                <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                  <span className="text-lg md:text-xl font-bold text-white pr-6 italic">{item.question}</span>
                  <div className="text-cyan-500 transition-transform group-open:rotate-180">
                    <ChevronRight size={24} />
                  </div>
                </summary>
                <div className="px-8 pb-8 text-slate-400 font-light leading-relaxed md:text-lg">
                  {item.answer}
                </div>
              </motion.details>
            ))}
          </div>
        </section>

        {/* Elite Contact Section */}
        <section id="connect" className="w-full py-24 md:py-48 px-6 relative overflow-hidden bg-[#020617] border-t border-white/5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 blur-[150px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
            <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-black text-white italic tracking-tighter leading-[0.8] mb-12">
              Ready to <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Upgrade?</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-400 mb-16 max-w-2xl font-light">
              Secure a development slot today. We are currently accepting high-impact projects for {new Date().getFullYear()} Q2-Q3.
            </p>
            
            <a href={`mailto:${data.brand.email}`} className="group relative h-20 md:h-24 px-12 md:px-20 bg-white text-black flex items-center justify-center gap-4 rounded-full font-black uppercase tracking-widest text-lg md:text-2xl shadow-[0_0_50px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 transition-all">
              <Mail size={32} />
              Initialize Project
              <ArrowRight size={32} className="group-hover:translate-x-2 transition-transform" />
            </a>

            <div className="mt-20 flex gap-8">
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all">
                <Github size={24} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all">
                <Twitter size={24} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all">
                <Rocket size={24} />
              </a>
            </div>
          </div>
        </section>

        {/* Futuristic Footer */}
        <footer className="w-full py-12 px-6 border-t border-white/5 bg-[#01030d] text-center md:text-left">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
            <div>
              <div className="text-2xl font-black text-white mb-2 italic tracking-tighter">
                {data.brand.name}<span className="text-cyan-500">.</span>
              </div>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em]">
                {data.brand.tagline}
              </p>
            </div>
            
            <div className="flex flex-col items-center md:items-end gap-2 text-slate-500 text-[10px] font-bold uppercase tracking-widest">
              <div>{data.footer.copyright}</div>
              <div className="text-cyan-400/40">Status: Stable Build 2.0.4</div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
