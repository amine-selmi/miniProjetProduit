import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ProduitsModel } from '../models/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http: HttpClient) { }

  /**
   * methode de recuperation de la liste des produits
   */
  getProduits(): Observable<ProduitsModel[]> {
    return this.http.get<ProduitsModel[]>('http://localhost:3000/produits');
  }

  /**
   * 
   * @param produit methode d'ajout d'un produit
   */
  postProds(produit: ProduitsModel): Observable<ProduitsModel> {
    return this.http.post<ProduitsModel>('http://localhost:3000/produits',produit);
  }

  /**
   * 
   * @param produit methode de modification d'un produit
   */
  editProd(produit: ProduitsModel): Observable<ProduitsModel> {
    return this.http.put<ProduitsModel>('http://localhost:3000/produits/' + produit.id, produit);
  }

  /**
   * 
   * @param id methode suppression d'un produit
   */
  deleteProd(id: number) {
    return this.http.delete('http://localhost:3000/produits/' + id);
  }
}
