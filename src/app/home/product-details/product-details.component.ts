import { Component, ViewEncapsulation } from '@angular/core';
import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";


SwiperCore.use([FreeMode, Navigation, Thumbs]);

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductDetailsComponent {
  thumbsSwiper: any;

  show1:boolean = true;
  show2:boolean = false;

  ind1:boolean = true;
  ind2:boolean = false;

  descriptionShow() {
    this.ind1 = true;
    this.ind2 = false;

    this.show1 = true;
    this.show2 = false;
  }
  detailsShow() {
    this.ind1 = false;
    this.ind2 = true;

    this.show1 = false;
    this.show2 = true;
  }
}
