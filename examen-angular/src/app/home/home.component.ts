import { Component, inject, OnInit } from '@angular/core';
import { ProduitService } from '../../shared/produit.service';
import { Ifruit} from '../../shared/entities';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from '../product-list/product-list.component';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,ProductListComponent, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  produitsService = inject(ProduitService);
  arrayProduct: Ifruit[] =[]; 
   ngOnInit():void {
    // récupère tous les produits
   this.arrayProduct = this.produitsService.getAllProduits();
   }
   /*
  addToCart(product: Ifruit){    
    this.produitsService.addToCart(product);
  }
  
  removeItem(index: number): void {
    this.arrayProduct.splice(index, 1);
  }

  updateProduct(event: any){
    console.log(event.target.value?.id);
     
   // this.produitsService.addToCart(item);
  }*/

  
}
