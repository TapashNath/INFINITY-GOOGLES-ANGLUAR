import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private toastr: ToastrService,
    private router: Router

  ) {}

  checkLogin(data: any) {
    if (!data.email) {
      this.toastr.error('Please enter email address!');
    } else {
      if (!data.password) {
        this.toastr.error('Please enter password!');
      } else {
        if (data.password.lenght < 8) {
          this.toastr.error('Please enter valid password!');
        } else {
          this.auth.login(data).subscribe((result: any) => {
            if (result.error === false) {
              this.toastr.error(result.message);
            } else {
              this.auth.setToken(JSON.stringify(result.data.token));
              localStorage.setItem('user', JSON.stringify(result.data));
              this.router.navigate(['/admin/dashboard']);
              this.toastr.success(result.message);
            }
          });
        }
      }
    }
  }

  ngOnInit(): void {
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['/admin/dashboard']);
    }
  }

  visible: boolean = true;
  changeType: boolean = true;
  show: boolean = true;

  viewpass() {
    this.visible = !this.visible;
    this.changeType = !this.changeType;
  }

  hide() {
    this.show = false;
  }
}
