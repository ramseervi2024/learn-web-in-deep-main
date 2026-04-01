import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { 
  ScrollControls, Scroll, useScroll, Float, 
  RoundedBox, Sphere, Cylinder, Box, Points, PointMaterial, 
  Environment, Torus, Octahedron, Sparkles, Backdrop
} from '@react-three/drei';
import * as THREE from 'three';
import { portfolioprofile } from './portfoliodata';

// --- PREMIUM SHADERS & MATERIALS ---
const luxuryGlass = new THREE.MeshPhysicalMaterial({
  color: '#000000',
  metalness: 0.1,
  roughness: 0.05,
  transmission: 0.98,
  ior: 1.6,
  thickness: 3.0,
  clearcoat: 1.0,
  clearcoatRoughness: 0.1
});

const glowingBlue = new THREE.MeshBasicMaterial({ color: new THREE.Color('#3b82f6').multiplyScalar(4), toneMapped: false });
const glowingPurple = new THREE.MeshBasicMaterial({ color: new THREE.Color('#a855f7').multiplyScalar(4), toneMapped: false });
const glowingCyan = new THREE.MeshBasicMaterial({ color: new THREE.Color('#22d3ee').multiplyScalar(5), toneMapped: false });
const darkMetal = new THREE.MeshStandardMaterial({ color: '#050505', metalness: 0.9, roughness: 0.4 });

// --- BACKGROUND NEBULAS (For Glass Refraction) ---
// These sit far back in the canvas to give the clear glass something beautiful to refract!
const NebulaBackground = () => {
   return (
      <group position={[0, -10, -15]}>
         <Sphere args={[15, 64, 64]} position={[-10, 10, -10]}>
            <meshBasicMaterial color="#3b82f6" transparent opacity={0.15} toneMapped={false} />
         </Sphere>
         <Sphere args={[20, 64, 64]} position={[10, -5, -15]}>
            <meshBasicMaterial color="#a855f7" transparent opacity={0.1} toneMapped={false} />
         </Sphere>
      </group>
   )
}

// --- SCENE 1: LAPTOP ---
const MacScene = () => {
  return (
    <Float floatIntensity={3} rotationIntensity={1} speed={1.5}>
      <group position={[0, -0.5, 0]} rotation={[0.2, -0.5, 0]}>
        <RoundedBox args={[5.2, 0.2, 3.6]} radius={0.1} material={luxuryGlass} />
        {/* Keyboard Area */}
        <RoundedBox args={[4.8, 0.1, 1.6]} radius={0.05} position={[0, 0.08, -0.6]} material={darkMetal} />
        <RoundedBox args={[1.8, 0.1, 1.1]} radius={0.05} position={[0, 0.08, 0.9]} material={darkMetal} />
        
        {/* Glowing trim */}
        <Box args={[5.1, 0.05, 0.05]} position={[0, -0.1, 1.8]} material={glowingCyan} />
        
        {/* Screen Group */}
        <group position={[0, 0.1, -1.8]} rotation={[-0.2, 0, 0]}>
          <RoundedBox args={[5.2, 3.8, 0.1]} position={[0, 1.9, 0]} radius={0.1} material={luxuryGlass} />
          {/* Active Display Panel */}
          <Box args={[4.9, 3.5, 0.05]} position={[0, 1.9, 0.05]}>
             <meshStandardMaterial color="#000" metalness={0.8} roughness={0.2} />
          </Box>
          {/* Holographic UI Projections popping OUT of screen */}
          <Box args={[1.5, 0.6, 0.02]} position={[-1.2, 2.5, 0.3]} material={glowingBlue} />
          <RoundedBox args={[1.2, 1.2, 0.02]} position={[1.2, 2.2, 0.5]} radius={0.1} material={luxuryGlass} />
          <Box args={[0.5, 0.5, 0.02]} position={[1.2, 2.2, 0.55]} material={glowingPurple} />
          <Box args={[3.5, 0.4, 0.02]} position={[0, 1.0, 0.4]}>
             <meshPhysicalMaterial color="#3b82f6" transmission={0.9} thickness={0.5} roughness={0.1} />
          </Box>
        </group>
      </group>
    </Float>
  );
};

