import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ProduitsModel } from '../models/produit';
import { PanierModel } from '../models/panier';



@Injectable({
  providedIn: 'root'
})
export class PanierService {

  constructor(private http: HttpClient) { }

  getPanier(): Observable<PanierModel> {
    return this.http.get<PanierModel>('http://localhost:3000/panier');
  }

  editPanier(panier: PanierModel): Observable<PanierModel> {
    return this.http.put<PanierModel>('http://localhost:3000/panier', panier);
  }


}
