import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../../services/communication.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  customerId: number | undefined;
  extraRouteEnabled: boolean = false;

  constructor(private communicationService: CommunicationService) {}

  ngOnInit(): void {
    this.communicationService.getData().subscribe(data => {
      this.customerId = data.customerId;
      this.extraRouteEnabled = !!data.extraRoute;
    });
  }
}
