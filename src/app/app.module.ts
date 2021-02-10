import { ErrorsinterceptorService } from './errorsinterceptor.service';
import { formSearchPraticiens } from './praticiens/formSearchPraticiens/formSearchPraticiens.component';
import { patientFormComponent } from './patients/patient/form/patientForm.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PatientService } from './patients/Service/patient.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { PatientsComponent } from './patients/patients.component';
import { PraticiensComponent } from './praticiens/praticiens.component';
import { PraticienComponent } from './praticiens/praticien/praticien.component';
import { RendezVousComponent } from './patients/rendez-vous/rendez-vous.component';
import { PrendreRdvComponent } from './praticiens/formSearchPraticiens/prendre-rdv/prendre-rdv.component';
import { PatientComponent } from './patients/patient/patient.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { RouterModule, Routes } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { serviceStorage } from './service/serviceStorage.service';
import { errorMonitor } from 'events';
import { LoginComponent } from './login/login.component';




export const ROUTES: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'patients', component: PatientsComponent,
    children: [
      {path: 'patient', component: PatientComponent},
      {path: 'praticiens', component: PraticiensComponent,
          children: [
            {path: 'prendreRdv', component: PrendreRdvComponent}
          ]},
      {path: 'rdvPatient', component: RendezVousComponent}
      ]}



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
    patientFormComponent,
    formSearchPraticiens,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
    StorageServiceModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ErrorsinterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
