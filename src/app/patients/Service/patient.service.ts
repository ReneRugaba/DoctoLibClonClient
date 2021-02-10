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
  constructor(private httpCl: HttpClient, private service: serviceStorage) { }

  getpatient(){
    return this.service.get('currentUser');
  }

  updatepatient (id: number, newPatient: {}){
    this.httpCl.put<any>('http://127.0.0.1:8000/patients/' + id, newPatient).subscribe();
  }
}
