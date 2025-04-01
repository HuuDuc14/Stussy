import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Product } from './product';
import { SearchService } from './search-service.service';
import { FormsModule } from '@angular/forms';
import { Cart } from './cart';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project';
  searching: string = '';
  cartList : Cart[] =[]
  constructor(private searchService: SearchService, private cart: CartService) { 
    this.cartList = cart.getCartAll()
  }

  itemCount(){
    let sum = 0 
    this.cartList.forEach(item => {
      sum += item.quantity
    })
    return sum
  }

  tang(id: any){
    this.cartList.find(item => {
      if(item.id == id){
        item.quantity += 1
      }
    })
  }
  giam(id: any){
    let index = this.cartList.findIndex(item => item.id == id)
    if(index !== -1){
      let item = this.cartList[index]
      item.quantity -= 1

      if(item.quantity == 0){
        this.cartList.splice(index, 1)
      }
    }
  }

  remove(id: any){
    let index = this.cartList.findIndex(item => item.id == id)
    if(index !== -1 ){
      this.cartList.splice(index, 1)
    }
  }

  total(){
    let sum = 0
    this.cartList.forEach(item => {
      sum += (item.price * item.quantity)
    })
    return sum
  }

  
  onSearchChange() {
    this.searchService.updateSearch(this.searching);
  }
}
