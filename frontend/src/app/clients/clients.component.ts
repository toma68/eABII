import { Component, OnInit } from '@angular/core';
import {ProductService} from "../core/services/product.service";
import {ClientsModel} from "../core/models/clients.model";
import {Observable} from "rxjs";
import {ClientsService} from "../core/services/clients.service";
import {ProductModel} from "../core/models/product.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  clients!: Observable<ClientsModel[]>;
  addClient!: FormGroup
  constructor(private clientService: ClientsService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.clients = this.clientService.getClients();

    this.addClient = this.formBuilder.group({
      name: [null, [Validators.required]]
    });
  }

  addClientAction() {
    console.log(this.addClient.value)
    this.clientService.addClient(this.addClient.value.name).subscribe(rep => {
      this.clients = this.clientService.getClients();
    });
  }


}



