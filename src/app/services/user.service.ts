import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { GLOBAL } from './global';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    public url: string;
    public identity: any;
    public token: any;

    constructor(private _http: HttpClient) {
        this.url = GLOBAL.url; 
    }

    register(user_to_register: any){
        let params = JSON.stringify(user_to_register);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        
        return this._http.post(this.url + 'register', params, {headers:headers});
    }

    signup(user_to_login: any, gettoken = false) {
        if (gettoken != false) {
            user_to_login.gettoken = gettoken; // le añado la propiedad gettoken
        }

        let params = JSON.stringify(user_to_login);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url + 'login', params, {headers: headers});                    
    }

    getIdentity() {
        // si 'identity' no esta en el localStorage uso "[]"
        let identity = JSON.parse(localStorage.getItem('identity') || '{}');        
        
        if (identity != "undefined") {
            this.identity = identity;
        } else {
            this.identity = null;
        }

        return this.identity;
    }

    getToken() {
        let token = localStorage.getItem('token');

        if (token != "undefined") {
            this.token = token;
        } else {
            this.token = null;
        }

        return this.token;
    }

    updateUser(user_to_update: any) {
        let params = JSON.stringify(user_to_update);

        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                        .set('Authorization', this.getToken());

        return this._http.put(this.url + 'update-user/' + user_to_update._id, params, {'headers': headers});            
    }

    getKeepers() {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url + 'get-keepers', {headers: headers});
    }
}