import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mostrar-email',
  templateUrl: './mostrar-email.component.html'
})
export class MostrarEmailComponent implements OnInit {

  title: string = 'Mostrar Email';

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
