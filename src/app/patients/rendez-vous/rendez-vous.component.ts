import { ConsultationPatient } from './model/ConsultationPatient.model';
import { RdvService } from './service/rdv.service';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-rendez-vous',
  templateUrl: './rendez-vous.component.html',
  styleUrls: ['./rendez-vous.component.css']
})
export class RendezVousComponent implements OnInit {
  consultationPatient: ConsultationPatient[];
  error;
  constructor(private service: RdvService, private spiner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spiner.show();
    this.service.getRdvPatient().subscribe((array) => {
      this.consultationPatient = array;
      this.spiner.hide();
    }, error => {
      this.error = error;
      this.spiner.hide();
    }

    );
  }

}
