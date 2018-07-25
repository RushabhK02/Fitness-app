import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl: string = "http://localhost:8080";
  constructor(private http: HttpClient) { }

  assignInitialPreset(userId, points) {
    return this.http.post(this.apiUrl + `/user/${userId}/assign-initial-plan`, points);
  }

  getExerciseByName(exName:string){
    return this.http.get(this.apiUrl + `/exercise/name/${exName}`);
  }

  value = "/user/{userId}/current/allotment"
  getCurrentAllotment(userId:number){
    return this.http.get(this.apiUrl+`/user/${userId}/current/allotment`);
  }
 
  loginUser(credentials) {
    return this.http.post(this.apiUrl + `/login`, credentials);
  }
  signup(newUser) {
    return this.http.post(this.apiUrl + `/signup`, newUser);
  }
  updateBasicInfo(userId, newBasicInfo) {
    return this.http.put(this.apiUrl + `/user/${userId}/update/info`, newBasicInfo);
  }
  updateCalorieConsumed(userId, calorieDetails) {
    return this.http.put(this.apiUrl + `/user/${userId}/update/diet`, calorieDetails);
  }
  updateExerciseDone(userId, exerciseDetails) {
    return this.http.put(this.apiUrl + `/user/${userId}/update/exercise`, exerciseDetails);
  }
  getExerciseInfo(userId, exId) {
    return this.http.get(this.apiUrl + `/exercise/${exId}`);
  }
  viewCurrentDietActivity(userId) {
    return this.http.get(this.apiUrl + `/user/${userId}/history/records/diet/current`);
  }
  viewCurrentPlan(userId,queryParam) {
    return this.http.get(this.apiUrl +`/user/${userId}/view/current-plan?queryType=${queryParam}`);
  }
  viewCurrentWorkoutActivity(userId){
    return this.http.get(this.apiUrl+`/user/${userId}/history/records/workout/current`);
  }
  viewDietActivity(userId,queryParam,queryDate){
    return this.http.get(this.apiUrl+`/user/${userId}/history/records/diet?queryType=${queryParam}&date=${queryDate}`);
  }

  viewDietPlanHistory(userId,queryDate,queryParam){
    return this.http.get(this.apiUrl+`/user/${userId}/history/plan/diet?queryType=${queryParam}&date=${queryDate}`);
  }
  viewWorkoutActivity(userId,queryParam,queryDate){
    return this.http.get(this.apiUrl+`/user/${userId}/history/records/workout?queryType=${queryParam}&date=${queryDate}`);
  }
  viewWorkoutPlanHistory(userId,queryParam,queryDate){
    return this.http.get(this.apiUrl+`/user/${userId}/history/plan/workout?queryType=${queryParam}&date=${queryDate}`);
  }


}
