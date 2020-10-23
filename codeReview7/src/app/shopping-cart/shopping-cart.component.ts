import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})

export class ShoppingCartComponent implements OnInit {
  items: any;
  totalPrice: number;
  constructor(private cartService: CartService) { }


  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.totalPrice = this.cartService.getTotalPrice(this.items);
    console.log(this.totalPrice);
  }

}
