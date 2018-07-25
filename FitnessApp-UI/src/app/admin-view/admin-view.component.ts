import { Component, OnInit } from '@angular/core';
import { AdminDataStorageService } from '../admin-data-storage.service';
import { AdminService } from '../admin.service';
import { Admin } from '../admin';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {

  constructor(private adminDataStorageService: AdminDataStorageService, private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.getAdminInfo(1).subscribe((admin: Admin) => {
      this.adminDataStorageService.setAdmin(admin);
      console.log(admin);
      console.log(this.adminDataStorageService.getAdmin());
    });
  }

}
