using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models
{
    public class User
    {
        public User()
        {
            
        }
        public User(string Email,string Username, string Password)
        {
            this.Email = Email;
            this.Username = Username;
            this.Password = Password;
            this.Notes = new List<Note>();
        }

        public Guid Id { get; set; }
        public string Email { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }

        public ICollection<Note> Notes{ get; set; }
    }
}