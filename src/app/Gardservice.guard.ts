import { LoginServiceService } from './login/service/login-service.service';
import { CanActivate } from '@angular/router';
import { serviceStorage } from 'src/app/service/serviceStorage.service';
import { Router} from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable(
  {providedIn: 'root'}
)
export class Gardservice implements CanActivate{


  constructor(private router: Router, private storage: serviceStorage, private service: LoginServiceService){}

  canActivate(): boolean
  {
    if (this.storage.giveStatusUser()){
        return true;
    }
    this.service.headObj.next(false);
    this.router.navigate(['/login']);
    return false;
  }
}
