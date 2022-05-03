import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { GLOBAL } from "../../../services/global";

// Models
import { Animal } from '../../../models/animal';

// Servicios
import { UserService } from "../../../services/user.service";
import { UploadService } from '../../../services/upload.service';
import { AnimalService } from '../../../services/animal.service';

@Component({
  selector: 'admin-add',
  templateUrl: './add.component.html'
})
export class AddComponent implements OnInit {

  title: string;
  animal: Animal;
  identity: string;
  token: string;
  url: string;
  status: string;

  constructor(
    private _activatedRoute:ActivatedRoute, 
    private _router: Router,
    private _userService: UserService,
    private _animalService: AnimalService,
    private _uploadService: UploadService
  ) {
      this.title = 'Add';
      this.animal = new Animal('', '', 2017, '', '');
      this.identity = this._userService.getIdentity();
      this.token = this._userService.getToken();
      this.url = GLOBAL.url;
      this.status = '';
   }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.animal);
    this._animalService.addAnimal(this.token, this.animal).subscribe(
        (response: any) => {
          if (!response.animal) {
            this.status = 'error';
          } else {
            this.status = 'success';
            this.animal = response.animal;

            // subir imagen del animal
            this._router.navigate(['/admin-panel/listado']);
          }
        },
        error => {
          var errorMessage = <any>error;

          if (errorMessage != null) {
            this.status = 'error';
          }
        }
    );
  }

}
