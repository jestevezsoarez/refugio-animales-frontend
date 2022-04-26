import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from "../../models/user";
import { UserService } from '../../services/user.service';
import { GLOBAL } from "../../services/global";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  title: String = "Registro de Usuario";
  user: User;

  constructor( 
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {
      this.user = new User('', '', '', '', '', 'ROLE_USER', '');
   }

  ngOnInit(): void {
    this.userService.register();
  }

  onSubmit() {
    console.log(this.user);
  }

}
