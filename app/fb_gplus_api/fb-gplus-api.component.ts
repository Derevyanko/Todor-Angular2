import { Component } from '@angular/core';
import {FacebookService, FacebookInitParams, FacebookLoginResponse} from 'ng2-facebook-sdk';

@Component({
	selector: 'fb-gplus-api',
	template: `
		<div class="fb-gplus-api">
			<button type="submit" class="btn btn-fb" (click)="loginFB()">Log in with Facebook</button>
			<button type="submit" class="btn btn-gplus">Sign in with Google +</button>
		</div>
	`
})
export class FbGplusApiComponent {

	constructor(private fb: FacebookService) {
		let fbParams: FacebookInitParams = {
			appId: '219595158509433', // your-app-id
			xfbml: true,
			version: 'v2.6'
		};
		this.fb.init(fbParams);
	}

	loginFB() {
		this.fb.login()
			.then((res: FacebookLoginResponse) => {
				console.log('Logged in', res);
				if (res.status === 'connected') {
					// connect here with your server for facebook login by passing access token given by facebook
					console.log('We are connected.');
					let uid = res.authResponse.userID;
					let accessToken = res.authResponse.accessToken;
					console.log('userID: ', uid);
					console.log('accessToken: ', accessToken);
				} else if (res.status === 'not_authorized') {
					console.log('We are not logged in.');
				} else {
					console.log('We are not logged into Facebook.');
				}
			})
			.catch(error => { console.log(error); });
	}
}