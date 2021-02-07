import { PraticienService } from './service/praticien.service';
import { Praticien } from './model/praticien.model';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-praticiens',
  templateUrl: './praticiens.component.html',
  styleUrls: ['./praticiens.component.css']
})
export class PraticiensComponent implements OnInit {

  

  constructor(private service: PraticienService) { }

  ngOnInit(): void {

  }


}
