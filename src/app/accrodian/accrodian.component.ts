import { Component, OnInit } from '@angular/core';
import { Email } from './email.model';
import { mock_emails } from './mock-emails';

@Component({
  selector: 'app-accrodian',
  templateUrl: './accrodian.component.html',
  styleUrls: ['./accrodian.component.css']
})
export class AccrodianComponent {
  emails: Email[] = [];
  constructor() {
    for (var email of mock_emails) {
      this.emails.push(new Email(email));
    }
  }
}
