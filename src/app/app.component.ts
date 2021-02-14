import { LoginServiceService } from './login/service/login-service.service';
import { serviceStorage } from './service/serviceStorage.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DoctolibClonClient';
  boutonConnect: {status: boolean, content: string} ;
  status: boolean;

  constructor(private storage: serviceStorage, private route: Router, private service: LoginServiceService){
     this.service.headObj.subscribe(value => {
       this.status = value;
       if (this.status === true){
        this.boutonConnect = {status: this.status, content: 'Deconnexion'};
      } else if (this.status === false){
        this.boutonConnect = {status: this.status, content: 'Connexion'};
      }
     });
  }

  ngOnInit(){
  }

  deconnexion(){
    this.storage.remove('currentUser');
    this.storage.remove('token');
    this.route.navigate(['/login']);
    this.service.headObj.next(false);
  }


  inscription(){}
}
