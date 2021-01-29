import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Patient } from './model/patient.model';
import { PatientService } from './../Service/patient.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patient: Patient;
  closeResult = '';
  constructor(private PatientSer: PatientService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.PatientSer.getpatient().subscribe((Object) => {
      console.log(Object);
      this.patient = Object;
    });
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
