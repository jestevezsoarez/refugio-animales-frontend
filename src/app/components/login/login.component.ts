import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  title: string;
  user: User;

  constructor(
      private router: Router,
      private activatedRoute: ActivatedRoute
  ) {
      this.title = 'Login de Usuario';
      this.user = new User('', '', '', '', '', 'ROLE_USER', '');
   }

  ngOnInit(): void {
        
  }

  onSubmit(): void {
    console.log(this.user);
  }

}
