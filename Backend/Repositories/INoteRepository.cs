
using Backend.Models;

namespace Backend.Repositories
{
    public interface INoteRepository
    {
        public Task<Note> GetNoteByIdAsync(Guid id);
    }
}