import { Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { HomeComponent } from './home/home.component';
import { DetailsProductComponent } from './details-product/details-product.component';
import { AdminLoginComponent } from './auth/admin-login/admin-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerLoginComponent } from './auth/customer-login/customer-login.component';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
    {path:'', component: HomeComponent, title: 'home'},
    {path:'shop', component: ShopComponent, title: 'shop'},
    {path:'product/:id', component: DetailsProductComponent, title: 'details product'},
    {path:'admin', component: AdminLoginComponent, title: 'admin'},
    {path:'login', component: CustomerLoginComponent, title: 'login'},
    {path:'dashboard', component: DashboardComponent, title: 'dashboard', canActivate:[authGuard]},
];
