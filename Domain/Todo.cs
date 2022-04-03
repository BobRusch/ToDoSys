namespace Domain
{
    public class Todo
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Category { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime DateDue { get; set; }
        public DateTime LastUpdated { get; set; }
        public string Status { get; set; }
        public string Priority { get; set; }
        public bool Parent { get; set; }
        public Guid? SubToDoId { get; set; }
    }
}