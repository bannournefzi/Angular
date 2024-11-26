// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ResidencesComponent } from './residences/residences.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },  // Default route
  { path: 'products', component: ProductComponent },  // Product route
  { path: 'residence', component: ResidencesComponent },  // Residence route
  { path: 'WishList', component: WishListComponent },
  { path: '==', component: NotFoundComponent },


  // Add other routes as needed
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Apply routing
  exports: [RouterModule]  // Export RouterModule for use throughout the app
})
export class AppRoutingModule { }
