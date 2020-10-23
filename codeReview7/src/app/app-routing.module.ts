import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { TravelsComponent } from './travels/travels.component';
import { DestinationDetailsComponent } from './destination-details/destination-details.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },{
    path: 'blog', component: BlogComponent
  },{
    path: 'cart', component: ShoppingCartComponent
  },{
    path: 'travels', component: TravelsComponent
  },
  {
    path: 'travels/:destinationId', component: DestinationDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
