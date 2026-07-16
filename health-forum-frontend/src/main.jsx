import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

const INITIAL_POSTS = [
  {
    id: 1,
    title: "Chế độ ăn Keto có thực sự tốt cho người mắc bệnh tim mạch?",
    excerpt: "Chế độ ăn Keto cắt giảm tối đa tinh bột giúp giảm cân nhanh chóng, nhưng những ảnh hưởng lâu dài đối với thành mạch và lượng mỡ trong máu vẫn là câu hỏi lớn được các nhà khoa học tiếp tục làm rõ...",
    content: "Chế độ ăn Keto (Ketogenic) là chế độ ăn giàu chất béo, vừa phải protein và cực kỳ ít carbohydrate. Khi cắt giảm tinh bột, cơ thể sẽ rơi vào trạng thái chuyển hóa gọi là 'ketosis', bắt đầu đốt cháy chất béo để lấy năng lượng thay vì glucose. Tuy nhiên, đối với người bệnh tim mạch, việc nạp quá nhiều chất béo bão hòa từ thịt đỏ, bơ sữa có thể làm tăng chỉ số LDL-Cholesterol (cholesterol xấu), dẫn đến xơ vữa động mạch. Lời khuyên từ chuyên gia là nếu áp dụng Keto, hãy ưu tiên nguồn chất béo không bão hòa từ cá béo, quả bơ, dầu oliu và hạt óc chó.",
    category: "Dinh dưỡng",
    author: "ThS. BS Trần Minh",
    role: "Bác sĩ, Y tá, Sinh viên y khoa",
    time: "2 giờ trước",
    upvotes: 24,
    comments: [
      { id: 101, author: "Dược sĩ Lê Thị Hà", content: "Bài viết phân tích rất chuẩn xác. Việc chọn lọc loại chất béo trong Keto quyết định sự an toàn của tim mạch.", time: "1 giờ trước" },
      { id: 102, author: "Nguyễn Tuấn", content: "Mẹ tôi bị mỡ máu cao, đọc bài viết này thấy sáng tỏ nhiều điều.", time: "30 phút trước" }
    ]
  },
  {
    id: 2,
    title: "Cách phòng tránh bệnh hô hấp cho trẻ em khi thời tiết giao mùa",
    excerpt: "Sự thay đổi nhiệt độ đột ngột tạo điều kiện thuận lợi cho các virus đường hô hấp phát triển mạnh. Cha mẹ cần chú ý bổ sung dinh dưỡng và hạn chế đưa trẻ tới nơi đông người...",
    content: "Thời tiết giao mùa là thời điểm hệ miễn dịch của trẻ em (đặc biệt là trẻ dưới 5 tuổi) dễ bị tổn thương nhất. Các bệnh thường gặp gồm viêm tiểu phế quản, viêm phổi, cúm A/B và viêm mũi dị ứng. Để phòng bệnh hiệu quả: 1. Đảm bảo tiêm vắc xin cúm đầy đủ hàng nguyên; 2. Giữ ấm cổ, ngực, bàn chân cho trẻ vào ban đêm và sáng sớm; 3. Vệ sinh mũi họng hàng ngày bằng nước muối sinh lý; 4. Bổ sung thực phẩm giàu Vitamin C, Kẽm để củng cố đề kháng tự nhiên.",
    category: "Nhi khoa",
    author: "BS. CKII Nguyễn Thị Mai",
    role: "Bác sĩ, Y tá, Sinh viên y khoa",
    time: "5 giờ trước",
    upvotes: 42,
    comments: [
      { id: 201, author: "Phạm Hồng Nhung", content: "Cảm ơn bác sĩ! Bé nhà em cứ lạnh là lại ho khò khè.", time: "3 giờ trước" }
    ]
  },
  {
    id: 3,
    title: "Sử dụng kháng sinh bừa bãi và hiểm họa kháng thuốc tại Việt Nam",
    excerpt: "Tự ý mua thuốc kháng sinh điều trị các bệnh do virus (như cảm cúm thông thường) đang vô tình đẩy nhanh tốc độ kháng thuốc, để lại hậu quả nghiêm trọng cho thế hệ tương lai...",
    content: "Kháng sinh chỉ có tác dụng tiêu diệt vi khuẩn, hoàn toàn vô hại đối với virus. Tuy nhiên, thói quen tự làm 'bác sĩ' của một bộ phận người dân - cứ ho, sốt là ra hiệu thuốc mua kháng sinh - đang tạo điều kiện cho vi khuẩn đột biến và sinh ra cơ chế kháng thuốc. Hậu quả là những bệnh nhiễm khuẩn thông thường trước đây có thể chữa khỏi dễ dàng thì nay lại trở nên vô phương cứu chữa. Hãy nhớ nguyên tắc: Chỉ dùng kháng sinh khi có đơn của bác sĩ và phải uống đủ liều, đúng thời gian quy định.",
    category: "Dược phẩm",
    author: "PGS. TS Nguyễn Văn Kính",
    role: "Bác sĩ, Y tá, Sinh viên y khoa",
    time: "1 ngày trước",
    upvotes: 56,
    comments: []
  }
];

const INITIAL_DOCTORS = [
  { name: "PGS. TS Nguyễn Văn Kính", specialty: "Truyền nhiễm & Nhiệt đới", hospital: "Bệnh viện Bạch Mai", avatar: "👨‍⚕️", rate: "4.9" },
  { name: "BS. CKII Nguyễn Thị Mai", specialty: "Nhi khoa Tổng quát", hospital: "Bệnh viện Nhi Trung ương", avatar: "👩‍⚕️", rate: "4.8" },
  { name: "ThS. BS Trần Minh", specialty: "Dinh dưỡng & Tim mạch", hospital: "Bệnh viện Chợ Rẫy", avatar: "🩺", rate: "4.7" }
];

