import { inject, Injectable } from '@angular/core';
import { mockFruits } from './mockFruits';
import { Ifruit } from './entities';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  arrayProduits = mockFruits;
  cart: Ifruit[] = [];

  getAllProduits(){
    return this.arrayProduits;
  }
  getCart(): Ifruit[] {
    return this.cart;
  }
  addToCart(product: Ifruit): void {
    
    // product.quantite += quantite;
    // console.log(product); 
    // let p = this.cart.findIndex((item) => item.id === product.id);
    // product.quantite = 1;
    // this.cart[p] = product;
    // }else{
      this.cart.push(product);
    // }   
     
    console.log(this.cart);
  }   
 

  removeItem(index: number): void {
    this.cart.splice(index, 1);
  }

  clearCart(){
   return this.cart = [];
  }
  



}
