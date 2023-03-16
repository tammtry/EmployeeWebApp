import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { AdministratorsService } from 'src/app/services/administrators.service';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-display-salary',
  templateUrl: './display-salary.component.html',
  styleUrls: ['./display-salary.component.css']
})
export class DisplaySalaryComponent implements OnInit {

  employeeSalary: Employee[] = [];
 
  constructor(private administratorService: AdministratorsService) { }

  ngOnInit(): void {
    this.administratorService.calculateSalaries().subscribe({
      next: (employeeSalary) => {
        this.employeeSalary = employeeSalary;
        console.log(employeeSalary);
      },
      error: (response) => {
        console.log(response);
      }
    });
  }

}
