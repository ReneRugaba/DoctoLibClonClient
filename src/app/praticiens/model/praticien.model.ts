import { ConsultationPatient } from './../../patients/rendez-vous/model/ConsultationPatient.model';
import { Patient } from './../../patients/patient/model/patient.model';

export interface Praticien{
  id: number;
  nom: string;
  prenom: string;
  patient: Patient[];
  idAdresse: {
    id: number,
    numRue: number,
    rue: string,
    codePostal: number,
    ville: string
  };
  consultation: ConsultationPatient[];
  specialite: number;
  username: string;
}
