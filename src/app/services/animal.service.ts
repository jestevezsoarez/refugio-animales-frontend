import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { GLOBAL } from './global';

// Models
import { Animal } from '../models/animal';

@Injectable({
    providedIn: 'root'
})
export class AnimalService {
    public url: string;

    constructor(private _http: HttpClient) {
        this.url = GLOBAL.url; 
    }

    addAnimal(token: string, animal: Animal) {
        // Convierto el objeto javascript a un string json
        let params = JSON.stringify(animal);

        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                            .set('Authorization', token);

        return this._http.post(this.url + 'animal', params, {headers: headers});                            
    }

    getAnimals() {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url + 'animals', {headers: headers}); 
    }

    getAnimal(id: number) {
        let headers = new HttpHeaders().set('Content-Type', 'application/json'); 
        return this._http.get(this.url + 'animal/' + id, {headers: headers});
    }
}