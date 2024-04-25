import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryComponentsComponent as DeliveryComponent } from './components/delivery-components/delivery-components.component';
import { DeliveryDateComponent } from './components/delivery-date/delivery-date.component';

const routes: Routes = [

  {
    path : 'createDelivery',
    component : DeliveryComponent
  },
  {
    path : 'dateDelivery',
    component :DeliveryDateComponent
  },
  {
    path : '**',
    component:DeliveryComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
