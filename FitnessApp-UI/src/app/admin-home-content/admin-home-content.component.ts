import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home-content',
  templateUrl: './admin-home-content.component.html',
  styleUrls: ['./admin-home-content.component.css']
})
export class AdminHomeContentComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  newWorkoutClicked(){
    this.router.navigate(['/adminHome',{outlets : {'content' : ['newWorkout']}}]);
  }

  newDietClicked(){
    this.router.navigate(['/adminHome',{outlets : {'content' : ['newDiet']}}]);
  }

  deleteWorkoutClicked(){
    this.router.navigate(['/adminHome',{outlets : {'content' : ['deleteWorkout']}}]);
  }

  deleteDietClicked(){
    this.router.navigate(['/adminHome',{outlets : {'content' : ['deleteDiet']}}]);
  }

  assignClicked(){
    this.router.navigate(['/adminHome',{outlets : {'content' : ['assign']}}]);
  }


}
