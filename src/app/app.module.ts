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


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AnimalsComponent,
    KeepersComponent,
    StoreComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ModuloEmailModule,
    AdminModule,
    BrowserAnimationsModule   
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
