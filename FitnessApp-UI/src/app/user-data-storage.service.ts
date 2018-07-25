
import { Injectable } from '@angular/core';
import { User } from './user';
import { Plan } from './plan';

// Storage.prototype.setObj = function(key, obj) {
//   return this.setItem(key, JSON.stringify(obj))
// }
// Storage.prototype.getObj = function(key) {
//   return JSON.parse(this.getItem(key))
// }


@Injectable({
  providedIn: 'root'
})
export class UserDataStorageService {
  public data:any=[];
  private user:User=null;
  private currentExercises:Array<Array<string>>=new Array<Array<string>>();
  private currentCalorieIntake: string;
  private currDay:number;
  private calorieUpdated:boolean=false;
  private actualCalorie:number=0;
  // private workoutEnter1:boolean = false;
  // private workoutEnter2:boolean = false;
  // private workoutEnter3:boolean = false;
  // private workoutEnter4:boolean = false;
  // private workoutEnter5:boolean = false;

  workoutEnter1:boolean = false;
  workoutEnter2:boolean = false;
  workoutEnter3:boolean = false;
  workoutEnter4:boolean = false;
  workoutEnter5:boolean = false;

  constructor() {
   }

   saveInLocal(key, val): void {
    console.log('recieved= key:' + key + 'value:' + val);
    localStorage.setItem(key,JSON.stringify(val));
    console.log(JSON.parse(localStorage.getItem(key)));
    this.data[key]= localStorage.getItem(key);
   }

   getFromLocal(key): any {
    console.log('recieved= key:' + key);
    return JSON.parse(localStorage.getItem(key));
   }

   clear(){
     localStorage.clear();
   }

   setActualCalorie(actualCalorie:number){
    this.actualCalorie = actualCalorie;
    // this.saveInLocal("actualCalorie",actualCalorie);
   }

   getActualCalorie(){
    return this.actualCalorie;
    // return this.getFromLocal("actualCalorie");
  }

   setDay(day:number){
    // this.saveInLocal("currDay",day);
    this.currDay=day;
   }

   getDay(){
    //  return this.getFromLocal(this.currDay);
     return this.currDay;
   }

   setCalorieUpdated(calorieUpdated:boolean){
    this.calorieUpdated=calorieUpdated;
    // this.saveInLocal("calorieUpdated",calorieUpdated);
   }

   getCalorieUpdated(){
    // return this.getFromLocal("calorieUpdated");
    return this.calorieUpdated;
  }

  // setWorkoutEnter1(workoutEnter1){
  //   this.workoutEnter1=workoutEnter1;
  //   this.saveInLocal("workoutEnter1",workoutEnter1);
  // }

  // getWorkoutEnter1(){
  //    //return this.workoutEnter1;
  //    return this.getFromLocal("workoutEnter1");
  // }

  // setWorkoutEnter2(workoutEnter2){
  //   this.workoutEnter2=workoutEnter2;
  //   this.saveInLocal("workoutEnter2",workoutEnter2);
  // }

  // getWorkoutEnter2(){
  //   //return this.workoutEnter2;
  //   return this.getFromLocal("workoutEnter2");
  // }

  // setWorkoutEnter3(workoutEnter3){
  //   this.workoutEnter3=workoutEnter3;
  //   this.saveInLocal("workoutEnter3",workoutEnter3);
  // }

  // getWorkoutEnter3(){
  //   //return this.workoutEnter3;
  //   return this.getFromLocal("workoutEnter3");
  // }

  // setWorkoutEnter4(workoutEnter4){
  //   this.workoutEnter4=workoutEnter4;
  //   this.saveInLocal("workoutEnter4",workoutEnter4);
  // }

  // getWorkoutEnter4(){
  //   //return this.workoutEnter4;
  //   return this.getFromLocal("workoutEnter4");
  // }

  // setWorkoutEnter5(workoutEnter5){
  //   this.workoutEnter5=workoutEnter5;
  //   this.saveInLocal("workoutEnter5",workoutEnter5);
  // }

  // getWorkoutEnter5(){
  //   //return this.workoutEnter5;
  //   return this.getFromLocal("workoutEnter5");
  // }


  setUser(user){
    this.user = new User(user.age,user.currPlanStartDate,user.firstName,user.heightCms,
                                  user.lastName,user.userId,user.username,user.weightKgs);
    // this.saveInLocal("user",JSON.stringify(user));
   }
   setPlans(dietPlan:Plan, workoutPlan: Plan){
    //  let user:User = JSON.parse(this.getFromLocal("user"));
    //  user.currentDietPlan=dietPlan;
    //  user.currentWorkoutPlan=workoutPlan;
    //  this.saveInLocal("user",user);
     this.user.setDietPlan(dietPlan);
     this.user.setWorkouttPlan(workoutPlan);
   }
   getUser(){
    //  return this.getFromLocal("user");
     return this.user;
   }
   addExercise(exercise:Array<string>){
      this.currentExercises.push(exercise);
      // this.saveInLocal("currentExercises",this.currentExercises);
   }
   setCalorieIntake(calorieIntake:string){
    //  this.saveInLocal("currentCalorieIntake",calorieIntake)
    this.currentCalorieIntake= calorieIntake;
   }
   getCurrentExercises(){
    //  return this.getFromLocal("currentExercises");
     return this.currentExercises;
   }
   getCalorieIntake(){
    //  return this.getFromLocal("currentCalorieIntake");
     return this.currentCalorieIntake;
   }
}
