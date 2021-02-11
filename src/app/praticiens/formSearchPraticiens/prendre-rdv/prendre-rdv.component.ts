import { Router } from '@angular/router';
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
  dateTime: string;
  praticienId: number;
  patientId: number;
  statusSuccess = false;
  constructor(private service: serviceStorage, private servicePraticien: PraticienService, private routes: Router) { }

  ngOnInit(): void {

  }

  getPraticien(){
    return this.medecin = this.service.get('monPraticien').nom;
  }

  registerRdv(value){
    this.dateTime = value.date + ' ' + value.time;
    this.praticienId = this.medecin = this.service.get('monPraticien').id;
    this.patientId = this.service.get('currentUser').id;
    this.service.remove('monPraticien');
    this.servicePraticien.addRdv(
      this.dateTime, this.praticienId, this.patientId
    ).subscribe(response => {
          this.statusSuccess = true;
          this.routes.navigate(['patients/rdvPatient']);
    });

  }

}
