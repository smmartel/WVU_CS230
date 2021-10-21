import { Component, OnInit } from '@angular/core';
import { Email } from './email.model';
import { EmailService } from './emails.service';
import { mock_emails } from './mock-emails';

@Component({
  selector: 'app-accrodian',
  templateUrl: './accrodian.component.html',
  styleUrls: ['./accrodian.component.css']
})
export class AccrodianComponent implements OnInit{
  emails: Email[] = [];
  

  constructor(private emailService: EmailService) {
    
  }
  ngOnInit(): void{
    this.emailService.getEmails().subscribe((data: Email[]) => {
      console.log(data);
      this.emails = data;
    })

    for (var email of this.emails) {
      this.emails.push(new Email(email));
    }
  }
}
