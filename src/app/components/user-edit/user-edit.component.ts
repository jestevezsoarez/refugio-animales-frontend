import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from '../../services/user.service';
import { GLOBAL } from "../../services/global";
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html'
})
export class UserEditComponent implements OnInit {
  title: string;
  user: User;
  identity: any;
  token: any;
  status: string = '';

  constructor( private userService: UserService ) {
    this.title = 'Update my Data';
    this.identity = this.userService.getIdentity();
    this.token = this.userService.getToken();
    this.user = this.identity;
  }

  ngOnInit(): void {
    
    
  }

  onSubmit() {
    this.userService.updateUser(this.user).subscribe(
      (response: any) => {
        if (!response.user) {
          this.status = 'error';
        } else {
          this.status = 'success';
          localStorage.setItem('identity', JSON.stringify(this.user));

          // subida de la imagen
        }
      },
      error => {
        var errorMessage = <any>error;
        if (errorMessage != null) {
          this.status = 'error';
        }
      }
    );
  }

}
