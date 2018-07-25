import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { AdminService } from '../admin.service';
import { AdminDataStorageService } from '../admin-data-storage.service';
import { Admin } from '../admin';
import { Plan } from '../plan';
import { NewPlan } from '../new-plan';
import { PlanDetail } from '../plan-detail';
import { PlanDetailId } from '../plan-detail-id';

class Exercise {
  exId : number;
  exName : string;
  bodyPartAffected : string
}

@Component({
  selector: 'app-create-workout',
  templateUrl: './create-workout.component.html',
  styleUrls: ['./create-workout.component.css']
})
export class CreateWorkoutComponent implements OnInit {

  index: number = 0;
  errors : any = {};
  admin:Admin;
  exercises : Array<Exercise> = [];
  plan:Plan=null;
  newPlan:NewPlan=null;
  planDetail:PlanDetail=null;
  planDetailId:PlanDetailId=null;
  statusString:string="Not yet created";
  status:boolean=false;
  planName:string = "";
  
  day1 : FormGroup; day2 : FormGroup; day3 : FormGroup; day4 : FormGroup; day5 : FormGroup; day6 : FormGroup;
  day7 : FormGroup; day8 : FormGroup; day9 : FormGroup; day10 : FormGroup; day11 : FormGroup; day12 : FormGroup;
  day13 : FormGroup; day14 : FormGroup; day15 : FormGroup;
  constructor(private fb : FormBuilder, private adminDataStorageService:AdminDataStorageService, 
              private adminService:AdminService) {}

