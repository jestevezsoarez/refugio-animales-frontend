import { Component, DoCheck, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck{
  title: string;
  emailContact: string | null = '';
  public identity: any;
  public token: any;
  logged: boolean; 

  constructor(private userService: UserService, private router: Router) {
    this.title = 'Refugio de Animales';
    this.logged = false;          
  }

  ngOnInit() {    
    this.identity = this.userService.getIdentity();

    if (this.identity) {
      this.logged = true;
    }
  }

  // Uso el Hook DoCheck para bindear el mail si este cambia
  ngDoCheck(){       
    this.identity = this.userService.getIdentity();  
  }

  borrarEmail() {
    localStorage.removeItem('emailContact');
    this.emailContact = '';
  }

  logout() {
    localStorage.clear();
    this.identity = null;
    this.logged = false;
    this.router.navigate(['/']);
  }
}
