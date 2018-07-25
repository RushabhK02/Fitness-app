import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { QuestionnaireService } from '../questionnaire.service';
import { Router } from '@angular/router';
import { SignUpService } from '../sign-up.service';
import { UserService } from '../user.service';
import { UserDataStorageService } from '../user-data-storage.service';
import { Plan } from '../plan';
import { AllocationPoints } from '../allocation-points';
import { LoginCredentials } from '../login-credentials';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  questionnaireForm: FormGroup;

  constructor(private fb: FormBuilder, private questionService: QuestionnaireService, private router: Router,
    private signupService: SignUpService, private userService: UserService, private userDataStorageService:UserDataStorageService) { }

  ngOnInit() {
    this.questionnaireForm = this.fb.group({

      age: ['', [Validators.required, Validators.max(80)]],
      weight: ['', [Validators.required, Validators.max(500)]],
      height: ['', [Validators.required, Validators.max(300)]],
      gymExp: ['', [Validators.required]],
      diet: ['', [Validators.required]]

    })

  }


  handleFormSubmit(e) {

    if (this.questionnaireForm.valid) {
      let value = this.questionnaireForm.value;
      // console.log(this.questionnaireForm.value.gymExp);
      let workoutPoints: number = this.questionService.calWPoints(value.age, value.gymExp, value.heightt, value.weight);
      console.log('workout points =' + workoutPoints);
      let dietPoints: number = this.questionService.calDPoints(value.diet, value.heightt, value.weight);
      console.log('diet points =' + dietPoints);
      this.signupService.setAge(value.age);
      this.signupService.setHeight(value.height);
      this.signupService.setWeight(value.weight);
      this.userService.signup(this.signupService.getSignUpDetails()).subscribe(newUser => {
        this.userDataStorageService.setUser(newUser);
        console.log(this.userDataStorageService.getUser());
        let points:AllocationPoints = new AllocationPoints();
        points.dietPoints=dietPoints;
        points.workoutPoints=workoutPoints;
        this.userService.assignInitialPreset(this.userDataStorageService.getUser().userId,points).subscribe(status=>{
          if(status==true||status=="true"){
            let loginCredentials:LoginCredentials=new LoginCredentials();
            loginCredentials.username=newUser['username'];
            loginCredentials.password=newUser['password'];
            this.userService.loginUser(loginCredentials).subscribe(user=>{
              this.userDataStorageService.setUser(user);
              this.letsWorkoutClick();
            });
          }
          else  this.router.navigateByUrl('signUp');
        });
       
      });
      
    }
  }

  letsWorkoutClick = function () {
    this.router.navigateByUrl('userHome');
  }
}
