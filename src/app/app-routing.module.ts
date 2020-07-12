import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestionProduitComponent } from './components/gestion-produit/gestion-produit.component';


const routes: Routes = [
  { path: 'panier', 
    component: GestionProduitComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
