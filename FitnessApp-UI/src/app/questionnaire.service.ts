import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {

  constructor() { }

  calWPoints(age : number , gymExp : number , height : number , weight : number){

     let points : number = 0;
     let ageN = Number(age);
     if(ageN<25) points = 10;
     if(ageN>25&&ageN<40) points = 5;
     
     let gymExpN = Number(gymExp);

     points += gymExpN;

     let weightN = Number(weight);
     let heightN = Number(height);

     let BMI : number = (weightN*10000)/(heightN*heightN);
     if(BMI > 18.5 && BMI < 25) points += 10;

     return points;
  }

  
  calDPoints( diet : number , height : number , weight : number){

    let points : number = 0;
    
    let dietN = Number(diet);

    points += dietN;

    let weightN = Number(weight);
    let heightN = Number(height);

    let BMI : number = (weightN*10000)/(heightN*heightN);
    if(BMI > 18.5 && BMI < 25) points += 10;

    return points;
 }
}
