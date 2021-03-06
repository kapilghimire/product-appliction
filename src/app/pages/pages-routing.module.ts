import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService as AuthGuard } from '../services/auth-guard.service';

import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AccountComponent } from './account/account.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'account', component: AccountComponent},
  // To get all products
  // Should have RouteGuard
  {
    path: 'products/all',
    component: ProductsComponent,
    canActivate: [AuthGuard],
  },
  // To get products of particular category
  // Should have RouteGuard
  {
    path: 'products/:category',
    component: ProductsComponent,
    canActivate: [AuthGuard],
  },
  // To get products being searched
  // Should have RouteGuard
  {
    path: 'products/search/:name',
    component: ProductsComponent,
    canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
