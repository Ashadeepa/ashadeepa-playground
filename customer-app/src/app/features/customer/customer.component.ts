// src/app/features/customer/customer-info/customer-info.component.ts
import { Component, OnInit } from '@angular/core';
import {CommunicationService} from "../../services/communication.service";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  standalone: true,
  styleUrls: ['./customer.component.scss']
})
export class CustomerInfoComponent implements OnInit {
  customerId: number | null = null;

  constructor(private communicationService: CommunicationService) {}

  ngOnInit(): void {
    this.communicationService.getData().subscribe(data => {
      if (data) {
        this.customerId = data.customerId;
        console.log('Customer ID:', this.customerId);
      }
    });
  }
}
