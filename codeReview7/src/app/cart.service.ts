import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  constructor() { }

  addToCart(product){
    this.items.push(product);
  }
  
  getTotalPrice(items){
    let sum: number = 0;
    for(let x in items)
    {
      sum  += this.items[x].price;
    }

    if (sum > 200 && sum < 500){
      return sum*0.9;
    }
    else if(sum > 500){
      return sum*0.8;
    }
    else{
      return sum;
    }
  }


  getItems(){
    return this.items;
  }
  
  clearCart(){
    this.items = [];
    return this.items;
  }
}
