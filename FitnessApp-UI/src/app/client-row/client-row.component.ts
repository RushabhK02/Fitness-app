import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-row',
  templateUrl: './client-row.component.html',
  styleUrls: ['./client-row.component.css']
})
export class ClientRowComponent implements OnInit {

  number: number;
  name: string;
  workout: string;
  diet: string;
  currentTab: number = 0;

  constructor() { }

  ngOnInit() {
  }

  changeTab(event, tabIdx) {
    this.currentTab = tabIdx;

  }

  isTabSelected(tabIdx) {
    return this.currentTab === tabIdx;
  }

}
