import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from "@angular/animations";

declare var $: any; // To avoid error in angular using $ of jquery

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  animations: [
    trigger('marcar', [
      state('inactive', style({
        border: '5px solid #ccc'
      })),
      state('active', style({
        border: '5px solid yellow',
        background: 'red',
        borderRadius: '50px',
        transform: 'scale(1.2)'
      })),
      transition('inactive => active', animate('300ms linear')),
      transition('active => inactive', animate('300ms linear'))
    ])
  ]
})
export class StoreComponent implements OnInit {

  state: string;

  constructor() {
    this.state = 'inactive';
   }

  ngOnInit(): void {
    $("#txtJquery").hide();
    $("#btnJquery").click( function() {
      $("#txtJquery").slideToggle();
    })

    $("#caja").dotdotdot({});
  }

  cambiarEstado() {
    if (this.state == 'active')
      this.state = 'inactive';
    else
      this.state = 'active';
  }

}
