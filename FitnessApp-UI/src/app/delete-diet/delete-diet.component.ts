import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminDataStorageService } from '../admin-data-storage.service';
import { AdminService } from '../admin.service';
import { Admin } from '../admin';

class Diet {
  planId:number;
  planName:string;
  planType:string;
}

class Workout {
  planId:number;
  planName:string;
  planType:string;
}

@Component({
  selector: 'app-delete-diet',
  templateUrl: './delete-diet.component.html',
  styleUrls: ['./delete-diet.component.css']
})
export class DeleteDietComponent implements OnInit {

  admin:Admin=null;
  deleteDietForm : FormGroup
  diets : Array<Diet>=[];
  deleteWorkoutForm : FormGroup
  workouts : Array<Workout>=[];
  toggleDiet: boolean=false;
  toggleWorkout: boolean = false;
  statusStringDiet:string="Not yet assigned";
  statusStringWorkout:string="Not yet assigned";
  workoutStatus:boolean=false;
  dietStatus:boolean=false;

  constructor(private fb : FormBuilder,private adminService:AdminService, 
    private adminDataStorageService:AdminDataStorageService) { }

  ngOnInit() {

    this.admin = this.adminDataStorageService.getAdmin();
    this.adminService.getPlans(this.admin.adminId).subscribe(plansList =>{
        this.diets = plansList['dietPlans'];
        this.workouts=plansList['workoutPlans'];
        console.log(this.diets);
    })
    
   
    
  }

  toggleDietForm(){
    this.toggleDiet=!this.toggleDiet;

    this.deleteDietForm = this.fb.group({
      selectedDiet : [this.diets[0] , Validators.required]
    });
  }
  
  toggleWorkoutForm(){
    this.toggleWorkout=!this.toggleWorkout;

    this.deleteWorkoutForm = this.fb.group({
      selectedWorkout : [this.workouts[0] , Validators.required]
    })
  }

  handleDietFormSubmit(e){
    e.preventDefault();
    console.log(this.deleteDietForm.value);
    let deletedDiet=this.deleteDietForm.value;
    let dietId = deletedDiet.selectedDiet.planId;
    this.adminService.deletePlanPreset(dietId,this.admin.adminId).subscribe((status:boolean)=>{
      console.log(status);
      if(status==true){
         this.dietStatus=status;
         this.statusStringDiet="Diet Plan deletion Successful";
         this.deleteDietForm.reset();
      }else{
        this.dietStatus=status;
        this.statusStringDiet="Diet Plan deletion Unsuccessful";
      }
    });
  }

  handleWorkoutFormSubmit(e){
    e.preventDefault();
    console.log(this.deleteWorkoutForm.value);
    let deletedWorkout=this.deleteWorkoutForm.value;
    let workoutId = deletedWorkout.selectedWorkout.planId;
    this.adminService.deletePlanPreset(workoutId,this.admin.adminId).subscribe((status:boolean)=>{
      console.log(status);
      if(status==true){
         this.workoutStatus=status;
         this.statusStringWorkout="Workout Plan deletion Successful";
         this.deleteWorkoutForm.reset();
      }else{
        this.workoutStatus=status;
        this.statusStringWorkout="Workout Plan deletion Unsuccessful";
      }
    });
  }

}
