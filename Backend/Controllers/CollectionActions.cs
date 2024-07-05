using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Backend.Models;
using Backend.Repositories;

namespace Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CollectionActionsController : ControllerBase
    {
        private readonly IUserRepository _userRepository;
        private readonly ICollectionRepository _collectionRepository;

        public CollectionActionsController(IUserRepository userRepository, ICollectionRepository collectionRepository)
        {
            _userRepository = userRepository;
            _collectionRepository = collectionRepository;
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

            User user = await _userRepository.GetByEmailAsync(email);

            if (user == null)
            {
                return BadRequest("User not found.");
            }

            try
            {
                await _collectionRepository.CreateCollectionAsync(user, request.CollectionName);

                return Ok("Collection created successfully!");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }
    }
}
