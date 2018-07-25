import { Component, OnInit } from '@angular/core';
import { JAN } from '@angular/material';
import { DatePipe } from '@angular/common';
import { UserService } from '../user.service';
import { UserDataStorageService } from '../user-data-storage.service';
import { User } from '../user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

class Filter {
  Name: string;
  Value: string;
}

@Component({
  selector: 'app-previous-plans',
  templateUrl: './previous-plans.component.html',
  styleUrls: ['./previous-plans.component.css']
})
export class PreviousPlansComponent implements OnInit {

  previousWorkoutPlans: {
    number: number,
    name: string,
    date: Date,

  }[];

  previousDietPlans: {
    number: number,
    name: string,
    date: Date,

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
      filterDate : ['',[Validators]]
    })

    this.dietDateForm = this.fb.group({
      filter : [this.filters[0],[Validators.required]],
      filterDate : ['',[Validators]]
    })
    
    this.previousWorkoutPlans = [];
    this.previousDietPlans = [];
    
    let user: User = this.userDataStorageService.getUser();
    this.userService.viewWorkoutPlanHistory(user.userId, "default", "2018-07-18").subscribe((allotmentArray: Array<any>) => {
      console.log(allotmentArray);
      allotmentArray.forEach(allotment => {
        this.previousDietPlans.push({
          number: allotment.dietPlanId.planId,
          name:  allotment.dietPlanId.planName,
          date: allotment.startDate
        });
        this.previousWorkoutPlans.push({
          number: allotment.workoutPlanId.planId,
          name:  allotment.workoutPlanId.planName,
          date: allotment.startDate
        });
      });

    });
  }
}
