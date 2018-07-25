import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Plan } from '../plan';
import { NewPlan } from '../new-plan';
import { PlanDetail } from '../plan-detail';
import { PlanDetailId } from '../plan-detail-id';
import { AdminService } from '../admin.service';
import { AdminDataStorageService } from '../admin-data-storage.service';

@Component({
  selector: 'app-create-diet',
  templateUrl: './create-diet.component.html',
  styleUrls: ['./create-diet.component.css']
})
export class CreateDietComponent implements OnInit {
  
  index: number = 0;
  day1TOday7 : FormGroup;
  day8TOday15 : FormGroup;
  plan:Plan=null;
  newPlan:NewPlan=null;
  planDetail:PlanDetail=null;
  planDetailId:PlanDetailId=null;
  statusString:string="Not yet created";
  status:boolean=false;
  planName:string = "";

  constructor(private fb : FormBuilder, private adminService:AdminService, private adminDataStorageService:AdminDataStorageService) {}

  ngOnInit() {
    this.day1TOday7 = this.fb.group({

      d1goal : [1000, [Validators.required]],
      d2goal : [1000, [Validators.required]],
      d3goal : [1000, [Validators.required]],
      d4goal : [1000, [Validators.required]],
      d5goal : [1000, [Validators.required]],
      d6goal : [1000, [Validators.required]],
      d7goal : [1000, [Validators.required]],
      name : ["Plan Name", [Validators.required]]
    })

    this.day8TOday15 = this.fb.group({

      d8goal : [1000, [Validators.required]],
      d9goal : [1000, [Validators.required]],
      d10goal : [1000, [Validators.required]],
      d11goal : [1000, [Validators.required]],
      d12goal : [1000, [Validators.required]],
      d13goal : [1000, [Validators.required]],
      d14goal : [1000, [Validators.required]],
      d15goal : [1000, [Validators.required]],

    })
  }

  handleWeek1(e){
     e.preventDefault();
     let day1TOday7 = this.day1TOday7.value;
     console.log(this.day1TOday7.value);
    
     this.planName=day1TOday7.name;
     this.plan=new Plan(0,day1TOday7.name,"DIET");
     this.newPlan = new NewPlan();
     this.newPlan.Plan=this.plan;
     this.planDetail = new PlanDetail();
     this.planDetail.plan=this.plan;
     this.planDetailId = new PlanDetailId();
     this.planDetailId.planId=this.plan.planId;
     this.newPlan.planDetails.push(this.assign(1,this.planDetailId,this.planDetail,day1TOday7.d1goal));

     this.plan=new Plan(0,day1TOday7.name,"DIET");
     this.newPlan.Plan=this.plan;
     this.planDetail = new PlanDetail();
     this.planDetail.plan=this.plan;
     this.planDetailId = new PlanDetailId();
     this.planDetailId.planId=this.plan.planId;
     this.newPlan.planDetails.push(this.assign(2,this.planDetailId,this.planDetail,day1TOday7.d2goal));
    
     this.plan=new Plan(0,day1TOday7.name,"DIET");
     this.newPlan.Plan=this.plan;
     this.planDetail = new PlanDetail();
     this.planDetail.plan=this.plan;
     this.planDetailId = new PlanDetailId();
     this.planDetailId.planId=this.plan.planId;
     this.newPlan.planDetails.push(this.assign(3,this.planDetailId,this.planDetail,day1TOday7.d3goal));
     
     this.plan=new Plan(0,day1TOday7.name,"DIET");
     this.newPlan.Plan=this.plan;
     this.planDetail = new PlanDetail();
     this.planDetail.plan=this.plan;
     this.planDetailId = new PlanDetailId();
     this.planDetailId.planId=this.plan.planId;
     this.newPlan.planDetails.push(this.assign(4,this.planDetailId,this.planDetail,day1TOday7.d4goal));
     
     this.plan=new Plan(0,day1TOday7.name,"DIET");
     this.newPlan.Plan=this.plan;
     this.planDetail = new PlanDetail();
     this.planDetail.plan=this.plan;
     this.planDetailId = new PlanDetailId();
     this.planDetailId.planId=this.plan.planId;
     this.newPlan.planDetails.push(this.assign(5,this.planDetailId,this.planDetail,day1TOday7.d5goal));
     
     this.plan=new Plan(0,day1TOday7.name,"DIET");
     this.newPlan.Plan=this.plan;
     this.planDetail = new PlanDetail();
     this.planDetail.plan=this.plan;
     this.planDetailId = new PlanDetailId();
     this.planDetailId.planId=this.plan.planId;
     this.newPlan.planDetails.push(this.assign(6,this.planDetailId,this.planDetail,day1TOday7.d6goal));
    
     this.plan=new Plan(0,day1TOday7.name,"DIET");
     this.newPlan.Plan=this.plan;
     this.planDetail = new PlanDetail();
     this.planDetail.plan=this.plan;
     this.planDetailId = new PlanDetailId();
     this.planDetailId.planId=this.plan.planId;
     this.newPlan.planDetails.push(this.assign(7,this.planDetailId,this.planDetail,day1TOday7.d7goal));

     this.index+=1; 
  }

