import { Component, OnInit } from '@angular/core';

declare var $: any; // To avoid error in angular using $ of jquery

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html'
})
export class StoreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $( "#txtJquery" ).hide();
    $( "#btnJquery" ).click( function() {
      $( "#txtJquery" ).slideToggle();
    })
  }

}
