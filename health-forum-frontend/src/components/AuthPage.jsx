import React, { useState } from 'react';

const AuthPage = () => {
  const [showRegPass, setShowRegPass] = useState(false);
  const [showLoginPass, setShowLoginPass] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Hệ thống đang xử lý dữ liệu của bạn!');
  };

  return (
    <div className="medical-bg min-h-screen relative overflow-x-hidden text-slate-800">
      <div className="dna-pattern"></div>

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">✚</div>
            <span className="font-extrabold text-xl text-emerald-700 tracking-tight hidden sm:block">HealthForum</span>
          </div>

          <div className="flex-1 max-w-xl">
            <div className="relative group">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-500 transition-colors">🔍</span>
              <input 
                type="text" 
                placeholder="Tìm kiếm bài viết, bác sĩ..." 
                className="w-full pl-10 pr-4 py-2 bg-slate-100 border-none rounded-full text-sm focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all outline-none"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button className="px-4 py-2 text-sm font-semibold text-emerald-600 hover:bg-emerald-50 rounded-full transition-all">Đăng nhập</button>
            <button className="px-4 py-2 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-full shadow-md shadow-emerald-200 transition-all">Đăng ký</button>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">Đăng ký hoặc Đăng nhập</h1>
          <p className="text-slate-500">Tham gia cộng đồng y khoa lớn nhất Việt Nam ngay hôm nay</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* REGISTRATION FORM */}
          <section className="bg-white p-8 rounded-3xl border border-emerald-100 shadow-xl flex flex-col hover:-translate-y-1 transition-transform duration-300">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <span className="text-emerald-500">📝</span> Registration
            </h2>
            <form className="space-y-5 flex-1" onSubmit={handleSubmit}>
              <div className="space-y-1">
                <label className="text-sm font-bold text-slate-600 ml-1">Họ và tên</label>
                <input type="text" placeholder="Nguyễn Văn A" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-emerald-500 outline-none transition-all" />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-bold text-slate-600 ml-1">Email</label>
                <input type="email" placeholder="email@vi-du.com" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-emerald-500 outline-none transition-all" />
              </div>
              <div className="space-y-1 relative">
                <label className="text-sm font-bold text-slate-600 ml-1">Mật khẩu</label>
                <input 
                  type={showRegPass ? "text" : "password"} 
                  placeholder="••••••••" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-emerald-500 outline-none transition-all" 
                />
                <button 
                  type="button" 
                  onClick={() => setShowRegPass(!showRegPass)} 
                  className="absolute right-4 top-10 text-slate-400 hover:text-emerald-600"
                >
                  {showRegPass ? '🔒' : '👁️'}
                </button>
              </div>
              <div className="space-y-1">
                <label className="text-sm font-bold text-slate-600 ml-1">Vị trí công tác</label>
                <select className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-emerald-500 outline-none transition-all cursor-pointer">
                  <option>Bác sĩ, Y tá, Sinh viên y khoa</option>
                  <option>Dược sĩ, Chuyên viên</option>
                  <option>Khác (Bệnh nhân)</option>
                </select>
              </div>
              <button className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg shadow-emerald-200 transition-all mt-4">
                Đăng ký ngay
              </button>
            </form>
          </section>

          {/* LOGIN FORM */}
          <section className="bg-white p-8 rounded-3xl border border-blue-100 shadow-xl flex flex-col hover:-translate-y-1 transition-transform duration-300">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <span className="text-blue-500">🔐</span> Login
            </h2>
            <form className="space-y-5 flex-1" onSubmit={handleSubmit}>
              <div className="space-y-1">
                <label className="text-sm font-bold text-slate-600 ml-1">Email đăng nhập</label>
                <input type="email" placeholder="email@vi-du.com" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
              </div>
              <div className="space-y-1 relative">
                <label className="text-sm font-bold text-slate-600 ml-1">Mật khẩu</label>
                <input 
                  type={showLoginPass ? "text" : "password"} 
                  placeholder="••••••••" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
                />
                <button 
                  type="button" 
                  onClick={() => setShowLoginPass(!showLoginPass)} 
                  className="absolute right-4 top-10 text-slate-400 hover:text-blue-600"
                >
                  {showLoginPass ? '🔒' : '👁️'}
                </button>
              </div>
              <div className="text-right">
                <a href="#" className="text-xs font-semibold text-blue-600 hover:underline">Quên mật khẩu?</a>
              </div>
              <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-200 transition-all mt-4">
                Đăng nhập
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-slate-100 space-y-3">
              <button className="w-full py-3 flex items-center justify-center gap-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-all font-semibold text-slate-700">
                <span className="text-lg">G</span> Đăng nhập bằng Google
              </button>
              <button className="w-full py-3 flex items-center justify-center gap-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-all font-semibold text-slate-700">
                <span className="text-lg text-blue-600 font-bold">f</span> Đăng nhập bằng Facebook
              </button>
            </div>
          </section>

        </div>
      </main>

      <footer className="mt-12 py-8 border-t border-slate-200 text-center">
        <div className="flex justify-center gap-6 text-sm font-medium text-slate-400">
          <a href="#" className="hover:text-emerald-600">Điều khoản dịch vụ</a>
          <span className="text-slate-200">|</span>
          <a href="#" className="hover:text-emerald-600">Chính sách bảo mật</a>
        </div>
        <p className="mt-4 text-xs text-slate-400">© 2026 HealthForum. Nền tảng kết nối y tế tin cậy.</p>
      </footer>
    </div>
  );
};

export default AuthPage;