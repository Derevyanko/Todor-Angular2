import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, Headers } from '@angular/http';
import { User } from '../_models/user';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class HttpService{
    token: string;

    constructor(private http: Http) {}

    login(obj: User) {
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
                        }
                    },
                    err => reject(alert("Error"))
                );
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
                .catch(error => alert('Error'));
    }

    logout() {
        this.token = null;
        localStorage.removeItem('currentUser');
    }
}