using Backend.Dto;
using Backend.Models;

namespace Backend.Repositories
{
    public interface INoteRepository
    {
        public Task<Note> GetNoteByIdAsync(Guid id);

        public Task CreateNoteAsync(Collection collection, CreateNoteRequest details);
    }
}