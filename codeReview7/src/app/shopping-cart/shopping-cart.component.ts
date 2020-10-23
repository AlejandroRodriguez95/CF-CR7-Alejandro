import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})

export class ShoppingCartComponent implements OnInit {

  contact = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
  });
  items: any;
  totalPrice: number;
  constructor(private cartService: CartService) { }


  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.totalPrice = this.cartService.getTotalPrice(this.items);
  }

  submitForm() {
    window.alert(`${this.contact.value.firstname} has paid EUR ${this.totalPrice}. An email will not be sent to ${this.contact.value.email}`);
  }


}
