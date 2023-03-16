import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-display-tasks',
  templateUrl: './display-tasks.component.html',
  styleUrls: ['./display-tasks.component.css']
})
export class DisplayTasksComponent implements OnInit {

  constructor(private taskService: TasksService) { }

  tasks: Task[] = [];
  
  ngOnInit(): void {
    this.taskService.displayTasks().subscribe({
      next: (tasks) => {
        this.tasks = tasks;
        console.log(tasks);
      },
      error: (response) => {
        console.log(response);
      }
    });
  }

}
