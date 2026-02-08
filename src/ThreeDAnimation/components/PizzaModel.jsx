import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

const PizzaModel = ({ scrollProgress = 0, mousePos = { x: 0, y: 0 } }) => {
    const pizzaRef = useRef();
    const crustRef = useRef();
    const toppingsRef = useRef();

    // Basic continuous rotation
    useFrame((state, delta) => {
        if (pizzaRef.current) {
            pizzaRef.current.rotation.y += delta * 0.5;

            // Dynamic tilt based on mouse or just subtle float
            pizzaRef.current.rotation.x = THREE.MathUtils.lerp(
                pizzaRef.current.rotation.x,
                Math.sin(state.clock.elapsedTime) * 0.1,
                0.1
            );
        }
    });

    return (
        <group ref={pizzaRef}>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                {/* Crust */}
                <mesh ref={crustRef} rotation={[Math.PI / 2, 0, 0]}>
                    <cylinderGeometry args={[2, 2.1, 0.4, 32]} />
                    <meshStandardMaterial color="#d4a373" roughness={0.8} />
                </mesh>

                {/* Cheese Area */}
                <mesh position={[0, 0.1, 0]} rotation={[Math.PI / 2, 0, 0]}>
                    <cylinderGeometry args={[1.8, 1.8, 0.3, 32]} />
                    <meshStandardMaterial color="#fca311" roughness={0.4} />
                </mesh>

                {/* Toppings - Pepperonis */}
                {[...Array(8)].map((_, i) => (
                    <mesh
                        key={i}
                        position={[
                            Math.cos((i / 8) * Math.PI * 2) * 1.2,
                            0.26,
                            Math.sin((i / 8) * Math.PI * 2) * 1.2,
                        ]}
                    >
                        <cylinderGeometry args={[0.3, 0.3, 0.05, 16]} />
                        <meshStandardMaterial color="#9e2a2b" />
                    </mesh>
                ))}

                {/* Central Topping */}
                <mesh position={[0, 0.26, 0]}>
                    <cylinderGeometry args={[0.2, 0.2, 0.05, 16]} />
                    <meshStandardMaterial color="#9e2a2b" />
                </mesh>

                {/* Subtle Glow Effect */}
                <mesh position={[0, 0, 0]}>
                    <sphereGeometry args={[2.5, 32, 32]} />
                    <meshStandardMaterial
                        color="#ff4d00"
                        transparent
                        opacity={0.05}
                        side={THREE.BackSide}
                    />
                </mesh>
            </Float>

            <pointLight position={[5, 5, 5]} intensity={2} color="#fff" />
            <pointLight position={[-5, 5, -5]} intensity={1} color="#ffaa00" />
            <ambientLight intensity={0.5} />
        </group>
    );
};

export default PizzaModel;
