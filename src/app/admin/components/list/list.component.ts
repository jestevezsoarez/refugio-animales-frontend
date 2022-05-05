import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

// Models
import { Animal } from '../../../models/animal';

// Servicios
import { GLOBAL } from "../../../services/global";
import { AnimalService } from '../../../services/animal.service';
import { UserService } from '../../../services/user.service';

declare var $: any; // To avoid error in angular using $ of jquery

@Component({
  selector: 'admin-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {

  title: string;  
  animal: Animal;
  url: string;
  status: string;
  token: string;
  animals: Animal[] = [];

  constructor(
    private _activatedRoute:ActivatedRoute, 
    private _router: Router,    
    private _animalService: AnimalService,
    private _userService: UserService    
  ) {
      this.title = 'Listado de Animales';
      this.animal = new Animal('','', '', 2017, '', '');      
      this.url = GLOBAL.url;
      this.status = '';      
      this.token = this._userService.getToken();
   }
    

  ngOnInit(): void {
    this.getAnimals();
  }

  getAnimals() {
    this._animalService.getAnimals().subscribe(
      (response: any) => {
          if (!response.animals) {

          } else {
            this.animals = response.animals;
          }
      },
      error => {
        console.log(<any>error);          
      }
    );
  }

  deleteAnimal(id: string) {
    $('#myModal-' + id).modal('hide');   
    this._animalService.deleteAnimal(this.token, id).subscribe(
      (response: any) => {
        if (!response.animal) {
          alert('No existe el animal');
        }
        this.getAnimals();
      },
      error => {
        alert('Error en el servidor');
      }
    );
  }

}
