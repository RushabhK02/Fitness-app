import { Injectable } from '@angular/core';
import { User } from './user';
import { UserDataStorageService } from './user-data-storage.service';

@Injectable({
  providedIn: 'root'
})
export class IsUserService {

  constructor(private userDataStorageService:UserDataStorageService) { }

  isUser() {
    let user:User = this.userDataStorageService.getUser();
    if(user==null){
      return false;
    }
    return true;

  }
}
