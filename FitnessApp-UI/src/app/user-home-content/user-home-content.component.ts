import { Component, OnInit } from '@angular/core';
import { UserDataStorageService } from '../user-data-storage.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user';


class Status {
  Name: string;
  EnumValue: string;
}

class Exercise {
  exId : number;
  exName : string;
  bodyPartAffected : string
}

@Component({
  selector: 'app-user-home-content',
  templateUrl: './user-home-content.component.html',
  styleUrls: ['./user-home-content.component.css']
})
export class UserHomeContentComponent implements OnInit {

  calorieIntake: string;
  actualCalorie: number;
  exercises: Array<Array<string>>=null;
  entered: boolean = false;
  Ex1Status: FormGroup; Ex2Status: FormGroup; Ex3Status: FormGroup;
  Ex4Status: FormGroup; Ex5Status: FormGroup;
  user:User;
  statusString:string = "";
  workoutEnter1:boolean = false;
  workoutEnter2:boolean = false;
  workoutEnter3:boolean = false;
  workoutEnter4:boolean = false;
  workoutEnter5:boolean = false;
  workoutStatusString:string ="";

  statuses = [
    {
      Name: 'Done',
      EnumValue: 'COMPLETE'
    },
    {
      Name: 'Not done',
      EnumValue: 'INCOMPLETE'
    }
  ];

  constructor(private fb:FormBuilder,private userDataStorageService: UserDataStorageService,private userService:UserService) { }

  setValue(actualCalorie) { 
    console.log(this.actualCalorie);
    let calorieDetails = {
      calorieIntake: this.actualCalorie,
      day: this.userDataStorageService.getDay()
    }
    this.userService.updateCalorieConsumed(this.user.userId,calorieDetails).subscribe((status:boolean)=>{
      if(status==true){
        this.entered= true;
        this.userDataStorageService.setCalorieUpdated(status);
        this.userDataStorageService.setActualCalorie(this.actualCalorie);
        this.statusString="Today's calorie intake logged successfully!";
      }else {
        this.entered=false;
        this.statusString="";
      }
    });
   }

  

  ngAfterContentInit(){
    
    this.exercises = this.userDataStorageService.getCurrentExercises();
  console.log(this.exercises);
  }
  ngDoCheck(){
    this.calorieIntake=this.userDataStorageService.getCalorieIntake();
  }
  ngOnInit() {
    this.entered = this.userDataStorageService.getCalorieUpdated();
    this.workoutEnter1 = this.userDataStorageService.workoutEnter1;
    this.workoutEnter2 = this.userDataStorageService.workoutEnter2;
    this.workoutEnter3 = this.userDataStorageService.workoutEnter3;
    this.workoutEnter4 = this.userDataStorageService.workoutEnter4;
    this.workoutEnter5 = this.userDataStorageService.workoutEnter5;

    if(this.entered==true){
      this.actualCalorie = this.userDataStorageService.getActualCalorie();
    }
    this.user=this.userDataStorageService.getUser();
    this.Ex1Status = this.fb.group({
      status: [this.statuses[1], [Validators.required]],
      setsCompleted: ['', [Validators.required]]
    })
    this.Ex2Status = this.fb.group({
      status: [this.statuses[1], [Validators.required]],
      setsCompleted: ['', [Validators.required]]
    })
    this.Ex3Status = this.fb.group({
      status: [this.statuses[1], [Validators.required]],
      setsCompleted: ['', [Validators.required]]
    })
    this.Ex4Status = this.fb.group({
      status: [this.statuses[1], [Validators.required]],
      setsCompleted: ['', [Validators.required]]
    })
    this.Ex5Status = this.fb.group({
      status: [this.statuses[1], [Validators.required]],
      setsCompleted: ['', [Validators.required]]
    })

  }

  handleEx1(e1) {
    e1.preventDefault();
    console.log(this.Ex1Status.value.status.EnumValue);
    console.log(this.Ex1Status.value);
    this.userService.getExerciseByName(this.exercises[0][0]).subscribe((exercise:Exercise)=>{
      let exerciseDetails = {
        day: this.userDataStorageService.getDay(),
        exId: exercise.exId, 
        setsCompleted: this.Ex1Status.value.setsCompleted,
         status: this.Ex1Status.value.status.EnumValue
      };
      this.userService.updateExerciseDone(this.user.userId,exerciseDetails).subscribe((status:boolean)=>{
        console.log(status);
        if(status==true){
          this.workoutEnter1= true;
          this.userDataStorageService.workoutEnter1=status;
          this.workoutStatusString="Today's "+ this.exercises[0][0] +" logged successfully!";
        }else {
          this.workoutEnter1=false;
          this.workoutStatusString="";
        }
      });
    });
  }


