import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

// Models
import { Animal } from '../../models/animal';
import { User } from 'src/app/models/user';

// Servicios
import { GLOBAL } from "../../services/global";
import { AnimalService } from '../../services/animal.service';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html'
})
export class AnimalDetailComponent implements OnInit {
  animal: Animal;
  url: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _animalService: AnimalService
    
  ) {
    this.url = GLOBAL.url;
    this.animal = new Animal('', '', '', 0, '', '');
   }

  ngOnInit(): void {    
    this.getAnimal();
  }

  getAnimal() {
    this._route.params.forEach((params: Params) => {
      let id = params['id'];

      this._animalService.getAnimal(id).subscribe(
        (response: any) => {
          if (!response.animal) {
            this._router.navigate(['/']);
          } else {
            this.animal = response.animal;            
            console.log(this.animal.user);            
          }
        },
        error => {
          console.log(<any>error);
          this._router.navigate(['/']);
        }
      )
    })
  }

}
