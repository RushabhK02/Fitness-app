import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AdminService } from '../admin.service';
import { UserService } from '../user.service';
import { AdminDataStorageService } from '../admin-data-storage.service';
import { Admin } from '../admin';
import { User } from '../user';

@Component({
  selector: 'app-admin-view-profile',
  templateUrl: './admin-view-profile.component.html',
  styleUrls: ['./admin-view-profile.component.css']
})
export class AdminViewProfileComponent implements OnInit {

  userId:number = 0;
  user:User=null;
  admin:Admin = null;

  constructor(private activatedRoute: ActivatedRoute, private adminService:AdminService,
    private adminDataStorageService:AdminDataStorageService,private userService:UserService) { }

  ngOnInit() {
    this.admin = this.adminDataStorageService.getAdmin();
    this.activatedRoute.params.subscribe((params: Params) => {
      this.userId = params['id'];

      this.adminService.viewClientInfo(this.userId,this.admin.adminId).subscribe((user:User)=>{
        this.user = user;
        console.log(this.user);
      });
    });
  }

}
