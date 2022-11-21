using System.ComponentModel.DataAnnotations;

namespace Swifter.Data.Models
{
    public class GameMode
    {
        [Key]
        [Required]
        public int Id { get; set; }
        [Required]
        public string DisplayName { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public bool HasRules { get; set; }
        public int? Height { get; set; }
        public int? Width { get; set; }
        public string Type { get; set; }
        public int? Duration { get; set; }
    }
}