function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home' hoặc 'auth'
  const [currentSubView, setCurrentSubView] = useState('feed'); // 'feed', 'doctors'
  const [authTab, setAuthTab] = useState('login'); // 'login' hoặc 'register'
  const [currentUser, setCurrentUser] = useState(null);

  const [posts, setPosts] = useState(INITIAL_POSTS);
  const [selectedPost, setSelectedPost] = useState(null);
  const [activeCategory, setActiveCategory] = useState('Tất cả');
  const [searchQuery, setSearchQuery] = useState('');
  
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState('Dinh dưỡng');
  const [newContent, setNewContent] = useState('');

  const [commentText, setCommentText] = useState('');
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const [showRegPassword, setShowRegPassword] = useState(false);
  const [showLoginPassword, setShowLoginPassword] = useState(false);

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regRole, setRegRole] = useState('Bác sĩ, Y tá, Sinh viên y khoa');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [loginSuccess, setLoginSuccess] = useState('');
  const [regError, setRegError] = useState('');
  const [regSuccess, setRegSuccess] = useState('');

  useEffect(() => {
    const savedUser = localStorage.getItem('health_user');
    if (savedUser) {
      try {
        setCurrentUser(JSON.parse(savedUser));
      } catch (e) {
        localStorage.removeItem('health_user');
        localStorage.removeItem('health_token');
      }
    }
  }, []);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: '', type: 'success' });
    }, 3000);
  };

  const handleLogout = () => {
    localStorage.removeItem('health_user');
    localStorage.removeItem('health_token');
    setCurrentUser(null);
    setCurrentView('home');
    setCurrentSubView('feed');
    setSelectedPost(null);
    showToast('Đã đăng xuất tài khoản an toàn!', 'info');
  };

  const handleRegisterSubmit = async (e) => {
    if (e) e.preventDefault();
    setRegError('');
    setRegSuccess('');
    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:5243/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: regName,
          email: regEmail,
          password: regPassword,
          role: regRole,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Email này đã tồn tại hoặc thông tin không hợp lệ.');
      }

      setRegSuccess('Đăng ký thành công! Đang chuyển hướng sang Đăng nhập...');
      showToast('Đăng ký tài khoản thành công!');
      
      setTimeout(() => {
        setLoginEmail(regEmail);
        setAuthTab('login');
        setRegName('');
        setRegEmail('');
        setRegPassword('');
        setRegSuccess('');
      }, 1500);

    } catch (err) {
      console.error(err);
      setRegError(
        err.message === 'Failed to fetch' 
        ? 'Không thể kết nối tới Backend (Localhost:5243 chưa chạy hoặc cấu hình mạng bị chặn).' 
        : err.message
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLoginSubmit = async (e) => {
    if (e) e.preventDefault();
    setLoginError('');
    setLoginSuccess('');
    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:5243/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: loginEmail, password: loginPassword }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Email hoặc mật khẩu không chính xác.');
      }

      const data = await response.json();
      const loggedUser = data.user || { name: loginEmail.split('@')[0], email: loginEmail, role: 'Khác (Bệnh nhân / Người đọc)' };
      
      localStorage.setItem('health_token', data.token || 'mock_token_xyz');
      localStorage.setItem('health_user', JSON.stringify(loggedUser));
      
      setCurrentUser(loggedUser);
      setLoginSuccess('Đăng nhập thành công!');
      showToast(`Chào mừng bạn quay lại, ${loggedUser.name}!`);
      
      setLoginEmail('');
      setLoginPassword('');

      setTimeout(() => {
        setCurrentView('home');
        setLoginSuccess('');
      }, 1200);

    } catch (err) {
      console.error(err);
      setLoginError(
        err.message === 'Failed to fetch' 
        ? 'Không thể kết nối tới Backend (Localhost:5243 chưa chạy hoặc cấu hình mạng bị chặn).' 
        : err.message
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleUpvote = (postId, e) => {
    if (e) e.stopPropagation(); 
    if (!currentUser) {
      showToast('Vui lòng đăng nhập để bình chọn bài viết!', 'error');
      return;
    }
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return { ...post, upvotes: post.upvotes + 1 };
      }
      return post;
    }));
    showToast('Đã bình chọn bài viết thành công!');
  };

  const handleCreatePost = (e) => {
    if (e) e.preventDefault();
    if (!newTitle.trim() || !newContent.trim()) {
      showToast('Vui lòng nhập đầy đủ tiêu đề và nội dung!', 'error');
      return;
    }

    const isDoctor = currentUser?.role && currentUser.role.includes('Bác sĩ');
    
    const newPost = {
      id: Date.now(),
      title: newTitle,
      excerpt: newContent.length > 150 ? newContent.substring(0, 150) + '...' : newContent,
      content: newContent,
      category: newCategory,
      author: currentUser ? currentUser.name : 'Thành viên ẩn danh',
      role: currentUser ? currentUser.role : 'Khác (Bệnh nhân / Người đọc)',
      time: 'Vừa xong',
      upvotes: 1,
      comments: []
    };

    setPosts([newPost, ...posts]);
    setShowCreateModal(false);
    setNewTitle('');
    setNewContent('');
    showToast(isDoctor ? 'Đã xuất bản bài viết chuyên sâu thành công!' : 'Đã gửi câu hỏi tư vấn y khoa thành công!');
  };

  const handleAddComment = (e) => {
    if (e) e.preventDefault();
    if (!commentText.trim()) return;

    if (!currentUser) {
      showToast('Vui lòng đăng nhập để bình luận!', 'error');
      return;
    }

    const updatedPosts = posts.map(post => {
      if (post.id === selectedPost.id) {
        const newComment = {
          id: Date.now(),
          author: currentUser.name,
          content: commentText,
          time: 'Vừa xong'
        };
        const newComments = [...post.comments, newComment];
        setSelectedPost({ ...post, comments: newComments });
        return { ...post, comments: newComments };
      }
      return post;
    });

    setPosts(updatedPosts);
    setCommentText('');
    showToast('Gửi bình luận thành công!');
  };

  const filteredPosts = posts.filter(post => {
    const matchesCategory = activeCategory === 'Tất cả' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={styles.container}>
      
      {/* THÔNG BÁO TOAST */}
      {toast.show && (
        <div style={{
          ...styles.toast,
          backgroundColor: toast.type === 'error' ? '#ef4444' : toast.type === 'info' ? '#3b82f6' : '#10b981'
        }}>
          <span>{toast.type === 'error' ? '⚠️' : '✅'}</span>
          <span>{toast.message}</span>
        </div>
      )}

      {/* THANH HEADER CỐ ĐỊNH */}
      <header style={styles.header}>
        <div style={styles.headerContainer}>
          <div onClick={() => { setCurrentView('home'); setSelectedPost(null); setCurrentSubView('feed'); }} style={styles.logoBox}>
            <div style={styles.logoBadge}>✚</div>
            <span style={styles.logoText}>HealthForum</span>
          </div>

          <div style={styles.searchContainer}>
            <input 
              type="text" 
              placeholder="Tìm bài viết, chuyên gia, bệnh lý..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={styles.searchInput}
            />
            <span style={styles.searchIcon}>🔍</span>
          </div>

          <div style={styles.headerButtons}>
            <button 
              onClick={() => { setSelectedPost(null); setCurrentSubView('feed'); }}
              style={{...styles.navTab, color: currentSubView === 'feed' ? '#059669' : '#64748b'}}
            >
              Cộng đồng
            </button>
            <button 
              onClick={() => { setSelectedPost(null); setCurrentSubView('doctors'); }}
              style={{...styles.navTab, color: currentSubView === 'doctors' ? '#059669' : '#64748b'}}
            >
              Bác sĩ xác thực
            </button>
            
            {currentUser ? (
              <div style={styles.userProfileSection}>
                <div style={styles.userAvatar}>
                  {currentUser.role && currentUser.role.includes('Bác sĩ') ? '🩺' : '👤'}
                </div>
                <div style={styles.userProfileText}>
                  <div style={styles.userProfileName}>{currentUser.name}</div>
                  <div style={styles.userProfileRole}>{currentUser.role && currentUser.role.includes('Bác sĩ') ? 'Bác sĩ' : 'Thành viên'}</div>
                </div>
                <button onClick={handleLogout} style={styles.btnLogout}>
                  Đăng xuất
                </button>
              </div>
            ) : (
              <>
                <button 
                  onClick={() => { setCurrentView('auth'); setAuthTab('login'); }}
                  style={styles.btnGhost}
                >
                  Đăng nhập
                </button>
                <button 
                  onClick={() => { setCurrentView('auth'); setAuthTab('register'); }}
                  style={styles.btnPrimary}
                >
                  Đăng ký
                </button>
              </>
            )}
          </div>
        </div>
      </header>

      {/* PHẦN THÂN GIAO DIỆN CHÍNH */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {currentView === 'home' ? (
          
          /* DỰNG TOÀN BỘ GIAO DIỆN TRANG CHỦ FEED */
          <main style={styles.mainFeed}>
            
            {/* WELCOME BANNER */}
            <div style={styles.welcomeBanner}>
              <div style={{ position: 'relative', zIndex: 10 }}>
                <h1 style={styles.bannerTitle}>
                  {currentUser 
                    ? `Xin chào Chuyên gia, ${currentUser.name}! 🏥` 
                    : 'Cổng thông tin sức khỏe chuẩn khoa học! 👋'}
                </h1>
                <p style={styles.bannerSub}>
                  Chia sẻ kiến thức y tế sạch đã qua xác minh từ các chuyên gia y tế hàng đầu. Hỏi đáp bệnh lý miễn phí và nhận tư vấn nhanh chóng.
                </p>
              </div>
              <div style={styles.bannerDecoration}>🩺</div>
            </div>

            {currentSubView === 'doctors' ? (
              /* DIỄN ĐÀN DANH BẠ BÁC SĨ */
              <div>
                <h2 style={{...styles.sectionTitle, marginBottom: '20px'}}>🩺 Đội ngũ Chuyên gia và Bác sĩ Đã xác minh danh tính</h2>
                <div style={styles.doctorsGrid}>
                  {INITIAL_DOCTORS.map((doc, idx) => (
                    <div key={idx} style={styles.doctorCard}>
                      <div style={styles.docAvatar}>{doc.avatar}</div>
                      <h3 style={styles.docName}>{doc.name}</h3>
                      <div style={styles.docSpecialty}>{doc.specialty}</div>
                      <div style={styles.docHospital}>{doc.hospital}</div>
                      <div style={styles.docRating}>⭐ {doc.rate} / 5.0 Uy tín</div>
                      <button 
                        onClick={() => showToast(`Tính năng đặt lịch tư vấn trực tiếp với ${doc.name} đang được tích hợp!`)}
                        style={styles.btnConsult}
                      >
                        Yêu cầu tư vấn
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ) : selectedPost ? (
              /* CHI TIẾT BÀI VIẾT VÀ BÌNH LUẬN */
              <div style={styles.detailContainer}>
                <button onClick={() => setSelectedPost(null)} style={styles.btnBack}>
                  ← Quay lại bảng tin cộng đồng
                </button>
                
                <article style={styles.fullArticle}>
                  <div style={styles.postMeta}>
                    <span style={styles.tagGreen}>{selectedPost.category}</span>
                    <span style={{ color: '#64748b' }}>• Đăng bởi {selectedPost.author} ({selectedPost.role}) • {selectedPost.time}</span>
                  </div>
                  <h1 style={styles.detailTitle}>{selectedPost.title}</h1>
                  <p style={styles.detailContent}>{selectedPost.content}</p>

                  <div style={styles.actionRow}>
                    <button onClick={(e) => handleUpvote(selectedPost.id, e)} style={styles.btnVote}>
                      ▲ Hữu ích ({selectedPost.upvotes})
                    </button>
                  </div>
                </article>

                {/* KHU VỰC THẢO LUẬN / BÌNH LUẬN */}
                <section style={styles.commentSection}>
                  <h3 style={styles.commentHeader}>💬 Thảo luận & Ý kiến chuyên môn ({selectedPost.comments.length})</h3>
                  
                  {/* Form viết bình luận */}
                  <form onSubmit={handleAddComment} style={styles.commentForm}>
                    <textarea 
                      placeholder={currentUser ? "Nhập ý kiến chuyên môn hoặc câu hỏi của bạn tại đây..." : "Bạn cần đăng nhập để tham gia thảo luận này..."}
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                      disabled={!currentUser}
                      style={styles.commentTextarea}
                      rows="3"
                    />
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
                      <button 
                        type="submit" 
                        disabled={!currentUser || !commentText.trim()}
                        style={{
                          ...styles.btnSubmitBlue,
                          padding: '10px 20px',
                          opacity: (!currentUser || !commentText.trim()) ? 0.6 : 1,
                          cursor: (!currentUser || !commentText.trim()) ? 'not-allowed' : 'pointer'
                        }}
                      >
                        Gửi phản hồi
                      </button>
                    </div>
                  </form>

                  {/* Danh sách bình luận */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '20px' }}>
                    {selectedPost.comments.length === 0 ? (
                      <p style={{ color: '#94a3b8', fontSize: '14px', textAlign: 'center', padding: '20px' }}>
                        Chưa có thảo luận nào. Hãy là người đầu tiên đưa ra phản hồi chuyên môn!
                      </p>
                    ) : (
                      selectedPost.comments.map(comment => (
                        <div key={comment.id} style={styles.commentCard}>
                          <div style={styles.commentMeta}>
                            <span style={styles.commentAuthor}>{comment.author}</span>
                            <span style={{ color: '#94a3b8' }}>• {comment.time}</span>
                          </div>
                          <p style={styles.commentContent}>{comment.content}</p>
                        </div>
                      ))
                    )}
                  </div>
                </section>
              </div>
            ) : (
              /* BẢNG TIN CỘNG ĐỒNG 3 CỘT */
              <div style={styles.dashboardLayout}>
                
                {/* CỘT TRÁI: DANH MỤC CHỦ ĐỀ */}
                <aside style={styles.leftSidebar}>
                  <h3 style={styles.sidebarTitle}>Chủ đề y khoa</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {['Tất cả', 'Dinh dưỡng', 'Nhi khoa', 'Dược phẩm'].map((cat) => (
                      <button 
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        style={{
                          ...styles.categoryTab,
                          backgroundColor: activeCategory === cat ? '#ecfdf5' : 'transparent',
                          color: activeCategory === cat ? '#047857' : '#475569',
                          fontWeight: activeCategory === cat ? 'bold' : 'normal'
                        }}
                      >
                        <span>{cat === 'Tất cả' ? '🌐' : cat === 'Dinh dưỡng' ? '🥗' : cat === 'Nhi khoa' ? '👶' : '💊'} {cat}</span>
                      </button>
                    ))}
                  </div>
                </aside>

                {/* CỘT GIỮA: DÒNG BÀI VIẾT */}
                <section style={styles.centerFeed}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <h2 style={styles.sectionTitle}>🔥 Bài viết nổi bật gần đây ({filteredPosts.length})</h2>
                    <button 
                      onClick={() => {
                        if (!currentUser) {
                          showToast('Vui lòng đăng ký/đăng nhập để đăng tải bài viết!', 'error');
                          return;
                        }
                        setShowCreateModal(true);
                      }}
                      style={styles.btnCreatePost}
                    >
                      + Tạo bài viết mới
                    </button>
                  </div>

                  {filteredPosts.length === 0 ? (
                    <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '20px', textAlign: 'center', border: '1px solid #e2e8f0' }}>
                      <p style={{ color: '#64748b', fontSize: '15px' }}>Không tìm thấy bài viết nào khớp với từ khóa hoặc danh mục lựa chọn.</p>
                    </div>
                  ) : (
                    filteredPosts.map(post => (
                      <div key={post.id} onClick={() => setSelectedPost(post)} style={styles.postCard}>
                        <div style={styles.postMeta}>
                          <span style={post.category === 'Dinh dưỡng' ? styles.tagGreen : post.category === 'Nhi khoa' ? styles.tagBlue : styles.tagOrange}>
                            {post.category}
                          </span>
                          <span style={{ color: '#94a3b8' }}>• Đăng bởi {post.author} • {post.time}</span>
                        </div>
                        <h3 style={styles.postTitle}>{post.title}</h3>
                        <p style={styles.postExcerpt}>{post.excerpt}</p>
                        
                        <div style={styles.cardFooter}>
                          <button onClick={(e) => handleUpvote(post.id, e)} style={styles.btnVote}>
                            ▲ Hữu ích ({post.upvotes})
                          </button>
                          <span style={{ fontSize: '13px', color: '#64748b' }}>💬 {post.comments.length} Thảo luận</span>
                        </div>
                      </div>
                    ))
                  )}
                </section>

                {/* CỘT PHẢI: BÁC SĨ VÀ THỐNG KÊ */}
                <aside style={styles.rightSidebar}>
                  <div style={styles.sideCard}>
                    <h3 style={styles.sidebarTitle}>🩺 Chuyên gia trực tuyến</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {INITIAL_DOCTORS.slice(0, 2).map((doc, idx) => (
                        <div key={idx} style={styles.miniDocCard}>
                          <span style={{ fontSize: '24px' }}>{doc.avatar}</span>
                          <div style={{ flex: 1 }}>
                            <div style={{ fontWeight: 'bold', fontSize: '13px', color: '#1e293b' }}>{doc.name}</div>
                            <div style={{ fontSize: '11px', color: '#64748b' }}>{doc.specialty}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{...styles.sideCard, marginTop: '20px'}}>
                    <h3 style={styles.sidebarTitle}>📊 Chỉ số diễn đàn</h3>
                    <div style={styles.statRow}>
                      <span>Thành viên tích cực:</span>
                      <strong>1,240+</strong>
                    </div>
                    <div style={styles.statRow}>
                      <span>Bác sĩ xác thực:</span>
                      <strong style={{color: '#059669'}}>180+</strong>
                    </div>
                    <div style={styles.statRow}>
                      <span>Yêu cầu tư vấn:</span>
                      <strong>420+</strong>
                    </div>
                  </div>
                </aside>

              </div>
            )}
          </main>
        ) : (
          
          /* TRANG ĐĂNG KÝ / ĐĂNG NHẬP */
          <main style={styles.authMain}>
            <div style={styles.bgCellTopLeft}>
              <svg width="240" height="240" viewBox="0 0 100 100" fill="none" stroke="#059669" opacity="0.08">
                <circle cx="50" cy="50" r="40" strokeWidth="0.5" strokeDasharray="3 3"/>
                <circle cx="35" cy="35" r="12" fill="currentColor" opacity="0.3"/>
                <circle cx="65" cy="60" r="8" fill="currentColor" opacity="0.2"/>
              </svg>
            </div>
            <div style={styles.bgDnaRight}>
              <svg width="200" height="400" viewBox="0 0 100 200" fill="none" stroke="#3b82f6" opacity="0.07">
                <path d="M20,0 Q50,50 20,100 T20,200" strokeWidth="1.5"/>
                <path d="M60,0 Q30,50 60,100 T60,200" strokeWidth="1.5"/>
              </svg>
            </div>

            <div style={styles.authHeader}>
              <h2 style={styles.authTitle}>
                {authTab === 'register' ? 'Đăng ký tài khoản mới' : 'Chào mừng bạn quay lại'}
              </h2>
              <p style={styles.authSub}>
                {authTab === 'register' 
                  ? 'Tham gia diễn đàn để chia sẻ và cập nhật kiến thức y học'
                  : 'Đăng nhập để đặt câu hỏi trực tiếp cho đội ngũ Bác sĩ chuyên khoa'
                }
              </p>
            </div>

            <div style={styles.singleCardWrapper}>
              
              {authTab === 'register' ? (
                /* BIỂU MẪU ĐĂNG KÝ (XANH LỤC) */
                <section style={styles.cardGreen}>
                  <h3 style={styles.cardHeader}>
                    <span style={styles.indicatorGreen}></span>
                    Đăng ký tài khoản
                  </h3>

                  {regError && (
                    <div style={styles.alertError}>
                      <span style={{ marginRight: '8px' }}>⚠️</span>
                      <div style={{ flex: 1 }}>
                        <div>{regError}</div>
                      </div>
                    </div>
                  )}
                  {regSuccess && <div style={styles.alertSuccess}><span>✅</span> {regSuccess}</div>}
                  
                  <form onSubmit={handleRegisterSubmit} style={styles.form}>
                    <div style={styles.inputGroup}>
                      <label style={styles.label}>Họ và tên</label>
                      <input 
                        type="text" 
                        placeholder="Họ và tên của bạn" 
                        value={regName}
                        onChange={(e) => setRegName(e.target.value)}
                        required
                        disabled={isSubmitting}
                        style={styles.input}
                      />
                    </div>

                    <div style={styles.inputGroup}>
                      <label style={styles.label}>Email</label>
                      <input 
                        type="email" 
                        placeholder="name@example.com" 
                        value={regEmail}
                        onChange={(e) => setRegEmail(e.target.value)}
                        required
                        disabled={isSubmitting}
                        style={styles.input}
                      />
                    </div>

                    <div style={styles.inputGroup}>
                      <label style={styles.label}>Mật khẩu</label>
                      <div style={{ position: 'relative' }}>
                        <input 
                          type={showRegPassword ? "text" : "password"} 
                          placeholder="Mật khẩu (tối thiểu 6 ký tự)" 
                          value={regPassword}
                          onChange={(e) => setRegPassword(e.target.value)}
                          required
                          disabled={isSubmitting}
                          style={styles.inputWithIcon}
                        />
                        <button type="button" onClick={() => setShowRegPassword(!showRegPassword)} style={styles.eyeButton}>
                          {showRegPassword ? '👁️' : '🙈'}
                        </button>
                      </div>
                    </div>

                    <div style={styles.inputGroup}>
                      <label style={styles.label}>Vị trí / Vai trò trên diễn đàn</label>
                      <select 
                        value={regRole}
                        onChange={(e) => setRegRole(e.target.value)}
                        disabled={isSubmitting}
                        style={styles.select}
                      >
                        <option>Bác sĩ, Y tá, Sinh viên y khoa</option>
                        <option>Dược sĩ, Chuyên viên y tế</option>
                        <option>Khác (Bệnh nhân / Người đọc)</option>
                      </select>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      style={{
                        ...styles.btnSubmitGreen,
                        opacity: isSubmitting ? 0.7 : 1,
                        cursor: isSubmitting ? 'not-allowed' : 'pointer'
                      }}
                    >
                      {isSubmitting ? 'Đang gửi thông tin...' : 'Đăng ký ngay'}
                    </button>
                  </form>

                  <div style={styles.togglePrompt}>
                    <span style={{ color: '#64748b' }}>Bạn đã có tài khoản? </span>
                    <button 
                      onClick={() => { setAuthTab('login'); setRegError(''); setRegSuccess(''); }} 
                      style={{ ...styles.toggleLink, color: '#059669' }}
                    >
                      Đăng nhập ngay
                    </button>
                  </div>
                </section>
              ) : (
                /* BIỂU MẪU ĐĂNG NHẬP (XANH DƯƠNG) */
                <section style={styles.cardBlue}>
                  <h3 style={styles.cardHeader}>
                    <span style={styles.indicatorBlue}></span>
                    Đăng nhập hệ thống
                  </h3>

                  {loginError && (
                    <div style={styles.alertError}>
                      <span style={{ marginRight: '8px' }}>⚠️</span>
                      <div style={{ flex: 1 }}>
                        <div>{loginError}</div>
                      </div>
                    </div>
                  )}
                  {loginSuccess && <div style={styles.alertSuccess}><span>✅</span> {loginSuccess}</div>}

                  <form onSubmit={handleLoginSubmit} style={styles.form}>
                    <div style={styles.inputGroup}>
                      <label style={styles.label}>Email đăng nhập</label>
                      <input 
                        type="email" 
                        placeholder="email@example.com" 
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        required
                        disabled={isSubmitting}
                        style={styles.input}
                      />
                    </div>

                    <div style={styles.inputGroup}>
                      <label style={styles.label}>Mật khẩu</label>
                      <div style={{ position: 'relative' }}>
                        <input 
                          type={showLoginPassword ? "text" : "password"} 
                          placeholder="Mật khẩu của bạn" 
                          value={loginPassword}
                          onChange={(e) => setLoginPassword(e.target.value)}
                          required
                          disabled={isSubmitting}
                          style={styles.inputWithIcon}
                        />
                        <button type="button" onClick={() => setShowLoginPassword(!showLoginPassword)} style={styles.eyeButton}>
                          {showLoginPassword ? '👁️' : '🙈'}
                        </button>
                      </div>
                    </div>

                    <div style={{ textAlign: 'right' }}>
                      <a href="#" style={styles.forgotPassword}>Quên mật khẩu?</a>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      style={{
                        ...styles.btnSubmitBlue,
                        opacity: isSubmitting ? 0.7 : 1,
                        cursor: isSubmitting ? 'not-allowed' : 'pointer'
                      }}
                    >
                      {isSubmitting ? 'Đang xác thực...' : 'Đăng nhập'}
                    </button>
                  </form>

                  <div style={styles.togglePrompt}>
                    <span style={{ color: '#64748b' }}>Bạn chưa có tài khoản? </span>
                    <button 
                      onClick={() => { setAuthTab('register'); setLoginError(''); setLoginSuccess(''); }} 
                      style={{ ...styles.toggleLink, color: '#3b82f6' }}
                    >
                      Đăng ký thành viên
                    </button>
                  </div>
                </section>
              )}

            </div>

            <footer style={styles.authFooter}>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '8px' }}>
                <a href="#" style={styles.footerLink}>Điều khoản dịch vụ</a>
                <span style={{ color: '#cbd5e1' }}>|</span>
                <a href="#" style={styles.footerLink}>Chính sách bảo mật</a>
              </div>
              <p style={{ margin: 0 }}>© 2026 HealthForum. Nền tảng y tế tin cậy.</p>
            </footer>
          </main>
        )}
      </div>

      {/* MODAL FORM TẠO BÀI VIẾT MỚI (DỰA TRÊN VAI TRÒ RBAC) */}
      {showCreateModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{...styles.cardHeader, margin: 0}}>
                📝 {currentUser?.role?.includes('Bác sĩ') ? 'Đăng bài viết kiến thức chuyên môn' : 'Đặt câu hỏi y học'}
              </h3>
              <button onClick={() => setShowCreateModal(false)} style={styles.btnCloseModal}>×</button>
            </div>

            <form onSubmit={handleCreatePost} style={styles.form}>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Tiêu đề bài viết / Câu hỏi</label>
                <input 
                  type="text" 
                  placeholder={currentUser?.role?.includes('Bác sĩ') ? "Ví dụ: Các dấu hiệu lâm sàng cảnh báo bệnh hô hấp..." : "Ví dụ: Đau tức ngực trái sau khi chạy bộ là bị gì?"}
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  required
                  style={styles.input}
                />
              </div>

              <div style={styles.inputGroup}>
                <label style={styles.label}>Chuyên mục</label>
                <select 
                  value={newCategory} 
                  onChange={(e) => setNewCategory(e.target.value)} 
                  style={styles.select}
                >
                  <option>Dinh dưỡng</option>
                  <option>Nhi khoa</option>
                  <option>Dược phẩm</option>
                </select>
              </div>

              <div style={styles.inputGroup}>
                <label style={styles.label}>Nội dung chi tiết</label>
                <textarea 
                  placeholder="Viết nội dung bài viết chuyên môn hoặc mô tả triệu chứng của bạn thật chi tiết..."
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  required
                  rows="6"
                  style={styles.commentTextarea}
                />
              </div>

              <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '10px' }}>
                <button type="button" onClick={() => setShowCreateModal(false)} style={styles.btnGhost}>Hủy bỏ</button>
                <button type="submit" style={currentUser?.role?.includes('Bác sĩ') ? styles.btnSubmitGreen : styles.btnSubmitBlue}>
                  {currentUser?.role?.includes('Bác sĩ') ? 'Xuất bản bài viết' : 'Gửi câu hỏi'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f8fafc',
    color: '#334155',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: '"Inter", -apple-system, sans-serif',
    position: 'relative'
  },
  toast: {
    position: 'fixed',
    top: '20px',
    right: '20px',
    padding: '12px 24px',
    borderRadius: '12px',
    color: 'white',
    fontSize: '14px',
    fontWeight: 600,
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    zIndex: 999,
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  header: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(12px)',
    borderBottom: '1px solid #e2e8f0',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    height: '64px'
  },
  headerContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 16px',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '16px'
  },
  logoBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    cursor: 'pointer',
    flexShrink: 0
  },
  logoBadge: {
    width: '36px',
    height: '36px',
    backgroundColor: '#059669',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'black',
    fontSize: '20px',
    boxShadow: '0 4px 12px rgba(5, 150, 105, 0.2)'
  },
  logoText: {
    fontWeight: 800,
    fontSize: '20px',
    color: '#059669',
    letterSpacing: '-0.5px'
  },
  searchContainer: {
    flex: 1,
    maxWidth: '380px',
    position: 'relative'
  },
  searchInput: {
    width: '100%',
    padding: '10px 16px 10px 40px',
    backgroundColor: '#f1f5f9',
    border: '2px solid transparent',
    borderRadius: '9999px',
    fontSize: '14px',
    outline: 'none',
    transition: 'all 0.2s',
    boxSizing: 'border-box'
  },
  searchIcon: {
    position: 'absolute',
    left: '14px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#94a3b8',
    fontSize: '14px'
  },
  headerButtons: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    flexShrink: 0
  },
  navTab: {
    background: 'none',
    border: 'none',
    fontSize: '14px',
    fontWeight: 600,
    cursor: 'pointer',
    padding: '8px 12px',
    borderRadius: '8px',
    transition: 'all 0.2s'
  },
  btnGhost: {
    padding: '8px 16px',
    fontSize: '14px',
    fontWeight: 600,
    border: 'none',
    borderRadius: '9999px',
    cursor: 'pointer',
    color: '#475569',
    backgroundColor: 'transparent',
    transition: 'all 0.2s'
  },
  btnPrimary: {
    padding: '8px 20px',
    fontSize: '14px',
    fontWeight: 600,
    color: 'white',
    backgroundColor: '#059669',
    border: 'none',
    borderRadius: '9999px',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(5, 150, 105, 0.15)',
    transition: 'all 0.2s'
  },
  userProfileSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '4px 12px',
    borderRadius: '9999px',
    backgroundColor: '#f1f5f9',
    border: '1px solid #e2e8f0'
  },
  userAvatar: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    backgroundColor: '#059669',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '16px',
    overflow: 'hidden'
  },
  userProfileText: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left'
  },
  userProfileName: {
    fontSize: '13px',
    fontWeight: 700,
    color: '#1e293b'
  },
  userProfileRole: {
    fontSize: '10px',
    color: '#059669',
    fontWeight: 600
  },
  btnLogout: {
    marginLeft: '8px',
    padding: '6px 12px',
    fontSize: '12px',
    fontWeight: 600,
    color: '#ef4444',
    backgroundColor: '#fee2e2',
    border: 'none',
    borderRadius: '9999px',
    cursor: 'pointer',
    transition: 'all 0.2s'
  },
  mainFeed: {
    maxWidth: '1200px',
    width: '100%',
    margin: '0 auto',
    padding: '32px 16px',
    boxSizing: 'border-box'
  },
  welcomeBanner: {
    background: 'linear-gradient(135deg, rgba(5, 150, 105, 0.08) 0%, rgba(20, 184, 166, 0.04) 100%)',
    border: '1px solid rgba(5, 150, 105, 0.08)',
    borderRadius: '24px',
    padding: '28px',
    marginBottom: '32px',
    position: 'relative',
    overflow: 'hidden'
  },
  bannerTitle: {
    fontSize: '24px',
    fontWeight: 800,
    color: '#0f172a',
    margin: '0 0 8px 0'
  },
  bannerSub: {
    fontSize: '15px',
    color: '#475569',
    lineHeight: 1.6,
    margin: 0,
    maxWidth: '800px'
  },
  bannerDecoration: {
    position: 'absolute',
    right: '24px',
    bottom: '16px',
    fontSize: '72px',
    opacity: 0.08,
    pointerEvents: 'none'
  },
  dashboardLayout: {
    display: 'grid',
    gridTemplateColumns: '240px 1fr 280px',
    gap: '24px'
  },
  leftSidebar: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  },
  sidebarTitle: {
    fontSize: '15px',
    fontWeight: 700,
    color: '#0f172a',
    margin: '0 0 12px 0',
    textAlign: 'left'
  },
  categoryTab: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '12px 16px',
    borderRadius: '12px',
    border: 'none',
    cursor: 'pointer',
    textAlign: 'left',
    fontSize: '14px',
    transition: 'all 0.2s'
  },
  centerFeed: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  sectionTitle: {
    fontSize: '18px',
    fontWeight: 700,
    color: '#0f172a',
    margin: 0
  },
  btnCreatePost: {
    padding: '10px 18px',
    fontSize: '14px',
    fontWeight: 700,
    color: 'white',
    backgroundColor: '#059669',
    border: 'none',
    borderRadius: '12px',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(5, 150, 105, 0.15)'
  },
  postCard: {
    backgroundColor: 'white',
    padding: '24px',
    borderRadius: '20px',
    border: '1px solid #e2e8f0',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.02)',
    cursor: 'pointer',
    textAlign: 'left',
    transition: 'all 0.2s'
  },
  postMeta: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '12px',
    marginBottom: '12px'
  },
  tagGreen: {
    backgroundColor: '#ecfdf5',
    color: '#047857',
    fontWeight: 'bold',
    padding: '4px 10px',
    borderRadius: '6px'
  },
  tagBlue: {
    backgroundColor: '#eff6ff',
    color: '#1d4ed8',
    fontWeight: 'bold',
    padding: '4px 10px',
    borderRadius: '6px'
  },
  tagOrange: {
    backgroundColor: '#fff7ed',
    color: '#c2410c',
    fontWeight: 'bold',
    padding: '4px 10px',
    borderRadius: '6px'
  },
  postTitle: {
    fontSize: '18px',
    fontWeight: 700,
    color: '#0f172a',
    margin: '0 0 10px 0'
  },
  postExcerpt: {
    fontSize: '14px',
    color: '#64748b',
    lineHeight: 1.6,
    margin: '0 0 16px 0'
  },
  cardFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '16px',
    borderTop: '1px solid #f1f5f9'
  },
  btnVote: {
    backgroundColor: '#f1f5f9',
    border: 'none',
    color: '#475569',
    padding: '6px 12px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '13px',
    fontWeight: 600,
    transition: 'all 0.2s'
  },
  rightSidebar: {
    display: 'flex',
    flexDirection: 'column'
  },
  sideCard: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '20px',
    border: '1px solid #e2e8f0',
    textAlign: 'left'
  },
  miniDocCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '8px 0',
    borderBottom: '1px solid #f1f5f9'
  },
  statRow: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '13px',
    padding: '8px 0',
    borderBottom: '1px dashed #f1f5f9'
  },
  detailContainer: {
    backgroundColor: 'white',
    padding: '32px',
    borderRadius: '24px',
    border: '1px solid #e2e8f0',
    textAlign: 'left'
  },
  btnBack: {
    background: 'none',
    border: 'none',
    color: '#059669',
    fontWeight: 700,
    fontSize: '14px',
    cursor: 'pointer',
    marginBottom: '24px',
    padding: 0
  },
  fullArticle: {
    paddingBottom: '32px',
    borderBottom: '1px solid #e2e8f0'
  },
  detailTitle: {
    fontSize: '28px',
    fontWeight: 800,
    color: '#0f172a',
    margin: '16px 0 20px 0',
    lineHeight: 1.3
  },
  detailContent: {
    fontSize: '16px',
    color: '#334155',
    lineHeight: 1.8,
    margin: '0 0 24px 0',
    whiteSpace: 'pre-wrap'
  },
  actionRow: {
    display: 'flex',
    gap: '12px'
  },
  commentSection: {
    marginTop: '32px'
  },
  commentHeader: {
    fontSize: '18px',
    fontWeight: 700,
    color: '#0f172a',
    margin: '0 0 20px 0'
  },
  commentForm: {
    backgroundColor: '#f8fafc',
    padding: '20px',
    borderRadius: '16px',
    border: '1px solid #e2e8f0'
  },
  commentTextarea: {
    width: '100%',
    padding: '12px 16px',
    backgroundColor: 'white',
    border: '1.5px solid #e2e8f0',
    borderRadius: '12px',
    fontSize: '14px',
    outline: 'none',
    resize: 'vertical',
    boxSizing: 'border-box'
  },
  commentCard: {
    backgroundColor: '#f8fafc',
    padding: '16px',
    borderRadius: '16px',
    border: '1px solid #f1f5f9',
    textAlign: 'left'
  },
  commentMeta: {
    display: 'flex',
    gap: '8px',
    fontSize: '12px',
    marginBottom: '8px'
  },
  commentAuthor: {
    fontWeight: 'bold',
    color: '#1e293b'
  },
  commentContent: {
    fontSize: '14px',
    color: '#334155',
    margin: 0,
    lineHeight: 1.5
  },
  doctorsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '20px'
  },
  doctorCard: {
    backgroundColor: 'white',
    padding: '24px',
    borderRadius: '20px',
    border: '1px solid #e2e8f0',
    textAlign: 'center',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.02)'
  },
  docAvatar: {
    fontSize: '48px',
    marginBottom: '12px'
  },
  docName: {
    fontSize: '16px',
    fontWeight: 700,
    color: '#0f172a',
    margin: '0 0 4px 0'
  },
  docSpecialty: {
    fontSize: '13px',
    fontWeight: 600,
    color: '#059669',
    marginBottom: '4px'
  },
  docHospital: {
    fontSize: '12px',
    color: '#64748b',
    marginBottom: '12px'
  },
  docRating: {
    fontSize: '12px',
    fontWeight: 600,
    color: '#eab308',
    marginBottom: '16px'
  },
  btnConsult: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#ecfdf5',
    color: '#047857',
    border: 'none',
    borderRadius: '10px',
    fontWeight: 700,
    fontSize: '13px',
    cursor: 'pointer',
    transition: 'all 0.2s'
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(15, 23, 42, 0.4)',
    backdropFilter: 'blur(4px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999
  },
  modalContent: {
    backgroundColor: 'white',
    padding: '32px',
    borderRadius: '24px',
    width: '100%',
    maxWidth: '560px',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    boxSizing: 'border-box'
  },
  btnCloseModal: {
    fontSize: '24px',
    color: '#94a3b8',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '8px'
  },
  authMain: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px 16px',
    position: 'relative',
    overflow: 'hidden',
    background: 'linear-gradient(135deg, rgba(5, 150, 105, 0.04) 0%, rgba(59, 130, 246, 0.04) 100%)'
  },
  bgCellTopLeft: { position: 'absolute', top: '10%', left: '8%', zIndex: 0, pointerEvents: 'none' },
  bgDnaRight: { position: 'absolute', bottom: '10%', right: '8%', zIndex: 0, pointerEvents: 'none' },
  authHeader: {
    textAlign: 'center',
    marginBottom: '24px',
    zIndex: 1
  },
  authTitle: {
    fontSize: '32px',
    fontWeight: 800,
    color: '#0f172a',
    margin: '0 0 8px 0',
    letterSpacing: '-0.5px'
  },
  authSub: {
    fontSize: '14px',
    color: '#64748b',
    margin: 0
  },
  singleCardWrapper: {
    width: '100%',
    maxWidth: '440px',
    zIndex: 1,
    display: 'flex',
    justifyContent: 'center'
  },
  cardGreen: {
    backgroundColor: 'white',
    padding: '36px',
    borderRadius: '24px',
    border: '1px solid rgba(5, 150, 105, 0.12)',
    boxShadow: '0 20px 25px -5px rgba(5, 150, 105, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)',
    width: '100%',
    boxSizing: 'border-box'
  },
  cardBlue: {
    backgroundColor: 'white',
    padding: '36px',
    borderRadius: '24px',
    border: '1px solid rgba(59, 130, 246, 0.12)',
    boxShadow: '0 20px 25px -5px rgba(59, 130, 246, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)',
    width: '100%',
    boxSizing: 'border-box'
  },
  cardHeader: {
    fontSize: '22px',
    fontWeight: 700,
    color: '#0f172a',
    margin: '0 0 24px 0',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  indicatorGreen: {
    width: '6px',
    height: '20px',
    backgroundColor: '#059669',
    borderRadius: '9999px'
  },
  indicatorBlue: {
    width: '6px',
    height: '20px',
    backgroundColor: '#3b82f6',
    borderRadius: '9999px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px'
  },
  label: {
    fontSize: '12px',
    fontWeight: 600,
    color: '#64748b',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    textAlign: 'left'
  },
  input: {
    padding: '12px 16px',
    backgroundColor: '#f8fafc',
    border: '1.5px solid #e2e8f0',
    borderRadius: '12px',
    fontSize: '14px',
    outline: 'none',
    transition: 'all 0.2s',
    width: '100%',
    boxSizing: 'border-box'
  },
  inputWithIcon: {
    padding: '12px 40px 12px 16px',
    backgroundColor: '#f8fafc',
    border: '1.5px solid #e2e8f0',
    borderRadius: '12px',
    fontSize: '14px',
    outline: 'none',
    transition: 'all 0.2s',
    width: '100%',
    boxSizing: 'border-box'
  },
  eyeButton: {
    position: 'absolute',
    right: '12px',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    padding: 0
  },
  select: {
    padding: '12px 16px',
    backgroundColor: '#f8fafc',
    border: '1.5px solid #e2e8f0',
    borderRadius: '12px',
    fontSize: '14px',
    outline: 'none',
    cursor: 'pointer',
    width: '100%',
    boxSizing: 'border-box'
  },
  forgotPassword: {
    fontSize: '12px',
    fontWeight: 600,
    color: '#3b82f6',
    textDecoration: 'none'
  },
  btnSubmitGreen: {
    backgroundColor: '#059669',
    color: 'white',
    padding: '14px',
    borderRadius: '12px',
    border: 'none',
    fontWeight: 700,
    fontSize: '15px',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(5, 150, 105, 0.15)',
    marginTop: '8px',
    transition: 'all 0.2s'
  },
  btnSubmitBlue: {
    backgroundColor: '#3b82f6',
    color: 'white',
    padding: '14px',
    borderRadius: '12px',
    border: 'none',
    fontWeight: 700,
    fontSize: '15px',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(59, 130, 246, 0.15)',
    marginTop: '8px',
    transition: 'all 0.2s'
  },
  togglePrompt: {
    marginTop: '24px',
    textAlign: 'center',
    fontSize: '13px'
  },
  toggleLink: {
    background: 'none',
    border: 'none',
    fontWeight: 700,
    cursor: 'pointer',
    padding: 0,
    textDecoration: 'underline'
  },
  alertError: {
    backgroundColor: '#fef2f2',
    border: '1px solid #fee2e2',
    color: '#b91c1c',
    padding: '12px 16px',
    borderRadius: '12px',
    marginBottom: '16px',
    fontSize: '13px',
    textAlign: 'left',
    display: 'flex',
    alignItems: 'flex-start'
  },
  alertSuccess: {
    backgroundColor: '#f0fdf4',
    border: '1px solid #dcfce7',
    color: '#15803d',
    padding: '12px 16px',
    borderRadius: '12px',
    marginBottom: '16px',
    fontSize: '13px',
    textAlign: 'left',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  authFooter: {
    marginTop: '40px',
    textAlign: 'center',
    fontSize: '12px',
    color: '#94a3b8',
    zIndex: 1
  },
  footerLink: {
    color: '#94a3b8',
    textDecoration: 'none',
    transition: 'color 0.2s'
  }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);