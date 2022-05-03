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
  filesToUpload: Array<File> = [];

  constructor(
    private _activatedRoute:ActivatedRoute, 
    private _router: Router,
    private _userService: UserService,
    private _animalService: AnimalService,
    private _uploadService: UploadService
  ) {
      this.title = 'Add';
      this.animal = new Animal('','', '', 2017, '', '');
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
            if (!this.filesToUpload) {
              this._router.navigate(['/admin-panel/listado']);
            } else {
              // subida de la imagen
              this._uploadService.makeFileRequest(this.url + 'upload-image-animal/' + this.animal._id, [], this.filesToUpload, this.token, 'image')
              .then((result: any) => {
                  this.animal.image = result.image;
                  //console.log(this.animal);              
                  this._router.navigate(['/admin-panel/listado']);                  
              });
            }            
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

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    //console.log(this.filesToUpload);     
 }

}
