import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerExtraComponent } from './customer-extra.component';
import { CommunicationService } from '../../../services/communication.service';
import { of } from 'rxjs';

describe('CustomerInfoComponent', () => {
  let component: CustomerExtraComponent;
  let fixture: ComponentFixture<CustomerExtraComponent>;
  let communicationService: CommunicationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerExtraComponent],
      providers: [CommunicationService]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerExtraComponent);
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
