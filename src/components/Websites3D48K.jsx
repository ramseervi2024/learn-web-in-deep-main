import React, { useRef, useLayoutEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useScroll, ScrollControls, Scroll, Float, Stars, Sparkles, PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'

function Background() {
  return (
    <>
      <color attach="background" args={['#050510']} />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <Sparkles count={500} scale={10} size={2} speed={0.4} opacity={0.5} color="#4fd1c5" />
    </>
  )
}

function Scene() {
  const scroll = useScroll()
  const meshRef = useRef()
  const groupRef = useRef()
  const donutRef = useRef()

  useFrame((state, delta) => {
    const offset = scroll.offset

    // Rotate the main group based on scroll
    // The deeper you scroll, the more it rotates
    if (groupRef.current) {
      groupRef.current.rotation.y = offset * Math.PI * 2
      groupRef.current.position.z = -offset * 5
    }

    // Constant nice rotation for individual objects
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5
      meshRef.current.rotation.y += delta * 0.6
    }

    if (donutRef.current) {
      donutRef.current.rotation.x -= delta * 0.2
      donutRef.current.rotation.y -= delta * 0.2
      // Add a cool wobble effect based on scroll speed if we wanted, 
      // but keep it smooth for now
    }

    // Camera movement based on scroll could go here too
    // state.camera.position.z = 5 - offset * 2
  })

  return (
    <group ref={groupRef}>
      {/* Central hero object */}
      <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
        <mesh ref={meshRef} position={[2, 0, 0]}>
          <torusKnotGeometry args={[1, 0.3, 128, 16]} />
          <meshStandardMaterial
            color="#6366f1"
            emissive="#4338ca"
            emissiveIntensity={0.5}
            roughness={0.1}
            metalness={0.8}
            wireframe={false}
          />
        </mesh>
      </Float>

      {/* Secondary object */}
      <Float speed={1.5} rotationIntensity={2} floatIntensity={1}>
        <mesh ref={donutRef} position={[-2, -1, -2]}>
          <torusGeometry args={[1.5, 0.4, 16, 100]} />
          <meshPhysicalMaterial
            color="#ec4899"
            roughness={0}
            metalness={0.5}
            transmission={0.5} // Glass-like
            thickness={2}
          />
        </mesh>
      </Float>

      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={10} />
      <pointLight position={[-10, -10, -10]} intensity={10} color="#ff00ff" />
    </group>
  )
}

function Overlay() {
  return (
    <Scroll html style={{ width: '100%' }}>
      {/* Section 1 */}
      <div className="w-screen h-screen flex flex-col items-start justify-center p-20 pointer-events-none">
        <h1 className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-4 tracking-tighter drop-shadow-lg">
          IMMERSE
        </h1>
        <p className="text-2xl text-gray-300 font-light max-w-lg leading-relaxed">
          Experience the web in a new dimension. Scroll to explore the depths of 3D interactivity.
        </p>
      </div>

      {/* Section 2 */}
      <div className="w-screen h-screen flex flex-col items-end justify-center p-20 pointer-events-none">
        <h1 className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4 tracking-tighter drop-shadow-lg">
          CREATE
        </h1>
        <p className="text-2xl text-gray-300 font-light max-w-lg text-right leading-relaxed">
          Build stunning interfaces that captivate your audience. Break free from the 2D grid.
        </p>
      </div>

      {/* Section 3 */}
      <div className="w-screen h-screen flex flex-col items-center justify-center p-20 pointer-events-none">
        <h1 className="text-8xl font-black text-white mb-8 tracking-tighter drop-shadow-[0_0_35px_rgba(255,255,255,0.5)]">
          INSPIRE
        </h1>
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 max-w-2xl text-center">
          <p className="text-xl text-gray-200">
            "Design is not just what it looks like and feels like. Design is how it works."
          </p>
          <button className="mt-8 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-bold text-lg hover:scale-105 transition-transform pointer-events-auto cursor-pointer shadow-lg shadow-purple-500/30">
            Get Started
          </button>
        </div>
      </div>
    </Scroll>
  )
}

export default function Websites3D48K() {
  return (
    <div className="h-screen w-full bg-[#050510]">
      <Canvas shadows camera={{ position: [0, 0, 8], fov: 50 }}>
        <Background />
        <ScrollControls pages={3} damping={0.3}>
          <Scene />
          <Overlay />
        </ScrollControls>
      </Canvas>

      {/* Fixed UI elements can go here */}
      <div className="fixed top-8 left-8 z-50 mix-blend-difference pointer-events-none">
        <span className="text-white font-bold text-xl tracking-widest">GEMINI // 3D</span>
      </div>
    </div>
  )
}
