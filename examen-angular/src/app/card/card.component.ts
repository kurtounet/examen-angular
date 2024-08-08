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
  
  produitsService = inject(ProduitService);

  quantite: number = 0;
  addToCart(product: Ifruit) {
    this.produitsService.addToCart(product);
    this.quantite = 0;
  }
 
  incrementQuantity() {
    this.quantite++
    this.product.quantite=this.quantite;     
    console.log(this.product?.quantite);       

    }
  decrementQuantity() {     
    if (this.quantite > 0) {
       this.quantite--;
      this.product.quantite=this.quantite;
    }
     console.log(this.product?.quantite);
  }
  
  
}
  
   
