import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  apiUrl: string = "http://localhost:8080/admin/";
  constructor(private http: HttpClient) { }

  getExercises(adminId){
    return this.http.get(this.apiUrl + `${adminId}/exercises`);
  }

  login(credentials){
    return this.http.post(this.apiUrl + `login`, credentials);
  }

  getAdminInfo(adminId){
    return this.http.get(this.apiUrl + `${adminId}`);
  }
  assignNewPreset(userId, comboPlan, adminId) {
    return this.http.put(this.apiUrl + `${adminId}/user/${userId}/assign`, comboPlan);
  }

  createNewPreset(newPreset, adminId) {
    return this.http.post(this.apiUrl + `${adminId}/new/plan`, newPreset);
  }

  deletePlanPreset(planId, adminId) {
    return this.http.delete(this.apiUrl + `${adminId}/delete/plan/${planId}`);
  }

  viewClientInfo(userId, adminId) {
    return this.http.get(this.apiUrl + `${adminId}/user/${userId}`);
  }
  viewClients(adminId) {
    return this.http.get(this.apiUrl + `${adminId}/users`);
  }

  getPlans(adminId) {
    return this.http.get(this.apiUrl + `${adminId}/plans`);
  }

  viewUserCurrentDietHistory(userId, adminId) {
    return this.http.get(this.apiUrl + `${adminId}/user/${userId}/history/records/diet/current`);
  }

  viewUserCurrentWorkoutHistory(userId, adminId) {
    return this.http.get(this.apiUrl + `${adminId}/user/${userId}/history/records/workout/current`);
  }
  viewUserDietHistory(userId, adminId, queryDate, queryParam) {
    return this.http.get(this.apiUrl + `${adminId}/user/${userId}/history/records/diet/date?queryType=${queryParam}&date=${queryDate}`);
  }

  viewUsersWithExpiredPlans(adminId) {
    return this.http.get(this.apiUrl + `${adminId}/notifications`);
  }

  viewUserWorkoutHistory(userId, adminId, queryDate, queryParam) {
    return this.http.get(this.apiUrl + `${adminId}/user/${userId}/history/records/workout/date?queryType=${queryParam}& date=${queryDate}`);
  }

  viewUserWorkoutHistoryByStatus(userId,adminId,queryParam,queryStatus){
    return this.http.get(this.apiUrl+`${adminId}/user/${userId}/history/records/workout/status?queryType=${queryParam}&status=${queryStatus}`);
  }




}
