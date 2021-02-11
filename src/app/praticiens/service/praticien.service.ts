import { Consultation } from './../model/Consultation.model';
import { Patient } from './../../patients/patient/model/patient.model';
import { serviceStorage } from './../../service/serviceStorage.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Praticien } from '../model/praticien.model';

@Injectable({
  providedIn: 'root'
})
export class PraticienService {
  token: string;
  constructor(private httpcl: HttpClient, private storage: serviceStorage) { }

  searchpraticiens(specialite: string, ville: string){
    this.token = this.storage.get('token').token;
    const opt = {headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.token
    }, params: new HttpParams({fromString: 'specialite=' + specialite + '&ville=' + ville})};
    return this.httpcl.get<Praticien[]>('http://127.0.0.1:8000/praticiens', opt);
  }

  addRdv(daterdv: string, praticienId: number, patientId: number){
    this.token = this.storage.get('token').token;
    return this.httpcl.post<Consultation>('http://127.0.0.1:8000/patients/consultations', {
      dateRdv: daterdv,
      Patient: patientId,
      practicien: praticienId
    },
    {headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.token
    }}
    );
  }
}
