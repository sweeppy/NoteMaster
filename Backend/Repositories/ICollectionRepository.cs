using Backend.Models;

namespace Backend.Repositories
{
    public interface ICollectionRepository
    {
        public Task CreateCollectionAsync(User user,  string collectionName);

        public Task<List<Collection>> getAllCollectionsAsync();
    }
}