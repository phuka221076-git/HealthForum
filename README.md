HealthForum - Hệ thống Diễn đàn Sức Khỏe Chuyên gia & Xác thực Chứng chỉ
Đây là sản phẩm đồ án tốt nghiệp thuộc Khoa Kỹ thuật & Công nghệ - Đại học Trà Vinh (TVU). Hệ thống được phát triển nhằm mục đích tạo ra một diễn đàn sức khỏe chuyên môn uy tín, nơi các chuyên gia được xác thực năng lực thông qua quy trình kiểm duyệt chứng chỉ tự động.

🚀 Công nghệ sử dụng
Hệ thống được xây dựng trên kiến trúc phân tách (Client-Server), đảm bảo tính module hóa và dễ dàng mở rộng.

Backend (API Server)
Framework: ASP.NET Core Web API

Database: SQL Server / MySQL (EF Core)

Authentication: JWT (JSON Web Token)

Cấu trúc: RESTful API

Frontend (Client)
Framework: ReactJS

State Management: React Hooks / Context API

Styling: CSS Modules / Styled Components

Communication: Axios

✨ Các tính năng chính
Hệ thống xác thực người dùng: Đăng ký, đăng nhập an toàn với JWT.

Quản lý chứng chỉ chuyên gia: Người dùng tải lên minh chứng năng lực; Admin quản lý, duyệt hoặc từ chối thông qua giao diện quản trị.

Diễn đàn thảo luận: Tạo bài viết, thảo luận chuyên môn.

Phân quyền chặt chẽ: Kiểm soát quyền truy cập dựa trên vai trò (Role-based Authorization).

🛠 Hướng dẫn cài đặt
1. Cấu hình Backend (ASP.NET Core)
Mở solution trong Visual Studio hoặc VS Code.

Cấu hình chuỗi kết nối database trong appsettings.json.

Cài đặt các gói NuGet cần thiết.

Chạy lệnh Update-Database để khởi tạo dữ liệu.

Khởi chạy project (Port mặc định: http://localhost:5243).

2. Cấu hình Frontend (ReactJS)
Truy cập vào thư mục client (hoặc tên thư mục frontend của bạn).

Cài đặt dependencies:
npm install

3. Tạo file .env và cấu hình biến môi trường:
REACT_APP_API_URL=http://localhost:5173/api

4. Khởi chạy dự án:
   npm start

📈 Hướng phát triển (Future Roadmap)
Trong giai đoạn tới, dự án sẽ tập trung mở rộng các tính năng:

Real-time Notification: Tích hợp SignalR để thông báo tức thì các trạng thái duyệt chứng chỉ.

AI Chatbot: Tích hợp AI hỗ trợ tư vấn sức khỏe sơ bộ, giúp tăng tương tác trên diễn đàn.

Mobile App: Phát triển ứng dụng di động bằng React Native, tái sử dụng API hiện có.

🤝 Đóng góp & Liên hệ
Tác giả: Anh Phú

Trường: Đại học Trà Vinh (TVU)

Email: lienxokieu@gmail.com

Nếu bạn thấy dự án hữu ích, hãy cho mình một ⭐️ nhé!
