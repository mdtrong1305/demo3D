import * as THREE from 'three';

export interface Scene3DProps {
  onSceneReady?: (
    scene: THREE.Scene,
    camera: THREE.PerspectiveCamera,
    renderer: THREE.WebGLRenderer
  ) => void;
  minZoom: number;
  maxZoom: number;
}

export interface Model3DLoaderProps {
  scene: THREE.Scene;
  modelPath: string;
  position?: [number, number, number];
  scale?: number;
  rotation?: [number, number, number];
  onLoad?: (model: THREE.Group) => void;
  onProgress?: (progress: number) => void;
  onError?: (error: Error) => void;
}

export interface AnnotationProps {
  position: THREE.Vector3;
  label: string;
  title: string;
  description: string;
  scene: THREE.Scene;
  onClick: () => void;
}

export interface Demo3DSectionProps {
  scene: THREE.Scene | null;
  camera: THREE.PerspectiveCamera | null;
  handleSceneReady: (
    sceneInstance: THREE.Scene,
    cameraInstance: THREE.PerspectiveCamera,
    renderer: THREE.WebGLRenderer
  ) => void
}