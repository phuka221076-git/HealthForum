using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HealthForum.Data;
using HealthForum.Models;

namespace HealthForum.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public PostsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // 1. LẤY TẤT CẢ BÀI VIẾT (GET: api/posts)
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Post>>> GetPosts()
        {
            return await _context.Posts
                .Include(p => p.Category)
                .OrderByDescending(p => p.CreatedAt)
                .ToListAsync();
        }

        // 2. XEM CHI TIẾT 1 BÀI VIẾT VÀ CÁC BÌNH LUẬN (GET: api/posts/{id})
        [HttpGet("{id}")]
        public async Task<ActionResult<Post>> GetPost(int id)
        {
            var post = await _context.Posts
                .Include(p => p.Category)
                .Include(p => p.Comments)
                .FirstOrDefaultAsync(p => p.Id == id);

            if (post == null)
            {
                return NotFound(new { message = "Không tìm thấy bài viết yêu cầu." });
            }

            return post;
        }

        // 3. TẠO BÀI VIẾT / ĐĂNG CÂU HỎI MỚI (POST: api/posts)
        [HttpPost]
        public async Task<ActionResult<Post>> CreatePost([FromBody] Post post)
        {
            // Kiểm tra xem chuyên mục có tồn tại thực tế không
            var categoryExists = await _context.Categories.AnyAsync(c => c.Id == post.CategoryId);
            if (!categoryExists)
            {
                return BadRequest(new { message = "Chuyên mục sức khỏe chọn lựa không hợp lệ." });
            }

            post.CreatedAt = DateTime.UtcNow;
            _context.Posts.Add(post);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetPost), new { id = post.Id }, post);
        }
    }
}