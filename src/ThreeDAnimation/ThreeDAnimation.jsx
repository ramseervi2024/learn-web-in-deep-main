import React, { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { ScrollControls, Scroll } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "./components/Navbar";
import PizzaModel from "./components/PizzaModel";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Menu from "./sections/Menu";
import Story from "./sections/Story";
import Contact from "./sections/Contact";

gsap.registerPlugin(ScrollTrigger);

const PizzaScene = ({ containerRef }) => {
  const pizzaRef = useRef();

  useEffect(() => {
    if (!pizzaRef.current || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // Pizza Movement Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        }
      });

      // To About (Move right, tilt)
      tl.to(pizzaRef.current.position, { x: 2, y: 0, z: 0 }, "about")
        .to(pizzaRef.current.rotation, { x: 0.5, z: 0.2 }, "about")
        .to(pizzaRef.current.scale, { x: 1.2, y: 1.2, z: 1.2 }, "about");

      // To Menu (Move left, scale up)
      tl.to(pizzaRef.current.position, { x: -2, y: -0.5 }, "menu")
        .to(pizzaRef.current.rotation, { x: -0.2, z: -0.2 }, "menu")
        .to(pizzaRef.current.scale, { x: 1.5, y: 1.5, z: 1.5 }, "menu");

      // To Story (Center, tilt back)
      tl.to(pizzaRef.current.position, { x: 0, y: 0 }, "story")
        .to(pizzaRef.current.rotation, { x: 0.8, z: 0 }, "story")
        .to(pizzaRef.current.scale, { x: 1, y: 1, z: 1 }, "story");

      // To Contact (Bottom center, tilt forward)
      tl.to(pizzaRef.current.position, { x: 0, y: -2 }, "contact")
        .to(pizzaRef.current.rotation, { x: -0.5, z: 0 }, "contact");

      // Scroll Stop Bounce Effect
      let scrollTimeout;
      const onScroll = () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          if (pizzaRef.current) {
            gsap.to(pizzaRef.current.position, {
              y: "+=0.1",
              duration: 0.4,
              yoyo: true,
              repeat: 1,
              ease: "power2.inOut"
            });
          }
        }, 150);
      };

      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }, containerRef);

    return () => ctx.revert();
  }, [containerRef]);

  return (
    <group ref={pizzaRef}>
      <PizzaModel />
    </group>
  );
};

const ThreeDAnimation = () => {
  const containerRef = useRef();

  return (
    <div
      ref={containerRef}
      className="bg-[#0a0a0a] min-h-screen w-full relative overflow-x-hidden selection:bg-orange-500 selection:text-white"
    >
      <Navbar />

      {/* 3D Canvas - Fixed in background */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <PizzaScene containerRef={containerRef} />
        </Canvas>
      </div>

      {/* Content Layers */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Menu />
        <Story />
        <Contact />
      </div>

      {/* Animated Gradient Background */}
      <div className="fixed inset-0 -z-10 opacity-30 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-900 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-red-900 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>
    </div>
  );
};

export default ThreeDAnimation;
