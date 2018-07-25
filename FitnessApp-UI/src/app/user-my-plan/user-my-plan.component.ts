import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserDataStorageService } from '../user-data-storage.service';
import { User } from '../user';

@Component({
  selector: 'app-user-my-plan',
  templateUrl: './user-my-plan.component.html',
  styleUrls: ['./user-my-plan.component.css']
})
export class UserMyPlanComponent implements OnInit {

  user: User;
  clicked:boolean=false;
  myPlan: {
    day: number,
    exercise: string,
    sets: number,
    reps: number,
    calories: number
  }[];

  constructor(private userDataStorageService: UserDataStorageService,
    private userService: UserService) { }

  ngOnInit() {
    this.clicked=false;
    this.myPlan=[];
    this.user = this.userDataStorageService.getUser();
    this.userService.viewCurrentPlan(this.user.userId, "workout").subscribe(workoutPlan => {
      this.userService.viewCurrentPlan(this.user.userId, "diet").subscribe(dietPlan => {
        for (let i = 0; i < 15; i++) {
          console.log(i);
          let workoutDayDetail = workoutPlan[i];
          let day = workoutDayDetail.id.day;
          let exercise = workoutDayDetail.dayDetails.split(";");
          let exercise1 = exercise[0].split(",");
          let exercise2 = exercise[1].split(",");
          let exercise3 = exercise[2].split(",");
          let exercise4 = exercise[3].split(",");
          let exercise5 = exercise[4].split(",");
          this.userService.getExerciseInfo(this.user.userId, exercise1[0]).subscribe(ex => {
            exercise1[0] = ex['exName'];
            this.userService.getExerciseInfo(this.user.userId, exercise2[0]).subscribe(ex => {
              exercise2[0] = ex['exName'];
              this.userService.getExerciseInfo(this.user.userId, exercise3[0]).subscribe(ex => {
                exercise3[0] = ex['exName'];
                this.userService.getExerciseInfo(this.user.userId, exercise4[0]).subscribe(ex => {
                  exercise4[0] = ex['exName'];
                  this.userService.getExerciseInfo(this.user.userId, exercise5[0]).subscribe(ex => {
                    exercise5[0] = ex['exName'];
                    let dietDayDetail = dietPlan[i];
                    let diet = dietDayDetail.dayDetails;
                    this.myPlan.push({
                      day: day,
                      exercise: exercise1[0],
                      sets: exercise1[1],
                      reps: exercise1[2],
                      calories: diet
                    })
                    this.myPlan.push({
                      day: day,
                      exercise: exercise2[0],
                      sets: exercise2[1],
                      reps: exercise2[2],
                      calories: diet
                    })
                    this.myPlan.push({
                      day: day,
                      exercise: exercise3[0],
                      sets: exercise3[1],
                      reps: exercise3[2],
                      calories: diet
                    })
                    this.myPlan.push({
                      day: day,
                      exercise: exercise4[0],
                      sets: exercise4[1],
                      reps: exercise4[2],
                      calories: diet
                    })
                    this.myPlan.push({
                      day: day,
                      exercise: exercise5[0],
                      sets: exercise5[1],
                      reps: exercise5[2],
                      calories: diet
                    })
                    console.log(this.myPlan);
                  });
                });
              });
            });
          });
        }
      });
    });
  }


  toggle(){
    this.myPlan.sort(function(a, b){
      return a.day-b.day}
    )
    this.clicked=true;
  }
}
