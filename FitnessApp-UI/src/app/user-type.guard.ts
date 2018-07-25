import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IsUserService } from './is-user.service';

@Injectable({
  providedIn: 'root'
})
export class UserTypeGuard implements CanActivate {
 
  constructor(private isUserService: IsUserService,
    private router: Router) { }

  canActivate() {
    if (this.isUserService.isUser())
      return true;
    else {
      console.log("Not authorized to access user pages. Your type is not 'user'.");
      this.router.navigateByUrl('');
    }
    return false;
  }

}
