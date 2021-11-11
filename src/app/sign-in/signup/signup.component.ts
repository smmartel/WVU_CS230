import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from '../sign-in.service';
import { AuthResponse } from '../sign-inResponse.model';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent{
  private authObservable!: Observable<AuthResponse>
  constructor(private authService:AuthService) {

  }
  public onSubmit(data:NgForm)  {
    console.log("button clicked");
    console.log(data.value);
    this.authService.signup(data.value.email, data.value.password).subscribe((data:AuthResponse) => {
      console.log(data);
    }
    ,error => {
      console.log(error.error);
    });

    data.resetForm();
  }

}
