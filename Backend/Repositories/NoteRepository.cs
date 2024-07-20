
using Backend.Data;
using Backend.Dto;
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

        public async Task CreateNoteAsync(Collection collection, CreateNoteRequest details)
        {
            Note note = new Note
            {
                Title = details.Title,
                Description = details.Description,
                CreatedDate = DateTime.Now,
                CollectionId = collection.Id,
                Collection = collection,
            };
            collection.Notes.Add(note);
            await _db.Notes.AddAsync(note);
            await _db.SaveChangesAsync();
        }

        public async Task<Note> GetNoteByIdAsync(Guid id)
        {
            return await _db.Notes.FirstOrDefaultAsync(n => n.Id == id);
        }

        public List<Note> getAllNotes(Collection colllection)
        {
            if (colllection.Notes == null) return null;
            return colllection.Notes.ToList();
        }
    }
}