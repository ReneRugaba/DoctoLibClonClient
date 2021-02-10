import { serviceStorage } from './../../../service/serviceStorage.service';
import { ConsultationPatient } from './../model/ConsultationPatient.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RdvService {
  idUserCurrent: number;
  token: string;
  constructor(private httpcl: HttpClient,private storage: serviceStorage) { }

  getRdvPatient(){
    this.idUserCurrent = this.storage.get('currentUser').id;
    this.token = this.storage.get('token').token;
    return this.httpcl.get<ConsultationPatient[]>('http://127.0.0.1:8000/patients/' + this.idUserCurrent + '/consultations',
                                                      {headers: {
                                                        'Content-Type': 'application/json',
                                                        Authorization: 'Bearer ' + this.token
                                                      }});
  }
}
