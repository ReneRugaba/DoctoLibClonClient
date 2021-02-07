import { serviceStorage } from './../../service/serviceStorage.service';
import { PraticiensComponent } from './../praticiens.component';
import { PraticienService } from './../service/praticien.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Praticien } from '../model/praticien.model';

@Component({
  selector:'app-formSearchPraticien',
  templateUrl: './formSearchPraticiens.component.html'
})


export class formSearchPraticiens implements OnInit{
  practiciens: Praticien[];
  praticien: Praticien;
  error = '';

  constructor(private service: PraticienService, private serviceSt: serviceStorage){}

  ngOnInit(){}

  registerForm(form){
    const specialite: string = form.specialite;
    const ville: string = form.ville;
    this.service.searchpraticiens(specialite, ville).subscribe(data => {
      this.error = '';
      this.practiciens = data;
    },
    error => {
      this.practiciens = [];
      this.error = error;
    }
    );
  }

  storage(value){
    this.serviceSt.remove('monPraticien');
    this.serviceSt.set('monPraticien', value);
  }


}
