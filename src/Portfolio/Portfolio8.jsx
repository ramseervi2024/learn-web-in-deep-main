import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { ScrollControls, Scroll, useScroll, Float, RoundedBox, Sphere, Cylinder, Box, Points, PointMaterial, Environment, Torus } from '@react-three/drei';
import * as THREE from 'three';
import { portfolioprofile } from './portfoliodata';

// --- MATERIALS ---
const glassMaterial = new THREE.MeshPhysicalMaterial({
  color: '#050505',
  metalness: 0.9,
  roughness: 0.1,
  clearcoat: 1.0,
  clearcoatRoughness: 0.1,
  transmission: 0.95, 
  thickness: 2.0,
  ior: 1.5,
});

const glowingBlue = new THREE.MeshBasicMaterial({ color: new THREE.Color('#3b82f6').multiplyScalar(2), toneMapped: false });
const glowingPurple = new THREE.MeshBasicMaterial({ color: new THREE.Color('#a855f7').multiplyScalar(2), toneMapped: false });
const glowingCyan = new THREE.MeshBasicMaterial({ color: new THREE.Color('#22d3ee').multiplyScalar(3), toneMapped: false });

// --- SCENE 1: LAPTOP ---
const MacScene = () => {
  return (
    <Float floatIntensity={2} rotationIntensity={0.5} speed={2}>
      <group position={[0, -0.5, 0]} rotation={[0.2, -0.4, 0]}>
        {/* Base */}
        <RoundedBox args={[5, 0.15, 3.5]} radius={0.05} material={glassMaterial} />
        {/* Keyboard indents */}
        <Box args={[4.5, 0.16, 1.5]} position={[0, 0, -0.6]}>
           <meshPhysicalMaterial color="#020202" roughness={0.8} />
        </Box>
        {/* Trackpad */}
        <Box args={[1.5, 0.16, 1]} position={[0, 0, 0.9]}>
           <meshPhysicalMaterial color="#050505" roughness={0.5} />
        </Box>
        
        {/* Screen */}
        <group position={[0, 0.075, -1.75]} rotation={[-0.3, 0, 0]}>
          {/* Lid */}
          <RoundedBox args={[5, 3.5, 0.1]} position={[0, 1.75, 0]} radius={0.05} material={glassMaterial} />
          {/* Display */}
          <Box args={[4.8, 3.3, 0.11]} position={[0, 1.75, 0]}>
             <meshBasicMaterial color="#050505" />
          </Box>
          {/* Glowing UI Grid lines on screen */}
          <gridHelper args={[4.5, 10, '#3b82f6', '#3b82f6']} position={[0, 1.75, 0.056]} rotation={[Math.PI / 2, 0, 0]} />
          
          {/* Floating UI Elements over Screen */}
          <Box args={[1.5, 0.8, 0.05]} position={[-1, 2.2, 0.2]} material={glowingBlue} />
          <Box args={[1, 0.4, 0.05]} position={[1.2, 2.4, 0.2]} material={glowingPurple} />
          <Box args={[2.5, 0.6, 0.05]} position={[0.2, 1.2, 0.2]}>
             <meshPhysicalMaterial color="#111" transmission={0.9} thickness={0.5} roughness={0.2} />
          </Box>
        </group>
      </group>
    </Float>
  );
};

// --- SCENE 2: ORBITING SKILLS ---
const OrbitingSkills = () => {
  const group = useRef();
  const techBlocks = useMemo(() => {
    return Array.from({ length: 8 }).map(() => ({
      position: [Math.random() * 4 - 2, Math.random() * 4 - 2, Math.random() * 4 - 2],
      scale: Math.random() * 0.5 + 0.3,
      speed: Math.random() * 2 + 1,
      color: Math.random() > 0.5 ? glowingBlue : glowingPurple
    }));
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.y = t * 0.3;
    group.current.rotation.z = t * 0.2;
    group.current.children.forEach((child, i) => {
       if (i > 0) { // Skip center sphere
          child.position.y = Math.sin(t * techBlocks[i-1].speed) * 2.5;
       }
    });
  });

  return (
    <group ref={group}>
      {/* Central Core */}
      <Sphere args={[1, 64, 64]}>
        <meshBasicMaterial color="#ffffff" toneMapped={false} />
      </Sphere>
      {/* Satellites */}
      {techBlocks.map((props, i) => (
        <RoundedBox key={i} args={[1, 1, 1]} radius={0.1} position={props.position} scale={props.scale} material={props.color} />
      ))}
    </group>
  );
};

