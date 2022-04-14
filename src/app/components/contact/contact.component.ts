import { Component, OnInit } from '@angular/core';
import { fundido } from "../animation";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  animations: [fundido]
})
export class ContactComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
  }

}
