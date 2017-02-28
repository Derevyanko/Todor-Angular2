import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, Headers } from '@angular/http';
import { User } from '../_models/user';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService{
    token: string;

    constructor(private http: Http) {}

    login(obj: User) {
        const body = JSON.stringify(obj);
        let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });

        return this.http.post('http://104.196.125.63:9000/api/signin', body, { headers: headers })
                .toPromise()
                .then(response => {
                    let token = response.json() && response.json().token;
                    if (token) {
                        this.token = token;
                        localStorage.setItem('currentUser', JSON.stringify({uid: obj.uid, token: token, auth: "native"}));
                        return true;
                    }
                });
    }

    logout() {
        this.token = null;
        localStorage.removeItem('currentUser');
    }
}