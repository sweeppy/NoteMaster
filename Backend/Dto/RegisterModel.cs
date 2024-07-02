using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Dto
{
    public class RegisterModel
    {
        public string Email { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
    }
}