  handleEx2(e2) {
    e2.preventDefault();
    console.log(this.Ex2Status.value.status.EnumValue);
    console.log(this.Ex2Status.value);
    this.userService.getExerciseByName(this.exercises[1][0]).subscribe((exercise:Exercise)=>{
      let exerciseDetails = {
        day: this.userDataStorageService.getDay(),
        exId: exercise.exId, 
        setsCompleted: this.Ex2Status.value.setsCompleted,
         status: this.Ex2Status.value.status.EnumValue
      };
      this.userService.updateExerciseDone(this.user.userId,exerciseDetails).subscribe((status:boolean)=>{
        console.log(status);
        if(status==true){
          this.workoutEnter2= true;
          this.userDataStorageService.workoutEnter2=status;
          this.workoutStatusString="Today's "+ this.exercises[1][0] +" logged successfully!";
        }else {
          this.workoutEnter2=false;
          this.workoutStatusString="";
        }
      });
    });
  }

  handleEx3(e3) {
    e3.preventDefault();
    console.log(this.Ex3Status.value.status.EnumValue);
     console.log(this.Ex3Status.value);
    this.userService.getExerciseByName(this.exercises[2][0]).subscribe((exercise:Exercise)=>{
      let exerciseDetails = {
        day: this.userDataStorageService.getDay(),
        exId: exercise.exId, 
        setsCompleted: this.Ex3Status.value.setsCompleted,
         status: this.Ex3Status.value.status.EnumValue
      };
      this.userService.updateExerciseDone(this.user.userId,exerciseDetails).subscribe((status:boolean)=>{
        console.log(status);
        if(status==true){
          this.workoutEnter3= true;
          this.userDataStorageService.workoutEnter3=status;
          this.workoutStatusString="Today's "+ this.exercises[2][0] +" logged successfully!";
        }else {
          this.workoutEnter3=false;
          this.workoutStatusString="";
        }
      });
    });
  }
  handleEx4(e4) {
    e4.preventDefault();
    console.log(this.Ex4Status.value.status.EnumValue);
    console.log(this.Ex4Status.value);
    this.userService.getExerciseByName(this.exercises[3][0]).subscribe((exercise:Exercise)=>{
      let exerciseDetails = {
        day: this.userDataStorageService.getDay(),
        exId: exercise.exId, 
        setsCompleted: this.Ex4Status.value.setsCompleted,
         status: this.Ex4Status.value.status.EnumValue
      };
      this.userService.updateExerciseDone(this.user.userId,exerciseDetails).subscribe((status:boolean)=>{
        console.log(status);
        if(status==true){
          this.workoutEnter4= true;
          this.userDataStorageService.workoutEnter4=status;
          this.workoutStatusString="Today's "+ this.exercises[3][0] +" logged successfully!";
        }else {
          this.workoutEnter4=false;
          this.workoutStatusString="";
        }
      });
    });
  }
  handleEx5(e5) {
    e5.preventDefault();
    console.log(this.Ex5Status.value.status.EnumValue);
    console.log(this.Ex5Status.value);
    this.userService.getExerciseByName(this.exercises[4][0]).subscribe((exercise:Exercise)=>{
      let exerciseDetails = {
        day: this.userDataStorageService.getDay(),
        exId: exercise.exId, 
        setsCompleted: this.Ex5Status.value.setsCompleted,
         status: this.Ex5Status.value.status.EnumValue
      };
      this.userService.updateExerciseDone(this.user.userId,exerciseDetails).subscribe((status:boolean)=>{
        console.log(status);
        if(status==true){
          this.workoutEnter5= true;
          this.userDataStorageService.workoutEnter5=status;
          this.workoutStatusString="Today's "+ this.exercises[4][0] +" logged successfully!";
        }else {
          this.workoutEnter4=false;
          this.workoutStatusString="";
        }
      });
    });
  }


}
