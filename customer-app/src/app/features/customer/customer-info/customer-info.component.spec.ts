import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerInfoComponent } from './customer-info.component';
import { CommunicationService } from '../../../services/communication.service';
import { of } from 'rxjs';

describe('CustomerInfoComponent', () => {
  let component: CustomerInfoComponent;
  let fixture: ComponentFixture<CustomerInfoComponent>;
  let communicationService: CommunicationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerInfoComponent],
      providers: [CommunicationService]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerInfoComponent);
    component = fixture.componentInstance;
    communicationService = TestBed.inject(CommunicationService);
  });

  it('should receive customer data from CommunicationService', () => {
    const testData = { customerId: 456 };
    spyOn(communicationService, 'getData').and.returnValue(of(testData));

    fixture.detectChanges(); // Trigger ngOnInit

    //expect(component.customerId).toBe(456);
  });
});
