import { patientFormComponent } from './patients/patient/form/patientForm.component';
import { HttpClientModule } from '@angular/common/http';
import { PatientService } from './patients/Service/patient.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { PatientsComponent } from './patients/patients.component';
import { PraticiensComponent } from './praticiens/praticiens.component';
import { PraticienComponent } from './praticiens/praticien/praticien.component';
import { RendezVousComponent } from './rendez-vous/rendez-vous.component';
import { PrendreRdvComponent } from './rendez-vous/prendre-rdv/prendre-rdv.component';
import { PatientComponent } from './patients/patient/patient.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { RouterModule, Routes } from '@angular/router';

export const ROUTES: Routes = [
  {path: '', component: PatientComponent},
  {path: 'rdvPatient', component: RendezVousComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    PraticiensComponent,
    PraticienComponent,
    RendezVousComponent,
    PrendreRdvComponent,
    PatientComponent,
    patientFormComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [PatientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
