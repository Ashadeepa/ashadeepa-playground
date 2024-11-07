// src/app/app.component.ts
import { Component } from '@angular/core';
import { CommunicationService } from './services/communication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  extraRouteEnabled = false;

  constructor(private communicationService: CommunicationService) {
    // Pass data to the CommunicationService
    this.communicationService.setData({ customerId: 456, extraRoute: true });

    // Track if extraRoute is enabled
    this.communicationService.getData().subscribe(data => {
      if (data && data.extraRoute) {
        this.extraRouteEnabled = true;
      }
    });
  }
}
