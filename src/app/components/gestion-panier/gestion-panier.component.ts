import { Component, OnInit } from '@angular/core';
import { ProduitsModel } from 'src/app/models/produit';
import { PanierService } from 'src/app/services/panier.service';
import { PanierModel } from 'src/app/models/panier';

@Component({
  selector: 'app-gestion-panier',
  templateUrl: './gestion-panier.component.html',
  styleUrls: ['./gestion-panier.component.css']
})
export class GestionPanierComponent implements OnInit {

  panierProds: ProduitsModel[];
  panier: PanierModel;

  constructor(private servicePanier: PanierService) { }

  ngOnInit() {
    this.panierProds = [];
    this.servicePanier.getPanier().subscribe(panier => {
      this.panier = panier;
      this.panierProds = panier.prods;
    });
  }

  deleteProduit(prod: ProduitsModel) {
    const index = this.panierProds.indexOf(prod)
    this.panierProds.splice(index, 1);
    this.panier.prods = this.panierProds;
    this.servicePanier.editPanier(this.panier).subscribe(result => {
      this.ngOnInit();
    })
  }

}
