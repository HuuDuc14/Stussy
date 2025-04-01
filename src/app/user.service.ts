import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userList: User[] = []
  constructor(private http: HttpClient) { 
    this.getUserList().subscribe(res => {
      this.userList = res
    })
  }
  dbuserUrl = 'http://localhost:3001/user'

  getUserList(): Observable<User[]>{
    return this.http.get<User[]>(`${this.dbuserUrl}`)
  }

  addUser(formUser: any): Observable<User[]>{
    return this.http.post<User[]>(`${this.dbuserUrl}`,formUser)
  }

  getUserId(id: any){
    return this.http.get<User>(`${this.dbuserUrl}/${id}`)
  }

  DeleteUser(id: any): Observable<User[]>{
    return this.http.delete<User[]>(`${this.dbuserUrl}/${id}`)
  }
}