// --- SCENE 3: SMARTPHONE & APP UI ---
const SmartphoneScene = () => {
  return (
    <Float floatIntensity={3} rotationIntensity={1} speed={1.5}>
      <group rotation={[0.4, 0.5, -0.2]}>
        <RoundedBox args={[2, 4, 0.2]} radius={0.2} material={glassMaterial} />
        {/* Bezel */}
        <Box args={[1.8, 3.8, 0.21]}>
           <meshBasicMaterial color="#020202" />
        </Box>
        {/* Notch */}
        <RoundedBox args={[0.5, 0.15, 0.22]} radius={0.05} position={[0, 1.8, 0]}>
           <meshBasicMaterial color="#000" />
        </RoundedBox>
        {/* Floating Abstract Apps */}
        <Box args={[1.5, 0.8, 0.1]} position={[0, 1, 0.2]} material={glowingPurple} />
        <Box args={[0.7, 0.7, 0.1]} position={[-0.4, 0.1, 0.2]} material={glowingBlue} />
        <Box args={[0.7, 0.7, 0.1]} position={[0.4, 0.1, 0.2]} material={glowingCyan} />
        <Box args={[1.5, 1.2, 0.1]} position={[0, -1, 0.2]}>
           <meshPhysicalMaterial color="#111" transmission={0.9} thickness={0.5} />
        </Box>
      </group>
    </Float>
  );
};

// --- SCENE 4: TIMELINE LATTICE ---
const TimelineNodes = () => {
  return (
    <Float floatIntensity={1} rotationIntensity={0.2} speed={1}>
      <group position={[0, 0, 0]}>
        <Cylinder args={[0.02, 0.02, 6, 8]} position={[0, 0, 0]}>
           <meshBasicMaterial color="#3b82f6" transparent opacity={0.3} />
        </Cylinder>
        
        {/* Nodes */}
        <Sphere args={[0.3, 32, 32]} position={[0, 2, 0]} material={glowingPurple} />
        <Sphere args={[0.4, 32, 32]} position={[0, 0, 0]} material={glowingCyan} />
        <Sphere args={[0.3, 32, 32]} position={[0, -2, 0]} material={glowingBlue} />
        
        {/* Connecting Data Rings */}
        <Torus args={[0.8, 0.02, 16, 100]} position={[0, 2, 0]} rotation={[1.5, 0, 0]} material={glowingBlue} />
        <Torus args={[1.2, 0.02, 16, 100]} position={[0, 0, 0]} rotation={[1, 0.5, 0]} material={glowingPurple} />
        <Torus args={[0.8, 0.02, 16, 100]} position={[0, -2, 0]} rotation={[1.5, 0, 0]} material={glowingCyan} />
      </group>
    </Float>
  );
};

// --- SCENE 5: CONTACT PLATFORM ---
const ParticleSystem = () => {
  const pointsRef = useRef();
  const particleCount = 200;
  
  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 6; // x
      pos[i * 3 + 1] = Math.random() * 8 - 4; // y
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6; // z
    }
    return pos;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    for (let i = 0; i < particleCount; i++) {
       const iy = i * 3 + 1;
       pointsRef.current.geometry.attributes.position.array[iy] += 0.02; // Float up
       if (pointsRef.current.geometry.attributes.position.array[iy] > 4) {
           pointsRef.current.geometry.attributes.position.array[iy] = -4; // Reset to bottom
       }
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    pointsRef.current.rotation.y = time * 0.1;
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#a855f7" size={0.05} sizeAttenuation={true} depthWrite={false} blending={THREE.AdditiveBlending} />
    </Points>
  );
};

const ContactPlatform = () => {
  return (
    <group position={[0, -1, 0]}>
      {/* Base */}
      <Cylinder args={[3, 3.5, 0.5, 64]} material={glassMaterial} />
      <Cylinder args={[2.5, 2.5, 0.6, 64]}>
         <meshBasicMaterial color="#050505" />
      </Cylinder>
      {/* Glowing Rings */}
      <Torus args={[2.5, 0.05, 16, 100]} position={[0, 0.3, 0]} rotation={[Math.PI / 2, 0, 0]} material={glowingCyan} />
      <ParticleSystem />
    </group>
  );
};

