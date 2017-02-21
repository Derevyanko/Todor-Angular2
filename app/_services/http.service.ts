import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, Headers } from '@angular/http';
import { User } from '../_models/user';
import 'rxjs/add/operator/toPromise'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class HttpService{
    token: string;

    constructor(private http: Http) {}

    /*login(obj: User) {
        const body = JSON.stringify(obj);
        let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });

        let promise = new Promise((resolve, reject) => {
            this.http.post('http://104.196.125.63:9000/api/signin', body, { headers: headers })
                .subscribe(
                    resp => {
                        let token = resp.json() && resp.json().token;
                        if (token) {
                            this.token = token;
                            localStorage.setItem('currentUser', JSON.stringify({uid: obj.uid, token: token}));
                            resolve(true);
                        } else {
                            reject(new Error('Login or Password is not correct!'));
                        }
                    });
        });

        return promise
                .then(response => {
                    if (response) {
                        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
                        let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
                        this.http.post('http://104.196.125.63:9000/api/sendtoken', currentUser, { headers: headers })
                            .subscribe(
                                data => {
                                    if (data.status === 200) {
                                        console.log("Status OK");
                                    }
                                },
                                err => alert("Error")
                            );
                    }
                })
                .catch(error => alert('Error: ' + error.message));
    }*/

    login(obj: User) {
        const body = JSON.stringify(obj);
        let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });

        return this.http.post('http://104.196.125.63:9000/api/signin', body, { headers: headers })
                .toPromise()
                .then(response => {
                    let token = response.json() && response.json().token;
                    if (token) {
                        this.token = token;
                        localStorage.setItem('currentUser', JSON.stringify({uid: obj.uid, token: token}));
                        return true;
                    }
                })
                .then(bool => {
                    if (bool) {
                        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
                        return this.http.post('http://104.196.125.63:9000/api/sendtoken', currentUser, { headers: headers })
                    }
                })
                /*.then(data => {
                    if (data.status === 200) {
                        console.log("Status OK");
                    }
                })
                .catch(error => alert("Error: " + error));*/
    }

    logout() {
        this.token = null;
        localStorage.removeItem('currentUser');
    }
}