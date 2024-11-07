import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../../../services/communication.service';

@Component({
  selector: 'app-customer-extra',
  templateUrl: './customer-extra.component.html',
  styleUrls: ['./customer-extra.component.scss']
})
export class CustomerExtraComponent implements OnInit {
  customerId: number | undefined;

  constructor(private communicationService: CommunicationService) {}

  ngOnInit(): void {
    this.communicationService.getData().subscribe(data => {
      this.customerId = data.customerId;
    });
  }
}
