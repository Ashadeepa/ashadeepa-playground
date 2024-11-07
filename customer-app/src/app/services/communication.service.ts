import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
  private dataSubject = new BehaviorSubject<{ customerId?: number; extraRoute?: boolean }>({});

  setData(data: { customerId?: number; extraRoute?: boolean }) {
    this.dataSubject.next(data);
  }

  getData(): Observable<{ customerId?: number; extraRoute?: boolean }> {
    return this.dataSubject.asObservable();
  }
}
