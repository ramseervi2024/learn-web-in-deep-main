import React, { Suspense, useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Environment, ContactShadows, OrbitControls } from '@react-three/drei';
import { FullTimeFreelancerProfile as data } from './FreelancerPortfolioData';
import { 
  Rocket, Shield, Zap, Code2, Layers, 
  Terminal, Smartphone, Cpu, Mail, Phone,
  Github, Twitter, ArrowUpRight, ChevronDown,
  Menu, X, Check, ArrowRight
} from 'lucide-react';

// --- 3D Components ---

const Shape = ({ position, color, speed, distort }) => {
  const mesh = useRef();
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    mesh.current.rotation.x = Math.cos(time / 4) * 0.2;
    mesh.current.rotation.y = Math.sin(time / 2) * 0.2;
  });

  return (
    <Float speed={speed} rotationIntensity={2} floatIntensity={2}>
      <mesh ref={mesh} position={position}>
        <Sphere args={[1, 64, 64]}>
          <MeshDistortMaterial
            color={color}
            attach="material"
            distort={distort}
            speed={speed}
            roughness={0}
          />
        </Sphere>
      </mesh>
    </Float>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
      
      <Shape position={[-3, 2, -5]} color="#06b6d4" speed={2} distort={0.5} />
      <Shape position={[3, -2, -8]} color="#3b82f6" speed={1.5} distort={0.4} />
      <Shape position={[-5, -4, -10]} color="#8b5cf6" speed={1} distort={0.3} />
      
      <Environment preset="city" />
      <ContactShadows 
        position={[0, -4.5, 0]} 
        opacity={0.4} 
        scale={40} 
        blur={2} 
        far={10} 
      />
    </>
  );
};

// --- UI Components ---

const Navbar = ({ scrolled, activeSection, setMenuOpen }) => (
  <nav className={`fixed top-8 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 w-[95%] max-w-4xl px-6 py-3 rounded-2xl border border-white/5 backdrop-blur-xl flex justify-between items-center ${
    scrolled ? 'bg-black/60 shadow-2xl translate-y-[-10px]' : 'bg-transparent'
  }`}>
    <div className="flex items-center gap-2 group cursor-pointer">
      <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center text-black font-black uppercase text-sm group-hover:rotate-12 transition-transform">R</div>
      <span className="text-white font-bold tracking-tight">{data.brand.name}</span>
    </div>
    
    <div className="hidden md:flex items-center gap-8">
      {['Architecture', 'Projects', 'Pricing', 'Connect'].map((item) => (
        <a 
          key={item} 
          href={`#${item.toLowerCase()}`}
          className="text-xs font-bold uppercase tracking-widest text-white/50 hover:text-cyan-400 transition-all relative group"
        >
          {item}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300" />
        </a>
      ))}
    </div>

    <button 
      onClick={() => setMenuOpen(true)}
      className="md:hidden text-white hover:text-cyan-400"
    >
      <Menu size={24} />
    </button>
  </nav>
);

const SectionHeading = ({ title, subtitle, centered = false }) => (
  <div className={`mb-24 ${centered ? 'text-center max-w-3xl mx-auto' : ''}`}>
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="text-5xl md:text-7xl font-black text-white mb-6 italic tracking-tighter leading-none">
        {title}<span className="text-cyan-500">.</span>
      </h2>
      <p className="text-xl text-white/50 font-light leading-relaxed">
        {subtitle}
      </p>
    </motion.div>
  </div>
);

