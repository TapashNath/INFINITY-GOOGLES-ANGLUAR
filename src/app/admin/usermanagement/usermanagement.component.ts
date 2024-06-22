import { Component, OnInit } from '@angular/core';
import { SwiperComponent } from "swiper/angular";
import SwiperCore, { SwiperOptions, Grid, Pagination  } from 'swiper';

SwiperCore.use([Grid, Pagination]);

@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.css'],
})
export class UsermanagementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userOption:boolean = true;

  viewOptions(){
    this.userOption = !this.userOption
  }

}
