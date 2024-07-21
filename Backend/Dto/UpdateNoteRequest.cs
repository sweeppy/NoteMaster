
namespace Backend.Dto
{
    public class UpdateNoteRequest
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        
    }
}