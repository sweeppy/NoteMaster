

using Backend.Data;

namespace Backend.Repositories.MainRepository
{
    public class Repository: IRepository
    {
        private IUserRepository _userRepository;
        private ICollectionRepository _collectionRepository;
        private INoteRepository _noteRepository;
        private readonly ApplicationDbContext _db;

        public Repository(ApplicationDbContext db)
        {
            _db = db;
        }

        public IUserRepository UserRepository => _userRepository ??= new UserRepository(_db);
        public ICollectionRepository CollectionRepository => _collectionRepository ??= new CollectionRepository(_db);
        public INoteRepository NoteRepository => _noteRepository ??= new NoteRepository(_db);
    }
}