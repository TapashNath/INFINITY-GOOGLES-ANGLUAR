import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ApiSendRequest } from 'src/app/Model/Api';
import { Category, Fature, Size } from 'src/app/Model/Models';
import { ApiService } from 'src/app/service/api/api.service';

@Component({
  selector: 'app-extra',
  templateUrl: './extra.component.html',
  styleUrls: ['./extra.component.css'],
})
export class ExtraComponent implements OnInit {
  constructor(private api: ApiService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.getCategory();
  }

  id: any;
  name: any;
  image: string | SafeUrl =
    'https://images.unsplash.com/photo-1521911528923-9c3838123490?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80';

  selected_file: any;

  categoryList: any;
  fatureList: any;
  sizeList: any;
  noData: any;

  category: boolean = true;
  fature: boolean = false;
  size: boolean = false;

  popup: boolean = false;
  addCategory: boolean = false;
  addFature: boolean = false;
  addSize: boolean = false;

  updateCategory: boolean = false;
  updateFature: boolean = false;
  updateSize: boolean = false;

  categoryLayout: boolean = true;
  fatureLayout: boolean = false;
  sizeLayout: boolean = false;

  showAddCategory() {
    this.addCategory = true;
    this.popup = true;
    this.addFature = false;
    this.addSize = false;
  }

  showAddFature() {
    this.addCategory = false;
    this.addFature = true;
    this.popup = true;
    this.addSize = false;
  }

  showAddSize() {
    this.addCategory = false;
    this.addFature = false;
    this.popup = true;
    this.addSize = true;
  }

  hidePopup() {
    this.addCategory = false;
    this.addFature = false;
    this.popup = false;
    this.addSize = true;

    this.updateCategory = false;
    this.updateFature = false;
    this.updateSize = false;
    this.id = '';
    this.name = '';
  }

  showCategory() {
    this.category = true;
    this.fature = false;
    this.size = false;

    this.categoryLayout = true;
    this.fatureLayout = false;
    this.sizeLayout = false;
    this.getCategory();
  }

  getCategory() {
    let request: ApiSendRequest = {
      url: 'get_all_category/',
      mathod: 'GET',
      data: undefined,
      loding: false,
      id: '',
    };
    this.api.sendData(request);
    this.api.getData.subscribe((data) => {
      this.categoryList = data;
    });
  }

  getImage(e: any) {
    if (e.target.files && e.target.files[0]) {
      this.image = this.sanitizer.bypassSecurityTrustUrl(
        window.URL.createObjectURL(e.target.files[0])
      );
    }
  }

  submitCategory(data: any) {
    if (this.updateCategory) {
      let request: ApiSendRequest = {
        url: 'category_edit/',
        mathod: 'PUT',
        data: data,
        loding: false,
        id: '',
      };
      this.api.sendData(request);
      this.api.getData.subscribe((respons: any) => {
        if (respons == null) {
          console.log('null');
        } else {
          if (!respons.error) {
            this.hidePopup();
            this.getCategory();
          }
        }
      });
    } else {
      let request: ApiSendRequest = {
        url: 'category_add/',
        mathod: 'POST',
        data: data,
        loding: false,
        id: '',
      };
      this.api.sendData(request);
      this.api.getData.subscribe((data: any) => {
        if (data == null) {
          console.log('null');
        } else {
          if (!data.error) {
            this.hidePopup();
            this.getCategory();
          }
        }
      });
    }
  }

  statusCategory(data: any) {
    let request: ApiSendRequest = {
      url: 'category_status/',
      mathod: 'PUT',
      data: { id: data._id },
      loding: false,
      id: '',
    };
    this.api.sendData(request);
    this.api.getData.subscribe(() => {
      this.getCategory();
    });
  }

  editCategory(data: any) {
    this.updateCategory = true;
    this.id = data._id;
    this.name = data.name;
    this.showAddCategory();
  }

  deleteCategory(data: any) {
    let request: ApiSendRequest = {
      url: 'delete_category_by_id/',
      mathod: 'PUT',
      data: { id: data._id },
      loding: false,
      id: '',
    };
    this.api.sendData(request);
    this.api.getData.subscribe((data) => {
      this.getCategory();
    });
    this.hidePopup();
  }

