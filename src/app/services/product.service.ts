import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(
    private http: HttpClient
  ) { }

  public getProducts(pages: number = 1, size:number = 4): Observable<Product[]> {
    return this.http.get<Product[]>(`http://localhost:3000/products?_pages=${pages}&_limit=${size}`)
  }
  public checkProduct(product: any): Observable<any> {
    return this.http.patch<Product>(`http://localhost:3000/products/${product.id}`,{checked: !product.checked})
  }
  public deleteProduct(product: Product) {
    return this.http.delete<Product>(`http://localhost:3000/products/${product.id}`)
  }
  public saveProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`http://localhost:3000/products`,product)
  }
  public searchProduct(keyword: string): Observable<Product[]> {
    return this.http.get<Product[]>(`http://localhost:3000/products?name_like=${keyword}`);
  }
}
