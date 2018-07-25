import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataStorageService } from '../user-data-storage.service';

@Component({
  selector: 'app-user-nav-bar',
  templateUrl: './user-nav-bar.component.html',
  styleUrls: ['./user-nav-bar.component.css']
})
export class UserNavBarComponent implements OnInit {

  constructor(private router : Router,private userDataStorageService:UserDataStorageService) { }

  ngOnInit() {
  }


  myPlanClicked(){

    this.router.navigate(['/userHome', {outlets: {'content': ['myPlan']}}]);
  }

  homeClicked(){

    this.router.navigate(['/userHome', {outlets: {'content': ['redirectToHome']}}]);
  }

  previousPlansClicked(){
    this.router.navigate(['/userHome', {outlets: {'content': ['previousPlans']}}]);
  }

  myActivityClicked(){

    this.router.navigate(['/userHome', {outlets: {'content': ['myActivity']}}]);

  }
  
  viewProfile(){
    this.router.navigate(['/userHome', {outlets: {'content': ['profile']}}]);
  }

  logoutBtnClicked(){
    // this.router.navigate(['/userHome', {outlets: {'primary': ['']}}]);
    this.userDataStorageService.clear();
    this.router.navigateByUrl('');
  }
}
