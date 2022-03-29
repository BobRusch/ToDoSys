using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : DbContext
    {
        private readonly DbContextOptions _options;

        public DataContext(DbContextOptions options) : base(options)
        {
            _options = options;
        }

        public DbSet<Todo> Todos { get; set; }
        public DbSet<Note> Notes { get; set; }
        public DbSet<Status> Statuses { get; set; }
        public DbSet<Category> Categories { get; set; }
    }
}