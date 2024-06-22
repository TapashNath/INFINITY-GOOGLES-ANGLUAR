import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  user: any = JSON.parse(localStorage.getItem('user')!);
  name = this.user.name;
  constructor() {}

  ngOnInit(): void {}
  visible: boolean = true;
  changeType: boolean = true;
  userOption: boolean = true;

  viewpass() {
    this.visible = !this.visible;
    this.changeType = !this.changeType;
  }

  viewOptions() {
    this.userOption = !this.userOption;
  }
}
