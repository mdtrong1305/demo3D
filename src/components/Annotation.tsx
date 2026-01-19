import { useState, useEffect, useRef } from 'react';
import { CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import type { AnnotationProps } from '../interfaces/index'

export default function Annotation({ position, label, title, description, scene, onClick }: AnnotationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scene || !divRef.current) return;
    const obj = new CSS2DObject(divRef.current);
    obj.position.copy(position);
    scene.add(obj);
    // cleanup
    return () => { scene.remove(obj); };
  }, [scene, position]);

  return (
    <div ref={divRef} className="relative -translate-x-1/2 -translate-y-1/2">
      {/* hiện thông tin khi hover */}
      {isOpen && (
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-48 p-3 bg-slate-900 text-white rounded-lg text-xs shadow-xl z-50 animate-in fade-in zoom-in duration-200 pointer-events-none">
          <p className="font-bold text-orange-400 mb-1">{title}</p>
          <p>{description}</p>
        </div>
      )}
      <button
        onMouseEnter={() => setIsOpen(true)} // di chuột vào thì hiện
        onMouseLeave={() => setIsOpen(false)} // di chuột ra thì ẩn
        onClick={onClick} // click thì chạy hàm nhìn tới góc đó
        className={`w-8 h-8 rounded-full border-2 transition-all flex items-center justify-center font-bold pointer-events-auto
          ${isOpen ? 'bg-orange-500 border-white text-white scale-125' : 'bg-white border-orange-500 text-orange-500'}`}
      >
        {label}
      </button>
    </div>
  );
}