import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Router } from '@angular/router';
import { SignUpService } from '../sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;
  errors: any = {};

  constructor(private fb: FormBuilder, private router: Router,private signupService:SignUpService) { }

  ngOnInit() {
    this.signUpForm = this.fb.group({

      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.maxLength(20)]]

    })

    let emailChecker = this.signUpForm.get('username')
    emailChecker.statusChanges
      .pipe(debounceTime(2000))
      .subscribe(e => {
        if (e === 'INVALID') {
          let errors = emailChecker.errors;
          if (errors.required) { this.errors['email'] = 'Email is Required' }
          if (errors.email) { this.errors['email'] = 'Invalid Email' }
        } else {
          this.errors['email'] = '';
        }
      })

    let passwordChecker = this.signUpForm.get('password')
    passwordChecker.statusChanges
      .subscribe(e => {
        console.log(e);
        if (e === 'INVALID') {
          let errors = passwordChecker.errors;
          if (errors.required) { this.errors['password'] = 'Password is Required' }
          else { this.errors['password'] = 'Password should not be more than  20 characters' }
        } else {
          this.errors['password'] = '';
        }
      })
  }

  handleFormSubmit(e) {

    e.preventDefault();
    if (this.signUpForm.valid) {
      let basicDetails:any = this.signUpForm.value;
      console.log(basicDetails);
      this.signupService.setDetails(basicDetails.firstName,basicDetails.lastName,basicDetails.username,basicDetails.password);
      this.questionnaireClick();
    }
    else {
      let values = this.signUpForm.value;
      console.log(this.signUpForm.value);
      if (!values.password) {
        this.errors['password'] = 'Password is Required';
        console.log("password is required");
      }
      if (!values.username) {
        this.errors['email'] = 'Email is Required';
        console.log("email is required");
      }
      if (!values.firstname || !values.lastName) {
        this.errors['name'] = 'Please enter your complete name';
        console.log("Please enter your complete name");
      }
      else
        console.log("sorry");
    };

  }

  questionnaireClick = function () {
    this.router.navigateByUrl('questions');
  }

}
