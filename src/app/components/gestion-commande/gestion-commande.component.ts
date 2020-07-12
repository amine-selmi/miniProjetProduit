import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommandeService } from 'src/app/services/commande.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { CommandeModel } from 'src/app/models/commande';

@Component({
  selector: 'app-gestion-commande',
  templateUrl: './gestion-commande.component.html',
  styleUrls: ['./gestion-commande.component.css']
})
export class GestionCommandeComponent implements OnInit, OnChanges {

  constructor(private service: CommandeService) { }

  @Input() refreshComm: boolean;

  commandes: CommandeModel[];
  prixTotale: number = 0;

  ngOnInit() {
    this.service.getCommande().subscribe(cmds => {
      this.commandes = cmds;
      this.prixTotale = 0;
      for (var i=0 ; i < cmds.length ; i++) {
        this.prixTotale = this.prixTotale + cmds[i].prixCommande;
      }
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    setTimeout(() => {
     this.ngOnInit();
    })
  }

  deleteCommande(idCommande) {
    this.service.deleteCommande(idCommande).subscribe(()=>{
      alert("Suppresion commande effetctuer avec succes");
      this.ngOnInit();
    })
  }

}
