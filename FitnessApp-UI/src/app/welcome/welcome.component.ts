import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginCredentials } from '../login-credentials';
import { UserService } from '../user.service';
import { UserDataStorageService } from '../user-data-storage.service';
import { Plan } from '../plan';
import { AdminService } from '../admin.service';
import { AdminDataStorageService } from '../admin-data-storage.service';
import { Admin } from '../admin';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  loginForm: FormGroup;
  loginCredentials: LoginCredentials;

  constructor(private fb: FormBuilder, private router: Router,
    private userService: UserService, private adminDataStorageService: AdminDataStorageService,
    private userDataStorageService: UserDataStorageService,
    private adminService: AdminService) {
    this.loginCredentials = new LoginCredentials();
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });

  }

  handleFormSubmit(e) {
    this.loginCredentials = this.loginForm.value;
    this.adminService.login(this.loginCredentials).subscribe((admin: Admin) => {
      // console.log(admin);
      if (admin != null) {
      this.adminDataStorageService.setAdmin(admin);
      this.router.navigateByUrl('adminHome');
      }
    });

    this.userService.loginUser(this.loginCredentials).subscribe(user => {
      // console.log(user);
      if (user != null) {
        this.userDataStorageService.setUser(user);
        let dietPlan: Plan = new Plan(user['currentDietPlan'].planId, user['currentDietPlan'].planName, user['currentDietPlan'].planType);
        let workoutPlan: Plan = new Plan(user['currentWorkoutPlan'].planId, user['currentWorkoutPlan'].planName, user['currentWorkoutPlan'].planType);
        this.userDataStorageService.setPlans(dietPlan, workoutPlan);
        // console.log(this.userDataStorageService.getUser());
        this.router.navigateByUrl('userHome');
      }
    });

  }


  loginClicked = function () {

  }

  signUpClick = function () {
    this.router.navigateByUrl('signUp');
  };

}
