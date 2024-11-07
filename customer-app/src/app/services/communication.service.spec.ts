import { TestBed } from '@angular/core/testing';
import { CommunicationService } from './communication.service';

describe('CommunicationService', () => {
  let service: CommunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set and get data correctly', (done) => {
    const testData = { customerId: 456, extraRoute: true };
    service.setData(testData);

    service.getData().subscribe((data) => {
      expect(data).toEqual(testData);
      done();
    });
  });
});
