import { Injectable } from '@angular/core';
import {SignUpDetails} from './sign-up-details';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  signUpDetails:SignUpDetails=new SignUpDetails();

  setDetails(firstName:string,lastName:string,username:string,password:string){
    this.signUpDetails.firstName=firstName;
    this.signUpDetails.lastName=lastName;
    this.signUpDetails.username=username;
    this.signUpDetails.password=password;
  }
  setAge(age:number){
    this.signUpDetails.age=age;
  }
  setHeight(height:number){
    this.signUpDetails.heightCms=height;
  }
  setWeight(weight:number){
    this.signUpDetails.weightKgs=weight;
  }
  getSignUpDetails(){
    return this.signUpDetails;
  }
}