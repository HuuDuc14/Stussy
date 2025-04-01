import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../user';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-customer-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './customer-login.component.html',
  styleUrl: './customer-login.component.css'
})
export class CustomerLoginComponent implements OnInit {

  userList: User[] = []
  email: string = ''
  password: string = ''

  constructor(private auth: AuthService, private user: UserService, private fb: FormBuilder) {

  }

  formRegister = new FormGroup({
    id: new FormControl<string>(''),
    name: new FormControl<string>('', [Validators.required]),
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    password: new FormControl<string>('', [Validators.required, Validators.minLength(6)])
  })

  ngOnInit(): void {
    this.user.getUserList().subscribe(res => {
      this.userList = res
    })

  }

  // register
  register: any
  showregister: any

  showRegister() {
    this.register = document.getElementById('register')
    this.showregister = document.getElementById('showRegister')
    if (this.register && this.showregister) {
      this.register.style = 'display: none'
      this.showregister.style = 'display: block'
    }
  }


  AddUser() {
    const newId = `customer_${this.userList.length + 1}`
    this.formRegister.controls['id'].setValue(newId)
    this.user.addUser(this.formRegister.value).subscribe(res => {
      this.ngOnInit()
    })

    this.register = document.getElementById('register')
    this.showregister = document.getElementById('showRegister')

    if (this.register && this.showregister) {
      this.register.style = 'display: block'
      this.showregister.style = 'display: none'
    }

  }


  // login
  flag: boolean = true
  onSubmit(form: NgForm) {
    this.userList.forEach(user => {
      if (form.controls['email'].value === user.email && form.controls['password'].value === user.password) {
        this.auth.loginCustomer()   
      }else{
        this.flag = false
      }
    })
  }

  // show pass
  showPassWord: boolean = false
  showPassword(){
    this.showPassWord = (!this.showPassWord)
  }
}
