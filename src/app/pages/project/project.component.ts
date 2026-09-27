import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Product } from '../../models/product.model';
import { PRODUCTS, UPCOMING_PRODUCTS } from '../../models/products.data';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  products: Product[] = PRODUCTS;
  upcomingProducts: Product[] = UPCOMING_PRODUCTS;
  selectedProduct: Product;


  constructor() {
    AOS.init();
   }

  ngOnInit() {
    this.scrollToTop();
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }

  showDetails(product: Product) {
    this.selectedProduct = product;
  }

  closeDetails() {
    this.selectedProduct = undefined;
  }

}
