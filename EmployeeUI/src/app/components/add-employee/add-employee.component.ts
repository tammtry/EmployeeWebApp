import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  addEmployee: Employee = {
    Id: '',
    FirstName: '',
    LastName: '',
    Email: '',
    DateOfBirth: '', 
    PhoneNumber: 0,
    MonthlySalary: 0
  }

  constructor(private employeeService: EmployeesService, private router: Router) { }

  ngOnInit(): void {
  }

  addEmployeeSubmit() {
    //console.log(this.addEmployee);
    this.employeeService.addEmployeeSubmit(this.addEmployee)
    .subscribe({
      next: (employee) => {
        this.router.navigate(['/employee']);
      },
      error: (response) => {
        console.log(response);
      }
    });
  }

}
