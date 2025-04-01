import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  productList: Product[] = []

  formProduct = new FormGroup({
    id: new FormControl<string>(''),
    productType: new FormControl<string>(''),
    productName: new FormControl<string>(''),
    price: new FormControl<number>(0),
    stock: new FormControl<number>(0),
    imageUrl: new FormControl<string>('')
  })

  constructor(private product: ProductsService) {

  }
  isNut: number = 1
  file: string = ''
  onChange(event: any) {
    let fileImg = event.target.files[0].name
    this.file = `./assets/images/${fileImg}`
    this.formProduct.controls.imageUrl.setValue(this.file)
  }

  ngOnInit(): void {
    this.product.getProductsList().subscribe(res => {
      this.productList = res
    })
  }

  Add() {
    const newId = `sanpham_${this.productList.length + 1}`
    this.formProduct.controls['id'].setValue(newId)
    this.product.AddProduct(this.formProduct.value).subscribe(res => {
      this.ngOnInit()
    })
  }


  Edit(id: any) {
    this.product.getProductid(id).subscribe(res => {
      this.formProduct.setValue(res)
      this.file = this.formProduct.controls.imageUrl.value ?? ''
    })

    console.log(this.file)

  }

  Update() {
    this.product.UpdateProduct(this.formProduct.controls['id'].value, this.formProduct.value).subscribe(res => {
      this.ngOnInit()
    })
  }
  Delete(id: any) {
    if (confirm('bạn chắc chắn muốn xóa')) {
      this.product.DeleteProdut(id).subscribe(res => {
        this.ngOnInit()
      })
    }

  }
}
