import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClientsComponent} from "./clients/clients.component";
import {ProduitsComponent} from "./produits/produits.component";
import {OtherComponent} from "./other/other.component";
import {AccueilComponent} from "./accueil/accueil.component";
import {ClientDetailsComponent} from "./client-details/client-details.component";

const routes: Routes = [
  {path:"clients", component: ClientsComponent},
  {path:"produits", component: ProduitsComponent},
  {path:"other", component: OtherComponent},
  {path:"clients/:id", component: ClientDetailsComponent},
  {path:"", component: AccueilComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
