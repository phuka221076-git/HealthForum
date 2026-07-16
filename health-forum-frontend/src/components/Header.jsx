import React from 'react';

export default function Header({ onOpenLogin }) {
  return (
    <header style={{
      backgroundColor: '#ffffff',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 50,
      fontFamily: 'sans-serif'
    }}>
      {/* Container chính ép căn ngang */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 16px',
        height: '64px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '16px'
      }}>
        
        {/* 1. Cụm Logo bên trái */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
          <span style={{ fontSize: '24px' }}>🏥</span>
          <span style={{ fontWeight: 'bold', fontSize: '18px', color: '#059669', whiteSpace: 'nowrap' }}>
            HealthForum
          </span>
        </div>

        {/* 2. Ô tìm kiếm ở giữa (Co giãn) */}
        <div style={{ flex: 1, maxWidth: '500px', position: 'relative', display: 'flex', alignItems: 'center' }}>
          <input 
            type="text" 
            placeholder="Tìm kiếm..." 
            style={{
              width: '100%',
              padding: '8px 16px 8px 36px',
              backgroundColor: '#f3f4f6',
              border: '1px solid #e5e7eb',
              borderRadius: '9999px',
              fontSize: '14px',
              outline: 'none',
              boxSizing: 'border-box'
            }}
          />
          <span style={{ position: 'absolute', left: '12px', color: '#9ca3af' }}>🔍</span>
        </div>

        {/* 3. Cụm nút bấm bên phải */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
          <button 
            onClick={onOpenLogin}
            style={{
              padding: '8px 16px',
              fontSize: '14px',
              fontWeight: 600,
              color: '#059669',
              backgroundColor: 'transparent',
              border: 'none',
              borderRadius: '9999px',
              cursor: 'pointer'
            }}
          >
            Đăng nhập
          </button>
          <button 
            onClick={onOpenLogin}
            style={{
              padding: '8px 16px',
              fontSize: '14px',
              fontWeight: 600,
              color: '#ffffff',
              backgroundColor: '#059669',
              border: 'none',
              borderRadius: '9999px',
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
          >
            Đăng ký
          </button>
        </div>

      </div>
    </header>
  );
}