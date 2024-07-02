using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models
{
    public class Note
    {
        public Note(string Title, string Description)
        {
            this.Title = Title;
            this.Description = Description;
            this.CreatedDate = DateTime.Now;
        }
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; } 
        public DateTime CreatedDate { get; set;}

        public Guid UserId { get; set; }
        public User User { get; set; }
    }
}