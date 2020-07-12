import { Component, OnInit } from '@angular/core';
import { ProduitsModel } from 'src/app/models/produit';
import { PanierModel } from 'src/app/models/panier';
import { ProduitService } from 'src/app/services/produit.service';
import { PanierService } from 'src/app/services/panier.service';
import { CommandeService } from 'src/app/services/commande.service';
import { CommandeModel } from 'src/app/models/commande';

@Component({
  selector: 'app-gestion-produit',
  templateUrl: './gestion-produit.component.html',
  styleUrls: ['./gestion-produit.component.css']
})
export class GestionProduitComponent implements OnInit {

  prodsList: ProduitsModel[] = [];
  nom: string; 
  prod: ProduitsModel = new ProduitsModel();
  panier: PanierModel = new PanierModel();
  listProds: ProduitsModel[];
  constructor(private service: ProduitService,
              private serviceCommande: CommandeService,
              private servicePanier: PanierService){}

  ngOnInit() {
    this.prodsList = [];
    this.service.getProduits().subscribe(posts => {
      this.prodsList = posts;
      console.log(posts);
    });
  }  

  addProduit() {
    console.log(this.prod, this.nom)
    this.service.postProds(this.prod).subscribe(result => {
      this.ngOnInit();
    });
  }

  getProduit(produit) {
    console.log(produit);
    this.prod = produit;
  }

  deleteProduit(id) {
    this.service.deleteProd(id).subscribe(() => {
      alert("Suppersion effectue avec succee");
      this.ngOnInit();
    });
  }
  
  editProduit() {
    this.service.editProd(this.prod).subscribe(() => {
      alert("Modification effectue avec succee");
      this.ngOnInit();
    })
  }

  addProdToCommande(produit: ProduitsModel) {
    this.serviceCommande.getCommande().subscribe(commds => {
      var cmd = commds.filter(x => x.prod.id === produit.id)[0];
      if (cmd !== undefined) {
        cmd.quantite = cmd.quantite + 1;
        cmd.dateCommande = new Date();
        cmd.prixCommande = +(cmd.prixCommande + produit.prix);
        this.serviceCommande.updateCommande(cmd).subscribe(rslt => {
          alert("Commande passer avec succee");
        })
      } else {
        var commd: CommandeModel = new CommandeModel();
        commd.dateCommande = new Date();
        commd.prixCommande = +produit.prix;
        commd.prod = produit;
        commd.quantite = 1;
        this.serviceCommande.addCommande(commd).subscribe(() => {
          alert("Commande passer avec succee");
        });
      }
    });
  }

  /*addProdPanier(produit: ProduitsModel) {
    this.panier.id = 1;
    this.servicePanier.getPanier().subscribe(panier => {
      this.listProds = panier.prods;
      this.listProds.push(produit);
      this.panier.prods = this.listProds;
      this.servicePanier.editPanier(this.panier).subscribe(result => {
        produit.quantite = produit.quantite - 1;
        this.service.editProd(produit).subscribe(() => {
          alert("Produit " + produit.nom + " ajouter au panier");
        })
      });
    });
  }*/

}
