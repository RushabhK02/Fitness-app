import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AdminService } from '../admin.service';
import { AdminDataStorageService } from '../admin-data-storage.service';
import { Admin } from '../admin';
import { User } from '../user';
import { UserService } from '../user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

class Workout {
  allotmentId: number;
  day: number;
  name: string;
  status:string;
  setsCompleted:number;
}

class Diet {
  allotmentId: number;
  day: string;
  name: string;
  intake: number;
}


class Filter {
  Name: string;
  Value: string;
}



@Component({
  selector: 'app-admin-view-activity',
  templateUrl: './admin-view-activity.component.html',
  styleUrls: ['./admin-view-activity.component.css']
})
export class AdminViewActivityComponent implements OnInit {
  userId:number = 0;
  user:User=null;
  admin:Admin = null;
  allotmentId:number=0;
  currStartDate:string="";

  filters : Array<Filter> = [];
 workoutDateForm : FormGroup;
 dietDateForm : FormGroup;

  workoutRecords:Array<Workout> = [];

  dietRecords: Array<Diet>=[];

  constructor(private activatedRoute: ActivatedRoute, private adminService:AdminService, private fb:FormBuilder,
              private adminDataStorageService:AdminDataStorageService,private userService:UserService) { }

  ngOnInit() {

    this.filters = [
      {Name : 'Default' , 
       Value : 'DEFAULT'    
      },
      {Name : 'Before' , 
       Value : 'BEFORE'    
      },
      {Name : 'After' , 
       Value : 'AFTER'    
      },
    ]
 
    this.workoutDateForm = this.fb.group({
      filter : [this.filters[0],[Validators.required]],
      filterDate : ['',[]]
    })
 
    this.dietDateForm = this.fb.group({
      filter : [this.filters[0],[Validators.required]],
      filterDate : ['',[]]
    })
    this.admin = this.adminDataStorageService.getAdmin();
    this.activatedRoute.params.subscribe((params: Params) => {
      this.userId = params['id'];
      this.adminService.viewClientInfo(this.userId,this.admin.adminId).subscribe((user:User)=>{
        this.user = user;
        this.userService.viewWorkoutActivity(user.userId,"default","2018-07-18").subscribe((records: Array<any>)=>{
          console.log(records);
          records.forEach(record=>{
            this.userService.getExerciseInfo(this.userId,record.id.exId).subscribe((exercise:any)=>{
              this.workoutRecords.push({
                allotmentId: record.id.allotmentId,
                day: record.id.day,
                name: exercise.exName,
                status:record.status,
                setsCompleted:record.setsCompleted
              });
            });
            
          });
        });
      });
      console.log(this.userId);

      this.userService.viewDietActivity(this.userId,"default","2018-07-18").subscribe((records: Array<any>)=>{
        records.forEach(record=>{
            this.dietRecords.push({
              allotmentId: record.id.allotmentId,
              day: record.id.day,
              name: record.planDetail.plan.planName,
              intake: record.calorieIntake
          });   
        });
      });

      this.userService.getCurrentAllotment(this.userId).subscribe(record=>{
        this.allotmentId= record['allotmentId'];
        this.currStartDate= record['startDate'];
      })

    });
  }

  handleFilterWorkout(){
    console.log(this.workoutDateForm.value);
  }

  handleFilterDiet(){
    console.log(this.dietDateForm.value);
  }


}
