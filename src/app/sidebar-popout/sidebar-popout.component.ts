import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../accrodian/database.service';
import { Email } from '../accrodian/email.model';
import { EmailService } from '../accrodian/emails.service';

@Component({
  selector: 'app-sidebar-popout',
  templateUrl: './sidebar-popout.component.html',
  styleUrls: ['./sidebar-popout.component.css']
})
export class SidebarPopoutComponent implements OnInit {

  count: number = 0;
  constructor(private emailFormService: EmailService){
    
  }
  onUpdateUserInfo(data: Email){
   
    this.emailFormService.getEmails().subscribe(data => {
      this.count = data.length;
      console.log(this.count);
    })
    
    this.emailFormService.sendEmail(data, this.count).subscribe(data => {
      console.log("Updated info sent to backend");
    })
  }

  ngOnInit(): void {
  }

}
