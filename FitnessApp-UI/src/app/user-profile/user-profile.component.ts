import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserDataStorageService } from '../user-data-storage.service';
import { User } from '../user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user:User=null;
  statusString:string="Not yet updated";
  status:boolean=false;

  constructor(private userDataStorageService: UserDataStorageService, private userService:UserService) { }

  ngOnInit() {
    this.user= this.userDataStorageService.getUser();
    console.log(this.user);
  }

  updateInfo(){
    let newInfo =  {
      "age": this.user.age,
      "height": this.user.heightCms,
      "weight": this.user.weightKgs
    };

    this.userService.updateBasicInfo(this.user.userId,newInfo).subscribe((status:boolean)=>{
      if(status==true){
        this.status=true;
        this.statusString = "Update completed Sucessfully";
      }else {
            this.status=true;
            this.statusString="Update Unsuccessful";
        }
    });
  }
}