// --- SCENE 2: ORBITING CRYSTALS (Replaced flat boxes) ---
const OrbitingSkills = () => {
  const group = useRef();
  const crystals = useMemo(() => {
    return Array.from({ length: 12 }).map(() => ({
      position: [Math.random() * 6 - 3, Math.random() * 6 - 3, Math.random() * 6 - 3],
      scale: Math.random() * 0.4 + 0.2,
      speed: Math.random() * 2 + 1,
      ringSize: Math.random() * 1.5 + 2,
      axis: new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize(),
      isNeon: Math.random() > 0.7
    }));
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.y = t * 0.1;
    group.current.children.forEach((child, i) => {
       if (i > 0 && i <= crystals.length) { 
          // Circular orbit mathematically calculated
          const c = crystals[i-1];
          child.position.x = Math.sin(t * c.speed) * c.ringSize;
          child.position.z = Math.cos(t * c.speed) * c.ringSize;
          child.rotation.x += 0.01;
          child.rotation.y += 0.02;
       }
    });
  });

  return (
    <group ref={group}>
      {/* Central Energy Core */}
      <Sphere args={[0.8, 64, 64]}>
        <meshBasicMaterial color="#fff" />
      </Sphere>
      <Sphere args={[1.2, 64, 64]}>
         <meshPhysicalMaterial color="#000" transmission={0.9} ior={2.0} thickness={5.0} roughness={0.1} />
      </Sphere>
      {/* Intense light radiating from center */}
      <pointLight intensity={5} color="#3b82f6" distance={10} />
      
      {/* Orbiting Crystal Satellites */}
      {crystals.map((props, i) => (
        <Octahedron key={i} args={[1, 0]} scale={props.scale} position={props.position}>
           {props.isNeon ? 
              <meshBasicMaterial color={i%2===0 ? '#a855f7' : '#3b82f6'} toneMapped={false} /> 
           : 
              <meshPhysicalMaterial color="#fff" transmission={0.9} ior={1.7} thickness={1.0} roughness={0.1} clearcoat={1.0} />
           }
        </Octahedron>
      ))}
    </group>
  );
};

// --- SCENE 3: SMARTPHONE & APP UI ---
const SmartphoneScene = () => {
  return (
    <Float floatIntensity={4} rotationIntensity={1.5} speed={1.5}>
      <group rotation={[0.4, -0.6, -0.2]}>
        {/* Chassis */}
        <RoundedBox args={[2.2, 4.4, 0.2]} radius={0.25} material={luxuryGlass} />
        <Box args={[2, 4.2, 0.15]}>
           <meshStandardMaterial color="#050505" metalness={1} roughness={0.1} />
        </Box>
        <RoundedBox args={[0.6, 0.15, 0.18]} radius={0.05} position={[0, 1.9, 0]}>
           <meshBasicMaterial color="#000" />
        </RoundedBox>
        
        {/* Dynamic Holographic Interface Layers */}
        <Box args={[1.7, 1.0, 0.05]} position={[0, 1.2, 0.2]} material={glowingPurple} />
        <Box args={[0.8, 0.8, 0.05]} position={[-0.45, 0.1, 0.3]} material={glowingCyan} />
        <Box args={[0.8, 0.8, 0.05]} position={[0.45, 0.1, 0.2]} material={glowingBlue} />
        
        {/* Floating frosted glass search bar */}
        <RoundedBox args={[1.8, 0.4, 0.05]} radius={0.1} position={[0, -1.2, 0.4]} material={luxuryGlass} />
        <Box args={[0.2, 0.2, 0.02]} position={[-0.6, -1.2, 0.45]} material={glowingCyan} />
        
        {/* Particles surrounding phone */}
        <Sparkles count={50} scale={5} size={2} speed={0.4} opacity={0.5} color="#22d3ee" />
      </group>
    </Float>
  );
};

