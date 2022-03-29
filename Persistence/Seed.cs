using Domain;


namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.Todos.Any()) return;

            var todos = new List<Todo>
            {
                new Todo
                {
                    Title = "Past Todo 1",
                    DateCreated = DateTime.Now.AddMonths(-2),
                    DateDue = DateTime.Now.AddMonths(+1),
                    LastUpdated = DateTime.Now.AddDays(-11),
                    Description = "Todo 2 months ago",
                    Category = "Infrastructure",
                    Status = "On Hold",
                    Parent = true
                },
                new Todo
                {
                    Title = "Past Todo 2",
                    DateCreated = DateTime.Now.AddMonths(-2),
                    DateDue = DateTime.Now.AddMonths(+1),
                    LastUpdated = DateTime.Now.AddDays(-14),
                    Description = "Todo 1 month ago",
                    Category = "UI",
                    Status = "Under Review",
                    Parent = true
                },
                new Todo
                {
                    Title = "Future Todo 1",
                    DateCreated = DateTime.Now,
                    DateDue = DateTime.Now.AddMonths(+6),
                    LastUpdated = DateTime.Now,
                    Description = "Todo 6 month in future",
                    Category = "API",
                    Status = "Created",
                    Parent = true
                },
                                new Todo
                {
                    Title = "Past Todo 3",
                    DateCreated = DateTime.Now.AddMonths(-2),
                    DateDue = DateTime.Now.AddMonths(+1),
                    LastUpdated = DateTime.Now.AddDays(-24),
                    Description = "Todo 2 months ago",
                    Category = "Infrastructure",
                    Status = "On Hold",
                    Parent = true
                },
                new Todo
                {
                    Title = "Past Todo 4",
                    DateCreated = DateTime.Now.AddMonths(-2),
                    DateDue = DateTime.Now.AddMonths(+1),
                    LastUpdated = DateTime.Now.AddDays(-19),
                    Description = "Todo 1 month ago",
                    Category = "UI",
                    Status = "Under Review",
                    Parent = false
                },
                new Todo
                {
                    Title = "Future Todo 2",
                    DateCreated = DateTime.Now,
                    DateDue = DateTime.Now.AddMonths(+6),
                    LastUpdated = DateTime.Now,
                    Description = "Todo 6 month in future",
                    Category = "API",
                    Status = "Created",
                    Parent = true
                }
            };

            await context.Todos.AddRangeAsync(todos);
            await context.SaveChangesAsync();
        }
    }
}