export interface Patient{
  id: number;
  nom: string;
  prenom: string;
  adresse: {
    id: number,
    numRue: number,
    rue: string,
    codePostal: number,
    ville: string
    };
  dateNaissance: Date;
  email: string;
}
