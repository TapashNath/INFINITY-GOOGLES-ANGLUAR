import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiSendRequest } from '../Model/Api';
import { ApiService } from '../service/api/api.service';

@Component({
  selector: 'app-cms',
  templateUrl: './cms.component.html',
  styleUrls: ['./cms.component.css'],
})
export class CmsComponent implements OnInit {
  constructor(private api: ApiService, private toast: ToastrService) {}

  ngOnInit(): void {
    this.name = 'about';
    this.getAppData(this.name);
  }

  userOption: boolean = true;

  viewOptions() {
    this.userOption = !this.userOption;
  }

  name: any;
  details: any;
  email: any;
  number: any;
  address: any;

  about: boolean = true;
  contact: boolean = false;
  trms: boolean = false;
  privacy: boolean = false;
  payment: boolean = false;
  return: boolean = false;
  banner: boolean = false;

  layoutUpdate(name: any) {
    console.log(name);

    this.about = false;
    this.contact = false;
    this.trms = false;
    this.privacy = false;
    this.return = false;
    this.payment = false;
    this.banner = false;

    switch (name) {
      case 'about':
        this.about = true;
        break;
      case 'contact':
        this.contact = true;
        break;
      case 'trms':
        this.trms = true;
        break;
      case 'privacy':
        this.privacy = true;
        break;
      case 'payment':
        this.payment = true;
        break;
      case 'return':
        this.return = true;
        break;
      case 'banner':
        this.banner = true;
        break;
      default:
      case 'about':
        this.about = true;
        break;
    }
  }

  show(name: any) {
    this.name = name;
    if (name === 'contact') {
      this.getContact(name);
    } else if (name === 'banner') {
    } else {
      this.getAppData(name);
    }
  }

  getAppData(name: any) {
    let request: ApiSendRequest = {
      url: 'get_about/',
      mathod: 'POST',
      data: { name: name },
      loding: false,
      id: '',
    };
    this.api.sendData(request);
    this.api.getData.subscribe((data: any) => {
      if (data == null) {
        console.log('null');
        this.details = 'null';
      } else {
        if (!data.error) {
          console.log(data);
          if (data.length > 0) {
            this.details = data[0].details;
            console.log(this.details);
          }
        }
        this.layoutUpdate(name);
      }
    });
  }

  submitData(data: any) {
    console.log(data);
    if (data.details) {
      let request: ApiSendRequest = {
        url: 'update_about/',
        mathod: 'POST',
        data: { name: this.name, details: data.details },
        loding: false,
        id: '',
      };
      this.api.sendData(request);
      this.api.getData.subscribe((data: any) => {
        if (data == null) {
          console.log('null');
        } else {
          if (!data.error) {
          }
        }
      });
    } else {
      this.toast.warning('Please add details.');
    }
  }

  submitContact(data: any) {
    console.log(data);
    if (data.email) {
      if (data.number) {
        if (data.address) {
          let request: ApiSendRequest = {
            url: 'update_contact/',
            mathod: 'POST',
            data: {
              name: this.name,
              email: data.email,
              number: data.number,
              address: data.address,
            },
            loding: false,
            id: '',
          };
          this.api.sendData(request);
          this.api.getData.subscribe((data: any) => {
            if (data == null) {
              console.log('null');
            } else {
              if (!data.error) this.getContact(this.name);
            }
          });
        } else {
          this.toast.warning('Please add address.');
        }
      } else {
        this.toast.warning('Please add number.');
      }
    } else {
      this.toast.warning('Please add email.');
    }
  }

  getContact(name: any) {
    let request: ApiSendRequest = {
      url: 'get_cantact/',
      mathod: 'POST',
      data: { name: this.name },
      loding: false,
      id: '',
    };
    this.api.sendData(request);
    this.api.getData.subscribe((data: any) => {
      if (data == null) {
        console.log('null');
      } else {
        if (!data.error) {
          console.log(data);
          if (data.length > 0) {
            this.email = data[0].email;
            this.number = data[0].number;
            this.address = data[0].address;
          }
        }
      }
      this.layoutUpdate(name);
    });
  }
}
