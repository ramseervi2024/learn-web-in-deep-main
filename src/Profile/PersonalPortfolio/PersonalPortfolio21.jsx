import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioprofile as data } from './PersonalPortfolioData';
import { 
  Terminal, Cpu, Code, Database, Globe, 
  Terminal as TerminalIcon, ChevronRight, Activity, 
  Shield, Zap, Github, Twitter, Linkedin, Mail,
  Command, Box, Maximize2, Power
} from 'lucide-react';

const MatrixRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@&%*";
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = new Array(Math.floor(columns)).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#0f0";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 opacity-10 pointer-events-none z-0" />;
};

const BlinkingCursor = () => (
  <motion.span 
    animate={{ opacity: [1, 0] }}
    transition={{ duration: 0.8, repeat: Infinity }}
    className="inline-block w-2 h-5 bg-[#0f0] align-middle ml-1"
  />
);

const TerminalCard = ({ children, title = "SYS_MODULE", className = "" }) => (
  <div className={`bg-black/90 border border-green-500/30 rounded-lg overflow-hidden flex flex-col ${className}`}>
    <div className="bg-green-500/10 border-b border-green-500/30 px-4 py-2 flex justify-between items-center text-[10px] font-mono text-green-500/60 uppercase tracking-widest">
      <div className="flex gap-2">
         <div className="w-2 h-2 rounded-full bg-red-500/40" />
         <div className="w-2 h-2 rounded-full bg-yellow-500/40" />
         <div className="w-2 h-2 rounded-full bg-green-500/40" />
      </div>
      <span>{title}</span>
      <Maximize2 size={10} />
    </div>
    <div className="p-6 relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] pointer-events-none z-10 bg-[length:100%_2px]" />
      {children}
    </div>
  </div>
);

