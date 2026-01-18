// component hiển thị hướng dẫn sử dụng 3D viewer
export default function InstructionsSection() {
  return (
    <div className="grid md:grid-cols-3 gap-6 mt-5">
      <div className="glass-card rounded-xl p-6 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-xl mb-4">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold mb-2">Xoay Scene</h3>
        <p className="text-slate-600 text-sm">Click chuột trái và kéo để xoay camera xung quanh scene 3D</p>
      </div>

      <div className="glass-card rounded-xl p-6 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-500 text-white rounded-xl mb-4">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold mb-2">Zoom In/Out</h3>
        <p className="text-slate-600 text-sm">Cuộn chuột (scroll) để phóng to hoặc thu nhỏ view 3D</p>
      </div>

      <div className="glass-card rounded-xl p-6 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-500 text-white rounded-xl mb-4">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold mb-2">Di Chuyển</h3>
        <p className="text-slate-600 text-sm">Click chuột phải và kéo để di chuyển camera (pan)</p>
      </div>
    </div>
  );
}
