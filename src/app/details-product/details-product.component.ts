import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { Product } from '../product';
import { Cart } from '../cart';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-details-product',
  standalone: true,
  imports: [],
  templateUrl: './details-product.component.html',
  styleUrl: './details-product.component.css'
})
export class DetailsProductComponent implements OnInit{

  constructor(private router: ActivatedRoute,private product: ProductsService, private cart: CartService){

  }

  productDetail : Product | undefined

  ngOnInit(): void {
    let id = this.router.snapshot.params['id']
    this.product.getProductid(id).subscribe(res => {
      this.productDetail = res
    })
    
  }

  Add(){
    this.cart.addCart(this.productDetail, 1)
  }


}
