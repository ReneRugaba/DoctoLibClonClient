import { Component, Input } from '@angular/core';


@Component({
  selector: 'patient-Form',
  templateUrl: './patientForm.component.html',
})

export class patientFormComponent{
  @Input() patient;
  @Input() modal;
  nom: string;
  prenom: string;
  email: string;
  dateNaissance: string;

  constructor(){}

  register(){
    console.log(this.patient.id);
  }
}
