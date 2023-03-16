import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/models/task.model';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  taskDetails: Task = {
    Id: '',
    Title: '',
    Description: '',
    AsigneeId: '',
    DueDate: ''
  }

  constructor(private route: ActivatedRoute, private taskService: TasksService,
    private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
       const id = params.get('id');
       console.log(params);

       if(id) {
        this.taskService.getTask(id)
        .subscribe({
          next: (response) => {
            this.taskDetails = response;
            console.log(response);
          }
        });
       }
      }
    })
  }

  updateTask() {
    this.taskService.updateTask(this.taskDetails.Id, this.taskDetails)
    .subscribe({
      next: (response) => {
        this.router.navigate(['task']);
      }
    });
  }

  deleteTask(id: string) {
    this.taskService.deleteTask(id)
    .subscribe({
      next: (response) => {
        this.router.navigate(['task']);
      }
    });
  }

}