  ngOnInit() {
    this.admin = this.adminDataStorageService.getAdmin();
    this.adminService.getExercises(this.admin.adminId).subscribe((exercises:Array<Exercise>)=>{
      this.exercises=exercises;

      this.day1 = this.fb.group({

        planName : ['Plan Name' , [Validators.required]],
  
        d1Ex1 : [this.exercises[0], [Validators.required]],
        d1Sets1 : [0, [Validators.required]],
        d1Reps1 : [0, [Validators.required]],
  
        d1Ex2 : [this.exercises[0], [Validators.required]],
        d1Sets2 : [0, [Validators.required]],
        d1Reps2 : [0, [Validators.required]],
  
        d1Ex3 : [this.exercises[0], [Validators.required]],
        d1Sets3 : [0, [Validators.required]],
        d1Reps3 : [0, [Validators.required]],
  
        d1Ex4 : [this.exercises[0], [Validators.required]],
        d1Sets4 : [0, [Validators.required]],
        d1Reps4 : [0, [Validators.required]],
  
        d1Ex5 : [this.exercises[0], [Validators.required]],
        d1Sets5 : [0, [Validators.required]],
        d1Reps5 : [0, [Validators.required]],
      });
  
      this.day2 = this.fb.group({
  
        d2Ex1 : [this.exercises[0], [Validators.required]],
        d2Sets1 : [0, [Validators.required]],
        d2Reps1 : [0, [Validators.required]],
  
        d2Ex2 : [this.exercises[0], [Validators.required]],
        d2Sets2 : [0, [Validators.required]],
        d2Reps2 : [0, [Validators.required]],
  
        d2Ex3 : [this.exercises[0], [Validators.required]],
        d2Sets3 : [0, [Validators.required]],
        d2Reps3 : [0, [Validators.required]],
  
        d2Ex4 : [this.exercises[0], [Validators.required]],
        d2Sets4 : [0, [Validators.required]],
        d2Reps4 : [0, [Validators.required]],
  
        d2Ex5 : [this.exercises[0], [Validators.required]],
        d2Sets5 : [0, [Validators.required]],
        d2Reps5 : [0, [Validators.required]],
      });
  
      this.day3 = this.fb.group({
  
        d3Ex1 : [this.exercises[0], [Validators.required]],
        d3Sets1 : [0, [Validators.required]],
        d3Reps1 : [0, [Validators.required]],
  
        d3Ex2 : [this.exercises[0], [Validators.required]],
        d3Sets2 : [0, [Validators.required]],
        d3Reps2 : [0, [Validators.required]],
  
        d3Ex3 : [this.exercises[0], [Validators.required]],
        d3Sets3 : [0, [Validators.required]],
        d3Reps3 : [0, [Validators.required]],
  
        d3Ex4 : [this.exercises[0], [Validators.required]],
        d3Sets4 : [0, [Validators.required]],
        d3Reps4 : [0, [Validators.required]],
  
        d3Ex5 : [this.exercises[0], [Validators.required]],
        d3Sets5 : [0, [Validators.required]],
        d3Reps5 : [0, [Validators.required]],
      });
  
      this.day4 = this.fb.group({
  
        d4Ex1 : [this.exercises[0], [Validators.required]],
        d4Sets1 : [0, [Validators.required]],
        d4Reps1 : [0, [Validators.required]],
  
        d4Ex2 : [this.exercises[0], [Validators.required]],
        d4Sets2 : [0, [Validators.required]],
        d4Reps2 : [0, [Validators.required]],
  
        d4Ex3 : [this.exercises[0], [Validators.required]],
        d4Sets3 : [0, [Validators.required]],
        d4Reps3 : [0, [Validators.required]],
  
        d4Ex4 : [this.exercises[0], [Validators.required]],
        d4Sets4 : [0, [Validators.required]],
        d4Reps4 : [0, [Validators.required]],
  
        d4Ex5 : [this.exercises[0], [Validators.required]],
        d4Sets5 : [0, [Validators.required]],
        d4Reps5 : [0, [Validators.required]],
      });
  
      this.day5 = this.fb.group({
  
        d5Ex1 : [this.exercises[0], [Validators.required]],
        d5Sets1 : [0, [Validators.required]],
        d5Reps1 : [0, [Validators.required]],
  
        d5Ex2 : [this.exercises[0], [Validators.required]],
        d5Sets2 : [0, [Validators.required]],
        d5Reps2 : [0, [Validators.required]],
  
        d5Ex3 : [this.exercises[0], [Validators.required]],
        d5Sets3 : [0, [Validators.required]],
        d5Reps3 : [0, [Validators.required]],
  
        d5Ex4 : [this.exercises[0], [Validators.required]],
        d5Sets4 : [0, [Validators.required]],
        d5Reps4 : [0, [Validators.required]],
  
        d5Ex5 : [this.exercises[0], [Validators.required]],
        d5Sets5 : [0, [Validators.required]],
        d5Reps5 : [0, [Validators.required]],
      });
  
      this.day6 = this.fb.group({
  
        d6Ex1 : [this.exercises[0], [Validators.required]],
        d6Sets1 : [0, [Validators.required]],
        d6Reps1 : [0, [Validators.required]],
  
        d6Ex2 : [this.exercises[0], [Validators.required]],
        d6Sets2 : [0, [Validators.required]],
        d6Reps2 : [0, [Validators.required]],
  
        d6Ex3 : [this.exercises[0], [Validators.required]],
        d6Sets3 : [0, [Validators.required]],
        d6Reps3 : [0, [Validators.required]],
  
        d6Ex4 : [this.exercises[0], [Validators.required]],
        d6Sets4 : [0, [Validators.required]],
        d6Reps4 : [0, [Validators.required]],
  
        d6Ex5 : [this.exercises[0], [Validators.required]],
        d6Sets5 : [0, [Validators.required]],
        d6Reps5 : [0, [Validators.required]],
      });
  
      this.day7 = this.fb.group({
  
        d7Ex1 : [this.exercises[0], [Validators.required]],
        d7Sets1 : [0, [Validators.required]],
        d7Reps1 : [0, [Validators.required]],
  
        d7Ex2 : [this.exercises[0], [Validators.required]],
        d7Sets2 : [0, [Validators.required]],
        d7Reps2 : [0, [Validators.required]],
  
        d7Ex3 : [this.exercises[0], [Validators.required]],
        d7Sets3 : [0, [Validators.required]],
        d7Reps3 : [0, [Validators.required]],
  
        d7Ex4 : [this.exercises[0], [Validators.required]],
        d7Sets4 : [0, [Validators.required]],
        d7Reps4 : [0, [Validators.required]],
  
        d7Ex5 : [this.exercises[0], [Validators.required]],
        d7Sets5 : [0, [Validators.required]],
        d7Reps5 : [0, [Validators.required]],
      });
  
      this.day8 = this.fb.group({
  
        d8Ex1 : [this.exercises[0], [Validators.required]],
        d8Sets1 : [0, [Validators.required]],
        d8Reps1 : [0, [Validators.required]],
  
        d8Ex2 : [this.exercises[0], [Validators.required]],
        d8Sets2 : [0, [Validators.required]],
        d8Reps2 : [0, [Validators.required]],
  
        d8Ex3 : [this.exercises[0], [Validators.required]],
        d8Sets3 : [0, [Validators.required]],
        d8Reps3 : [0, [Validators.required]],
  
        d8Ex4 : [this.exercises[0], [Validators.required]],
        d8Sets4 : [0, [Validators.required]],
        d8Reps4 : [0, [Validators.required]],
  
        d8Ex5 : [this.exercises[0], [Validators.required]],
        d8Sets5 : [0, [Validators.required]],
        d8Reps5 : [0, [Validators.required]],
      });
  
  
      this.day9 = this.fb.group({
  
        d9Ex1 : [this.exercises[0], [Validators.required]],
        d9Sets1 : [0, [Validators.required]],
        d9Reps1 : [0, [Validators.required]],
  
        d9Ex2 : [this.exercises[0], [Validators.required]],
        d9Sets2 : [0, [Validators.required]],
        d9Reps2 : [0, [Validators.required]],
  
        d9Ex3 : [this.exercises[0], [Validators.required]],
        d9Sets3 : [0, [Validators.required]],
        d9Reps3 : [0, [Validators.required]],
  
        d9Ex4 : [this.exercises[0], [Validators.required]],
        d9Sets4 : [0, [Validators.required]],
        d9Reps4 : [0, [Validators.required]],
  
        d9Ex5 : [this.exercises[0], [Validators.required]],
        d9Sets5 : [0, [Validators.required]],
        d9Reps5 : [0, [Validators.required]],
      });
  
      this.day10 = this.fb.group({
  
        d10Ex1 : [this.exercises[0], [Validators.required]],
        d10Sets1 : [0, [Validators.required]],
        d10Reps1 : [0, [Validators.required]],
  
        d10Ex2 : [this.exercises[0], [Validators.required]],
        d10Sets2 : [0, [Validators.required]],
        d10Reps2 : [0, [Validators.required]],
  
        d10Ex3 : [this.exercises[0], [Validators.required]],
        d10Sets3 : [0, [Validators.required]],
        d10Reps3 : [0, [Validators.required]],
  
        d10Ex4 : [this.exercises[0], [Validators.required]],
        d10Sets4 : [0, [Validators.required]],
        d10Reps4 : [0, [Validators.required]],
  
        d10Ex5 : [this.exercises[0], [Validators.required]],
        d10Sets5 : [0, [Validators.required]],
        d10Reps5 : [0, [Validators.required]],
      });
  
      this.day11 = this.fb.group({
  
        d11Ex1 : [this.exercises[0], [Validators.required]],
        d11Sets1 : [0, [Validators.required]],
        d11Reps1 : [0, [Validators.required]],
  
        d11Ex2 : [this.exercises[0], [Validators.required]],
        d11Sets2 : [0, [Validators.required]],
        d11Reps2 : [0, [Validators.required]],
  
        d11Ex3 : [this.exercises[0], [Validators.required]],
        d11Sets3 : [0, [Validators.required]],
        d11Reps3 : [0, [Validators.required]],
  
        d11Ex4 : [this.exercises[0], [Validators.required]],
        d11Sets4 : [0, [Validators.required]],
        d11Reps4 : [0, [Validators.required]],
  
        d11Ex5 : [this.exercises[0], [Validators.required]],
        d11Sets5 : [0, [Validators.required]],
        d11Reps5 : [0, [Validators.required]],
      });
  
      this.day12 = this.fb.group({
  
        d12Ex1 : [this.exercises[0], [Validators.required]],
        d12Sets1 : [0, [Validators.required]],
        d12Reps1 : [0, [Validators.required]],
  
        d12Ex2 : [this.exercises[0], [Validators.required]],
        d12Sets2 : [0, [Validators.required]],
        d12Reps2 : [0, [Validators.required]],
  
        d12Ex3 : [this.exercises[0], [Validators.required]],
        d12Sets3 : [0, [Validators.required]],
        d12Reps3 : [0, [Validators.required]],
  
        d12Ex4 : [this.exercises[0], [Validators.required]],
        d12Sets4 : [0, [Validators.required]],
        d12Reps4 : [0, [Validators.required]],
  
        d12Ex5 : [this.exercises[0], [Validators.required]],
        d12Sets5 : [0, [Validators.required]],
        d12Reps5 : [0, [Validators.required]],
      });

      this.day13 = this.fb.group({
  
        d13Ex1 : [this.exercises[0], [Validators.required]],
        d13Sets1 : [0, [Validators.required]],
        d13Reps1 : [0, [Validators.required]],
  
        d13Ex2 : [this.exercises[0], [Validators.required]],
        d13Sets2 : [0, [Validators.required]],
        d13Reps2 : [0, [Validators.required]],
  
        d13Ex3 : [this.exercises[0], [Validators.required]],
        d13Sets3 : [0, [Validators.required]],
        d13Reps3 : [0, [Validators.required]],
  
        d13Ex4 : [this.exercises[0], [Validators.required]],
        d13Sets4 : [0, [Validators.required]],
        d13Reps4 : [0, [Validators.required]],
  
        d13Ex5 : [this.exercises[0], [Validators.required]],
        d13Sets5 : [0, [Validators.required]],
        d13Reps5 : [0, [Validators.required]],
      });
  
      this.day14 = this.fb.group({
  
        d14Ex1 : [this.exercises[0], [Validators.required]],
        d14Sets1 : [0, [Validators.required]],
        d14Reps1 : [0, [Validators.required]],
  
        d14Ex2 : [this.exercises[0], [Validators.required]],
        d14Sets2 : [0, [Validators.required]],
        d14Reps2 : [0, [Validators.required]],
  
        d14Ex3 : [this.exercises[0], [Validators.required]],
        d14Sets3 : [0, [Validators.required]],
        d14Reps3 : [0, [Validators.required]],
  
        d14Ex4 : [this.exercises[0], [Validators.required]],
        d14Sets4 : [0, [Validators.required]],
        d14Reps4 : [0, [Validators.required]],
  
        d14Ex5 : [this.exercises[0], [Validators.required]],
        d14Sets5 : [0, [Validators.required]],
        d14Reps5 : [0, [Validators.required]],
      });
  
      this.day15 = this.fb.group({
  
        d15Ex1 : [this.exercises[0], [Validators.required]],
        d15Sets1 : [0, [Validators.required]],
        d15Reps1 : [0, [Validators.required]],
  
        d15Ex2 : [this.exercises[0], [Validators.required]],
        d15Sets2 : [0, [Validators.required]],
        d15Reps2 : [0, [Validators.required]],
  
        d15Ex3 : [this.exercises[0], [Validators.required]],
        d15Sets3 : [0, [Validators.required]],
        d15Reps3 : [0, [Validators.required]],
  
        d15Ex4 : [this.exercises[0], [Validators.required]],
        d15Sets4 : [0, [Validators.required]],
        d15Reps4 : [0, [Validators.required]],
  
        d15Ex5 : [this.exercises[0], [Validators.required]],
        d15Sets5 : [0, [Validators.required]],
        d15Reps5 : [0, [Validators.required]],
      });


    });
  
  }

