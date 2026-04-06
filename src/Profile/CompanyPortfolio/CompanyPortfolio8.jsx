import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CompanyPortfolio as data } from './CompanyPortfolioData';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, ContactShadows } from '@react-three/drei';
import { ArrowUpRight, Play, CircleDot } from 'lucide-react';

// ==========================================
// 1. NATIVE WEBGL COMPONENT (THE CENTERPIECE)
// ==========================================
function CinematicMesh() {
  const meshRef = useRef();
  
  useFrame((state) => {
    if(!meshRef.current) return;
    meshRef.current.rotation.y += 0.002;
    meshRef.current.rotation.x += 0.001;
    // Gentle bobbing effect based on time
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh ref={meshRef} position={[0, 0, 0]} scale={1.2}>
        <torusKnotGeometry args={[1.8, 0.5, 256, 64]} />
        <meshPhysicalMaterial 
           color="#1a1a1a"
           metalness={0.9}
           roughness={0.1}
           clearcoat={1}
           clearcoatRoughness={0.1}
           envMapIntensity={2}
        />
      </mesh>
    </Float>
  );
}

export default function CompanyPortfolio8() {
  
  // Design Tokens
  const textHeading = "text-white font-sans font-black tracking-tighter";
  const textSerif = "font-serif italic font-light text-neutral-400";
  const labelText = "font-sans text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold text-neutral-500";

  return (
    <div className="min-h-screen bg-[#050505] text-neutral-300 font-sans selection:bg-white selection:text-black overflow-x-hidden relative">
      
      {/* 
        ========================================
        WEBGL BACKGROUND CANVAS 
        ======================================== 
      */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40 md:opacity-50 transition-opacity duration-1000">
        <Canvas camera={{ position: [0, 0, 10], fov: 45 }} dpr={[1, 2]}>
          <ambientLight intensity={0.2} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#ffffff" />
          <spotLight position={[-10, -10, -10]} angle={0.15} penumbra={1} intensity={10} color="#3b82f6" />
          <CinematicMesh />
          <Environment preset="city" />
          <ContactShadows position={[0, -3.5, 0]} opacity={0.4} scale={20} blur={2} far={4} />
        </Canvas>
      </div>

      {/* 
        ========================================
        MAIN UI (OVERLAYED ABOVE WEBGL)
        ======================================== 
      */}
      <div className="relative z-10 flex flex-col min-h-screen border-x border-white/5 max-w-[1600px] mx-auto">
        
        {/* HEADER */}
        <nav className="fixed top-0 inset-x-0 z-50 mix-blend-difference px-6 md:px-12 py-8 flex items-center justify-between pointer-events-none">
           <div className={`text-xl font-bold tracking-tighter text-white pointer-events-auto`}>
             {data.brand.name}
           </div>
           <div className={`${labelText} hidden md:flex items-center gap-12 text-white/50 pointer-events-auto`}>
              <a href="#work" className="hover:text-white transition-colors">Case Studies</a>
              <a href="#services" className="hover:text-white transition-colors">Frameworks</a>
              <a href="#contact" className="hover:text-white transition-colors">Discussions</a>
           </div>
           <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors pointer-events-auto text-white">
             <CircleDot size={18} strokeWidth={1.5} />
           </button>
        </nav>

        {/* HERO SECTION */}
        <section className="min-h-[100svh] flex flex-col justify-start md:justify-center px-6 md:px-12 pt-40 md:pt-32 pb-24 relative">
           
           <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} className="max-w-5xl mt-12 md:mt-0">
              <div className={`${labelText} mb-8 md:mb-12 flex items-center gap-4`}>
                 <span className="w-8 h-[1px] bg-neutral-500 shrink-0"></span> <span className="truncate">{data.brand.business_type}</span>
              </div>

              {/* Mixed Typography Header */}
              <h1 className={`text-[3.25rem] sm:text-6xl md:text-8xl lg:text-[110px] leading-[1] md:leading-[0.9] mb-8 break-words hyphens-auto ${textHeading}`}>
                {data.hero.title.split(' ').map((word, i) => {
                   // Make alternating words serif to create dramatic Awwwards tension
                   if (i % 3 === 0 && i !== 0) {
                      return <span key={i} className={`${textSerif} pr-3 md:pr-4 inline-block`}>{word} </span>
                   }
                   return <span key={i} className="pr-3 md:pr-4 inline-block">{word}</span>
                })}
              </h1>

              <div className="grid md:grid-cols-2 gap-12 md:gap-24 mt-16 md:mt-24 items-end">
                 <p className="text-xl md:text-2xl font-light leading-relaxed max-w-lg text-neutral-400 mix-blend-difference">
                   {data.hero.subtitle}
                 </p>
                 <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 md:justify-end">
                    <a href="#contact" className="group flex items-center gap-4 border-b border-white/30 pb-2 hover:border-white transition-colors">
                      <span className={`${labelText} text-white`}>{data.hero.cta_primary}</span>
                      <ArrowUpRight size={16} className="text-white group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href="#work" className="group flex items-center gap-4 border-b border-transparent pb-2 hover:border-white/30 transition-colors">
                       <Play size={12} className="text-white" fill="currentColor" />
                       <span className={`${labelText} text-white`}>{data.hero.cta_secondary}</span>
                    </a>
                 </div>
              </div>
           </motion.div>
        </section>

        {/* 
          ========================================
          STATISTICS STRIP
          ======================================== 
        */}
        <section className="grid grid-cols-2 md:grid-cols-4 border-y border-white/5 divide-x divide-y md:divide-y-0 divide-white/5 bg-[#050505]/40 backdrop-blur-xl">
           {data.stats.map((stat, i) => (
             <div key={i} className="p-10 md:p-16 flex flex-col justify-center hover:bg-white/[0.02] transition-colors group">
                <div className={`${textHeading} text-5xl md:text-7xl mb-4 group-hover:scale-105 transition-transform origin-left`}>{stat.value}</div>
                <div className={labelText}>{stat.label}</div>
             </div>
           ))}
        </section>

        {/* 
          ========================================
          THE MASSIVE 360 MARQUEE (TECHNOLOGIES)
          ======================================== 
        */}
        <section className="py-24 md:py-32 border-b border-white/5 relative bg-[#050505]/20 backdrop-blur-sm overflow-hidden mix-blend-difference">
           
           <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none"></div>
           <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none"></div>
           
           <div className="flex gap-16 animate-[marquee_50s_linear_infinite] px-8 hover:[animation-play-state:paused] whitespace-nowrap cursor-default">
              {[...data.technology_stack.frontend, ...data.technology_stack.backend, ...data.technology_stack.database, ...data.technology_stack.mobile].map((tech, i) => (
                 <div key={i} className={`text-6xl md:text-8xl font-black uppercase tracking-tighter text-transparent italic hover:text-white transition-colors duration-500`} style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.15)' }}>
                    {tech}
                 </div>
              ))}
           </div>
        </section>

        {/* 
          ========================================
          CASE STUDIES (EDITORIAL GRID)
          ======================================== 
        */}
        <section id="work" className="py-32 px-6 md:px-12 bg-[#050505]">
           <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
              <h2 className={`text-5xl md:text-7xl ${textHeading}`}>
                Selected <span className={textSerif}>Exhibitions</span>
              </h2>
              <div className={`${labelText} flex items-center gap-4`}>
                 <span className="w-12 h-[1px] bg-neutral-600"></span> {data.completed_projects.length} Works
              </div>
           </div>

           <div className="space-y-12">
             {data.completed_projects.map((proj, i) => (
                <div key={i} className="group relative border border-white/5 bg-white/[0.01] overflow-hidden hover:bg-white/[0.03] transition-colors p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center">
                   
                   {/* Abstract Dark Mode Image Frame */}
                   <div className="w-full md:w-1/2 aspect-video bg-[#0A0A0A] border border-white/10 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif italic text-white/10 text-6xl md:text-8xl group-hover:scale-110 transition-transform duration-1000">0{i + 1}</div>
                   </div>

                   {/* Editorial Content */}
                   <div className="w-full md:w-1/2 flex flex-col justify-center">
                      <div className={`${labelText} mb-6 text-white/40`}>{proj.type}</div>
                      <h3 className={`text-4xl md:text-5xl mb-6 ${textHeading}`}>{proj.project_name}</h3>
                      <p className="text-neutral-400 font-light leading-relaxed mb-10 text-lg">{proj.description}</p>
                      
                      <div className="grid grid-cols-2 gap-8 mb-10">
                        <div>
                           <div className="text-[9px] uppercase tracking-[0.2em] text-neutral-600 mb-2">The Catalyst</div>
                           <div className="text-sm font-medium text-white">{proj.problem}</div>
                        </div>
                        <div>
                           <div className="text-[9px] uppercase tracking-[0.2em] text-neutral-600 mb-2">The Metric</div>
                           <div className="text-sm font-medium text-emerald-400">{proj.result[0]}</div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mt-auto">
                        {proj.tech_stack.slice(0, 3).map((tech, idx) => (
                           <span key={idx} className="px-3 py-1 border border-white/10 text-[10px] uppercase tracking-widest text-neutral-400 rounded-full">
                             {tech}
                           </span>
                        ))}
                      </div>
                   </div>
                   
                   {/* Absolute hover arrow */}
                   <div className="absolute top-8 right-8 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:border-white/30 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                      <ArrowUpRight size={16} className="text-white" />
                   </div>
                </div>
             ))}
           </div>
        </section>

        {/* 
          ========================================
          SERVICES (MINIMALIST ACCORDION VIBE)
          ======================================== 
        */}
        <section id="services" className="py-32 px-6 md:px-12 bg-[#050505]/80 backdrop-blur-2xl border-t border-white/5">
           <h2 className={`text-5xl md:text-7xl mb-24 ${textHeading}`}>
             Our <span className={textSerif}>Disciplines</span>
           </h2>

           <div className="flex flex-col border-t border-white/10">
              {data.services.map((service, i) => (
                 <div key={i} className="py-12 md:py-16 border-b border-white/10 grid md:grid-cols-12 gap-8 md:gap-16 group hover:bg-white/[0.02] transition-colors px-6 md:px-12 -mx-6 md:-mx-12">
                    <div className="md:col-span-2">
                       <span className={`${labelText} text-white/30`}>/ 0{i + 1}</span>
                    </div>
                    <div className="md:col-span-4">
                       <h3 className={`text-3xl md:text-4xl ${textHeading}`}>{service.category}</h3>
                    </div>
                    <div className="md:col-span-6">
                       <p className="text-lg font-light leading-relaxed text-neutral-400 mb-8">{service.description}</p>
                       <ul className="grid grid-cols-2 gap-y-4">
                         {service.features.map((feat, idx) => (
                           <li key={idx} className="flex items-center gap-3">
                             <CircleDot size={8} className="text-white/20" />
                             <span className="text-sm tracking-wide text-neutral-300">{feat}</span>
                           </li>
                         ))}
                       </ul>
                    </div>
                 </div>
              ))}
           </div>
        </section>

        {/* 
          ========================================
          TESTIMONIALS (360 AWWWARDS TICKER)
          ======================================== 
        */}
        <section className="py-32 relative bg-black overflow-hidden border-b border-white/5">
           <div className={`${labelText} text-center mb-16 relative z-10`}>Voices of Leadership</div>
           
           <div className="relative flex">
              <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
              <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
              
              <div className="flex gap-16 md:gap-32 animate-[marquee_60s_linear_infinite] px-8 hover:[animation-play-state:paused] whitespace-nowrap cursor-default">
                  {[...data.testimonials, ...data.testimonials, ...data.testimonials].map((test, i) => (
                    <div key={i} className="w-[85vw] md:w-[700px] shrink-0 flex flex-col items-center text-center">
                      <p className={`text-2xl md:text-4xl leading-snug mb-12 whitespace-normal text-white ${i % 2 === 0 ? textHeading : textSerif}`}>
                        "{test.feedback}"
                      </p>
                      <div className="h-8 w-[1px] bg-white/20 mb-6"></div>
                      <div className="text-sm font-bold tracking-widest uppercase text-white mb-2">{test.name.split(',')[0]}</div>
                      <div className="text-[10px] text-neutral-500 tracking-[0.2em] uppercase">
                        {test.name.split(',')[1] || "Verified Partner"}
                      </div>
                    </div>
                  ))}
              </div>
           </div>
        </section>

        {/* 
          ========================================
          PRICING PANELS
          ======================================== 
        */}
        <section id="pricing" className="py-32 px-6 md:px-12 bg-[#050505]">
           <div className="flex flex-col items-center mb-24 text-center">
              <h2 className={`text-5xl md:text-7xl mb-6 ${textHeading}`}>
                Scale <span className={textSerif}>Architecture</span>
              </h2>
              <p className="text-xl font-light text-neutral-400 max-w-2xl">Deploy enterprise grade software without the enterprise bloat. Transparent infrastructure mapping.</p>
           </div>
           
           <div className="grid lg:grid-cols-3 gap-8">
              {data.pricing.map((tier, i) => (
                 <div key={i} className={`p-10 border transition-all duration-500 hover:-translate-y-2 flex flex-col ${i === 1 ? 'border-white/30 bg-white/[0.03] shadow-[0_0_40px_rgba(255,255,255,0.05)]' : 'border-white/10 bg-black hover:border-white/20'}`}>
                    <div className={`${labelText} mb-8 ${i === 1 ? 'text-white' : ''}`}>{tier.plan}</div>
                    <div className={`text-5xl md:text-6xl mb-10 ${textHeading}`}>{tier.price}</div>
                    
                    <ul className="flex-1 space-y-6 mb-12 border-t border-white/10 pt-8">
                      {tier.features.map((feat, idx) => (
                        <li key={idx} className="flex gap-4 items-start">
                          <CircleDot size={14} className={`mt-1 shrink-0 ${i === 1 ? 'text-white' : 'text-neutral-600'}`} />
                          <span className="text-sm font-light leading-relaxed text-neutral-300">{feat}</span>
                        </li>
                      ))}
                    </ul>

                    <button className={`w-full py-5 border text-xs font-bold tracking-[0.2em] uppercase transition-colors ${i === 1 ? 'border-white bg-white text-black hover:bg-neutral-200' : 'border-white/20 text-white hover:bg-white hover:text-black'}`}>
                      Initiate Protocol
                    </button>
                 </div>
              ))}
           </div>
        </section>

        {/* 
          ========================================
          FOOTER / MASSIVE CTA
          ======================================== 
        */}
        <footer id="contact" className="py-32 md:py-48 flex flex-col items-center justify-center text-center border-t border-white/5 relative overflow-hidden">
           {/* Subtle glow behind text */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full filter blur-[100px] pointer-events-none"></div>
           
           <div className="relative z-10">
              <div className={`${labelText} mb-12`}>End of Transmission</div>
              <h2 className={`text-6xl md:text-[120px] leading-[0.9] mb-16 ${textHeading}`}>
                Initiate <br/>
                <span className={textSerif}>Dialogue.</span>
              </h2>

              <a href={`mailto:${data.contact.email}`} className="text-sm font-bold tracking-[0.2em] uppercase text-white border-b border-white pb-2 hover:opacity-50 transition-opacity">
                {data.contact.email}
              </a>

              <div className="mt-32 flex flex-col items-center gap-6">
                <div className="w-[1px] h-16 bg-white/20"></div>
                <div className="text-2xl font-bold tracking-tighter text-white">{data.brand.name}</div>
                <div className="text-[9px] uppercase tracking-widest text-neutral-600">
                  {data.footer.copyright} All Systems Operational.
                </div>
              </div>
           </div>
        </footer>

      </div>

      {/* 
        ========================================
        CSS KEYFRAMES FOR MARQUEES
        ======================================== 
      */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
