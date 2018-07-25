import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Admin } from '../admin';
import { AdminDataStorageService } from '../admin-data-storage.service';

class Client {
  firstName: string;
  lastName: string;
    userId: number;
}

class User {
  name: string;
  userId: number;
}


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  admin:Admin;
  clients: Array<Client>=[];
  users: Array<User>=[];
  notifExist:boolean=true;

  constructor(private adminService:AdminService, private adminDataStorageService:AdminDataStorageService,) { }

  ngOnInit() {
    this.admin = this.adminDataStorageService.getAdmin();
    console.log(this.admin);
    this.adminService.viewUsersWithExpiredPlans(this.admin.adminId).subscribe((clientsList:Array<Client>)=>{
      this.clients=clientsList;
      if(this.clients.length<1){
        this.notifExist=false;
      }
      else{
      this.clients.forEach((user)=>{
        this.users.push({
          name: user.firstName+" "+user.lastName,
          userId: user.userId
        });
      });
      this.notifExist=true;
    }
    });
  }


}
