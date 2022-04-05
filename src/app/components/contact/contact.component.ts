import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {

  emailContact: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  guardarEmail() {
    localStorage.setItem('emailContact', this.emailContact);    
  }
}
