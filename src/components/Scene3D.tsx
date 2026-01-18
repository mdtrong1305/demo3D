import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import type { Scene3DProps } from '../interfaces/index'; // sử dụng interface từ file index.ts

// handle click debug console tọa độ
const handleDebugClick = (
  event: MouseEvent,
  renderer: THREE.WebGLRenderer,
  camera: THREE.PerspectiveCamera,
  scene: THREE.Scene
) => {
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  const rect = renderer.domElement.getBoundingClientRect();

  // tính toán vị trí chuột trong không gian 2d của canvas
  mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

  // bắn một tia từ camera tới vị trí chuột
  raycaster.setFromCamera(mouse, camera);
  
  // tìm các điểm giao nhau giữa tia và các vật thể trong scene
  const intersects = raycaster.intersectObjects(scene.children, true);
  
  if (intersects.length > 0) {
    const p = intersects[0].point;
    // in ra console tọa độ x, y, z để copy vào file cấu hình
    console.log(`tọa độ click: [${p.x.toFixed(2)}, ${p.y.toFixed(2)}, ${p.z.toFixed(2)}]`);
  }
};

export default function Scene3D({ onSceneReady, minZoom = 2, maxZoom = 20 }: Scene3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const initRef = useRef(false); // chốt chặn để không khởi tạo lại scene

  useEffect(() => {
    if (!containerRef.current || initRef.current) return;
    initRef.current = true;

    const { clientWidth: w, clientHeight: h } = containerRef.current;

    // khởi tạo scene và camera
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf8fafc);
    const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 1000);
    camera.position.set(8, 6, 8);

    // renderers
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(w, h);
    containerRef.current.appendChild(renderer.domElement);

    const labelRenderer = new CSS2DRenderer();
    labelRenderer.setSize(w, h);
    labelRenderer.domElement.style.position = 'absolute';
    labelRenderer.domElement.style.top = '0';
    labelRenderer.domElement.style.pointerEvents = 'none';
    containerRef.current.appendChild(labelRenderer.domElement);

    // lưới và ánh sáng
    const gird = new THREE.GridHelper(20, 20, 0x94a3b8, 0xe2e8f0);
    gird.position.y = -1;
    scene.add(gird);
    
    scene.add(new THREE.AmbientLight(0xffffff, 0.8));
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 10, 5);
    scene.add(light);

    // điều khiển
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.minDistance = minZoom;
    controls.maxDistance = maxZoom;
    scene.userData.controls = controls;

    // đăng ký sự kiện click thông qua hàm đã tách
    const onClick = (e: MouseEvent) => handleDebugClick(e, renderer, camera, scene);
    renderer.domElement.addEventListener('click', onClick);

    // vòng lặp render
    let frameId: number;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
      labelRenderer.render(scene, camera);
    };
    animate();

    if (onSceneReady) onSceneReady(scene, camera, renderer);

    // cleanup
    return () => {
      cancelAnimationFrame(frameId);
      renderer.domElement.removeEventListener('click', onClick);
      renderer.dispose();
      containerRef.current?.replaceChildren();
    };
  }, [onSceneReady, minZoom, maxZoom]);

  return <div ref={containerRef} className="w-full h-[500px] relative" />;
}