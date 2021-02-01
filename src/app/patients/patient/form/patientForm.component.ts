import { PatientService } from './../../Service/patient.service';
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'patient-Form',
  templateUrl: './patientForm.component.html',
})

export class patientFormComponent{
  @Input() patientClone;
  @Input() modal;
  nom: string;
  prenom: string;
  email: string;
  dateNaissance: Date;

  constructor(private service: PatientService){}

  register(form: FormGroup){
    this.service.updatepatient(this.patientClone.id, form);
  }
}
