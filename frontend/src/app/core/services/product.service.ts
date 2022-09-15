import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ApiService} from "./api.service";
import {ProductModel} from "../models/product.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ProductService{
  constructor(private http: HttpClient,
              private api: ApiService) { }

  baseUrl = this.api.baseUrl + "/products";


  getProducts() : Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(this.baseUrl);
  }

  getProduct(id: number) : Observable<ProductModel> {
    return this.http.get<ProductModel>(this.baseUrl + "/" + id);
  }

  deleteProduct(id: number) {
    console.log(this.baseUrl + "/" + id)
    return this.http.delete(this.baseUrl + "/" + id);
  }

  editProduct(product: { name: any; price: number; _id: any; description: any }) {
    return this.http.put(this.baseUrl + "/" + product._id, product);
  }

  addProduct(product: { name: any; price: number; _id: any; description: any }) {
    return this.http.post(this.baseUrl, product);
  }


}

