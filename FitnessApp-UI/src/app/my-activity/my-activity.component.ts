import { Component, OnInit } from '@angular/core';
import { UserDataStorageService } from '../user-data-storage.service';
import { UserService } from '../user.service';
import { User } from '../user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

class Filter {
  Name: string;
  Value: string;
}

@Component({
  selector: 'app-my-activity',
  templateUrl: './my-activity.component.html',
  styleUrls: ['./my-activity.component.css']
})
export class MyActivityComponent implements OnInit {
  workoutRecords: {
    allotmentId: number,
    day: number,
    name: string,
    status:string,
    setsCompleted:number
  }[];

  dietRecords: {
    allotmentId: number,
    day: string,
    name: string,
    intake: number,
  }[];

  filters : Array<Filter> = [];
  workoutDateForm : FormGroup;
  dietDateForm : FormGroup;

  constructor(private fb : FormBuilder,private userService: UserService, private userDataStorageService: UserDataStorageService) { }

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
      filterDate : ['',]
    })

    this.dietDateForm = this.fb.group({
      filter : [this.filters[0],[Validators.required]],
      filterDate : ['',]
    })

    this.workoutRecords=[];
    this.dietRecords=[];
    let user: User = this.userDataStorageService.getUser();
    this.userService.viewWorkoutActivity(user.userId,"default","2018-07-18").subscribe((records: Array<any>)=>{
      records.forEach(record=>{
        this.userService.getExerciseInfo(user.userId,record.id.exId).subscribe((exercise:any)=>{
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

    this.userService.viewDietActivity(user.userId,"default","2018-07-18").subscribe((records: Array<any>)=>{
      records.forEach(record=>{
          this.dietRecords.push({
            allotmentId: record.id.allotmentId,
            day: record.id.day,
            name: record.planDetail.plan.planName,
            intake: record.calorieIntake
        });
        
      });
    });


  }

  
}
