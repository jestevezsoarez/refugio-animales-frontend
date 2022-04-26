import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  title: String = "Registro de Usuario";
  user: User;
  status: string = '';

  constructor( 
    private _router: Router,
    private _route: ActivatedRoute,
    private _userService: UserService
  ) {
      this.user = new User('', '', '', '', '', 'ROLE_USER', '');
   }

  ngOnInit(): void {
  }

  onSubmit(registerForm: any) {
      this._userService.register(this.user).subscribe(
        (response: any) => {
          if (response.user && response.user._id ) {            
            this.status = "success";
            this.user = new User('', '', '', '', '', 'ROLE_USER', '');
            registerForm.reset();
          } else {            
            this.status = "error";
          }
        },
        (error: any) => {
          console.log(<any>error);
          
        }
      );
  }

}