// --- SCENE 4: TIMELINE LATTICE ---
const TimelineNodes = () => {
  return (
    <Float floatIntensity={1} rotationIntensity={0.5} speed={1}>
      <group position={[0, 0, 0]}>
        {/* Central Energy Beam */}
        <Cylinder args={[0.05, 0.05, 8, 16]}>
           <meshBasicMaterial color="#3b82f6" transparent opacity={0.6} toneMapped={false} />
        </Cylinder>
        
        {/* Glass Nodes containing glowing spheres */}
        {[-2.5, 0, 2.5].map((y, i) => (
           <group position={[0, y, 0]} key={y}>
              <Sphere args={[0.4, 32, 32]} material={i===1 ? glowingPurple : glowingCyan} />
              <Sphere args={[0.6, 64, 64]} material={luxuryGlass} />
              {/* Spinning Halos */}
              <Float speed={5} rotationIntensity={5}>
                 <Torus args={[1.2, 0.02, 16, 100]} rotation={[1.5, 0.2, 0]}>
                    <meshBasicMaterial color="#a855f7" toneMapped={false} transparent opacity={0.4} />
                 </Torus>
                 <Torus args={[1.5, 0.01, 16, 100]} rotation={[1.5, -0.4, 0]}>
                    <meshBasicMaterial color="#3b82f6" toneMapped={false} transparent opacity={0.3} />
                 </Torus>
              </Float>
           </group>
        ))}
      </group>
    </Float>
  );
};

// --- SCENE 5: CONTACT PLATFORM ---
const ParticleSystem = () => {
  const pointsRef = useRef();
  const particleCount = 300;
  
  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 8; // x
      pos[i * 3 + 1] = Math.random() * 10 - 5; // y
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8; // z
    }
    return pos;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    for (let i = 0; i < particleCount; i++) {
       const iy = i * 3 + 1;
       pointsRef.current.geometry.attributes.position.array[iy] += 0.03; 
       if (pointsRef.current.geometry.attributes.position.array[iy] > 5) {
           pointsRef.current.geometry.attributes.position.array[iy] = -5;
       }
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    pointsRef.current.rotation.y = time * 0.05;
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#a855f7" size={0.06} sizeAttenuation={true} depthWrite={false} blending={THREE.AdditiveBlending} />
    </Points>
  );
};

const ContactPlatform = () => {
  return (
    <group position={[0, -2, 0]}>
      {/* Massive Glass Pedestals */}
      <Cylinder args={[4, 5, 0.6, 64]} material={luxuryGlass} />
      <Cylinder args={[3, 3.5, 1.2, 64]} position={[0, -0.5, 0]} material={luxuryGlass} />
      <Cylinder args={[3.8, 3.8, 0.1, 64]} position={[0, 0.3, 0]} material={glowingCyan} />
      
      {/* Holographic Projection Cylinder */}
      <Cylinder args={[2.5, 2.5, 10, 32]} position={[0, 5, 0]}>
         <meshBasicMaterial color="#a855f7" transparent opacity={0.02} side={THREE.DoubleSide} blending={THREE.AdditiveBlending} />
      </Cylinder>
      
      <ParticleSystem />
    </group>
  );
};

// --- SCENE MANAGER (Handles Scroll Parallax) ---
const SceneManager = () => {
  const scroll = useScroll();
  const { viewport } = useThree();
  const rootGroup = useRef();

  const isMobile = viewport.width < 5;

  useFrame(() => {
    const slideHeight = viewport.height;
    const targetY = scroll.offset * slideHeight * 4; 
    rootGroup.current.position.y = THREE.MathUtils.lerp(rootGroup.current.position.y, targetY, 0.05); // Smoother lerp
  });

  return (
    <group ref={rootGroup}>
      <group position={[isMobile ? 0 : 2.5, isMobile ? 1.5 : 0, 0]} scale={isMobile ? 0.45 : 1}>
         <MacScene />
      </group>
      <group position={[isMobile ? 0 : -2.5, -viewport.height + (isMobile ? 1.8 : 0), 0]} scale={isMobile ? 0.55 : 1}>
         <OrbitingSkills />
      </group>
      <group position={[isMobile ? 0 : 2.5, -viewport.height * 2 + (isMobile ? 1.5 : 0), 0]} scale={isMobile ? 0.5 : 1}>
         <SmartphoneScene />
      </group>
      <group position={[isMobile ? 0 : -2.5, -viewport.height * 3 + (isMobile ? 1.8 : 0), 0]} scale={isMobile ? 0.55 : 1}>
         <TimelineNodes />
      </group>
      <group position={[0, -viewport.height * 4 + (isMobile ? -1 : 0), 0]} scale={isMobile ? 0.5 : 1}>
         <ContactPlatform />
      </group>
    </group>
  );
};

