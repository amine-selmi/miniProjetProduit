import { CommandeModel } from '../models/commande'

export class PanierModel {
    id: number;
    commandes: CommandeModel[];
    prixTotale: number;

    constructor() {}
}