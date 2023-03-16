    using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeeWebApp.Models
{
    public class Task 
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public Guid AsigneeId { get; set; }
        public string DueDate { get; set; }
        
    }

    
}