// --- HTML AWWWARDS LAYER (2D DOM) ---
const HtmlLayer = () => {
  const { personal_info, summary, technical_stack, projects } = portfolioprofile;
  
  return (
    <div className="w-full text-zinc-50 font-sans antialiased pointer-events-none selection:bg-purple-500/30 overflow-hidden">
        
      {/* PAGE 1: HERO - NAKED LUXURY TYPOGRAPHY */}
      <section className="h-[100vh] w-full flex flex-col justify-end md:items-start md:justify-center px-6 md:px-24 md:flex-row pb-16 md:pb-0">
         <div className="w-full pointer-events-auto mt-0 md:mt-0 flex flex-col justify-end md:justify-center h-full max-w-4xl z-10">
            <h2 className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-cyan-400 mb-4 animate-pulse">
               Status: {personal_info.availability}
            </h2>
            <h1 className="text-[3.5rem] leading-[0.9] md:text-[9rem] font-black tracking-tighter uppercase mb-4 md:mb-8 text-white drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
               {personal_info.name.split(' ')[0]}<span className="text-transparent bg-clip-text bg-gradient-to-t from-blue-600 to-cyan-400">.</span>
            </h1>
            <h2 className="text-xl md:text-3xl font-light text-zinc-300 mb-6 drop-shadow-lg max-w-2xl">{personal_info.title}</h2>
            
            <div className="flex gap-4 mt-4">
              <button className="px-8 md:px-10 py-4 md:py-5 bg-transparent border border-white/20 hover:border-cyan-400 text-white font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs rounded-full hover:bg-cyan-500/10 transition-all backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                 Initiate Sequence
              </button>
            </div>
         </div>
      </section>

      {/* PAGE 2: SKILLS - NEON CHIPS */}
      <section className="h-[100vh] w-full flex flex-col justify-end md:items-end md:justify-center px-6 md:px-24 pb-16 md:pb-0">
         <div className="w-full md:text-right pointer-events-auto z-10 max-w-3xl">
            <h2 className="text-[3rem] leading-[0.9] md:text-[8rem] font-black uppercase tracking-tighter mb-8 md:mb-12 text-transparent bg-clip-text bg-gradient-to-l from-purple-400 to-cyan-500 drop-shadow-2xl">
               Core <br className="hidden md:block"/> Vector.
            </h2>
            <div className="flex flex-wrap md:justify-end gap-3 md:gap-4">
               {[...technical_stack.frontend, ...technical_stack.backend].map((tech) => (
                 <span key={tech} className="px-4 md:px-6 py-2 md:py-3 border border-purple-500/30 bg-purple-900/10 backdrop-blur-md text-[10px] md:text-xs font-bold tracking-[0.1em] uppercase text-purple-200 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.15)] hover:bg-purple-500/30 hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] transition-all cursor-default">
                   {tech}
                 </span>
               ))}
            </div>
         </div>
      </section>

      {/* PAGE 3: PROJECTS - ABSTRACT CARDS */}
      <section className="h-[100vh] w-full flex flex-col justify-end md:justify-center px-6 md:px-24 pb-16 md:pb-0">
         <div className="w-full pointer-events-auto z-10 max-w-2xl">
            <h2 className="text-[3rem] leading-[0.9] md:text-[7rem] font-black uppercase tracking-tighter mb-8 md:mb-12 text-white drop-shadow-xl">
               Deploy<br/>ments.
            </h2>
            <div className="flex flex-col gap-6 max-h-[50vh] overflow-y-auto pr-4 custom-scrollbar">
              {projects.map((p, i) => (
                <div key={p.name} className="p-6 md:p-8 border-l-2 border-cyan-500 bg-gradient-to-r from-black/40 to-transparent backdrop-blur-sm hover:from-cyan-900/20 transition-all group">
                  <h4 className="text-[10px] font-bold tracking-[0.2em] text-cyan-500 uppercase mb-2">Module 0{i+1}</h4>
                  <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-white mb-3 group-hover:text-cyan-300 transition-colors">{p.name}</h3>
                  <p className="text-xs md:text-sm text-zinc-400 mb-5 max-w-lg">{p.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.technologies.slice(0, 4).map(t => (
                      <span key={t} className="text-[9px] md:text-[10px] uppercase tracking-widest text-zinc-500 font-bold border border-zinc-800 px-3 py-1 rounded">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
         </div>
      </section>

      {/* PAGE 4: EXPERIENCE */}
      <section className="h-[100vh] w-full flex flex-col justify-end md:items-end md:justify-center px-6 md:px-24 pb-16 md:pb-0">
         <div className="w-full md:text-right pointer-events-auto z-10 max-w-2xl">
            <h2 className="text-[3rem] leading-[0.9] md:text-[7rem] font-black uppercase tracking-tighter mb-6 md:mb-10 text-transparent bg-clip-text bg-gradient-to-l from-blue-400 to-cyan-300">
               Milestones.
            </h2>
            <p className="text-sm md:text-xl text-zinc-300 font-light leading-relaxed drop-shadow-lg">
               Mapping trajectories through top-tier scalable architectures. Every illuminated sector represents a hardened cross-platform deployment.
            </p>
         </div>
      </section>

      {/* PAGE 5: CONTACT */}
      <section className="h-[100vh] w-full flex flex-col justify-end md:items-center md:justify-center px-6 md:px-24 pb-24 md:pb-0">
         <div className="w-full text-center pointer-events-auto z-10 flex flex-col items-center">
            <h2 className="text-[4rem] md:text-[9rem] font-black uppercase tracking-tighter mb-4 md:mb-6 text-white drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]">
               Enter Grid.
            </h2>
            <p className="text-sm md:text-2xl text-zinc-300 mb-10 md:mb-16 font-light max-w-xl">
               Encrypted channels are currently open for advanced web architecture and collaboration.
            </p>
            <a href={`mailto:${personal_info.email}`} className="group relative px-10 md:px-16 py-4 md:py-6 bg-transparent overflow-hidden rounded-full inline-block">
               <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 group-hover:opacity-100 transition-opacity duration-500 blur" />
               <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border border-white/20 transition-all duration-500" />
               <span className="relative z-10 text-white font-black uppercase tracking-[0.3em] text-[10px] md:text-xs drop-shadow-md">
                  Establish Comms
               </span>
            </a>
         </div>
      </section>

    </div>
  );
};

// --- MAIN WRAPPER ---
export default function Portfolio8() {
  return (
    <div className="w-full h-screen bg-[#020202] text-white overflow-hidden">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }} dpr={[1, 2]}>
         <color attach="background" args={['#020202']} />
         
         <NebulaBackground />

         <ambientLight intensity={0.5} />
         <directionalLight position={[10, 10, 5]} intensity={3} color="#3b82f6" />
         <directionalLight position={[-10, 0, -5]} intensity={3} color="#a855f7" />
         <directionalLight position={[0, -10, 5]} intensity={2} color="#22d3ee" />
         
         <Environment preset="city" />

         <ScrollControls pages={5} damping={0.25} distance={1}>
            <SceneManager />
            <Scroll html style={{ width: '100vw' }}>
               <HtmlLayer />
            </Scroll>
         </ScrollControls>
      </Canvas>

      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar { width: 2px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(34, 211, 238, 0.5); border-radius: 4px; }
      `}} />
    </div>
  );
}
