import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from "../../models/user";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  title: String = "Registro de Usuario";
  user: User;

  constructor( 
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
      this.user = new User('', '', '', '', '', 'ROLE_USER', '');
   }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.user);
  }

}
