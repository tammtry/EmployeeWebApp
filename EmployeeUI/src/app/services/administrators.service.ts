import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Administrator } from '../models/administrator.model';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class AdministratorsService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllAdministrators() : Observable<Administrator[]> {
    return this.http.get<Administrator[]>(this.baseApiUrl + '/api/administrator');
  }

  addAdministratorSubmit(addAdmin: Administrator) : Observable<Administrator> {
    addAdmin.Id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Administrator>(this.baseApiUrl + '/api/administrator/', addAdmin);
  }

  getAdministrator(id: string) : Observable<Administrator> {
    return this.http.get<Administrator>(this.baseApiUrl + '/api/administrator/' + id);
  }

  updateAdministrator(id: string, updateAdmin: Administrator) : Observable<Administrator> {
    return this.http.put<Administrator>(this.baseApiUrl + '/api/administrator/' + id, updateAdmin);
  }

  calculateSalaries() : Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseApiUrl + '/api/administrator/salaries');
  }
}
