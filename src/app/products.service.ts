import { Injectable } from '@angular/core';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productsList: Product[] = []
  constructor(private http: HttpClient) {
    this.getProductsList().subscribe(res => {
      this.productsList = res
    }) 
  }
 
  dbUrl = 'http://localhost:3000/product'
  getProductsList(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.dbUrl}`)
  }
  
  AddProduct(formProduct: any): Observable<Product[]>{
    return this.http.post<Product[]>(`${this.dbUrl}`, formProduct)
  }
  getProductid(id: any){
    return this.http.get<Product>(`${this.dbUrl}/${id}`)
  }


  UpdateProduct(id: any, formProduct: any): Observable<Product[]> { 
    return this.http.put<Product[]>(`${this.dbUrl}/${id}`, formProduct) 
  } 

  DeleteProdut(id: any): Observable<Product[]>{
    return this.http.delete<Product[]>(`${this.dbUrl}/${id}`)
  }
  
}
