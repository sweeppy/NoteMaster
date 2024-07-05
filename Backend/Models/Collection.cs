namespace Backend.Models
{
    public class Collection
    {
        public Guid Id { get; set; }
        public string CollectionName { get; set; } 
        public ICollection<Note> Notes { get; set; }
        public Guid UserId { get; set; }
        public User User{ get; set; }
    }
}