export default function FreelancerPortfolio10() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scaleProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="bg-[#050505] text-white min-h-screen selection:bg-cyan-500/30 overflow-x-hidden font-sans">
      
      {/* 3D Background Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <Canvas camera={{ position: [0, 0, 10], fov: 35 }}>
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      <Navbar scrolled={scrolled} setMenuOpen={setMenuOpen} />

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[200] bg-black backdrop-blur-2xl p-12 flex flex-col justify-between"
          >
            <div className="flex justify-between items-center">
              <span className="text-xl font-black italic tracking-tighter text-cyan-400">RPS.</span>
              <button onClick={() => setMenuOpen(false)} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white">
                <X size={24} />
              </button>
            </div>
            
            <div className="flex flex-col gap-8">
              {['Architecture', 'Projects', 'Pricing', 'Connect'].map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-6xl font-black italic tracking-tighter hover:text-cyan-400 transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </div>
            
            <div className="text-white/30 text-xs font-bold tracking-widest uppercase italic">
              Status // Online.Spatial
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative z-10 pt-48">
        
        {/* --- Hero Section --- */}
        <section className="container mx-auto px-6 mb-48 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-12"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-ping" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/70">Spatial Protocol 3.0</span>
          </motion.div>
          
          <h1 className="text-6xl md:text-[8rem] font-black tracking-tighter leading-[0.8] italic mb-12">
            Build. <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">Scale.</span> <br/> Dominate.
          </h1>
          
          <p className="max-w-2xl text-xl text-white/50 font-light leading-relaxed mb-12">
            {data.hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <button className="h-16 px-12 rounded-2xl bg-cyan-500 text-black font-black uppercase tracking-widest hover:scale-105 active:scale-95 shadow-[0_0_50px_rgba(6,182,212,0.3)] transition-all">
              {data.hero.cta_primary}
            </button>
            <button className="h-16 px-12 rounded-2xl border border-white/10 hover:bg-white/5 text-white font-black uppercase tracking-widest transition-all">
              {data.hero.cta_secondary}
            </button>
          </div>
        </section>

        {/* --- Stats Strip --- */}
        <section className="w-full py-12 md:py-20 border-y border-white/5 backdrop-blur-md mb-48">
          <div className="container mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12">
            {data.stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <div className="text-4xl md:text-6xl font-black italic text-white mb-2">{stat.value}</div>
                <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-400/50">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- Services Section --- */}
        <section id="architecture" className="container mx-auto px-6 mb-48">
          <SectionHeading 
            title="System Architecture" 
            subtitle="We engineer software at the intersection of precision and scale. Our protocols are built for the next generation of digital leaders."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] transition-all hover:scale-[1.02] cursor-none"
              >
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-8 border border-white/5 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  {i === 0 && <Code2 size={28} />}
                  {i === 1 && <Smartphone size={28} />}
                  {i === 2 && <Terminal size={28} />}
                  {i === 3 && <Layers size={28} />}
                  {i === 4 && <Zap size={28} />}
                  {i === 5 && <Shield size={28} />}
                </div>
                
                <h3 className="text-2xl font-black italic text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {service.category}
                </h3>
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
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- Projects Section --- */}
        <section id="projects" className="container mx-auto px-6 mb-48">
          <SectionHeading 
            title="Execution Core" 
            subtitle="A showcase of high-impact products engineered for industry dominance."
          />
          
          <div className="space-y-48">
            {data.completed_projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
              >
                <div className="flex-1 w-full aspect-video rounded-[3rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center text-[15rem] font-black italic text-white/[0.02] uppercase tracking-tighter -rotate-12 select-none">
                    {project.project_name.split(' ')[0]}
                  </div>
                  <div className="absolute bottom-12 left-12 right-12 flex flex-wrap gap-3">
                    {project.tech_stack.map(tech => (
                      <span key={tech} className="px-5 py-2 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/10 text-[10px] font-black uppercase tracking-widest text-white shadow-2xl">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex-1 max-w-xl">
                  <div className="text-cyan-400 font-black uppercase tracking-[0.3em] text-[10px] mb-6">
                    {project.type} // STATUS: SHIPPED
                  </div>
                  <h3 className="text-5xl md:text-7xl font-black italic text-white mb-8 tracking-tighter">
                    {project.project_name}.
                  </h3>
                  <p className="text-xl text-white/50 font-light leading-relaxed mb-10">
                    {project.description}
                  </p>
                  <ul className="space-y-4 mb-12">
                    {project.result.map((res, i) => (
                      <li key={i} className="flex items-center gap-4 text-white/70 font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                        {res}
                      </li>
                    ))}
                  </ul>
                  <button className="inline-flex items-center gap-4 text-white font-black uppercase tracking-widest hover:text-cyan-400 transition-all group">
                    Analyze Case Study <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- Pricing Section --- */}
        <section id="pricing" className="container mx-auto px-6 mb-48">
          <SectionHeading 
            centered
            title="Investment Protocol" 
            subtitle="Secure your development slot with our structured engagement models."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.pricing.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className={`relative p-12 rounded-[3.5rem] border ${
                  i === 1 ? 'bg-cyan-500 text-black border-cyan-400' : 'bg-white/5 border-white/5 text-white'
                }`}
              >
                {i === 1 && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-white text-black font-black uppercase tracking-[0.2em] text-[10px]">
                    Optimized Choice
                  </div>
                )}
                
                <h3 className={`text-xl font-black uppercase tracking-widest mb-4 ${i === 1 ? 'text-black/50' : 'text-white/30'}`}>
                  {plan.plan}
                </h3>
                <div className="text-6xl font-black italic tracking-tighter mb-12">
                  {plan.price}
                </div>
                
                <ul className="space-y-6 mb-12">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <Check size={20} className={i === 1 ? 'text-black' : 'text-cyan-400'} />
                      <span className={`text-sm font-medium ${i === 1 ? 'text-black/70' : 'text-white/50'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full h-16 rounded-2xl font-black uppercase tracking-widest transition-all ${
                  i === 1 ? 'bg-black text-white hover:scale-105 shadow-2xl' : 'bg-white/5 hover:bg-white/10 text-white'
                }`}>
                  Select Protocol
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- Testimonials --- */}
        <section className="container mx-auto px-6 mb-48">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {data.testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="relative"
              >
                <div className="text-8xl italic font-black text-cyan-400/20 absolute -top-12 -left-4">"</div>
                <p className="text-3xl md:text-4xl font-light italic text-white/80 leading-snug mb-8 relative z-10">
                  {t.feedback}
                </p>
                <div>
                  <div className="text-xl font-black text-white italic">{t.name}</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-cyan-400">Verified Client // {t.rating}.0 Protocol</div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- Contact Context --- */}
        <section id="connect" className="container mx-auto px-6 mb-24 relative overflow-hidden rounded-[5rem] bg-gradient-to-br from-cyan-500 to-blue-600 p-24 text-center">
          <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative z-10"
          >
            <h2 className="text-6xl md:text-[10rem] font-black italic text-black tracking-tighter leading-none mb-12">
              Start The <br/> Mission.
            </h2>
            <p className="max-w-xl mx-auto text-xl md:text-2xl text-black/60 font-medium mb-16">
              Our engineering bandwidth is limited. Secure your project slot for immediate architecture planning.
            </p>
            <a href={`mailto:${data.brand.email}`} className="h-24 px-20 inline-flex items-center gap-6 rounded-full bg-black text-white text-2xl font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-2xl">
              <Mail size={32} /> Initialize Project
            </a>
          </motion.div>
        </section>

        {/* --- Footer --- */}
        <footer className="container mx-auto px-6 py-24 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          <div>
            <div className="text-3xl font-black italic text-white mb-2">RPS.</div>
            <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">
              {data.brand.tagline}
            </div>
          </div>
          
          <div className="flex gap-8">
            <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-cyan-400 transition-all">
              <Github size={20} />
            </a>
            <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-cyan-400 transition-all">
              <Twitter size={20} />
            </a>
            <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-cyan-400 transition-all">
              <ArrowUpRight size={20} />
            </a>
          </div>
          
          <div className="text-[10px] font-bold uppercase tracking-widest text-white/30 text-right">
            {data.footer.copyright} <br/>
            <span className="text-cyan-400/30">Build: 10.0.1 // Spatial Deployment</span>
          </div>
        </footer>
      </main>

      {/* Custom Global Cursor (Optional/Decorative) */}
      <div className="fixed top-0 left-0 w-8 h-8 rounded-full border border-cyan-400/50 pointer-events-none z-[300] hidden lg:block blend-difference" />
    </div>
  );
}

