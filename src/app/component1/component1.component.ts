import { Component } from '@angular/core';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-component-one',
  standalone: true,
  imports: [],
  template: `
    <button (click)="send()">Send Data from Component One</button>
  `,
})

export class ComponentOneComponent {
  constructor(private communicationService: CommunicationService) {}

  send() {
    this.communicationService.sendData('Hello from Component One!');
  }
}
