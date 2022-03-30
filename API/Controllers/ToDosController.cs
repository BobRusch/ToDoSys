using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MediatR;
using Application.Todos;

namespace API.Controllers;

public class ToDosController : BaseApiController
{

    [HttpGet]
    public async Task<ActionResult<List<Todo>>> GetToDos()
    {
        return await Mediator.Send(new List.Query());
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Todo>> GetToDo(Guid id)
    {
        return await Mediator.Send(new Details.Query { Id = id });
    }

    [HttpPost]
    public async Task<IActionResult> CreateTodo(Todo todo)
    {
        return Ok(await Mediator.Send(new Create.Command { Todo = todo }));
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> EditTodo(Guid id, Todo todo)
    {
        todo.Id = id;
        todo.LastUpdated = DateTime.Now;

        return Ok(await Mediator.Send(new Edit.Command { Todo = todo }));
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteTodo(Guid id)
    {
        return Ok(await Mediator.Send(new Delete.Command { Id = id }));
    }
}