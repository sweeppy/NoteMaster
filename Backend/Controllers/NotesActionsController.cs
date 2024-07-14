using System.Security.Claims;
using Backend.Dto;
using Backend.Models;
using Backend.Repositories.MainRepository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class NotesActionsController : ControllerBase
    {
        IRepository _repository;

        public NotesActionsController(IRepository repository)
        {
            _repository = repository;
        }
        [HttpPost("getAll")]
        public async Task<IActionResult> GetAllNotes([FromBody] Guid collectionId)
        {
            var collection = await _repository.CollectionRepository
            .getCollectionByIdAsync(collectionId);

            if (collection == null) return NotFound("Collection not found.");

            var notes = _repository.NoteRepository.getAllNotes(collection);
            return Ok(notes);
        }
        [HttpPost("create")]
        [Authorize]
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