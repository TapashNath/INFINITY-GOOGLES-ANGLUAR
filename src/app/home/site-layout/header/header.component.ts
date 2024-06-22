import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  showWrapper:boolean = false;

  showLogin:boolean = false;
  showRegister:boolean = false;
  showForgot:boolean = false;
  showReset:boolean = false;

  showUserOption:boolean = false;


  login() {
    this.showWrapper = !this.showWrapper;
    this.showLogin = !this.showLogin;
  }

  register() {
    this.showWrapper = !this.showWrapper;
    this.showRegister = !this.showRegister;
  }

  redirectLogin() {
    this.showLogin = true;
    this.showRegister = false;
  }

  redirectRegister() {
    this.showLogin = false;
    this.showRegister = true;
  }

  forgotPass() {
    this.showForgot = true;
    this.showLogin = false;
  }

  closeForgot() {
    this.showForgot = false;
    this.showWrapper = false;
  }

  resetPass() {
    this.showForgot = false;
    this.showReset = true;
  }

  closeReset() {
    this.showReset = false;
    this.showWrapper = false;
  }

  showOption() {
    this.showUserOption = !this.showUserOption;
  }

  prelogin:boolean = true;
  afterlogin:boolean = false;

  showuser() {
    this.prelogin = false;
    this.afterlogin = true;
  }

}
