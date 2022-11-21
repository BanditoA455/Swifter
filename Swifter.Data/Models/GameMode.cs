using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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
        [Required]
        public int? Height { get; set; }
        [Required]
        public int? Width { get; set; }
        [Required]
        public string Type { get; set; }
        [Required]
        public int? Duration { get; set; }
    }
}
