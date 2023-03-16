import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Administrator } from 'src/app/models/administrator.model';
import { Employee } from 'src/app/models/employee.model';
import { AdministratorsService } from 'src/app/services/administrators.service';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-administrators-list',
  templateUrl: './administrators-list.component.html',
  styleUrls: ['./administrators-list.component.css']
})
export class AdministratorsListComponent implements OnInit {

  constructor(private adminService: AdministratorsService, private employeeService: EmployeesService,
    private router: Router) { }

  admins: Administrator[] = [];
  employee: Employee = {
    Id: '',
    FirstName: '',
    LastName: '',
    Email: '',
    DateOfBirth: '', 
    PhoneNumber: 0,
    MonthlySalary: 0
  }

  employees: Employee[] = [];

  ngOnInit(): void {
    this.adminService.getAllAdministrators().subscribe({
      next: (admins) => {
        this.admins = admins;
        console.log(admins);
      },
      error: (response) => {
        console.log(response);
      }
    });
  }

  calculateSalaries() {
    this.adminService.calculateSalaries().subscribe({
      next: (employees) => {
        this.employees = employees;
        console.log(employees);
        this.router.navigate(['/administrator/salaries']);
      },
      error: (response) => {
        console.log(response);     
      }
    });

  }
}


