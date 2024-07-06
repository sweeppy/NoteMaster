

namespace Backend.Repositories.MainRepository
{
    public interface IRepository
    {
        IUserRepository UserRepository { get; }
        ICollectionRepository CollectionRepository { get; }
        INoteRepository NoteRepository { get; }
    }
}