import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {

  title: string = 'Panel de Administración';

  constructor() { }

  ngOnInit(): void {
  }

}
