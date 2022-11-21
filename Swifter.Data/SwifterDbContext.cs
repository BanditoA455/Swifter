using Microsoft.EntityFrameworkCore;
using Swifter.Data.Models;

namespace Swifter.Data
{
    public class SwifterDbContext : DbContext
    {
        public DbSet<GameMode> GameModes { get; set; }

        public SwifterDbContext(DbContextOptions<SwifterDbContext> options) : base(options)
        {

        }

    }
}
