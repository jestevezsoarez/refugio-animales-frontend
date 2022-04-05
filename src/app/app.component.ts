import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'refugio-frontend';
  emailContact: string | null = '';

  ngOnInit(): void {
    this.emailContact = localStorage.getItem('emailContacto');
  }

  // Uso el Hook DoCheck para bindear el mail si este cambia
  ngDocheck(): void {
    this.emailContact = localStorage.getItem('emailContact');
  }
}
