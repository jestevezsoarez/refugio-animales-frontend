import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AnimalsComponent,
    KeepersComponent,
    StoreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)    
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
