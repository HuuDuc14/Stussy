import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private router: Router) { }
  isAuthenticed: boolean = false

  loginAdmin(form: any){
    if(form.controls['email'].value == 'admin@gmail.com' && form.controls['password'].value == '123'){
      this.router.navigate(['dashboard'])
      this.isAuthenticed = true
    }else{
      alert('khong thanh cong')
      this.isAuthenticed = false
    }
  }



  loginCustomer(){
    this.router.navigate([''])
  }
}
