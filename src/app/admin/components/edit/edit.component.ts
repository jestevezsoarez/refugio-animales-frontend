import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {

  title: string = 'Editar';

  constructor() { }

  ngOnInit(): void {
  }

}
