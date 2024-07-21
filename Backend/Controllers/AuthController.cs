using Backend.Dto;
using Backend.Jwt;
using Backend.Models;
using Backend.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly IJwtService _jwtService;

        private readonly IUserRepository _userRepository;

        private readonly ILogger<AuthController> _logger;

        public AuthController(IJwtService jwtService, IUserRepository userRepository, ILogger<AuthController> logger)
        {
            _jwtService = jwtService;
            _userRepository = userRepository;
            _logger = logger;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginModel model)
        {
            if (model.Email == "" || model.Password == "") return BadRequest("Empty data");

            try
            {
                User user = await _userRepository.GetByEmailAsync(model.Email);

                if (user == null) return BadRequest("Invalid email.");

                if (!BCrypt.Net.BCrypt.Verify(model.Password, user.Password))
                {
                    return BadRequest("Invalid password.");
                }

                var token = _jwtService.GenerateToken(user.Email);

                return Ok(new {token});
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return BadRequest("Something went wrong.");
            }
        }
        
        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterModel model)
        {
            // null dto
            if (model == null) return BadRequest("Empty data");
            // user already registered
            User checkUser = await _userRepository.GetByEmailAsync(model.Email);
            if(checkUser != null) return BadRequest("This user already registered");

            var hashedPassword = BCrypt.Net.BCrypt.HashPassword(model.Password);
            try
            {
                User newUser = new User()
                {
                    Email = model.Email,
                    Password = hashedPassword,
                    Username = model.Username,
                    Collections = []
                };

                await _userRepository.AddUserToDbAsync(newUser);

                var token = _jwtService.GenerateToken(newUser.Email);

                return Ok(new { token });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return BadRequest("Something went wrong.");
            }
        }
    }
}