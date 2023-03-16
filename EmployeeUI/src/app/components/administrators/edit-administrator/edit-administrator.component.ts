import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Administrator } from 'src/app/models/administrator.model';
import { AdministratorsService } from 'src/app/services/administrators.service';

@Component({
  selector: 'app-edit-administrator',
  templateUrl: './edit-administrator.component.html',
  styleUrls: ['./edit-administrator.component.css']
})
export class EditAdministratorComponent implements OnInit {

  administratorDetails: Administrator = {
    Id: '',
    FirstName: '',
    LastName: '',
  }

  constructor(private route: ActivatedRoute, private adminService: AdministratorsService,
    private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
       const id = params.get('id');
       console.log(params);

       if(id) {
        this.adminService.getAdministrator(id)
        .subscribe({
          next: (response) => {
            this.administratorDetails = response;
            console.log(response);
          }
        });
       }
      }
    })
  }

  updateAdministrator() {
    this.adminService.updateAdministrator(this.administratorDetails.Id, this.administratorDetails)
    .subscribe({
      next: (response) => {
        this.router.navigate(['administrator']);
      }
    });
  }

}
