import { Component, OnInit } from '@angular/core';
import { DatabaseService } from './database.service';
import { Email } from './email.model';
import { EmailService } from './emails.service';

@Component({
  selector: 'app-accrodian',
  templateUrl: './accrodian.component.html',
  styleUrls: ['./accrodian.component.css']
})
export class AccrodianComponent implements OnInit{
  emails: Email[] = [];



  constructor(private emailService: EmailService, private dbService:DatabaseService) {
    dbService.showData().subscribe((data: Email[])=>{
      console.log(data);
    })
  }
  
  ngOnInit(): void{
    
    this.dbService.showData().subscribe((data: Email[]) =>{
      console.log("data recieved");
      this.emails = data;
  })
    // this.emailService.getEmails().subscribe((data: any) => {
    //   console.log(data);
    //   this.emails = data;
      
    // })
   
    
    for (var email of this.emails) {
      this.emails.push(new Email(email));
    }
    // this.emailService.sendEmail().subscribe(data => {
    //   console.log(data);
    // })
    
  }
  
}
