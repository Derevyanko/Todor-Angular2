import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class GetUserinfoService{

    constructor(private http: Http) {}

    getUserInfo(uid) {
        return this.http.get('http://104.196.125.63:9000/api/finduser?id=' + uid)
            .map((resp: Response) => resp.json())
            .catch((error:any) =>{return Observable.throw(error);});
    }
}