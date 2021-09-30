export class Email {
    author: string;
    subject: string;
    content: string;

    constructor({ author, subject, content }:
        { author: string, subject: string, content: string }) {
        this.author = author;
        this.subject = subject;
        this.content = content;
    }
}