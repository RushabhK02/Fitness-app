import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IsAdminService } from './is-admin.service';

@Injectable({
  providedIn: 'root'
})
export class AdminTypeGuard implements CanActivate {
  constructor(private isAdminService: IsAdminService,
    private router: Router) { }

    canActivate(){
        if(this.isAdminService.isAdmin()){
          return true;
        }
        else{
          console.log("Not authorized to access admin page. Your type is not 'admin'.");
          this.router.navigateByUrl('');
        }
        return false;
    }
}
