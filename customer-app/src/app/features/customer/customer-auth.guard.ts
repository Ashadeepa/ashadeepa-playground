import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CommunicationService } from '../../services/communication.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerAuthGuard implements CanActivate {

  constructor(private communicationService: CommunicationService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.communicationService.getData().pipe(
      map(data => {
        if (data.customerId) {
          return true;
        } else {
          this.router.navigate(['/customer']);
          return false;
        }
      })
    );
  }
}
