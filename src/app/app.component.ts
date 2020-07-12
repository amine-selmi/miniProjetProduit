import { Component, OnInit } from '@angular/core';
import { ProduitsModel } from './models/produit';
import { PanierModel } from './models/panier';
import { ProduitService } from './services/produit.service';
import { PanierService } from './services/panier.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showGestionProd = false;
  refreshListe = false;
  produit: ProduitsModel;
 
  navBarSelection(event) {
    console.log("Nav bar selection",event)
    if (event === 1) {
      this.showGestionProd = true;
    } else {
      this.showGestionProd = false;
    }
  }

  refresh(event) {
    if (event) {
      this.showGestionProd = false;
      this.refreshListe = true;
    }
  }

  getProd(event) {
    this.showGestionProd = true;
    this.produit = event;
  }

}
