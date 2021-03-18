import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Product{
  
  id: number;
  images: string;
  name: string;
  price: number;
  amount: number;
}
@Injectable({
  providedIn: 'root'
})
export class CartService {
  data: Product[] = [
    
    {id:0, images: "/assets/p4.jpg", name: 'Cadbury', price: 5, amount: 1 },
    {id:1, images: "/assets/p5.jpg", name: 'Hershey', price: 7, amount: 1 },
    {id:2, images: "/assets/p6.jpg", name: 'KitKat', price: 3, amount: 1 },
    {id:3, images: "/assets/p9.png", name: 'Tonny', price: 6, amount: 1 },
  ];

  private cart = [];
  private cartItemCount = new BehaviorSubject(0);

  constructor() { }

  getProducts(){
    return this.data;
  }

  getCart(){
    return this.cart;
  }

  getCartItemCount(){
    return this.cartItemCount;
  }

  addProduct(product){
    let added = false;
    for (let p of this.cart){
      if (p.id === product.id){
        p.amount += 1;
        added = true;
        break;
      }
    }
    if (!added){
      this.cart.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }

  decreaseProduct(product){
    for (let [index, p] of this.cart.entries()){
      if (p.id === product.id){
        p.amount -= 1;
        if (p.amount == 0){
          this.cart.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }

  removeProduct(product){
    for (let [index, p] of this.cart.entries()){
      if (p.id === product.id){
        this.cartItemCount.next(this.cartItemCount.value - p.amount);
        this.cart.splice(index, 1);
      }
    }
  }
}