import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from '../../services/user.service';
import { GLOBAL } from "../../services/global";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html'
})
export class UserEditComponent implements OnInit {
  title: string;
  user: User;
  identity: any;
  token: any;

  constructor( private userService: UserService ) {
    this.title = 'Actualizar mis datos';
    this.identity = this.userService.getIdentity();
    this.token = this.userService.getToken();
    this.user = this.identity;
  }

  ngOnInit(): void {
    
    
  }

}
