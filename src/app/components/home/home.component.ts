import { Component, OnInit } from '@angular/core';
import { fundido } from "../animation";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  animations: [fundido]
})
export class HomeComponent implements OnInit {

  title: string = 'Welcome to Refugio de Animales';

  constructor() { }

  ngOnInit(): void {
  }

}
