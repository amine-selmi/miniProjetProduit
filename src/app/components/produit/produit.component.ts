import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'src/app/services/produit.service';
import { ProduitsModel } from 'src/app/models/produit';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  prodsList: ProduitsModel[];
  
  constructor(private service: ProduitService) { }

  ngOnInit() {
    this.prodsList = [];
    this.service.getProduits().subscribe(posts => {
      this.prodsList = posts;
      console.log(posts);
    });
  }

}
