type Evenement = {
  id: number;
  typeEvenement: string;
  libelleEvenement: string;
  dateEvenement: string;
  traite: boolean;
  emprunt?: Emprunt;
};