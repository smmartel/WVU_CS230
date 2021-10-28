import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Email } from './email.model';
import { AccrodianComponent } from "./accrodian.component";



@Injectable({providedIn: 'root'})
export class EmailService{
    private baseUrl:string = 'https://app-603c9-default-rtdb.firebaseio.com/';
    private endPoint: string = 'emails'; 
    private counter: number | undefined;
    constructor(private http: HttpClient){
    }
    
    getEmails(){

        return this.http.get<Email[]>(this.baseUrl + this.endPoint + '.json');

    }
    
   

    sendEmail(data:Email, counter: number){

        console.log(counter);
        
        
        return this.http.put<Email>(this.baseUrl + this.endPoint + '/' + counter + '.json', data);
        
    }

}
