namespace Domain
{
    public class Note
    {
        public Guid Id { get; set; }
        public Guid ToDoId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Category { get; set; }
        public DateTime DatePosted { get; set; }
        public DateTime LastUpdated { get; set; }
        public string Status { get; set; }
    }
}