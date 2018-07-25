import { Plan } from "./plan";

export class User {
age:number;
currPlanStartDate:string;
firstName:string;
heightCms:number;
lastName:string;
userId:number;
username:string;
weightKgs:number;
currentDietPlan: Plan=null;
currentWorkoutPlan: Plan=null;


constructor(age:number,currPlanStartDate:string,firstName:string,heightCms:number,
    lastName:string,userId:number,username:string,weightKgs:number){
        this.age = age;
        this.currPlanStartDate=currPlanStartDate;
        this.firstName=firstName;
        this.lastName=lastName;
        this.heightCms=heightCms;
        this.userId = userId;
        this.username = username;
        this.weightKgs = weightKgs;
}
setDietPlan(dietPlan:Plan){
    this.currentDietPlan=dietPlan;
}
setWorkouttPlan(workoutPlan:Plan){
    this.currentWorkoutPlan=workoutPlan;
}

}
