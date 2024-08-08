import { Component, OnDestroy } from '@angular/core';
import { CommunicationService } from '../communication.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-component-two',
  standalone: true,
  imports: [],
  template: `<div>{{ receivedData }}</div>`,
})

export class ComponentTwoComponent  implements OnDestroy {
  receivedData: any;
  private subscription: Subscription;

  constructor(private communicationService: CommunicationService) {
    this.subscription = this.communicationService.receiveData().subscribe((data) => {
      this.receivedData = data;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

