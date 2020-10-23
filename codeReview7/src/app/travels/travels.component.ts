import { Component, OnInit } from '@angular/core';
import { locations } from '../locations';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.scss']
})
export class TravelsComponent implements OnInit {
locations = locations;
constructor(private route: ActivatedRoute, private cartService: CartService) { }

addToCart(location){
  this.cartService.addToCart(location);
}


  ngOnInit(): void {
  }

}
