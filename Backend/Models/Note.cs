namespace Backend.Models
{
    public class Note
    {
        public Note()
        {
            
        }
        public Note(string Title, string Description, User User)
        {
            this.Title = Title;
            this.Description = Description;
            this.CreatedDate = DateTime.UtcNow;
            this.User = User;
        }
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; } 
        public DateTime CreatedDate { get; set;}

        public Guid UserId { get; set; }
        public User User { get; set; }
    }
}