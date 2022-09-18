import { Component, OnInit } from '@angular/core';
import {ProductService} from "../core/services/product.service";
import {ClientsModel} from "../core/models/clients.model";
import {Observable} from "rxjs";
import {ClientsService} from "../core/services/clients.service";
import {ProductModel} from "../core/models/product.model";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  clients!: Observable<ClientsModel[]>;

  constructor(private clientService: ClientsService) {
  }

  ngOnInit(): void {
    this.clients = this.clientService.getClients();
  }
}



