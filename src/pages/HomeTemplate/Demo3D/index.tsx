import { useState, useCallback } from 'react';
import * as THREE from 'three';
import Demo3DSection from './Demo3DSection';
import InstructionsSection from './InstructionsSection';

export default function Demo3d() {
  const [scene, setScene] = useState<THREE.Scene | null>(null);
  const [camera, setCamera] = useState<THREE.PerspectiveCamera | null>(null);
  // handle callback khi component Scene3D sẵn sàng
  const handleSceneReady = useCallback((
    sceneInstance: THREE.Scene,
    cameraInstance: THREE.PerspectiveCamera,
    _renderer: THREE.WebGLRenderer
  ) => {
    setScene(sceneInstance);
    setCamera(cameraInstance);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* header section */}
        <div className="text-center mt-12 mb-8">
          <h1 className="text-5xl font-bold mb-4">
            3D Model{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">
              Visualization
            </span>
          </h1>
          <p className="text-xl text-slate-600 mb-6">
            Click vào các số trên model để xem thông tin chi tiết
          </p>
        </div>
        {/* 3D section */}
        <Demo3DSection 
          scene={scene}
          camera={camera}
          handleSceneReady={handleSceneReady}
        />
        {/* hướng dẫn section */}
        <InstructionsSection />
      </div>
    </div>
  );
}