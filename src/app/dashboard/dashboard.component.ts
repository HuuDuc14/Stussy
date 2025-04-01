import { Component } from '@angular/core';
import { ProductListComponent } from "../product-list/product-list.component";
import { UserListComponent } from "../user-list/user-list.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ProductListComponent, UserListComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
