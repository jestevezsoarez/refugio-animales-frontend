import { Routes } from '@angular/router';
import { AnimalsComponent } from './components/animals/animals.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { KeepersComponent } from './components/keepers/keepers.component';
import { StoreComponent } from './components/store/store.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'animals', component: AnimalsComponent },
    { path: 'keepers', component: KeepersComponent },
    { path: 'store', component: StoreComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', component: HomeComponent }    
];