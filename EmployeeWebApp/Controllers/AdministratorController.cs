using EmployeeWebApp.Data;
using EmployeeWebApp.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeeWebApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdministratorController : ControllerBase
    {
        private readonly DataContext _dataContext;
        public AdministratorController(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllAdministrators()
        {
            var admins = await _dataContext.Administrators.ToListAsync();

            return Ok(admins);
        }

        [HttpPost]
        public async Task<IActionResult> AddAdministrator([FromBody] Administrator newAdmin)
        {
            newAdmin.Id = Guid.NewGuid();

            await _dataContext.Administrators.AddAsync(newAdmin);
            await _dataContext.SaveChangesAsync();

            return Ok(newAdmin);
        }

        [HttpGet]
        [Route("{id:Guid}")]

        public async Task<IActionResult> GetAdmin([FromRoute] Guid id)
        {
            var admin = await _dataContext.Administrators.FirstOrDefaultAsync(x => x.Id == id);
            if (admin == null)
            {
                return NotFound();
            }
            return Ok(admin);
        }

        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> UpdateAdministrator([FromRoute] Guid id, Administrator updateAdmin)
        {
            var admin = await _dataContext.Administrators.FindAsync(id);
            if (admin == null)
            {
                return NotFound();
            }

            admin.FirstName = updateAdmin.FirstName;
            admin.LastName = updateAdmin.LastName;

            await _dataContext.SaveChangesAsync();

            return Ok();
        }

        [HttpGet]
        [Route("salaries")]
        public async Task<IActionResult> CalculateSalaries()
        {
            List<Employee> retVal = new List<Employee>();
            var employees = await _dataContext.Employees.ToListAsync();
            var maxSalary = employees.OrderByDescending(m => m.MonthlySalary).First();
            retVal.Add(maxSalary);

            return Ok(retVal);
        }


    }
}