// --- SCENE MANAGER (Handles Scroll Parallax) ---
// Drei's useScroll() gives us an offset from 0 to 1 representing scroll depth.
const SceneManager = () => {
  const scroll = useScroll();
  const { viewport } = useThree();
  const rootGroup = useRef();

  const isMobile = viewport.width < 5;

  useFrame(() => {
    // 5 pages total. Page 0 is offset 0. Page 4 is offset 1.
    // We physically move the entire 3D group UP based on scroll depth to transition scenes.
    // Instead of moving html, we move the 3D meshes to match the absolutely positioned HTML sections!
    const slideHeight = viewport.height;
    // target Y moves up precisely with scroll offset
    const targetY = scroll.offset * slideHeight * 4; 
    rootGroup.current.position.y = THREE.MathUtils.lerp(rootGroup.current.position.y, targetY, 0.1);
  });

  return (
    <group ref={rootGroup}>
      <group position={[isMobile ? 0 : 2, isMobile ? 1.5 : 0, 0]} scale={isMobile ? 0.5 : 1}>
         <MacScene />
      </group>
      <group position={[isMobile ? 0 : -2, -viewport.height + (isMobile ? 1.5 : 0), 0]} scale={isMobile ? 0.7 : 1}>
         <OrbitingSkills />
      </group>
      <group position={[isMobile ? 0 : 2, -viewport.height * 2 + (isMobile ? 1.5 : 0), 0]} scale={isMobile ? 0.6 : 1}>
         <SmartphoneScene />
      </group>
      <group position={[isMobile ? 0 : -2, -viewport.height * 3 + (isMobile ? 1.5 : 0), 0]} scale={isMobile ? 0.7 : 1}>
         <TimelineNodes />
      </group>
      <group position={[0, -viewport.height * 4 + (isMobile ? 0 : 0), 0]} scale={isMobile ? 0.6 : 1}>
         <ContactPlatform />
      </group>
    </group>
  );
};

