using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Backend.Models;
using Backend.Repositories;
using Backend.Repositories.MainRepository;

namespace Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CollectionActionsController : ControllerBase
    {
        private readonly IRepository _repository;
        private readonly ILogger<CollectionActionsController> _logger;
        public CollectionActionsController(IRepository repository, ILogger<CollectionActionsController> logger)
        {
            _repository = repository;
            _logger = logger;
        }

        [HttpPost("add")]
        [Authorize]
        public async Task<IActionResult> AddCollection([FromBody] AddCollectionRequest request)
        {
            if (request.CollectionName == "") 
            {
                return BadRequest("Empty data.");
            }

            var email = User.FindFirst(ClaimTypes.Email)?.Value;

            User user = await _repository.UserRepository.GetByEmailAsync(email);

            if (user == null)
            {
                return BadRequest("User not found.");
            }

            try
            {
                await _repository.CollectionRepository.CreateCollectionAsync(user, request.CollectionName);

                return Ok("Collection created successfully!");
            }
            catch (Exception ex)
            {
                _logger.LogError($"Exeption in the <CollectionActionsController;AddCollection>. Message: ${ex.Message}");
                return StatusCode(500, "Something went wrong.");
            }
        }
        [HttpGet("getAll")]
        [Authorize]
        public async Task<IActionResult> GetAllCollections()
        {
            var email = User.FindFirst(ClaimTypes.Email)?.Value;
            if (email == null) return BadRequest("You need to login again.");

            User user = await _repository.UserRepository.GetByEmailAsync(email);

            return Ok(user.Collections);
        }
    }
}
