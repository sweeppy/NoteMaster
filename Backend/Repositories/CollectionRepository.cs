using Backend.Data;
using Backend.Models;

namespace Backend.Repositories
{
    public class CollectionRepository : ICollectionRepository
    {
        private readonly ApplicationDbContext _db;

        public CollectionRepository(ApplicationDbContext db)
        {
            _db = db;
        }

        public async Task CreateCollectionAsync(User user, string collectionName)
        {
            Collection collection = new Collection()
            {
                CollectionName = collectionName,
                User = user,
                UserId = user.Id,
                Notes = new List<Note>()
            };
            user.Collections.Add(collection);
            await _db.Collections.AddAsync(collection);
            await _db.SaveChangesAsync();
        }

        public Task<List<Collection>> getAllCollectionsAsync()
        {
            throw new NotImplementedException();
        }
    }
}