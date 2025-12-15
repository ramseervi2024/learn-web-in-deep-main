import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";

// Load GLB Model
function Model() {
  const { scene } = useGLTF("/LivingRoom.glb"); // public/models/myModel.glb
  return <primitive object={scene} position={[0, 0, 0]} />;
}

export default function ModelViewer() {
  return (
    <div className="w-full h-screen bg-blue-100">
      <Canvas
        shadows
        camera={{ position: [3, 2, 5], fov: 60 }}
      >
        {/* Soft environment light */}
        <hemisphereLight intensity={1} groundColor={"#444"} />

        {/* Directional sunlight */}
        <directionalLight
          position={[5, 10, 7]}
          intensity={1.2}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />

        {/* Ground */}
        <mesh rotation-x={-Math.PI / 2} receiveShadow>
          <planeGeometry args={[200, 200]} />
          <meshStandardMaterial color="white" />
        </mesh>

        {/* 3D Model */}
        <Suspense fallback={null}>
          <Model />
        </Suspense>

        {/* Camera Controls */}
        <OrbitControls enableDamping />

        {/* Adds realistic lighting & reflections */}
        <Environment preset="sunset" />
      </Canvas>
    </div>
  );
}
