import { ConsultationPatient } from './../model/ConsultationPatient.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RdvService {

  constructor(private httpcl: HttpClient) { }

  getRdvPatient(){
    return this.httpcl.get<ConsultationPatient[]>('http://127.0.0.1:8000/patients/3/consultations');
  }
}
