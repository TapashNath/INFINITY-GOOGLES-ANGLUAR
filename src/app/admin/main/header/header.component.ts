import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  user: any = JSON.parse(localStorage.getItem('user')!);
  name = this.user.name;
  constructor(private auth: AuthService) {}

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
  logout() {
    this.auth.logout();
  }
}
