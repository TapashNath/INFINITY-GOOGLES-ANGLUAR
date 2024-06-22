import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  product = false;
  constructor(private toast:ToastrService, private auth: AuthService) { }

  ngOnInit(): void {
  }


  logout() {
    this.auth.logout();
  }

}
