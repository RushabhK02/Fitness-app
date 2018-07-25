import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-nav-bar',
  templateUrl: './admin-nav-bar.component.html',
  styleUrls: ['./admin-nav-bar.component.css']
})
export class AdminNavBarComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  homeClicked(){
    this.router.navigate(['/adminHome', {outlets: {'content': ['redirectToHome']}}]);
  }

  clientsClicked(){
    this.router.navigate(['/adminHome', {outlets: {'content': ['clients']}}]);
  }

  notificationsClicked(){
    this.router.navigate(['/adminHome', {outlets: {'content': ['notifications']}}]);
  }

  logoutBtnClicked(){
    // this.router.navigate(['/adminHome', {outlets: {'primary': ['']}}]);
    this.router.navigateByUrl('');
  }

}
