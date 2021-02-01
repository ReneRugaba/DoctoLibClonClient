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
  constructor(private httpCl: HttpClient) { }

  getpatient(){
    const opt = {params: new HttpParams({fromString: 'nom=nomtest2'})};
    return this.httpCl.get<Patient>('http://127.0.0.1:8000/patients', opt);
  }

  updatepatient (id: number, newPatient: {}){
    this.httpCl.put<any>('http://127.0.0.1:8000/patients/' + id, newPatient).subscribe();
  }
}
