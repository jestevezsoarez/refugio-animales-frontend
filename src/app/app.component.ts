import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Refugio de Animales';
  emailContact: string | null = '';

  ngOnInit(): void {
    this.emailContact = localStorage.getItem('emailContact');
  }

  // Uso el Hook DoCheck para bindear el mail si este cambia
  ngDoCheck(): void {
    this.emailContact = localStorage.getItem('emailContact');
  }

  borrarEmail() {
    localStorage.removeItem('emailContact');
    this.emailContact = '';
  }
}
