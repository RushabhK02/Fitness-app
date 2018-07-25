import { Injectable } from '@angular/core';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class AdminDataStorageService {
  private admin:Admin;
  
  constructor() { }

  setAdmin(admin){
    this.admin = new Admin(admin.adminId,admin.clients,admin.firstName,admin.lastName,admin.username,admin.password);
   }
  getAdmin(){
    return this.admin;
  }
}
