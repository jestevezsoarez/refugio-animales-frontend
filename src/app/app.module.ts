import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Modules
import { ModuloEmailModule } from "./moduleEmail/moduloemail.module";
import { AdminModule } from "./admin/admin.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// Routes
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { KeepersComponent } from './components/keepers/keepers.component';
import { FormsModule } from '@angular/forms';
import { StoreComponent } from './components/store/store.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';

// Services
import { UserService } from './services/user.service';
import { UploadService } from './services/upload.service';
import { AnimalDetailComponent } from './components/animal-detail/animal-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AnimalsComponent,
    KeepersComponent,
    StoreComponent,
    RegisterComponent,
    LoginComponent,
    UserEditComponent,
    AnimalDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ModuloEmailModule,
    AdminModule,
    BrowserAnimationsModule   
  ],
  providers: [
    UserService,
    UploadService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
