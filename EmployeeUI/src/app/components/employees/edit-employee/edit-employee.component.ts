import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  employeeDetails: Employee = {
    Id: '',
    FirstName: '',
    LastName: '',
    Email: '',
    DateOfBirth: '', 
    PhoneNumber: 0,
    MonthlySalary: 0
  }
  constructor(private route: ActivatedRoute, private employeeService: EmployeesService,
    private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
       const id = params.get('id');
       console.log(params);

       if(id) {
        this.employeeService.getEmployee(id)
        .subscribe({
          next: (response) => {
            this.employeeDetails = response;
            console.log(response);
          }
        });
       }
      }
    })
  }

  updateEmployee() {
    this.employeeService.updateEmployee(this.employeeDetails.Id, this.employeeDetails)
    .subscribe({
      next: (response) => {
        this.router.navigate(['employee']);
      }
    });
  }

  deleteEmployee(id: string) {
    this.employeeService.deleteEmployee(id)
    .subscribe({
      next: (response) => {
        this.router.navigate(['employee']);
      }
    });
  }

}