  assign(day:number,planDetailId:PlanDetailId,planDetail:PlanDetail,goal:string){
    planDetailId.day=day;
    planDetail.id=planDetailId;
    planDetail.dayDetails=goal;
    return planDetail;
  }

  handleday1(e){
    e.preventDefault();

    let day1 = this.day1.value;
    console.log(this.day1.value);
   
    this.planName=day1.planName;
    this.plan=new Plan(0,day1.planName,"WORKOUT");
    this.newPlan = new NewPlan();
    this.newPlan.Plan=this.plan;
    this.planDetail = new PlanDetail();
    this.planDetail.plan=this.plan;
    this.planDetailId = new PlanDetailId();
    this.planDetailId.planId=this.plan.planId;
    let goal = day1.d1Ex1.exId+","+day1.d1Sets1+","+day1.d1Reps1+";";
    goal+=day1.d1Ex2.exId+","+day1.d1Sets2+","+day1.d1Reps2+";";
    goal+=day1.d1Ex3.exId+","+day1.d1Sets3+","+day1.d1Reps3+";";
    goal+=day1.d1Ex4.exId+","+day1.d1Sets4+","+day1.d1Reps4+";";
    goal+=day1.d1Ex5.exId+","+day1.d1Sets5+","+day1.d1Reps5+";";
    this.newPlan.planDetails.push(this.assign(1,this.planDetailId,this.planDetail, goal ));
    console.log(this.newPlan);
    this.index+=1;
  }

