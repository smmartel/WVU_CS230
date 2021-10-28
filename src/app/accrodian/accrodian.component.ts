import { Component, OnInit } from '@angular/core';
import { Email } from './email.model';
import { EmailService } from './emails.service';

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
    
    
    this.emailService.getEmails().subscribe((data: any) => {
      console.log(data);
      this.emails = data;
      
    })
    
    for (var email of this.emails) {
      this.emails.push(new Email(email));
    }
    // this.emailService.sendEmail().subscribe(data => {
    //   console.log(data);
    // })
    
  }
  
}
