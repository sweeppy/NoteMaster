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
        private readonly IRepository _repository;

        private readonly ILogger<NotesActionsController> _logger;

        public NotesActionsController(IRepository repository, ILogger<NotesActionsController> logger)
        {
            _repository = repository;
            _logger = logger;
        }
        [HttpPost("getAll")]
        [Authorize]
        public async Task<IActionResult> GetAllNotes([FromBody]RequestWithCollectionId request)
        {
            try
            {
                var collection = await _repository.CollectionRepository
                .getCollectionByIdAsync(request.CollectoinId);

                if (collection == null) return NotFound("Collection not found.");

                var notes = _repository.NoteRepository.getAllNotes(collection);

                if (notes == null) return NotFound("No notes in this collection.");
                return Ok(notes);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return BadRequest("Something went wrong.");
            }
        }
        [HttpPost("create")]
        [Authorize]
        public async Task<IActionResult> CreateNote ([FromBody] CreateNoteRequest request)
        {
            try
            {
                Collection collection = await _repository.CollectionRepository
                .getCollectionByIdAsync(request.collectionId);
                
                if (collection == null) return BadRequest("Selected collection was not found.");

                await _repository.NoteRepository.CreateNoteAsync(collection, request);

                return Ok($"{request.Title} was created!");
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return BadRequest("Something went wrong.");
            }
        }
        [HttpPost("update")]
        [Authorize]
        public async Task<IActionResult> UpdateNote([FromBody] UpdateNoteRequest request)
        {
            try
            {
                await _repository.NoteRepository.UpdateNoteAsync(request);
                return Ok($"{request.Title} was updated.");
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return BadRequest("Something went wrong.");
            }

        }
    }
}