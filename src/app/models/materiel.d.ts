type Materiel = {
  id: number;
  numeroDeSerie: string;
  dateAchat: string;
  familleMateriel?: FamilleMateriel;
  emplacement?: Emplacement;
  etat?: Etat;
  documentations: Documentation[];
  composants: Composant[];
};