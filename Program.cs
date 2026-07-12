using Microsoft.EntityFrameworkCore;
using HealthForum.Data;

var builder = WebApplication.CreateBuilder(args);

// 1. Thêm các dịch vụ cơ bản
builder.Services.AddControllers();

// 2. Đăng ký DbContext kết nối SQL Server
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

var app = builder.Build();

// 3. Cấu hình Pipeline xử lý HTTP
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

// === CHÈN DÒNG NÀY VÀO ĐÂY (NGAY TRƯỚC APP.RUN) ===
DbSeeder.Seed(app);
// ==================================================

app.Run();