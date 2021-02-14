import { Patient } from './../model/patient.model';
import { serviceStorage } from 'src/app/service/serviceStorage.service';
import { PatientService } from './../../Service/patient.service';
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'patient-Form',
  templateUrl: './patientForm.component.html',
})

export class patientFormComponent{
  @Input() patientClone;
  @Input() modal;
  user: Patient;
  nom: string;
  prenom: string;
  email: string;
  dateNaissance: Date;

  constructor(private service: PatientService, private router: Router, private storage: serviceStorage){}

  register(form: FormGroup){
    this.service.updatepatient(this.patientClone.id, form).subscribe(response => {
      this.storage.set('currentUser', response);
      if (response){
        location.reload();
      }
    });
  }
}
