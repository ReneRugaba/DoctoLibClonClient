import { PraticienService } from './../../service/praticien.service';
import { Praticien } from './../../model/praticien.model';
import { Component, Input, OnInit } from '@angular/core';
import { serviceStorage } from 'src/app/service/serviceStorage.service';

@Component({
  selector: 'app-prendre-rdv',
  templateUrl: './prendre-rdv.component.html',
  styleUrls: ['./prendre-rdv.component.css']
})
export class PrendreRdvComponent implements OnInit {
  medecin = '';
  constructor(private service: serviceStorage) { }

  ngOnInit(): void {

  }

  getPraticien(){
    return this.medecin = this.service.get('monPraticien').nom;
  }

}
