import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { GLOBAL } from './global';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    public url: string;

    constructor(private _http: HttpClient) {
        this.url = GLOBAL.url; 
    }

    register(user_to_register: any){
        let params = JSON.stringify(user_to_register);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        
        return this._http.post(this.url + 'register', params, {headers:headers});
    }
}