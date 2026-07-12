using HealthForum.Models;
using Microsoft.EntityFrameworkCore;

namespace HealthForum.Data
{
    public static class DbSeeder
    {
        public static void Seed(WebApplication app)
        {
            using (var scope = app.Services.CreateScope())
            {
                var context = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();

                // 1. Tự động chạy Migration nếu database chưa được cập nhật hoàn toàn
                context.Database.Migrate();

                // 2. Đổ dữ liệu mẫu cho bảng Chuyên mục (Categories) nếu bảng đang trống
                if (!context.Categories.Any())
                {
                    var categories = new List<Category>
                    {
                        new Category { Name = "Nhi khoa", Description = "Các vấn đề về sức khỏe, dinh dưỡng và bệnh lý ở trẻ em." },
                        new Category { Name = "Tim mạch", Description = "Tư vấn phòng ngừa, điều trị và chăm sóc sức khỏe hệ tim mạch." },
                        new Category { Name = "Dinh dưỡng & Giảm cân", Description = "Chế độ ăn uống lành mạnh, thực đơn khoa học cho mọi lứa tuổi." },
                        new Category { Name = "Sức khỏe tinh thần", Description = "Giải tỏa căng thẳng, trầm cảm, tư vấn tâm lý đời sống." }
                    };

                    context.Categories.AddRange(categories);
                    context.SaveChanges(); // Lưu vào DB để lấy Id của Category làm khóa ngoại cho bài viết
                }

                // 3. Đổ dữ liệu mẫu cho bảng Bài viết (Posts) nếu bảng đang trống
                if (!context.Posts.Any())
                {
                    // Lấy ra Chuyên mục Nhi khoa và Tim mạch vừa tạo ở trên
                    var nhiKhoaCategory = context.Categories.FirstOrDefault(c => c.Name == "Nhi khoa");
                    var timMachCategory = context.Categories.FirstOrDefault(c => c.Name == "Tim mạch");

                    if (nhiKhoaCategory != null && timMachCategory != null)
                    {
                        var posts = new List<Post>
                        {
                            new Post
                            {
                                Title = "Làm sao để xử lý khi trẻ nhỏ bị sốt mọc răng?",
                                Content = "Bé nhà em được 8 tháng tuổi, đang có dấu hiệu sưng nướu và sốt nhẹ khoảng 38 độ. Xin chuyên gia tư vấn cách hạ sốt an toàn cho bé tại nhà ạ?",
                                CreatedAt = DateTime.UtcNow.AddHours(-5), // Đăng cách đây 5 tiếng
                                UserId = "user_01",
                                CategoryId = nhiKhoaCategory.Id
                            },
                            new Post
                            {
                                Title = "Các dấu hiệu cảnh báo sớm bệnh suy tim bạn không nên chủ quan",
                                Content = "Đau thắt ngực khi gắng sức, hụt hơi khi nằm ngửa, sưng phù chân vào buổi chiều... là những biểu hiện cho thấy hệ tim mạch của bạn đang gặp nguy hiểm.",
                                CreatedAt = DateTime.UtcNow.AddDays(-1), // Đăng cách đây 1 ngày
                                UserId = "doctor_an",
                                CategoryId = timMachCategory.Id
                            }
                        };

                        context.Posts.AddRange(posts);
                        context.SaveChanges();
                    }
                }
            }
        }
    }
}