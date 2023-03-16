import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/models/task.model';
import { EmployeesService } from 'src/app/services/employees.service';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  addTask: Task = {
    Id: '',
    Title: '',
    Description: '',
    AsigneeId: '',
    DueDate: ''
  }

  constructor(private router: Router, private taskService: TasksService,
    private employeeService: EmployeesService) { }

  ngOnInit(): void {
  }

  addTaskSubmit() {
    //console.log(this.addTask);
    this.taskService.addTaskSubmit(this.addTask)
    .subscribe({
      next: (task) => {
        this.router.navigate(['/task']);
      },
      error: (response) => {
        console.log(response);
      }
    });
  }

}
