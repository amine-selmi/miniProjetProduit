import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestionProduitComponent } from './components/gestion-produit/gestion-produit.component';
import { ProduitComponent } from './components/produit/produit.component';
import { AppComponent } from './app.component';
import { GestionPanierComponent } from './components/gestion-panier/gestion-panier.component';


const routes: Routes = [
  { path: '', component: GestionPanierComponent},
  { path: 'panier', component: GestionProduitComponent},
  { path:"**", component: GestionPanierComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
