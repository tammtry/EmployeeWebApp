import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

   baseApiUrl: string = environment.baseApiUrl;
   
  constructor(private http: HttpClient) { }

  getAllTasks() : Observable<Task[]> {
    return this.http.get<Task[]>(this.baseApiUrl + '/api/task');
  }

  addTaskSubmit(addTask: Task) : Observable<Task> {
    addTask.Id = '00000000-0000-0000-0000-000000000000';
    addTask.AsigneeId = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Task>(this.baseApiUrl + '/api/task/', addTask);
  }

  getTask(id: string) : Observable<Task> {
    return this.http.get<Task>(this.baseApiUrl + '/api/task/' + id);
  }

  updateTask(id: string, updateTask: Task) : Observable<Task> {
    return this.http.put<Task>(this.baseApiUrl + '/api/task/' + id, updateTask);
  }

  deleteTask(id: string) : Observable<Task> {
    return this.http.delete<Task>(this.baseApiUrl + '/api/task/' + id);
  }

  displayTasks() : Observable<Task[]> {
    return this.http.get<Task[]>(this.baseApiUrl + '/api/task/display');
  }
}
