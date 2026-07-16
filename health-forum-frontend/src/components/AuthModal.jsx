import React, { useState } from 'react';

export default function AuthModal({ isOpen, onClose }) {
  const [isLoginTab, setIsLoginTab] = useState(true); // true: Đăng nhập, false: Đăng ký

  if (!isOpen) return null; // Nếu không mở thì không render gì cả

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Lớp nền mờ phía sau - Click vào đây sẽ đóng modal */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose}></div>

      {/* Khung Form chính */}
      <div className="relative bg-white w-full max-w-md p-8 rounded-2xl shadow-2xl border border-gray-100 animate-in fade-in zoom-in-95 duration-200 mx-4">
        
        {/* Nút đóng (X) ở góc phải */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-all"
        >
          ✕
        </button>

        {/* Chuyển đổi Tab Đăng nhập / Đăng ký */}
        <div className="flex border-b border-gray-100 mb-6">
          <button
            className={`flex-1 pb-3 text-lg font-bold transition-all ${isLoginTab ? 'text-emerald-600 border-b-2 border-emerald-600' : 'text-gray-400 hover:text-gray-600'}`}
            onClick={() => setIsLoginTab(true)}
          >
            Đăng nhập
          </button>
          <button
            className={`flex-1 pb-3 text-lg font-bold transition-all ${!isLoginTab ? 'text-emerald-600 border-b-2 border-emerald-600' : 'text-gray-400 hover:text-gray-600'}`}
            onClick={() => setIsLoginTab(false)}
          >
            Đăng ký thành viên
          </button>
        </div>

        {/* Nội dung Form */}
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Email của bạn</label>
            <input 
              type="email" 
              placeholder="name@example.com" 
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Mật khẩu</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
            />
          </div>

          {/* Các trường bổ sung nếu là tab Đăng ký */}
          {!isLoginTab && (
            <>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Họ và tên</label>
                <input 
                  type="text" 
                  placeholder="Nguyễn Văn A" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-emerald-500 transition-all"
                />
              </div>
              <div className="flex items-center gap-2 py-1">
                <input type="checkbox" id="isDoctor" className="rounded text-emerald-600 focus:ring-emerald-500" />
                <label htmlFor="isDoctor" className="text-sm text-gray-600 font-medium cursor-pointer">Tôi là Bác sĩ / Chuyên gia y tế</label>
              </div>
            </>
          )}

          {isLoginTab && (
            <div className="text-right">
              <a href="#" className="text-xs text-emerald-600 hover:underline">Quên mật khẩu?</a>
            </div>
          )}

          {/* Nút hành động chính */}
          <button className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg shadow-emerald-600/10 transition-all mt-6">
            {isLoginTab ? 'Đăng nhập ngay' : 'Đăng ký tài khoản'}
          </button>
        </form>
      </div>
    </div>
  );
}