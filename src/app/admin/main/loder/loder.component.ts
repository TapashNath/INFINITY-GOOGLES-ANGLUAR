import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api/api.service';

@Component({
  selector: 'app-loder',
  templateUrl: './loder.component.html',
  styleUrls: ['./loder.component.css'],
})
export class LoderComponent implements OnInit {
  loder: any;
  constructor(private api: ApiService) {
    this.api.loader.subscribe((res) => {
      this.loder = res;
    });
  }

  ngOnInit(): void {}
}
