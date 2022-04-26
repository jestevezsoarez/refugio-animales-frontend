import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse, HttpHeaders } from "@angular/common/http";
//import 'rxjs/add/operator/map';
import { Observable } from "rxjs";
import { GLOBAL } from './global';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    public url: string;

    constructor(private _http: HttpClient) {
        this.url = GLOBAL.url; 
    }

    register(){
        console.log("Servicio funcionando");
        
    }
}