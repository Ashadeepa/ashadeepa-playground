import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { CustomerExtraComponent } from './customer-extra/customer-extra.component';
import { CustomerAuthGuard } from './customer-auth.guard';

const routes: Routes = [
  { path: '', component: CustomerComponent },
  { path: 'extra', component: CustomerExtraComponent, canActivate: [CustomerAuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule {}