  handleday2(e){
    e.preventDefault();
    let day2 = this.day2.value;
    console.log(day2);
   
    this.plan=new Plan(0,this.planName,"WORKOUT");
    this.newPlan.Plan=this.plan;
    this.planDetail = new PlanDetail();
    this.planDetail.plan=this.plan;
    this.planDetailId = new PlanDetailId();
    this.planDetailId.planId=this.plan.planId;
    let goal = day2.d2Ex1.exId+","+day2.d2Sets1+","+day2.d2Reps1+";";
    goal+=day2.d2Ex2.exId+","+day2.d2Sets2+","+day2.d2Reps2+";";
    goal+=day2.d2Ex3.exId+","+day2.d2Sets3+","+day2.d2Reps3+";";
    goal+=day2.d2Ex4.exId+","+day2.d2Sets4+","+day2.d2Reps4+";";
    goal+=day2.d2Ex5.exId+","+day2.d2Sets5+","+day2.d2Reps5+";";
    this.newPlan.planDetails.push(this.assign(2,this.planDetailId,this.planDetail, goal ));
    console.log(this.newPlan);
    this.index+=1;
  }

  handleday3(e){
    e.preventDefault();
    let day = this.day3.value;
    console.log(day);
    this.plan=new Plan(0,this.planName,"WORKOUT");
    this.newPlan.Plan=this.plan;
    this.planDetail = new PlanDetail();
    this.planDetail.plan=this.plan;
    this.planDetailId = new PlanDetailId();
    this.planDetailId.planId=this.plan.planId;
    let goal = day.d3Ex1.exId+","+day.d3Sets1+","+day.d3Reps1+";";
    goal+=day.d3Ex2.exId+","+day.d3Sets2+","+day.d3Reps2+";";
    goal+=day.d3Ex3.exId+","+day.d3Sets3+","+day.d3Reps3+";";
    goal+=day.d3Ex4.exId+","+day.d3Sets4+","+day.d3Reps4+";";
    goal+=day.d3Ex5.exId+","+day.d3Sets5+","+day.d3Reps5+";";
    this.newPlan.planDetails.push(this.assign(3,this.planDetailId,this.planDetail, goal ));
    console.log(this.newPlan);
    this.index+=1;
  }
  handleday4(e){
    e.preventDefault();
    let day = this.day4.value;
    console.log(day);
    this.plan=new Plan(0,this.planName,"WORKOUT");
    this.newPlan.Plan=this.plan;
    this.planDetail = new PlanDetail();
    this.planDetail.plan=this.plan;
    this.planDetailId = new PlanDetailId();
    this.planDetailId.planId=this.plan.planId;
    let goal = day.d4Ex1.exId+","+day.d4Sets1+","+day.d4Reps1+";";
    goal+=day.d4Ex2.exId+","+day.d4Sets2+","+day.d4Reps2+";";
    goal+=day.d4Ex3.exId+","+day.d4Sets3+","+day.d4Reps3+";";
    goal+=day.d4Ex4.exId+","+day.d4Sets4+","+day.d4Reps4+";";
    goal+=day.d4Ex5.exId+","+day.d4Sets5+","+day.d4Reps5+";";
    this.newPlan.planDetails.push(this.assign(4,this.planDetailId,this.planDetail, goal ));
    console.log(this.newPlan);
    this.index+=1;
  }
  handleday5(e){
    e.preventDefault();
    let day = this.day5.value;
    console.log(day);
    this.plan=new Plan(0,this.planName,"WORKOUT");
    this.newPlan.Plan=this.plan;
    this.planDetail = new PlanDetail();
    this.planDetail.plan=this.plan;
    this.planDetailId = new PlanDetailId();
    this.planDetailId.planId=this.plan.planId;
    let goal = day.d5Ex1.exId+","+day.d5Sets1+","+day.d5Reps1+";";
    goal+=day.d5Ex2.exId+","+day.d5Sets2+","+day.d5Reps2+";";
    goal+=day.d5Ex3.exId+","+day.d5Sets3+","+day.d5Reps3+";";
    goal+=day.d5Ex4.exId+","+day.d5Sets4+","+day.d5Reps4+";";
    goal+=day.d5Ex5.exId+","+day.d5Sets5+","+day.d5Reps5+";";
    this.newPlan.planDetails.push(this.assign(5,this.planDetailId,this.planDetail, goal ));
    console.log(this.newPlan);
    this.index+=1;
  }
  handleday6(e){
    e.preventDefault();
    let day = this.day6.value;
    console.log(day);
    this.plan=new Plan(0,this.planName,"WORKOUT");
    this.newPlan.Plan=this.plan;
    this.planDetail = new PlanDetail();
    this.planDetail.plan=this.plan;
    this.planDetailId = new PlanDetailId();
    this.planDetailId.planId=this.plan.planId;
    let goal = day.d6Ex1.exId+","+day.d6Sets1+","+day.d6Reps1+";";
    goal+=day.d6Ex2.exId+","+day.d6Sets2+","+day.d6Reps2+";";
    goal+=day.d6Ex3.exId+","+day.d6Sets3+","+day.d6Reps3+";";
    goal+=day.d6Ex4.exId+","+day.d6Sets4+","+day.d6Reps4+";";
    goal+=day.d6Ex5.exId+","+day.d6Sets5+","+day.d6Reps5+";";
    this.newPlan.planDetails.push(this.assign(6,this.planDetailId,this.planDetail, goal ));
    console.log(this.newPlan);
    
    this.index+=1;
  }
  handleday7(e){
    e.preventDefault();
   
    let day = this.day7.value;
    console.log(day);
    this.plan=new Plan(0,this.planName,"WORKOUT");
    this.newPlan.Plan=this.plan;
    this.planDetail = new PlanDetail();
    this.planDetail.plan=this.plan;
    this.planDetailId = new PlanDetailId();
    this.planDetailId.planId=this.plan.planId;
    let goal = day.d7Ex1.exId+","+day.d7Sets1+","+day.d7Reps1+";";
    goal+=day.d7Ex2.exId+","+day.d7Sets2+","+day.d7Reps2+";";
    goal+=day.d7Ex3.exId+","+day.d7Sets3+","+day.d7Reps3+";";
    goal+=day.d7Ex4.exId+","+day.d7Sets4+","+day.d7Reps4+";";
    goal+=day.d7Ex5.exId+","+day.d7Sets5+","+day.d7Reps5+";";
    this.newPlan.planDetails.push(this.assign(7,this.planDetailId,this.planDetail, goal ));
    console.log(this.newPlan);
    
    this.index+=1;
  }
  handleday8(e){
    e.preventDefault();
  
    let day = this.day8.value;
    console.log(day);
    this.plan=new Plan(0,this.planName,"WORKOUT");
    this.newPlan.Plan=this.plan;
    this.planDetail = new PlanDetail();
    this.planDetail.plan=this.plan;
    this.planDetailId = new PlanDetailId();
    this.planDetailId.planId=this.plan.planId;
    let goal = day.d8Ex1.exId+","+day.d8Sets1+","+day.d8Reps1+";";
    goal+=day.d8Ex2.exId+","+day.d8Sets2+","+day.d8Reps2+";";
    goal+=day.d8Ex3.exId+","+day.d8Sets3+","+day.d8Reps3+";";
    goal+=day.d8Ex4.exId+","+day.d8Sets4+","+day.d8Reps4+";";
    goal+=day.d8Ex5.exId+","+day.d8Sets5+","+day.d8Reps5+";";
    this.newPlan.planDetails.push(this.assign(8,this.planDetailId,this.planDetail, goal ));
    console.log(this.newPlan);
    this.index+=1;
  }
  handleday9(e){
    e.preventDefault();
    let day = this.day9.value;
    console.log(day);
    this.plan=new Plan(0,this.planName,"WORKOUT");
    this.newPlan.Plan=this.plan;
    this.planDetail = new PlanDetail();
    this.planDetail.plan=this.plan;
    this.planDetailId = new PlanDetailId();
    this.planDetailId.planId=this.plan.planId;
    let goal = day.d9Ex1.exId+","+day.d9Sets1+","+day.d9Reps1+";";
    goal+=day.d9Ex2.exId+","+day.d9Sets2+","+day.d9Reps2+";";
    goal+=day.d9Ex3.exId+","+day.d9Sets3+","+day.d9Reps3+";";
    goal+=day.d9Ex4.exId+","+day.d9Sets4+","+day.d9Reps4+";";
    goal+=day.d9Ex5.exId+","+day.d9Sets5+","+day.d9Reps5+";";
    this.newPlan.planDetails.push(this.assign(9,this.planDetailId,this.planDetail, goal ));
    console.log(this.newPlan);
    this.index+=1;
  }
  handleday10(e){
    e.preventDefault();
    let day = this.day10.value;
    console.log(day);
    this.plan=new Plan(0,this.planName,"WORKOUT");
    this.newPlan.Plan=this.plan;
    this.planDetail = new PlanDetail();
    this.planDetail.plan=this.plan;
    this.planDetailId = new PlanDetailId();
    this.planDetailId.planId=this.plan.planId;
    let goal = day.d10Ex1.exId+","+day.d10Sets1+","+day.d10Reps1+";";
    goal+=day.d10Ex2.exId+","+day.d10Sets2+","+day.d10Reps2+";";
    goal+=day.d10Ex3.exId+","+day.d10Sets3+","+day.d10Reps3+";";
    goal+=day.d10Ex4.exId+","+day.d10Sets4+","+day.d10Reps4+";";
    goal+=day.d10Ex5.exId+","+day.d10Sets5+","+day.d10Reps5+";";
    this.newPlan.planDetails.push(this.assign(10,this.planDetailId,this.planDetail, goal ));
    console.log(this.newPlan);
    this.index+=1;
  }
  handleday11(e){
    e.preventDefault();
    let day = this.day11.value;
    console.log(day);
    this.plan=new Plan(0,this.planName,"WORKOUT");
    this.newPlan.Plan=this.plan;
    this.planDetail = new PlanDetail();
    this.planDetail.plan=this.plan;
    this.planDetailId = new PlanDetailId();
    this.planDetailId.planId=this.plan.planId;
    let goal = day.d11Ex1.exId+","+day.d11Sets1+","+day.d11Reps1+";";
    goal+=day.d11Ex2.exId+","+day.d11Sets2+","+day.d11Reps2+";";
    goal+=day.d11Ex3.exId+","+day.d11Sets3+","+day.d11Reps3+";";
    goal+=day.d11Ex4.exId+","+day.d11Sets4+","+day.d11Reps4+";";
    goal+=day.d11Ex5.exId+","+day.d11Sets5+","+day.d11Reps5+";";
    this.newPlan.planDetails.push(this.assign(11,this.planDetailId,this.planDetail, goal ));
    console.log(this.newPlan);
    this.index+=1;
  }
  handleday12(e){
    e.preventDefault();
   
    let day = this.day12.value;
    console.log(day);
    this.plan=new Plan(0,this.planName,"WORKOUT");
    this.newPlan.Plan=this.plan;
    this.planDetail = new PlanDetail();
    this.planDetail.plan=this.plan;
    this.planDetailId = new PlanDetailId();
    this.planDetailId.planId=this.plan.planId;
    let goal = day.d12Ex1.exId+","+day.d12Sets1+","+day.d12Reps1+";";
    goal+=day.d12Ex2.exId+","+day.d12Sets2+","+day.d12Reps2+";";
    goal+=day.d12Ex3.exId+","+day.d12Sets3+","+day.d12Reps3+";";
    goal+=day.d12Ex4.exId+","+day.d12Sets4+","+day.d12Reps4+";";
    goal+=day.d12Ex5.exId+","+day.d12Sets5+","+day.d12Reps5+";";
    this.newPlan.planDetails.push(this.assign(12,this.planDetailId,this.planDetail, goal ));
    console.log(this.newPlan);
    this.index+=1;
  }
  handleday13(e){
    e.preventDefault();
   
    let day = this.day13.value;
    console.log(day);
    this.plan=new Plan(0,this.planName,"WORKOUT");
    this.newPlan.Plan=this.plan;
    this.planDetail = new PlanDetail();
    this.planDetail.plan=this.plan;
    this.planDetailId = new PlanDetailId();
    this.planDetailId.planId=this.plan.planId;
    let goal = day.d13Ex1.exId+","+day.d13Sets1+","+day.d13Reps1+";";
    goal+=day.d13Ex2.exId+","+day.d13Sets2+","+day.d13Reps2+";";
    goal+=day.d13Ex3.exId+","+day.d13Sets3+","+day.d13Reps3+";";
    goal+=day.d13Ex4.exId+","+day.d13Sets4+","+day.d13Reps4+";";
    goal+=day.d13Ex5.exId+","+day.d13Sets5+","+day.d13Reps5+";";
    this.newPlan.planDetails.push(this.assign(13,this.planDetailId,this.planDetail, goal ));
    console.log(this.newPlan);
    this.index+=1;
  }
  handleday14(e){
    e.preventDefault();
   
    let day = this.day14.value;
    console.log(day);
    this.plan=new Plan(0,this.planName,"WORKOUT");
    this.newPlan.Plan=this.plan;
    this.planDetail = new PlanDetail();
    this.planDetail.plan=this.plan;
    this.planDetailId = new PlanDetailId();
    this.planDetailId.planId=this.plan.planId;
    let goal = day.d14Ex1.exId+","+day.d14Sets1+","+day.d14Reps1+";";
    goal+=day.d14Ex2.exId+","+day.d14Sets2+","+day.d14Reps2+";";
    goal+=day.d14Ex3.exId+","+day.d14Sets3+","+day.d14Reps3+";";
    goal+=day.d14Ex4.exId+","+day.d14Sets4+","+day.d14Reps4+";";
    goal+=day.d14Ex5.exId+","+day.d14Sets5+","+day.d14Reps5+";";
    this.newPlan.planDetails.push(this.assign(14,this.planDetailId,this.planDetail, goal ));
    console.log(this.newPlan);
    this.index+=1;
  }
  handleday15(e){
    e.preventDefault();

    let day = this.day15.value;
    console.log(day);
    this.plan=new Plan(0,this.planName,"WORKOUT");
    this.newPlan.Plan=this.plan;
    this.planDetail = new PlanDetail();
    this.planDetail.plan=this.plan;
    this.planDetailId = new PlanDetailId();
    this.planDetailId.planId=this.plan.planId;
    let goal = day.d15Ex1.exId+","+day.d15Sets1+","+day.d15Reps1+";";
    goal+=day.d15Ex2.exId+","+day.d15Sets2+","+day.d15Reps2+";";
    goal+=day.d15Ex3.exId+","+day.d15Sets3+","+day.d15Reps3+";";
    goal+=day.d15Ex4.exId+","+day.d15Sets4+","+day.d15Reps4+";";
    goal+=day.d15Ex5.exId+","+day.d15Sets5+","+day.d15Reps5+";";
    this.newPlan.planDetails.push(this.assign(15,this.planDetailId,this.planDetail, goal ));
    console.log(this.newPlan);

    this.adminService.createNewPreset(this.newPlan,this.adminDataStorageService.getAdmin().adminId).subscribe((status:boolean)=>{
      console.log(status);
      if(status==true){
         this.status=status;
         this.statusString="Plan Created Successfully";
         this.day1.reset();
         this.day2.reset();
         this.day3.reset();
         this.day4.reset();
         this.day5.reset();
         this.day6.reset();
         this.day7.reset();
         this.day8.reset();
         this.day9.reset();
         this.day10.reset();
         this.day11.reset();
         this.day12.reset();
         this.day13.reset();
         this.day14.reset();
         this.day15.reset();
         
      }else{
        this.status=status;
        this.statusString="Plan Creation Unsuccessful";
      }

      this.index=0;
    });
  }
}