export default function PersonalPortfolio21() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="bg-[#050505] text-[#0f0] font-mono selection:bg-green-500/30 selection:text-white min-h-screen relative overflow-x-hidden text-left pb-20">
      <MatrixRain />
      
      {/* Header / Top Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 border-b border-green-500/20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center text-left">
           <div className="flex items-center gap-4">
              <TerminalIcon size={18} className="animate-pulse" />
              <span className="text-xs font-black uppercase tracking-[0.2em]">{data.personal_info.name}@0x97A9:~$</span>
           </div>
           
           <div className="hidden lg:flex gap-10 text-[9px] uppercase tracking-widest font-black text-green-500/40">
              {['About', 'Projects', 'Stack', 'Contact'].map(link => (
                <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-green-400 transition-colors">./{link}</a>
              ))}
           </div>

           <div className="flex items-center gap-4">
              <span className="text-[9px] text-green-700 font-black animate-pulse uppercase tracking-widest">EST_LINK: OK</span>
              <button className="p-2 border border-green-500/30 rounded hover:bg-green-500/10 transition-all">
                <Power size={14} />
              </button>
           </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-32">
        {/* HERO SECTION */}
        <section id="about" className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-32">
           <div className="lg:col-span-2 text-left">
              <div className="bg-green-500/5 border border-green-500/20 p-8 rounded-lg mb-10 overflow-hidden relative group">
                 <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
                    <Command size={100} />
                 </div>
                 <span className="text-[10px] font-black uppercase tracking-[0.4em] text-green-800 mb-6 block">// INITIALIZING_PERSONAL_MODULE...</span>
                 <h1 className="text-4xl md:text-6xl font-black uppercase leading-none mb-8 tracking-tighter truncate italic">
                    {data.personal_info.name}
                    <BlinkingCursor />
                 </h1>
                 <p className="text-lg text-green-500/60 leading-relaxed max-w-2xl mb-12 border-l-2 border-green-500/20 pl-6 italic">
                    {data.hero.subtitle}
                 </p>
                 <div className="flex flex-wrap gap-6">
                    <button className="px-8 py-4 bg-green-500/10 border border-green-500/40 text-green-500 text-xs font-black uppercase tracking-widest hover:bg-green-500 hover:text-black transition-all">
                       Download_Kernel.exe
                    </button>
                    <div className="flex gap-4">
                       {[Mail, Github, Linkedin].map((Icon, i) => (
                         <button key={i} className="w-12 h-12 border border-green-500/20 flex items-center justify-center text-green-500/40 hover:text-green-500 hover:bg-green-500/5 transition-all">
                            <Icon size={18} />
                         </button>
                       ))}
                    </div>
                 </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                 <TerminalCard title="SYSTEM_INFO" className="flex-1">
                    <div className="space-y-4 text-[11px] font-mono">
                       <div className="flex justify-between items-center border-b border-green-500/10 pb-2">
                          <span className="text-green-900">Uptime:</span>
                          <span className="text-green-500 font-black italic">{data.personal_info.experience_years} Years_Sync</span>
                       </div>
                       <div className="flex justify-between items-center border-b border-green-500/10 pb-2">
                          <span className="text-green-900">Location:</span>
                          <span className="text-green-500 font-bold uppercase italic">{data.personal_info.location}</span>
                       </div>
                       <div className="flex justify-between items-center border-b border-green-500/10 pb-2">
                          <span className="text-green-900">Status:</span>
                          <span className="text-emerald-500 animate-pulse font-black italic">Active_Deploy</span>
                       </div>
                    </div>
                 </TerminalCard>
                 <TerminalCard title="ACTIVITY_LOG" className="flex-1">
                    <div className="flex flex-col gap-3">
                       <Activity size={40} className="text-green-500/20 mb-2" />
                       <p className="text-[10px] text-green-500/40 leading-relaxed italic">
                         Strategic technical lead specializing in high-stakes mobile architecture. Collapsing complex logic into production-ready pipelines.
                       </p>
                    </div>
                 </TerminalCard>
              </div>
           </div>

           <div className="flex flex-col gap-10 text-left">
              <TerminalCard title="HARDWARE_STACK" className="h-[400px]">
                 <div className="space-y-6">
                    {data.technology_stack.mobile.map((tech, i) => (
                       <div key={i} className="flex flex-col gap-2">
                          <div className="flex justify-between items-end text-[10px] uppercase font-black tracking-widest text-left">
                             <span>{tech}</span>
                             <span className="text-green-800">99.9%</span>
                          </div>
                          <div className="w-full h-1 bg-green-950 rounded-full overflow-hidden">
                             <motion.div 
                               initial={{ width: 0 }}
                               whileInView={{ width: '99.9%' }}
                               transition={{ duration: 1, delay: i * 0.1 }}
                               className="h-full bg-green-500 shadow-[0_0_10px_#0f0]" 
                             />
                          </div>
                       </div>
                    ))}
                 </div>
              </TerminalCard>
              <div className="bg-green-500/5 border border-green-500/20 p-6 rounded-lg text-left">
                 <Shield className="text-green-500/40 mb-4" size={24} />
                 <h3 className="text-xs font-black uppercase tracking-widest text-green-500 mb-2 italic">Security_Clearance</h3>
                 <p className="text-[10px] text-green-800 italic">Advanced encryption and operational security protocols implemented across all project nodes.</p>
              </div>
           </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-20">
           <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20 text-left">
              <div className="text-left">
                 <span className="text-[10px] font-black tracking-[0.5em] text-green-800 uppercase mb-4 block">// EXECUTION_ARCHIVE.LOG</span>
                 <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic">Projects_</h2>
              </div>
              <p className="text-green-900 text-xs text-left mb-4 uppercase font-bold italic">chronological technical audits.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
              {data.completed_projects.map((project, i) => (
                 <motion.div
                    key={i}
                    whileHover={{ y: -5 }}
                    className="p-8 bg-green-500/5 border border-green-500/10 rounded-lg hover:border-green-500/40 transition-all flex flex-col justify-between h-[450px] relative group overflow-hidden text-left"
                 >
                    <div className="absolute top-0 right-0 p-4 text-green-500/5 text-4xl italic font-black group-hover:text-green-500/20 transition-colors uppercase italic pointer-events-none">_OBJ_{i}</div>
                    <div className="text-left">
                       <span className="text-[9px] font-black text-green-900 uppercase block mb-6 italic tracking-widest">MODULE: SYSTEM_SYNC_{100 + i}</span>
                       <h3 className="text-2xl font-black uppercase text-green-100 mb-6 group-hover:text-green-500 transition-colors italic leading-none">{project.project_name}</h3>
                       <p className="text-[11px] text-green-500/40 leading-relaxed line-clamp-4 italic border-l border-green-500/20 pl-4">
                          {project.description}
                       </p>
                    </div>
                    <div className="pt-8 border-t border-green-500/10 text-left">
                       <div className="flex flex-wrap gap-2 mb-8">
                          {project.tech_stack.slice(0, 3).map((tech, j) => (
                             <span key={j} className="text-[8px] font-bold uppercase tracking-widest px-2 py-1 bg-green-500/10 text-green-500/60 rounded italic">_{tech}</span>
                          ))}
                       </div>
                       <button className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-green-500 group-hover:gap-5 transition-all italic">
                          ./ACCESS_DEPTH <ChevronRight size={14} />
                       </button>
                    </div>
                 </motion.div>
              ))}
           </div>
        </section>

        {/* STACK / KERNEL */}
        <section id="stack" className="py-20">
           <TerminalCard title="KERNEL_STACK_OVERVIEW" className="w-full h-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-left">
                 {Object.entries(data.technology_stack).map(([category, techs], i) => (
                    <div key={category} className="space-y-6 text-left">
                       <h3 className="text-[10px] font-black uppercase text-green-500 bg-green-500/10 px-3 py-1 rounded w-fit italic">[{category}]</h3>
                       <ul className="space-y-4">
                          {Array.isArray(techs) && techs.map((tech, j) => (
                             <li key={j} className="flex items-center gap-3 group text-left">
                                <div className="w-1 h-1 bg-green-950 group-hover:bg-green-500 transition-all rounded-full" />
                                <span className="text-[11px] text-green-900 group-hover:text-green-400 transition-all italic">{tech}</span>
                             </li>
                          ))}
                       </ul>
                    </div>
                 ))}
              </div>
           </TerminalCard>
        </section>

        {/* CONTACT / ESTABLISH_LINK */}
        <footer id="contact" className="py-20 mt-32 border-t border-green-500/20 text-left">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 text-left">
              <div className="text-left">
                 <h2 className="text-5xl font-black italic uppercase italic mb-8 tracking-tighter italic">Establish_Link.</h2>
                 <p className="text-green-500/40 text-sm max-w-sm italic mb-12 leading-relaxed">
                    Open for strategic mobile architecture pits and mission-critical engineering deployments. State your objective.
                 </p>
                 <div className="space-y-4 text-left">
                    <span className="text-[10px] font-black uppercase tracking-widest text-green-900 block mb-4">Transmission_B_Addr</span>
                    <a href={`mailto:${data.personal_info.email}`} className="text-2xl md:text-4xl font-black italic hover:text-green-400 transition-colors underline decoration-green-500/20 underline-offset-[10px]">
                       {data.personal_info.email}
                    </a>
                 </div>
              </div>

              <div className="flex flex-col justify-end items-start md:items-end gap-16 text-left">
                 <div className="flex gap-20 text-left">
                    <div className="flex flex-col gap-4 text-left">
                       <span className="text-[10px] font-black uppercase text-green-900">Directories</span>
                       {['./About', './Projects', './Stack'].map(l => (
                         <a key={l} href={`#${l.replace('./', '').toLowerCase()}`} className="text-xs hover:text-green-400 transition-colors uppercase tracking-widest">{l}</a>
                       ))}
                    </div>
                    <div className="flex flex-col gap-4 text-left">
                       <span className="text-[10px] font-black uppercase text-green-900">Transmitters</span>
                       {['Twitter', 'GitHub', 'LinkedIn'].map(l => (
                         <a key={l} href="#" className="text-xs hover:text-green-400 transition-colors uppercase tracking-widest">{l}</a>
                       ))}
                    </div>
                 </div>
                 <div className="flex flex-col md:flex-row items-start md:items-center gap-8 text-[11px] font-black uppercase text-green-900 tracking-widest italic">
                    <span>{data.personal_info.location} // B_ADDR: 0x242628</span>
                    <span>© {new Date().getFullYear()} CODE_MATRIX_IDENTITY_SYS</span>
                 </div>
              </div>
           </div>
        </footer>
      </main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;800&display=swap');
        
        body {
          background-color: #050505;
          font-family: 'JetBrains Mono', monospace;
        }

        ::-webkit-scrollbar {
          width: 2px;
        }
        ::-webkit-scrollbar-track {
          background: #050505;
        }
        ::-webkit-scrollbar-thumb {
          background: #004400;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #006600;
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
}