  showFature() {
    this.category = false;
    this.fature = true;
    this.size = false;

    this.categoryLayout = false;
    this.fatureLayout = true;
    this.sizeLayout = false;
    this.getFature();
  }

  getFature() {
    let request: ApiSendRequest = {
      url: 'get_all_fature/',
      mathod: 'GET',
      data: undefined,
      loding: false,
      id: '',
    };
    this.api.sendData(request);
    this.api.getData.subscribe((data) => {
      this.fatureList = data;
    });
  }

  submitFature(data: any) {
    if (this.updateFature) {
      let request: ApiSendRequest = {
        url: 'fature_edit/',
        mathod: 'PUT',
        data: data,
        loding: false,
        id: '',
      };
      this.api.sendData(request);
      this.api.getData.subscribe((respons: any) => {
        if (respons == null) {
          console.log('null');
        } else {
          if (!respons.error) {
            this.hidePopup();
            this.getFature();
          }
        }
      });
    } else {
      let request: ApiSendRequest = {
        url: 'fature_add/',
        mathod: 'POST',
        data: data,
        loding: false,
        id: '',
      };
      this.api.sendData(request);
      this.api.getData.subscribe((data: any) => {
        if (data == null) {
          console.log('null');
        } else {
          if (!data.error) {
            this.hidePopup();
            this.getFature();
          }
        }
      });
    }
  }

  statusFature(data: any) {
    let request: ApiSendRequest = {
      url: 'fature_status/',
      mathod: 'PUT',
      data: { id: data._id },
      loding: false,
      id: '',
    };
    this.api.sendData(request);
    this.api.getData.subscribe((data) => {
      this.getFature();
    });
  }

  editFature(data: any) {
    this.updateFature = true;
    this.id = data._id;
    this.name = data.name;
    this.showAddFature();
  }

  deleteFature(data: any) {
    let request: ApiSendRequest = {
      url: 'delete_fature_by_id/',
      mathod: 'PUT',
      data: { id: data._id },
      loding: false,
      id: '',
    };
    this.api.sendData(request);
    this.api.getData.subscribe((data) => {
      this.getFature();
    });
    this.hidePopup();
  }

  showSize() {
    this.category = false;
    this.fature = false;
    this.size = true;

    this.categoryLayout = false;
    this.fatureLayout = false;
    this.sizeLayout = true;
    this.getSize();
  }

  getSize() {
    let request: ApiSendRequest = {
      url: 'get_all_size/',
      mathod: 'GET',
      data: undefined,
      loding: false,
      id: '',
    };
    this.api.sendData(request);
    this.api.getData.subscribe((data) => {
      this.sizeList = data;
    });
  }

  submitSize(data: any) {
    console.log(data);

    if (this.updateSize) {
      let request: ApiSendRequest = {
        url: 'size_edit/',
        mathod: 'PUT',
        data: data,
        loding: false,
        id: '',
      };
      this.api.sendData(request);
      this.api.getData.subscribe((respons: any) => {
        if (respons == null) {
          console.log('null');
        } else {
          if (!respons.error) {
            this.hidePopup();
            this.getSize();
          }
        }
      });
    } else {
      let request: ApiSendRequest = {
        url: 'size_add/',
        mathod: 'POST',
        data: data,
        loding: false,
        id: '',
      };
      this.api.sendData(request);
      this.api.getData.subscribe((data: any) => {
        if (data == null) {
          console.log('null');
        } else {
          if (!data.error) {
            this.hidePopup();
            this.getSize();
          }
        }
      });
    }
  }

  statusSize(data: any) {
    let request: ApiSendRequest = {
      url: 'size_status/',
      mathod: 'PUT',
      data: { id: data._id },
      loding: false,
      id: '',
    };
    this.api.sendData(request);
    this.api.getData.subscribe(() => {
      this.getSize();
    });
  }

  editSize(data: any) {
    console.log(data);

    this.updateSize = true;
    this.id = data._id;
    this.name = data.name;
    this.showAddSize();
  }

  deleteSize(data: any) {
    let request: ApiSendRequest = {
      url: 'delete_size_by_id/',
      mathod: 'PUT',
      data: { id: data._id },
      loding: false,
      id: '',
    };
    this.api.sendData(request);
    this.api.getData.subscribe((data) => {
      this.getSize();
    });
    this.hidePopup();
  }
}
