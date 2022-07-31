import { Injectable } from '@angular/core';
import { config } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, delay, Observable, shareReplay } from 'rxjs';
import { GestionProductModel } from '../product-detail/model/gestion-product.interface';
import { ResponseWrapper } from '../product-detail/model/responseWrapper';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl: string = config.apiUrl;

  // private products = new BehaviorSubject<GestionProductModel.Product[]>([]);
  // public products$: Observable<GestionProductModel.Product[]> =
  // this.products.asObservable();

  constructor(private http: HttpClient) {
    //this.loadProducts();
  }

  getProductById(id: number): Observable<GestionProductModel.Product> {
    let url = this.baseUrl + id;

    return this.http
      .get<GestionProductModel.Product>(url)
      .pipe(delay(1000), shareReplay());
  }
}
