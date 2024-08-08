import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { Ifruit} from '../../shared/entities';
import { ProduitService } from '../../shared/produit.service';
import { CaltaxPipe } from '../../shared/pipes/caltax.pipe';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, CaltaxPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

 @Input() inProduct: Ifruit[] = [];
 @Output() outProduit: EventEmitter<number> = new EventEmitter();

  produitsService = inject(ProduitService);
  cart: Ifruit[] = [];
  ngOnInit(): void { 
   this.cart =this.produitsService.getCart(); 
  }
  removeItem(index: number): void {
    this.cart.splice(index, 1);
  }
  getTotalQuantity(): number {     
    return this.cart.reduce((total, item) => total + item.quantite, 0);
  }

  getTotalPrixHT(){
   
   return this.cart.reduce((total, item) => total + item.prixHT, 0);
  }

  getTotalPrixTTC(){
    let totalHT = this.cart.reduce((total, item) => total + item.prixHT, 0)
    let ttc = (totalHT*0.2)+totalHT ;
    
     return ttc;
  }
   clearCart(): void {
   this.cart = this.produitsService.clearCart();
  }
}