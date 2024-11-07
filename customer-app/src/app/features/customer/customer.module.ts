import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { CustomerExtraComponent } from './customer-extra/customer-extra.component';
import { CustomerRoutingModule } from './customer-routing.module';

@NgModule({
  declarations: [CustomerComponent, CustomerExtraComponent],
  imports: [CommonModule, CustomerRoutingModule]
})
export class CustomerModule {}
