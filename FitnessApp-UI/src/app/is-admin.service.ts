import { Injectable } from '@angular/core';
import { Admin } from './admin';
import { AdminDataStorageService } from './admin-data-storage.service';

@Injectable({
  providedIn: 'root'
})
export class IsAdminService {

  constructor(private adminDataStorageService:AdminDataStorageService) { }

  isAdmin(){

    let admin:Admin = this.adminDataStorageService.getAdmin();
    if(admin==null){
      return false;
    }
    return true;

  }
}
