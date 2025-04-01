import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit{
  userList: User[] = []
  constructor(private user: UserService){}
  ngOnInit(): void {
    this.user.getUserList().subscribe(res => {
      this.userList = res
    })
  }

  Delete(id: any){
    this.user.DeleteUser(id).subscribe(res => {
      this.ngOnInit()
    })
  }
}
