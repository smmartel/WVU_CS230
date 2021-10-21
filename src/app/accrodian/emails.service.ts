import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Email } from './email.model';

@Injectable({providedIn: 'root'})
export class EmailService{
    private baseUrl:string = 'https://app-603c9-default-rtdb.firebaseio.com/';
    private endPoint: string = 'emails.json';
    constructor(private http: HttpClient){

    }
    getEmails(){
        return this.http.get<Email[]>(this.baseUrl + this.endPoint);

    }

}
