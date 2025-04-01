import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductListComponent } from "../product-list/product-list.component";
import { ProductsService } from '../products.service';
import { SearchService } from '../search-service.service';
import { query } from 'express';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [ProductListComponent,RouterLink],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent implements OnInit{
  products: Product[] = []
  filterProductList: Product[] = []

  constructor(private product: ProductsService, private search: SearchService){
    product.getProductsList().subscribe(res => {
      this.products = res
      this.filterProductList = this.products
    })
    
  }
  ngOnInit(): void {
    this.search.search$.subscribe(searching => this.filterResults(searching))
  }
  filterResults(searching: string){
    if(!searching){
      this.filterProductList = this.products
    }else{
      this.filterProductList = this.products.filter(list => list?.productName.toLowerCase().includes(searching.toLowerCase()))
    }
  }
  phanloai(loai: string){
    if(loai == 'all'){
      this.filterProductList = this.products
    }else{
      this.filterProductList = this.products.filter(list => list?.productType == loai)
    }
  }
}
