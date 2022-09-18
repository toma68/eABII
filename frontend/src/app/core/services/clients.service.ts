import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {ClientsModel} from "../models/clients.model";
import {HttpClient} from "@angular/common/http";
import {ApiService} from "./api.service";
import {formatDate} from "@angular/common";

@Injectable({
  providedIn: "root"
})

export class ClientsService{
  constructor(private http: HttpClient,
              private api: ApiService) { }

  baseUrl = this.api.baseUrl + "/clients";

  getClients() : Observable<ClientsModel[]> {
    return this.http.get<ClientsModel[]>(this.baseUrl);
  }

  getClient(id: number) : Observable<ClientsModel> {
    return this.http.get<ClientsModel>(this.baseUrl + "/" + id);
  }

  deleteClient(id: number) {
    console.log(this.baseUrl + "/" + id)
    return this.http.delete(this.baseUrl + "/" + id);
  }

  editClient(client: { name: any; balance: number; _id: any; premium: any }) {
    return this.http.put(this.baseUrl + "/" + client._id, client);
  }

  addClient(name: string) {
    return this.http.post(this.baseUrl, {name: name});
  }

  isPremium(id : number) : Observable<any> {
    return this.http.get(this.baseUrl + "/isPremium/" + id);
  }

  refill(id: number, amount: number) {
    console.log(this.baseUrl + "/refill/" + id + "/" + amount);
    return this.http.put(this.baseUrl + "/refill/" + id, {amount: amount});
  }


  achat(id: number, panier: {id: number; quantity: number; name: string}[]) {
    return this.http.put(this.baseUrl + "/achat/" + id, {panier: panier});
  }
}
