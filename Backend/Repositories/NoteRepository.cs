
using Backend.Data;
using Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend.Repositories
{
    public class NoteRepository : INoteRepository
    {
        private readonly ApplicationDbContext _db;

        public NoteRepository(ApplicationDbContext db)
        {
            _db = db;
        }

        public async Task<Note> GetNoteByIdAsync(Guid id)
        {
            return await _db.Notes.FirstOrDefaultAsync(n => n.Id == id);
        }
    }
}