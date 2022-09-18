import { Component, OnInit } from '@angular/core';
import {ClientsService} from "../core/services/clients.service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {ClientsModel} from "../core/models/clients.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductModel} from "../core/models/product.model";
import {ProductService} from "../core/services/product.service";

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent implements OnInit {
  client!:Observable<ClientsModel>
  refillForm!: FormGroup;
  products!: Observable<ProductModel[]>
  panier!: { id:number, quantity:number, name:string }[];
  constructor(private clientService : ClientsService,
              private productService : ProductService,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.client = this.clientService.getClient(this.route.snapshot.params['id']);
  this.products = this.productService.getProducts();

    this.refillForm = this.formBuilder.group({
      id: [null,[Validators.required]],
      amount: [null,[Validators.required]]
    });
  }

  refill() {
  this.clientService.refill(this.route.snapshot.params['id'], this.refillForm.value.amount).subscribe(rep => {
      console.log(rep);
    });
  }

  addToPanier( id: number, name: string) {
    if (this.panier == null) {
      this.panier = [];
    }
    if (this.panier.find(p => p.id == id) == null) {
      this.panier.push({id: id, quantity: 1, name: name});
    }
    else {
      this.panier.find(p => p.id == id)!.quantity++;
    }
  }

  addProduct(id: number) {
    this.panier.find(p => p.id == id)!.quantity++;
  }

  removeProduct(id: number) {
    if (this.panier.find(p => p.id == id)!.quantity > 1) {
      this.panier.find(p => p.id == id)!.quantity--;
    }
    else {
      this.panier = this.panier.filter(p => p.id != id);
    }
  }

  validerPanier() {
    this.clientService.achat(this.route.snapshot.params['id'], this.panier).subscribe(rep => {
      console.log(rep);
    });
  }
}
