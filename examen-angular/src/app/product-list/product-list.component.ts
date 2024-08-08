import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Ifruit } from '../../shared/entities';
import { ProduitService } from '../../shared/produit.service';
import { CaltaxPipe } from '../../shared/pipes/caltax.pipe';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, CaltaxPipe],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']  
})
export class ProductListComponent implements OnInit {

  @Input() inProduct: Ifruit[] = [];
  @Output() outProduit: EventEmitter<number> = new EventEmitter();
// injecte le service
  produitsService = inject(ProduitService);
  cart: Ifruit[] = [];

 
  ngOnInit(): void {
    // récupere le panier
    this.cart = this.produitsService.getCart();
  }

   

  removeItem(index: number): void {
    // supprime le produit dans le panier a la position index
    this.cart.splice(index, 1);
  }

  getTotalQuantity(): number {
    // additionne la quantite de chaque produit
    return this.cart.reduce((total, item) => total + item.quantite, 0);
  }

  getTotalPrixHT() {    
    // additionne le prix HT de chaque produit 
     return this.cart.reduce((total, item) => total + (item.prixHT * item.quantite), 0);
  }

  getTotalPrixTTC() {
    // additionne le prix HT de chaque produit
    let totalHT = this.cart.reduce((total, item) => total + (item.prixHT * item.quantite), 0);
    // calcule le prix TTC
    let ttc = (totalHT * 0.2) + totalHT;
    return ttc;
  }
// remet le panier a 0
  clearCart(): void {
    this.cart = this.produitsService.clearCart();
  }
}
