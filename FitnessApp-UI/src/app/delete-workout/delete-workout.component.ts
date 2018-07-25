import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

interface Workouts {
  Name: string;
  PlanId: number;
}

@Component({
  selector: 'app-delete-workout',
  templateUrl: './delete-workout.component.html',
  styleUrls: ['./delete-workout.component.css']
})
export class DeleteWorkoutComponent implements OnInit {

  deleteWorkoutForm : FormGroup
  workouts : Workouts[]

  constructor(private fb : FormBuilder) { }

  ngOnInit() {

    this.workouts = [
      { Name: 'easy workout', PlanId: 1 },
      { Name: 'medium workout', PlanId: 2 },
      { Name: 'hard workout', PlanId: 3 },

    ];

    this.deleteWorkoutForm = this.fb.group({
      selectedWorkout : [this.workouts[0] , Validators.required]
    })
    
  }

  handleFormSubmit(e){
    
    console.log(this.deleteWorkoutForm.value);

  }

}
