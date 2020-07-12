import { Component, OnInit, Input, OnChanges, SimpleChanges, OnDestroy, Output, EventEmitter } from '@angular/core';
import { ProduitService } from 'src/app/services/produit.service';
import { ProduitsModel } from 'src/app/models/produit';
import { Subscription } from 'rxjs';

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

  produit: ProduitsModel;

  constructor(private service: ProduitService) { }

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
}
