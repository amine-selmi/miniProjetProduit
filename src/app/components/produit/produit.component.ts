import { Component, OnInit, Input, OnChanges, SimpleChanges, OnDestroy, Output, EventEmitter } from '@angular/core';
import { ProduitService } from 'src/app/services/produit.service';
import { ProduitsModel } from 'src/app/models/produit';
import { Subscription } from 'rxjs';
import { CommandeService } from 'src/app/services/commande.service';
import { CommandeModel } from 'src/app/models/commande';


@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit, OnChanges, OnDestroy {

  prodsList: ProduitsModel[];

  private subscription: Subscription[] = [];

  @Input() refreshListe: boolean;
  @Output() prod =  new EventEmitter<ProduitsModel>();
  @Output() refreshCom = new EventEmitter<boolean>();

  produit: ProduitsModel;

  constructor(private service: ProduitService,
              private serviceCommande: CommandeService) { }

  ngOnChanges(changes: SimpleChanges) {
    this.ngOnInit();
  }

  ngOnInit() {
    this.produit = new ProduitsModel();
    this.prodsList = [];
    this.subscription.push(this.service.getProduits().subscribe(posts => {
      this.prodsList = posts;
      console.log(posts);
    }));
  }

  ngOnDestroy() {
    this.subscription.forEach(sub => {
      sub.unsubscribe();
    })
  }

  editProduit(p) {
    this.produit = p;
    this.prod.emit(p);
  }

  deleteProd(idProd) {
    this.service.deleteProd(idProd).subscribe(() => {
      alert("Suppersion effectue avec succee");
      this.ngOnInit();
    });
  }

  addProdToCommande(produit: ProduitsModel) {
    produit.quantite = produit.quantite - 1;
    this.serviceCommande.getCommande().subscribe(commds => {
      var cmd = commds.filter(x => x.prod.id === produit.id)[0];
      if (cmd !== undefined) {
        cmd.quantite = cmd.quantite + 1;
        cmd.dateCommande = new Date();
        cmd.prixCommande = cmd.prixCommande + produit.prix;
        this.serviceCommande.updateCommande(cmd).subscribe(rslt => {
          this.service.editProd(produit).subscribe(() => {
            alert("Commande passer avec succee");
            this.refreshCom.emit(true);
          })
        })
      } else {
        var commd: CommandeModel = new CommandeModel();
        commd.dateCommande = new Date();
        commd.prixCommande = +produit.prix;
        commd.prod = produit;
        commd.quantite = 1;
        this.serviceCommande.addCommande(commd).subscribe(() => {
          this.service.editProd(produit).subscribe(() => {
            alert("Commande passer avec succee");
            this.refreshCom.emit(true);
          })
        });
      }
    });
  }
}
