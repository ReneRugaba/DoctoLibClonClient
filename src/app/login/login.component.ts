import { Patient } from './../patients/patient/model/patient.model';
import { LoginServiceService } from './service/login-service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { serviceStorage } from '../service/serviceStorage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error;
  user;
  private currentUserSubject: BehaviorSubject<Patient>;
  public currentUser: Observable<Patient>;
  constructor(private service: LoginServiceService, private storage: serviceStorage, private router: Router) { }

  ngOnInit(): void {
  }

  login(value: FormGroup){
    this.service.getToken(value).subscribe(token => {

      this.storage.set('token', token);
      this.user = this.service.getCurrentUser(value).subscribe(user => {
        this.storage.set('currentUser', user);
        if (this.user){
          this.router.navigate(['patients/patient']);
        }
      });

    });
  }

}
