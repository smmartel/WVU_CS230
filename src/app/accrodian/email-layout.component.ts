import { Component, Input } from "@angular/core";

@Component({
    selector: 'email-layout',
    templateUrl: './email-layout.component.html',
    styleUrls: ['./email-layout.component.css']
})

export class EmailLayout {
    @Input()
    author!: string;
    @Input()
    subject!: string;
    @Input()
    content!: string;
}