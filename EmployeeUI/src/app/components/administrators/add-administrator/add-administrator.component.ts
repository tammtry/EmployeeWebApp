import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Administrator } from 'src/app/models/administrator.model';
import { AdministratorsService } from 'src/app/services/administrators.service';

@Component({
  selector: 'app-add-administrator',
  templateUrl: './add-administrator.component.html',
  styleUrls: ['./add-administrator.component.css']
})
export class AddAdministratorComponent implements OnInit {

  addAdmin: Administrator = {
    Id: '',
    FirstName: '',
    LastName: '',
  }

  constructor(private adminService: AdministratorsService, private router: Router) { }

  ngOnInit(): void {
  }

  
  addEmployeeSubmit() {
    //console.log(this.addAdmin);
    this.adminService.addAdministratorSubmit(this.addAdmin)
    .subscribe({
      next: (admin) => {
        this.router.navigate(['/administrator']);
      },
      error: (response) => {
        console.log(response);
      }
    });
  }

}
