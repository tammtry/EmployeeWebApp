import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { AddAdministratorComponent } from './components/administrators/add-administrator/add-administrator.component';
import { AdministratorsListComponent } from './components/administrators/administrators-list/administrators-list.component';
import { EditAdministratorComponent } from './components/administrators/edit-administrator/edit-administrator.component';
import { DisplaySalaryComponent } from './components/display-salary/display-salary.component';
import { EditEmployeeComponent } from './components/employees/edit-employee/edit-employee.component';
import { EmployeesListComponent } from './components/employees/employees-list/employees-list.component';
import { AddTaskComponent } from './components/tasks/add-task/add-task.component';
import { DisplayTasksComponent } from './components/tasks/display-tasks/display-tasks.component';
import { EditTaskComponent } from './components/tasks/edit-task/edit-task.component';
import { TasksListComponent } from './components/tasks/tasks-list/tasks-list.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeesListComponent
  },
  {
    path: 'employee',
    component: EmployeesListComponent
  },
  {
    path: 'employee/add',
    component: AddEmployeeComponent
  },
  {
    path: 'employee/edit/:id',
    component: EditEmployeeComponent
  },
  {
    path: 'task',
    component: TasksListComponent
  },
  {
    path: 'task/add',
    component: AddTaskComponent
  },
  {
    path: 'task/edit/:id',
    component: EditTaskComponent
  },
  {
    path: 'task/display',
    component: DisplayTasksComponent
  },
  {
    path: 'administrator',
    component: AdministratorsListComponent
  },
  {
    path: 'administrator/add',
    component: AddAdministratorComponent
  },
  {
    path: 'administrator/edit/:id',
    component: EditAdministratorComponent
  },
  {
    path: 'administrator/salaries',
    component: DisplaySalaryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
