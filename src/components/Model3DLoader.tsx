import { useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import type { Model3DLoaderProps } from '../interfaces/index'

export default function Model3DLoader({ 
  scene, 
  modelPath, 
  onLoad,
  scale = 1
}: Model3DLoaderProps) {
  useEffect(() => {
    if (!scene) return;

    const loader = new GLTFLoader();
    const draco = new DRACOLoader();
    draco.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
    loader.setDRACOLoader(draco);

    let loadedModel: THREE.Group;
    // load model
    loader.load(modelPath, (gltf) => {
      loadedModel = gltf.scene;
      loadedModel.traverse((node: any) => {
        if (node.isMesh) {
          node.castShadow = true;
          node.receiveShadow = true;
        }
      });
      
      loadedModel.scale.setScalar(scale);
      scene.add(loadedModel);
      if (onLoad) onLoad(loadedModel);
    });
    // cleanup 
    return () => {
      if (loadedModel) {
        scene.remove(loadedModel);
        loadedModel.traverse((node: any) => {
          if (node.isMesh) {
            node.geometry.dispose();
            (node.material as THREE.Material).dispose();
          }
        });
      }
    };
  }, [scene, modelPath, onLoad]);

  return null;
}