import { Component } from '@angular/core';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent {


  blank:boolean = true;
  addressBox:boolean = false;
  headBtn:boolean = false;
  adWrapper:boolean = false;
  addAddress:boolean = false;

  addressAddForm() {
    this.adWrapper = !this.adWrapper;
    this.addAddress = !this.addAddress;
  }

  afterSave() {
    this.adWrapper = false;
    this.addAddress = false;
    this.headBtn = true;
    this.blank = false;
    this.addressBox = true;
  }


  lInd1:boolean = true;
  lInd2:boolean = false;
  lInd3:boolean = false;
  lInd4:boolean = false;

  accountSec:boolean = true;
  orderSec:boolean = false;
  addressSec:boolean = false;
  changePassSec:boolean = false;

  showAccountSec() {
    this.lInd1 = true;
    this.lInd2 = false;
    this.lInd3 = false;
    this.lInd4 = false;

    this.accountSec = true;
    this.orderSec = false;
    this.addressSec = false;
    this.changePassSec = false;
  }

  showOrderSec() {
    this.lInd1 = false;
    this.lInd2 = true;
    this.lInd3 = false;
    this.lInd4 = false;

    this.accountSec = false;
    this.orderSec = true;
    this.addressSec = false;
    this.changePassSec = false;
  }

  showAddressSec() {
    this.lInd1 = false;
    this.lInd2 = false;
    this.lInd3 = true;
    this.lInd4 = false;

    this.accountSec = false;
    this.orderSec = false;
    this.addressSec = true;
    this.changePassSec = false;
  }

  showChangePassSec() {
    this.lInd1 = false;
    this.lInd2 = false;
    this.lInd3 = false;
    this.lInd4 = true;

    this.accountSec = false;
    this.orderSec = false;
    this.addressSec = false;
    this.changePassSec = true;
  }
}
