import {ProduitsModel} from './produit'

export class CommandeModel {
    id: number;
    quantite: number;
    dateCommande: Date;
    prod: ProduitsModel;
    prixCommande: number;

    constructor() {}
}