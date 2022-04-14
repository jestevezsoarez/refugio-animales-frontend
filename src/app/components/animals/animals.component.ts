import { Component, OnInit } from '@angular/core';
import { fundido } from "../animation";

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  animations: [fundido]
})
export class AnimalsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
