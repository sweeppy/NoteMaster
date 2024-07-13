using Backend.Dto;
using Backend.Models;
using Backend.Repositories.MainRepository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Identity.Client;

namespace Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class NotesActionController : ControllerBase
    {
        IRepository _repository;

        public NotesActionController(IRepository repository)
        {
            _repository = repository;
        }

        public async Task<IActionResult> CreateNote ([FromBody] CreateNoteRequest request)
        {
            Collection collection = await _repository.CollectionRepository
            .getCollectionByIdAsync(request.collectionId);
            if (collection == null) return BadRequest("Selected collection was not found.");
            await _repository.NoteRepository.CreateNoteAsync(collection, request);
            return Ok("New note was created!");
        }
    }
}