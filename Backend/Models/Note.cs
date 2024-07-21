namespace Backend.Models
{
    public class Note
    {

        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; } 
        public DateTime UpdatedAt { get; set;}

        public Guid CollectionId { get; set; }
        public Collection Collection { get; set; }
    }
}