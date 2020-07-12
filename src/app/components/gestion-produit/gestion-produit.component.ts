import { Component, OnInit, Output, EventEmitter, OnChanges, SimpleChanges, Input } from '@angular/core';
import { ProduitService } from 'src/app/services/produit.service';
import { ProduitsModel } from 'src/app/models/produit';
import { PanierModel } from 'src/app/models/panier';
import { PanierService } from 'src/app/services/panier.service';
import { CommandeService } from 'src/app/services/commande.service';
import { CommandeModel } from 'src/app/models/commande';

@Component({
  selector: 'app-gestion-produit',
  templateUrl: './gestion-produit.component.html',
  styleUrls: ['./gestion-produit.component.css']
})
export class GestionProduitComponent implements OnInit, OnChanges {


  @Output() refresh = new EventEmitter<boolean>();
  @Input() produit: ProduitsModel;

  prodsList: ProduitsModel[] = [];
  nom: string; 
  prod: ProduitsModel = new ProduitsModel();
  panier: PanierModel = new PanierModel();
  listProds: ProduitsModel[];
  mode = 'Ajouter '
  constructor(private service: ProduitService,
              private serviceCommande: CommandeService,
              private servicePanier: PanierService){}

  ngOnChanges(changes: SimpleChanges) {
    if (this.produit !== undefined){
      this.prod = this.produit;
      this.mode = 'Modifier ';
    } else {
      this.mode = 'Ajouter ';
    }
  }              

  ngOnInit() {
    
  }  

  addProduit() {
    if(this.produit !== undefined) {
      this.editProduit();
    } else {
    this.prod.prix = +this.prod.prix;
    this.service.postProds(this.prod).subscribe(result => {
      this.refresh.emit(true);
    });
    }
  }

  getProduit(produit) {
    console.log(produit);
    this.prod = produit;
  }

  
  editProduit() {
    this.service.editProd(this.prod).subscribe(() => {
      alert("Modification effectue avec succee");
      this.refresh.emit(true);
    })
  }

}
