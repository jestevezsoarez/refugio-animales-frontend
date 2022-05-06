import { Component, OnInit } from '@angular/core';
import { fundido } from "../animation";

// Models
import { Animal } from '../../models/animal';

// Services
import { AnimalService } from '../../services/animal.service';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  animations: [fundido]
})
export class AnimalsComponent implements OnInit {

  animals: Animal[] = [];

  constructor(private _animalService: AnimalService) { }

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
      (error: any) => {
        console.log(<any>error);          
      }
    );
  }

}
