import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  private dataSubject = new Subject<any>();
  sendData(data: any) {
    this.dataSubject.next(data);
  }
  receiveData() {
    return this.dataSubject.asObservable();
  }
}
