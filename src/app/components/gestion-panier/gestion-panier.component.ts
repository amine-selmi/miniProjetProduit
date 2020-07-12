import { Component, OnInit } from '@angular/core';
import { ProduitsModel } from 'src/app/models/produit';
import { PanierService } from 'src/app/services/panier.service';
import { PanierModel } from 'src/app/models/panier';
import { CommandeModel } from 'src/app/models/commande';

@Component({
  selector: 'app-gestion-panier',
  templateUrl: './gestion-panier.component.html',
  styleUrls: ['./gestion-panier.component.css']
})
export class GestionPanierComponent implements OnInit {

  panierCommandes: CommandeModel[];
  panier: PanierModel;

  constructor(private servicePanier: PanierService) { }

  ngOnInit() {
    this.panierCommandes = [];
    this.servicePanier.getPanier().subscribe(panier => {
      this.panier = panier;
      this.panierCommandes = panier.commandes;
    });
  }
}
