import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  title: string;
  user: User;
  identity: any;
  token: any;
  status: string = '';

  constructor(
      private router: Router,
      private activatedRoute: ActivatedRoute,
      private userService: UserService
  ) {
      this.title = 'Login de Usuario';
      this.user = new User('', '', '', '', '', '', ''); 
   }

  ngOnInit(): void {
      console.log(localStorage.getItem('identity'));
      console.log(localStorage.getItem('token'));                 
  }

  onSubmit(): void {
    // Loguear al usuario
    this.userService.signup(this.user).subscribe(
      (response: any) => {
        this.identity = response.user;

        if (!this.identity || !this.identity._id) {
          alert('El usuario no se ha logueado correctamente');
        } else {
          // Vacio el password porque se logueo correctamente
          //this.identity.password = '';          
          
          localStorage.setItem('identity', JSON.stringify(this.identity));         
          
          // Conseguir el token
          this.userService.signup(this.user, true).subscribe(
            (response: any) => {
              this.token = response.token;

              if (this.token.length <= 0) {
                alert('El token no se ha generado');
              } else {
                localStorage.setItem('token', this.token);
                this.status = 'success';
                //this.router.navigate(['/']);
                window.location.href="/"; // no me funciona el hook doCheck por eso hago un refresh
              }
            },
            error => {
              console.log(error);              
            }
          )
        }
      },
      error => {
        var errorMessage = error;
        if (errorMessage != null) {          
          this.status = 'error';
        }
      }
    );
  }

}
