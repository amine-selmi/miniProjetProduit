import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { GestionProduitComponent } from './components/gestion-produit/gestion-produit.component';
import { GestionPanierComponent } from './components/gestion-panier/gestion-panier.component';
import { APP_BASE_HREF } from '@angular/common';
import { GestionCommandeComponent } from './components/gestion-commande/gestion-commande.component';

@NgModule({
  declarations: [
    AppComponent,
    GestionProduitComponent,
    GestionPanierComponent,
    GestionCommandeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
