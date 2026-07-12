using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace HealthForum.Models
{
    // 1. Chuyên mục sức khỏe (Ví dụ: Nhi khoa, Tim mạch, Dinh dưỡng...)
    public class Category
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "Tên chuyên mục không được để trống")]
        [StringLength(100)]
        public string Name { get; set; } = string.Empty;

        public string? Description { get; set; }

        public ICollection<Post> Posts { get; set; } = new List<Post>();
    }

    // 2. Bài đăng hoặc Câu hỏi của người dùng
    public class Post
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "Tiêu đề không được để trống")]
        [StringLength(250)]
        public string Title { get; set; } = string.Empty;

        [Required(ErrorMessage = "Nội dung không được để trống")]
        public string Content { get; set; } = string.Empty;

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        [Required]
        public string UserId { get; set; } = string.Empty; // ID người đăng

        // Khóa ngoại liên kết tới Chuyên mục
        public int CategoryId { get; set; }
        public Category? Category { get; set; }

        public ICollection<Comment> Comments { get; set; } = new List<Comment>();
    }

    // 3. Bình luận / Câu trả lời từ cộng đồng hoặc Bác sĩ
    public class Comment
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "Nội dung bình luận không được trống")]
        public string Content { get; set; } = string.Empty;

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        // Cực kỳ quan trọng cho web sức khỏe: Đánh dấu câu trả lời từ Bác sĩ/Chuyên gia
        public bool IsExpertAnswer { get; set; } = false;

        [Required]
        public string UserId { get; set; } = string.Empty;

        // Khóa ngoại liên kết tới Bài viết
        public int PostId { get; set; }
        public Post? Post { get; set; }
    }
}