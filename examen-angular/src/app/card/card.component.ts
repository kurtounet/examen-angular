import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Ifruit } from '../../shared/entities';
import { ProduitService } from '../../shared/produit.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() product!:Ifruit;
  @Input() index?:number;
  // injecter le service
  produitsService = inject(ProduitService);

  quantite: number = 0;
  addToCart(product: Ifruit) {
    //chercher si le produit existe dans le panier
    const item = this.produitsService.cart.find((item) => item.id === product.id);
    // si le produit existe, on ajoute la quantite
    if (item) {
      item.quantite += this.quantite;
    } else {
      // sinon, on ajoute le produit au panier
      const productToAdd = { ...product, quantite: this.quantite };
      this.produitsService.addToCart(productToAdd);
    }  
    // on remet la quantite a 0
    this.quantite = 0;
  }
   
 
  incrementQuantity() {
    // increment de la quantite
    this.quantite++
    this.product.quantite=this.quantite; 
}
  decrementQuantity() { 
    // décrement de la quantite   
    if (this.quantite > 0) {
       this.quantite--;
      this.product.quantite=this.quantite;
    }      
  }
  
}
  
   
