import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from '../../services/user.service';
import { UploadService } from '../../services/upload.service';
import { GLOBAL } from "../../services/global";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html'
})
export class UserEditComponent implements OnInit {
  title: string;
  user: User;
  identity: any;
  token: any;
  status: string = '';
  filesToUpload: Array<File> = [];
  url: string;

  constructor( private userService: UserService, private uploadService: UploadService ) {
    this.title = 'Update my Data';
    this.identity = this.userService.getIdentity();
    this.token = this.userService.getToken();
    this.user = this.identity;
    this.url = GLOBAL.url;
  }

  ngOnInit(): void {   
  }

  onSubmit() {
    this.userService.updateUser(this.user).subscribe(
      (response: any) => {
        if (!response.user) {
          this.status = 'error';
        } else {
          this.status = 'success';
          localStorage.setItem('identity', JSON.stringify(this.user));

          // subida de la imagen
          this.uploadService.makeFileRequest(this.url + 'upload-image-user/' + this.user._id, [], this.filesToUpload, this.token, 'image')
                .then((result: any) => {
                    this.user.image = result.image;
                    localStorage.setItem('identity', JSON.stringify(this.user));
                    console.log(this.user);
                    
                });
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
     console.log(this.filesToUpload);     
  }

}
