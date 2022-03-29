using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers;

public class ToDosController : BaseApiController
{
    private readonly DataContext _context;
    public ToDosController(DataContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<List<Todo>>> GeToDos()
    {
        return await _context.Todos.ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Todo>> GeToDo(Guid id)
    {
        return await _context.Todos.FindAsync(id);
    }
}