import { Routes } from '@angular/router';
import { AnimalsComponent } from './components/animals/animals.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { KeepersComponent } from './components/keepers/keepers.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'animals', component: AnimalsComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'keepers', component: KeepersComponent },
    { path: '**', component: HomeComponent }    
];