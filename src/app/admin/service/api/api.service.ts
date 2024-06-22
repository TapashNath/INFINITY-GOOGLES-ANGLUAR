import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiResponse, ApiSendRequest } from 'src/app/Model/Api';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private toast: ToastrService
  ) {}
  url = environment.apiURL;
  loader = new BehaviorSubject<Boolean>(false);
  result: any;
  request!: ApiSendRequest;
  callApi(request: ApiSendRequest): Observable<any> {
    if (request.mathod === 'POST') {
      var options = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: JSON.stringify(this.auth.getToken()),
        }),
      };
      return this.http.post(this.url + request.url, request.data, options);
    } else if (request.mathod === 'PUT') {
      const options = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: JSON.stringify(this.auth.getToken()),
        }),
      };
      return this.http.put(this.url + request.url, request.data, options);
    } else if (request.mathod === 'DELETE') {
      const options = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: JSON.stringify(this.auth.getToken()),
        }),
        body: {
          id: request.id,
        },
      };
      return this.http.put(this.url + request.url, options);
    } else {
      var options = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: JSON.stringify(this.auth.getToken()),
        }),
      };
      return this.http.get(this.url + request.url, options);
    }
  }

  sendData(data: ApiSendRequest) {
    this.request = data;
  }

  getData = new Observable((observable): any => {
    this.callApi(this.request).subscribe((result: ApiResponse) => {
      if (!result.error) {
        observable.next(result.data);
        if (this.request.mathod != 'GET') {
          // this.toast.success(result.message);
        } else {
          console.log(result.message);
        }
      } else {
        observable.next(null);
        if (this.request.mathod != 'GET') {
          // this.toast.success(result.message);
        } else {
          console.log(result.message);
        }
      }
    });
  });
}
