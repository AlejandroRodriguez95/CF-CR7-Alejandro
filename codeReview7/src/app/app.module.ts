import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { TravelsComponent } from './travels/travels.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { LoremComponent } from './lorem/lorem.component';
import { DestinationDetailsComponent } from './destination-details/destination-details.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BlogComponent,
    TravelsComponent,
    ShoppingCartComponent,
    LoremComponent,
    DestinationDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
