import { serviceStorage } from './../../service/serviceStorage.service';
import { Patient } from './../../patients/patient/model/patient.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  token:string;
  headObj;
  constructor(private http: HttpClient, private storage: serviceStorage) { }

  getToken(value){
    return this.http.post<Patient>('http://127.0.0.1:8000/login',
      {
        username: value.username,
        password: value.password
      }
    );
  }

  getCurrentUser(value){
    this.token = this.storage.get('token').token;
    return this.http.get<Patient>('http://127.0.0.1:8000/patients/' + value.username, {headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.token
    }});
  }
}
