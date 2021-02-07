import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Praticien } from '../model/praticien.model';

@Injectable({
  providedIn: 'root'
})
export class PraticienService {

  constructor(private httpcl: HttpClient) { }

  searchpraticiens(specialite: string, ville: string){
    const opt = {params: new HttpParams({fromString: 'specialite=' + specialite + '&ville=' + ville})};
    return this.httpcl.get<Praticien[]>('http://127.0.0.1:8000/praticiens', opt);
  }
}
