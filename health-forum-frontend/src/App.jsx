import React, { useState } from 'react';

const App = () => {
  const [viewMode, setViewMode] = useState('login'); // 'login' hoặc 'forgot'
  const [email, setEmail] = useState('');

  const handleForgotPasswordClick = () => setViewMode('forgot');
  const handleBackToLogin = () => setViewMode('login');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Đang thực hiện đăng nhập...");
  };

  const handleForgotSubmit = (e) => {
    e.preventDefault();
    alert(`Đã gửi yêu cầu khôi phục đến: ${email}`);
    setViewMode('login');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      {viewMode === 'login' ? (
        // FORM ĐĂNG NHẬP
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm">
          <h2 className="text-2xl font-bold text-emerald-700 mb-6 text-center">Đăng nhập HealthForum</h2>
          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <input type="email" placeholder="Email" className="w-full p-3 border rounded-lg" required />
            <input type="password" placeholder="Mật khẩu" className="w-full p-3 border rounded-lg" required />
            <button className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700">Đăng nhập</button>
          </form>
          <button 
            onClick={handleForgotPasswordClick}
            className="w-full mt-4 text-sm text-gray-500 hover:text-emerald-600 transition"
          >
            Quên mật khẩu?
          </button>
        </div>
      ) : (
        // FORM QUÊN MẬT KHẨU
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm">
          <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">Khôi phục mật khẩu</h2>
          <p className="text-sm text-gray-600 mb-6 text-center">Nhập email để nhận hướng dẫn khôi phục.</p>
          <form onSubmit={handleForgotSubmit} className="space-y-4">
            <input 
              type="email" 
              placeholder="Nhập email của bạn" 
              className="w-full p-3 border rounded-lg" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">Gửi yêu cầu</button>
            <button 
              type="button" 
              onClick={handleBackToLogin}
              className="w-full mt-4 text-sm text-gray-500 hover:text-gray-800"
            >
              Quay lại đăng nhập
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default App;