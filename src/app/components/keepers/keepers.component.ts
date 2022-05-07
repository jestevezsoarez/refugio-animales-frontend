import { Component, OnInit } from '@angular/core';
import { fundido } from "../animation";

// Models
import { User } from '../../models/user';

// Services
import { UserService } from '../../services/user.service';
import { GLOBAL } from "../../services/global";

@Component({
  selector: 'app-keepers',
  templateUrl: './keepers.component.html',
  animations: [fundido]
})
export class KeepersComponent implements OnInit {

  title: string = 'Listado de Cuidadores';
  keepers: User[] = [];
  url: string = '';

  constructor( private _userService: UserService ) { }

  ngOnInit(): void {
    this.getKeepers();
    this.url = GLOBAL.url;
  }

  getKeepers() {
    this._userService.getKeepers().subscribe(
      (response: any) => {

          if (!response.users) {
            console.log('No hay respuesta');            
          } else {                        
            this.keepers = response.users;
          }
      },
      (error: any) => {
        console.log(<any>error);          
      }
    );
  }

}
