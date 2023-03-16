import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesListComponent } from './components/employees/employees-list/employees-list.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { FormsModule } from '@angular/forms';
import { EditEmployeeComponent } from './components/employees/edit-employee/edit-employee.component';
import { TasksListComponent } from './components/tasks/tasks-list/tasks-list.component';
import { EditTaskComponent } from './components/tasks/edit-task/edit-task.component';
import { AddTaskComponent } from './components/tasks/add-task/add-task.component';
import { DisplayTasksComponent } from './components/tasks/display-tasks/display-tasks.component';
import { AdministratorsListComponent } from './components/administrators/administrators-list/administrators-list.component';
import { AddAdministratorComponent } from './components/administrators/add-administrator/add-administrator.component';
import { EditAdministratorComponent } from './components/administrators/edit-administrator/edit-administrator.component';
import { DisplaySalaryComponent } from './components/display-salary/display-salary.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesListComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    TasksListComponent,
    EditTaskComponent,
    AddTaskComponent,
    DisplayTasksComponent,
    AdministratorsListComponent,
    AddAdministratorComponent,
    EditAdministratorComponent,
    DisplaySalaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
