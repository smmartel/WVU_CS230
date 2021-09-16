import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accrodian',
  templateUrl: './accrodian.component.html',
  styleUrls: ['./accrodian.component.css']
})
export class AccrodianComponent implements OnInit {
  email_title:string = "Click Here for BIG MONEY";
  email_title2:string = "Not a Scam click here!";
  constructor() { }

  ngOnInit(): void {
  }

}
