import { serviceStorage } from 'src/app/service/serviceStorage.service';
import { Patient } from './../patient/model/patient.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NumberLiteralType } from 'typescript';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  id;
  token;
  constructor(private httpCl: HttpClient, private service: serviceStorage, private storage: serviceStorage) { }

  getpatient(){
    return this.service.get('currentUser');
  }

  updatepatient (id: number, newPatient: {}){
    this.token = this.storage.get('token').token;
    return this.httpCl.put<any>('http://127.0.0.1:8000/patients/' + id, newPatient,
    {headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.token
    }}
    );
  }
}
