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
  selector: 'admin-edit',
  templateUrl: '../add/add.component.html'
})
export class EditComponent implements OnInit {

  title: string;
  animal: Animal;
  identity: string;
  token: string;
  url: string;
  status: string;
  filesToUpload: Array<File> = [];
  is_edit: boolean = true;

  constructor(
    private _route:ActivatedRoute, 
    private _router: Router,
    private _userService: UserService,
    private _animalService: AnimalService,
    private _uploadService: UploadService
  ) {
      this.title = 'Editar';
      this.animal = new Animal('','', '', 2017, '', '');
      this.identity = this._userService.getIdentity();
      this.token = this._userService.getToken();
      this.url = GLOBAL.url;
      this.status = '';
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
            console.log(this.animal);            
          }
        },
        (error: any) => {
          console.log(<any>error);
          this._router.navigate(['/']);
        }
      )
    });
  }

  onSubmit() {
    let id = this.animal._id;
    this._animalService.editAnimal(this.token, id, this.animal).subscribe(
        (response: any) => {
          if (!response.animal) {
            this.status = 'error';
          } else {
            this.status = 'success';
            this.animal = response.animal;
            console.log(this.animal);            

            // subir imagen del animal
            if (!this.filesToUpload) {
              this._router.navigate(['/animal', this.animal._id]);
            } else {
              // subida de la imagen
              this._uploadService.makeFileRequest(this.url + 'upload-image-animal/' + this.animal._id, [], this.filesToUpload, this.token, 'image')
              .then((result: any) => {
                  this.animal.image = result.image;
                  //console.log(this.animal);              
                  this._router.navigate(['/animal', this.animal._id]);                  
              });
            }            
          }
        },
        (error: any) => {
          var errorMessage = <any>error;

          if (errorMessage != null) {
            this.status = 'error';
          }
        }
    );
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;         
 }

}
