import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function Scroll3DWebsite() {
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const objectsRef = useRef([]);
  const scrollYRef = useRef(0);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const clockRef = useRef(new THREE.Clock());

  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x000000, 5, 50);
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 8;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;

    // Advanced Lighting System
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0xff00ff, 3);
    spotLight.position.set(10, 10, 10);
    spotLight.castShadow = true;
    spotLight.angle = Math.PI / 6;
    spotLight.penumbra = 0.5;
    scene.add(spotLight);

    const pointLight1 = new THREE.PointLight(0x00ffff, 2, 50);
    pointLight1.position.set(-10, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xff0080, 2, 50);
    pointLight2.position.set(10, -5, 5);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0xffff00, 2, 50);
    pointLight3.position.set(0, 0, -10);
    scene.add(pointLight3);

    // Create complex 3D objects with advanced materials
    const objects = [];

    // Morphing Torus with animation
    const torusGeometry = new THREE.TorusGeometry(1.2, 0.4, 32, 100);
    const torusMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xff006e,
      metalness: 0.9,
      roughness: 0.1,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      reflectivity: 1
    });
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    torus.position.set(-3, 4, 0);
    torus.castShadow = true;
    scene.add(torus);
    objects.push({ mesh: torus, speed: { x: 0.02, y: 0.03, z: 0.01 } });

    // Icosahedron with wireframe overlay
    const icoGeometry = new THREE.IcosahedronGeometry(1.2, 0);
    const icoMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x00ffff,
      metalness: 0.8,
      roughness: 0.2,
      transparent: true,
      opacity: 0.9,
      side: THREE.DoubleSide
    });
    const icosahedron = new THREE.Mesh(icoGeometry, icoMaterial);
    icosahedron.position.set(3, 2, 0);
    scene.add(icosahedron);
    
    const wireframeGeo = new THREE.IcosahedronGeometry(1.25, 0);
    const wireframeMat = new THREE.MeshBasicMaterial({ 
      color: 0x00ffff, 
      wireframe: true,
      transparent: true,
      opacity: 0.3
    });
    const wireframe = new THREE.Mesh(wireframeGeo, wireframeMat);
    icosahedron.add(wireframe);
    objects.push({ mesh: icosahedron, speed: { x: 0.01, y: 0.02, z: 0.03 } });

    // Dodecahedron
    const dodecaGeometry = new THREE.DodecahedronGeometry(1);
    const dodecaMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffbe0b,
      metalness: 1,
      roughness: 0,
      clearcoat: 1,
      clearcoatRoughness: 0
    });
    const dodecahedron = new THREE.Mesh(dodecaGeometry, dodecaMaterial);
    dodecahedron.position.set(-3, -2, 0);
    scene.add(dodecahedron);
    objects.push({ mesh: dodecahedron, speed: { x: 0.03, y: 0.01, z: 0.02 } });

    // Complex Torus Knot
    const torusKnotGeometry = new THREE.TorusKnotGeometry(0.8, 0.3, 150, 20, 3, 2);
    const torusKnotMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x8338ec,
      metalness: 0.7,
      roughness: 0.3,
      clearcoat: 0.5,
      transmission: 0.5,
      thickness: 0.5
    });
    const torusKnot = new THREE.Mesh(torusKnotGeometry, torusKnotMaterial);
    torusKnot.position.set(3, -4, 0);
    scene.add(torusKnot);
    objects.push({ mesh: torusKnot, speed: { x: 0.02, y: 0.02, z: 0.01 } });

    // Octahedron with inner glow
    const octaGeometry = new THREE.OctahedronGeometry(1.1, 0);
    const octaMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x06ffa5,
      metalness: 0.5,
      roughness: 0.1,
      emissive: 0x06ffa5,
      emissiveIntensity: 0.5,
      transparent: true,
      opacity: 0.8
    });
    const octahedron = new THREE.Mesh(octaGeometry, octaMaterial);
    octahedron.position.set(0, 0, 2);
    scene.add(octahedron);
    objects.push({ mesh: octahedron, speed: { x: 0.01, y: 0.03, z: 0.02 } });

    // Sphere with displacement
    const sphereGeometry = new THREE.SphereGeometry(1, 64, 64);
    const sphereMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xff00ff,
      metalness: 0.6,
      roughness: 0.4,
      emissive: 0xff00ff,
      emissiveIntensity: 0.2
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.set(0, 6, 0);
    scene.add(sphere);
    objects.push({ mesh: sphere, speed: { x: 0.015, y: 0.015, z: 0.015 } });

    objectsRef.current = objects;

    // Advanced Particle Systems
    const createParticleSystem = (count, color, size, spread) => {
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(count * 3);
      const velocities = new Float32Array(count * 3);

      for (let i = 0; i < count * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * spread;
        positions[i + 1] = (Math.random() - 0.5) * spread;
        positions[i + 2] = (Math.random() - 0.5) * spread;
        
        velocities[i] = (Math.random() - 0.5) * 0.02;
        velocities[i + 1] = (Math.random() - 0.5) * 0.02;
        velocities[i + 2] = (Math.random() - 0.5) * 0.02;
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('velocity', new THREE.BufferAttribute(velocities, 3));

      const material = new THREE.PointsMaterial({
        size: size,
        color: color,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });

      return new THREE.Points(geometry, material);
    };

    const particleSystem1 = createParticleSystem(1000, 0xff00ff, 0.05, 40);
    scene.add(particleSystem1);

    const particleSystem2 = createParticleSystem(800, 0x00ffff, 0.03, 35);
    scene.add(particleSystem2);

    const particleSystem3 = createParticleSystem(600, 0xffff00, 0.04, 30);
    scene.add(particleSystem3);

    // Floating geometric shapes in background
    const bgShapes = [];
    for (let i = 0; i < 20; i++) {
      const geometries = [
        new THREE.TetrahedronGeometry(0.3),
        new THREE.OctahedronGeometry(0.3),
        new THREE.BoxGeometry(0.3, 0.3, 0.3)
      ];
      const geo = geometries[Math.floor(Math.random() * geometries.length)];
      const mat = new THREE.MeshPhysicalMaterial({
        color: Math.random() * 0xffffff,
        transparent: true,
        opacity: 0.3,
        metalness: 0.8,
        roughness: 0.2
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 20 - 10
      );
      scene.add(mesh);
      bgShapes.push({
        mesh,
        speedX: (Math.random() - 0.5) * 0.01,
        speedY: (Math.random() - 0.5) * 0.01
      });
    }

    // Animation loop
    let animationId;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      const elapsedTime = clockRef.current.getElapsedTime();
      const scrollY = scrollYRef.current;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = maxScroll > 0 ? scrollY / maxScroll : 0;

      // Animate main objects with advanced movements
      objects.forEach((obj, i) => {
        const { mesh, speed } = obj;
        
        // Complex rotation
        mesh.rotation.x += speed.x;
        mesh.rotation.y += speed.y;
        mesh.rotation.z += speed.z;
        
        // Scroll-based vertical movement with wave effect
        const wave = Math.sin(elapsedTime * 0.5 + i) * 2;
        mesh.position.y = mesh.position.y * 0.99 + ((i - 2.5) * 2 + scrollPercent * 15 + wave) * 0.01;
        
        // Orbital movement
        const radius = 3 + Math.sin(scrollPercent * Math.PI * 2 + i) * 2;
        const angle = scrollPercent * Math.PI * 4 + i * Math.PI / 3;
        mesh.position.x += (Math.cos(angle + elapsedTime * 0.5) * radius - mesh.position.x) * 0.02;
        mesh.position.z += (Math.sin(scrollPercent * Math.PI * 2) * 3 - mesh.position.z) * 0.02;
        
        // Dynamic scaling with pulse
        const baseScale = 1 + Math.sin(scrollPercent * Math.PI * 6 + i) * 0.3;
        const pulse = 1 + Math.sin(elapsedTime * 2 + i) * 0.1;
        const scale = baseScale * pulse;
        mesh.scale.set(scale, scale, scale);
        
        // Color morphing
        if (mesh.material.emissive) {
          mesh.material.emissive.setHSL(
            (scrollPercent + elapsedTime * 0.1 + i * 0.1) % 1,
            0.8,
            0.3
          );
        }
      });

      // Animate particles with flow field
      [particleSystem1, particleSystem2, particleSystem3].forEach((ps, idx) => {
        const positions = ps.geometry.attributes.position.array;
        const velocities = ps.geometry.attributes.velocity.array;
        
        for (let i = 0; i < positions.length; i += 3) {
          positions[i] += velocities[i];
          positions[i + 1] += velocities[i + 1] + scrollPercent * 0.1;
          positions[i + 2] += velocities[i + 2];
          
          // Boundary wrapping
          if (Math.abs(positions[i]) > 20) velocities[i] *= -1;
          if (Math.abs(positions[i + 1]) > 20) positions[i + 1] = -20;
          if (Math.abs(positions[i + 2]) > 20) velocities[i + 2] *= -1;
        }
        
        ps.geometry.attributes.position.needsUpdate = true;
        ps.rotation.y = elapsedTime * 0.05 * (idx + 1);
        ps.rotation.x = scrollPercent * Math.PI;
      });

      // Animate background shapes
      bgShapes.forEach(shape => {
        shape.mesh.rotation.x += shape.speedX;
        shape.mesh.rotation.y += shape.speedY;
        shape.mesh.position.y -= 0.02;
        if (shape.mesh.position.y < -15) shape.mesh.position.y = 15;
      });

      // Animate lights
      spotLight.position.x = Math.cos(elapsedTime) * 10;
      spotLight.position.z = Math.sin(elapsedTime) * 10;
      
      pointLight1.position.x = Math.sin(elapsedTime * 0.7) * 10;
      pointLight1.position.y = Math.cos(elapsedTime * 0.5) * 10;
      
      pointLight2.position.x = Math.cos(elapsedTime * 0.3) * 10;
      pointLight2.position.z = Math.sin(elapsedTime * 0.4) * 10;

      // Camera movement with mouse parallax and scroll
      const targetX = mouseRef.current.x * 2;
      const targetY = mouseRef.current.y * 2;
      
      camera.position.x += (targetX - camera.position.x) * 0.05;
      camera.position.y += (targetY - scrollPercent * 8 - camera.position.y) * 0.05;
      camera.position.z = 8 + Math.sin(scrollPercent * Math.PI) * 3;
      
      camera.rotation.z = scrollPercent * 0.5 + mouseRef.current.x * 0.1;
      camera.lookAt(0, -scrollPercent * 3, 0);

      renderer.render(scene, camera);
    };

    animate();

    // Handle scroll
    const handleScroll = () => {
      scrollYRef.current = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0);
    };

    // Handle mouse movement for parallax
    const handleMouseMove = (e) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      
      objects.forEach(obj => {
        obj.mesh.geometry.dispose();
        obj.mesh.material.dispose();
      });
      [particleSystem1, particleSystem2, particleSystem3].forEach(ps => {
        ps.geometry.dispose();
        ps.material.dispose();
      });
      bgShapes.forEach(shape => {
        shape.mesh.geometry.dispose();
        shape.mesh.material.dispose();
      });
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full bg-black">
      {/* Fixed Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-screen z-0"
      />

      {/* Animated Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-900 z-50">
        <div
          className="h-full bg-gradient-to-r from-purple-500 via-pink-500 via-cyan-500 to-yellow-500 transition-all duration-300 shadow-lg shadow-purple-500/50"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Scroll indicator */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 animate-bounce opacity-70">
        <div className="w-8 h-12 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full animate-pulse" />
        </div>
      </div>

      {/* Content Sections */}
      <div className="relative z-10 pointer-events-none">
        <section className="min-h-screen flex items-center justify-center px-8">
          <div className="text-center space-y-6">
            <h1 className="text-8xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-500 text-transparent bg-clip-text animate-pulse">
              Dimensional Portal
            </h1>
            <p className="text-3xl text-gray-300 font-light tracking-wide">
              Journey Through Interactive 3D Space
            </p>
            <div className="flex gap-4 justify-center items-center text-sm text-gray-500">
              <span className="px-4 py-2 border border-purple-500/30 rounded-full">Advanced Physics</span>
              <span className="px-4 py-2 border border-cyan-500/30 rounded-full">Particle Systems</span>
              <span className="px-4 py-2 border border-pink-500/30 rounded-full">Dynamic Lighting</span>
            </div>
          </div>
        </section>

        <section className="min-h-screen flex items-center justify-end px-16">
          <div className="max-w-xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 p-10 rounded-3xl backdrop-blur-xl border border-purple-500/20 shadow-2xl">
            <div className="text-sm text-purple-400 mb-2 font-mono">/// 01</div>
            <h2 className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text mb-6">
              Multi-Layered Animation
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-4">
              Experience complex orbital movements, dynamic scaling, and color morphing. Each object follows its own physics simulation.
            </p>
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse delay-100" />
              <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse delay-200" />
            </div>
          </div>
        </section>

        <section className="min-h-screen flex items-center justify-start px-16">
          <div className="max-w-xl bg-gradient-to-br from-cyan-900/20 to-blue-900/20 p-10 rounded-3xl backdrop-blur-xl border border-cyan-500/20 shadow-2xl">
            <div className="text-sm text-cyan-400 mb-2 font-mono">/// 02</div>
            <h2 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text mb-6">
              Particle Flow Fields
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-4">
              Three independent particle systems with 2400+ particles create ambient motion and depth throughout the scene.
            </p>
            <div className="text-cyan-400/60 text-sm font-mono">
              &gt; Real-time physics simulation_
            </div>
          </div>
        </section>

        <section className="min-h-screen flex items-center justify-center px-8">
          <div className="max-w-3xl bg-gradient-to-br from-yellow-900/20 to-orange-900/20 p-12 rounded-3xl backdrop-blur-xl border border-yellow-500/20 shadow-2xl text-center">
            <div className="text-sm text-yellow-400 mb-2 font-mono">/// 03</div>
            <h2 className="text-7xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-transparent bg-clip-text mb-6">
              Mouse Parallax Effect
            </h2>
            <p className="text-2xl text-gray-300 leading-relaxed mb-6">
              Move your mouse to control camera perspective. Every movement creates a unique viewing angle.
            </p>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div className="p-4 bg-yellow-500/10 rounded-xl">
                <div className="text-yellow-400 font-bold mb-1">6</div>
                <div className="text-gray-400">3D Objects</div>
              </div>
              <div className="p-4 bg-orange-500/10 rounded-xl">
                <div className="text-orange-400 font-bold mb-1">2400+</div>
                <div className="text-gray-400">Particles</div>
              </div>
              <div className="p-4 bg-red-500/10 rounded-xl">
                <div className="text-red-400 font-bold mb-1">60</div>
                <div className="text-gray-400">FPS</div>
              </div>
            </div>
          </div>
        </section>

        <section className="min-h-screen flex items-center justify-end px-16">
          <div className="max-w-xl bg-gradient-to-br from-pink-900/20 to-purple-900/20 p-10 rounded-3xl backdrop-blur-xl border border-pink-500/20 shadow-2xl">
            <div className="text-sm text-pink-400 mb-2 font-mono">/// 04</div>
            <h2 className="text-6xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text mb-6">
              Advanced Materials
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Physically-based rendering with metallic surfaces, clearcoat effects, and emissive properties create photorealistic 3D objects.
            </p>
          </div>
        </section>

        <section className="min-h-screen flex items-center justify-center px-8">
          <div className="text-center space-y-8">
            <div className="inline-block">
              <div className="text-8xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 via-cyan-500 to-yellow-500 text-transparent bg-clip-text mb-4">
                Infinity Awaits
              </div>
              <div className="h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 animate-pulse" />
            </div>
            <p className="text-2xl text-gray-400">
              Scroll back to experience the journey again
            </p>
            <div className="text-gray-600 text-sm font-mono">
              Built with Three.js + React + Advanced Shaders
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}