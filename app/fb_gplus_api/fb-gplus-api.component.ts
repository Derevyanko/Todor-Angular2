import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {FacebookService, FacebookInitParams, FacebookLoginResponse} from 'ng2-facebook-sdk';

/*import {Google} from 'ng2-cordova-oauth/core';
import {OauthBrowser} from 'ng2-cordova-oauth/platform/browser';*/

import {HttpAddUserService} from '../_services/http-add-user.service';
import {GeneratePwdService} from '../_services/generate-pwd.service';
import { AddUser } from '../_models/adduser';

@Component({
	selector: 'fb-gplus-api',
	template: `
		<div class="fb-gplus-api">
			<button type="submit" class="btn btn-fb" (click)="loginFB()">Log in with Facebook</button>
			<button type="submit" class="btn btn-gplus" (click)="loginGPlus()">Sign in with Google +</button>
		</div>
	`,
	providers: [HttpAddUserService, GeneratePwdService]
})
export class FbGplusApiComponent {

	/*private oauth: OauthBrowser = new OauthBrowser();
	private googleProvider: Google = new Google({
		clientId: 'CLIENT_ID_HERE',
		appScope: ['email']
	});
*/
	constructor(private fb: FacebookService,
				private httpReg: HttpAddUserService,
				private randomPas: GeneratePwdService,
				private router: Router) {
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
				if (res.status === 'connected') {
					console.log('We are connected.');
					let accessToken = res.authResponse.accessToken;
					this.fb.api('me?fields=id,name,email')
						.then(res => {
							let pwd = this.randomPas.generatePwd(8);
							console.log(pwd);
							console.log('fbUserInfo: ', res);
							let user: AddUser = new AddUser();
							user.username = res.name;
							user.email = res.email;
							user.password = pwd;
							user.confirmPassword = pwd;
							console.log('User: ', user);
							return user;
						})
						.then(obj => {
							console.log('User1: ', obj);
							this.httpReg.postData(obj)
								.subscribe(
									data => {
										alert("Log in success! Welcome " + data.username + "!");
										this.router.navigate(['/search']);
									},
									error => {
									  alert("Log in is not success. Repeat please.");
								});
						})
				} else if (res.status === 'not_authorized') {
					console.log('We are not logged in.');
				} else {
					console.log('We are not logged into Facebook.');
				}
			})
			.catch(error => { console.log(error); });
	}

	/*loginGPlus() {
		this.oauth.logInVia(this.googleProvider)
			.then(success => {
				console.log("RESULT: " + JSON.stringify(success));
			}, error => {
				console.log("ERROR: ", error);
			});
	}*/
}