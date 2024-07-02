using Backend.Models;
namespace Backend.Repositories
{
    public interface IUserRepository
    {
        public Task<User> GetByIdAsync(Guid id);

        public Task<User> GetByEmailAsync(string email);

        public Task AddUserToDbAsync(User user);
    }
}