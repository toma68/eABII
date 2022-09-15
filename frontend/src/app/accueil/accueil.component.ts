import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {ProductModel} from "../core/models/product.model";
import {ProductService} from "../core/services/product.service";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  products!: Observable<ProductModel[]>;

  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();

  }


}
