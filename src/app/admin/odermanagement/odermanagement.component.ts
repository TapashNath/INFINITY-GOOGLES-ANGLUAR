import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-odermanagement',
  templateUrl: './odermanagement.component.html',
  styleUrls: ['./odermanagement.component.css']
})
export class OdermanagementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userOption:boolean = true;

  viewOptions(){
    this.userOption = !this.userOption
  }

}
