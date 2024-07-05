using Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend.Data
{
    public class ApplicationDbContext: DbContext
    {
        private readonly IConfiguration _configuration;

        public ApplicationDbContext(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_configuration.GetConnectionString("DefaultConnection"));
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<User>()
            .HasMany(u => u.Collections)
            .WithOne(c => c.User)
            .HasForeignKey(n => n.UserId);

            modelBuilder.Entity<Collection>()
            .HasMany(c => c.Notes)
            .WithOne(n => n.Collection)
            .HasForeignKey(n => n.CollectionId);
        }

        public DbSet<User> Users { get; set; }

        public DbSet<Note> Notes{ get; set; }
        public DbSet<Collection> Collections{ get; set; }
    }
}