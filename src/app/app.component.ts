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
export class AppComponent implements OnInit {

  showGestionProd = false;
  showCommande = false;
  refreshListe = false;
  refreshComm = false;
  produit: ProduitsModel;

  ngOnInit(): void {
    this.showCommande = false;
    this.showGestionProd = false;
  }
 
  navBarSelection(event) {
    console.log("Nav bar selection",event)
    if (event === 1) {
      this.showGestionProd = true;
    }
    else if (event === 2) {
      this.showCommande = true;
    } else {
      this.showCommande = false;
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

  refreshCom(event) {
    this.refreshComm = false;
    if(event) {
      this.refreshComm = true;
    }
  }

}
