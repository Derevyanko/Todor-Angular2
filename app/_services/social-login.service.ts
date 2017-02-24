import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, Headers } from '@angular/http';
import { SocialLogin } from '../_models/social-login';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class SocialLoginService {

	constructor(private http: Http) { }

	postToken(obj: SocialLogin) {
		const body = JSON.stringify(obj);

		let headers = new Headers({
			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + obj.token
		});

		return this.http.post('http://104.196.125.63:9000/api/sendtoken', body, { headers: headers })
            .map((resp:Response)=>resp.json())
            .catch((error:any) =>{return Observable.throw(error);});
	}
}