// --- HTML LAYER (2D DOM) ---
// We use framer-motion classes combined with native Scroll mapping.
const HtmlLayer = () => {
  // Pure Tailwind configuration for text wrapping over our fixed 3D Canvas
  // Using 100vh sections because <Scroll html> stretches exactly to the ScrollControls pages length
  const { personal_info, summary, technical_stack, projects } = portfolioprofile;
  
  return (
    <div className="w-full text-zinc-50 font-sans antialiased pointer-events-none selection:bg-purple-500/30">
        
      {/* PAGE 1: HERO */}
      <section className="h-[100vh] w-full flex flex-col justify-end md:items-center md:justify-start px-4 md:px-24 md:flex-row pb-10 md:pb-0">
         <div className="max-w-2xl w-full backdrop-blur-md bg-black/30 md:bg-black/10 border border-white/5 p-6 md:p-10 rounded-3xl shadow-2xl pointer-events-auto mt-0 md:mt-24">
            <h1 className="text-4xl md:text-8xl font-black tracking-tighter mb-2 md:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
               {personal_info.name.split(' ')[0]}.
            </h1>
            <h2 className="text-xl md:text-2xl font-light text-zinc-400 mb-4 md:mb-6">{personal_info.title}</h2>
            <p className="text-sm md:text-lg text-zinc-400 md:text-zinc-500 leading-relaxed mb-6 md:mb-8">
               {personal_info.tagline || summary}
            </p>
            <div className="flex gap-4">
              <button className="px-5 md:px-6 py-2 md:py-3 bg-white text-black font-bold uppercase tracking-widest text-[10px] md:text-xs rounded-full hover:bg-blue-400 transition-colors">
                 Initiate Sequence
              </button>
            </div>
         </div>
      </section>

      {/* PAGE 2: SKILLS */}
      <section className="h-[100vh] w-full flex flex-col justify-end md:items-center md:justify-end px-4 md:px-24 pb-10 md:pb-0">
         <div className="max-w-2xl w-full backdrop-blur-md bg-black/30 md:bg-black/10 border border-white/5 p-6 md:p-10 rounded-3xl shadow-2xl md:text-right pointer-events-auto mb-0 md:mb-24">
            <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter mb-4 md:mb-8 text-transparent bg-clip-text bg-gradient-to-l from-blue-400 to-purple-600">
               Core Vector.
            </h2>
            <div className="flex flex-wrap md:justify-end gap-2 md:gap-3">
               {[...technical_stack.frontend, ...technical_stack.backend].map((tech) => (
                 <span key={tech} className="px-3 md:px-4 py-1.5 md:py-2 border border-white/10 bg-black/50 text-[10px] md:text-xs font-bold tracking-widest uppercase text-zinc-400 rounded-lg">
                   {tech}
                 </span>
               ))}
            </div>
         </div>
      </section>

      {/* PAGE 3: PROJECTS */}
      <section className="h-[100vh] w-full flex flex-col justify-end md:justify-center px-4 md:px-24 pb-10 md:pb-0">
         <div className="max-w-2xl w-full backdrop-blur-md bg-black/30 md:bg-black/10 border border-white/5 p-6 md:p-10 rounded-3xl shadow-2xl pointer-events-auto">
            <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter mb-4 md:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
               Deployments.
            </h2>
            <div className="flex flex-col gap-4 md:gap-6 max-h-[45vh] lg:max-h-[50vh] overflow-y-auto pr-2 custom-scrollbar">
              {projects.map(p => (
                <div key={p.name} className="p-4 md:p-6 border border-white/10 bg-black/30 rounded-xl hover:border-purple-500/50 transition-colors">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{p.name}</h3>
                  <p className="text-xs md:text-sm text-zinc-400 mb-3 md:mb-4">{p.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.technologies.slice(0, 4).map(t => (
                      <span key={t} className="text-[9px] md:text-[10px] uppercase tracking-widest text-blue-400 font-bold">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
         </div>
      </section>

      {/* PAGE 4: EXPERIENCE */}
      <section className="h-[100vh] w-full flex flex-col justify-end md:items-center md:justify-end px-4 md:px-24 pb-10 md:pb-0">
         <div className="max-w-xl w-full backdrop-blur-md bg-black/30 md:bg-black/10 border border-white/5 p-6 md:p-10 rounded-3xl shadow-2xl md:text-right pointer-events-auto mb-0 md:mb-24">
            <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter mb-4 md:mb-8 text-transparent bg-clip-text bg-gradient-to-l from-blue-400 to-cyan-400">
               Milestones.
            </h2>
            <p className="text-sm md:text-lg text-zinc-400 leading-relaxed">
               Mapping trajectories through top-tier scalable architectures. Each node represents a successful cross-platform deployment.
            </p>
         </div>
      </section>

      {/* PAGE 5: CONTACT */}
      <section className="h-[100vh] w-full flex flex-col justify-end md:items-center md:justify-center px-4 md:px-24 pb-10 md:pb-0">
         <div className="max-w-3xl w-full backdrop-blur-md bg-black/30 md:bg-black/10 border border-white/5 p-8 md:p-12 rounded-3xl shadow-2xl text-center pointer-events-auto mt-auto md:mt-0 mb-10 md:mb-0">
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-4 md:mb-6 text-white drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]">
               Enter The Grid.
            </h2>
            <p className="text-sm md:text-xl text-zinc-400 mb-6 md:mb-10 font-light">
               Encrypted channels are open for collaboration.
            </p>
            <a href={`mailto:${personal_info.email}`} className="px-8 md:px-12 py-4 md:py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-black uppercase tracking-[0.2em] text-[10px] md:text-sm rounded-full shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:scale-105 transition-transform inline-block">
               Establish Comms
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
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }} shadows>
         <color attach="background" args={['#050505']} />
         <ambientLight intensity={0.4} />
         <directionalLight position={[10, 10, 5]} intensity={2} color="#3b82f6" />
         <directionalLight position={[-10, -10, -5]} intensity={2} color="#a855f7" />
         <spotLight position={[0, 5, 5]} intensity={1} color="#ffffff" penumbra={1} />
         
         <Environment preset="city" />

         <ScrollControls pages={5} damping={0.2} distance={1.2}>
            {/* 3D WebGL Layer */}
            <SceneManager />
            
            {/* 2D HTML Scroll Layer */}
            <Scroll html style={{ width: '100vw' }}>
               <HtmlLayer />
            </Scroll>
         </ScrollControls>
      </Canvas>

      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(168, 85, 247, 0.5); border-radius: 4px; }
      `}} />
    </div>
  );
}
