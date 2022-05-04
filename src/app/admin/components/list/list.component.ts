import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

// Models
import { Animal } from '../../../models/animal';

// Servicios
import { GLOBAL } from "../../../services/global";
import { AnimalService } from '../../../services/animal.service';

@Component({
  selector: 'admin-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {

  title: string;  
  animal: Animal;
  url: string;
  status: string;
  animals: Animal[] = [];

  constructor(
    private _activatedRoute:ActivatedRoute, 
    private _router: Router,    
    private _animalService: AnimalService    
  ) {
      this.title = 'Listado de Animales';
      this.animal = new Animal('','', '', 2017, '', '');      
      this.url = GLOBAL.url;
      this.status = '';
   }
    

  ngOnInit(): void {
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

}
