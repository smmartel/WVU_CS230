import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/compat/database";
import { Observable } from "rxjs";
import { Email } from "./email.model";

@Injectable({
    providedIn: 'root'
})
export class DatabaseService{
    items:Observable<Email[]>
    constructor(private db:AngularFireDatabase){
        console.log("setting up firebase communication");
        this.items = this.db.list<Email>('emails').valueChanges();
    }
    public showData(){
       return this.items
    }
}