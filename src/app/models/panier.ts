import { ProduitsModel } from '../models/produit'

export class PanierModel {
    id: number;
    prods: ProduitsModel[];
    quantite: number;

    constructor() {}
}