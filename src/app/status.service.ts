import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  private subject = new Subject<any>();
  private showAlertAfterRouteChange = false;
  constructor(private router: Router) {
    // clear alert message on route change
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (this.showAlertAfterRouteChange) {
          // only keep for a single location change
          this.showAlertAfterRouteChange = false;
        } else {
          // clear alert message
          this.subject.next();
        }
      }
    });
  }
//show alert message on sucess
  success(message: string, showAlertAfterRouteChange = false) {
    this.showAlertAfterRouteChange = showAlertAfterRouteChange;
    this.subject.next({ type: 'success', text: message });
  }
//show alert message on error
  error(message: string, showAlertAfterRouteChange = false) {
    this.showAlertAfterRouteChange = showAlertAfterRouteChange;
    this.subject.next({ type: 'error', text: message });
  }
//message retreival
  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
