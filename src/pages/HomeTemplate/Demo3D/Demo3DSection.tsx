import * as THREE from "three";
import gsap from 'gsap';
import Scene3D from "../../../components/Scene3D";
import Model3DLoader from "../../../components/Model3DLoader";
import Annotation from "../../../components/Annotation";
import type { Demo3DSectionProps } from '../../../interfaces/index'

// list vị trí các điểm chú thích
const POINTS = [
  {
    id: 1,
    pos: [0.77, 3.50, 0.23], // vị trí điểm chú thích
    camPos: [2.5, 6, 2.5], // góc nhìn camera khi show điểm này
    title: "nắp thùng",
    desc: "nơi đổ dầu vào",
  },
  {
    id: 2,
    pos: [1.00, 1.99, 1.24], // vị trí điểm chú thích
    camPos: [3, 3, 4], // góc nhìn camera khi show điểm này
    title: "thân thùng",
    desc: "thép không gỉ",
  },
  {
    id: 3,
    pos: [0.62, -1.00, 1.00], // vị trí điểm chú thích
    camPos: [2, -3, 4], // góc nhìn camera khi show điểm này
    title: "đáy thùng",
    desc: "được hàn kín để tránh rò rỉ dầu",
  },
];

export default function Demo3DSection({
  scene,
  camera,
  handleSceneReady,
}: Demo3DSectionProps) {

  // handle xử lý bay camera khi click
  const handlePointClick = (point: any) => {
    if (!camera || !scene) return;
    const controls = scene.userData.controls;

    // bay vị trí camera tới góc nhìn mới
    gsap.to(camera.position, {
      x: point.camPos[0],
      y: point.camPos[1],
      z: point.camPos[2],
      duration: 1.5,
      ease: "power2.inOut",
    });

    // xoay tâm nhìn của camera vào đúng điểm được click
    gsap.to(controls.target, {
      x: point.pos[0],
      y: point.pos[1],
      z: point.pos[2],
      duration: 1.5,
      ease: "power2.inOut",
    });
  };

  return (
    <div className="glass-card rounded-2xl p-4 shadow-2xl bg-white">
      <Scene3D onSceneReady={handleSceneReady} minZoom={2} maxZoom={20} />
      {scene && (
        <>
          <Model3DLoader
            scene={scene}
            modelPath="/models/oil.glb"
            onLoad={(model: THREE.Group) => { // căn giữa và scale model khi load xong
              const box = new THREE.Box3().setFromObject(model);
              model.position.sub(box.getCenter(new THREE.Vector3()));
              model.scale.setScalar(3.5);
            }}
          />
          {POINTS.map((p) => (
            <Annotation
              key={p.id}
              scene={scene}
              position={new THREE.Vector3(...p.pos)}
              label={p.id.toString()}
              title={p.title}
              description={p.desc}
              onClick={() => handlePointClick(p)}
            />
          ))}
        </>
      )}
    </div>
  );
}
