import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../main/sidebar/sidebar.component';

@Component({
  selector: 'app-productmanagement',
  templateUrl: './productmanagement.component.html',
  styleUrls: ['./productmanagement.component.css'],
})
export class ProductmanagementComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  userOption: boolean = true;

  viewOptions() {
    this.userOption = !this.userOption;
  }
}
