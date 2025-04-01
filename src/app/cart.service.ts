import { Injectable } from '@angular/core';
import { ProductsService } from './products.service';
import { Cart } from './cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private product: ProductsService) { }

  private cartList: Cart[] = []

  getCartAll() {
    return this.cartList
  }


  addCart(formProduct: any, quantity: number){
    const itemCart = this.cartList.find(item => item.id == formProduct.id)
    if(itemCart){
      itemCart.quantity += quantity
    }
    else{
      this.cartList.push({
        id: formProduct.id,
        name: formProduct.productName,
        price: formProduct.price,
        quantity: quantity,
        imageUrl: formProduct.imageUrl
      })
    }
    if(formProduct){
      formProduct.stock -= quantity
    }
    
  }
}
