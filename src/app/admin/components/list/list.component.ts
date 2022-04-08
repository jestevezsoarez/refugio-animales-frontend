import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {

  title: string = 'Listado';
  
  constructor() { }

  ngOnInit(): void {
  }

}
