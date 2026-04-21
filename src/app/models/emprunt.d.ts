type Emprunt = {
  id: number;
  dateDebut: string;
  dateRetourPrevue: string;
  dateRetourReelle: string;
  dateDemande: string;
  statutDemande: string;
  personne?: Personne;
  traitePar?: Personne;
  materiel?: Materiel;
};