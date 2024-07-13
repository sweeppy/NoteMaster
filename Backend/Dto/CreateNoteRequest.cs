

namespace Backend.Dto
{
    public class CreateNoteRequest
    {
        public string Title { get; set; }
        public string Description { get; set; }

        public Guid collectionId { get; set; }
    }
}