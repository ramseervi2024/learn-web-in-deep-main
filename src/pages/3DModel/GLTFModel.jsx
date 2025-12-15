import React, { Suspense, useState, useEffect } from 'react';
import { useGLTF, Html, useProgress } from '@react-three/drei';
import * as THREE from 'three';

function GLTFModel() {
  const { scene } = useGLTF('/LivingRoom.glb');
  const [loading, setLoading] = useState(true);
  const { progress } = useProgress();

  useEffect(() => {
    if (scene) {
      // Configure all meshes in the model
      scene.traverse((child) => {
        if (child.isMesh) {
          // Enable shadows
          child.castShadow = true;
          child.receiveShadow = true;
          
          // Improve material quality
          if (child.material) {
            child.material.side = THREE.DoubleSide;
            
            // Enhance texture filtering
            if (child.material.map) {
              child.material.map.anisotropy = 16;
              child.material.map.minFilter = THREE.LinearMipmapLinearFilter;
              child.material.map.magFilter = THREE.LinearFilter;
            }
            
            // Add environment reflections if material supports it
            if (child.material instanceof THREE.MeshStandardMaterial) {
              child.material.envMapIntensity = 0.5;
              child.material.needsUpdate = true;
            }
          }
        }
      });
      
      setLoading(false);
      
      // Hide loading indicator
      const loadingElement = document.getElementById('loading');
      if (loadingElement) {
        setTimeout(() => {
          loadingElement.style.display = 'none';
        }, 500);
      }
    }
  }, [scene]);

  // Loading fallback
  if (loading) {
    return (
      <Html center>
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500 mx-auto mb-2"></div>
          <p className="text-sm text-gray-700">Loading model... {Math.round(progress)}%</p>
        </div>
      </Html>
    );
  }

  return (
    <primitive 
      object={scene} 
      position={[0, 0, 0]}
      rotation={[0, 0, 0]}
      scale={[1, 1, 1]}
    />
  );
}

// Preload the model for better performance
useGLTF.preload('/LivingRoom.glb');

// Wrap in Suspense for async loading
export default function ModelWrapper() {
  return (
    <Suspense fallback={
      <Html center>
        <div className="text-gray-700">Loading 3D model...</div>
      </Html>
    }>
      <GLTFModel />
    </Suspense>
  );
}