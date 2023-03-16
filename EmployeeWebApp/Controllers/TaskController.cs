using EmployeeWebApp.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EmployeeWebApp.Models;

namespace EmployeeWebApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class TaskController : ControllerBase
    {
        private readonly DataContext _dataContext;
     
        public TaskController(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllTasks()
        {
            var tasks = await _dataContext.Tasks.ToListAsync();
            return Ok(tasks);
        }

        [HttpPost]
        public async Task<IActionResult> AddTask([FromBody]Models.Task newTask)
        {
            newTask.Id = Guid.NewGuid();
            var rnd = new Random();

            var employeesId = _dataContext.Employees.Select(x => x.Id).ToList();
            newTask.AsigneeId = employeesId.OrderBy(r => rnd.Next()).First();
        
            await _dataContext.Tasks.AddAsync(newTask);
            await _dataContext.SaveChangesAsync();

            return Ok(newTask);
        }

        [HttpGet]
        [Route("{id:Guid}")]

        public async Task<IActionResult> GetTask([FromRoute] Guid id)
        {
            var task = await _dataContext.Tasks.FirstOrDefaultAsync(x => x.Id == id);
            if (task == null)
            {
                return NotFound();
            }
            return Ok(task);
        }

        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> UpdateTask([FromRoute] Guid id, Models.Task updateTask)
        {
            var task = await _dataContext.Tasks.FindAsync(id);
            if(task == null)
            {
                return NotFound();
            }

            task.Title = updateTask.Title;
            task.Description = updateTask.Description;
            task.DueDate = updateTask.DueDate;

            await _dataContext.SaveChangesAsync();

            return Ok();
        }

        [HttpDelete]
        [Route("{id:Guid}")]

        public async Task<IActionResult> DeleteTask([FromRoute] Guid id)
        {
            var task = await _dataContext.Tasks.FindAsync(id);
            if(task == null)
            {
                return NotFound();
            }

            _dataContext.Tasks.Remove(task);
            await _dataContext.SaveChangesAsync();

            return Ok();
        }


        [HttpGet]
        [Route("display")]
        public async Task<IActionResult> DisplayTasks()
        {
            var tasks = await _dataContext.Tasks.ToListAsync();
            var correctTasks = tasks.OrderByDescending(x => x.DueDate);
            var today = DateTime.Today;
            var max = new DateTime(today.Year, today.Month, 1);
            var min = max.AddMonths(-1);

            var pastMonthTasks = correctTasks.Where(x => DateTime.Parse(x.DueDate) >= min && DateTime.Parse(x.DueDate) < max).ToList();
         
            List<Models.Task> retVal = new List<Models.Task>(); 

            foreach (var item in pastMonthTasks)
            {             
                retVal.Add(item);
            }

            return Ok(retVal);
         
        }

    }
}