  assign(day:number,planDetailId:PlanDetailId,planDetail:PlanDetail,goal:number){
    planDetailId.day=day;
    planDetail.id=planDetailId;
    planDetail.dayDetails=String(goal);
    return planDetail;
  }

  handleWeek2(e){
    e.preventDefault();
    let day8TOday15 = this.day8TOday15.value;
    console.log(this.day8TOday15.value);

    this.plan=new Plan(0,this.planName,"DIET");
    this.newPlan.Plan=this.plan;
    this.planDetail = new PlanDetail();
    this.planDetail.plan=this.plan;
    this.planDetailId = new PlanDetailId();
    this.planDetailId.planId=this.plan.planId;
    this.newPlan.planDetails.push(this.assign(8,this.planDetailId,this.planDetail,day8TOday15.d8goal));
   
    this.plan=new Plan(0,this.planName,"DIET");
    this.newPlan.Plan=this.plan;
    this.planDetail = new PlanDetail();
    this.planDetail.plan=this.plan;
    this.planDetailId = new PlanDetailId();
    this.planDetailId.planId=this.plan.planId;
    this.newPlan.planDetails.push(this.assign(9,this.planDetailId,this.planDetail,day8TOday15.d9goal));
   
    this.plan=new Plan(0,this.planName,"DIET");
    this.newPlan.Plan=this.plan;
    this.planDetail = new PlanDetail();
    this.planDetail.plan=this.plan;
    this.planDetailId = new PlanDetailId();
    this.planDetailId.planId=this.plan.planId;
    this.newPlan.planDetails.push(this.assign(10,this.planDetailId,this.planDetail,day8TOday15.d10goal));
   
    this.plan=new Plan(0,this.planName,"DIET");
    this.newPlan.Plan=this.plan;
    this.planDetail = new PlanDetail();
    this.planDetail.plan=this.plan;
    this.planDetailId = new PlanDetailId();
    this.planDetailId.planId=this.plan.planId;
    this.newPlan.planDetails.push(this.assign(11,this.planDetailId,this.planDetail,day8TOday15.d11goal));
   
    this.plan=new Plan(0,this.planName,"DIET");
     this.newPlan.Plan=this.plan;
     this.planDetail = new PlanDetail();
     this.planDetail.plan=this.plan;
     this.planDetailId = new PlanDetailId();
     this.planDetailId.planId=this.plan.planId;
    this.newPlan.planDetails.push(this.assign(12,this.planDetailId,this.planDetail,day8TOday15.d12goal));
    
    this.plan=new Plan(0,this.planName,"DIET");
     this.newPlan.Plan=this.plan;
     this.planDetail = new PlanDetail();
     this.planDetail.plan=this.plan;
     this.planDetailId = new PlanDetailId();
     this.planDetailId.planId=this.plan.planId;
    this.newPlan.planDetails.push(this.assign(13,this.planDetailId,this.planDetail,day8TOday15.d13goal));
    
    this.plan=new Plan(0,this.planName,"DIET");
     this.newPlan.Plan=this.plan;
     this.planDetail = new PlanDetail();
     this.planDetail.plan=this.plan;
     this.planDetailId = new PlanDetailId();
     this.planDetailId.planId=this.plan.planId;
    this.newPlan.planDetails.push(this.assign(14,this.planDetailId,this.planDetail,day8TOday15.d14goal));
   
    this.plan=new Plan(0,this.planName,"DIET");
     this.newPlan.Plan=this.plan;
     this.planDetail = new PlanDetail();
     this.planDetail.plan=this.plan;
     this.planDetailId = new PlanDetailId();
     this.planDetailId.planId=this.plan.planId;
    this.newPlan.planDetails.push(this.assign(15,this.planDetailId,this.planDetail,day8TOday15.d15goal));

    console.log(this.newPlan);
    this.adminService.createNewPreset(this.newPlan,this.adminDataStorageService.getAdmin().adminId).subscribe((status:boolean)=>{
      console.log(status);
      if(status==true){
         this.status=status;
         this.statusString="Plan Created Successfully";
         this.day1TOday7.reset();
         this.day8TOday15.reset();
      }else{
        this.status=status;
        this.statusString="Plan Creation Unsuccessful";
      }
    });

 }

}
