import { Component } from '@angular/core';
//import {FacebookService, FacebookInitParams, FacebookLoginResponse} from 'ng2-facebook-sdk';

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

	/*constructor(private fb: FacebookService) {
		let fbParams: FacebookInitParams = {
			appId: '221102408303069',
			xfbml: true,
			version: 'v2.6'
		};
		this.fb.init(fbParams);
	}

	loginFB() {
		this.fb.login()
			.then((res: FacebookLoginResponse) => {
				console.log('Logged in', res);
			})
			.catch(error => { console.log(error); });
	}*/
}