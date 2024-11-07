// src/app/features/customer/customer-info/customer-info.component.ts
import { Component, OnInit } from '@angular/core';
import {CommunicationService} from "../../../services/communication.service";

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.scss'],
  standalone: true,
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
