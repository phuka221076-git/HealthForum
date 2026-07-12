using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HealthForum.Data;
using HealthForum.Models;

namespace HealthForum.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommentsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public CommentsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // 1. ĐĂNG BÌNH LUẬN / CÂU TRẢ LỜI MỚI (POST: api/comments)
        [HttpPost]
        public async Task<ActionResult<Comment>> CreateComment([FromBody] Comment comment)
        {
            // Kiểm tra xem bài viết có tồn tại thực tế không trước khi cho bình luận
            var postExists = await _context.Posts.AnyAsync(p => p.Id == comment.PostId);
            if (!postExists)
            {
                return BadRequest(new { message = "Bài viết hoặc câu hỏi không tồn tại." });
            }

            comment.CreatedAt = DateTime.UtcNow;

            // Xử lý logic đặc trưng y tế: Nếu tài khoản là Bác sĩ thì tự động đánh dấu Expert
            // Ở phiên bản cơ bản này, ta tạm thời để Client truyền lên hoặc xử lý thủ công

            _context.Comments.Add(comment);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Đăng bình luận thành công!", data = comment });
        }

        // 2. XÓA BÌNH LUẬN (DELETE: api/comments/{id})
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteComment(int id)
        {
            var comment = await _context.Comments.FindAsync(id);
            if (comment == null)
            {
                return NotFound(new { message = "Không tìm thấy bình luận cần xóa." });
            }

            _context.Comments.Remove(comment);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Đã xóa bình luận thành công." });
        }
    }
}