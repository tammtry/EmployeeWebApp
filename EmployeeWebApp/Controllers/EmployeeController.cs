using EmployeeWebApp.Data;
using EmployeeWebApp.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeeWebApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class EmployeeController : ControllerBase
    {

        private readonly DataContext _dataContext;
        public EmployeeController(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllEmployees()
        {
            var employees = await _dataContext.Employees.ToListAsync();

            return Ok(employees);
        }

        [HttpPost]
        public async Task<IActionResult> AddEmployee([FromBody]Employee newEmployee)
        {
            //Creates new ID for an employee
            newEmployee.Id = Guid.NewGuid(); 

            await _dataContext.Employees.AddAsync(newEmployee);
            await _dataContext.SaveChangesAsync();

            return Ok(newEmployee);
        }

        [HttpGet]
        [Route("{id:Guid}")]

        public async Task<IActionResult> GetEmployee([FromRoute] Guid id)
        {
            var employee = await _dataContext.Employees.FirstOrDefaultAsync(x => x.Id == id);
            if(employee == null)
            {
                return NotFound();
            }
            return Ok(employee);
        }

        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> UpdateEmployee([FromRoute] Guid id, Employee updateEmployee)
        {
            var employee = await _dataContext.Employees.FindAsync(id);
            if(employee == null)
            {
                return NotFound();
            }

            employee.FirstName = updateEmployee.FirstName;
            employee.LastName = updateEmployee.LastName;
            employee.Email = updateEmployee.Email;
            employee.PhoneNumber = updateEmployee.PhoneNumber;
            employee.DateOfBirth = updateEmployee.DateOfBirth;
            employee.MonthlySalary = updateEmployee.MonthlySalary;

            await _dataContext.SaveChangesAsync();

            return Ok();
        }

        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> DeleteEmployee([FromRoute] Guid id)
        {
            var employee = await _dataContext.Employees.FindAsync(id);
            if(employee == null)
            {
                return NotFound();
            }

            _dataContext.Employees.Remove(employee);
            await _dataContext.SaveChangesAsync();

            return Ok();
        }
    }
}
