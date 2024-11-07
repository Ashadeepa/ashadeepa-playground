
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { CommunicationService } from '../../services/communication.service';

const routes: Routes = [
  { path: '', component: CustomerInfoComponent } // default route for CustomerModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CustomerModule {
  constructor(private communicationService: CommunicationService) {
    // Subscribe to the communication service to check if additional routes should be added
    this.communicationService.getData().subscribe(data => {
      if (data && data.extraRoute) {
        routes.push({ path: 'extra', component: CustomerInfoComponent });
      }
    });
  }
}
