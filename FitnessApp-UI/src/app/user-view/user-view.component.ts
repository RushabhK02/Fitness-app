import { Component, OnInit } from '@angular/core';
import { UserDataStorageService } from '../user-data-storage.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css'],

})
export class UserViewComponent implements OnInit {

  user: User = null;
  exercise: Array<string> = [];
  exercise1: Array<string> = [];
  exercise2: Array<string> = [];
  exercise3: Array<string> = [];
  exercise4: Array<string> = [];
  exercise5: Array<string> = [];
  diet:string;
  entered: boolean = false;

  constructor(private userDataStorageService: UserDataStorageService,
    private userService: UserService) { }

  ngOnInit() {
    this.user = this.userDataStorageService.getUser();
    console.log();
    let date = new Date(Date.now());
    let currPlanStartDate = new Date(this.user.currPlanStartDate);
    let daysBetween: number = this.days_between(date, currPlanStartDate);
    this.userDataStorageService.setDay(daysBetween);
    this.userService.viewCurrentPlan(this.user.userId, "workout").subscribe(workoutPlan => {
      console.log(workoutPlan);
      let dayDetail = workoutPlan[daysBetween];
      this.exercise = dayDetail.dayDetails.split(";");
      this.exercise1 = this.exercise[0].split(",");
      this.exercise2 = this.exercise[1].split(",");
      this.exercise3 = this.exercise[2].split(",");
      this.exercise4 = this.exercise[3].split(",");
      this.exercise5 = this.exercise[4].split(",");
      this.userService.getExerciseInfo(this.user.userId, this.exercise1[0]).subscribe(ex => {
        this.exercise1[0] = ex['exName'];
        this.userDataStorageService.addExercise(this.exercise1);
      });
      this.userService.getExerciseInfo(this.user.userId, this.exercise2[0]).subscribe(ex => {
        this.exercise2[0] = ex['exName'];
        this.userDataStorageService.addExercise(this.exercise2);
      });
      this.userService.getExerciseInfo(this.user.userId, this.exercise3[0]).subscribe(ex => {
        this.exercise3[0] = ex['exName'];
        this.userDataStorageService.addExercise(this.exercise3);
      });
      this.userService.getExerciseInfo(this.user.userId, this.exercise4[0]).subscribe(ex => {
        this.exercise4[0] = ex['exName'];
        this.userDataStorageService.addExercise(this.exercise4);
      });
      this.userService.getExerciseInfo(this.user.userId, this.exercise5[0]).subscribe(ex => {
        this.exercise5[0] = ex['exName'];  
        this.userDataStorageService.addExercise(this.exercise5);
      });

    });

    this.userService.viewCurrentPlan(this.user.userId, "diet").subscribe(dietPlan => {
      console.log(dietPlan);
      let dayDetail = dietPlan[daysBetween];
      this.diet=dayDetail.dayDetails;
      console.log(this.diet);
      this.userDataStorageService.setCalorieIntake(this.diet);
    });
  }

  days_between(date1, date2) {

    // The number of milliseconds in one day
    var ONE_DAY = 1000 * 60 * 60 * 24

    // Convert both dates to milliseconds
    var date1_ms = date1.getTime()
    var date2_ms = date2.getTime()

    // Calculate the difference in milliseconds
    var difference_ms = Math.abs(date1_ms - date2_ms)

    // Convert back to days and return
    return Math.round(difference_ms / ONE_DAY)

  }

}
