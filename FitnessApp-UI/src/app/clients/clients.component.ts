import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Admin } from '../admin';
import { AdminDataStorageService } from '../admin-data-storage.service';

class Client {
  firstName: string;
  lastName: string;
    userId: number;
}

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  admin:Admin=null;
  clients:Array<Client>=[];
  currentTab: number = 0;
  currentSelectedId : number = 0;

  constructor(private router : Router, private adminService:AdminService,
              private adminDataStorageService:AdminDataStorageService) { }

  ngOnInit() {
    this.admin = this.adminDataStorageService.getAdmin();
    this.adminService.viewClients(this.admin.adminId).subscribe((clientsList:Array<Client>)=>{
      this.clients=clientsList;
      });
    console.log(this.clients);
  }


  changeTab(event, tabIdx , selectedClientId) {
    this.currentTab = tabIdx;
    this.currentSelectedId = selectedClientId;
    this.router.navigate(['/adminHome', {outlets: {'content': ['activity',  selectedClientId]}}]);


  }

  isTabSelected(tabIdx , selectedClientId) {
    return (this.currentTab === tabIdx && this.currentSelectedId === selectedClientId);
  }

  changeTabProfile($event, tabIdx , selectedClientId){

    this.currentTab = tabIdx;
    this.currentSelectedId = selectedClientId;
    this.router.navigate(['/adminHome', {outlets: {'content': ['profile',  selectedClientId]}}]);

  }

}
