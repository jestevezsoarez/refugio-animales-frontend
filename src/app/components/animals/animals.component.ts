import { Component, OnInit } from '@angular/core';
import { fundido } from "../animation";

// Models
import { Animal } from '../../models/animal';

// Services
import { AnimalService } from '../../services/animal.service';
import { GLOBAL } from "../../services/global";

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  animations: [fundido]
})
export class AnimalsComponent implements OnInit {

  title: string = 'Animales del Refugio';
  animals: Animal[] = [];
  url: string = '';

  constructor(private _animalService: AnimalService) { }

  ngOnInit(): void {
    this.getAnimals();
    this.url = GLOBAL.url;
  }

  getAnimals() {
    this._animalService.getAnimals().subscribe(
      (response: any) => {
          if (!response.animals) {

          } else {
            //console.log(response.animals);            
            this.animals = response.animals;
          }
      },
      (error: any) => {
        console.log(<any>error);          
      }
    );
  }

}
