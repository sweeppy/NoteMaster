using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Data;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly ApplicationDbContext _applicationDbContext;
        public AuthController(ApplicationDbContext applicationDbContext = null)
        {
            _applicationDbContext = applicationDbContext;
        }

        [HttpPost]
        public async Task<IActionResult> Login()
        {
            return Ok();
        }
        public async Task<IActionResult> Register()
        {
            return Ok();
        }
    }
}