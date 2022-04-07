import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'guardar-email',
  templateUrl: './guardar-email.component.html'
})
export class GuardarEmailComponent implements OnInit {

  title: string = 'Guardar Email';
  emailContact: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  guardarEmail() {
    localStorage.setItem('emailContact', this.emailContact);    
  }

}
