import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../admin.service';
import { AdminDataStorageService } from '../admin-data-storage.service';
import { Admin } from '../admin';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

class Client {
  firstName: string;
  lastName: string;
    userId: number;
}

class User {
  name: string;
  userId: number;
}

class Workout {
  planId:number;
  planName:string;
  planType:string;
}
class Diet {
  planId:number;
  planName:string;
  planType:string;
}

@Component({
  selector: 'app-assign-plan',
  templateUrl: './assign-plan.component.html',
  styleUrls: ['./assign-plan.component.css'],

})



export class AssignPlanComponent implements OnInit {

  assignForm: FormGroup;
  admin:Admin;
  clients: Array<Client>=[];
  users: Array<User>=[];
  workouts: Array<Workout>=[];
  diets:Array<Diet>=[];
  toggle: boolean=false;
  statusString:string="Not yet assigned";
  status:boolean=false;

  constructor(private fb: FormBuilder, private adminService:AdminService, 
              private adminDataStorageService:AdminDataStorageService, private router:Router) {
  }

  ngOnInit() {


    this.admin = this.adminDataStorageService.getAdmin();
    this.adminService.getPlans(this.admin.adminId).subscribe(plansList =>{
        this.workouts=plansList['workoutPlans'];
        this.diets = plansList['dietPlans'];

        console.log(this.diets);
    })
    this.adminService.viewClients(this.admin.adminId).subscribe((clientsList:Array<Client>)=>{
      this.clients=clientsList;
      this.clients.forEach((user)=>{
        this.users.push({
          name: user.firstName+" "+user.lastName,
          userId: user.userId
        });
      });
    });

    



  }

  toggleForm(){
    this.toggle=!this.toggle;
    this.assignForm = this.fb.group({

      selectedClient: [this.users[0] , [Validators.required]],
      selectedWorkout: [this.workouts[0] , [Validators.required]],
      selectedDiet: [this.diets[0] , [Validators.required]],


    });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let assignForm = this.assignForm.value;
    console.log(this.assignForm.value);
    let comboPlan = {
      dietPlan: assignForm.selectedDiet.planId,
      workoutPlan: assignForm.selectedWorkout.planId
    };
    console.log(comboPlan);
    this.adminService.assignNewPreset(assignForm.selectedClient.userId,comboPlan,this.admin.adminId).subscribe((status:boolean)=>{
      console.log(status);
      if(status==true){
         this.status=status;
         this.statusString="Assignment Successful";
         this.assignForm.reset();
      }else{
        this.status=status;
        this.statusString="Assignment Unsuccessful";
      }
    });

  }

  
}
