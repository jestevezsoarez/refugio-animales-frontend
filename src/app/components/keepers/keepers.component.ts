import { Component, OnInit } from '@angular/core';
import { fundido } from "../animation";

@Component({
  selector: 'app-keepers',
  templateUrl: './keepers.component.html',
  animations: [fundido]
})
export class KeepersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
